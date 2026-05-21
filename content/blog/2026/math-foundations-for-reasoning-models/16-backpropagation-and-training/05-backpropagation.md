---
title: "Backpropagation"
excerpt: "Backpropagation is the method for efficiently computing gradients through a composed neural network."
date: 2026-05-01
tags:
  - Foundations
  - Training
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Backpropagation and Training"
chapterSlug: backpropagation-and-training
chapterOrder: 16
topicOrder: 5
---

# Backpropagation

## Definition

Backpropagation is the method used to compute gradients through a neural network.

It works backward from the loss through the composed functions of the network.

```text
loss -> output layer -> hidden layers -> parameters
```

> Backpropagation computes how each parameter affected the loss.

---

## Why It Is Needed

A neural network can contain many parameters.

Changing one early weight can affect later activations, the final output, and the loss.

The question is:

```text
how does a small change in this parameter change the final loss?
```

Backpropagation answers this efficiently.

> Backpropagation connects final error to internal parameters.

---

## Backpropagation Uses The Chain Rule

A network is a composition of functions.

```text
input -> function 1 -> function 2 -> function 3 -> loss
```

The chain rule tells us how changes pass through composed functions.

Backpropagation applies that rule layer by layer.

> Backpropagation is the chain rule organized for neural networks.

---

## What Backpropagation Produces

Backpropagation produces gradients.

Examples:

```text
gradient for weight 1
gradient for weight 2
gradient for bias 1
gradient for bias 2
```

These gradients do not update parameters by themselves.

They tell the optimizer how parameter changes would affect loss.

> Backpropagation produces the update directions, not the update itself.

---

## Backpropagation Is Not Learning Alone

Backpropagation is one part of training.

Training needs:

```text
forward pass
loss computation
backpropagation
parameter update
```

Backpropagation computes gradients.

The optimizer uses those gradients to change parameters.

> Backpropagation enables learning, but the full training loop performs learning.

---

## Final Summary

- Backpropagation computes gradients in a neural network.
- It starts from loss and moves backward.
- It uses the chain rule.
- It connects final error to internal parameters.
- It produces gradients for weights and biases.
- It is part of training, not the entire training process.
