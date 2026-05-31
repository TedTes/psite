---
title: "Feedforward Layer"
excerpt: "The feedforward layer transforms each position after attention has mixed information across positions."
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
topicOrder: 11
---

# Feedforward Layer

## Definition

In a transformer block, the feedforward layer is a learned transformation applied to each position.

Simple form:

```text
representation at one position -> transformed representation
```

The same kind of transformation is applied across positions.

> The feedforward layer refines each position's representation.

---

## Why It Comes After Attention

Attention mixes information across positions.

After that, each position contains context from other positions.

The feedforward layer then transforms that updated information.

Basic flow:

```text
self-attention:
mix across positions

feedforward:
process each updated position
```

> Attention gathers context; the feedforward layer transforms it.

---

## Position-Wise Transformation

The feedforward layer is usually applied independently to each position.

Example:

```text
position 1 -> feedforward -> updated position 1
position 2 -> feedforward -> updated position 2
position 3 -> feedforward -> updated position 3
```

This does not mean the positions are context-free.

They already received context through attention.

> The feedforward layer processes contextualized positions one at a time.

---

## Why It Is Nonlinear

A feedforward layer usually includes a nonlinear activation.

This matters because repeated linear transformations alone would have limited expressive power.

Simple idea:

```text
linear change + nonlinearity + linear change
```

The nonlinearity helps the model form richer transformations.

> The feedforward layer adds nonlinear representation refinement.

---

## Not The Same As Attention

Attention decides how positions influence each other.

The feedforward layer changes the representation at each position.

```text
attention:
relation across positions

feedforward:
transformation inside each position
```

Both are needed in the block.

> Transformer blocks combine relational mixing with per-position transformation.

---

## Final Summary

- The feedforward layer transforms each position.
- It usually comes after attention.
- Attention mixes context across positions.
- Feedforward processing refines each contextualized position.
- Nonlinearity helps create richer transformations.
