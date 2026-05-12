---
title: "Partial Derivative"
excerpt: "A partial derivative measures how a function changes with respect to one input while other inputs are held fixed."
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
topicOrder: 8
---

# Partial Derivative

## Definition

A partial derivative measures how a function changes with respect to one input while the other inputs are held fixed.

Example function:

```text
f(x, y) = x + 2y
```

This function has more than one input.

We can ask:

```text
How does f change when x changes?
How does f change when y changes?
```

> Partial derivative = one-input-at-a-time derivative.

---

## Why Partial Derivatives Are Needed

Many useful functions depend on more than one value.

Example:

```text
score = w1*x1 + w2*x2 + b
```

The score depends on:

```text
w1
w2
b
x1
x2
```

If one value changes, the score may change.

Partial derivatives let us measure each effect separately.

> Multi-input functions need directional sensitivity for each input.

---

## Holding Other Inputs Fixed

For:

```text
f(x, y) = x + 2y
```

If we change `x` while holding `y` fixed:

```text
partial with respect to x = 1
```

If we change `y` while holding `x` fixed:

```text
partial with respect to y = 2
```

This means `y` has twice the direct effect in this function.

> Holding other inputs fixed isolates one source of change.

---

## Not The Whole Story At Once

A partial derivative does not describe every possible change at once.

It answers a focused question:

```text
What happens if this one input changes and the others stay the same?
```

If multiple inputs change together, their combined effect requires combining information.

That leads to gradients.

> A partial derivative is one component of multi-input change.

---

## Partial Derivatives And Parameters

In learning systems, parameters can be treated as inputs to a loss function.

Example:

```text
loss = function(weight1, weight2, bias)
```

Then we can ask:

```text
How does loss change if weight1 changes?
How does loss change if weight2 changes?
How does loss change if bias changes?
```

Each question is a partial derivative.

> Partial derivatives measure parameter sensitivity one parameter at a time.

---

## Why This Is Still Local

A partial derivative is measured at the current point.

Example:

```text
current x
current y
```

The answer describes nearby behavior around that current combination.

It does not automatically describe every region of the function.

> Partial derivatives are local measurements in multi-input functions.

---

## Final Summary

- A partial derivative measures change with respect to one input.
- Other inputs are held fixed.
- Multi-input functions need partial derivatives.
- Each partial derivative measures one source of sensitivity.
- Gradients collect partial derivatives into one object.
