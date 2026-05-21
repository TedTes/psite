---
title: "Weight Update"
excerpt: "A weight update changes parameters using gradients so future loss can become smaller."
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
topicOrder: 8
---

# Weight Update

## Definition

A weight update changes a weight using its gradient.

The basic gradient descent pattern is:

```text
new weight = old weight - learning rate * gradient
```

The same idea applies to biases.

> A weight update uses gradient information to change the model.

---

## Why The Minus Sign

The gradient points in the direction where loss increases.

To reduce loss, the update moves in the opposite direction.

```text
gradient direction -> loss goes up
negative gradient direction -> loss goes down locally
```

That is why the update subtracts the gradient term.

> Updating against the gradient is the basic move of gradient descent.

---

## What The Learning Rate Does

The learning rate controls how large the update is.

Example:

```text
gradient = 10
learning rate = 0.01
update size = 0.1
```

A larger learning rate makes bigger changes.

A smaller learning rate makes smaller changes.

> The learning rate scales the gradient before the parameter changes.

---

## Update Example

Suppose:

```text
old weight = 2.0
gradient = 0.5
learning rate = 0.1
```

Then:

```text
new weight = 2.0 - 0.1 * 0.5
new weight = 1.95
```

The weight moved slightly downward.

> The update is a small step in parameter space.

---

## Update Does Not Guarantee Immediate Improvement

A weight update is based on local gradient information.

It is intended to reduce loss, but one update can still fail to improve loss if:

```text
the learning rate is too large
the gradient estimate is noisy
the loss landscape is complicated
```

Training relies on many updates, not one perfect move.

> A weight update is a local adjustment, not a guarantee of perfect progress.

---

## Final Summary

- A weight update changes a parameter using its gradient.
- The basic rule subtracts the learning-rate-scaled gradient.
- The minus sign moves against increasing loss.
- The learning rate controls update size.
- Biases can be updated using the same idea.
- Updates are local steps, not perfect guarantees.
