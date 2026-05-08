---
title: "Equality"
excerpt: "Set equality means two sets contain exactly the same elements."
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
topicOrder: 5
---

# Equality

## Definition

Two sets are equal when they contain exactly the same elements.

Example:

```text
A = {1, 2, 3}
B = {3, 2, 1}
```

These sets are equal.

The order is different, but the elements are the same.

> Set equality = same elements.

---

## Order Does Not Affect Equality

These are equal:

```text
{a, b, c}
{c, b, a}
```

Why?

Because every element in the first set is in the second set, and every element in the second set is in the first set.

> Sets are equal by membership, not written order.

---

## Repetition Does Not Affect Equality

These describe the same set:

```text
{1, 1, 2, 3}
{1, 2, 3}
```

The repeated `1` does not create a new element.

A set either contains `1` or it does not.

> Repetition does not change set equality.

---

## Equality Through Subsets

Two sets are equal if each is a subset of the other.

Example:

```text
A = {1, 2, 3}
B = {3, 2, 1}
```

`A` is a subset of `B`.

`B` is a subset of `A`.

Therefore:

```text
A = B
```

> Mutual subset relation proves set equality.

---

## Final Summary

- Two sets are equal when they contain exactly the same elements.
- Order does not affect set equality.
- Repetition does not affect set equality.
- Set equality is based on membership.
- Two sets are equal when each is a subset of the other.
