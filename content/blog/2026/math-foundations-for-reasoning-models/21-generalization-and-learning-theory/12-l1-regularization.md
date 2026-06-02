---
title: "L1 Regularization"
excerpt: "L1 regularization penalizes the absolute size of weights and can encourage sparse solutions."
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
topicOrder: 12
---

# L1 Regularization

## Definition

L1 regularization adds a penalty based on the absolute size of model weights.

Simple form:

```text
loss + penalty for absolute weight size
```

Large weights increase the penalty.

> L1 regularization discourages unnecessary large weights.

---

## Why Penalize Weights

Weights control how strongly features affect the model.

If the model relies too heavily on many specific weights, it may overfit.

L1 regularization pushes the model to use weights more selectively.

> Penalizing weights can reduce overly specific dependence on training details.

---

## Sparsity

A key effect of L1 regularization is sparsity.

Sparsity means many weights can become zero or near zero.

Simple idea:

```text
many possible inputs
only some strongly used
```

This can make the model depend on fewer active factors.

> L1 can encourage sparse solutions.

---

## L1 As Feature Selection

Because L1 can push some weights toward zero, it can act like feature selection.

Example:

```text
important feature -> weight kept
less useful feature -> weight reduced toward zero
```

This is most intuitive in simpler models.

In large neural networks, the effect is still a regularizing pressure.

> L1 encourages the model to ignore some inputs or pathways.

---

## Tradeoff

Too little L1 may not reduce overfitting.

Too much L1 may remove useful information.

```text
moderate L1 -> simpler useful fit
excessive L1 -> underfitting
```

The strength of the penalty matters.

> L1 regularization is useful only when the constraint matches the problem.

---

## Final Summary

- L1 regularization penalizes absolute weight size.
- It discourages unnecessary large weights.
- It can encourage sparse solutions.
- Sparsity can act like feature selection.
- Too much L1 can cause underfitting.
