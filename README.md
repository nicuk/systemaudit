<div align="center">

# SystemAudit

### Know exactly what's in your codebase — before it costs you.

**Paste a GitHub link. Get a full system health report in under 3 minutes.**
Architecture map, hidden risks, security scan, business-ready cost estimates, and a prioritized fix plan — no developer needed.

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
| **Security & Secrets Scan** | Finds hardcoded API keys, exposed passwords, committed .env files, and missing security middleware — before attackers do |
| **Risk Assessment** | Know which parts are most likely to break, ranked by severity with "cost to fix" and "cost if ignored" for each |
| **Business Translation** | Every technical finding explained in plain English: what it means for your business, who it affects, and what it costs |
| **AI Readiness Score** | 5-dimension assessment of whether your codebase is structured for safe AI-assisted development (A–F grade) |
| **Health Score** | One number that tells you if your system has tests, security, documentation, and CI/CD — across 20+ checks |
| **Technical Debt Report** | See exactly where shortcuts were taken, with effort estimates and priority ranking |
| **Prioritized Fix Plan** | Week-by-week remediation roadmap with investment tiers (urgent / recommended / optional), ROI projection, and hiring guidance |
| **Exportable PDF** | Professional report you can hand to investors, board members, or your dev team — no login required to view |

---

## Sample Report Content

Here's what a real report looks like — every section written for business decision-makers, not just developers:

<details>
<summary><strong>📊 The Bottom Line (plain-English summary)</strong></summary>

> This is a solid AI document search platform with a quality score of 78/100. The core system is well-built, but some user data is stored insecurely on devices and key components are too complex to modify quickly. Your architecture is strong — the risk is in the details.

</details>

<details>
<summary><strong>🔴 Business Risks (with cost framing)</strong></summary>

| Risk | Severity | Cost to Fix | Cost if Ignored |
|---|---|---|---|
| Customer conversations stored without encryption | Critical | $3,600 – $8,000 | Enterprise deals worth $50K+ rejected during security reviews |
| User access controls can fail silently | High | $2,400 – $4,800 | Cross-company data access liability, 3-4x support ticket increase |
| Code too complex to modify quickly | High | $12,000 – $24,000 | 50-75% development slowdown over next year |

Each risk includes **who it affects**, **what happens if you ignore it**, and **exactly what to fix**.

</details>

<details>
<summary><strong>🧠 AI Readiness Score (5 dimensions)</strong></summary>

| Dimension | Score | What It Means |
|---|---|---|
| Code Clarity | 72/100 | New developers can understand the system quickly, but large components take 2-3x longer to change |
| Test Coverage | 65/100 | E2E tests catch major regressions, but lack of unit tests means refactoring core logic is risky |
| Modularity | 82/100 | Clean module boundaries in libraries — but some UI components handle too many concerns |
| Documentation | 85/100 | Strong README, architecture diagrams, JSDoc comments on key modules |
| Type Safety | 88/100 | Full TypeScript across 353 files. Compiler catches most errors before runtime |

**Overall: B (78/100)** — AI can safely modify most of this system with moderate oversight.

Each dimension includes evidence from your actual code, business impact, specific fix recommendation, effort estimate, and projected score after improvement.

</details>

<details>
<summary><strong>💰 Investment & ROI (actionable budget)</strong></summary>

| Priority | Timeline | Cost | What It Fixes |
|---|---|---|---|
| **Urgent** — Fix Now | 1-2 weeks | $6,000 – $16,000 | Security issues blocking enterprise sales |
| **Recommended** — Next Sprint | 3-4 weeks | $18,000 – $32,000 | Code complexity causing development slowdowns |
| **Optional** — When Ready | 1-2 weeks | $6,000 – $16,000 | Monitoring and automated quality checks |

Plus: **Quick wins** your team can start this week, and **who you need** (existing team vs. outside help).

</details>

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

Scan your repo. See the architecture, risks, and health score in plain English. Make informed decisions without needing to read code.

### Investors & Acquirers
> "We're doing due diligence on a tech company. How do we evaluate their codebase?"

Get an instant technical overview — architecture quality, security posture, dependency risks, and maintenance burden — in minutes instead of weeks. Export the PDF and attach it to your due diligence package.

### CTOs & Tech Leads
> "We ship fast but I'm not sure what we've accumulated in technical debt."

Run periodic scans to track system health over time. Get a prioritized fix plan with effort estimates your team can execute on immediately. See if your codebase is ready for AI-assisted development.

### Teams Using AI Code Tools
> "We're generating code with AI but we have no idea if the output is maintainable."

SystemAudit scores your codebase across 5 AI-readiness dimensions and tells you exactly where AI modifications are safe vs. risky.

---

## What It Scans

SystemAudit detects **50+ programming languages** and provides deep, framework-aware analysis for **9 major ecosystems**:

| Ecosystem | What It Detects |
|---|---|
| **JavaScript / TypeScript** | Next.js, React, Express, Fastify, Koa — with npm dependency analysis |
| **Python** | Django, FastAPI, Flask — with pip, Pipfile, pyproject.toml parsing |
| **Java / Kotlin** | Spring Boot — with Maven (pom.xml) and Gradle (build.gradle) parsing |
| **Go** | Gin, Echo, Chi, Fiber — with go.mod parsing |
| **Rust** | Actix, Axum, Rocket — with Cargo.toml parsing |
| **C# / .NET** | ASP.NET Core — with NuGet (.csproj) parsing |
| **PHP** | Laravel, Symfony — with Composer parsing |
| **Ruby** | Ruby on Rails — with Bundler (Gemfile) parsing |
| **General** | Docker, CI/CD pipelines, serverless configs, monorepo structures |

For each ecosystem, SystemAudit identifies architecture patterns, extracts logical features (pages, API routes, auth, data, services), detects entry points, and assigns per-feature risk scores.

**Security scanning** covers hardcoded API keys, AWS credentials, private keys, tokens, database connection strings, committed .env files, and missing security middleware — with false-positive filtering so you don't waste time on non-issues.

---

## Pricing

| | Free | Full Audit |
|---|---|---|
| **Price** | $0 | ~~$2,500~~ **$99** (launch offer) |
| Public repos | ✅ | ✅ |
| Private repos | — | ✅ |
| Security & secrets scan | ✅ | ✅ |
| Health score (20+ checks) | ✅ | ✅ |
| Architecture map | Preview | Full interactive diagram |
| Risk assessment | Top 4 shown | Full detail with business translation |
| Business-ready cost estimates | — | ✅ Per-risk cost to fix / cost if ignored |
| AI Readiness Score (5 dimensions) | — | ✅ With evidence and fix plan per dimension |
| Technical debt report | — | ✅ Complete with effort estimates |
| Investment & ROI breakdown | — | ✅ Urgent / recommended / optional tiers |
| Remediation roadmap | — | ✅ Week-by-week with score projections |
| Exportable PDF | — | ✅ |
| Multi-repo analysis | — | ✅ |

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

## Open Source Foundation

This repository contains the **open-source scanner engine** that powers [systemaudit.dev](https://systemaudit.dev). It handles file analysis, dependency extraction, complexity scoring, and health checks — all deterministic, zero AI cost.

The web app adds AI-powered analysis on top: architecture diagrams, risk scoring with business translation, executive summaries, AI readiness assessment, and the investment-ready fix plan.

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
│   ├── index.ts          # Core scan logic, metrics, dependency extraction
│   └── languages.ts      # 50+ language detection, config/entry/test patterns
├── github.ts             # GitHub API client, smart file selection
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

- Language-specific complexity heuristics beyond LOC
- Git history analysis (commit frequency, bus factor, contributor patterns)
- GitLab and Bitbucket API support
- SBOM (Software Bill of Materials) export format
- Vulnerability database cross-referencing for dependencies

## License

[MIT](LICENSE) — use it however you want.

---

<div align="center">

**Built by [nicuk](https://github.com/nicuk)** — AI architect building tools for codebase clarity.

[**Try SystemAudit Free →**](https://systemaudit.dev)

</div>
