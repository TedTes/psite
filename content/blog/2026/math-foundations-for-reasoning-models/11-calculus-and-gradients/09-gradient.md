---
title: "Gradient"
excerpt: "A gradient collects partial derivatives into a vector that points in the direction of steepest local increase."
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
topicOrder: 9
---

# Gradient

## Definition

A gradient is a vector of partial derivatives.

For a function:

```text
f(x, y)
```

the gradient contains:

```text
change with respect to x
change with respect to y
```

Basic form:

```text
gradient = [partial f / partial x, partial f / partial y]
```

> Gradient = all local one-variable sensitivities collected into a vector.

---

## Why The Gradient Is A Vector

A multi-input function can change in many directions.

Example:

```text
x direction
y direction
combined x and y direction
```

The gradient uses a vector because direction matters.

It does not just say:

```text
how much change exists
```

It also says:

```text
which direction increases the function fastest locally
```

> Gradients connect calculus back to vectors.

---

## Simple Example

Function:

```text
f(x, y) = x + 2y
```

Partial derivatives:

```text
with respect to x: 1
with respect to y: 2
```

Gradient:

```text
[1, 2]
```

The function increases more strongly in the `y` direction than the `x` direction.

> The gradient encodes directional sensitivity.

---

## Gradient At A Point

For some functions, the gradient changes depending on location.

Example:

```text
f(x, y) = x^2 + y^2
```

Gradient:

```text
[2x, 2y]
```

At `(1, 1)`:

```text
[2, 2]
```

At `(3, 4)`:

```text
[6, 8]
```

> A gradient is local; it depends on the current point.

---

## Gradient And Parameters

If a model has parameters:

```text
w1, w2, b
```

and a loss depends on them:

```text
loss(w1, w2, b)
```

then the gradient can be:

```text
[change with respect to w1,
 change with respect to w2,
 change with respect to b]
```

This tells how the loss responds locally to each parameter.

> A gradient is a compact description of parameter sensitivity.

---

## Gradient Is Not The Update Yet

The gradient tells local direction and sensitivity.

It does not by itself decide:

```text
how large a step to take
when to stop
which optimization method to use
```

Those questions belong to optimization.

> Gradient is information; optimization uses that information.

---

## Final Summary

- A gradient is a vector of partial derivatives.
- It describes local sensitivity in multi-input functions.
- It points in the direction of steepest local increase.
- It depends on the current point.
- For models, gradients describe how loss responds to parameters.
- Optimization later uses gradients to update parameters.
