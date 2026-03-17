const EXTENSION_MAP: Record<string, string> = {
  ".ts": "TypeScript",
  ".tsx": "TypeScript",
  ".js": "JavaScript",
  ".jsx": "JavaScript",
  ".mjs": "JavaScript",
  ".cjs": "JavaScript",
  ".py": "Python",
  ".rb": "Ruby",
  ".go": "Go",
  ".rs": "Rust",
  ".java": "Java",
  ".kt": "Kotlin",
  ".swift": "Swift",
  ".cs": "C#",
  ".cpp": "C++",
  ".c": "C",
  ".h": "C",
  ".hpp": "C++",
  ".php": "PHP",
  ".vue": "Vue",
  ".svelte": "Svelte",
  ".dart": "Dart",
  ".scala": "Scala",
  ".r": "R",
  ".sql": "SQL",
  ".sh": "Shell",
  ".bash": "Shell",
  ".zsh": "Shell",
  ".ps1": "PowerShell",
  ".css": "CSS",
  ".scss": "SCSS",
  ".sass": "SASS",
  ".less": "LESS",
  ".html": "HTML",
  ".htm": "HTML",
  ".xml": "XML",
  ".yaml": "YAML",
  ".yml": "YAML",
  ".json": "JSON",
  ".toml": "TOML",
  ".md": "Markdown",
  ".mdx": "MDX",
  ".graphql": "GraphQL",
  ".gql": "GraphQL",
  ".proto": "Protobuf",
  ".tf": "Terraform",
  ".lua": "Lua",
  ".ex": "Elixir",
  ".exs": "Elixir",
  ".erl": "Erlang",
  ".zig": "Zig",
  ".nim": "Nim",
};

const CONFIG_PATTERNS = [
  "package.json",
  "tsconfig.json",
  "tailwind.config",
  "next.config",
  "vite.config",
  "webpack.config",
  "rollup.config",
  "babel.config",
  ".babelrc",
  "jest.config",
  "vitest.config",
  ".eslintrc",
  "eslint.config",
  ".prettierrc",
  "prettier.config",
  "pyproject.toml",
  "setup.py",
  "setup.cfg",
  "Cargo.toml",
  "go.mod",
  "Gemfile",
  "docker-compose",
  "Dockerfile",
  ".env.example",
  ".env.local.example",
  "Makefile",
  "vercel.json",
  "netlify.toml",
  "fly.toml",
  "render.yaml",
];

const ENTRY_POINT_PATTERNS = [
  "index.ts",
  "index.tsx",
  "index.js",
  "index.jsx",
  "main.ts",
  "main.tsx",
  "main.js",
  "main.py",
  "app.ts",
  "app.tsx",
  "app.js",
  "app.py",
  "server.ts",
  "server.js",
  "manage.py",
  "main.go",
  "main.rs",
  "lib.rs",
  "mod.rs",
];

const TEST_PATTERNS = [
  "__tests__",
  "__test__",
  "test",
  "tests",
  "spec",
  "specs",
  ".test.",
  ".spec.",
  "_test.go",
  "_test.py",
];

const IGNORED_DIRS = new Set([
  "node_modules",
  ".git",
  ".next",
  "__pycache__",
  ".venv",
  "venv",
  "env",
  "dist",
  "build",
  "out",
  ".cache",
  "coverage",
  ".turbo",
  "target",
  ".idea",
  ".vscode",
  ".DS_Store",
]);

export function getLanguage(filename: string): string | null {
  const ext = getExtension(filename);
  return ext ? EXTENSION_MAP[ext] ?? null : null;
}

export function getExtension(filename: string): string | null {
  const lastDot = filename.lastIndexOf(".");
  if (lastDot === -1 || lastDot === 0) return null;
  return filename.slice(lastDot).toLowerCase();
}

export function isConfigFile(path: string): boolean {
  const name = path.split("/").pop() ?? "";
  return CONFIG_PATTERNS.some(
    (p) => name === p || name.startsWith(p) || path.includes(p)
  );
}

export function isEntryPoint(path: string): boolean {
  const name = path.split("/").pop() ?? "";
  return ENTRY_POINT_PATTERNS.includes(name);
}

export function isTestFile(path: string): boolean {
  return TEST_PATTERNS.some((p) => path.includes(p));
}

export function isIgnoredDir(name: string): boolean {
  return IGNORED_DIRS.has(name);
}

export function isCodeFile(filename: string): boolean {
  const lang = getLanguage(filename);
  if (!lang) return false;
  const nonCode = new Set(["JSON", "YAML", "TOML", "Markdown", "MDX", "XML"]);
  return !nonCode.has(lang);
}
