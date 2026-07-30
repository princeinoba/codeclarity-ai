# Implementation preflight

Review date: 29 July 2026

## Verified inputs

```text
bootcamp-homework4.zip
SHA-256: 243a3cc5beb86fdd451effb3bb5866e9e9af25319a004055a76a71b17cdb7e39

ai(3).zip
SHA-256: ffaa74d14f617cc5311bd57f2d0d9fe06673f74fe6e127f2de78134553b4e34d
```

## Original weather—correction: quiz—source

The first archive is not an AI-car, burger or weather project. It is the Web APIs bootcamp JavaScript code-quiz assignment.

```text
Origin: https://github.com/princeinoba/bootcamp-homework4.git
Embedded HEAD: 66afa98df451cdc8b2cc78d02e543423f1e8ed15
Branch: master
Non-Git files: 7
Source lines outside Git: 767
```

`git diff --ignore-space-at-eol --quiet` passed after extraction, so apparent working-tree modifications were line-ending conversion rather than unpublished semantic work.

The live GitHub repository exists, is public, and the authenticated owner has admin/push permissions. Its checked default branch is `master`.

## AI archive

```text
Origin: https://github.com/vercel/ai.git
Embedded HEAD: a56fbc08fd5c171574a499babfbd82f0b2a7b3fe
Branch: main
Non-Git files: 7,231
JavaScript/TypeScript files: 5,588
Package manifests: 110
Core ai package: 7.0.42
Licence: Apache-2.0
```

The archive is a platform monorepo, not a quiz module. A literal merge was rejected.

## Selected baseline

The implementation is clean-room and dependency-free. It preserves:

- the timed quiz;
- wrong-answer time pressure;
- local score initials;
- dynamic browser interaction;
- structured, server-only optional AI wording and fallback concepts.

It does not preserve:

- the historical implementation;
- assignment GIF;
- fragile global script state;
- external Font Awesome;
- unbounded storage;
- the AI monorepo;
- generic chat, agents, tools, accounts or persistence.

## Target release

```text
Product: CodeClarity AI
Tagline: Test your skills. Understand every answer.
Repository: princeinoba/bootcamp-homework4
Feature branch: codex/codeclarity-ai-vercel-ready-rebuild
Vercel project: codeclarity-ai
Production branch: master
```

No Vercel project named `codeclarity-ai` existed when checked.
