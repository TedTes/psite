---
title: "Activation Function"
excerpt: "An activation function transforms a neuron's score into the value passed forward through the network."
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
topicOrder: 4
---

# Activation Function

## Definition

An activation function transforms a neuron's score into its output.

Basic pattern:

```text
weighted sum + bias -> activation function -> neuron output
```

Example:

```text
score = 3
activation(score) = output
```

> An activation function decides how the score is passed forward.

---

## Why It Matters

Without activation functions, stacked layers would mostly behave like repeated linear transformations.

That limits what the network can represent.

Activation functions introduce nonlinear behavior.

This lets networks build more flexible transformations.

> Activation functions are what let networks go beyond simple weighted sums.

---

## Activation as a Rule

An activation function is still just a rule.

Examples:

```text
if score is negative, output 0
if score is large, compress it toward 1
if score is small, keep it near 0
```

Different activation functions use different rules.

> Activation functions are rule-based transformations of scores.

---

## Common Activation Functions

This chapter introduces three common examples.

```text
ReLU
sigmoid
tanh
```

Each transforms scores differently.

They are useful in different contexts, but the basic role is the same:

```text
score -> transformed output
```

> Activation functions shape how information flows through a network.

---

## Activation vs Weight

Weights are learned parameters.

The activation function is usually a fixed rule chosen by the model designer.

```text
weights:
adjusted during training

activation:
applied as part of the neuron computation
```

The activation rule affects what the learned parameters can express.

> Weights are adjusted; activations shape the transformation.

---

## Final Summary

- An activation function transforms a neuron's score into output.
- It comes after the weighted sum and bias.
- Activation functions introduce nonlinear behavior.
- Common examples include ReLU, sigmoid, and tanh.
- Weights are learned parameters; activations are usually fixed rules.
- Activation functions help networks represent more flexible patterns.
