---
title: "Symmetric Relation"
excerpt: "A symmetric relation works in both directions whenever a pair is present."
date: 2026-05-01
tags:
  - Foundations
  - Abstract Structure
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Sets, Relations, and Functions"
chapterSlug: sets-relations-and-functions
chapterOrder: 3
topicOrder: 15
---

# Symmetric Relation

## Definition

A relation is symmetric when every related pair also appears in reverse.

If:

```text
(a, b)
```

is in the relation, then:

```text
(b, a)
```

must also be in the relation.

> Symmetric relation = every connection works both ways.

---

## Simple Example

The relation:

```text
is sibling of
```

is symmetric.

If:

```text
Ada is sibling of Ben
```

then:

```text
Ben is sibling of Ada
```

The relationship works in both directions.

> Symmetry captures mutual connection.

---

## Non-Example

The relation:

```text
is parent of
```

is not symmetric.

If:

```text
Ada is parent of Ben
```

it does not follow that:

```text
Ben is parent of Ada
```

> A one-way relationship is not symmetric.

---

## Symmetry In Ordered Pairs

Example:

```text
R = {(1, 2), (2, 1), (2, 3), (3, 2)}
```

This relation is symmetric for the pairs shown.

Each pair has its reverse.

But:

```text
R = {(1, 2), (2, 3)}
```

is not symmetric, because the reverse pairs are missing.

> Symmetry requires reverse pairs.

---

## Final Summary

- A symmetric relation works in both directions.
- If `(a, b)` is present, `(b, a)` must also be present.
- "Is sibling of" is symmetric.
- "Is parent of" is not symmetric.
- Symmetry is about reverse ordered pairs.
