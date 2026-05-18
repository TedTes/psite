---
title: "Global Minimum"
excerpt: "A global minimum is the parameter setting with the lowest loss across the entire parameter space."
date: 2026-05-01
tags:
  - Foundations
  - Optimization
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Optimization Foundations"
chapterSlug: optimization-foundations
chapterOrder: 14
topicOrder: 11
---

# Global Minimum

## Definition

A global minimum is the lowest-loss point in the entire parameter space.

Example:

```text
setting A -> loss 5
setting B -> loss 2
setting C -> loss 9
setting D -> loss 1
```

If no setting has lower loss than setting D, then setting D is the global minimum.

> A global minimum is the best point according to the objective function.

---

## Global vs Local Minimum

A local minimum is best nearby.

A global minimum is best overall.

Example:

```text
local minimum:
better than nearby points

global minimum:
better than all points
```

A loss landscape can have many local minima but only one lowest loss value.

There can also be multiple global minima if different settings reach the same lowest loss.

> Local means nearby best. Global means overall best.

---

## Why It Can Be Hard to Find

Finding the global minimum can be hard when the parameter space is large.

The optimizer usually cannot test every possible parameter setting.

Example:

```text
millions of possible settings
only local gradient information available
```

Gradient descent can move toward lower loss, but it does not automatically prove that the final point is globally best.

> Searching a large parameter space makes global certainty difficult.

---

## Global Minimum Depends on the Objective

The global minimum is best only according to the chosen objective function.

If the objective is poorly chosen, the global minimum may not solve the real problem.

Example:

```text
objective: minimize training loss only
result: excellent training fit, poor new-example behavior
```

The minimum is mathematically good for the objective, but the objective may be incomplete.

> The best objective value is only useful if the objective represents the real goal.

---

## Final Summary

- A global minimum is the lowest-loss point in the whole parameter space.
- A local minimum is only lowest compared with nearby points.
- Large parameter spaces make global minima hard to verify.
- Gradient descent does not automatically prove global optimality.
- The global minimum is defined relative to the objective function.
- A perfect objective value is useful only when the objective matches the intended behavior.
