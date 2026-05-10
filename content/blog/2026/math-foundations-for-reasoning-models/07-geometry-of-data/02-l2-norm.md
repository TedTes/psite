---
title: "L2 Norm"
excerpt: "The L2 norm measures a vector's length using the square-sum-square-root rule."
date: 2026-05-01
tags:
  - Foundations
  - Geometry
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Geometry of Data"
chapterSlug: geometry-of-data
chapterOrder: 7
topicOrder: 2
---

# L2 Norm

## Definition

The L2 norm measures the length of a vector.

For:

```text
v = [3, 4]
```

the L2 norm is:

```text
5
```

> L2 norm = the usual geometric length of a vector.

---

## Formula

For a two-component vector:

```text
v = [a, b]
```

the L2 norm is:

```text
sqrt(a^2 + b^2)
```

Example:

```text
v = [3, 4]

sqrt(3^2 + 4^2)
= sqrt(9 + 16)
= sqrt(25)
= 5
```

> The L2 norm combines component sizes into one length.

---

## More Components

For three components:

```text
v = [a, b, c]
```

the L2 norm is:

```text
sqrt(a^2 + b^2 + c^2)
```

Example:

```text
v = [2, 3, 6]

sqrt(2^2 + 3^2 + 6^2)
= sqrt(4 + 9 + 36)
= sqrt(49)
= 7
```

The same pattern extends to more components.

> L2 norm works by squaring each component, adding, then taking the square root.

---

## L2 Norm vs Euclidean Distance

L2 norm measures the length of one vector from the origin.

Euclidean distance measures separation between two points.

Example:

```text
norm([3, 4]) = 5
```

Distance:

```text
A = [1, 2]
B = [4, 6]
B - A = [3, 4]
distance(A, B) = norm([3, 4]) = 5
```

> Euclidean distance is the L2 norm of a difference vector.

---

## L2 Norm Is Non-Negative

The L2 norm is never negative.

Examples:

```text
norm([3, 4]) = 5
norm([-3, -4]) = 5
norm([0, 0]) = 0
```

Negative components still contribute positive size because they are squared.

> L2 norm measures size, not sign.

---

## Zero Norm

Only the zero vector has L2 norm `0`.

Examples:

```text
norm([0, 0]) = 0
norm([0, 0, 0]) = 0
```

If any component is nonzero, the norm is greater than `0`.

> Zero length means every component is zero.

---

## Why L2 Norm Matters

The L2 norm gives a standard way to measure vector length.

It helps answer:

```text
How large is this vector?
How far is this point from the origin?
How much difference is there between two points?
```

> L2 norm is the basic length measure used by Euclidean geometry.

---

## Final Summary

- The L2 norm measures vector length.
- It uses square, sum, and square root.
- It works for vectors with any number of components.
- It is always non-negative.
- Only the zero vector has L2 norm `0`.
- Euclidean distance is the L2 norm of a difference vector.
