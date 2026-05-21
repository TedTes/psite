---
title: "Stochastic Gradient Descent"
excerpt: "Stochastic gradient descent updates parameters using noisy gradient estimates from individual or small groups of examples."
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
topicOrder: 10
---

# Stochastic Gradient Descent

## Definition

Stochastic gradient descent, often called SGD, is a training method that updates parameters using an estimate of the gradient.

Instead of using all training examples for every update, it uses one example or a small sample.

Basic idea:

```text
sample examples -> estimate gradient -> update parameters
```

> SGD uses partial data to make frequent parameter updates.

---

## What Stochastic Means

"Stochastic" means there is randomness in the process.

In SGD, the randomness usually comes from which training example or examples are used for an update.

```text
update 1 uses example A
update 2 uses example F
update 3 uses example B
```

The gradient is an estimate, not the exact gradient over the full dataset.

> Stochastic training uses noisy but useful gradient signals.

---

## Why Use SGD

Using the full dataset for every update can be expensive.

SGD makes updates more frequently.

```text
less data per update
more updates over time
```

This can make training faster in practice.

The tradeoff is that each update is noisier.

> SGD trades exact gradients for frequent, cheaper updates.

---

## Noise Can Be Useful

The noise in SGD is not always bad.

Noisy updates can help the optimizer avoid becoming too dependent on one smooth path.

Example:

```text
full gradient -> stable direction
stochastic gradient -> noisy direction
```

The noisy direction may still reduce loss over many updates.

> SGD can make progress even when individual updates are imperfect.

---

## SGD vs Full-Batch Gradient Descent

```text
full-batch gradient descent:
uses all examples for each update

stochastic gradient descent:
uses one or a few examples for each update
```

Full batch is more stable per update.

SGD is cheaper and noisier per update.

> The difference is how much data is used to estimate each gradient.

---

## Final Summary

- SGD means stochastic gradient descent.
- It updates parameters using a gradient estimate.
- The estimate comes from one example or a small sample.
- SGD is cheaper per update than full-batch gradient descent.
- Its updates are noisier.
- Over many updates, noisy gradients can still reduce loss.
