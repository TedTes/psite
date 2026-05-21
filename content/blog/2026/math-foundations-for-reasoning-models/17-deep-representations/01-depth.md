---
title: "Depth"
excerpt: "Depth is the number of transformation stages a neural network applies between input and output."
date: 2026-05-01
tags:
  - Foundations
  - Representation
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Deep Representations"
chapterSlug: deep-representations
chapterOrder: 17
topicOrder: 1
---

# Depth

## Definition

Depth is the number of layers or transformation stages in a neural network.

Basic idea:

```text
shallow network:
input -> output

deeper network:
input -> layer -> layer -> layer -> output
```

> Depth means repeated transformation before the final output.

---

## Why Depth Matters

Each layer transforms the representation it receives.

With more layers, the network can build a sequence of representations.

```text
input
-> first representation
-> second representation
-> third representation
-> output
```

The later output is not produced directly from raw input.

It is produced from values that have already been transformed.

> Depth lets a network build representations step by step.

---

## Depth vs One Large Step

A shallow model tries to map input to output in fewer stages.

A deep model breaks the transformation into multiple stages.

Example:

```text
shallow:
input -> final decision

deep:
input -> intermediate signal -> higher signal -> final decision
```

This can make complex patterns easier to represent.

> Depth allows complex transformations to be decomposed into smaller transformations.

---

## Depth Is Not Automatically Better

More depth gives more representational capacity, but it also makes training harder.

Problems can appear, such as:

```text
vanishing gradients
exploding gradients
unstable activations
harder optimization
```

Depth must be trainable to be useful.

> Depth adds power only when the training process can use it.

---

## Final Summary

- Depth is the number of transformation stages in a network.
- Deeper networks apply more transformations before output.
- Each layer changes the representation.
- Depth can help represent complex patterns.
- Depth can also make training harder.
- Deep learning depends on making depth useful and trainable.
