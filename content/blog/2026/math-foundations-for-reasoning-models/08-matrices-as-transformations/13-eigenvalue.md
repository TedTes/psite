---
title: "Eigenvalue"
excerpt: "An eigenvalue is the scale factor applied to an eigenvector by a matrix transformation."
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
topicOrder: 13
---

# Eigenvalue

## Definition

An eigenvalue is the scale factor applied to an eigenvector.

If:

```text
A * v = lambda * v
```

then:

```text
v = eigenvector
lambda = eigenvalue
```

`lambda` is just a scalar.

> Eigenvalue = how much an eigenvector is scaled.

---

## Simple Example

Let:

```text
A =
[2 0]
[0 3]
```

Apply it to:

```text
v = [1, 0]
```

Result:

```text
A * v = [2, 0]
```

This is:

```text
2 * [1, 0]
```

So:

```text
eigenvector = [1, 0]
eigenvalue = 2
```

> The eigenvalue tells the scaling amount for that eigenvector.

---

## Another Example

Using the same matrix:

```text
A =
[2 0]
[0 3]
```

Apply it to:

```text
v = [0, 1]
```

Result:

```text
A * v = [0, 3]
```

This is:

```text
3 * [0, 1]
```

So:

```text
eigenvalue = 3
```

> Different eigenvector directions can have different eigenvalues.

---

## Eigenvalue Meaning

An eigenvalue describes what happens along an eigenvector direction.

If:

```text
eigenvalue = 3
```

the direction is stretched by `3`.

If:

```text
eigenvalue = 1
```

the direction is unchanged in size.

If:

```text
eigenvalue = 0
```

the direction is collapsed to zero.

If:

```text
eigenvalue = -1
```

the direction is flipped.

> Eigenvalues describe scaling, collapse, or flip along special directions.

---

## Eigenvalue Depends On Eigenvector

Eigenvalues belong to eigenvector directions.

Example:

```text
[1, 0] has eigenvalue 2
[0, 1] has eigenvalue 3
```

for:

```text
[2 0]
[0 3]
```

The matrix does not have just one scaling behavior.

It can scale different directions differently.

> Eigenvalues describe direction-specific scaling.

---

## Not A General Scale For Every Vector

An eigenvalue does not necessarily describe what happens to every vector.

Example:

```text
v = [1, 1]
```

under:

```text
[2 0]
[0 3]
```

becomes:

```text
[2, 3]
```

This is not a single scalar multiple of `[1, 1]`.

So the eigenvalue idea applies to eigenvectors.

> Eigenvalues apply to preserved directions, not arbitrary vectors.

---

## Why Eigenvalues Matter

Eigenvalues help describe the internal behavior of a matrix transformation.

They answer:

```text
Which stable directions are stretched?
Which are shrunk?
Which are flipped?
Which are collapsed?
```

> Eigenvalues explain what happens along eigenvector directions.

---

## Final Summary

- An eigenvalue is a scalar scale factor.
- It belongs to an eigenvector direction.
- It tells how much that direction is stretched, shrunk, flipped, or collapsed.
- Different eigenvectors can have different eigenvalues.
- Eigenvalues do not describe every vector directly.
- They reveal direction-specific behavior of a matrix.
