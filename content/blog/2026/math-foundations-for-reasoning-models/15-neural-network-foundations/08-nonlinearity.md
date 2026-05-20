---
title: "Nonlinearity"
excerpt: "Nonlinearity lets a network build transformations that are not just one straight weighted combination."
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
topicOrder: 8
---

# Nonlinearity

## Definition

Nonlinearity means the output does not change as one simple straight-line transformation of the input.

In neural networks, nonlinearity usually comes from activation functions.

Example:

```text
weighted sum -> activation function -> nonlinear output
```

> Nonlinearity lets the network bend the transformation.

---

## Why Linear Alone Is Limited

A linear transformation has a simple structure.

Example:

```text
output = w*x + b
```

Stacking linear transformations without nonlinear activations does not create much new expressive power.

The stack can often be reduced to another linear transformation.

> Linear layers without nonlinear steps remain limited.

---

## Nonlinearity Adds Flexible Boundaries

Earlier, the perceptron showed that a single linear boundary cannot solve every pattern.

Nonlinearity helps by allowing transformations that change the representation before later decisions are made.

Example:

```text
input space -> nonlinear transformation -> easier representation
```

The network can reshape the problem before producing an output.

> Nonlinearity helps create representations that linear rules alone cannot create.

---

## Activation Functions as Nonlinear Rules

Common activation functions add nonlinear behavior.

```text
ReLU:
negative values become 0, positive values pass through

sigmoid:
values are squashed between 0 and 1

tanh:
values are squashed between -1 and 1
```

Each changes the input-output relationship in a non-straight way.

> Activation functions are the usual source of neural network nonlinearity.

---

## Final Summary

- Nonlinearity means the transformation is not just one straight-line rule.
- Linear transformations alone are limited.
- Stacking linear transformations without nonlinear steps does not add much expressive power.
- Activation functions introduce nonlinear behavior.
- Nonlinearity helps networks reshape representations.
- This is one reason layered networks can model complex patterns.
