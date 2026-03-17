import type { FileNode, RepoInfo } from "./types";
import { getLanguage, getExtension } from "./scanner/index";

const GITHUB_API = "https://api.github.com";
const MAX_FILE_SIZE = 100_000; // 100KB max for content fetching
const KEY_FILE_LIMIT = 30;

interface GitHubTreeItem {
  path: string;
  mode: string;
  type: "blob" | "tree";
  sha: string;
  size?: number;
  url: string;
}

export function parseGitHubUrl(url: string): { owner: string; name: string } | null {
  const patterns = [
    /github\.com\/([^/]+)\/([^/\s#?]+)/,
    /^([^/\s]+)\/([^/\s]+)$/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return { owner: match[1], name: match[2].replace(/\.git$/, "") };
    }
  }
  return null;
}

function headers(token?: string): Record<string, string> {
  const h: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "SystemScope-Audit",
  };
  if (token) h.Authorization = `Bearer ${token}`;
  return h;
}

export async function fetchRepoInfo(
  owner: string,
  name: string,
  token?: string
): Promise<RepoInfo> {
  const res = await fetch(`${GITHUB_API}/repos/${owner}/${name}`, {
    headers: headers(token),
  });

  if (!res.ok) {
    if (res.status === 404) throw new Error("Repository not found. Check the URL or make sure it's public.");
    if (res.status === 403) throw new Error("GitHub API rate limit exceeded. Please add a GitHub token.");
    throw new Error(`GitHub API error: ${res.status}`);
  }

  const data = await res.json();
  return {
    owner,
    name,
    fullName: data.full_name,
    description: data.description,
    language: data.language,
    stars: data.stargazers_count,
    forks: data.forks_count,
    defaultBranch: data.default_branch,
    url: data.html_url,
  };
}

export async function fetchRepoTree(
  owner: string,
  name: string,
  branch: string,
  token?: string
): Promise<FileNode[]> {
  const res = await fetch(
    `${GITHUB_API}/repos/${owner}/${name}/git/trees/${branch}?recursive=1`,
    { headers: headers(token) }
  );

  if (!res.ok) throw new Error(`Failed to fetch repo tree: ${res.status}`);

  const data = await res.json();
  const tree: GitHubTreeItem[] = data.tree ?? [];

  return tree
    .filter((item) => !isIgnoredPath(item.path))
    .map((item) => ({
      path: item.path,
      name: item.path.split("/").pop() ?? item.path,
      type: item.type === "tree" ? "dir" as const : "file" as const,
      size: item.size ?? 0,
      extension: item.type === "blob" ? getExtension(item.path) : null,
      language: item.type === "blob" ? getLanguage(item.path) : null,
    }));
}

export async function fetchKeyFiles(
  owner: string,
  name: string,
  files: FileNode[],
  token?: string
): Promise<Map<string, string>> {
  const contents = new Map<string, string>();
  const keyFiles = selectKeyFiles(files);

  const fetches = keyFiles.map(async (file) => {
    try {
      const res = await fetch(
        `${GITHUB_API}/repos/${owner}/${name}/contents/${file.path}`,
        { headers: headers(token) }
      );
      if (!res.ok) return;

      const data = await res.json();
      if (data.encoding === "base64" && data.content) {
        const decoded = Buffer.from(data.content, "base64").toString("utf-8");
        contents.set(file.path, decoded);
      }
    } catch {
      // Skip files that fail to fetch
    }
  });

  await Promise.all(fetches);
  return contents;
}

function selectKeyFiles(files: FileNode[]): FileNode[] {
  const priority: FileNode[] = [];
  const codeFiles: FileNode[] = [];

  for (const file of files) {
    if (file.type !== "file") continue;
    if (file.size > MAX_FILE_SIZE) continue;

    const name = file.name.toLowerCase();
    const path = file.path.toLowerCase();

    if (
      name === "package.json" ||
      name === "requirements.txt" ||
      name === "cargo.toml" ||
      name === "go.mod" ||
      name === "pyproject.toml" ||
      name.includes("readme")
    ) {
      priority.push(file);
      continue;
    }

    if (
      name === "docker-compose.yml" ||
      name === "docker-compose.yaml" ||
      name === "dockerfile" ||
      path.includes(".github/workflows")
    ) {
      priority.push(file);
      continue;
    }

    const lang = file.language;
    if (lang && !["JSON", "YAML", "TOML", "Markdown"].includes(lang)) {
      codeFiles.push(file);
    }
  }

  const sortedCode = codeFiles.sort((a, b) => {
    const aEntry = isEntryFile(a.path) ? -1 : 0;
    const bEntry = isEntryFile(b.path) ? -1 : 0;
    if (aEntry !== bEntry) return aEntry - bEntry;
    const aDepth = a.path.split("/").length;
    const bDepth = b.path.split("/").length;
    return aDepth - bDepth;
  });

  return [...priority, ...sortedCode].slice(0, KEY_FILE_LIMIT);
}

function isEntryFile(path: string): boolean {
  const name = path.split("/").pop() ?? "";
  return [
    "index.ts", "index.tsx", "index.js", "main.ts", "main.py",
    "app.ts", "app.tsx", "app.py", "server.ts", "server.js",
    "main.go", "main.rs", "lib.rs",
  ].includes(name);
}

const IGNORED_SEGMENTS = new Set([
  "node_modules", ".git", ".next", "__pycache__", ".venv",
  "venv", "dist", "build", ".cache", "coverage", ".turbo",
  "target", ".idea", ".vscode",
]);

function isIgnoredPath(path: string): boolean {
  return path.split("/").some((segment) => IGNORED_SEGMENTS.has(segment));
}
