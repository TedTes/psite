---
title: "Batch Update"
excerpt: "A batch update computes gradients from a group of examples before changing the parameters."
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
topicOrder: 9
---

# Batch Update

## Definition

A batch update uses a group of training examples to compute one parameter update.

Basic pattern:

```text
many examples -> combined loss -> gradients -> one update
```

The group of examples is called a batch.

> A batch update changes parameters using information from multiple examples.

---

## Why Use More Than One Example

One example may give a narrow signal.

A batch gives a broader signal.

Example:

```text
example 1 -> gradient direction A
example 2 -> gradient direction B
example 3 -> gradient direction C
```

The batch combines these into one update direction.

> A batch update averages information across examples.

---

## Batch Loss

The loss for a batch is usually combined from the losses of its examples.

Example:

```text
example 1 loss = 0.8
example 2 loss = 0.4
example 3 loss = 1.2
```

The batch loss may be an average.

```text
batch loss = average example loss
```

> Batch loss summarizes model error over a group of examples.

---

## Batch Update vs Single Example Update

A single example update uses one example at a time.

A batch update uses multiple examples before updating.

```text
single example:
one example -> one update

batch:
many examples -> one update
```

Batch updates can be more stable because they use more information at once.

> Batch updates reduce dependence on one example's signal.

---

## Full Batch

A full batch uses all training examples for one update.

```text
all training examples -> one gradient -> one update
```

This can produce a stable gradient, but it can be expensive for large datasets.

> Full-batch updates use all available training examples at once.

---

## Final Summary

- A batch update uses a group of examples.
- It combines losses and gradients across that group.
- Batch updates are often more stable than single-example updates.
- A full batch uses all training examples.
- Larger batches can be more expensive.
- Batch size affects how training moves through parameter space.
