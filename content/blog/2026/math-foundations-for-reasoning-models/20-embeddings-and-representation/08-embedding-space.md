---
title: "Embedding Space"
excerpt: "Embedding space is the coordinate system where learned representations can be compared, moved, and transformed."
date: 2026-05-01
tags:
  - Foundations
  - Embeddings
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Embeddings and Representation"
chapterSlug: embeddings-and-representation
chapterOrder: 20
topicOrder: 8
---

# Embedding Space

## Definition

Embedding space is the space where embeddings live.

If an embedding is a vector, then it has coordinates.

Simple form:

```text
embedding = point or direction in a vector space
```

This lets the model compare and transform representations geometrically.

> Embedding space is the representational space used by embeddings.

---

## Why Space Matters

Once tokens become embeddings, they can be related by geometry.

Examples:

```text
distance
direction
alignment
clusters
```

These geometric relationships can reflect learned patterns.

> Embedding space turns representation into geometry.

---

## Space Is Learned

The structure of embedding space is not manually drawn.

It is shaped by training.

Simple idea:

```text
training objective -> representation updates -> learned geometry
```

Tokens that are useful in similar ways may end up with related representations.

> Embedding geometry is learned from training pressure.

---

## Not A Literal Map Of Meaning

Embedding space is useful, but it should not be treated as a perfect map of human meaning.

It reflects:

```text
data patterns
model architecture
training objective
optimization path
```

The geometry can be useful and imperfect at the same time.

> Embedding space is model-relative geometry, not absolute meaning.

---

## Contextual Embedding Space

Base token embeddings live in an initial representation space.

Contextual embeddings live in transformed spaces across layers.

Example:

```text
layer 0: base token representations
layer 5: contextual representations
layer 20: deeper contextual representations
```

Each layer can reshape how information is represented.

> Embedding space changes as representations move through the model.

---

## Final Summary

- Embedding space is where embeddings are represented geometrically.
- Embeddings can be compared by distance or alignment.
- The space is learned during training.
- It is useful but not a perfect map of human meaning.
- Contextual representations can occupy transformed spaces across layers.
