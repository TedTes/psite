---
title: "Layer"
excerpt: "A layer is a group of neurons that transform a set of input values into a new set of output values."
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
topicOrder: 9
---

# Layer

## Definition

A layer is a group of neurons that operate at the same stage of a network.

It takes input values and produces output values.

Basic pattern:

```text
input values -> layer -> output values
```

> A layer transforms one representation into another.

---

## Why Multiple Neurons

A single neuron produces one output.

A layer can produce multiple outputs.

Example:

```text
input: [x1, x2, x3]
layer output: [a1, a2, a3, a4]
```

Each output may capture a different transformation of the input.

> A layer can compute several signals in parallel.

---

## Layer Parameters

Each neuron in a layer has its own weights and bias.

Example:

```text
neuron 1 -> weights and bias
neuron 2 -> weights and bias
neuron 3 -> weights and bias
```

The whole layer therefore has many parameters.

Training adjusts these parameters to reduce loss.

> A layer is a structured collection of trainable parameters.

---

## Layer Output Becomes Next Input

The output of one layer can become the input to another layer.

```text
layer 1 output -> layer 2 input
layer 2 output -> layer 3 input
```

This creates a sequence of transformations.

> Layers compose transformations step by step.

---

## Final Summary

- A layer is a group of neurons at one stage of a network.
- A layer maps input values to output values.
- Multiple neurons let the layer compute multiple signals.
- Each neuron has parameters.
- The output of one layer can become the input to the next.
- A neural network is built by composing layers.
