---
title: "Euclidean Distance"
excerpt: "Euclidean distance measures the straight-line distance between two points."
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
topicOrder: 1
---

# Euclidean Distance

## Definition

Euclidean distance is the straight-line distance between two points.

Example:

```text
A = [0, 0]
B = [3, 4]
```

The distance from `A` to `B` is:

```text
5
```

> Euclidean distance = straight-line distance between points.

---

## Why Distance Matters

Once data is represented as points, we can compare points by asking:

```text
How far apart are they?
```

Example:

```text
A = [2, 3]
B = [3, 4]
C = [10, 20]
```

`A` is closer to `B` than to `C`.

> Distance gives a structured way to compare data points.

---

## Distance Between Two Components

For two points:

```text
A = [a1, a2]
B = [b1, b2]
```

First subtract matching components:

```text
b1 - a1
b2 - a2
```

Then combine those differences into one distance.

Formula:

```text
distance(A, B) = sqrt((b1 - a1)^2 + (b2 - a2)^2)
```

> Distance begins with component-level difference.

---

## Example

Let:

```text
A = [1, 2]
B = [4, 6]
```

Component differences:

```text
4 - 1 = 3
6 - 2 = 4
```

Distance:

```text
sqrt(3^2 + 4^2)
= sqrt(9 + 16)
= sqrt(25)
= 5
```

> The distance between `[1, 2]` and `[4, 6]` is `5`.

---

## Distance Uses A Difference Vector

The difference between two points is a vector.

Example:

```text
A = [1, 2]
B = [4, 6]
```

Difference:

```text
B - A = [3, 4]
```

The distance is the length of that difference vector.

```text
length([3, 4]) = 5
```

> Distance between points is length of the difference vector.

---

## Distance Is Non-Negative

Distance cannot be negative.

Examples:

```text
distance([1, 2], [4, 6]) = 5
distance([4, 6], [1, 2]) = 5
distance([1, 2], [1, 2]) = 0
```

The order does not change the distance.

> Distance measures separation, not direction.

---

## What Distance Does Not Tell You

Distance tells how far apart points are.

It does not tell which direction one point is from another unless we keep the difference vector.

Example:

```text
A to B difference = [3, 4]
B to A difference = [-3, -4]
```

Both have distance `5`.

But the directions are opposite.

> Distance removes direction and keeps size of separation.

---

## Final Summary

- Euclidean distance is straight-line distance.
- It compares two points.
- It starts by subtracting matching components.
- The distance is the length of the difference vector.
- Distance is always non-negative.
- Distance does not preserve direction.
