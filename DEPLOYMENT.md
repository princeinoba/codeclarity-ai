# CodeClarity AI deployment guide

## Repository

Use the owner-controlled repository:

```text
princeinoba/bootcamp-homework4
```

The checked live default branch is `master`. Preserve it for this release unless the owner deliberately changes the repository default branch through a separate operation.

Recommended feature branch:

```text
codex/codeclarity-ai-vercel-ready-rebuild
```

## Local release gate

```bash
npm ci --ignore-scripts
npm audit --omit=dev
npm run verify
git diff --check
```

Do not stage `dist/`, `node_modules/`, `.vercel/`, environment values, uploaded archives, browser profiles or private progress exports.

## Vercel project

Create or reuse exactly one project:

```text
Team: princeinobas-projects
Project: codeclarity-ai
Git repository: princeinoba/bootcamp-homework4
Production Branch: master
Framework: Other
Node.js: 24.x
Install: npm ci --ignore-scripts
Build: npm run build
Output: dist
Functions: api/**/*.js
Region: iad1
```

The version-controlled `vercel.json` contains redirects, Functions and security headers.

## Base environment

No secret is required.

Safe defaults:

```text
CODECLARITY_PUBLIC_INDEXING=false
CODECLARITY_LIVE_AI=0
CODECLARITY_LIVE_AI_PRODUCTION=0
SITE_URL=
```

Do not set a Preview URL as `SITE_URL`.

## Optional Preview AI

The deterministic Coach must pass Preview first.

1. Retrieve the current Vercel AI Gateway model catalogue.
2. Select a stable, lower-cost structured-output text model.
3. Review provider processing and spending controls.
4. Add a project-specific Sensitive Preview variable:

   ```text
   AI_GATEWAY_API_KEY
   ```

5. Add Preview variables:

   ```text
   CODECLARITY_AI_MODEL=<verified model ID>
   CODECLARITY_LIVE_AI=1
   ```

6. Create a fresh Preview deployment.
7. Verify valid live wording, invalid-output fallback, timeout fallback, rate-limit fallback, secret non-disclosure and unchanged scores/question IDs.

Keep Production live AI disabled unless separately approved.

## Preview gate

Require the exact pull-request SHA to pass:

- all 12 routes and designed 404;
- all three APIs and method rejection;
- Practice completion and immediate rationale;
- Sprint timing, penalty and local leaderboard entry;
- Question Bank search, filter, bookmarks and explanation reveal;
- Review, Progress export/import/clear and Leaderboard clear;
- deterministic Study Coach and NDJSON stages;
- themes, mobile navigation and command palette;
- service-worker registration/update and true offline navigation;
- axe accessibility checks and manual keyboard/focus review;
- Lighthouse measurements;
- CSP/security headers;
- zero console, page, network and runtime error clusters;
- no public source archives, `.git`, `.env` or source maps;
- noindex policy and empty sitemap.

After every code change, require a fresh CI run and fresh Preview for the new exact SHA.

## Merge and Production

Mark the pull request ready only after the Preview gate passes. Squash-merge normally into `master`; do not use administrator bypass.

Wait for Git-connected Production and confirm:

```text
Branch: master
Git SHA: merged master SHA
State: READY
```

When the stable origin is not derived correctly, set `SITE_URL` to the stable Production alias and redeploy. Keep public indexing disabled.

Repeat the complete smoke test on the public Production domain. Record the previous Production deployment ID as rollback target.

## Rollback

```bash
vercel rollback <deployment-id-or-url>
```

Repair the source through a normal branch and pull request. Browser-local sessions and scores are not server data and are not reversed by code rollback.
