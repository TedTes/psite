---
title: "Learning Rate"
excerpt: "The learning rate controls how strongly parameters move during each optimization update."
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
topicOrder: 7
---

# Learning Rate

## Definition

The learning rate controls how large an optimization update should be.

In gradient descent, the gradient gives a direction and strength.

The learning rate scales that movement.

```text
update size = learning rate * gradient size
```

> The learning rate controls how boldly parameters move.

---

## Why It Matters

If the learning rate is too small, learning can be very slow.

```text
loss decreases
but only a tiny amount each step
```

If the learning rate is too large, updates can overshoot good regions.

```text
jump past low loss
loss may increase or bounce around
```

> The learning rate controls the tradeoff between slow progress and unstable movement.

---

## Small Learning Rate

A small learning rate makes careful updates.

Example:

```text
current parameter: 10
small update: 10 -> 9.99
```

This may be stable.

But many updates may be needed.

> Small learning rates can be stable but slow.

---

## Large Learning Rate

A large learning rate makes aggressive updates.

Example:

```text
current parameter: 10
large update: 10 -> 3
```

This can move quickly.

But if the step is too large, it may skip over better parameter values.

> Large learning rates can be fast but unstable.

---

## Learning Rate vs Gradient

The gradient comes from the loss landscape.

The learning rate is a choice made by the optimization process.

```text
gradient: local direction of change
learning rate: how much to move using that direction
```

The same gradient can produce different updates depending on the learning rate.

> The gradient says where loss changes. The learning rate controls the size of the response.

---

## Final Summary

- The learning rate scales parameter updates.
- Small learning rates can be stable but slow.
- Large learning rates can move quickly but overshoot.
- The gradient comes from the landscape.
- The learning rate controls how strongly the optimizer uses the gradient.
- Good optimization depends on an appropriate learning rate.
