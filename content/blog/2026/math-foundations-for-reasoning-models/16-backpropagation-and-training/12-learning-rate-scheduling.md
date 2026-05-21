---
title: "Learning Rate Scheduling"
excerpt: "Learning rate scheduling changes the learning rate during training to control update behavior over time."
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
topicOrder: 12
---

# Learning Rate Scheduling

## Definition

Learning rate scheduling means changing the learning rate during training.

Instead of using one fixed learning rate forever, the training process can adjust it over time.

Example:

```text
early training: larger learning rate
later training: smaller learning rate
```

> A learning rate schedule controls update size across training.

---

## Why Change The Learning Rate

Early in training, the model may be far from a good parameter setting.

Bigger steps can help it move faster.

Later in training, the model may need more careful updates.

Smaller steps can help it settle.

```text
large early steps -> faster movement
small later steps -> finer adjustment
```

> Scheduling helps match update size to the training stage.

---

## Fixed Learning Rate

A fixed learning rate stays the same.

```text
step 1: learning rate = 0.01
step 2: learning rate = 0.01
step 3: learning rate = 0.01
```

This is simple, but it may not be ideal for every part of training.

> A fixed learning rate treats every training stage the same.

---

## Decreasing Learning Rate

A common schedule decreases the learning rate over time.

Example:

```text
start: 0.01
later: 0.001
later: 0.0001
```

The updates become smaller as training continues.

This can help the model avoid bouncing around once it reaches a useful region.

> Decreasing the learning rate makes training more careful over time.

---

## Scheduling Is Not A Substitute For Gradients

The gradient still gives the direction of change.

The learning rate schedule controls the size of the response.

```text
gradient -> direction and sensitivity
learning rate -> update scale
schedule -> how that scale changes over time
```

> Scheduling changes update size, not the meaning of the gradient.

---

## Final Summary

- Learning rate scheduling changes the learning rate during training.
- Larger early learning rates can move parameters faster.
- Smaller later learning rates can support finer adjustment.
- A fixed learning rate uses the same scale throughout training.
- A decreasing schedule makes updates smaller over time.
- Scheduling controls update scale, not gradient direction.
