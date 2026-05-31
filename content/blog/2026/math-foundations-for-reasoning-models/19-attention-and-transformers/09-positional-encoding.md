---
title: "Positional Encoding"
excerpt: "Positional encoding gives attention information about order so sequence positions are not treated as unordered items."
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
topicOrder: 9
---

# Positional Encoding

## Definition

Positional encoding is information added to a representation so the model can know where something appears in a sequence.

Basic idea:

```text
token information + position information -> position-aware representation
```

Without position information, attention has no direct way to know order.

> Positional encoding gives sequence representations a sense of location.

---

## Why Position Is Needed

Self-attention compares positions with other positions.

But attention by itself mostly sees a collection of representations.

The order must be provided somehow.

Example:

```text
dog bites man
man bites dog
```

The same words appear, but the order changes the structure.

> Sequence meaning often depends on position.

---

## What Position Adds

Position information helps distinguish:

```text
first item
second item
third item
```

It also helps represent relative structure:

```text
nearby
far away
before
after
```

Different models encode position in different ways.

The core purpose is the same.

> Position information lets attention reason over ordered sequences.

---

## Position Is Not The Token

Token information and position information are different.

Example:

```text
token:
what item is this?

position:
where is this item in the sequence?
```

The model needs both.

> A sequence element has content and location.

---

## Why This Fits Attention

Attention decides which positions influence each other.

Position helps the model know whether those positions are:

```text
adjacent
far apart
before the current position
after the current position
```

This makes attention more useful for ordered data.

> Positional encoding turns attention from unordered interaction into sequence-aware interaction.

---

## Final Summary

- Positional encoding adds location information.
- Attention needs position because order matters in sequences.
- Token information and position information are different.
- Position can represent before, after, near, or far.
- Positional encoding makes self-attention sequence-aware.
