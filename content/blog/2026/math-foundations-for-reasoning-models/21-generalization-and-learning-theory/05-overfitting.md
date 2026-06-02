---
title: "Overfitting"
excerpt: "Overfitting happens when a model learns training-specific details that do not transfer well to new data."
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
topicOrder: 5
---

# Overfitting

## Definition

Overfitting happens when a model fits the training data too specifically.

Simple form:

```text
good on training data
bad on unseen data
```

The model learned details that do not generalize.

> Overfitting is fitting the sample instead of the underlying pattern.

---

## Why Overfitting Happens

Training data contains both useful signal and accidental detail.

Examples:

```text
noise
label errors
duplicates
sampling bias
irrelevant correlations
```

A flexible model may learn those details if they help reduce training loss.

> Overfitting happens when training success captures non-reusable patterns.

---

## Training Loss Can Mislead

A model can keep improving on training data while getting worse on validation data.

Example:

```text
training loss: down
validation loss: up
```

This means the model is becoming better at the training set but worse at new cases.

> Lower training loss does not always mean better generalization.

---

## Overfitting As Memorization

One form of overfitting is memorization.

The model remembers examples instead of learning general structure.

```text
seen case -> correct
new similar case -> wrong
```

Memorization can be useful in limited ways, but it is not enough for generalization.

> Memorization becomes a problem when it replaces reusable learning.

---

## How Overfitting Is Reduced

Common methods include:

```text
more representative data
regularization
early stopping
dropout
smaller model capacity
better validation practice
```

These methods do not eliminate the problem automatically.

They help push learning toward reusable patterns.

> Reducing overfitting means discouraging training-specific shortcuts.

---

## Final Summary

- Overfitting means fitting training data too specifically.
- It often shows as high training performance and weak test performance.
- It can come from noise, bias, or accidental correlations.
- Training loss alone can be misleading.
- Regularization and validation help detect and reduce overfitting.
