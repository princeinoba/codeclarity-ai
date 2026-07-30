# CodeClarity AI agent guidance

## Product boundary

CodeClarity AI is a local-first coding-practice, timed-assessment, review, progress and bounded Study Coach portfolio demonstration. It is not a certification platform, code-execution sandbox, hiring decision system, account service or cloud learner profile.

## Sources of truth

- `src/content/questions.mjs`: 36 verified clean-room questions.
- `src/content/categories.mjs`: six skill categories.
- `src/content/packs.mjs`: practice and sprint pack definitions.
- `src/lib/quiz-core.mjs`: deterministic selection, evaluation and completed-session rules.
- `src/lib/progress-core.mjs`: local state schemas and bounds.
- `src/lib/coach-core.mjs`: deterministic plan and live-wording validator.
- `src/templates/`: generated documents.
- `src/static/`: browser enhancements and local assets.
- `api/`: three Vercel Functions only.

## Non-negotiable rules

1. Never expose correct answers through `/api/questions`.
2. Never allow the Study Coach to change scores, question IDs, answer evidence or boundaries.
3. Keep deterministic Coach output complete without a provider key.
4. Do not store progress automatically on a server.
5. Do not add accounts, database, analytics, advertising or public rankings in this release.
6. Never use `localStorage.clear()`; clear only CodeClarity keys.
7. Keep session, score, bookmark and import limits enforced.
8. Never promise employment, interview, certification or exam outcomes.
9. Do not execute user code.
10. Keep secrets server-side and never use a browser-public key prefix.
11. Do not copy the uploaded Vercel AI SDK monorepo.
12. Preserve original-source provenance in `NOTICE.md`.
13. Do not add a clean-room licence until the owner approves one.

## Commands

```bash
npm ci --ignore-scripts
npm run dev
npm run lint
npm test
npm run build
npm run verify:build
npm run smoke
npm run verify:determinism
npm run scan:secrets
npm run verify
```

## Release budgets

- Complete `dist`: at most 1.5 MB.
- Browser JavaScript: at most 140 KB uncompressed.
- CSS: at most 70 KB uncompressed.
- External npm dependencies: zero unless separately approved.

## Files never to commit

`dist/`, `node_modules/`, `.vercel/`, environment values, ZIP archives, browser profiles, credentials, generated test artifacts and imported learner exports.

## Release gate

A release requires the exact final commit to pass local verification, GitHub Actions, Vercel Preview browser/accessibility/PWA/security verification, normal pull-request merge and merged-branch Production verification.
