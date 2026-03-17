export interface RepoInfo {
  owner: string;
  name: string;
  fullName: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  defaultBranch: string;
  url: string;
}

export interface FileNode {
  path: string;
  name: string;
  type: "file" | "dir";
  size: number;
  extension: string | null;
  language: string | null;
}

export interface DependencyInfo {
  name: string;
  version: string;
  type: "production" | "dev";
  ecosystem: "npm" | "pip" | "cargo" | "go" | "other";
}

export interface FileMetrics {
  path: string;
  loc: number;
  language: string | null;
  size: number;
  complexity: "low" | "medium" | "high";
}

export interface ScanResult {
  repo: RepoInfo;
  files: FileNode[];
  metrics: {
    totalFiles: number;
    totalLoc: number;
    languageBreakdown: Record<string, { files: number; loc: number }>;
    largestFiles: FileMetrics[];
    avgFileSize: number;
  };
  dependencies: {
    production: DependencyInfo[];
    dev: DependencyInfo[];
    total: number;
  };
  structure: {
    depth: number;
    topLevelDirs: string[];
    entryPoints: string[];
    configFiles: string[];
    testDirs: string[];
  };
  healthIndicators: {
    hasReadme: boolean;
    hasLicense: boolean;
    hasCi: boolean;
    hasTests: boolean;
    hasLinter: boolean;
    hasTypeScript: boolean;
    hasDocker: boolean;
    hasEnvExample: boolean;
  };
}

export interface AnalysisResult {
  executiveSummary: string;
  architectureOverview: string;
  mermaidDiagram: string;
  components: ComponentAnalysis[];
  risks: RiskItem[];
  techDebt: TechDebtItem[];
  aiReadiness: AIReadinessScore;
  recommendations: string[];
}

export interface ComponentAnalysis {
  name: string;
  purpose: string;
  files: string[];
  dependencies: string[];
  risk: "low" | "medium" | "high";
}

export interface RiskItem {
  title: string;
  description: string;
  severity: "low" | "medium" | "high" | "critical";
  category: "security" | "reliability" | "scalability" | "maintainability";
  affectedFiles: string[];
}

export interface TechDebtItem {
  title: string;
  description: string;
  effort: "hours" | "days" | "weeks";
  priority: "low" | "medium" | "high";
  category: string;
}

export interface AIReadinessScore {
  overall: number;
  breakdown: {
    codeClarity: number;
    testCoverage: number;
    modularity: number;
    documentation: number;
    typesSafety: number;
  };
  verdict: string;
  concerns: string[];
}

export interface AuditReport {
  id: string;
  createdAt: string;
  scan: ScanResult;
  analysis: AnalysisResult;
}
