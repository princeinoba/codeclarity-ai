# Verification report

Status:

```text
PASS — LOCAL, CLEAN-ROOM AND GENERATED-OUTPUT GATES COMPLETED.
READY FOR AN HTTPS VERCEL PREVIEW.
```

## Environment

```text
Verification Node.js: v24.18.0
Verification npm: 10.2.4
Production/CI target: Node.js 24.x
External npm dependencies: 0
Known npm vulnerabilities: 0
```

Local verification ran on the pinned Node 24 production and CI target. The implementation uses supported built-in APIs and all gates passed.

## Automated release results

```text
JavaScript syntax/policy files: 42 passed
Automated tests: 38 passed
Failed tests: 0
High-confidence source/config secret findings: 0
Canonical documents: 12
Physical HTML files: 13
Generated files: 47
Build assertions: 224 passed
HTTP smoke assertions: 58 passed
Complete generated output: 264,489 bytes
Browser JavaScript: 83,116 bytes
CSS: 27,910 bytes
Deterministic files compared: 47
Generated-tree SHA-256: 96f48686751a5185c93fcca76a4af99829436573aed1b93402ead41443c3cb97
```

## Output budgets

```text
Complete output: 264,489 / 1,500,000 bytes
Browser JavaScript: 83,116 / 140,000 bytes
CSS: 27,910 / 70,000 bytes
```

## Clean-room verification

A new empty directory was populated with only the intended repository files. The copy excluded `.git`, `.vercel`, `node_modules`, `dist`, ZIP archives, and environment values.

```text
Intended source and evidence files: 92
npm ci --ignore-scripts: passed
npm audit --omit=dev: 0 vulnerabilities
npm run verify: passed
Clean-room generated files: 47
Clean-room generated-tree SHA-256: 96f48686751a5185c93fcca76a4af99829436573aed1b93402ead41443c3cb97
```

## Defects caught during verification

1. A filtered question selection could silently add another difficulty when the selected difficulty contained fewer records than the requested count. The selector now honours the filter and returns the available bounded set.
2. Initials were truncated before non-letter removal, causing valid later letters to disappear. Normalization now strips invalid characters before the four-letter cap.
3. A mobile grid track inherited the illustration's intrinsic width and created 260 pixels of horizontal overflow. Grid children now use `min-width: 0` and mobile tracks use `minmax(0,1fr)`.
4. Dynamic progress bars originally relied on inline style widths, conflicting with the strict CSP. Native accessible `<progress>` elements replaced them.
5. A policy scanner matched its own test pattern and the intentional offline retry action. Policy scope and the retry implementation were corrected without weakening source checks.
6. Direct browser verification found that maxlength=4 truncated raw initials before domain normalization. The field now accepts the same 32-character bounded raw input as the domain normalizer, then strips non-letters and caps the stored value at four; build and domain regression assertions cover the sequence.

## Browser evidence

Direct navigation and interaction ran in headless Chromium against the exact generated output on `http://127.0.0.1:4289`.

Verified viewports:

```text
Desktop: 1440 × 1000
Mobile: 390 × 844
```

Verified journeys and states:

```text
Home and all 12 canonical routes
Designed 404
Eight-question Practice with persistent rationale and completion
Question Bank literal search, bookmark and explanation reveal
Ten-question Sprint, timer, penalty path and completion
Initials normalization: r0yce! -> RYCE
Local Leaderboard labeling and persistence
Completed-session Study Coach submission and deterministic plan
Active service-worker registration
Progress navigation with the local origin stopped
```

Browser results:

```text
Exactly one main on generated documents: passed
Exactly one primary h1 on generated documents: passed
Horizontal overflow on checked mobile pages: 0
Console errors: 0
Page errors: 0
Study Coach mode: deterministic
Service worker state: activated
Offline canonical navigation: passed
```

The release browser run used fresh browser state after the initials fix so an older service-worker cache could not mask the final asset.
## Preview-only mandatory checks

Because direct HTTPS navigation was unavailable locally, no claim is made for:

- navigated-page axe scans;
- Lighthouse scores;
- actual service-worker registration and update lifecycle;
- true offline navigation through the registered service worker;
- PWA installability;
- runtime CSP console output from Vercel headers;
- Vercel build and Function logs;
- Vercel runtime error clusters;
- live AI provider behaviour.

Those remain exact-commit Vercel Preview gates described in `DEPLOYMENT.md`.
