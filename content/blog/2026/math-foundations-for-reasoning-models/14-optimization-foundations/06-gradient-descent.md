---
title: "Gradient Descent"
excerpt: "Gradient descent reduces loss by repeatedly moving parameters in the direction that locally lowers the objective."
date: 2026-05-01
tags:
  - Foundations
  - Optimization
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Optimization Foundations"
chapterSlug: optimization-foundations
chapterOrder: 14
topicOrder: 6
---

# Gradient Descent

## Definition

Gradient descent is an optimization method that reduces loss by using gradients.

The gradient tells how the loss changes when parameters change.

Gradient descent moves parameters in the opposite direction of increasing loss.

```text
gradient points uphill
gradient descent moves downhill
```

> Gradient descent is repeated movement toward lower loss.

---

## Why Opposite the Gradient

The gradient points in the direction where the objective increases fastest.

If the objective is loss, increasing loss is bad.

So gradient descent moves the other way.

```text
gradient direction -> loss increases
opposite direction -> loss decreases locally
```

> To reduce loss, move against the direction of increase.

---

## Basic Update Pattern

The repeated pattern is:

```text
1. compute current loss
2. compute gradient of loss
3. move parameters slightly against the gradient
4. repeat
```

In simplified form:

```text
new parameter = old parameter - step
```

The step depends on the gradient and the learning rate.

> Gradient descent improves parameters through repeated small updates.

---

## Simple Example

Suppose the current parameter gives high loss.

```text
w = 5
loss = high
gradient says loss increases if w increases
```

Then gradient descent reduces `w`.

```text
w moves from 5 toward 4.9
```

If this lowers loss, the optimizer keeps moving in that direction.

> Each step uses local information to choose the next parameter setting.

---

## Local, Not All-Knowing

Gradient descent does not know the whole loss landscape.

It only knows local change near the current parameter setting.

This means it can make progress without checking every possible parameter setting.

But it also means it can be affected by the local shape of the landscape.

> Gradient descent is powerful because it uses local change instead of exhaustive search.

---

## Final Summary

- Gradient descent is an optimization method for reducing loss.
- The gradient points toward increasing objective value.
- To minimize loss, gradient descent moves against the gradient.
- It updates parameters repeatedly.
- Each step uses local information.
- The learning rate controls how strongly each update moves.
