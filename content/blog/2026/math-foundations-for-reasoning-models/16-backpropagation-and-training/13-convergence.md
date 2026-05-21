---
title: "Convergence"
excerpt: "Convergence in training means loss, parameters, or updates begin to stabilize over time."
date: 2026-05-01
tags:
  - Foundations
  - Training
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Backpropagation and Training"
chapterSlug: backpropagation-and-training
chapterOrder: 16
topicOrder: 13
---

# Convergence

## Definition

Convergence means training is stabilizing.

This can show up as:

```text
loss changes less
parameters move less
gradients become smaller
updates become smaller
```

> Convergence means the training process is settling into a pattern or region.

---

## Loss Convergence

Loss convergence means the loss stops improving much.

Example:

```text
epoch 1 -> loss 3.0
epoch 2 -> loss 1.8
epoch 3 -> loss 1.2
epoch 4 -> loss 1.1
epoch 5 -> loss 1.09
```

The loss is still changing, but less than before.

> Loss convergence means the objective value is stabilizing.

---

## Parameter Convergence

Parameter convergence means weights and biases stop changing much.

Example:

```text
weight update: 0.10
weight update: 0.03
weight update: 0.005
weight update: 0.0008
```

The update sizes shrink.

> Parameter convergence means the model is moving less in parameter space.

---

## Convergence Does Not Mean Generalization

A model can converge and still fail to generalize.

Example:

```text
training loss stabilizes at a low value
new examples still perform badly
```

Convergence describes training behavior.

Generalization describes behavior on new examples.

> A converged model is not automatically a useful model.

---

## Convergence Can Be Good Or Bad

Convergence can mean the model found a useful low-loss region.

It can also mean training is stuck.

Examples:

```text
good:
loss is low and behavior transfers

bad:
loss is high but updates are tiny
```

> Convergence must be judged together with loss and performance.

---

## Final Summary

- Convergence means training is stabilizing.
- Loss convergence means loss changes less over time.
- Parameter convergence means updates become smaller.
- Convergence does not guarantee generalization.
- A model can converge to a poor solution.
- Convergence must be interpreted with the actual training outcome.
