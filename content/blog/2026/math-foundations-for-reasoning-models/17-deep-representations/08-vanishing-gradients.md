---
title: "Vanishing Gradients"
excerpt: "Vanishing gradients happen when gradient signals become too small as they move backward through many layers."
date: 2026-05-01
tags:
  - Foundations
  - Representation
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Deep Representations"
chapterSlug: deep-representations
chapterOrder: 17
topicOrder: 8
---

# Vanishing Gradients

## Definition

Vanishing gradients happen when gradients become very small as they move backward through a network.

Basic pattern:

```text
loss -> later layers -> earlier layers
gradient gets smaller and smaller
```

If the gradient becomes too small, earlier layers receive a weak update signal.

> Vanishing gradients make earlier layers hard to train.

---

## Why It Happens

Backpropagation passes gradients through a chain of functions.

The chain rule multiplies local rates of change.

If many of those local values are small, the product can become very small.

Example:

```text
0.5 * 0.5 * 0.5 * 0.5 = 0.0625
```

With many layers, this shrinking can become severe.

> Repeated multiplication by small values can shrink gradients.

---

## Why It Matters

If early layers receive tiny gradients, their parameters barely change.

Example:

```text
early weight gradient = 0.000001
learning rate = 0.01
update is extremely small
```

The network may learn mainly in later layers while earlier layers stay poorly trained.

> Vanishing gradients weaken learning in earlier layers.

---

## Relation To Depth

Vanishing gradients become more likely as networks get deeper.

More layers mean longer chains for gradients to pass through.

```text
shallow network -> shorter gradient path
deep network -> longer gradient path
```

This is one reason deep networks need careful training methods.

> Depth increases the importance of stable gradient flow.

---

## Final Summary

- Vanishing gradients are gradients that become too small.
- They happen during backward propagation.
- The chain rule can shrink gradients through repeated multiplication.
- Tiny gradients make early layers learn slowly.
- The problem becomes more important in deeper networks.
- Training deep networks requires preserving useful gradient signals.
