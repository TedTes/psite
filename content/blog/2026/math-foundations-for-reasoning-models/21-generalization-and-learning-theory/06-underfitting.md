---
title: "Underfitting"
excerpt: "Underfitting happens when a model is too limited or poorly trained to capture the useful pattern even on training data."
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
topicOrder: 6
---

# Underfitting

## Definition

Underfitting happens when a model fails to learn the useful pattern.

Simple form:

```text
bad on training data
bad on unseen data
```

The model is not fitting the task well enough.

> Underfitting is insufficient learning of the pattern.

---

## Why Underfitting Happens

Underfitting can happen for several reasons.

Examples:

```text
model too simple
not enough training
poor features
bad optimization
wrong architecture
too much regularization
```

The model does not have enough useful learning capacity or training signal.

> Underfitting means the model cannot capture what it needs to capture.

---

## Underfitting vs Overfitting

Overfitting:

```text
training performance high
new-data performance low
```

Underfitting:

```text
training performance low
new-data performance low
```

Overfitting learns too much training-specific detail.

Underfitting learns too little useful structure.

> Overfitting is too specific; underfitting is too weak.

---

## Example

Suppose the true relationship is curved.

A simple straight-line model may not capture it.

```text
true pattern:
nonlinear

model:
linear
```

The model may perform poorly even on training examples.

> A model can fail because its representational form is too limited.

---

## How Underfitting Is Reduced

Common responses include:

```text
increase model capacity
train longer
improve features or representations
adjust optimization
reduce excessive regularization
use a better architecture
```

The goal is to give the model enough ability to learn the pattern.

> Reducing underfitting means increasing useful learning ability.

---

## Final Summary

- Underfitting means failing to learn the useful pattern.
- It usually performs poorly on both training and test data.
- It can come from limited capacity, poor optimization, or too much regularization.
- It is different from overfitting.
- Reducing underfitting means giving the model enough useful ability to fit the task.
