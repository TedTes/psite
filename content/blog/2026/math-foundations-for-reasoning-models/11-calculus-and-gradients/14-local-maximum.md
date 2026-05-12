---
title: "Local Maximum"
excerpt: "A local maximum is a point whose value is higher than nearby values."
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
topicOrder: 14
---

# Local Maximum

## Definition

A local maximum is a point where the function value is higher than nearby values.

Basic shape:

```text
up -> top -> down
```

> Local maximum = highest point in a nearby region.

---

## Simple Example

Function:

```text
f(x) = -x^2
```

At `x = 0`:

```text
f(0) = 0
```

Nearby values are lower:

```text
f(-1) = -1
f(1) = -1
```

So `x = 0` is a local maximum.

> The function is higher there than around it.

---

## Local vs Global Maximum

A local maximum is highest nearby.

A global maximum is highest over the whole domain.

```text
local maximum -> highest in a neighborhood
global maximum -> highest overall
```

A function can contain many local maxima.

> Local high point does not always mean highest possible point.

---

## Derivative Around A Local Maximum

For a smooth one-dimensional function, the derivative often changes like this:

```text
positive -> zero -> negative
```

Meaning:

```text
function increases before the point
function is flat at the point
function decreases after the point
```

> A local maximum often appears where increasing turns into decreasing.

---

## Local Maximum In A Surface

For a two-input function, imagine the top of a hill.

At the top:

```text
moving in nearby directions lowers the value
```

That point is a local maximum.

> In multiple dimensions, a local maximum is higher than nearby points in all directions.

---

## Why Local Maxima Matter

If the goal is to maximize a function, a local maximum may be useful.

If the goal is to minimize loss, a local maximum is usually the wrong direction.

The same calculus object can matter differently depending on the objective.

> Whether a maximum is good or bad depends on what the system is trying to optimize.

---

## Not Every Flat Point Is A Maximum

Zero derivative is not enough.

A flat point could be:

```text
local minimum
local maximum
saddle point
plateau
```

Surrounding behavior decides the type.

> A local maximum depends on nearby values, not just flatness.

---

## Final Summary

- A local maximum is higher than nearby values.
- It is not necessarily the highest value overall.
- Smooth local maxima often have zero derivative.
- In multiple dimensions, nearby movement in every direction lowers the value.
- The importance of a local maximum depends on the objective.
