---
title: "Gradient of Weights"
excerpt: "The gradient of a weight measures how loss would change if that weight changed slightly."
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
topicOrder: 7
---

# Gradient Of Weights

## Definition

The gradient of a weight measures how the loss changes when that weight changes slightly.

Basic question:

```text
if this weight increases a little, does loss go up or down?
```

The answer guides the update.

> A weight gradient is loss sensitivity with respect to that weight.

---

## Positive Gradient

A positive gradient means increasing the weight would increase loss.

If the goal is to reduce loss, the update should move the weight downward.

```text
positive gradient -> decrease weight
```

> Positive gradient means move the weight in the negative direction to reduce loss.

---

## Negative Gradient

A negative gradient means increasing the weight would decrease loss.

If the goal is to reduce loss, the update should move the weight upward.

```text
negative gradient -> increase weight
```

> Negative gradient means move the weight in the positive direction to reduce loss.

---

## Gradient Size

The size of the gradient matters.

```text
large gradient -> loss is sensitive to this weight
small gradient -> loss changes little with this weight
```

The update size also depends on the learning rate.

```text
update size = learning rate * gradient size
```

> Gradient size affects how strongly the optimizer responds.

---

## Weights Are Not Isolated

A weight's effect depends on the surrounding network.

The same weight can matter differently depending on:

```text
input value
activation function
later layers
loss function
```

Backpropagation computes the gradient in that full context.

> A weight gradient measures influence inside the whole computation chain.

---

## Final Summary

- A weight gradient measures how loss changes with respect to a weight.
- Positive gradient means increasing the weight increases loss.
- Negative gradient means increasing the weight decreases loss.
- Gradient size measures sensitivity.
- The learning rate scales the update.
- Backpropagation computes weight gradients in network context.
