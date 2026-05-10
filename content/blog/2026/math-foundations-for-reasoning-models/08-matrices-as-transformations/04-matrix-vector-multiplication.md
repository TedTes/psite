---
title: "Matrix-Vector Multiplication"
excerpt: "Matrix-vector multiplication applies a matrix transformation to an input vector."
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
topicOrder: 4
---

# Matrix-Vector Multiplication

## Definition

Matrix-vector multiplication applies a matrix to a vector.

Basic form:

```text
A * v = output vector
```

The matrix `A` contains the transformation rule.

The vector `v` is the input.

> Matrix-vector multiplication transforms a vector.

---

## Shape Requirement

The number of matrix columns must match the number of vector components.

Example:

```text
A is 2 x 3
v has 3 components
```

Then:

```text
A * v is valid
```

The output has one component for each matrix row.

So:

```text
2 x 3 matrix * 3-component vector = 2-component vector
```

> Matrix columns must match vector length.

---

## A Simple Example

Let:

```text
A =
[2 0]
[0 3]
```

and:

```text
v = [4, 5]
```

The result is:

```text
A * v = [8, 15]
```

Because:

```text
first output  = 2*4 + 0*5 = 8
second output = 0*4 + 3*5 = 15
```

> Each output component comes from one row of the matrix.

---

## Rows Act Like Dot Products

Each row of the matrix is dot-multiplied with the input vector.

Example:

```text
A =
[2 0]
[0 3]

v = [4, 5]
```

Row 1:

```text
dot([2, 0], [4, 5]) = 8
```

Row 2:

```text
dot([0, 3], [4, 5]) = 15
```

Output:

```text
[8, 15]
```

> Matrix-vector multiplication is row-by-vector dot products.

---

## Component Mixing Example

Let:

```text
A =
[1 1]
[0 1]
```

and:

```text
v = [3, 4]
```

Compute:

```text
first output  = 1*3 + 1*4 = 7
second output = 0*3 + 1*4 = 4
```

Result:

```text
[7, 4]
```

The first output component mixed both input components.

> Matrix rows define how input components combine.

---

## Output Dimension

The output dimension equals the number of matrix rows.

Example:

```text
3 x 2 matrix * 2-component vector = 3-component vector
```

Why?

Because the matrix has three rows.

Each row produces one output component.

> Rows determine output size. Columns determine required input size.

---

## Why It Matters

Matrix-vector multiplication gives a precise way to transform vector data.

It can represent:

- scaling
- mixing
- projection
- coordinate changes
- feature transformations

This is one of the most important operations in linear algebra.

> Matrix-vector multiplication is structured vector computation.

---

## Final Summary

- Matrix-vector multiplication applies a matrix to a vector.
- Matrix columns must match vector length.
- Each matrix row produces one output component.
- Each output component is a dot product.
- Rows determine output dimension.
- The operation can scale, mix, or transform vector data.
