---
title: "Local Minimum"
excerpt: "A local minimum is a point whose value is lower than nearby values."
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
topicOrder: 13
---

# Local Minimum

## Definition

A local minimum is a point where the function value is lower than nearby values.

Basic shape:

```text
down -> bottom -> up
```

> Local minimum = lowest point in a nearby region.

---

## Simple Example

Function:

```text
f(x) = x^2
```

At `x = 0`:

```text
f(0) = 0
```

Nearby values are higher:

```text
f(-1) = 1
f(1) = 1
```

So `x = 0` is a local minimum.

> The function is lower there than around it.

---

## Local vs Global Minimum

A local minimum is best nearby.

A global minimum is best everywhere in the whole domain.

```text
local minimum -> lowest in a neighborhood
global minimum -> lowest overall
```

A function can have many local minima.

Only one or several may be global minima.

> Local best does not always mean overall best.

---

## Derivative Around A Local Minimum

For a smooth one-dimensional function, the derivative often changes like this:

```text
negative -> zero -> positive
```

Meaning:

```text
function decreases before the point
function is flat at the point
function increases after the point
```

> A local minimum often appears where decreasing turns into increasing.

---

## Local Minimum In A Surface

For a two-input function, imagine a bowl.

At the bottom:

```text
moving in nearby directions raises the value
```

That point is a local minimum.

> In multiple dimensions, a local minimum is lower than nearby points in all directions.

---

## Why Local Minima Matter

If a loss function measures error, a lower value is better.

Then a local minimum can represent a point where nearby parameter changes do not reduce loss.

This can be useful if the loss is low.

It can be limiting if a better region exists elsewhere.

> A local minimum can be a solution, or just a locally stable point.

---

## Not Every Flat Point Is A Minimum

If the derivative is zero, the point is flat.

But flat does not always mean minimum.

It could be:

```text
local maximum
saddle point
flat plateau
```

> A local minimum depends on surrounding values, not just zero slope.

---

## Final Summary

- A local minimum is lower than nearby values.
- It is not necessarily the lowest value overall.
- Smooth local minima often have zero derivative.
- In multiple dimensions, nearby movement in every direction raises the value.
- Local minima matter when trying to reduce a loss or objective.
