---
title: "Perceptron"
excerpt: "A perceptron is a simple linear classifier built from weights, bias, a weighted sum, and a threshold rule."
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
topicOrder: 12
---

# Perceptron

## Definition

A perceptron is a simple linear classifier.

It takes an input vector, computes a weighted score, and outputs a class.

Basic flow:

```text
input vector -> weighted sum + bias -> activation -> class
```

> Perceptron = linear decision rule for classification.

---

## Components

A perceptron has:

- input features
- weights
- bias
- weighted sum
- activation rule
- output class

Example:

```text
x = [x1, x2]
w = [w1, w2]
b = bias
```

Score:

```text
score = w1*x1 + w2*x2 + b
```

> A perceptron is built from the pieces introduced earlier.

---

## Weighted Score

The perceptron first computes:

```text
score = dot(w, x) + b
```

Example:

```text
w = [2, -1]
x = [3, 4]
b = 1
```

Score:

```text
2*3 + (-1)*4 + 1
= 6 - 4 + 1
= 3
```

> The score measures how the input aligns with the weights, shifted by bias.

---

## Activation Rule

The perceptron converts the score into a class.

Example:

```text
if score >= 0:
  output = 1
else:
  output = -1
```

If:

```text
score = 3
```

then:

```text
output = 1
```

> The activation turns a score into a prediction.

---

## Decision Boundary

The perceptron's decision boundary is:

```text
dot(w, x) + b = 0
```

In two dimensions, this is a line.

On one side:

```text
output = 1
```

On the other side:

```text
output = -1
```

> A perceptron separates space with one linear boundary.

---

## Perceptron As Computation

A perceptron is still computation.

It follows rules:

```text
read input
compute weighted sum
add bias
apply activation
return class
```

There is no understanding required for the rule to run.

> A perceptron is rule-based vector computation.

---

## What It Can Learn

The perceptron can learn weights and bias that separate linearly separable data.

Learning means adjusting:

```text
w
b
```

until the classifier predicts correctly on training examples.

> Perceptron learning adjusts the decision boundary.

---

## Final Summary

- A perceptron is a simple linear classifier.
- It takes an input vector.
- It computes `dot(w, x) + b`.
- It applies a threshold activation.
- It outputs a class.
- Its decision boundary is linear.
- It can learn linearly separable patterns.
