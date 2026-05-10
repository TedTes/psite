---
title: "Normalization"
excerpt: "Normalization rescales values so they can be compared more consistently."
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
topicOrder: 4
---

# Normalization

## Definition

Normalization is the process of rescaling values into a more consistent form.

For vectors, a common form is to rescale a vector so its length becomes `1`.

Example:

```text
v = [3, 4]
```

Its length is:

```text
5
```

Normalized vector:

```text
[3 / 5, 4 / 5] = [0.6, 0.8]
```

> Normalization changes scale while preserving structure.

---

## Why Normalize

Raw values can have different sizes.

Example:

```text
rooms = 3
size = 1200
```

The `size` component is much larger than the `rooms` component.

If we compare raw numbers directly, larger-scale components can dominate.

> Normalization helps make comparison less controlled by raw scale.

---

## Vector Length Normalization

To normalize a vector by length:

1. Measure its norm.
2. Divide each component by that norm.

Example:

```text
v = [3, 4]
norm(v) = 5
```

Divide each component:

```text
[3 / 5, 4 / 5] = [0.6, 0.8]
```

The new vector has length `1`.

> Length normalization turns a vector into a unit-length vector.

---

## What Normalization Preserves

Length normalization preserves direction.

Example:

```text
[3, 4]
[0.6, 0.8]
```

These point in the same direction.

The second vector is just a smaller version of the first.

> Normalization can preserve direction while changing magnitude.

---

## What Normalization Changes

Normalization changes size.

Example:

```text
[3, 4] has length 5
[0.6, 0.8] has length 1
```

So after normalization, magnitude no longer carries the original scale.

That can be useful or harmful depending on the question.

> Normalization removes some scale information.

---

## Zero Vector Problem

The zero vector cannot be length-normalized.

Example:

```text
v = [0, 0]
norm(v) = 0
```

To normalize by length, we would divide by `0`.

That is undefined.

> You cannot create a unit direction from a vector with zero length.

---

## Normalization In Data

Normalization is useful when comparing patterns instead of raw size.

Example:

```text
A = [3, 4]
B = [30, 40]
```

These have the same direction but different size.

After length normalization:

```text
A -> [0.6, 0.8]
B -> [0.6, 0.8]
```

They become identical in direction.

> Normalization can make direction more important than magnitude.

---

## Final Summary

- Normalization rescales values.
- Vector length normalization divides by the vector norm.
- It can turn a vector into length `1`.
- It can preserve direction while changing magnitude.
- It removes some scale information.
- The zero vector cannot be length-normalized.
