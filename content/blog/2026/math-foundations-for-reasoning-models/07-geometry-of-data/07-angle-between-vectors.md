---
title: "Angle Between Vectors"
excerpt: "The angle between vectors compares their directions, separate from their raw size."
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
topicOrder: 7
---

# Angle Between Vectors

## Definition

The angle between vectors describes how their directions relate.

Examples:

```text
same direction -> angle 0
perpendicular -> angle 90 degrees
opposite direction -> angle 180 degrees
```

> Angle compares direction, not just position.

---

## Same Direction

Two vectors point in the same direction when one is a positive scale of the other.

Example:

```text
[1, 0]
[5, 0]
```

The second vector is:

```text
5 * [1, 0]
```

They have the same direction.

Their angle is `0`.

> Same direction means no directional separation.

---

## Opposite Direction

Two vectors point in opposite directions when one is a negative scale of the other.

Example:

```text
[1, 0]
[-5, 0]
```

The second vector is:

```text
-5 * [1, 0]
```

Their angle is `180 degrees`.

> Opposite direction means maximum directional opposition.

---

## Perpendicular Direction

Two vectors are perpendicular when they meet at a right angle.

Example:

```text
[1, 0]
[0, 1]
```

Their angle is:

```text
90 degrees
```

Their dot product is:

```text
dot([1, 0], [0, 1]) = 0
```

> Perpendicular vectors have no alignment in each other's direction.

---

## Dot Product And Angle

The dot product connects to angle.

For nonzero vectors:

```text
dot(a, b) = norm(a) * norm(b) * cos(angle)
```

This means the dot product depends on:

- length of `a`
- length of `b`
- angle between them

If both vectors have length `1`, then:

```text
dot(a, b) = cos(angle)
```

> Unit vectors make angle comparison simpler.

---

## Angle Ignores Magnitude

Vectors can have different lengths but the same direction.

Example:

```text
[1, 0]
[100, 0]
```

Their angle is still `0`.

The second vector is much larger, but it points the same way.

> Angle separates direction from size.

---

## Zero Vector Problem

The zero vector has no direction.

Example:

```text
[0, 0]
```

Since it has length `0`, its angle with another vector is undefined.

> Angle requires nonzero vectors.

---

## Why Angle Matters For Data

When vectors represent data, angle helps compare pattern direction.

Example:

```text
A = [3, 4]
B = [30, 40]
```

These have different magnitudes but the same direction.

Their angle is `0`.

> Angle can show similarity of pattern even when scale differs.

---

## Final Summary

- Angle compares vector direction.
- Same direction gives angle `0`.
- Opposite direction gives angle `180 degrees`.
- Perpendicular direction gives angle `90 degrees`.
- Dot product connects to angle.
- Angle ignores raw magnitude.
- The zero vector has no defined angle.
