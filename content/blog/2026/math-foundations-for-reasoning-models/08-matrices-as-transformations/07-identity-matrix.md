---
title: "Identity Matrix"
excerpt: "The identity matrix is the matrix transformation that leaves vectors unchanged."
date: 2026-05-01
tags:
  - Foundations
  - Matrices
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Matrices as Transformations"
chapterSlug: matrices-as-transformations
chapterOrder: 8
topicOrder: 7
---

# Identity Matrix

## Definition

The identity matrix is a matrix that leaves vectors unchanged.

Example in two dimensions:

```text
I =
[1 0]
[0 1]
```

Apply it to:

```text
v = [3, 5]
```

Result:

```text
I * v = [3, 5]
```

> Identity matrix = do-nothing transformation.

---

## Why It Leaves Vectors Unchanged

Use:

```text
I =
[1 0]
[0 1]
```

and:

```text
v = [3, 5]
```

Compute:

```text
first output  = 1*3 + 0*5 = 3
second output = 0*3 + 1*5 = 5
```

Output:

```text
[3, 5]
```

> The identity matrix preserves each component.

---

## Identity Matrix Shape

Identity matrices are square.

Examples:

```text
1 x 1:
[1]
```

```text
2 x 2:
[1 0]
[0 1]
```

```text
3 x 3:
[1 0 0]
[0 1 0]
[0 0 1]
```

They have `1`s on the main diagonal and `0`s elsewhere.

> An identity matrix matches the dimension of the vectors it preserves.

---

## Identity Matrix And Multiplication

The identity matrix acts like `1` for matrix multiplication.

Example:

```text
I * A = A
A * I = A
```

when the shapes match.

This means applying identity before or after a transformation does not change the transformation.

> Identity matrix is the neutral element for matrix multiplication.

---

## Identity vs Zero Matrix

The identity matrix is not the zero matrix.

Identity:

```text
[1 0]
[0 1]
```

Zero matrix:

```text
[0 0]
[0 0]
```

Identity preserves vectors.

Zero matrix sends every vector to zero.

Example:

```text
zero matrix * [3, 5] = [0, 0]
```

> Identity preserves information. Zero matrix removes component values.

---

## Why It Matters

The identity matrix gives a reference point for transformations.

It answers:

```text
What does no transformation look like?
```

This matters when studying inverse matrices.

An inverse should undo a transformation and return us to identity behavior.

> Identity is the baseline transformation.

---

## Final Summary

- The identity matrix leaves vectors unchanged.
- It has `1`s on the main diagonal and `0`s elsewhere.
- It is square.
- It acts like `1` in matrix multiplication.
- It is different from the zero matrix.
- It is the baseline for understanding inverse transformations.
