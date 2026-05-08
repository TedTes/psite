---
title: "Reflexive Relation"
excerpt: "A reflexive relation relates every element in a set to itself."
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
topicOrder: 14
---

# Reflexive Relation

## Definition

A relation is reflexive when every element is related to itself.

For a set:

```text
A = {1, 2, 3}
```

a reflexive relation must include:

```text
(1, 1)
(2, 2)
(3, 3)
```

> Reflexive relation = every element has a self-pair.

---

## Simple Example

The relation:

```text
less than or equal to
```

is reflexive over numbers because every number is less than or equal to itself.

Example:

```text
1 <= 1
2 <= 2
3 <= 3
```

> Reflexivity captures self-connection.

---

## Non-Example

The relation:

```text
less than
```

is not reflexive.

Why?

Because:

```text
1 < 1
```

is false.

No number is less than itself.

> A relation is not reflexive if even one element lacks a self-pair.

---

## Reflexive On A Set

Reflexivity is always relative to a set.

Example:

```text
A = {1, 2}
R = {(1, 1), (2, 2)}
```

`R` is reflexive on `A`.

But if the set is:

```text
B = {1, 2, 3}
```

then `R` is not reflexive on `B`, because `(3, 3)` is missing.

> Reflexivity depends on the set being considered.

---

## Final Summary

- A reflexive relation relates every element to itself.
- Reflexivity requires every self-pair.
- "Less than or equal to" is reflexive over numbers.
- "Less than" is not reflexive.
- Reflexivity depends on the set being considered.
