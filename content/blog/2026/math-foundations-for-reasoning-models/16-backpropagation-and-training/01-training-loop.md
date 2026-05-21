---
title: "Training Loop"
excerpt: "The training loop repeatedly computes output, measures loss, computes gradients, and updates parameters."
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
topicOrder: 1
---

# Training Loop

## Definition

A training loop is the repeated process used to improve a neural network.

Basic pattern:

```text
1. run the network
2. measure loss
3. compute gradients
4. update parameters
5. repeat
```

> The training loop is how a network turns error into parameter change.

---

## Why A Loop Is Needed

One update is usually not enough.

The network improves through repeated small changes.

Example:

```text
start with current parameters
compute loss
update parameters
compute loss again
update again
```

Each loop uses the current state of the model.

> Training is iterative, not one single correction.

---

## The Main Parts

The training loop has four core stages.

```text
forward pass:
compute output

loss computation:
measure error

backward pass:
compute gradients

parameter update:
change weights and biases
```

These stages connect neural network structure to optimization.

> Forward computes behavior; backward computes how to improve it.

---

## Parameters Change Across Loops

The input data may be the same, but parameters change over time.

Example:

```text
loop 1: parameters A -> loss 5.0
loop 2: parameters B -> loss 3.2
loop 3: parameters C -> loss 2.4
```

The model is not just producing outputs.

It is being modified by the training process.

> The loop changes the model itself.

---

## Training Loop vs Forward Pass

A forward pass only computes output.

A training loop includes forward pass plus loss, gradients, and updates.

```text
forward pass:
input -> output

training loop:
input -> output -> loss -> gradients -> updated parameters
```

> A forward pass evaluates the current model; a training loop improves it.

---

## Final Summary

- A training loop repeatedly improves a neural network.
- It includes forward pass, loss computation, backward pass, and parameter update.
- Training is iterative.
- Parameters change across loop iterations.
- The forward pass computes output.
- The full training loop uses loss to update the model.
