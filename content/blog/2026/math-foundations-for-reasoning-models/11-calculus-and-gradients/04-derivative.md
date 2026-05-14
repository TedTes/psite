---
title: "Derivative (First Derivative)"
excerpt: "The first derivative measures how a function output changes with respect to its input at a point."
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
topicOrder: 4
---

# Derivative (First Derivative)

## Definition

The first derivative measures how a function output changes with respect to its input at a point.

When people say "the derivative" without extra detail, they usually mean the first derivative.

Basic question:

```text
If x changes a little, how does f(x) change?
```

> First derivative = local rate of change.

---

## From Change To Derivative

Start with two inputs:

```text
x
x + change
```

Compare the outputs:

```text
f(x)
f(x + change)
```

Average change:

```text
change in output / change in input
```

The derivative asks what happens when the input change becomes extremely small.

> A derivative is the limiting version of average change.

---

## First Derivative vs Later Derivatives

The first derivative measures change in the original function.

Example:

```text
f'(x)
```

means:

```text
local rate of change of f(x)
```

A second derivative appears later and measures how the first derivative changes.

```text
f''(x)
```

means:

```text
rate of change of f'(x)
```

> First derivative measures change; second derivative measures change of change.

---

## Difference Quotient

The common form is:

```text
(f(x + h) - f(x)) / h
```

where:

```text
h = small input change
```

As `h` gets closer to `0`, this ratio approaches the derivative if the limit exists.

> The derivative comes from shrinking the comparison interval.

---

## Simple Example

Function:

```text
f(x) = 2x
```

If `x` increases by `1`, output increases by `2`.

If `x` increases by `0.1`, output increases by `0.2`.

The output always changes twice as much as the input.

First derivative:

```text
f'(x) = 2
```

> The derivative tells the sensitivity of output to input.

---

## Derivative Can Depend On The Point

Function:

```text
f(x) = x^2
```

Near `x = 1`, the function changes moderately.

Near `x = 10`, the function changes much faster.

First derivative:

```text
f'(x) = 2x
```

So:

```text
f'(1) = 2
f'(10) = 20
```

> Some functions change at different rates in different places.

---

## Positive, Negative, And Zero Derivatives

A derivative can be positive, negative, or zero.

```text
positive -> output increases as input increases
negative -> output decreases as input increases
zero -> output is locally flat
```

Example:

```text
f'(x) = 0
```

means the function is flat at that point, but not necessarily flat everywhere.

> The derivative describes local direction of change.

---

## Why Derivatives Matter

Learning often asks:

```text
How does error change if a parameter changes?
```

That is a derivative question.

Example:

```text
change weight slightly -> observe change in loss
```

If we know the direction of change, we can later choose updates more intelligently.

> Derivatives turn change into usable information.

---

## Final Summary

- The first derivative measures local rate of change.
- It comes from shrinking average change toward an instant.
- It can be positive, negative, or zero.
- It can vary from point to point.
- When people say "derivative" by default, they usually mean first derivative.
- First derivatives help measure how outputs respond to input or parameter changes.
