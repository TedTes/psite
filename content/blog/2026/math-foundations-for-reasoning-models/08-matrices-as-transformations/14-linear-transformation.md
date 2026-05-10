---
title: "Linear Transformation"
excerpt: "A linear transformation preserves addition and scalar multiplication while mapping vectors to vectors."
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
topicOrder: 14
---

# Linear Transformation

## Definition

A linear transformation is a rule that maps vectors to vectors while preserving linear structure.

The key operations it preserves are:

- vector addition
- scalar multiplication

Basic form:

```text
T(v) = transformed vector
```

> Linear transformation = structure-preserving vector transformation.

---

## Preserving Addition

A transformation preserves addition if:

```text
T(a + b) = T(a) + T(b)
```

This means:

```text
transform after adding
```

matches:

```text
add after transforming separately
```

> Linear transformations respect vector addition.

---

## Preserving Scalar Multiplication

A transformation preserves scalar multiplication if:

```text
T(c * v) = c * T(v)
```

This means:

```text
scale then transform
```

matches:

```text
transform then scale
```

> Linear transformations respect scaling.

---

## Matrix Transformations Are Linear

Matrix-vector multiplication defines a linear transformation.

Example:

```text
T(v) = A * v
```

The matrix `A` gives the transformation rule.

It maps input vectors to output vectors while preserving linear structure.

> A matrix can represent a linear transformation.

---

## Simple Example

Let:

```text
T([x, y]) = [2*x, 3*y]
```

Then:

```text
T([4, 5]) = [8, 15]
```

This transformation scales each component.

It is linear because it preserves addition and scalar multiplication.

> Component scaling can be a linear transformation.

---

## What Is Not Linear

A rule is not linear if it breaks addition or scalar multiplication.

Example:

```text
T(x) = x + 1
```

This adds a constant shift.

It does not preserve the origin:

```text
T(0) = 1
```

A linear transformation must send zero to zero.

> Adding a fixed offset makes a transformation non-linear in the strict linear-algebra sense.

---

## Linear vs Nonlinear

Linear transformations can scale, rotate, project, and mix components.

But they cannot bend space in arbitrary ways.

Example of nonlinear behavior:

```text
x -> x^2
```

This changes relationships differently depending on the input.

> Linear transformations preserve straight vector structure.

---

## Why It Matters

Linear transformations are important because they are predictable and composable.

They let us describe complex vector changes using matrix multiplication.

They also form the base layer for many later concepts.

> Linear transformations are the core action represented by matrices.

---

## Final Summary

- A linear transformation maps vectors to vectors.
- It preserves vector addition.
- It preserves scalar multiplication.
- Matrix-vector multiplication defines a linear transformation.
- Linear transformations send zero to zero.
- Adding a fixed offset is not strictly linear.
- Linear transformations are predictable, composable vector rules.
