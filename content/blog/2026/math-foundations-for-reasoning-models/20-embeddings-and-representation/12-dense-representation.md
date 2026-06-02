---
title: "Dense Representation"
excerpt: "A dense representation spreads information across many active dimensions instead of using one explicit slot per item."
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
topicOrder: 12
---

# Dense Representation

## Definition

A dense representation is a representation where many dimensions can be active at once.

Simple form:

```text
[0.23, -0.71, 0.04, 0.88, ...]
```

Information is distributed across the representation.

> Dense representation spreads information across many dimensions.

---

## Dense vs Sparse

Sparse representation:

```text
[0, 0, 1, 0, 0]
```

Dense representation:

```text
[0.2, -0.4, 0.7, 0.1, -0.3]
```

Sparse representations often make identity explicit.

Dense representations make learned relationships easier to express.

> Sparse is explicit; dense is distributed.

---

## Why Dense Embeddings Are Useful

Dense embeddings can place related items in related regions of space.

This allows the model to represent:

```text
similarity
difference
direction
relationship
contextual change
```

The representation is not just a label.

It has geometry.

> Dense embeddings support learned geometric structure.

---

## Dense Does Not Mean Easy To Interpret

Dense representations are often harder to interpret directly.

A single dimension may not correspond to one clean human concept.

Information can be distributed across many dimensions.

Example:

```text
meaningful behavior may depend on a pattern across the vector
```

> Dense representations can be powerful while being less transparent.

---

## Dense Representation In Models

Modern neural models usually work with dense representations.

Token embeddings, hidden states, and contextual embeddings are dense vectors.

They are passed through:

```text
attention
feedforward layers
normalization
prediction heads
```

> Dense representations are the main internal format of neural computation.

---

## Final Summary

- Dense representation has many active dimensions.
- Information is distributed across the vector.
- Dense embeddings can express similarity and relationships.
- They are less directly interpretable than simple sparse representations.
- Neural models mostly operate on dense representations.
