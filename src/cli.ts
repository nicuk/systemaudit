#!/usr/bin/env node

import { parseGitHubUrl, fetchRepoInfo, fetchRepoTree, fetchKeyFiles } from "./github";
import { buildScanResult } from "./scanner/index";

const url = process.argv[2];
if (!url) {
  console.error("Usage: npx tsx src/cli.ts <github-url>");
  console.error("Example: npx tsx src/cli.ts https://github.com/vercel/next.js");
  process.exit(1);
}

async function main() {
  const parsed = parseGitHubUrl(url);
  if (!parsed) {
    console.error("Invalid GitHub URL");
    process.exit(1);
  }

  console.log(`\nScanning ${parsed.owner}/${parsed.name}...\n`);

  const token = process.env.GITHUB_TOKEN;
  const repo = await fetchRepoInfo(parsed.owner, parsed.name, token);
  const files = await fetchRepoTree(parsed.owner, parsed.name, repo.defaultBranch, token);
  const contents = await fetchKeyFiles(parsed.owner, parsed.name, files, token);

  let packageData: Record<string, unknown> | null = null;
  const pkgContent = contents.get("package.json");
  if (pkgContent) {
    try { packageData = JSON.parse(pkgContent); } catch { /* skip */ }
  }

  const scan = buildScanResult(repo, files, contents, packageData);

  console.log("=".repeat(60));
  console.log(`  ${scan.repo.fullName}`);
  console.log(`  ${scan.repo.description ?? "No description"}`);
  console.log("=".repeat(60));

  console.log(`\n  Files:         ${scan.metrics.totalFiles}`);
  console.log(`  Lines of Code: ${scan.metrics.totalLoc.toLocaleString()}`);
  console.log(`  Dependencies:  ${scan.dependencies.total}`);
  console.log(`  Max Depth:     ${scan.structure.depth}`);

  console.log("\n  Languages:");
  const langs = Object.entries(scan.metrics.languageBreakdown)
    .sort(([, a], [, b]) => b.loc - a.loc);
  const totalLoc = langs.reduce((s, [, d]) => s + d.loc, 0);
  for (const [lang, data] of langs.slice(0, 10)) {
    const pct = ((data.loc / totalLoc) * 100).toFixed(1);
    const bar = "█".repeat(Math.round(Number(pct) / 3));
    console.log(`    ${lang.padEnd(14)} ${pct.padStart(5)}%  ${bar}  (${data.files} files)`);
  }

  console.log("\n  Health Check:");
  const h = scan.healthIndicators;
  const check = (ok: boolean) => ok ? "✓" : "✗";
  console.log(`    ${check(h.hasReadme)} README    ${check(h.hasLicense)} License    ${check(h.hasCi)} CI/CD`);
  console.log(`    ${check(h.hasTests)} Tests     ${check(h.hasLinter)} Linter     ${check(h.hasTypeScript)} TypeScript`);
  console.log(`    ${check(h.hasDocker)} Docker    ${check(h.hasEnvExample)} Env Example`);

  console.log("\n  Largest Files:");
  for (const f of scan.metrics.largestFiles.slice(0, 5)) {
    console.log(`    ${f.path.padEnd(45)} ${String(f.loc).padStart(6)} LOC  [${f.complexity}]`);
  }

  console.log("\n  Top-Level Structure:");
  for (const dir of scan.structure.topLevelDirs) {
    console.log(`    /${dir}`);
  }

  if (scan.structure.entryPoints.length > 0) {
    console.log("\n  Entry Points:");
    for (const ep of scan.structure.entryPoints.slice(0, 5)) {
      console.log(`    → ${ep}`);
    }
  }

  console.log(`\n${"=".repeat(60)}`);
  console.log("  Scan complete. Full JSON available via --json flag.");
  console.log(`${"=".repeat(60)}\n`);

  if (process.argv.includes("--json")) {
    const outputPath = `scan-${parsed.owner}-${parsed.name}.json`;
    const fs = await import("fs");
    fs.writeFileSync(outputPath, JSON.stringify(scan, null, 2));
    console.log(`  JSON saved to: ${outputPath}\n`);
  }
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
