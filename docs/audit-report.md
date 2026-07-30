# CodeClarity AI — complete product, architecture, code and UX audit

## Executive assessment

The original upload successfully demonstrated the bootcamp acceptance criteria, but it was a homework-scale implementation rather than a maintainable learning product. It had five embedded questions, one timed flow, one local score array and no meaningful review, progress, error, accessibility, security or release architecture.

The uploaded AI archive was the complete Vercel AI SDK repository. Its useful value was architectural—not something to concatenate into the quiz. The selected redesign is therefore a focused coding-learning product with an optional bounded Study Coach rather than a generic chatbot.

## Product architecture findings

### P1 — A completed score was a dead end

**Observation.** The journey ended with a remaining-time score and initials. The visitor could not inspect missed questions, understand why an answer was wrong, see category patterns or choose targeted practice.

**Evidence.** `scripts/index.js:193–210` ends the game and writes only `totalTime`; `:217–260` saves initials and score. The historical data model contains no answer, question or category evidence.

**Impact.** The score measured pressure but did not support learning. Returning users had no connected progression journey.

**Implemented correction.** Practice and Sprint now create normalized completed sessions with question IDs, selected indices, correct flags, time evidence and category totals. Review, Progress and Study Coach consume the same record.

### P2 — One experience attempted to serve practice and assessment

**Observation.** A single 75-second flow provided neither patient learning nor a realistic repeatable assessment workspace.

**Impact.** Beginners were rushed before they understood the rule; experienced visitors had only five predictable questions.

**Implemented correction.** The product now has separate Practice Lab and 90-second Interview Sprint journeys that converge in Review and Progress.

### P3 — “Compared to peers” was not supported

**Observation.** The assignment user story referred to peer comparison, but the score list existed only in one browser.

**Impact.** The interface could imply social benchmarking where no shared population existed.

**Implemented correction.** The page is explicitly named Local Leaderboard and says it is not shared peer ranking.

### P4 — Five fixed questions made repetition meaningless

**Observation.** All questions were hard-coded at `scripts/index.js:33–43`.

**Impact.** Users could memorize order rather than develop skill; the code offered no content ownership model.

**Implemented correction.** A clean-room catalogue defines 36 records across JavaScript Basics, Functions & Scope, Arrays & Objects, DOM & Events, Web APIs & Storage, and Accessibility & Security. Four packs use deterministic seeded selection.

### P5 — A generic chatbot would fragment the product

**Observation.** The second archive was an AI platform monorepo with thousands of files and unrelated examples.

**Impact.** Forking it would move the primary value from coding practice to model/chat configuration and introduce disproportionate dependencies and operations.

**Implemented correction.** The Study Coach is a narrow plan generator. It accepts verified IDs and category evidence, returns bounded steps and five new practice IDs, and remains deterministic without a key.

## Codebase and security findings

### C1 — Implicit global variable

**Evidence.** `scripts/index.js:68` uses `for (element of siblingList)` without a declaration.

**Severity.** Medium.

**Impact.** The loop writes `element` to global scope, creating accidental coupling and strict-mode failure.

**Correction.** Clean-room ES modules use lexical declarations and syntax-policy checks.

### C2 — Fragile event-target traversal

**Evidence.** `scripts/index.js:122–124` assumes every click target has a parent with `data-index`.

**Severity.** High for interaction reliability.

**Impact.** Clicking whitespace, nested content or the list itself can produce `NaN` and still advance the quiz.

**Correction.** Each answer button receives its own listener and passes a validated integer index to pure evaluation logic.

### C3 — Full DOM regeneration through `innerHTML`

**Evidence.** `scripts/index.js:108–118` clears the choices with `innerHTML`.

**Severity.** Medium.

**Impact.** It is unnecessary, less safe as content grows, and discards nodes/listeners.

**Correction.** Browser modules use `replaceChildren`, `textContent` and element construction.

### C4 — Conflicting presentation state

**Evidence.** `scripts/index.js:136–142` assigns timer colours in JavaScript while `css/style.css` also owns visual presentation.

**Impact.** Visual rules become scattered and difficult to theme.

**Correction.** State is expressed through semantic classes/data attributes; CSS owns colour and reduced motion.

### C5 — Timer and message copy defects

**Evidence.** `scripts/index.js:207–209` outputs “Sorry! time out!” and “Congrats! Your done!”; `index.html:20–22` permanently renders “Time: 75seconds” alongside the live timer.

**Impact.** The interface looks unfinished and presents contradictory time information.

**Correction.** Sprint has one accessible live timer, clear completion reasons and designed result summaries.

### C6 — Initials validation was incomplete and unbounded

**Evidence.** `scripts/index.js:217–247` uppercases but does not trim or bound input. `index.html:47` has no `maxlength`. A previous error is not deliberately cleared.

**Severity.** Medium.

**Impact.** Whitespace can pass inconsistently; huge values inflate storage and break layout.

**Correction.** Initials are stripped to letters, uppercased and limited to four. UI and domain tests enforce the same rule.

### C7 — Malformed local storage could crash both pages

**Evidence.** `scripts/index.js:263–269` and `scripts/highscore.js:12–23` call `JSON.parse` without a recovery boundary.

**Severity.** High for local resilience.

**Impact.** One malformed or outdated value can break saving or leaderboard rendering.

**Correction.** Every scoped state has a schema version, normalization, allowlists, bounds and safe malformed/wrong-version reset.

### C8 — Score storage grew without limit

**Evidence.** `scripts/index.js:257–285` continually inserts scores; no cap exists.

**Impact.** Browser state and rendering grow forever.

**Correction.** Sessions cap at 40 and local leaderboard entries at 20.

### C9 — Clear operation did not clear the key

**Evidence.** `scripts/highscore.js:57–62` writes `[]` directly through `localStorage.setItem`, coercing it to an empty string.

**Impact.** The stored value no longer matches the JSON format expected by the page.

**Correction.** CodeClarity removes only the leaderboard key and re-renders an explicit empty state.

### C10 — Documentation contradicted behaviour

**Evidence.** `README.md:4` says restarting clears stored scores. No restart code clears `scoreList`.

**Impact.** Users and maintainers cannot trust the documented data lifecycle.

**Correction.** README and Privacy document exact local keys, persistence, limits and explicit clear controls.

### C11 — Remote and unnecessary browser dependencies

**Evidence.** `index.html:7–10` and `highscores.html:7–10` load a remote Font Awesome kit.

**Impact.** Extra privacy, performance, CSP and availability surface for decorative icons.

**Correction.** Original local SVG assets replace all remote browser resources.

### C12 — No release contract

**Observation.** The source had no `package.json`, tests, CI, build, security headers, metadata, PWA or Vercel configuration.

**Impact.** There was no reproducible proof that the exact deployed version worked or contained no exposed secrets.

**Correction.** One `npm run verify` command runs syntax/policy checks, 38 tests, secret scanning, build verification, HTTP smoke and byte-identical double builds. GitHub Actions uses Node 24.

### C13 — Rights boundary was unclear

**Evidence.** `README.md:68–72` contains Trilogy/2U “All Rights Reserved” notices and the archive includes no standalone software licence.

**Impact.** Copying assignment text, art or code into a new commercial package could misrepresent rights.

**Correction.** The rebuild is clean-room, excludes the assignment GIF, documents provenance and assigns no new licence without owner approval.

## UX and accessibility findings

### U1 — Feedback disappeared before it could teach

The original correct/wrong status appeared for one second, then the next question replaced the context. There was no explanation.

**Correction.** Practice keeps the selected answer, verified answer, per-choice rationale and explanation visible until the visitor moves forward. Sprint preserves speed but sends every result to Review.

### U2 — Answer interaction lacked defensive semantics

The original answer was a button inside a list item but click handling was attached to the list and inferred through a parent node. Status was not a deliberate live region.

**Correction.** Native buttons, direct listeners, grouped accessible choices and live status are used.

### U3 — The high-score table lacked complete table semantics and empty state

**Evidence.** `highscores.html:21–28` has one row of headings without `caption`, `thead`, `tbody` or a no-score explanation.

**Correction.** The local leaderboard uses caption, proper table sections, responsive overflow and a designed empty state.

### U4 — No loading, failure or recovery states

The original local-only app had no provider calls, but it also had no resilient state for malformed storage, interrupted actions or empty results.

**Correction.** The rebuild includes initial, loading, answer, result, empty, no-result, import-error, rate-limit, fallback, offline and 404 states.

### U5 — Mobile and keyboard journeys were not verified

The assignment intended responsiveness but had no automated or documented checks.

**Correction.** The clean-room UI includes large targets, semantic controls, visible focus, skip link, mobile navigation, command palette, reduced motion and browser verification at desktop/tablet/mobile sizes.

## Developer-productivity audit

### Quick wins implemented

- corrected copy and one clear live timer;
- removed remote icons;
- added `maxlength` and domain validation;
- replaced global variables and `innerHTML`;
- bounded and normalized storage;
- added designed empty/error states;
- centralized question content;
- added package scripts and `.env.example`.

### Medium refactors implemented

- separated content, quiz rules, progress rules, Coach rules, server handlers, templates and browser modules;
- added one normalized session model shared by Review, Progress and Coach;
- added reusable layout/page sections and original design tokens;
- added read-only public question metadata API;
- added deterministic seeded packs and literal search;
- added import/export and local state migrations.

### Major architecture implemented

- clean-room static generator and bounded Vercel Functions;
- optional provider wording behind a deterministic source of truth;
- PWA/offline shell;
- complete security headers and noindex release controls;
- automated CI, deterministic builds, secret scans and browser evidence.

### Deferred deliberately

- accounts and cross-device progress;
- public peer ranking;
- code execution and interactive programming tasks;
- instructor/organization dashboards;
- certified assessments;
- adaptive spaced repetition;
- distributed rate limiting for a high-volume live-AI release.

Those capabilities require separate identity, authorization, privacy, retention, moderation, abuse, observability and operating decisions.
