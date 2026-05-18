---
title: "Step Size"
excerpt: "Step size is the actual distance a parameter update moves in parameter space."
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
topicOrder: 8
---

# Step Size

## Definition

Step size is the actual amount the parameters move during an update.

Example:

```text
old parameter: 5.0
new parameter: 4.8
step size: 0.2
```

> Step size is the size of the movement in parameter space.

---

## Step Size vs Learning Rate

Learning rate and step size are related, but they are not identical.

The learning rate is a control value.

The step size is the actual movement.

```text
learning rate -> chosen by optimizer setup
gradient -> comes from loss landscape
step size -> actual update produced by both
```

Example:

```text
learning rate = 0.1
gradient size = 5
step size = 0.5
```

> Learning rate helps determine step size, but step size also depends on the gradient.

---

## Why Step Size Matters

Optimization is movement through parameter space.

If steps are too small:

```text
progress is slow
```

If steps are too large:

```text
updates may jump over lower-loss regions
```

The optimizer needs steps that are large enough to make progress and small enough to stay controlled.

> Step size affects whether optimization moves smoothly or erratically.

---

## Direction and Size

An update has two parts.

```text
direction: where to move
size: how far to move
```

The gradient helps determine direction.

The step size determines how far the parameters travel.

Example:

```text
move left by 0.1
move left by 5.0
```

These have the same direction but different step sizes.

> Direction decides where the update goes. Step size decides how far it goes.

---

## Step Size Can Change

The step size does not have to be constant.

Even with the same learning rate, the gradient can change.

```text
large gradient -> larger step
small gradient -> smaller step
```

As optimization gets closer to flatter regions, steps may naturally become smaller.

> Step size can change because the local shape of the loss landscape changes.

---

## Final Summary

- Step size is the actual distance moved during an update.
- Learning rate helps control step size.
- Step size also depends on the gradient.
- Updates have direction and size.
- Too-small steps can be slow.
- Too-large steps can overshoot lower-loss regions.
