---
title: "Cross-Entropy"
excerpt: "Cross-entropy measures how surprising true outcomes are under a predicted distribution."
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
topicOrder: 7
---

# Cross-Entropy

## Definition

Cross-entropy measures how surprising outcomes from one distribution are under another distribution.

In learning, it often means:

```text
how surprising the true labels are under the model's predicted probabilities
```

> Cross-entropy measures prediction surprise against the target.

---

## Target Distribution And Predicted Distribution

Learning often compares two distributions.

Target distribution:

```text
what should happen
```

Predicted distribution:

```text
what the model says will happen
```

Cross-entropy evaluates how well the predicted distribution assigns probability to the target outcomes.

> Cross-entropy compares target reality with model probability.

---

## Classification Example

Suppose the true label is:

```text
bug
```

The target distribution can be:

```text
bug: 1
billing: 0
feature: 0
question: 0
```

If the model predicts:

```text
bug: 0.9
billing: 0.05
feature: 0.03
question: 0.02
```

cross-entropy is low.

If the model predicts:

```text
bug: 0.01
billing: 0.7
feature: 0.2
question: 0.09
```

cross-entropy is high.

> The true class should receive high probability.

---

## One-Hot Target Case

When the target puts all probability on the correct label, cross-entropy becomes:

```text
-log(probability assigned to correct label)
```

Example:

```text
correct label probability = 0.9 -> low loss
correct label probability = 0.01 -> high loss
```

> For one correct class, cross-entropy is negative log probability of the correct class.

---

## Cross-Entropy vs Entropy

Entropy measures uncertainty inside one distribution.

Cross-entropy measures how one distribution is encoded or predicted using another.

```text
entropy -> uncertainty of target distribution
cross-entropy -> target outcomes under predicted distribution
```

> Cross-entropy introduces mismatch between target and prediction.

---

## Why Cross-Entropy Matters For Learning

Cross-entropy is widely used as a loss for classification.

It rewards models that assign high probability to the correct label.

It penalizes models that assign low probability to the correct label.

This makes it a practical bridge between probability and optimization.

> Cross-entropy turns probability mismatch into a number to minimize.

---

## Cross-Entropy Does Not Require Understanding

The model does not need to understand the label.

It assigns probabilities.

Cross-entropy evaluates those probabilities against the target.

> Cross-entropy measures probability quality, not awareness.

---

## Final Summary

- Cross-entropy measures target outcomes under predicted probabilities.
- It compares target and predicted distributions.
- In one-hot classification, it becomes `-log(correct class probability)`.
- Low cross-entropy means the true outcome was not surprising under the model.
- High cross-entropy means the true outcome was surprising.
- Cross-entropy is commonly used as classification loss.
