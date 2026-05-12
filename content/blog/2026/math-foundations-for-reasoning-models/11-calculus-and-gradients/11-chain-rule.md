---
title: "Chain Rule"
excerpt: "The chain rule describes how changes pass through composed functions."
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
topicOrder: 11
---

# Chain Rule

## Definition

The chain rule describes how change passes through composed functions.

If one function feeds into another:

```text
x -> g(x) -> f(g(x))
```

then a change in `x` affects `g`, and the change in `g` affects `f`.

> Chain rule = tracking change through a chain of functions.

---

## Function Composition

Earlier, function composition meant applying one function after another.

Example:

```text
g(x) = x + 1
f(u) = u^2
```

Composed function:

```text
f(g(x)) = (x + 1)^2
```

The output depends on `x` indirectly through `g(x)`.

> Composition creates indirect dependency.

---

## Why Ordinary Derivative Is Not Enough

If:

```text
y = f(u)
u = g(x)
```

then `y` depends on `x`, but not directly.

The path is:

```text
x changes -> u changes -> y changes
```

To know how `y` changes with respect to `x`, we must combine both effects.

> The chain rule handles indirect change.

---

## Basic Form

If:

```text
y = f(u)
u = g(x)
```

then:

```text
dy/dx = dy/du * du/dx
```

In words:

```text
change of y with respect to x
=
change of y with respect to u
times
change of u with respect to x
```

> Changes multiply along a dependency chain.

---

## Simple Example

Let:

```text
u = x + 1
y = u^2
```

Then:

```text
dy/du = 2u
du/dx = 1
```

So:

```text
dy/dx = 2u * 1
```

Since `u = x + 1`:

```text
dy/dx = 2(x + 1)
```

> The derivative follows the structure of the computation.

---

## Why This Matters For Multi-Step Systems

Many systems are built as sequences:

```text
input -> step 1 -> step 2 -> step 3 -> output
```

If the output changes, we may need to understand how earlier values contributed.

The chain rule gives a principled way to trace sensitivity through steps.

> The chain rule connects local changes across a composed process.

---

## Do Not Overcomplicate It

The core idea is simple:

```text
if A affects B
and B affects C
then A affects C through B
```

The chain rule tells how strong that indirect effect is.

> The chain rule measures indirect influence.

---

## Final Summary

- The chain rule applies to composed functions.
- It tracks how change passes through intermediate values.
- Changes multiply along the chain.
- It is needed when output depends on input indirectly.
- This becomes important whenever a system is built from multiple connected steps.
