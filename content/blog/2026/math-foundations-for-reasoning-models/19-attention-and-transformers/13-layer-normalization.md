---
title: "Layer Normalization"
excerpt: "Layer normalization stabilizes a representation by controlling the scale of its feature values."
date: 2026-05-01
tags:
  - Foundations
  - Transformers
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Attention and Transformers"
chapterSlug: attention-and-transformers
chapterOrder: 19
topicOrder: 13
---

# Layer Normalization

## Definition

Layer normalization is a method for stabilizing the values inside a representation.

Simple idea:

```text
representation values -> normalized values -> learned adjustment
```

It helps keep values in a manageable range as they move through layers.

> Layer normalization controls the scale of a representation.

---

## Why Normalization Is Needed

Deep models repeatedly transform representations.

After many transformations, values can become poorly scaled.

Examples:

```text
too large
too small
unstable across layers
```

This can make learning harder.

> Normalization helps keep training and representation updates stable.

---

## What Layer Normalization Operates On

Layer normalization usually works within one position's feature values.

Example:

```text
one position representation:
[feature 1, feature 2, feature 3, ...]
```

It normalizes those feature values together.

This is different from mixing information across sequence positions.

> Layer normalization stabilizes features inside a representation.

---

## Normalization Does Not Remove Learning

After normalization, the model can still learn how to scale and shift values.

Simple idea:

```text
normalize -> learned scale and shift
```

So normalization does not freeze the representation.

It makes the representation easier to work with.

> Normalization stabilizes the signal while still allowing learned adjustment.

---

## In A Transformer Block

Transformer blocks use layer normalization around attention and feedforward transformations.

This helps each block update representations without values drifting too wildly.

```text
attention or feedforward update
       +
normalization
       ->
more stable representation
```

> Layer normalization helps transformer blocks remain trainable when stacked deeply.

---

## Final Summary

- Layer normalization stabilizes representation values.
- It works on feature values inside a representation.
- It helps prevent unstable scaling across layers.
- It still allows learned adjustment.
- In transformers, it supports stable attention and feedforward updates.
