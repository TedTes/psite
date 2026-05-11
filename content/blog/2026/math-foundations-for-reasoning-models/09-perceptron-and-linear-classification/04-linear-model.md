---
title: "Linear Model"
excerpt: "A linear model computes a score by combining features with weights and a bias."
date: 2026-05-01
tags:
  - Foundations
  - Perceptron
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Perceptron and Linear Classification"
chapterSlug: perceptron-and-linear-classification
chapterOrder: 9
topicOrder: 4
---

# Linear Model

## Definition

A linear model computes an output from a weighted combination of input features.

Basic form:

```text
score = w1*x1 + w2*x2 + ... + wn*xn + b
```

where:

```text
x values = input features
w values = weights
b = bias
```

> Linear model = weighted sum plus bias.

---

## Input Features

The input is a feature vector.

Example:

```text
x = [x1, x2, x3]
```

Each component is a feature value.

Example:

```text
x = [hours studied, attendance, prior score]
```

> A linear model operates on feature vectors.

---

## Weights

Each feature gets a weight.

Example:

```text
weights = [w1, w2, w3]
```

The weight controls how strongly the feature contributes to the score.

Example:

```text
score = 2*x1 + 5*x2
```

Feature `x2` has larger weight than `x1`.

> Weights control feature influence.

---

## Bias

The bias is an added constant.

Example:

```text
score = 2*x1 + 5*x2 + 3
```

The `3` is the bias.

It shifts the score even when feature values are zero.

> Bias shifts the model's decision rule.

---

## Vector Form

The weighted part can be written as a dot product.

Example:

```text
w = [2, 5]
x = [3, 4]
```

Dot product:

```text
dot(w, x) = 2*3 + 5*4 = 26
```

With bias:

```text
score = dot(w, x) + b
```

> Linear models are built from dot products.

---

## Linear Model For Classification

For classification, the linear model produces a score.

Then a rule turns the score into a class.

Example:

```text
if score >= 0:
  class 1
else:
  class -1
```

The model itself computes the score.

The decision rule converts score to class.

> Linear classification uses a linear score plus a decision rule.

---

## Why "Linear"?

It is linear because each feature is multiplied by a weight and added.

Allowed:

```text
w1*x1 + w2*x2
```

Not linear:

```text
x1*x2
x1^2
```

Those introduce nonlinear relationships.

> A linear model combines features by weighted addition.

---

## Final Summary

- A linear model computes a weighted sum plus bias.
- Inputs are feature vectors.
- Weights control feature influence.
- Bias shifts the score.
- The weighted part is a dot product.
- For classification, the score is converted into a class.
- Linear models combine features by weighted addition.
