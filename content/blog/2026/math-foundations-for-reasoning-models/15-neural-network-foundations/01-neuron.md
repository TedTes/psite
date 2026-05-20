---
title: "Neuron"
excerpt: "A neuron is a small computation unit that combines inputs, applies parameters, and produces one output."
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
topicOrder: 1
---

# Neuron

## Definition

A neuron is a small computation unit inside a neural network.

It takes input values, combines them with parameters, and produces an output.

Basic pattern:

```text
inputs -> weighted combination -> activation -> output
```

> A neuron is a parameterized input-output computation.

---

## Why It Exists

A single neuron gives the network a reusable unit of transformation.

It can ask:

```text
which inputs matter?
how strongly should they matter?
should the result be passed forward?
```

The neuron does this using weights, bias, and an activation function.

> A neuron turns several input values into one transformed value.

---

## Simple Example

Suppose a neuron receives two inputs.

```text
input 1 = 3
input 2 = 5
```

It may assign different importance to each input.

```text
input 1 matters strongly
input 2 matters weakly
```

The neuron combines them into a single score.

```text
combined score -> output
```

> A neuron compresses multiple signals into one computed signal.

---

## Neuron vs Biological Neuron

The word "neuron" is inspired by biology, but in this context it is a mathematical unit.

It is not a full biological model.

Here, a neuron means:

```text
an input-output function with adjustable parameters
```

> In neural networks, a neuron is a computation, not a biological explanation.

---

## What Is Adjustable

A neuron has parameters.

Usually these include:

```text
weights
bias
```

The inputs change from example to example.

The parameters are adjusted during training.

> Training changes the neuron by changing its parameters.

---

## Final Summary

- A neuron is a small computation unit in a neural network.
- It receives inputs and produces one output.
- It uses weights, bias, and an activation function.
- It is a mathematical unit, not a full biological model.
- Inputs are processed; parameters are adjusted.
- Networks are built by connecting many such units.
