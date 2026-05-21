---
title: "Bridge to Deep Representations"
excerpt: "Backpropagation explains how layered networks can be trained, setting up the question of what deeper layers learn."
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
topicOrder: 14
---

# Bridge To Deep Representations

## Where We Are

This chapter explained how neural networks are trained.

The loop was:

```text
forward pass -> loss computation -> backward pass -> parameter update
```

Backpropagation made the backward part precise.

```text
loss -> gradients -> parameter updates
```

> Training changes a network by using loss to update parameters.

---

## What Backpropagation Added

The previous chapter showed that a neural network is a composition of functions.

This chapter showed how to train that composition.

```text
composed functions -> forward output
loss -> backward gradients
gradients -> updates
```

Backpropagation tells each parameter how it contributed to loss.

> Backpropagation makes layered function composition trainable.

---

## Why Depth Comes Next

Once we can train layers, the next question is:

```text
what happens when we stack many layers?
```

More layers create more stages of representation.

```text
input
-> early representation
-> later representation
-> output
```

This leads to deep representations.

> Depth means repeated transformation through many layers.

---

## Representation Changes Across Layers

A layer does not just pass data forward unchanged.

It transforms the representation.

In a deeper network, later layers receive values already transformed by earlier layers.

```text
raw input -> transformed signal -> more abstract signal -> output
```

The next chapter focuses on how depth and representation learning work.

> Deep networks build representations through repeated learned transformations.

---

## Bridge Question

The next chapter begins with:

```text
what does depth add to a neural network?
```

That leads to:

```text
depth
width
multi-layer networks
representation learning
feature hierarchy
vanishing gradients
exploding gradients
skip connections
```

> After training mechanics, the next step is understanding learned representations.

---

## Final Summary

- Training uses forward pass, loss, backward pass, and updates.
- Backpropagation computes gradients through composed functions.
- Gradients allow parameters in every layer to be updated.
- Once many layers can be trained, depth becomes important.
- Deep networks transform representations across layers.
- The next chapter focuses on deep representations.
