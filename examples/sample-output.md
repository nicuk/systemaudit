# Sample Scan Output

This is an example of what the open-source scanner produces when scanning a repository.

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
    Shell           2.1%  █                         (67 files)
    MDX             1.9%                            (211 files)
    JSON            1.6%                            (216 files)

  Detected Pattern: Monorepo (Multi-Package)
  Primary Ecosystem: node

  Health Check:
    ✓ README    ✓ License    ✓ CI/CD
    ✓ Tests     ✓ Linter     ✓ TypeScript
    ✓ Docker    ✗ Env Example
    ✓ Platform Deploy    ✓ Security Tooling

  Security Scan:
    Secrets:       0 found
    .env files:    0 committed
    Risk level:    clean ✓

  Largest Files:
    packages/next/src/server/next-server.ts           2,847 LOC  [high]
    packages/next/src/build/webpack-config.ts         2,312 LOC  [high]
    packages/next/src/client/components/router.tsx    1,956 LOC  [high]
    packages/next/src/server/render.tsx               1,734 LOC  [high]
    packages/next/src/build/index.ts                  1,621 LOC  [high]

  Entry Points:
    → packages/next/src/server/index.ts
    → packages/next/src/client/index.ts
    → packages/create-next-app/index.ts

  Health Score: 82/100

============================================================
  Scan complete. Full JSON available via --json flag.
============================================================
```

## What the Full Report Adds (via systemaudit.dev)

The CLI scan above provides the structural foundation. When you run the same repo through [systemaudit.dev](https://systemaudit.dev), the AI analysis layer adds:

**For developers:**
- **Architecture Diagram** — Mermaid.js visualization of component relationships
- **Risk Matrix** — Security, reliability, scalability, and maintainability risks ranked by severity
- **Technical Debt Inventory** — Each item with estimated fix effort and priority
- **AI Readiness Score** — 0-100 score with breakdown across 5 dimensions
- **Prioritized Recommendations** — What to fix first and why, with effort and impact tags

**For business stakeholders:**
- **The Bottom Line** — Plain-English summary of system health and business implications
- **Business Risk Translation** — Each technical finding rewritten with "who it affects", "cost to fix", and "cost if ignored"
- **Investment Required** — Three-tier breakdown (urgent / recommended / optional) with dollar ranges and timelines
- **ROI Projection** — What the investment prevents in terms of lost revenue, delayed features, or compliance failures
- **Who You Need** — Whether your existing team can handle it or you need outside help
- **Quick Wins** — Specific actions your team can take this week
- **Exportable PDF** — Hand it to your board, investors, or development lead
