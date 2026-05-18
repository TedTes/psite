---
title: "Convergence"
excerpt: "Convergence means optimization is stabilizing, with updates or objective values changing less over time."
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
topicOrder: 9
---

# Convergence

## Definition

Convergence means an optimization process is settling down.

This can mean:

```text
loss stops decreasing much
parameters stop changing much
updates become very small
```

> Convergence means the optimization process is becoming stable.

---

## Loss Convergence

One kind of convergence happens when loss changes less over time.

Example:

```text
step 1 -> loss 10
step 2 -> loss 5
step 3 -> loss 3
step 4 -> loss 2.5
step 5 -> loss 2.45
step 6 -> loss 2.44
```

The loss is still changing, but only slightly.

> Loss convergence means the objective value is no longer improving much.

---

## Parameter Convergence

Another kind of convergence happens when parameters stop moving much.

Example:

```text
w = 2.000
w = 2.010
w = 2.011
w = 2.011
```

The parameter updates become small.

> Parameter convergence means the search is no longer moving far in parameter space.

---

## Convergence Does Not Mean Perfect

Convergence only means the optimization process stabilized.

It does not guarantee the result is correct.

Example:

```text
loss converged
but loss is still high
```

or:

```text
training loss is low
but new examples perform badly
```

> Convergence is about stability, not necessarily truth or quality.

---

## Why Convergence Can Happen

Convergence may happen because:

```text
the optimizer found a low-loss region
the gradient became small
the learning rate is small
the system reached a flat region
the objective cannot improve much more under the current setup
```

Some of these are good.

Some may mean the process is stuck.

> Convergence must be interpreted in context.

---

## Final Summary

- Convergence means optimization is settling down.
- Loss convergence means loss changes less over time.
- Parameter convergence means updates become small.
- Convergence does not guarantee correctness.
- A process can converge to a poor result.
- Convergence tells us about optimization behavior, not the full quality of the model.
