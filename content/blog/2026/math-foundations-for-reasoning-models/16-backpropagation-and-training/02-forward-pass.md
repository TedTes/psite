---
title: "Forward Pass"
excerpt: "The forward pass computes the network output using the current parameters before loss and gradients are calculated."
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
topicOrder: 2
---

# Forward Pass

## Definition

The forward pass computes the network's output using the current parameters.

Basic path:

```text
input -> layers -> output
```

Each layer applies its weights, biases, and activation functions.

> The forward pass shows what the current network computes.

---

## Why It Comes First

Training needs an output before it can measure error.

The order is:

```text
forward pass -> output -> loss
```

Without an output, there is nothing to compare with the target.

> The network must first make a prediction before loss can be computed.

---

## Current Parameters Matter

The forward pass uses the current weights and biases.

Example:

```text
input: x
parameters: A
output: y1
```

After training updates the parameters:

```text
input: x
parameters: B
output: y2
```

The same input can produce a different output after parameter updates.

> The forward pass depends on the current parameter setting.

---

## Values Are Saved For Backward Pass

During training, the forward pass produces intermediate values.

Examples:

```text
weighted sums
activations
layer outputs
final output
```

These values are useful later when computing gradients.

The backward pass needs to know how the output was produced.

> Backward computation depends on the path created during the forward pass.

---

## Forward Pass Does Not Train By Itself

The forward pass only computes.

It does not change parameters.

```text
forward pass:
input -> output

training:
input -> output -> loss -> gradients -> parameter update
```

> The forward pass is evaluation, not adjustment.

---

## Final Summary

- The forward pass computes network output.
- It uses the current parameters.
- It comes before loss computation.
- It produces intermediate values used later.
- It does not update parameters by itself.
- Training adds loss, backward pass, and parameter updates after the forward pass.
