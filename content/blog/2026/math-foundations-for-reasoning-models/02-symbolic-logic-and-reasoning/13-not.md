---
title: "NOT"
excerpt: "NOT reverses the truth value of a proposition."
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
topicOrder: 13
---

# NOT

## Definition

NOT is a logical operator that reverses a proposition's truth value.

Example:

```text
NOT P
```

If `P` is true, then `NOT P` is false.

If `P` is false, then `NOT P` is true.

> NOT turns true into false and false into true.

---

## Simple Example

Let:

```text
P = "It is raining"
```

Then:

```text
NOT P
```

means:

```text
It is not raining.
```

If `P` is true, `NOT P` is false.

If `P` is false, `NOT P` is true.

> NOT denies the proposition it applies to.

---

## Truth Pattern

NOT has this truth pattern:

```text
P      NOT P
true   false
false  true
```

NOT only works on one proposition.

Operators like AND and OR combine two propositions.

NOT modifies one proposition.

> NOT is a one-input logical operator.

---

## Double Negation

Applying NOT twice returns the original truth value.

Example:

```text
NOT (NOT P)
```

If:

```text
P = true
```

then:

```text
NOT P = false
NOT (NOT P) = true
```

So:

```text
NOT (NOT P)
```

has the same truth value as:

```text
P
```

> Double negation cancels out in classical logic.

---

## NOT In Reasoning

NOT is useful for expressing denial, contradiction, and exclusion.

Example:

```text
P
NOT P
```

Both cannot be true at the same time in classical logic.

This creates a contradiction.

> NOT helps define what conflicts with a statement.

---

## Final Summary

- NOT reverses a proposition's truth value.
- If `P` is true, `NOT P` is false.
- If `P` is false, `NOT P` is true.
- NOT applies to one proposition.
- Double negation returns the original truth value.
- NOT is central to contradiction and exclusion.
