---
title: "Bias"
excerpt: "Bias is a constant added to a linear score to shift the decision rule."
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
topicOrder: 6
---

# Bias

## Definition

Bias is a constant added to a model's weighted sum.

Basic form:

```text
score = dot(w, x) + b
```

`b` is the bias.

> Bias = constant shift added to the score.

---

## Why Bias Exists

Without bias, the score is:

```text
score = dot(w, x)
```

If the input is the zero vector:

```text
x = [0, 0]
```

then:

```text
score = 0
```

Bias lets the model produce a nonzero score even when input features are zero.

Example:

```text
score = dot(w, x) + 3
```

> Bias shifts the model away from always passing through the origin.

---

## Bias Shifts The Decision Boundary

For classification:

```text
if score >= 0:
  class 1
else:
  class -1
```

The bias changes where `score = 0`.

Example:

```text
score = x - 5
```

The decision changes at:

```text
x = 5
```

Without bias:

```text
score = x
```

the decision changes at:

```text
x = 0
```

> Bias moves the cutoff location.

---

## Bias vs Weight

A weight multiplies a feature.

Example:

```text
2*x
```

Bias does not multiply a feature.

Example:

```text
+ 3
```

Weights control feature influence.

Bias controls baseline shift.

> Weight changes feature contribution. Bias changes the baseline.

---

## Bias And Threshold

Bias and threshold are closely related.

Rule with threshold:

```text
if dot(w, x) >= threshold:
  class 1
```

Equivalent form:

```text
if dot(w, x) - threshold >= 0:
  class 1
```

Here:

```text
b = -threshold
```

> A threshold can be absorbed into the bias.

---

## Geometric Meaning

The weight vector controls the direction of the decision boundary.

The bias shifts the boundary's position.

Example:

```text
score = w1*x1 + w2*x2 + b
```

Changing `b` moves the boundary without changing the weight direction.

> Bias moves the boundary; weights orient it.

---

## Why Bias Matters

Without bias, linear classifiers are forced to make decisions around the origin.

That can be too restrictive.

Bias gives the classifier more flexibility while keeping the model linear in its features.

> Bias makes linear decision rules more flexible.

---

## Final Summary

- Bias is a constant added to the weighted sum.
- It shifts the score.
- It lets the model move the decision boundary.
- Bias is different from a weight.
- Threshold can be represented as bias.
- Weights orient the boundary; bias moves it.
