---
title: "Basis Vector"
excerpt: "Basis vectors are simple reference vectors used to build other vectors."
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
topicOrder: 11
---

# Basis Vector

## Definition

A basis vector is a reference vector used to build other vectors.

In two dimensions, common basis vectors are:

```text
[1, 0]
[0, 1]
```

Using them, we can build:

```text
[3, 5] = 3 * [1, 0] + 5 * [0, 1]
```

> Basis vectors are building blocks for vectors.

---

## What Basis Vectors Do

Basis vectors define the directions of a coordinate system.

Example:

```text
[1, 0] moves along the first component
[0, 1] moves along the second component
```

To build `[3, 5]`:

```text
move 3 units in the first direction
move 5 units in the second direction
```

> Basis vectors tell each component what direction it controls.

---

## Standard Basis

The standard basis uses vectors with one `1` and the rest `0`.

In two dimensions:

```text
[1, 0]
[0, 1]
```

In three dimensions:

```text
[1, 0, 0]
[0, 1, 0]
[0, 0, 1]
```

Each basis vector controls one component.

> The standard basis separates each component cleanly.

---

## Building Vectors From Basis Vectors

Example:

```text
[4, 2, 7]
```

can be built as:

```text
4 * [1, 0, 0]
+ 2 * [0, 1, 0]
+ 7 * [0, 0, 1]
= [4, 2, 7]
```

The coefficients become the components.

> A vector's components tell how much of each basis vector is used.

---

## Basis Vectors Must Be Independent

Basis vectors should not repeat the same direction.

Good:

```text
[1, 0]
[0, 1]
```

Bad:

```text
[1, 0]
[2, 0]
```

The second bad vector is only a scaled version of the first.

It does not provide a new direction.

> Basis vectors must add genuinely new directions.

---

## Basis Depends On The System

The standard basis is common, but it is not the only possible basis.

Different basis vectors can describe the same space.

The important requirement is that the chosen basis can build every vector in the space without redundant directions.

> A basis is a useful coordinate frame, not the only possible frame.

---

## Why It Matters

Basis vectors explain how components relate to structure.

They connect:

```text
component values
directions
vector construction
coordinate systems
```

Without a basis, the numbers in a vector are harder to interpret.

> Basis vectors give components a structural role.

---

## Final Summary

- Basis vectors are reference vectors used to build other vectors.
- The standard basis uses one `1` and the rest `0`.
- Components act as coefficients on basis vectors.
- Basis vectors define coordinate directions.
- A basis should provide independent directions.
- Basis vectors explain how vector components construct a vector.
