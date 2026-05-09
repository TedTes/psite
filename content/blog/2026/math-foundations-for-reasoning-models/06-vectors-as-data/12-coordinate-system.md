---
title: "Coordinate System"
excerpt: "A coordinate system gives a consistent way to locate vectors using component values."
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
topicOrder: 12
---

# Coordinate System

## Definition

A coordinate system is a way to describe position using numbers.

Example:

```text
[3, 5]
```

In a two-dimensional coordinate system, this means:

```text
3 units in the first direction
5 units in the second direction
```

> Coordinate system = a structured way to locate vectors.

---

## Coordinates

Coordinates are the component values that locate something.

Example:

```text
point = [3, 5]
```

Coordinates:

```text
first coordinate = 3
second coordinate = 5
```

The coordinate values only make sense relative to the coordinate system.

> Coordinates are numbers interpreted by a coordinate system.

---

## Origin

The origin is the reference point where all coordinates are zero.

In two dimensions:

```text
[0, 0]
```

In three dimensions:

```text
[0, 0, 0]
```

The origin acts as the starting reference.

> Origin = zero reference point.

---

## Axes

Axes are the main directions of a coordinate system.

In two dimensions:

```text
first axis
second axis
```

A point like:

```text
[3, 5]
```

means:

```text
3 along the first axis
5 along the second axis
```

> Axes give component values directional meaning.

---

## Coordinates And Basis Vectors

Basis vectors define the coordinate directions.

Example:

```text
[1, 0]
[0, 1]
```

Then:

```text
[3, 5] = 3 * [1, 0] + 5 * [0, 1]
```

The coordinate system tells us how to interpret `3` and `5`.

> Coordinates are coefficients relative to basis directions.

---

## Same Numbers, Different Coordinate System

The same vector-like numbers can mean different things under different systems.

Example:

```text
[3, 5]
```

If the first coordinate means `height` and the second means `weight`, it describes one kind of data.

If the first coordinate means `x position` and the second means `y position`, it describes another.

> Coordinates require consistent interpretation.

---

## Why It Matters For Data

A dataset can use vectors as coordinates.

Example:

```text
item A = [2, 8]
item B = [6, 1]
```

Each item becomes a point in a coordinate system.

That makes comparison possible later.

> Coordinate systems let data be placed and compared structurally.

---

## Final Summary

- A coordinate system locates vectors using numbers.
- Coordinates are component values.
- The origin is the zero reference point.
- Axes give components directional meaning.
- Basis vectors define coordinate directions.
- The same numbers can mean different things in different coordinate systems.
- Coordinate systems let data be treated as points.
