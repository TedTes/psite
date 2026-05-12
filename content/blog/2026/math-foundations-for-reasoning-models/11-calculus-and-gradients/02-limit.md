---
title: "Limit"
excerpt: "A limit describes what a function output approaches as the input approaches a value."
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
topicOrder: 2
---

# Limit

## Definition

A limit describes what a function output approaches as the input approaches a value.

Basic form:

```text
as x approaches a
f(x) approaches L
```

Written as:

```text
lim x->a f(x) = L
```

> A limit is about approaching, not just arriving.

---

## Simple Example

Function:

```text
f(x) = x + 1
```

As `x` approaches `2`, the output approaches `3`.

Nearby values:

```text
x = 1.9 -> f(x) = 2.9
x = 1.99 -> f(x) = 2.99
x = 2.01 -> f(x) = 3.01
x = 2.1 -> f(x) = 3.1
```

The outputs move toward `3`.

> The limit captures the value the output gets close to.

---

## Why Not Just Plug In The Value?

Sometimes plugging in the value is enough.

Example:

```text
f(x) = x + 1
f(2) = 3
```

But calculus often cares about behavior near a value.

Question:

```text
What happens as x gets closer and closer to this point?
```

That question is different from:

```text
What is the output exactly at this point?
```

> Limits study nearby behavior.

---

## Limit Can Exist Even If The Function Value Is Missing

Suppose a function is not defined at one point, but nearby values still approach a clear output.

Example idea:

```text
x approaches 2
outputs approach 4
```

Even if the function has no defined value at `x = 2`, the nearby behavior may still point toward `4`.

> A limit can describe a missing point by looking around it.

---

## Limit Can Fail To Exist

A limit does not always exist.

Example behavior:

```text
approach from left -> output approaches 1
approach from right -> output approaches 5
```

There is no single value being approached.

> A limit requires a consistent approaching behavior.

---

## Why Limits Matter For Change

To measure local change, we often compare two nearby inputs.

Example:

```text
change in output / change in input
```

Then we ask what happens as the input difference becomes very small.

That is a limit question.

> Derivatives are built from limits of smaller and smaller changes.

---

## Intuition

A limit is a way to ask:

```text
What value is this behavior moving toward?
```

It lets us reason about behavior near a point, even before defining exact instantaneous change.

> Limits make "getting closer" precise enough for calculus.

---

## Final Summary

- A limit describes what output approaches as input approaches a value.
- Limits focus on nearby behavior.
- A limit can exist even if the function value at the point is missing.
- A limit can fail if nearby behavior does not approach one value.
- Derivatives depend on limits.
