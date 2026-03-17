<div align="center">

# SystemAudit

### Know exactly what's in your codebase — before it costs you.

**Paste a GitHub link. Get a full system health report in under 3 minutes.**
Architecture map, hidden risks, technical debt, and a prioritized fix plan — no developer needed.

[![Try Free Scan](https://img.shields.io/badge/Try_Free_Scan-systemaudit.dev-7c3aed?style=for-the-badge)](https://systemaudit.dev)
&nbsp;&nbsp;
[![MIT License](https://img.shields.io/badge/license-MIT-violet.svg)](LICENSE)

</div>

---

## Why This Exists

Most founders, CTOs, and investors have no idea what's actually inside their codebase.

- You're paying developers but can't tell if they're building on a solid foundation or a house of cards
- You're about to acquire or invest in a tech company but have no way to verify the code quality
- Your AI tools are generating code faster than anyone can review it
- Your team says "it works" but nobody can explain the architecture to a non-technical stakeholder

**A traditional code audit costs $5,000–$16,000 and takes 1–3 weeks.**
SystemAudit gives you the same core insights in under 3 minutes.

---

## What You Get

| What You See | Why It Matters |
|---|---|
| **System Architecture Map** | Visual diagram of how every piece of your system connects — finally see the full picture |
| **Risk Assessment** | Know which parts of your system are most likely to break, ranked by severity |
| **Technical Debt Report** | See exactly where shortcuts were taken, with cost-to-fix estimates |
| **AI Readiness Score** | Find out if your codebase is structured for safe AI-assisted development |
| **Health Score** | One number that tells you if your system has tests, security, documentation, and CI/CD |
| **Prioritized Fix Plan** | A step-by-step action list your dev team can start on immediately |

---

## How It Works

```
1. Go to systemaudit.dev
2. Paste any GitHub repository URL
3. Get your full report in under 3 minutes
```

That's it. No setup. No install. No developer required.

---

## Who It's For

### Founders & CEOs
> "I hired a dev team 6 months ago. Are they building something solid, or am I burning cash?"

Scan your repo. See the architecture, risks, and health score. Make informed decisions without needing to read code.

### Investors & Acquirers
> "We're doing due diligence on a tech company. How do we evaluate their codebase?"

Get an instant technical overview — architecture quality, dependency risks, and maintenance burden — in minutes instead of weeks.

### CTOs & Tech Leads
> "We ship fast but I'm not sure what we've accumulated in technical debt."

Run periodic scans to track system health over time. Catch problems before they become emergencies.

### Teams Using AI Code Tools
> "We're generating code with AI but we have no idea if the output is maintainable."

SystemAudit checks whether AI-generated code follows good structure, has proper testing, and won't create long-term problems.

---

## Pricing

| | Free | Full Audit |
|---|---|---|
| **Price** | $0 | ~~$2,500~~ **$99** (launch offer) |
| Public repos | ✅ | ✅ |
| Private repos | — | ✅ |
| Architecture map | Preview | Full interactive diagram |
| Risk assessment | Blurred | Full detail with severity ranking |
| Technical debt report | — | Complete with fix estimates |
| Multi-repo analysis | — | ✅ |
| Exportable PDF | — | ✅ |
| Remediation roadmap | — | ✅ |

<div align="center">

[![Get Your Audit](https://img.shields.io/badge/Get_Your_Audit-$99_Launch_Offer-7c3aed?style=for-the-badge)](https://systemaudit.dev)

</div>

---

## Is My Code Safe?

**Yes. 100%.**

- Your code is read through GitHub's official API — read-only access
- Nothing is stored, saved, or cached after the scan
- Your code is never shared with anyone or used to train AI models
- Only you see the results

---

## What It Scans

SystemAudit works with **50+ programming languages** including TypeScript, JavaScript, Python, Go, Rust, Java, Kotlin, Swift, C#, C++, Ruby, PHP, and more. It analyzes:

- File structure and organization
- All production and dev dependencies
- Code complexity per file
- Test coverage and CI/CD setup
- Security configuration and secrets hygiene
- Documentation quality

---

## Open Source Foundation

This repository contains the **open-source scanner engine** that powers [systemaudit.dev](https://systemaudit.dev). It handles file analysis, dependency extraction, complexity scoring, and health checks.

The web app adds AI-powered analysis on top: architecture diagrams, risk scoring, executive summaries, and the prioritized fix plan.

<details>
<summary><strong>Developer Quick Start (CLI)</strong></summary>

```bash
git clone https://github.com/nicuk/systemaudit.git
cd systemaudit
npm install

# Scan a repository
npm run scan -- https://github.com/vercel/next.js

# Export as JSON
npm run scan -- https://github.com/vercel/next.js --json
```

</details>

<details>
<summary><strong>Use as a Library</strong></summary>

```typescript
import { parseGitHubUrl, fetchRepoInfo, fetchRepoTree, fetchKeyFiles } from "./src/github";
import { buildScanResult } from "./src/scanner";

const parsed = parseGitHubUrl("https://github.com/owner/repo");
const repo = await fetchRepoInfo(parsed.owner, parsed.name);
const files = await fetchRepoTree(parsed.owner, parsed.name, repo.defaultBranch);
const contents = await fetchKeyFiles(parsed.owner, parsed.name, files);

const scan = buildScanResult(repo, files, contents, packageData);
```

</details>

<details>
<summary><strong>Architecture</strong></summary>

```
src/
├── scanner/
│   ├── index.ts          # Core scan logic
│   └── languages.ts      # Language detection and classification
├── github.ts             # GitHub API client
├── types/
│   └── index.ts          # TypeScript interfaces
└── cli.ts                # CLI entry point
```

The scanner is a standalone module with zero dependencies on any AI provider, database, or framework. It produces structured JSON for any downstream consumer.

</details>

<details>
<summary><strong>Environment Variables</strong></summary>

| Variable | Required | Description |
|---|---|---|
| `GITHUB_TOKEN` | No | GitHub personal access token. Increases rate limit from 60 to 5,000 req/hr. Required for private repos. |

</details>

---

## Contributing

Contributions welcome. See [open issues](https://github.com/nicuk/systemaudit/issues) or start with:

- Dependency parsing for more ecosystems (Cargo.toml, go.mod, etc.)
- Language-specific complexity heuristics
- Git history analysis (commit frequency, bus factor)
- GitLab and Bitbucket API support

## License

[MIT](LICENSE) — use it however you want.

---

<div align="center">

**Built by [nicuk](https://github.com/nicuk)** — AI architect building tools for codebase clarity.

[**Try SystemAudit Free →**](https://systemaudit.dev)

</div>
