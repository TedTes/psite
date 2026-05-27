---
title: "Receptive Field"
excerpt: "A receptive field is the part of the input that can affect a particular hidden value or output value."
date: 2026-05-01
tags:
  - Foundations
  - Neural Architectures
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Structured Neural Architectures"
chapterSlug: structured-neural-architectures
chapterOrder: 18
topicOrder: 6
---

# Receptive Field

## Definition

A receptive field is the part of the input that can influence a particular value in the network.

Example:

```text
one hidden value depends on a small local region
that local region is its receptive field
```

> A receptive field defines what input region a computed value can see.

---

## Local Receptive Fields

In convolution, each output value often depends on a local input region.

Example:

```text
output at position 5
depends on input positions 4, 5, and 6
```

That local input region is the receptive field.

> Convolution gives each output a local view of the input.

---

## Receptive Field Can Grow

Stacking layers can increase the effective receptive field.

Example:

```text
layer 1 sees small local regions
layer 2 combines layer 1 outputs
layer 2 indirectly sees a larger input region
```

This lets deeper layers combine broader context.

> Depth can expand how much input context later values depend on.

---

## Why It Matters

Some tasks need local information.

Some tasks need wider context.

The receptive field affects what information a layer can use.

```text
small receptive field -> local detail
large receptive field -> broader context
```

> Receptive field controls the scope of information available to a value.

---

## Final Summary

- A receptive field is the input region that affects a computed value.
- Convolution often creates local receptive fields.
- Deeper layers can have larger effective receptive fields.
- Small receptive fields focus on local detail.
- Larger receptive fields capture broader context.
- Architecture affects what each value can see.
