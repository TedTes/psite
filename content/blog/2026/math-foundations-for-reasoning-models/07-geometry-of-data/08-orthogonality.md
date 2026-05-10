---
title: "Orthogonality"
excerpt: "Orthogonality means two vectors are perpendicular and have zero dot product."
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
topicOrder: 8
---

# Orthogonality

## Definition

Orthogonality means two vectors are perpendicular.

Example:

```text
[1, 0]
[0, 1]
```

These point in separate coordinate directions.

Their angle is:

```text
90 degrees
```

> Orthogonal vectors meet at a right angle.

---

## Dot Product Test

Two nonzero vectors are orthogonal when their dot product is `0`.

Example:

```text
dot([1, 0], [0, 1])
= 1*0 + 0*1
= 0
```

So:

```text
[1, 0] is orthogonal to [0, 1]
```

> Dot product `0` means no directional alignment.

---

## Orthogonal Directions

Orthogonal directions do not overlap in direction.

Example:

```text
x direction = [1, 0]
y direction = [0, 1]
```

Moving in the `x` direction does not move in the `y` direction.

Moving in the `y` direction does not move in the `x` direction.

> Orthogonality separates directions cleanly.

---

## Orthogonality Is Not Opposition

Orthogonal is different from opposite.

Opposite:

```text
[1, 0]
[-1, 0]
```

These lie on the same line but point opposite ways.

Orthogonal:

```text
[1, 0]
[0, 1]
```

These point in separate directions.

> Orthogonal means independent direction, not opposite direction.

---

## Orthogonal Components

Basis vectors are often orthogonal.

Example:

```text
[1, 0]
[0, 1]
```

Each basis vector controls a different component.

This makes coordinates easier to interpret.

> Orthogonal basis directions keep components separated.

---

## Zero Vector Note

The zero vector has dot product `0` with every vector.

Example:

```text
dot([0, 0], [3, 4]) = 0
```

But the zero vector has no direction.

So when thinking geometrically, orthogonality is most meaningful for nonzero vectors.

> A zero dot product involving the zero vector should be interpreted carefully.

---

## Why Orthogonality Matters

Orthogonality helps identify separated structure.

It answers:

```text
Do these directions overlap?
Does this vector contribute in that direction?
Are these components cleanly separated?
```

> Orthogonality means no directional overlap.

---

## Final Summary

- Orthogonality means perpendicular direction.
- Orthogonal vectors have dot product `0`.
- Orthogonal is not the same as opposite.
- Orthogonal directions do not overlap.
- Standard coordinate directions are orthogonal.
- The zero vector needs careful interpretation because it has no direction.
