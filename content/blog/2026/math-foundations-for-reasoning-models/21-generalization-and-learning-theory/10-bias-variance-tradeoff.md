---
title: "Bias-Variance Tradeoff"
excerpt: "The bias-variance tradeoff describes the tension between models that are too restricted and models that are too sample-sensitive."
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
topicOrder: 10
---

# Bias-Variance Tradeoff

## Definition

The bias-variance tradeoff describes a common tension in model learning.

Simple form:

```text
too much bias -> model too limited
too much variance -> model too sensitive to training data
```

Good generalization requires balancing both.

> The tradeoff is between underfitting the pattern and overfitting the sample.

---

## High Bias

High bias means the model's assumptions are too restrictive.

Example:

```text
real pattern:
complex

model:
too simple
```

The model makes systematic errors.

This often causes underfitting.

> High bias misses useful structure.

---

## High Variance

High variance means the model is too sensitive to the particular training examples.

Example:

```text
model learns noise or accidental detail
```

It may fit training data well but fail on new data.

This often causes overfitting.

> High variance captures unstable detail.

---

## The Tradeoff

Increasing model flexibility can reduce bias.

But if flexibility is not controlled, it can increase variance.

```text
more flexibility:
can fit harder patterns
can also fit noise
```

The goal is not always the simplest model or the largest model.

The goal is useful generalization.

> The right model is flexible enough to learn the pattern and constrained enough to ignore noise.

---

## Modern View

Modern deep learning can complicate the classic picture.

Large models can sometimes generalize well despite high capacity.

But the core idea remains useful:

```text
model assumptions and sample sensitivity both matter
```

Generalization still depends on data, objective, optimization, architecture, and regularization.

> Bias and variance remain useful lenses, even when modern models are more complex.

---

## Final Summary

- Bias is systematic error from restrictive assumptions.
- Variance is sensitivity to the training sample.
- High bias can underfit.
- High variance can overfit.
- Good generalization balances flexibility with constraint.
