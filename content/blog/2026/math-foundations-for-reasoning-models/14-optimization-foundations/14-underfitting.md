---
title: "Underfitting"
excerpt: "Underfitting happens when a model fails to capture enough structure even in the training examples."
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
topicOrder: 14
---

# Underfitting

## Definition

Underfitting happens when a model fails to capture enough of the pattern.

It performs poorly even on the training examples.

Example:

```text
training examples -> high loss
new examples -> high error
```

> Underfitting means the model is not learning enough structure.

---

## Why It Happens

Underfitting can happen for several reasons.

```text
model is too simple
features are not useful
optimization has not run long enough
learning rate is poorly chosen
objective does not match the task
```

The shared problem is that the system does not reach a useful representation of the pattern.

> Underfitting means the current setup cannot fit the needed structure well enough.

---

## Simple Example

Suppose the true pattern is curved.

But the model can only represent a straight line.

```text
true pattern: curved
model form: straight line
```

No parameter setting can fit the pattern well.

The model underfits because its available transformations are too limited.

> A model can underfit when its structure is too weak for the pattern.

---

## Relation to Optimization

Underfitting is not always caused by bad optimization.

Sometimes the optimizer cannot find good parameters because good parameters do not exist inside the current parameter space.

Example:

```text
best possible setting under current model -> still high loss
```

In other cases, the model could fit better, but optimization has not reached a good region yet.

> Underfitting can come from model limits, optimization limits, or both.

---

## Underfitting vs Overfitting

Underfitting and overfitting are different failures.

```text
underfitting:
bad on training examples
bad on new examples

overfitting:
good on training examples
bad on new examples
```

Underfitting means too little useful structure was captured.

Overfitting means too much training-specific detail was captured.

> Underfitting is not enough fit; overfitting is too narrow a fit.

---

## Final Summary

- Underfitting means the model fails to capture enough structure.
- It usually produces high training loss.
- It can happen when the model is too simple.
- It can also happen when optimization is poor or incomplete.
- Underfitting differs from overfitting.
- The model needs enough capacity and optimization progress to capture the useful pattern.
