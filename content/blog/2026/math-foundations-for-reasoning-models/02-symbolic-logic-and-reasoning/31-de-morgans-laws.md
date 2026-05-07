---
title: "De Morgan's Laws"
excerpt: "De Morgan's laws explain how negation moves across AND and OR."
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
topicOrder: 31
---

# De Morgan's Laws

## Definition

De Morgan's laws describe how NOT interacts with AND and OR.

The two basic forms are:

```text
NOT (P AND Q) = (NOT P) OR (NOT Q)
```

and:

```text
NOT (P OR Q) = (NOT P) AND (NOT Q)
```

> De Morgan's laws show how negation changes logical structure.

---

## Negating AND

Statement:

```text
P AND Q
```

This is true only when both `P` and `Q` are true.

Negation:

```text
NOT (P AND Q)
```

This means:

```text
It is not the case that both P and Q are true.
```

Equivalent form:

```text
(NOT P) OR (NOT Q)
```

At least one part fails.

> Not both means at least one is not true.

---

## Negating OR

Statement:

```text
P OR Q
```

This is true when at least one part is true.

Negation:

```text
NOT (P OR Q)
```

This means:

```text
Neither P nor Q is true.
```

Equivalent form:

```text
(NOT P) AND (NOT Q)
```

Both parts fail.

> Not either means both are not true.

---

## Why AND Becomes OR

When negating:

```text
P AND Q
```

you do not need both parts to fail.

Only one failed part is enough to make the AND statement false.

So the negation uses OR:

```text
NOT P OR NOT Q
```

> The negation of AND requires at least one failure.

---

## Why OR Becomes AND

When negating:

```text
P OR Q
```

one true part is enough to make the OR statement true.

To make the OR statement false, both parts must fail.

So the negation uses AND:

```text
NOT P AND NOT Q
```

> The negation of OR requires all alternatives to fail.

---

## Final Summary

- De Morgan's laws explain how NOT moves across AND and OR.
- `NOT (P AND Q)` becomes `(NOT P) OR (NOT Q)`.
- `NOT (P OR Q)` becomes `(NOT P) AND (NOT Q)`.
- Negating AND requires at least one failed part.
- Negating OR requires all parts to fail.
- These laws are useful for rewriting logical expressions.
