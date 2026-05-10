---
title: "Vector Norm"
excerpt: "A vector norm is any consistent rule for measuring the size of a vector."
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
topicOrder: 3
---

# Vector Norm

## Definition

A vector norm is a rule for measuring the size of a vector.

Example:

```text
v = [3, 4]
```

A norm turns the vector into one non-negative scalar:

```text
norm(v) = 5
```

> Norm = a rule that measures vector size.

---

## Norm vs Vector

A vector can have multiple components.

Example:

```text
[3, 4]
```

A norm gives one number describing its size.

Example:

```text
norm([3, 4]) = 5
```

The norm is not the vector itself.

It is a measurement of the vector.

> A norm summarizes vector size as a scalar.

---

## L2 Norm Is One Norm

The L2 norm is the most familiar geometric norm.

Example:

```text
norm([3, 4]) = sqrt(3^2 + 4^2) = 5
```

But "norm" is a more general word.

Different norms can measure size in different ways.

> L2 norm is one specific kind of vector norm.

---

## Why Different Norms Exist

Different problems may care about size differently.

Example:

```text
v = [3, 4]
```

One rule might measure straight-line length:

```text
sqrt(3^2 + 4^2) = 5
```

Another rule might measure total component amount:

```text
abs(3) + abs(4) = 7
```

Both produce a size-like number, but they mean different things.

> A norm defines what "size" means for a vector.

---

## Basic Requirements

A useful norm should behave consistently.

It should:

- never be negative
- be zero only for the zero vector
- grow when the vector is scaled up
- respect the structure of addition

We do not need the formal rules yet.

The important idea is that a norm must be a stable size measure.

> A norm is not an arbitrary score. It follows size-like behavior.

---

## Norm And Distance

Distance can be built from a norm.

Example:

```text
A = [1, 2]
B = [4, 6]
```

Difference:

```text
B - A = [3, 4]
```

Distance:

```text
norm([3, 4])
```

If the norm is L2, the distance is Euclidean distance.

> A norm can turn difference into distance.

---

## Why Norms Matter For Data

When data is represented as vectors, norms let us measure size and difference.

They help answer:

```text
How large is this data vector?
How far is this point from another point?
How big is this change?
```

> Norms make vector size measurable.

---

## Final Summary

- A vector norm measures vector size.
- A norm returns one non-negative scalar.
- The L2 norm is one specific norm.
- Different norms define size differently.
- Distance can be built by applying a norm to a difference vector.
- Norms make vector data measurable.
