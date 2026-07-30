# CodeClarity AI

> Test your skills. Understand every answer.

CodeClarity AI is a clean-room evolution of the original `bootcamp-homework4` JavaScript code quiz. It preserves the useful timed-assessment idea and expands it into a coherent coding-learning workspace:

- untimed Practice Lab with immediate answer rationales;
- a 90-second ten-question Interview Sprint;
- a searchable 36-question bank;
- detailed completed-session Review;
- browser-local Progress and Leaderboard workspaces;
- a bounded deterministic Study Coach;
- optional Vercel AI Gateway wording that cannot change verified evidence;
- responsive themes, PWA shell, offline pages, security headers and Vercel release tooling.

## Product boundary

The project is a portfolio demonstration. It has no account, database, analytics, cloud learner profile, public ranking, certificate, code execution or hiring decision system. Local results are not proof of job readiness or professional qualification.

## Routes

```text
/
/practice/
/sprint/
/question-bank/
/review/
/progress/
/leaderboard/
/coach/
/about/
/privacy/
/offline/
/404/
```

## APIs

```text
GET  /api/health
GET  /api/questions
POST /api/coach
```

`/api/questions` intentionally omits answer keys and explanations. The browser bundles the clean-room question bank for the local learning experience, while the public metadata API remains safe for discovery use.

## Architecture

```text
Vercel CDN
├── 12 generated documents
├── local CSS, JavaScript, SVG and PNG assets
├── clean-room question catalogue
├── browser-local sessions, scores and bookmarks
├── PWA manifest and service worker
└── Node.js Vercel Functions
    ├── GET /api/health
    ├── GET /api/questions
    └── POST /api/coach
        ├── validate and bound context
        ├── analyse verified IDs and category totals
        ├── build deterministic plan
        ├── optionally request guarded wording
        ├── validate live output
        └── fall back deterministically
```

The release has zero external npm dependencies. Node's built-in test runner, file APIs, HTTP server and crypto primitives power the verification toolchain.

## Local data

```text
codeclarity:theme:v1
codeclarity:preferences:v1
codeclarity:sessions:v1
codeclarity:leaderboard:v1
codeclarity:bookmarks:v1
```

Limits:

- 40 completed sessions;
- 20 local leaderboard entries;
- 50 bookmarked questions;
- 512 KB import file;
- four letters per leaderboard initials value.

The Progress page can export, import and clear local learning records. The Leaderboard can be cleared separately.

## Study Coach

The deterministic Coach uses only context deliberately submitted by the visitor:

- selected completed-session question IDs;
- missed question IDs;
- category totals;
- optional selected category;
- an optional bounded note.

It returns focus areas, study steps and five practice question IDs. It cannot change scores, reveal answer keys through the API, run code, grade external work or promise outcomes.

Optional live wording uses:

```text
CODECLARITY_LIVE_AI=1
CODECLARITY_AI_MODEL=<current verified Vercel AI Gateway model ID>
AI_GATEWAY_API_KEY=<Sensitive server-side value>
```

Production additionally requires explicit approval through:

```text
CODECLARITY_LIVE_AI_PRODUCTION=1
```

No key is required for the complete deterministic product.

## Development

Requirements:

```text
Node.js 24.x for Production and CI
npm 10+
```

The current audit environment used Node.js 22.16.0 and therefore displayed an expected engine warning; all zero-dependency tests and builds still passed.

```bash
npm ci --ignore-scripts
npm run dev
```

Open `http://127.0.0.1:4173`.

## Verification

```bash
npm run verify
```

This runs:

1. syntax and source policy checks;
2. automated tests;
3. high-confidence secret scanning;
4. deterministic production build;
5. generated-document and output-budget checks;
6. live HTTP smoke tests;
7. a second-build byte comparison.

## Vercel

Recommended project settings:

```text
Project: codeclarity-ai
Framework: Other
Node.js: 24.x
Install: npm ci --ignore-scripts
Build: npm run build
Output: dist
Functions: api/**/*.js
Production branch: master
```

The initial public release remains noindex. See `DEPLOYMENT.md`.

## Provenance

The original bootcamp project and uploaded Vercel AI SDK repository are documented in `NOTICE.md` and `docs/source-inventory.md`. This implementation is clean-room: it retains product lessons, not the original implementation or the AI monorepo.
