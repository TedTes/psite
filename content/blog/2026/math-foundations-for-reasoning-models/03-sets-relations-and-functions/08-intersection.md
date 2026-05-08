---
title: "Intersection"
excerpt: "The intersection of two sets contains only the elements shared by both sets."
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
topicOrder: 8
---

# Intersection

## Definition

The intersection of two sets contains the elements that belong to both sets.

Example:

```text
A = {1, 2, 3}
B = {2, 3, 4}
```

Intersection:

```text
A intersection B = {2, 3}
```

> Intersection keeps only shared elements.

---

## Shared Membership

An object belongs to the intersection only if it belongs to both sets.

Example:

```text
A = {1, 2, 3}
B = {2, 3, 4}
```

`2` belongs to both.

`3` belongs to both.

`1` belongs only to `A`.

`4` belongs only to `B`.

So:

```text
A intersection B = {2, 3}
```

> Intersection requires membership in both sets.

---

## Intersection As AND

Intersection is similar to logical AND.

An object belongs to:

```text
A intersection B
```

if:

```text
it belongs to A AND it belongs to B
```

Both conditions must hold.

> Intersection generalizes AND over set membership.

---

## Empty Intersection

Two sets may have no shared elements.

Example:

```text
A = {1, 2}
B = {3, 4}
```

Intersection:

```text
{}
```

The empty set means there are no common elements.

> Empty intersection means no overlap.

---

## Final Summary

- Intersection contains shared elements.
- An element must belong to both sets to be in the intersection.
- Intersection behaves like AND for membership.
- An intersection can be empty.
- Intersection identifies overlap between sets.
