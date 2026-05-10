---
title: "Inverse Matrix"
excerpt: "An inverse matrix undoes a matrix transformation when that transformation is reversible."
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
topicOrder: 8
---

# Inverse Matrix

## Definition

An inverse matrix undoes a matrix transformation.

If:

```text
A * v = w
```

then the inverse matrix, written as `A inverse`, can recover `v`:

```text
A inverse * w = v
```

> Inverse matrix = transformation that reverses another transformation.

---

## Simple Scaling Example

Let a matrix double every component:

```text
A transforms [3, 5] into [6, 10]
```

The inverse should divide every component by `2`:

```text
[6, 10] -> [3, 5]
```

So the inverse undoes the scaling.

> If a matrix scales by `2`, its inverse scales by `1/2`.

---

## Inverse And Identity

An inverse cancels a matrix back to the identity matrix.

Basic idea:

```text
A inverse * A = I
A * A inverse = I
```

where `I` is the identity matrix.

This means:

```text
apply A
then apply A inverse
```

has the same effect as doing nothing.

> A matrix and its inverse compose to identity.

---

## Not Every Matrix Has An Inverse

Some transformations lose information.

Example:

```text
[x, y] -> [x, 0]
```

This removes the `y` value.

If the output is:

```text
[3, 0]
```

we cannot know whether the input was:

```text
[3, 1]
[3, 5]
[3, -10]
```

The lost information cannot be recovered.

> A matrix has no inverse if the transformation loses necessary information.

---

## Reversible vs Irreversible

Reversible transformation:

```text
[x, y] -> [2*x, 2*y]
```

This can be undone:

```text
[2*x, 2*y] -> [x, y]
```

Irreversible transformation:

```text
[x, y] -> [x, 0]
```

The `y` value is lost.

> Invertibility depends on whether information is preserved.

---

## Shape Requirement

Only square matrices can have full two-sided inverses.

Example:

```text
2 x 2 matrix can be invertible
3 x 3 matrix can be invertible
2 x 3 matrix cannot have a full inverse like a square matrix
```

Why?

Because a full inverse must map output space back to input space without losing or adding dimensions.

> Full matrix inverse is a square-matrix idea.

---

## Why It Matters

Inverse matrices connect transformation to recovery.

They answer:

```text
Can this transformation be undone?
Was information preserved?
Can we recover the input from the output?
```

This continues the earlier idea of reversibility, now in vector transformations.

> Inverse matrices formalize reversible transformation.

---

## Final Summary

- An inverse matrix undoes a matrix transformation.
- A matrix and its inverse compose to identity.
- Not every matrix has an inverse.
- Transformations that lose information are not invertible.
- Full inverses require square matrices.
- Invertibility is about whether input information can be recovered.
