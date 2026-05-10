---
title: "Unit Vector"
excerpt: "A unit vector has length one and represents direction without extra size."
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
topicOrder: 5
---

# Unit Vector

## Definition

A unit vector is a vector with length `1`.

Example:

```text
[1, 0]
[0, 1]
```

Both have length `1`.

Another example:

```text
[0.6, 0.8]
```

Its length is:

```text
sqrt(0.6^2 + 0.8^2)
= sqrt(0.36 + 0.64)
= sqrt(1)
= 1
```

> Unit vector = vector with norm `1`.

---

## Why Unit Vectors Matter

A unit vector represents direction without extra magnitude.

Example:

```text
[3, 4]
```

has length `5`.

Its unit version is:

```text
[0.6, 0.8]
```

Both point in the same direction.

The unit vector keeps direction and removes original size.

> Unit vectors isolate direction.

---

## Creating A Unit Vector

To create a unit vector:

1. Find the vector's length.
2. Divide each component by the length.

Example:

```text
v = [3, 4]
norm(v) = 5
```

Divide:

```text
[3 / 5, 4 / 5] = [0.6, 0.8]
```

> A unit vector is created by length-normalizing a nonzero vector.

---

## Unit Vector vs Original Vector

Original vector:

```text
[3, 4]
```

Unit vector:

```text
[0.6, 0.8]
```

Same:

```text
direction
```

Different:

```text
magnitude
```

> Unit vectors preserve direction but standardize length.

---

## Standard Basis Vectors Are Unit Vectors

The standard basis vectors are unit vectors.

In two dimensions:

```text
[1, 0]
[0, 1]
```

Each has length `1`.

They also point along the coordinate axes.

> Basis directions often use unit vectors.

---

## Zero Vector Is Not A Unit Vector

The zero vector has length `0`.

Example:

```text
[0, 0]
```

It has no direction that can be normalized.

So it cannot become a unit vector by dividing by its length.

> Unit vectors require nonzero length.

---

## Why Unit Vectors Help Comparison

When vectors have unit length, comparison focuses on direction.

Example:

```text
A = [3, 4]
B = [30, 40]
```

After normalization:

```text
A -> [0.6, 0.8]
B -> [0.6, 0.8]
```

The two vectors have the same unit direction.

> Unit vectors make directional comparison cleaner.

---

## Final Summary

- A unit vector has length `1`.
- It represents direction without original magnitude.
- It is created by dividing a nonzero vector by its norm.
- Standard basis vectors are unit vectors.
- The zero vector cannot become a unit vector.
- Unit vectors make direction easier to compare.
