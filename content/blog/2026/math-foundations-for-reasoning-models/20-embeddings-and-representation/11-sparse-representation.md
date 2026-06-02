---
title: "Sparse Representation"
excerpt: "A sparse representation stores information with many inactive or zero positions and only a few active signals."
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
topicOrder: 11
---

# Sparse Representation

## Definition

A sparse representation is a representation where most positions are inactive or zero.

Simple form:

```text
[0, 0, 1, 0, 0, 0, 0]
```

Only a small part of the representation carries active information.

> Sparse representation uses few active components.

---

## Example: One-Hot Representation

A simple sparse representation is one-hot encoding.

Example:

```text
token A -> [1, 0, 0, 0]
token B -> [0, 1, 0, 0]
token C -> [0, 0, 1, 0]
```

Each token gets a separate active position.

> One-hot representation distinguishes identity but does not express similarity well.

---

## Strength Of Sparse Representation

Sparse representations can be clear.

Example:

```text
active position = specific feature or identity
```

This can make them easier to inspect in simple systems.

They also avoid mixing everything into every dimension.

> Sparse representations can make distinctions explicit.

---

## Limitation Of Sparse Representation

Sparse identity alone does not show relationships.

Example:

```text
[1, 0, 0]
[0, 1, 0]
```

These are different, but the representation does not naturally say how they are related.

Dense embeddings can place related items closer together.

> Sparse representation distinguishes items but may not express learned similarity efficiently.

---

## Sparse vs Embedding

A token ID or one-hot vector can identify a token.

An embedding represents it in a learned dense space.

Simple flow:

```text
sparse identity -> dense embedding
```

This is one reason embeddings are useful.

> Embeddings move from explicit identity to learned representation.

---

## Final Summary

- Sparse representation has many inactive positions.
- One-hot encoding is a simple sparse representation.
- Sparse representations can make identity explicit.
- They may not express similarity efficiently.
- Dense embeddings provide more compact learned relationships.
