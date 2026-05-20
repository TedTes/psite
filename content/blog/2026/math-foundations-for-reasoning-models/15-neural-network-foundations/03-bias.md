---
title: "Bias"
excerpt: "Bias is an adjustable offset that lets a neuron shift its output independent of the input values."
date: 2026-05-01
tags:
  - Foundations
  - Neural Networks
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Neural Network Foundations"
chapterSlug: neural-network-foundations
chapterOrder: 15
topicOrder: 3
---

# Bias

## Definition

Bias is an adjustable value added to a weighted sum.

Basic form:

```text
score = w1*x1 + w2*x2 + b
```

Here:

```text
b = bias
```

> Bias is a learned offset.

---

## Why Bias Is Needed

Weights control how inputs affect the score.

Bias shifts the score even when the inputs stay the same.

Example:

```text
without bias:
score = 2*x

with bias:
score = 2*x + 5
```

The bias moves the output up or down.

> Bias lets the neuron adjust its baseline.

---

## Bias When Input Is Zero

Without bias:

```text
x = 0
score = w*x
score = 0
```

With bias:

```text
x = 0
score = w*x + b
score = b
```

The neuron can produce a nonzero score even when the input contribution is zero.

> Bias gives the neuron a starting offset.

---

## Bias as a Parameter

Bias is learned during training.

It is not an input.

It is part of the neuron's adjustable rule.

```text
inputs change per example
bias changes through training
```

Optimization can increase or decrease the bias to reduce loss.

> Bias is a trainable parameter, like a weight.

---

## Weights vs Bias

Weights scale input values.

Bias shifts the result.

```text
weight:
changes how much an input matters

bias:
changes the baseline score
```

Both help shape the neuron's behavior.

> Weights control influence; bias controls offset.

---

## Final Summary

- Bias is an added offset in a neuron.
- It shifts the weighted sum.
- Bias lets the neuron produce nonzero scores even when input contribution is zero.
- Bias is a trainable parameter.
- Weights scale inputs; bias shifts the result.
- Bias makes the neuron's transformation more flexible.
