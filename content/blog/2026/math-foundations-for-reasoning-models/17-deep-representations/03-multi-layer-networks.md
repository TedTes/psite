---
title: "Multi-Layer Networks"
excerpt: "A multi-layer network composes several learned transformations so each layer can build on earlier representations."
date: 2026-05-01
tags:
  - Foundations
  - Representation
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Deep Representations"
chapterSlug: deep-representations
chapterOrder: 17
topicOrder: 3
---

# Multi-Layer Networks

## Definition

A multi-layer network is a neural network with more than one transformation layer.

Basic form:

```text
input -> layer 1 -> layer 2 -> layer 3 -> output
```

Each layer receives values from the previous layer and produces new values.

> A multi-layer network composes learned transformations.

---

## Layer Composition

Each layer can be understood as a function.

```text
layer 1 = f1
layer 2 = f2
layer 3 = f3
```

The full network is a composition:

```text
output = f3(f2(f1(input)))
```

This means later layers operate on transformed representations, not directly on the original input.

> Multi-layer networks build outputs through chained functions.

---

## Why Multiple Layers Help

Multiple layers let the network build intermediate structure.

Example:

```text
input values
-> simple signals
-> combined signals
-> task-specific output
```

Each layer can prepare a representation for the next layer.

> Multiple layers let the model solve a problem in stages.

---

## Parameters Across Layers

Each layer has its own parameters.

```text
layer 1 weights and biases
layer 2 weights and biases
layer 3 weights and biases
```

Training adjusts parameters across all layers.

Backpropagation computes how each layer's parameters affected the final loss.

> Multi-layer training requires gradients across the whole chain.

---

## Final Summary

- A multi-layer network has several transformation layers.
- Each layer is a function.
- The network composes these functions.
- Later layers operate on earlier layer outputs.
- Multiple layers allow staged representation building.
- Training adjusts parameters across all layers.
