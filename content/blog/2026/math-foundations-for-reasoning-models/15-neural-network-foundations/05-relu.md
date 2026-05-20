---
title: "ReLU"
excerpt: "ReLU is an activation function that keeps positive scores and turns negative scores into zero."
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
topicOrder: 5
---

# ReLU

## Definition

ReLU stands for Rectified Linear Unit.

It is an activation function with a simple rule:

```text
if score > 0, output the score
if score <= 0, output 0
```

In compact form:

```text
ReLU(x) = max(0, x)
```

> ReLU keeps positive values and removes negative values.

---

## Simple Examples

```text
ReLU(5) = 5
ReLU(2) = 2
ReLU(0) = 0
ReLU(-3) = 0
```

Positive scores pass through.

Negative scores become zero.

> ReLU acts like a gate for positive scores.

---

## Why It Is Nonlinear

ReLU is linear on each side of zero, but the full function changes behavior at zero.

```text
negative side -> output 0
positive side -> output x
```

That change in rule makes it nonlinear as a whole.

This matters because nonlinearity helps networks represent more than one straight transformation.

> ReLU is simple, but it still adds nonlinear behavior.

---

## ReLU as Filtering

ReLU can be understood as filtering scores.

```text
positive signal -> keep it
negative signal -> suppress it
```

This does not mean the neuron understands the signal.

It only means the rule allows some values through and blocks others.

> ReLU filters values by sign.

---

## Final Summary

- ReLU means Rectified Linear Unit.
- It computes `max(0, x)`.
- Positive values pass through.
- Negative values become zero.
- ReLU is nonlinear because its rule changes at zero.
- ReLU is a simple way to add flexible behavior to a network.
