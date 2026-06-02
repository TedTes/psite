---
title: "Variance"
excerpt: "Variance is sensitivity to the particular training sample, where small data changes can lead to different learned behavior."
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
topicOrder: 9
---

# Variance

## Definition

Variance is how much a model's learned behavior changes when the training data changes.

Simple form:

```text
different training sample -> different model behavior
```

High variance means the model is very sensitive to the specific examples it trained on.

> Variance is sensitivity to the training sample.

---

## Why Variance Matters

A model should learn patterns that are stable beyond one sample.

If it changes too much based on accidental details, it may generalize poorly.

Example:

```text
sample A -> model learns pattern A
sample B -> model learns pattern B
```

If those patterns are unstable, the model may not capture the underlying task.

> High variance can mean the model is learning sample-specific detail.

---

## Variance And Overfitting

High variance is often connected to overfitting.

A flexible model may adapt too closely to the training set.

```text
training-specific detail -> low training error -> poor new-data performance
```

This makes the model sensitive to which examples happened to be included.

> Overfitting is often high-variance behavior.

---

## Low Variance

Low variance means the model behaves more similarly across different training samples.

This can be useful if the stable behavior matches the real pattern.

But low variance alone is not enough.

A model can be stable and wrong.

That would be high bias.

> Low variance is useful only when the stable pattern is also accurate.

---

## Reducing Variance

Common ways to reduce variance include:

```text
more training data
regularization
early stopping
simpler model class
better data sampling
ensembling
```

The goal is to reduce sensitivity to accidental details.

> Reducing variance means making learning less dependent on noise in one sample.

---

## Final Summary

- Variance is sensitivity to the training sample.
- High variance can lead to overfitting.
- Low variance means more stable learned behavior.
- Stable behavior can still be wrong if bias is high.
- Regularization and more data can reduce variance.
