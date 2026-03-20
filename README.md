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
SystemAudit gives you the same core insights in under 3 minutes — starting at $49.

---

## What You Get

| What You See | Why It Matters |
|---|---|
| **System Architecture Map** | Visual diagram of how every piece of your system connects — finally see the full picture |
| **Security & Vulnerability Scan** | Finds hardcoded API keys, SQL injection patterns, insecure code, and missing security layers — with exact file and line number evidence |
| **Dependency Graph Analysis** | Detects circular dependencies, single points of failure, and dead code — proven architectural risks, not guesses |
| **Risk Assessment** | Each risk ranked by severity with "cost to fix" and "cost if ignored" — translated into business language |
| **Feature Verification** | Cross-references your features against test files — shows what's tested and what's flying blind |
| **AI Readiness Score** | 5-dimension assessment (A–F grade) of whether your codebase is structured for safe AI-assisted development |
| **Health Score** | One number across 20+ checks: tests, security, CI/CD, documentation, dependency health, project structure |
| **Dependency Health Check** | Flags legacy/deprecated packages and missing security configurations that create supply chain risk |
| **Prioritized Fix Plan** | Week-by-week remediation roadmap with investment tiers, ROI projection, and hiring guidance |
| **Exportable PDF** | Professional report you can hand to investors, board members, or your dev team |

---

## How It Works

```
1. Go to systemaudit.dev
2. Paste any GitHub repository URL
3. Get your full report in under 3 minutes
```

That's it. No setup. No install. No developer required.

The system automatically detects your project's size and adjusts the depth of analysis accordingly — from early-stage MVPs to complex multi-module platforms.

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

Run periodic scans to track system health. See your dependency graph, detect circular dependencies, and get a prioritized fix plan with effort estimates your team can execute on immediately.

### Teams Using AI Code Tools
> "We're generating code with AI but we have no idea if the output is maintainable."

SystemAudit scores your codebase across 5 AI-readiness dimensions and tells you exactly where AI modifications are safe vs. risky.

---

## Sample Report

Here's what a real report looks like — every section written for decision-makers, not just developers:

<details>
<summary><strong>📊 The Bottom Line</strong></summary>

> This is a solid AI document search platform with a quality score of 78/100. The core system is well-built, but some user data is stored insecurely on devices and key components are too complex to modify quickly. Your architecture is strong — the risk is in the details.

</details>

<details>
<summary><strong>🔴 Business Risks</strong></summary>

| Risk | Severity | Cost to Fix | Cost if Ignored |
|---|---|---|---|
| Customer conversations stored without encryption | Critical | $800 – $1,500 (1-2 days) | Risk of failing enterprise security reviews |
| User access controls can fail silently | High | $800 – $2,400 (1-3 days) | Increased support tickets, potential data access issues |
| Code too complex to modify quickly | High | $2,500 – $5,000 (1-2 weeks) | Feature delivery slows as complexity compounds |

Each risk includes **who it affects**, **what happens if you ignore it**, and **exactly what to fix**.

</details>

<details>
<summary><strong>🔗 Architecture Analysis</strong></summary>

| Finding | What It Means |
|---|---|
| 3 circular dependencies detected | Files depend on each other in a loop — changes to one can break the others unexpectedly |
| `src/lib/utils.ts` imported by 23 files | Single point of failure — any bug here ripples across the entire system |
| 8 orphaned files with no connections | Dead code adding confusion and maintenance cost |
| Average coupling: 2.4 imports per file | Moderate — refactoring individual modules is feasible |

These findings are deterministic — extracted directly from your source code, not estimated by AI.

</details>

<details>
<summary><strong>🛡️ Security Scan</strong></summary>

| Pattern | Severity | Location |
|---|---|---|
| SQL string concatenation with user input | Critical | `src/api/users.ts:47` |
| Hardcoded API key | Critical | `src/config/payments.ts:12` |
| innerHTML without sanitization | High | `src/components/preview.tsx:89` |
| Sensitive data in console output | Medium | `src/auth/login.ts:34` |

Exact file, line number, and code snippet for each finding — no ambiguity about what needs to change.

</details>

<details>
<summary><strong>🧠 AI Readiness Score</strong></summary>

| Dimension | Score | What It Means |
|---|---|---|
| Code Clarity | 72/100 | Developers understand the system quickly, but large components take 2-3x longer to change |
| Test Coverage | 65/100 | E2E tests catch major regressions, but lack of unit tests means refactoring is risky |
| Modularity | 82/100 | Clean module boundaries — but some components handle too many concerns |
| Documentation | 85/100 | Strong README, architecture diagrams, JSDoc on key modules |
| Type Safety | 88/100 | Full TypeScript across 353 files. Compiler catches most errors before runtime |

**Overall: B (78/100)** — AI can safely modify most of this system with moderate oversight.

</details>

<details>
<summary><strong>💰 Investment & ROI</strong></summary>

| Priority | Timeline | Cost | What It Fixes |
|---|---|---|---|
| **Urgent** — Fix Now | 3-5 days | $2,000 – $5,000 | Security issues that could block enterprise sales |
| **Recommended** — Next Sprint | 1-2 weeks | $4,000 – $8,000 | Code complexity causing development slowdowns |
| **Optional** — When Ready | 2-4 days | $1,500 – $4,000 | Monitoring and automated quality checks |

Plus: **Quick wins** your team can start this week, and **who you need** (existing team vs. outside help).

</details>

---

## What It Scans

Deep, framework-aware analysis for **50+ languages** across **9 major ecosystems**:

| Ecosystem | What It Detects |
|---|---|
| **JavaScript / TypeScript** | Next.js, React, Express, Fastify, Koa |
| **Python** | Django, FastAPI, Flask |
| **Java / Kotlin** | Spring Boot (Maven, Gradle) |
| **Go** | Gin, Echo, Chi, Fiber |
| **Rust** | Actix, Axum, Rocket |
| **C# / .NET** | ASP.NET Core |
| **PHP** | Laravel, Symfony |
| **Ruby** | Ruby on Rails |
| **General** | Docker, CI/CD pipelines, serverless, monorepos |

---

## Pricing

Pricing adapts to your project's size — detected automatically from your codebase.

| | Free Scan | Small Project | Medium Project | Large Project |
|---|---|---|---|---|
| **Price** | $0 | **$49** | **$99** | **$199** |
| Security & vulnerability scan | ✓ | ✓ | ✓ | ✓ |
| Health score & structure quality | ✓ | ✓ | ✓ | ✓ |
| Dependency graph analysis | ✓ | ✓ | ✓ | ✓ |
| Architecture map | Preview | Full | Full | Full |
| AI-powered deep analysis | — | ✓ | ✓ | ✓ |
| Business risk translation | — | ✓ | ✓ | ✓ |
| AI Readiness Score (5 dimensions) | — | ✓ | ✓ | ✓ |
| Remediation roadmap & PDF | — | ✓ | ✓ | ✓ |

**Enterprise systems?** [Talk to us](mailto:nic@systemaudit.dev) — dedicated analysis with a walkthrough call.

<div align="center">

[![Get Your Audit](https://img.shields.io/badge/Get_Your_Audit-From_$49-7c3aed?style=for-the-badge)](https://systemaudit.dev)

</div>

---

## Is My Code Safe?

**Yes. 100%.**

- Read-only access through GitHub's official API
- Nothing is stored or cached after the scan
- Your code is never shared with anyone or used to train AI models
- Only you see the results

---

## Engineering Approach

<details>
<summary><strong>The design thinking behind SystemAudit</strong></summary>

### The Core Problem with AI Code Analysis

Most AI code analysis tools send raw source code to a language model and hope for the best. The output sounds confident — but it's often wrong. The model hallucinates vulnerabilities that don't exist, misses ones that do, and produces cost estimates untethered from reality.

We solved this by **not trusting the AI with facts it can get wrong.**

### Two-Layer Architecture

SystemAudit runs two analysis layers — and the order matters.

**Layer 1: Deterministic analysis (zero AI cost).** Before any language model touches the code, we run a comprehensive static analysis pass. This produces hard evidence: exact vulnerability patterns with file and line references, a full import dependency graph with proven circular dependencies, dependency health flags, structure quality metrics, and verified configuration state. These are facts, not opinions.

**Layer 2: AI interpretation (grounded in Layer 1).** The language model receives the source code alongside all Layer 1 findings as immutable constraints. It cannot contradict them. Its job is to do what AI does well — synthesize patterns, identify architectural concerns, and translate technical findings into business language — while being anchored to evidence it didn't generate.

This is why our reports cite specific files and line numbers for security findings. It's why the cost estimates are calibrated to actual complexity. And it's why the architecture analysis reflects what's really in the codebase rather than what a model pattern-matched from its training data.

### Design Decisions That Matter

**Analysis depth scales with project size.** Larger codebases trigger wider file selection with intelligent prioritization — security-critical paths, high-complexity modules, and architectural entry points are always included regardless of project size. The system adapts its coverage to match what each codebase actually needs.

**Multi-pass AI architecture.** Different analysis tasks need different approaches. Architectural reasoning requires broad context and creativity. Risk identification demands precision and evidence. Business translation needs accessibility and calibrated cost awareness. Collapsing these into a single prompt degrades all three. Separating them — with the right sequencing and parallelization — produces higher quality at lower latency.

**Progressive value delivery.** The free scan delivers genuine, actionable findings (security vulnerabilities, dependency issues, structure gaps) — not a teaser with blurred content. This creates informed urgency: users who see real problems in their codebase convert because they understand the value of the full analysis, not because they're curious about what's behind a wall.

**Dynamic pricing tied to complexity.** A 10,000-line MVP and a 100,000-line platform are different products requiring different analysis depth. Pricing reflects what the system actually does for each project — more files analyzed, broader coverage, deeper insights — rather than charging a flat rate that overserves small projects and underserves large ones.

</details>

---

## Open Source

This repository contains the **open-source scanner engine** powering the deterministic analysis layer of [systemaudit.dev](https://systemaudit.dev). It handles file analysis, dependency extraction, security pattern detection, import graph analysis, and health scoring — all rule-based, zero AI cost.

The hosted product adds the AI interpretation layer: architecture diagrams, evidence-based risk scoring, business translation, executive summaries, AI readiness assessment, and the investment-ready remediation plan.

<details>
<summary><strong>Getting Started</strong></summary>

```bash
git clone https://github.com/nicuk/systemaudit.git
cd systemaudit
npm install

# Scan a repository
npm run scan -- https://github.com/vercel/next.js
```

Requires a `GITHUB_TOKEN` environment variable for private repos or higher rate limits.

</details>

---

## Contributing

Contributions welcome. See [open issues](https://github.com/nicuk/systemaudit/issues) or start with:

- Language-specific complexity heuristics beyond LOC
- AST-level security pattern detection
- Git history analysis (commit frequency, bus factor, contributor patterns)
- GitLab and Bitbucket API support
- SBOM (Software Bill of Materials) export
- Vulnerability database cross-referencing for dependencies

## License

[MIT](LICENSE)

---

<div align="center">

**Designed and built by [Nic Chin](https://nicchin.com)** — Fractional CTO & AI Lead Architect

Production AI systems | LLM pipeline design | Deterministic grounding architectures

[**Try SystemAudit Free →**](https://systemaudit.dev)&nbsp;&nbsp;|&nbsp;&nbsp;[**Portfolio →**](https://nicchin.com)

</div>
