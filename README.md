<div align="center">

# SystemScope

**Understand any codebase in minutes, not months.**

Open-source scanner that maps file structure, extracts dependencies, measures complexity,
and scores project health for any GitHub repository. The foundation for [SystemScope Web](https://systemscope.dev).

[![MIT License](https://img.shields.io/badge/license-MIT-violet.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![GitHub](https://img.shields.io/github/stars/nicuk/SystemScope?style=social)](https://github.com/nicuk/SystemScope)

[Run the Web App](https://systemscope.dev) · [View Sample Output](examples/sample-output.md) · [Report Bug](https://github.com/nicuk/SystemScope/issues)

</div>

---

## The Problem

Developers spend **60-70% of their time** just understanding existing code. Teams ship, refactor, and onboard slowly because nobody has a clear picture of the entire system.

This gets worse with AI-generated code. You can build faster than ever — but if you don't know what you built, you can't maintain it, scale it, or explain it to investors.

**SystemScope fixes that.**

## What It Does

Paste a GitHub URL. Get a complete structural analysis.

| Feature | Description |
|---|---|
| **File Structure Analysis** | Full file tree with language detection for 50+ languages |
| **Language Breakdown** | LOC counts per language with visual distribution |
| **Dependency Extraction** | Production and dev dependencies from `package.json`, `requirements.txt`, `Cargo.toml`, `go.mod` |
| **Complexity Metrics** | File-level complexity scoring (low/medium/high), largest file identification |
| **Health Scoring** | Checks for README, license, CI/CD, tests, linter, TypeScript, Docker, env examples |
| **Structure Analysis** | Directory depth, entry points, config files, test directories |

## Quick Start

### CLI (scan any repo from your terminal)

```bash
# Clone the repo
git clone https://github.com/nicuk/SystemScope.git
cd SystemScope

# Install dependencies
npm install

# Scan a repository
npm run scan -- https://github.com/vercel/next.js

# Export as JSON
npm run scan -- https://github.com/vercel/next.js --json
```

### As a Library (import into your project)

```typescript
import { parseGitHubUrl, fetchRepoInfo, fetchRepoTree, fetchKeyFiles } from "./src/github";
import { buildScanResult } from "./src/scanner";

const parsed = parseGitHubUrl("https://github.com/owner/repo");
const repo = await fetchRepoInfo(parsed.owner, parsed.name);
const files = await fetchRepoTree(parsed.owner, parsed.name, repo.defaultBranch);
const contents = await fetchKeyFiles(parsed.owner, parsed.name, files);

const scan = buildScanResult(repo, files, contents, packageData);
// scan.metrics, scan.dependencies, scan.structure, scan.healthIndicators
```

## Sample Output

```
============================================================
  vercel/next.js
  The React Framework
============================================================

  Files:         4,832
  Lines of Code: 487,291
  Dependencies:  142
  Max Depth:     12

  Languages:
    TypeScript     72.3%  ████████████████████████  (3,201 files)
    JavaScript     14.1%  █████                     (892 files)
    CSS             4.8%  ██                        (156 files)
    Rust            3.2%  █                         (89 files)

  Health Check:
    ✓ README    ✓ License    ✓ CI/CD
    ✓ Tests     ✓ Linter     ✓ TypeScript
    ✓ Docker    ✗ Env Example

  Largest Files:
    packages/next/src/server/next-server.ts           2,847 LOC  [high]
    packages/next/src/build/webpack-config.ts         2,312 LOC  [high]

============================================================
```

[See full sample output →](examples/sample-output.md)

## Supported Languages

SystemScope detects **50+ languages** including:

TypeScript, JavaScript, Python, Go, Rust, Java, Kotlin, Swift, C#, C++, C, Ruby, PHP, Vue, Svelte, Dart, Scala, Elixir, Erlang, Zig, Lua, Shell, SQL, GraphQL, Terraform, and more.

## Architecture

```
src/
├── scanner/
│   ├── index.ts          # Core scan logic: metrics, dependencies, structure, health
│   └── languages.ts      # Language detection, file classification, pattern matching
├── github.ts             # GitHub REST API client: repo info, tree, file contents
├── types/
│   └── index.ts          # TypeScript interfaces for all data structures
└── cli.ts                # CLI entry point
```

The scanner is designed as a **standalone module** with zero dependencies on any AI provider, database, or framework. It produces structured JSON that can be consumed by any downstream tool.

## SystemScope Web

The open-source scanner is the foundation. [**SystemScope Web**](https://systemscope.dev) adds an AI analysis layer on top:

| Scanner (this repo) | Web App (systemscope.dev) |
|---|---|
| File structure analysis | Everything in the scanner, plus: |
| Language breakdown | AI-generated executive summary |
| Dependency extraction | Architecture diagram (Mermaid.js) |
| Complexity metrics | Risk assessment with severity ranking |
| Health scoring | Technical debt inventory with fix estimates |
| | AI Readiness Score (0-100) |
| | Prioritized action plan |
| **Free, open source** | **Free for public repos** |

## Use Cases

- **Onboarding** — New to a codebase? Scan it first. Understand the structure, languages, and dependencies before reading a single line of code.
- **Due Diligence** — Evaluating a project for investment or acquisition? Get an instant structural overview.
- **Technical Debt Tracking** — Run periodic scans to monitor complexity growth, dependency health, and project hygiene.
- **AI Governance** — Assess how much AI-generated code exists and whether the system is structured for safe AI modification.
- **Documentation** — Auto-generate a structural snapshot as a starting point for architecture docs.

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GITHUB_TOKEN` | No | GitHub personal access token. Increases rate limit from 60 to 5,000 requests/hour. Required for private repos. |

## Contributing

Contributions welcome. Areas where help is needed:

- [ ] Support for `requirements.txt`, `Cargo.toml`, `go.mod` dependency parsing
- [ ] More language-specific complexity heuristics
- [ ] Git history analysis (commit frequency, bus factor)
- [ ] Support for GitLab and Bitbucket APIs
- [ ] Interactive terminal output with color

## License

[MIT](LICENSE) — use it however you want.

---

<div align="center">

**Built by [nicuk](https://github.com/nicuk)** — AI architect building tools for codebase clarity.

[Run SystemScope Web →](https://systemscope.dev)

</div>
