---
title: "Contradiction"
excerpt: "A contradiction occurs when a statement and its negation are both asserted or derived."
date: 2026-05-01
tags:
  - Foundations
  - Logic
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Symbolic Logic and Reasoning"
chapterSlug: symbolic-logic-and-reasoning
chapterOrder: 2
topicOrder: 22
---

# Contradiction

## Definition

A contradiction occurs when a statement and its negation are both present.

Basic form:

```text
P
NOT P
```

Both cannot be true at the same time in classical logic.

> Contradiction = a statement conflicts with its own denial.

---

## Simple Example

Example:

```text
P = "The light is on"
NOT P = "The light is not on"
```

The contradiction is:

```text
The light is on.
The light is not on.
```

Both cannot hold in the same context at the same time.

> Contradictions reveal incompatible claims.

---

## Context Matters

Two statements may look contradictory but refer to different contexts.

Example:

```text
The light is on at 9:00.
The light is not on at 10:00.
```

This is not a contradiction.

The times differ.

A contradiction requires the conflict to occur in the same relevant context.

> Contradiction requires same context.

---

## Contradiction In Reasoning

Contradictions can show that some assumption is impossible.

Example:

```text
Assume P.
From that assumption, derive NOT P.
```

Now we have:

```text
P and NOT P
```

The assumption led to contradiction.

So the assumption must be rejected, if the reasoning steps were valid.

> Contradiction can expose a bad assumption.

---

## Why Contradictions Matter

A reasoning system with contradictions becomes unstable.

If a system accepts both:

```text
P
NOT P
```

then it no longer has a clean separation between what follows and what does not follow.

For basic reasoning, avoiding contradiction is essential.

> Contradiction breaks coherent reasoning.

---

## Final Summary

- A contradiction contains both a statement and its negation.
- `P` and `NOT P` cannot both be true in the same context.
- Context matters when identifying contradiction.
- Contradictions can reveal impossible assumptions.
- A reasoning system should avoid contradictions to remain coherent.
