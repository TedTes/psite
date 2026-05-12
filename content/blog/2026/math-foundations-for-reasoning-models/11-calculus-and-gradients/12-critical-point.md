---
title: "Critical Point"
excerpt: "A critical point is a location where the first derivative is zero or undefined, making it a candidate for special behavior."
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
topicOrder: 12
---

# Critical Point

## Definition

A critical point is a point where the derivative is zero or undefined.

For multi-input functions, it is where the gradient is zero or undefined.

Basic idea:

```text
local change becomes flat or unclear
```

> A critical point is a candidate location for special behavior.

---

## Derivative Equals Zero

If:

```text
f'(x) = 0
```

then the function is locally flat at that point.

Example shape:

```text
decreasing -> flat -> increasing
```

This may indicate a local minimum.

But flatness alone does not guarantee a minimum.

> Zero derivative means local flatness, not automatic success.

---

## Gradient Equals Zero

For a multi-input function:

```text
gradient = [0, 0]
```

means the function has no first-order increase in the coordinate directions at that point.

The surface may be:

```text
bottom of a bowl
top of a hill
saddle-like
flat plateau
```

> Zero gradient identifies a candidate, not the type of point.

---

## Undefined Derivative

A point can also be critical if the derivative is undefined.

This can happen at:

```text
sharp corners
cusps
breaks
```

Example idea:

```text
function has a corner at x = 0
```

The slope from the left and right may not match.

> Some important points are not smooth.

---

## Candidate, Not Conclusion

A critical point needs further interpretation.

It could be:

```text
local minimum
local maximum
saddle point
flat region
```

So the question is not only:

```text
Is the derivative zero?
```

It is also:

```text
What kind of behavior exists around this point?
```

> Critical point means "look here more carefully."

---

## Why This Matters

When improving a function, critical points are important because local movement may slow down or stop.

If the gradient is near zero, the local signal is weak.

That can mean:

```text
near a useful minimum
stuck near a poor flat region
passing through a saddle
```

> Flatness must be interpreted by surrounding behavior.

---

## Final Summary

- A critical point occurs where the derivative or gradient is zero or undefined.
- Zero derivative means local flatness.
- Undefined derivative can occur at sharp or broken points.
- A critical point may be a minimum, maximum, saddle, or plateau.
- It is a candidate for special behavior, not a final diagnosis.
