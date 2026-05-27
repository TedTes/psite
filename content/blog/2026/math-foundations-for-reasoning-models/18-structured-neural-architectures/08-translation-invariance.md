---
title: "Translation Invariance"
excerpt: "Translation invariance means a model can recognize a pattern even when its position shifts."
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
topicOrder: 8
---

# Translation Invariance

## Definition

Translation invariance means recognizing a pattern even when it moves position.

Example:

```text
pattern appears on the left
pattern appears in the center
pattern appears on the right
```

The identity of the pattern stays useful even though its position changes.

> Translation invariance means position shift does not destroy recognition.

---

## Why It Matters

Some patterns can appear in different places.

Example:

```text
a local visual pattern can appear in many image locations
a local signal can appear at different time positions
```

A model that is too position-specific may fail when the same pattern shifts.

> Translation invariance helps models handle shifted patterns.

---

## How Convolution Helps

Convolution reuses the same filter across positions.

```text
same filter at position 1
same filter at position 2
same filter at position 3
```

This lets the model detect the same local pattern in many places.

> Shared filters support recognition across positions.

---

## Invariance vs Equivariance

It helps to separate two ideas.

```text
equivariance:
if the input shifts, the feature response shifts too

invariance:
the final decision can stay the same despite the shift
```

Convolution often creates useful equivariant feature maps.

Pooling and later layers can help produce more invariant decisions.

> Equivariance tracks the shift; invariance ignores it when useful.

---

## Final Summary

- Translation invariance means recognizing patterns despite position shifts.
- It matters when patterns can appear in different places.
- Convolution helps by sharing filters across positions.
- Equivariance means feature responses shift with the input.
- Invariance means the final result can stay stable.
- Structured architectures can build position-aware and position-robust representations.
