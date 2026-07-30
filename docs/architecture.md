# CodeClarity AI target architecture

## Product model

CodeClarity connects three journeys:

```text
Practice Lab
→ immediate rationale and explanation
→ completed session

Interview Sprint
→ pressure and time penalty
→ completed session + optional local score

Completed session
→ Review
→ category Progress
→ deterministic Study Coach
→ targeted question IDs
```

The question bank is one source of truth for all journeys.

## Runtime architecture

```text
Vercel CDN
├── generated public documents
├── local design system and ES modules
├── clean-room question data
├── PWA manifest and service worker
├── browser-local scoped data
└── Vercel Node Functions
    ├── health
    ├── public question metadata
    └── Coach
        ├── request normalization
        ├── local rate guard
        ├── verified category analysis
        ├── deterministic plan
        ├── optional AI Gateway wording
        ├── output validation
        └── deterministic fallback
```

## Feature boundaries

### Content

`src/content/questions.mjs`, `categories.mjs` and `packs.mjs` own editorial data. Questions include an answer index, explanation and a rationale for every choice. Public API projection removes protected answer data.

### Quiz domain

`src/lib/quiz-core.mjs` owns:

- seeded selection;
- literal search;
- answer evaluation;
- score calculation;
- completed-session construction;
- category evidence.

It does not touch the DOM or storage.

### Progress domain

`src/lib/progress-core.mjs` owns versioned normalization and bounds for sessions, leaderboard and bookmarks. It exposes export/import contracts and aggregate progress.

### Coach domain

`src/lib/coach-core.mjs` accepts bounded verified context, selects weak/focus areas and returns five new practice IDs. Live AI can only rewrite four copy fields.

### Server boundary

`src/server/handlers.mjs` is framework-independent. Root `api/*.js` files adapt Node requests/responses for Vercel.

### Browser boundary

`src/static/assets/modules/` owns DOM and scoped-storage adapters. Route scripts own route interaction only. Core domain modules are copied into `dist/assets/lib` for reuse without duplication.

## Data contracts

### Completed session

```ts
interface CompletedSession {
  version: 1;
  id: string;
  mode: "practice" | "sprint";
  packId: string;
  seed: string;
  startedAt: string;
  completedAt: string;
  durationSeconds: number;
  remainingSeconds: number;
  questionIds: string[];
  answers: Array<{
    questionId: string;
    selectedIndex: number | null;
    correct: boolean;
    answeredAt: string;
    elapsedMs: number;
  }>;
  correct: number;
  total: number;
  accuracy: number;
  score: number;
  categoryStats: Array<{
    category: string;
    correct: number;
    total: number;
    accuracy: number;
  }>;
}
```

### Coach plan

```ts
interface CoachPlan {
  version: 1;
  mode: "deterministic" | "live-assisted";
  headline: string;
  summary: string;
  focusAreas: Array<{
    category: string;
    name: string;
    reason: string;
    incorrectQuestionIds: string[];
  }>;
  studySteps: string[];
  practiceQuestionIds: string[];
  encouragement: string;
  boundaries: string[];
}
```

## AI boundary

The deterministic plan is created before the provider call. The provider receives the visitor's bounded current note and a reduced plan summary, not answer keys or a full history.

Allowed live changes:

```text
headline
summary
studySteps
encouragement
```

Immutable fields:

```text
focus areas
question IDs
incorrect IDs
scores and totals
boundaries
```

Rejected output includes job guarantees, guaranteed exam success, demeaning language or answer revelation. Timeout, error, rate limit and invalid output all return the deterministic plan.

## Security architecture

- no account or database;
- no third-party browser origin;
- no browser secret;
- no dynamic HTML injection;
- strict CSP;
- HSTS, frame denial, MIME protection, strict referrer policy, COOP and CORP;
- camera, microphone, geolocation, payment, USB and browsing topics disabled;
- API bounds and method allowlists;
- no-store Coach and health responses;
- public question metadata cache without answer keys;
- no API caching in service worker;
- high-confidence source/generated secret scan.

## Scalability path

The current local-first architecture is ideal for a portfolio and individual practice. A shared platform should add bounded contexts rather than a single large database:

```text
Identity and organizations
Question editorial governance
Assessment delivery
Private learner evidence
Assignments and curricula
Instructor review
Certificates and assessment policy
AI evaluations and provider spend
Audit and incident response
```

A future framework migration is justified only when those shared features require authenticated server-rendered data or a larger React product team.
