---
title: "Weighted Sum"
excerpt: "A weighted sum combines input values by scaling each one according to its learned importance."
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
topicOrder: 2
---

# Weighted Sum

## Definition

A weighted sum combines inputs by multiplying each input by a weight, then adding the results.

Basic form:

```text
weighted sum = w1*x1 + w2*x2 + w3*x3
```

Here:

```text
x values = inputs
w values = weights
```

> A weighted sum is a controlled combination of inputs.

---

## Why Weights Matter

Weights control how strongly each input affects the result.

Example:

```text
x1 = 10
x2 = 10

w1 = 2
w2 = 0.5
```

Then:

```text
w1*x1 = 20
w2*x2 = 5
```

Even though the inputs are equal, the first input affects the score more.

> A weight assigns influence to an input.

---

## Positive, Negative, and Zero Weights

Weights can affect the sum in different ways.

```text
positive weight -> input pushes score upward
negative weight -> input pushes score downward
zero weight -> input has no effect
```

Example:

```text
score = 2*x1 - 3*x2
```

`x1` increases the score.

`x2` decreases the score.

> The sign and size of a weight control direction and strength.

---

## Weighted Sum in a Neuron

A neuron usually begins by computing a weighted sum.

```text
inputs -> weighted sum -> activation -> output
```

The weighted sum creates a score from the inputs.

The activation function then transforms that score.

> The weighted sum is the neuron's first combination step.

---

## Learning Changes Weights

Weights are parameters.

During training, optimization changes them to reduce loss.

Example:

```text
old weights -> output -> high loss
updated weights -> output -> lower loss
```

The network learns by changing how strongly inputs are combined.

> Learning changes the influence of inputs by changing weights.

---

## Final Summary

- A weighted sum multiplies inputs by weights and adds the results.
- Weights control input influence.
- Positive weights increase the score.
- Negative weights decrease the score.
- Zero weights remove input influence.
- Neural networks learn by adjusting weights.
