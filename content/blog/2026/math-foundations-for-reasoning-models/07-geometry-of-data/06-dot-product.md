---
title: "Dot Product"
excerpt: "The dot product combines two vectors into one number that reflects alignment."
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
topicOrder: 6
---

# Dot Product

## Definition

The dot product combines two vectors into one scalar.

Example:

```text
a = [2, 3]
b = [4, 5]
```

Multiply matching components and add:

```text
dot(a, b) = 2*4 + 3*5
          = 8 + 15
          = 23
```

> Dot product = multiply matching components, then add.

---

## Same Dimension Requirement

The dot product requires vectors with the same dimension.

Valid:

```text
dot([2, 3], [4, 5])
```

Invalid:

```text
dot([2, 3], [4, 5, 6])
```

The components do not match.

> Dot product requires aligned components.

---

## Dot Product As Component Agreement

The dot product grows when matching components point in the same sign direction.

Example:

```text
dot([2, 3], [4, 5]) = 23
```

Both vectors have positive components, so their component products add positively.

Opposite signs reduce the dot product:

```text
dot([2, 3], [-4, -5])
= 2*(-4) + 3*(-5)
= -8 - 15
= -23
```

> Dot product reflects component-level agreement or opposition.

---

## Dot Product And Alignment

The dot product is connected to direction.

If two vectors point in similar directions, the dot product tends to be positive.

Example:

```text
dot([1, 0], [2, 0]) = 2
```

If they point in opposite directions, it tends to be negative.

Example:

```text
dot([1, 0], [-2, 0]) = -2
```

If they are perpendicular, it is `0`.

Example:

```text
dot([1, 0], [0, 1]) = 0
```

> Dot product helps measure directional alignment.

---

## Dot Product Depends On Magnitude

Dot product is affected by vector size.

Example:

```text
dot([1, 0], [2, 0]) = 2
dot([1, 0], [20, 0]) = 20
```

Both second vectors point in the same direction.

But the larger one gives a larger dot product.

> Dot product mixes direction and magnitude.

---

## Dot Product With Unit Vectors

When vectors are normalized to unit length, the dot product focuses on direction.

Example:

```text
dot([1, 0], [1, 0]) = 1
dot([1, 0], [0, 1]) = 0
dot([1, 0], [-1, 0]) = -1
```

These values represent:

```text
same direction
perpendicular direction
opposite direction
```

> Unit vectors make dot product easier to interpret as alignment.

---

## Why Dot Product Matters

Dot product is one of the simplest ways to compare vectors.

It answers:

```text
How much do these vectors point together?
How much does one vector align with another?
How much does one vector contribute in another direction?
```

This leads into angle, orthogonality, projection, and similarity.

> Dot product turns vector alignment into a number.

---

## Final Summary

- Dot product multiplies matching components and adds.
- It returns one scalar.
- It requires vectors with the same dimension.
- Positive values suggest alignment.
- Negative values suggest opposition.
- Zero can indicate perpendicular directions.
- Dot product depends on both direction and magnitude.
