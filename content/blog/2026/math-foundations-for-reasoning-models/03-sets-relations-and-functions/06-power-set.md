---
title: "Power Set"
excerpt: "The power set is the set of all subsets of a set."
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
topicOrder: 6
---

# Power Set

## Definition

The power set of a set is the set of all its subsets.

Example:

```text
A = {1, 2}
```

Subsets of `A`:

```text
{}
{1}
{2}
{1, 2}
```

Power set:

```text
{{}, {1}, {2}, {1, 2}}
```

> Power set = collection of every possible subset.

---

## Empty Set Is Included

The empty set is a subset of every set.

Example:

```text
A = {1, 2}
```

The empty set:

```text
{}
```

is included in the power set of `A`.

> The power set always contains the empty set.

---

## The Original Set Is Included

Every set is a subset of itself.

So the original set also appears inside its power set.

Example:

```text
A = {1, 2}
```

The subset:

```text
{1, 2}
```

is included in the power set.

> The power set always contains the original set.

---

## Power Set Grows Quickly

If a set has `n` elements, its power set has:

```text
2^n
```

subsets.

Example:

```text
A = {1, 2, 3}
```

has `3` elements.

Its power set has:

```text
2^3 = 8
```

subsets.

> Power sets grow by possible inclusion/exclusion choices.

---

## Final Summary

- The power set is the set of all subsets.
- It includes the empty set.
- It includes the original set.
- A set with `n` elements has `2^n` subsets.
- Power sets matter because they describe all possible selections from a set.
