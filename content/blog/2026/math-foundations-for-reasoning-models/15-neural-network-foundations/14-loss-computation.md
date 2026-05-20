---
title: "Loss Computation"
excerpt: "Loss computation compares the network's output with the target and produces the error signal used for training."
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
topicOrder: 14
---

# Loss Computation

## Definition

Loss computation measures how wrong the network's output is.

It compares:

```text
network output
target output
```

and returns a loss value.

> Loss computation evaluates the result of the forward pass.

---

## Where It Happens

Loss computation happens after the forward pass.

```text
input -> network -> output -> loss
```

The network first produces an output.

Then the loss function measures how far that output is from what was expected.

> Loss is computed after the model produces an output.

---

## Simple Example

Suppose the target is `10`.

The network outputs `7`.

```text
target: 10
output: 7
error: 3
```

A loss function turns this mismatch into a training signal.

Different loss functions measure mismatch in different ways.

> Loss turns output mismatch into a number.

---

## Loss Connects Network Structure to Optimization

The network computes output using its parameters.

The loss depends on that output.

So the loss indirectly depends on the parameters.

```text
parameters -> output -> loss
```

Training changes parameters so future loss becomes smaller.

> Loss connects current network behavior to parameter updates.

---

## Loss Is Not the Output

The output is what the network predicts.

The loss is a measurement of the output.

```text
output:
model result

loss:
error measurement
```

They are related, but they are not the same thing.

> The model produces output; the loss function judges it.

---

## Final Summary

- Loss computation measures output error.
- It compares network output with the target.
- It happens after the forward pass.
- Loss depends on output, which depends on parameters.
- Loss gives optimization a value to reduce.
- Output and loss are related but different.
