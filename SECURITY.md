# Security policy

## Supported release

Security fixes apply to the current `master` release of CodeClarity AI.

## Reporting

Use the private GitHub security-advisory flow for `princeinoba/bootcamp-homework4`. Do not open a public issue containing a secret, exploit, private learner export or provider credential.

## Current security boundary

- no account;
- no database;
- no analytics or advertising;
- no public file upload;
- no code execution;
- scoped browser-local progress only;
- three bounded APIs;
- no answer key from `/api/questions`;
- 16 KB Coach request limit;
- in-instance 20-request/10-minute portfolio rate guard;
- server-only optional AI credential;
- provider timeout and deterministic fallback;
- restrictive CSP and response headers;
- no third-party browser scripts, fonts or images.

The in-memory Function rate guard is not shared between serverless instances. A high-volume public AI release needs distributed or platform-level abuse controls and spend management.

## AI boundary

The provider receives only bounded current study context. It must not receive a hidden learner profile, complete unrelated history or a secret. Live wording can revise copy but cannot change scores, question IDs, focus evidence or product boundaries.

The Coach does not promise employment, certification, interview success or exam outcomes, and it does not replace instructor review.

## Local data

Progress exports may contain question IDs, selected indices, timestamps, local initials and notes. Treat them as private learning records. The application never uploads an imported export automatically.

## Future cloud release

Accounts or synchronization require separately reviewed authentication, record ownership, encryption, retention, export/deletion, audit, rate limiting, monitoring, incident response, privacy and penetration testing.
