---
title: "Backward Pass"
excerpt: "The backward pass moves from loss back through the network to compute how parameters affected that loss."
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
topicOrder: 4
---

# Backward Pass

## Definition

The backward pass computes gradients by moving backward from the loss through the network.

Forward pass:

```text
input -> layers -> output -> loss
```

Backward pass:

```text
loss -> output layer -> hidden layers -> earlier parameters
```

> The backward pass traces how loss depends on earlier computations.

---

## Why It Goes Backward

The loss is computed at the end of the forward pass.

But the parameters that affected the loss are spread throughout the network.

So the backward pass starts from the loss and works back through the chain of computations.

```text
loss depends on output
output depends on hidden values
hidden values depend on weights and biases
```

> Backward means following dependency from loss back to parameters.

---

## What It Computes

The backward pass computes gradients.

For each trainable parameter, it asks:

```text
if this parameter changes slightly, how does loss change?
```

The answer is a gradient.

```text
parameter -> gradient
```

> The backward pass produces the information needed for parameter updates.

---

## Backward Pass Uses Forward Values

The backward pass often needs values produced during the forward pass.

Examples:

```text
layer outputs
activation values
intermediate scores
```

These values help compute how later changes connect to earlier parameters.

> The backward pass depends on the computation path created by the forward pass.

---

## Backward Pass vs Parameter Update

The backward pass computes gradients.

The optimizer uses those gradients to update parameters.

```text
backward pass:
compute gradients

update step:
change parameters
```

They are connected, but they are not the same operation.

> Backward pass calculates; the optimizer updates.

---

## Final Summary

- The backward pass starts from loss and moves backward through the network.
- It follows dependency from output back to parameters.
- It computes gradients for trainable parameters.
- It uses values from the forward pass.
- The backward pass does not update parameters by itself.
- Parameter updates happen after gradients are computed.
