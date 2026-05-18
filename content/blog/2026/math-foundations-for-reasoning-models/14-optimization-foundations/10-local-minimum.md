---
title: "Local Minimum"
excerpt: "A local minimum is a parameter setting whose nearby alternatives have higher loss."
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
topicOrder: 10
---

# Local Minimum

## Definition

A local minimum is a point where the loss is lower than nearby points.

Example:

```text
nearby left  -> loss 4
current      -> loss 2
nearby right -> loss 5
```

The current point is better than its local neighborhood.

> A local minimum is locally good, not necessarily globally best.

---

## Local Neighborhood

"Local" means nearby in parameter space.

It does not mean all possible parameter settings.

Example:

```text
current parameter setting
slightly smaller settings
slightly larger settings
```

If nearby settings have higher loss, the current setting is a local minimum.

> Local minimum is defined by comparison with nearby alternatives.

---

## Why Gradient Descent Can Stop There

Gradient descent uses local information.

At a local minimum, moving slightly in nearby directions may increase loss.

So the optimizer may stop making useful progress.

```text
nearby movement -> higher loss
update becomes small
optimization stabilizes
```

> Local methods can settle in locally low regions.

---

## Local Minimum Is Not Always Bad

A local minimum is not automatically a failure.

If the loss is low enough and the model behaves well, a local minimum may be useful.

The real question is:

```text
does this parameter setting solve the problem well enough?
```

not:

```text
is it mathematically the absolute lowest possible loss?
```

> In practical learning, useful low loss can matter more than perfect global optimality.

---

## Local Minimum vs Flat Region

A local minimum is a locally low point.

A flat region is a region where loss changes very little.

Example:

```text
local minimum:
nearby movement mostly increases loss

flat region:
nearby movement changes loss very little
```

Both can make optimization slow or stable, but they are not identical.

> Local minima are about nearby comparison; flatness is about small change.

---

## Final Summary

- A local minimum has lower loss than nearby parameter settings.
- "Local" means nearby in parameter space.
- Gradient descent can settle at local minima.
- A local minimum is not necessarily the best possible point overall.
- Local minima are not always bad if the resulting behavior is useful.
- Local minima are different from flat regions.
