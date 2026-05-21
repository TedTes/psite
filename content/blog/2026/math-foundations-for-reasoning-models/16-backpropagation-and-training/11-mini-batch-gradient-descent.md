---
title: "Mini-Batch Gradient Descent"
excerpt: "Mini-batch gradient descent updates parameters using small groups of examples, balancing stability and efficiency."
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
topicOrder: 11
---

# Mini-Batch Gradient Descent

## Definition

Mini-batch gradient descent updates parameters using a small group of training examples.

It sits between single-example SGD and full-batch gradient descent.

```text
single example -> very small sample
mini-batch -> small group
full batch -> all examples
```

> Mini-batch training uses part of the dataset for each update.

---

## Why Mini-Batches Are Common

Mini-batches balance two needs.

```text
stable enough gradient signal
efficient enough computation
```

A mini-batch uses more information than one example, but less than the full dataset.

This makes it practical for large training sets.

> Mini-batches are a practical compromise.

---

## Mini-Batch Loss

For each mini-batch, the model computes loss across the examples in that group.

Example:

```text
mini-batch:
example 1
example 2
example 3
example 4
```

The losses are combined, often by averaging.

```text
mini-batch loss = average loss over the mini-batch
```

The gradient is computed from that mini-batch loss.

> The mini-batch loss gives one update signal for a small group.

---

## Mini-Batch vs SGD

Sometimes people use "SGD" broadly to include mini-batches.

More precisely:

```text
pure SGD:
one example per update

mini-batch gradient descent:
multiple examples per update
```

Both use partial data instead of the full dataset.

> Mini-batch training is a common practical form of stochastic training.

---

## Batch Size

Batch size is the number of examples in a mini-batch.

Example:

```text
batch size = 32
```

That means each update uses 32 examples.

Changing batch size changes the gradient signal and the cost of each update.

> Batch size controls how many examples contribute to one update.

---

## Final Summary

- Mini-batch gradient descent uses small groups of examples.
- It balances gradient stability and computational cost.
- Mini-batch loss is usually averaged across examples.
- Mini-batch gradients are based on partial data.
- Batch size controls examples per update.
- Mini-batch training is common in neural network training.
