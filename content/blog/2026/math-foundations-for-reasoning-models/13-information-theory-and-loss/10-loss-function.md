---
title: "Loss Function"
excerpt: "A loss function turns prediction error into a number the model can try to reduce."
date: 2026-05-01
tags:
  - Foundations
  - Information Theory
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Information Theory and Loss"
chapterSlug: information-theory-and-loss
chapterOrder: 13
topicOrder: 10
---

# Loss Function

## Definition

A loss function turns prediction error into a number.

Basic form:

```text
prediction + target -> loss
```

Low loss means the prediction is better under the chosen measurement.

High loss means the prediction is worse.

> Loss function = rule for measuring wrongness.

---

## Why Loss Is Needed

A model needs a way to compare:

```text
what it predicted
what should have happened
```

Without loss, there is no precise objective to improve.

Example:

```text
predicted label probability
true label
```

Loss turns that comparison into a number.

> Learning needs measurable wrongness.

---

## Different Problems Need Different Losses

Different tasks define wrongness differently.

Examples:

```text
classification -> probability assigned to correct class
regression -> distance between predicted and actual value
ranking -> wrong ordering of items
```

The loss function should match the problem.

> Loss defines what the model is being trained to care about.

---

## Loss And Information

For probability-based prediction, loss often measures surprise.

Example:

```text
correct outcome has low predicted probability -> high surprise -> high loss
correct outcome has high predicted probability -> low surprise -> low loss
```

This connects loss to information theory.

> Some losses measure information mismatch.

---

## Loss Is Not The Same As Accuracy

Accuracy counts whether the final answer is correct.

Loss can measure how good the probability assignment was.

Example:

```text
correct label probability = 0.51
correct label probability = 0.99
```

Both may produce the same hard prediction.

But the second is a better probability assignment.

> Loss can see confidence quality that accuracy hides.

---

## Loss As Objective

Learning often tries to minimize loss.

Basic loop:

```text
make prediction
compute loss
adjust parameters
reduce future loss
```

The loss gives the system a direction for improvement.

> Loss defines the objective of learning.

---

## Loss Depends On The Chosen Rule

Loss is not an absolute measure of truth.

It is defined by a chosen function.

If the loss function is poorly chosen, the model may optimize the wrong behavior.

> A model learns what the loss rewards and penalizes.

---

## Final Summary

- A loss function measures prediction error.
- It maps prediction and target to a number.
- Low loss means better under the chosen rule.
- Different problems need different losses.
- Probability-based losses often measure surprise or information mismatch.
- Loss is not the same as accuracy.
- Learning uses loss as an objective to minimize.
