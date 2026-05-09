---
title: "Linear Combination"
excerpt: "A linear combination builds a vector by scaling vectors and adding the results."
date: 2026-05-01
tags:
  - Foundations
  - Vectors
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Vectors as Data"
chapterSlug: vectors-as-data
chapterOrder: 6
topicOrder: 10
---

# Linear Combination

## Definition

A linear combination is built by scaling vectors and adding them together.

Example:

```text
2 * [1, 0] + 3 * [0, 1]
```

First scale:

```text
2 * [1, 0] = [2, 0]
3 * [0, 1] = [0, 3]
```

Then add:

```text
[2, 0] + [0, 3] = [2, 3]
```

> Linear combination = scaled vectors added together.

---

## Two Operations

Linear combinations use only two operations:

- scalar multiplication
- vector addition

Example:

```text
a * v + b * w
```

where:

```text
a and b are scalars
v and w are vectors
```

> Linear combinations are built from scaling and adding.

---

## Simple Example

Let:

```text
v = [2, 1]
w = [0, 3]
```

Build:

```text
4 * v + 2 * w
```

Step by step:

```text
4 * [2, 1] = [8, 4]
2 * [0, 3] = [0, 6]
[8, 4] + [0, 6] = [8, 10]
```

Result:

```text
[8, 10]
```

> A linear combination creates a new vector from existing vectors.

---

## Why "Linear"?

It is called linear because the operations are limited.

Allowed:

```text
scale a vector
add vectors
```

Not part of a linear combination:

```text
square a component
multiply two components together
apply a conditional rule
```

Those operations can be useful, but they are not linear combination operations.

> Linear combinations restrict how vectors can be combined.

---

## Linear Combination As Construction

A vector can be constructed from simpler vectors.

Example:

```text
[5, 2] = 5 * [1, 0] + 2 * [0, 1]
```

The two simple vectors contribute independently:

```text
[1, 0] controls the first component
[0, 1] controls the second component
```

> Linear combinations show how vectors can be assembled.

---

## Coefficients

The scalars used in a linear combination are called coefficients.

Example:

```text
3 * v + 7 * w
```

The coefficients are:

```text
3
7
```

They control how much each vector contributes.

> Coefficients are scalar weights in a linear combination.

---

## Why It Matters

Linear combination is a core idea for understanding how vector spaces are built.

It answers a basic question:

```text
What vectors can be created from these starting vectors?
```

That leads directly to basis vectors, span, and linear independence.

> Linear combinations describe what can be built from available vectors.

---

## Final Summary

- A linear combination scales vectors and adds the results.
- It uses scalar multiplication and vector addition.
- The scalars are coefficients.
- It creates new vectors from existing vectors.
- It restricts combination to linear operations.
- It prepares the ground for basis, span, and independence.
