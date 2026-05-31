---
title: "Residual Connection"
excerpt: "A residual connection carries the input around a transformation so the model can preserve and modify information."
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
topicOrder: 12
---

# Residual Connection

## Definition

A residual connection adds a layer's input back to its output.

Simple form:

```text
output = input + transformation(input)
```

This creates a direct path for information to pass through the layer.

> A residual connection lets a layer modify information without fully replacing it.

---

## Why Residual Connections Are Useful

Deep networks apply many transformations.

Without direct paths, information can become harder to preserve or train through.

Residual connections help by keeping the original signal available.

Example:

```text
old representation
       +
change proposed by the layer
       ->
updated representation
```

> Residual connections make updates behave more like additions than total rewrites.

---

## Residual As Preservation Plus Change

A useful mental model:

```text
keep what is useful
add what the layer learned
```

The layer does not need to rebuild everything from scratch.

It can learn a change relative to what was already there.

> Residual learning focuses on useful modifications.

---

## In A Transformer Block

Transformer blocks often use residual connections around major sublayers.

Example:

```text
input -> attention -> add input back
input -> feedforward -> add input back
```

This helps information survive through many stacked blocks.

> Residual connections support deep transformer stacks.

---

## What Residual Connections Are Not

A residual connection is not the same as memory in the recurrent sense.

It does not carry state across time steps.

It carries a representation across a layer transformation.

> Residual connection is layer-level information preservation.

---

## Final Summary

- A residual connection adds input back to transformed output.
- It gives information a direct path through a layer.
- It helps preserve useful representation content.
- It lets layers learn changes rather than total replacements.
- In transformers, it supports stable deep stacking.
