---
title: "Convexity"
excerpt: "Convexity describes bowl-shaped functions where local minima are also global minima."
date: 2026-05-01
tags:
  - Foundations
  - Calculus
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Calculus and Gradients"
chapterSlug: calculus-and-gradients
chapterOrder: 11
topicOrder: 18
---

# Convexity

## Definition

A convex function has a bowl-like shape.

Informally:

```text
line between two points stays above or on the function
```

The main intuition:

```text
no hidden valleys below the local valley
```

> Convexity means the function has a globally well-behaved bowl structure.

---

## Simple Example

Function:

```text
f(x) = x^2
```

This is convex.

It has one bottom point:

```text
x = 0
```

Moving away from the bottom raises the value.

> A simple convex function looks like a bowl.

---

## Why Convexity Is Useful

For convex functions, any local minimum is also a global minimum.

That means:

```text
if you find a local minimum, you found the best overall minimum
```

This makes optimization much easier to reason about.

> Convexity removes the problem of bad local minima.

---

## Non-Convex Functions

A non-convex function can have:

```text
multiple valleys
multiple hills
saddle points
flat regions
```

Example shape:

```text
valley -> hill -> deeper valley
```

A local minimum may not be the best overall point.

> Non-convex functions can contain misleading local structure.

---

## Convexity And Curvature

In one dimension, a smooth convex function has non-negative curvature.

Informally:

```text
the function bends upward
```

For:

```text
f(x) = x^2
```

the second derivative is positive.

> Convex functions bend upward in a consistent way.

---

## Convex Does Not Mean Linear

A convex function can be curved.

Example:

```text
f(x) = x^2
```

It is not a straight line.

It is convex because its shape remains bowl-like.

> Convexity is about shape, not straightness.

---

## Why This Matters For Learning

Some learning problems have convex objectives.

Many deep learning objectives are not convex.

Still, convexity is useful because it provides a clean reference case:

```text
easy-to-reason-about objective
vs
messy objective with many regions
```

> Convexity gives a baseline for understanding optimization difficulty.

---

## Final Summary

- Convex functions have bowl-like structure.
- In convex functions, local minima are global minima.
- Non-convex functions can have many valleys, hills, and saddle points.
- Convex does not mean linear.
- Convexity helps explain why some optimization problems are easier than others.
