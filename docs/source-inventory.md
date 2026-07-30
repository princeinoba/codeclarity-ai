# Source inventory and provenance

## `bootcamp-homework4.zip`

### Files

```text
README.md
index.html
highscores.html
css/style.css
scripts/index.js
scripts/highscore.js
04-web-apis-homework-demo.gif
```

### Product capabilities found

- five fixed JavaScript questions;
- 75-second countdown;
- ten-second wrong-answer penalty;
- dynamic choices;
- local initials and score list;
- separate high-score page;
- responsive assignment intent.

### Useful concepts retained

- timed assessment;
- wrong-answer pressure;
- browser interaction;
- local initials score;
- quiz/progress motivation.

### Rewritten or removed

- five embedded questions became 36 structured clean-room questions;
- global state became pure domain modules and bounded browser state;
- event-target assumptions became direct button listeners;
- unsafe storage parsing became versioned normalization;
- high scores became a bounded local leaderboard;
- full score becomes Review and category Progress;
- remote Font Awesome and unclear assignment artwork were removed;
- no original code is deployed.

## `ai(3).zip`

### Measured shape

```text
Non-Git files: 7,231
JavaScript/TypeScript files: 5,588
Package manifests: 110
Workspace packages: 70
Example directories: 28 by archive-path grouping
Core package: ai 7.0.42
Node requirement: >=22
Licence: Apache-2.0
```

### Useful concepts retained

- structured provider output;
- server-only authentication;
- staged status events;
- timeout and fallback;
- provider-independent architecture;
- browser and API testing patterns.

### Explicitly excluded

- entire monorepo and Git history;
- pnpm/Turborepo/release infrastructure;
- generic chatbot;
- agent loops and tool catalogue;
- model selector;
- database, Redis, Blob and history;
- image/code/spreadsheet/weather tools;
- framework runtime and provider dependencies.

## Clean-room source

The clean-room repository contains:

- 36 questions across six categories;
- four packs;
- pure quiz/progress/coach rules;
- 12 routes;
- three Vercel Functions;
- local-only browser state;
- PWA assets;
- deterministic build and verification scripts;
- original branding and illustrations;
- provenance, architecture, security and deployment documentation.
