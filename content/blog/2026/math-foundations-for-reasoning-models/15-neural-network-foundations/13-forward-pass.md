---
title: "Forward Pass"
excerpt: "A forward pass is the step-by-step movement of input through the network to produce an output."
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
topicOrder: 13
---

# Forward Pass

## Definition

A forward pass is the process of sending input through a network to produce output.

Basic pattern:

```text
input -> layer 1 -> layer 2 -> output
```

Each layer transforms the values and passes them forward.

> A forward pass computes the network's output.

---

## Why It Is Called Forward

It is called forward because values move from the input side toward the output side.

```text
input layer
-> hidden layer
-> output layer
```

The computation follows the direction of the network structure.

> Forward means input-to-output computation.

---

## What Happens During a Forward Pass

At each layer:

```text
1. take incoming values
2. compute weighted sums
3. add biases
4. apply activation functions
5. pass outputs to the next layer
```

This repeats until the final output layer is reached.

> A forward pass is repeated layer transformation.

---

## Forward Pass Uses Current Parameters

A forward pass uses the parameters as they currently are.

Example:

```text
current weights and biases -> output
```

If parameters change, the same input can produce a different output.

```text
old parameters -> output A
new parameters -> output B
```

> The forward pass shows what the current network computes.

---

## Forward Pass Before Loss

Loss can be computed only after the network produces an output.

```text
forward pass -> output -> loss computation
```

So the forward pass comes before loss measurement.

> First compute the output; then measure how wrong it is.

---

## Final Summary

- A forward pass sends input through the network.
- Values move from input layer to output layer.
- Each layer transforms the values.
- The forward pass uses the current parameters.
- Changing parameters can change the output.
- Loss is computed after the forward pass.
