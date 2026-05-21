---
title: "Loss Computation"
excerpt: "Loss computation measures how wrong the forward pass output is and creates the scalar objective for training."
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
topicOrder: 3
---

# Loss Computation

## Definition

Loss computation measures how wrong the network's output is.

It compares:

```text
network output
target output
```

and produces a loss value.

> Loss computation turns prediction error into the objective used for training.

---

## Why Loss Is Usually One Number

Training needs a single objective to reduce.

Even if the network outputs many values, the loss function usually combines the mismatch into one number.

Example:

```text
output values -> compare with target values -> one loss value
```

This one value becomes the starting point for gradient computation.

> Loss compresses output mismatch into a training signal.

---

## Loss Depends On Parameters

The loss depends on the output.

The output depends on parameters.

So loss indirectly depends on parameters.

```text
parameters -> forward pass -> output -> loss
```

This dependency is what makes training possible.

> If parameters affect loss, changing parameters can reduce loss.

---

## Loss Starts The Backward Question

After computing loss, the next question is:

```text
which parameters caused this loss, and by how much?
```

This is not about blame in a human sense.

It is about mathematical sensitivity.

```text
if this weight changes slightly, how does loss change?
```

> Loss computation gives the backward pass something to differentiate.

---

## Loss Value vs Gradient

The loss value says how wrong the output was.

The gradient says how the loss would change if a parameter changed.

```text
loss:
current error amount

gradient:
direction and rate of change for parameters
```

Both are needed for training.

> Loss measures the problem; gradients guide the correction.

---

## Final Summary

- Loss computation compares output with target.
- It produces the objective value used for training.
- Loss usually becomes one number.
- Loss depends on output, which depends on parameters.
- The backward pass starts from the loss.
- Loss measures error; gradients guide parameter updates.
