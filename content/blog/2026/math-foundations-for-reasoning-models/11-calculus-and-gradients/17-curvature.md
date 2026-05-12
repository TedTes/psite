---
title: "Curvature"
excerpt: "Curvature describes how strongly a function bends, which affects how local directions change."
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
topicOrder: 17
---

# Curvature

## Definition

Curvature describes how strongly a function bends.

Low curvature:

```text
nearly straight
```

High curvature:

```text
bends sharply
```

> Curvature is about bending, not just increasing or decreasing.

---

## Slope vs Curvature

Slope tells how steep the function is at a point.

Curvature tells how quickly the slope changes.

Example:

```text
straight ramp -> slope exists, curvature is low
bowl shape -> slope changes as you move, curvature exists
```

> Slope is local direction; curvature is change in local direction.

---

## Simple Examples

Linear function:

```text
f(x) = 2x + 1
```

The slope is constant.

Curvature:

```text
none
```

Quadratic function:

```text
f(x) = x^2
```

The slope changes as `x` changes.

Curvature:

```text
present
```

> Curved functions have changing slope.

---

## Why Curvature Affects Movement

If a function is nearly flat, a step may change the output slowly.

If a function bends sharply, the same size step may change behavior quickly.

Example:

```text
gentle bowl -> gradual changes
narrow bowl -> rapid direction changes
```

> Curvature affects how reliable a local direction remains after moving.

---

## Curvature And Minima

Around a local minimum, curvature is often upward.

Shape:

```text
bowl
```

But the bowl can be:

```text
wide and shallow
narrow and steep
```

Both can have a minimum, but movement behaves differently around them.

> The shape around a minimum matters, not only the minimum value.

---

## Curvature In Multiple Dimensions

With multiple inputs, curvature can differ by direction.

Example:

```text
steep in one direction
flat in another direction
```

This makes high-dimensional surfaces more complex than simple one-dimensional curves.

> A surface can bend differently in different directions.

---

## Why This Matters Later

Optimization uses local information to move through a function.

Curvature affects:

```text
how quickly gradients change
how sensitive steps are
whether a region is flat or sharp
```

> Curvature describes the terrain that optimization moves through.

---

## Final Summary

- Curvature describes how strongly a function bends.
- Slope tells direction; curvature tells change in direction.
- Linear functions have no curvature.
- Curved functions have changing slope.
- Curvature can differ across directions.
- It affects how local movement behaves.
