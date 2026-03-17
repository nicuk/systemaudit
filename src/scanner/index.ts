import type { FileNode, FileMetrics, ScanResult, DependencyInfo, RepoInfo } from "../types";
import {
  getLanguage,
  getExtension,
  isConfigFile,
  isEntryPoint,
  isTestFile,
  isCodeFile,
} from "./languages";

export function buildScanResult(
  repo: RepoInfo,
  files: FileNode[],
  fileContents: Map<string, string>,
  packageData: Record<string, unknown> | null
): ScanResult {
  const metrics = computeMetrics(files, fileContents);
  const dependencies = extractDependencies(packageData);
  const structure = analyzeStructure(files);
  const healthIndicators = checkHealth(files);

  return {
    repo,
    files,
    metrics,
    dependencies,
    structure,
    healthIndicators,
  };
}

function computeMetrics(
  files: FileNode[],
  fileContents: Map<string, string>
): ScanResult["metrics"] {
  const languageBreakdown: Record<string, { files: number; loc: number }> = {};
  const fileMetrics: FileMetrics[] = [];
  let totalLoc = 0;
  let totalSize = 0;

  for (const file of files) {
    if (file.type !== "file") continue;

    const content = fileContents.get(file.path);
    const loc = content ? countLoc(content) : estimateLoc(file.size);
    const language = file.language ?? getLanguage(file.name);

    if (language) {
      if (!languageBreakdown[language]) {
        languageBreakdown[language] = { files: 0, loc: 0 };
      }
      languageBreakdown[language].files++;
      languageBreakdown[language].loc += loc;
    }

    totalLoc += loc;
    totalSize += file.size;

    if (isCodeFile(file.name)) {
      fileMetrics.push({
        path: file.path,
        loc,
        language,
        size: file.size,
        complexity: assessComplexity(loc, file.size),
      });
    }
  }

  const codeFiles = files.filter((f) => f.type === "file");
  const largestFiles = fileMetrics
    .sort((a, b) => b.loc - a.loc)
    .slice(0, 10);

  return {
    totalFiles: codeFiles.length,
    totalLoc,
    languageBreakdown,
    largestFiles,
    avgFileSize: codeFiles.length > 0 ? Math.round(totalSize / codeFiles.length) : 0,
  };
}

function extractDependencies(
  packageData: Record<string, unknown> | null
): ScanResult["dependencies"] {
  const production: DependencyInfo[] = [];
  const dev: DependencyInfo[] = [];

  if (!packageData) return { production, dev, total: 0 };

  const deps = (packageData.dependencies ?? {}) as Record<string, string>;
  const devDeps = (packageData.devDependencies ?? {}) as Record<string, string>;

  for (const [name, version] of Object.entries(deps)) {
    production.push({ name, version, type: "production", ecosystem: "npm" });
  }

  for (const [name, version] of Object.entries(devDeps)) {
    dev.push({ name, version, type: "dev", ecosystem: "npm" });
  }

  return { production, dev, total: production.length + dev.length };
}

function analyzeStructure(files: FileNode[]): ScanResult["structure"] {
  const topLevelDirs = new Set<string>();
  const entryPoints: string[] = [];
  const configFiles: string[] = [];
  const testDirs = new Set<string>();
  let maxDepth = 0;

  for (const file of files) {
    const parts = file.path.split("/");
    maxDepth = Math.max(maxDepth, parts.length);

    if (parts.length >= 2 && file.type === "file") {
      topLevelDirs.add(parts[0]);
    }

    if (file.type === "file") {
      if (isEntryPoint(file.path)) entryPoints.push(file.path);
      if (isConfigFile(file.path)) configFiles.push(file.path);
      if (isTestFile(file.path)) {
        const testDir = parts.slice(0, -1).join("/");
        if (testDir) testDirs.add(testDir.split("/")[0]);
      }
    }
  }

  return {
    depth: maxDepth,
    topLevelDirs: [...topLevelDirs].sort(),
    entryPoints,
    configFiles,
    testDirs: [...testDirs],
  };
}

function checkHealth(files: FileNode[]): ScanResult["healthIndicators"] {
  const paths = new Set(files.map((f) => f.path.toLowerCase()));
  const allPaths = files.map((f) => f.path.toLowerCase());

  return {
    hasReadme: allPaths.some((p) => p.includes("readme")),
    hasLicense: allPaths.some((p) => p.includes("license") || p.includes("licence")),
    hasCi: allPaths.some(
      (p) =>
        p.includes(".github/workflows") ||
        p.includes(".gitlab-ci") ||
        p.includes("circleci") ||
        p.includes("jenkinsfile")
    ),
    hasTests: allPaths.some((p) => isTestFile(p)),
    hasLinter: allPaths.some(
      (p) =>
        p.includes("eslint") ||
        p.includes("prettier") ||
        p.includes("pylint") ||
        p.includes("ruff") ||
        p.includes(".flake8")
    ),
    hasTypeScript:
      paths.has("tsconfig.json") || allPaths.some((p) => p.endsWith(".ts") || p.endsWith(".tsx")),
    hasDocker: allPaths.some((p) => p.includes("dockerfile") || p.includes("docker-compose")),
    hasEnvExample: allPaths.some((p) => p.includes(".env.example") || p.includes(".env.local.example")),
  };
}

function countLoc(content: string): number {
  const lines = content.split("\n");
  return lines.filter((line) => {
    const trimmed = line.trim();
    return trimmed.length > 0 && !trimmed.startsWith("//") && !trimmed.startsWith("#");
  }).length;
}

function estimateLoc(sizeBytes: number): number {
  return Math.round(sizeBytes / 40);
}

function assessComplexity(loc: number, size: number): "low" | "medium" | "high" {
  if (loc > 500 || size > 20000) return "high";
  if (loc > 200 || size > 8000) return "medium";
  return "low";
}

export { getLanguage, getExtension, isConfigFile, isEntryPoint, isTestFile, isCodeFile };
