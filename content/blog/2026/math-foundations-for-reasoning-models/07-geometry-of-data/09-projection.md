---
title: "Projection"
excerpt: "Projection measures the part of one vector that lies in the direction of another."
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
topicOrder: 9
---

# Projection

## Definition

Projection measures the part of one vector that lies in the direction of another vector.

Simple image:

```text
projection = shadow of one vector on another direction
```

Example:

```text
a = [3, 4]
direction = [1, 0]
```

The part of `a` along `[1, 0]` is:

```text
[3, 0]
```

> Projection extracts the component of a vector along a direction.

---

## Projection Onto An Axis

Project:

```text
a = [3, 4]
```

onto the first coordinate direction:

```text
[1, 0]
```

The result is:

```text
[3, 0]
```

Project onto the second coordinate direction:

```text
[0, 1]
```

The result is:

```text
[0, 4]
```

> Projection can isolate how much a vector contributes to one direction.

---

## Projection Uses Alignment

Projection depends on how aligned the vectors are.

If vectors point in the same direction, projection is large.

Example:

```text
a = [5, 0]
direction = [1, 0]
projection = [5, 0]
```

If they are perpendicular, projection is zero.

Example:

```text
a = [0, 5]
direction = [1, 0]
projection = [0, 0]
```

> Projection is based on directional alignment.

---

## Projection Length

Sometimes we only want the scalar amount in a direction.

If the direction vector has length `1`, the scalar projection is:

```text
dot(a, direction)
```

Example:

```text
a = [3, 4]
direction = [1, 0]

dot(a, direction) = 3
```

So `a` has amount `3` in the `[1, 0]` direction.

> Dot product with a unit direction gives projection amount.

---

## Projection Vector

Projection can also return a vector.

Example:

```text
a = [3, 4]
direction = [1, 0]
```

Scalar amount:

```text
3
```

Projection vector:

```text
3 * [1, 0] = [3, 0]
```

> Projection vector keeps the projected amount in the target direction.

---

## Projection Requires A Direction

You cannot project onto the zero vector as a direction.

Example:

```text
direction = [0, 0]
```

This has no direction and length `0`.

So it cannot define where the projection should land.

> Projection needs a nonzero direction.

---

## Why Projection Matters For Data

Projection helps answer:

```text
How much of this data vector lies in this direction?
How much does this feature direction explain?
What part remains outside this direction?
```

This matters because vector data often contains many components, but sometimes we want to study one direction at a time.

> Projection breaks vector information into directional parts.

---

## Final Summary

- Projection measures the part of one vector along another direction.
- It is like a shadow on a direction.
- Projection depends on alignment.
- Dot product with a unit direction gives projection amount.
- Projection can return a scalar amount or a vector.
- Projection requires a nonzero target direction.
