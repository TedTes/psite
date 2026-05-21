---
title: "Exploding Gradients"
excerpt: "Exploding gradients happen when gradient signals become too large as they move backward through many layers."
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
topicOrder: 9
---

# Exploding Gradients

## Definition

Exploding gradients happen when gradients become very large during backpropagation.

Basic pattern:

```text
loss -> later layers -> earlier layers
gradient grows too large
```

Large gradients can create very large parameter updates.

> Exploding gradients make training unstable.

---

## Why It Happens

Backpropagation uses the chain rule.

If local rates of change are repeatedly larger than 1, their product can grow quickly.

Example:

```text
2 * 2 * 2 * 2 * 2 = 32
```

With many layers, this growth can become too large.

> Repeated multiplication by large values can grow gradients.

---

## Why It Is A Problem

Large gradients can cause large updates.

Example:

```text
large gradient -> large weight change
large weight change -> unstable output
unstable output -> unstable loss
```

The model can jump around parameter space instead of improving smoothly.

> Exploding gradients can make training erratic.

---

## Vanishing vs Exploding

Vanishing gradients become too small.

Exploding gradients become too large.

```text
vanishing:
updates become tiny

exploding:
updates become huge
```

Both are gradient flow problems.

Both become more important in deep networks.

> Deep training needs gradients that are neither too small nor too large.

---

## Final Summary

- Exploding gradients are gradients that become too large.
- They happen during backward propagation.
- The chain rule can amplify gradients through repeated multiplication.
- Large gradients can cause unstable parameter updates.
- Exploding gradients are the opposite failure mode of vanishing gradients.
- Deep networks need controlled gradient flow.
