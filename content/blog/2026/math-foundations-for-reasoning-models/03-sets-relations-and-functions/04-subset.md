---
title: "Subset"
excerpt: "A subset is a set whose elements all belong to another set."
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
topicOrder: 4
---

# Subset

## Definition

A set is a subset of another set if every element of the first set is also in the second set.

Example:

```text
A = {1, 2}
B = {1, 2, 3}
```

`A` is a subset of `B` because every element in `A` is also in `B`.

> Subset = every element is included in the larger set.

---

## Subset vs Element

An element is an object inside a set.

A subset is a set inside another set by membership of its elements.

Example:

```text
B = {1, 2, 3}
```

Element:

```text
2
```

Subset:

```text
{1, 2}
```

The element `2` is not the same type of thing as the subset `{1, 2}`.

> Element belongs to a set; subset is contained by element inclusion.

---

## Every Set Is A Subset Of Itself

Example:

```text
A = {1, 2, 3}
```

Every element of `A` is in `A`.

So:

```text
A is a subset of A
```

This may feel obvious, but it matters for precise reasoning.

> A set is always a subset of itself.

---

## Proper Subset

A proper subset is contained in another set but is not equal to it.

Example:

```text
A = {1, 2}
B = {1, 2, 3}
```

`A` is a proper subset of `B`.

Why?

Because `B` has at least one element not in `A`.

> Proper subset means contained but not equal.

---

## Final Summary

- A subset is a set whose elements all belong to another set.
- Subset is different from element.
- Every set is a subset of itself.
- A proper subset is contained in another set but not equal to it.
- Subsets let us reason about containment between collections.
