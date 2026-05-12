---
title: "Second Derivative"
excerpt: "The second derivative measures how the first derivative changes, revealing curvature and acceleration."
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
topicOrder: 16
---

# Second Derivative

## Definition

The second derivative measures how the first derivative changes.

If the first derivative measures slope, the second derivative measures change in slope.

Basic idea:

```text
first derivative -> rate of change
second derivative -> rate of change of the rate of change
```

> Second derivative tells how slope is changing.

---

## Simple Example

Function:

```text
f(x) = x^2
```

First derivative:

```text
f'(x) = 2x
```

Second derivative:

```text
f''(x) = 2
```

The slope increases at a constant rate.

> The second derivative describes how the function bends.

---

## Positive Second Derivative

If:

```text
f''(x) > 0
```

the function bends upward near that point.

Shape:

```text
bowl
```

This can indicate a local minimum when combined with a zero first derivative.

> Positive second derivative means upward curvature.

---

## Negative Second Derivative

If:

```text
f''(x) < 0
```

the function bends downward near that point.

Shape:

```text
hill
```

This can indicate a local maximum when combined with a zero first derivative.

> Negative second derivative means downward curvature.

---

## Zero Second Derivative

If:

```text
f''(x) = 0
```

the test may be inconclusive.

The function may be locally straight.

Or it may have a more subtle shape.

> Zero second derivative does not always mean no important behavior.

---

## Slope vs Curvature

The first derivative tells direction:

```text
increasing or decreasing
```

The second derivative tells bending:

```text
slope increasing or decreasing
```

Example:

```text
slope positive, curvature positive -> rising and getting steeper
slope positive, curvature negative -> rising but flattening
```

> Slope and curvature are different pieces of information.

---

## Why This Matters

A gradient tells a local direction.

Curvature helps describe how that direction changes nearby.

This matters because a step that seems reasonable in one region may be too large or too small in another.

> Curvature gives more information about the local shape of a function.

---

## Final Summary

- The second derivative measures change in the first derivative.
- It describes curvature.
- Positive second derivative means upward bending.
- Negative second derivative means downward bending.
- Zero second derivative can be inconclusive.
- Curvature helps explain the local shape beyond slope alone.
