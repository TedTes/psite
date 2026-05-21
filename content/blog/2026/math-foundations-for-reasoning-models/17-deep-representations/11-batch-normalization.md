---
title: "Batch Normalization"
excerpt: "Batch normalization stabilizes layer values during training by normalizing activations within a batch."
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
topicOrder: 11
---

# Batch Normalization

## Definition

Batch normalization is a technique that normalizes layer values during training.

It uses statistics from a batch of examples.

Basic idea:

```text
layer values -> normalize using batch statistics -> adjusted values
```

> Batch normalization helps keep internal values in a more stable range.

---

## Why Stability Matters

As training changes parameters, the values inside the network can shift.

Example:

```text
earlier layer changes
later layer receives different value distribution
later layer must adapt
```

If internal values shift too much, training can become harder.

Batch normalization helps reduce this instability.

> Stable internal values make optimization easier.

---

## What It Normalizes

Batch normalization usually normalizes activations.

It uses batch statistics such as:

```text
average value
spread of values
```

Then it adjusts the activations into a more controlled range.

> Batch normalization controls the scale and position of activations.

---

## It Still Has Learnable Parts

Batch normalization does not simply force every value to stay fixed.

It can include learnable parameters that let the network adjust the normalized values.

This gives stability while preserving flexibility.

```text
normalize -> learn adjusted scale and shift
```

> Batch normalization stabilizes values without removing all learnable flexibility.

---

## Final Summary

- Batch normalization normalizes layer values during training.
- It uses statistics from a batch.
- It helps keep internal activations stable.
- Stable activations can make optimization easier.
- Batch normalization can include learnable scale and shift.
- It is one tool for training deeper networks more reliably.
