---
title: "L2 Regularization"
excerpt: "L2 regularization penalizes squared weight size and encourages weights to stay smaller and smoother."
date: 2026-05-01
tags:
  - Foundations
  - Learning Theory
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Generalization and Learning Theory"
chapterSlug: generalization-and-learning-theory
chapterOrder: 21
topicOrder: 13
---

# L2 Regularization

## Definition

L2 regularization adds a penalty based on squared weight size.

Simple form:

```text
loss + penalty for squared weights
```

Larger weights receive a stronger penalty.

> L2 regularization discourages very large weights.

---

## Why Large Weights Can Be A Problem

Large weights can make a model highly sensitive to small changes in input.

That can contribute to overfitting.

Example:

```text
small input change -> large output change
```

L2 regularization pushes the model toward smaller weights.

> Smaller weights can encourage smoother behavior.

---

## L2 vs L1

L1 often encourages sparsity.

L2 usually encourages weights to be smaller overall.

```text
L1:
push some weights toward zero

L2:
discourage large weights across the model
```

Both are regularization methods, but they shape solutions differently.

> L1 is more sparse; L2 is more smoothing.

---

## Weight Decay

In many neural network settings, L2-style regularization is related to weight decay.

Simple idea:

```text
weights are gently pulled smaller during training
```

This prevents weights from growing too freely.

> L2 regularization acts as pressure against excessive weight growth.

---

## Tradeoff

Too little L2 may not control overfitting.

Too much L2 may make the model too weak.

```text
moderate L2 -> smoother learned function
excessive L2 -> underfitting
```

As with all regularization, the strength matters.

> L2 helps when it improves generalization without blocking useful learning.

---

## Final Summary

- L2 regularization penalizes squared weight size.
- It discourages very large weights.
- It often encourages smoother behavior.
- It differs from L1, which can encourage sparsity.
- Too much L2 can cause underfitting.
