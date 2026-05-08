---
title: "Partition"
excerpt: "A partition splits a set into non-overlapping groups that together cover the whole set."
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
topicOrder: 18
---

# Partition

## Definition

A partition splits a set into groups.

The groups must satisfy three conditions:

- no group is empty
- no element appears in more than one group
- every element from the original set appears in some group

> Partition = complete non-overlapping grouping.

---

## Simple Example

Suppose:

```text
A = {1, 2, 3, 4, 5, 6}
```

A partition of `A` is:

```text
{{1, 3, 5}, {2, 4, 6}}
```

This groups the set into:

- odd numbers
- even numbers

Every element appears once.

No element appears in both groups.

> A partition organizes a set without duplication or omission.

---

## Non-Example: Overlap

This is not a partition:

```text
{{1, 2}, {2, 3}, {4}}
```

Why?

Because `2` appears in two groups.

> A partition cannot overlap.

---

## Non-Example: Missing Element

This is not a partition of:

```text
A = {1, 2, 3, 4}
```

```text
{{1, 2}, {3}}
```

Why?

Because `4` is missing.

> A partition must cover the whole set.

---

## Partition And Equivalence

Equivalence relations naturally create partitions.

Example:

```text
a relates to b if a and b have the same remainder when divided by 2
```

This creates:

```text
{1, 3, 5}
{2, 4, 6}
```

Each equivalence class is one group in the partition.

> Equivalence relations group elements; partitions are the resulting groups.

---

## Final Summary

- A partition splits a set into groups.
- Each group must be non-empty.
- Groups must not overlap.
- The groups must cover the whole original set.
- Equivalence relations create partitions.
- Partitions make grouping precise.
