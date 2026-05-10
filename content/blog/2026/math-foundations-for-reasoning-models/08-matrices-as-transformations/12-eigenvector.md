---
title: "Eigenvector"
excerpt: "An eigenvector is a direction that a matrix transformation only scales, without rotating away."
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
topicOrder: 12
---

# Eigenvector

## Definition

An eigenvector is a vector whose direction is preserved by a matrix transformation.

The matrix may stretch or shrink it.

But it does not rotate it away from its original direction.

Example idea:

```text
A * v = scaled version of v
```

> Eigenvector = a direction that stays on its own line after transformation.

---

## Simple Scaling Example

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

The vector changed size, but it still points along the first axis.

So `[1, 0]` is an eigenvector of this matrix.

> If the direction stays the same, the vector may be an eigenvector.

---

## Another Direction

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

The direction stays along the second axis.

So `[0, 1]` is also an eigenvector.

> Some transformations have multiple preserved directions.

---

## Not Every Vector Is An Eigenvector

Using:

```text
A =
[2 0]
[0 3]
```

apply it to:

```text
v = [1, 1]
```

Result:

```text
A * v = [2, 3]
```

`[2, 3]` is not just a scaled version of `[1, 1]`.

The direction changed.

So `[1, 1]` is not an eigenvector of this matrix.

> An eigenvector must keep its direction under the transformation.

---

## Eigenvectors Are About Directions

If:

```text
v
```

is an eigenvector, then a nonzero scaled version of `v` points in the same eigenvector direction.

Example:

```text
[1, 0]
[5, 0]
[-2, 0]
```

all lie on the same line.

The important thing is the preserved direction.

> Eigenvectors identify special directions of a transformation.

---

## Zero Vector Is Excluded

The zero vector is not counted as an eigenvector.

Example:

```text
[0, 0]
```

It has no direction.

Eigenvectors are about directions that are preserved.

> Eigenvectors must be nonzero.

---

## Why Eigenvectors Matter

Eigenvectors help reveal how a matrix acts on space.

They answer:

```text
Which directions does this transformation preserve?
Which directions are only scaled?
Which directions define the transformation's structure?
```

> Eigenvectors expose stable directions inside a transformation.

---

## Final Summary

- An eigenvector is a nonzero vector whose direction is preserved.
- The matrix may stretch, shrink, or flip it.
- The result must stay on the same line.
- Not every vector is an eigenvector.
- Eigenvectors are about directions, not one specific length.
- They reveal stable directions of a matrix transformation.
