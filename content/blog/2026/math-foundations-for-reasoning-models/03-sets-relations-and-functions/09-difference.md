---
title: "Difference"
excerpt: "Set difference keeps the elements in one set that are not in another set."
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
topicOrder: 9
---

# Difference

## Definition

The difference between two sets keeps the elements that are in the first set but not in the second.

Example:

```text
A = {1, 2, 3}
B = {2, 3, 4}
```

Difference:

```text
A minus B = {1}
```

> Difference removes from the first set anything found in the second set.

---

## Order Matters

Set difference is directional.

Example:

```text
A = {1, 2, 3}
B = {2, 3, 4}
```

Then:

```text
A minus B = {1}
B minus A = {4}
```

These are not the same.

> Difference depends on which set comes first.

---

## Difference vs Intersection

Intersection keeps what two sets share.

Difference removes what they share from the first set.

Example:

```text
A = {1, 2, 3}
B = {2, 3, 4}
```

Intersection:

```text
{2, 3}
```

Difference:

```text
A minus B = {1}
```

> Intersection finds overlap; difference removes overlap from one side.

---

## Difference As Filtering

Set difference can be understood as filtering.

Example:

```text
All = {1, 2, 3, 4, 5}
Remove = {2, 4}
```

Difference:

```text
All minus Remove = {1, 3, 5}
```

> Difference keeps only elements that pass the "not in the second set" test.

---

## Final Summary

- Difference keeps elements in the first set that are not in the second.
- Set difference is directional.
- `A minus B` may differ from `B minus A`.
- Difference is different from intersection.
- Difference can be understood as filtering by non-membership.
