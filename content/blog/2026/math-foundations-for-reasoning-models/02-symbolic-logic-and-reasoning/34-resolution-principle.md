---
title: "Resolution Principle"
excerpt: "The resolution principle is an inference rule that combines clauses by eliminating a contradiction between a symbol and its negation."
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
topicOrder: 34
---

# Resolution Principle

## Definition

The resolution principle is an inference rule for clauses.

It uses a pair of opposite literals:

```text
P
NOT P
```

to combine two clauses into a new clause.

Basic pattern:

```text
(P OR A)
(NOT P OR B)
Therefore (A OR B)
```

> Resolution eliminates a symbol and its negation across two clauses.

---

## Simple Example

Clauses:

```text
P OR Q
NOT P OR R
```

Resolution removes:

```text
P
NOT P
```

Result:

```text
Q OR R
```

The new clause contains what remains after the opposing pair is removed.

> Resolution combines clauses through a shared conflict.

---

## Why This Works

Consider:

```text
P OR Q
```

If `P` is false, then `Q` must be true for the clause to hold.

Consider:

```text
NOT P OR R
```

If `P` is true, then `R` must be true for the clause to hold.

Either way, at least one of:

```text
Q OR R
```

must hold.

> Resolution keeps what must remain after the opposing cases are considered.

---

## Resolution And CNF

Resolution is usually applied to expressions in conjunctive normal form.

Example CNF:

```text
(P OR Q) AND (NOT P OR R)
```

The clauses are:

```text
P OR Q
NOT P OR R
```

Resolution produces:

```text
Q OR R
```

> CNF gives resolution a clean clause structure to operate on.

---

## Resolution As Inference

Resolution is an inference rule.

It does not guess.

It transforms given clauses into a clause that follows from them.

Pattern:

```text
premise clauses -> resolution rule -> new clause
```

This fits the broader idea:

```text
premises -> inference -> conclusion
```

> Resolution is one formal way to derive conclusions.

---

## Final Summary

- Resolution is an inference rule for clauses.
- It uses opposite literals such as `P` and `NOT P`.
- From `(P OR A)` and `(NOT P OR B)`, it derives `(A OR B)`.
- Resolution works naturally with CNF.
- Resolution is rule-governed inference, not guessing.
- It is useful because it gives a mechanical way to derive consequences from logical clauses.
