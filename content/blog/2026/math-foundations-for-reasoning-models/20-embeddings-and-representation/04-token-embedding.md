---
title: "Token Embedding"
excerpt: "A token embedding is the learned numerical representation selected by a token ID before context is mixed in."
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
topicOrder: 4
---

# Token Embedding

## Definition

A token embedding is the numerical representation associated with a token.

Simple form:

```text
token ID -> token embedding
```

The token ID selects the embedding.

The embedding is what the model computes with.

> A token embedding turns token identity into a numerical representation.

---

## Embedding Table

Token embeddings often live in an embedding table.

Simple idea:

```text
row 1 -> embedding for token 1
row 2 -> embedding for token 2
row 3 -> embedding for token 3
```

When the model sees a token ID, it retrieves the corresponding row.

> The embedding table stores one base representation per token ID.

---

## Before Context

A token embedding is usually the starting representation before attention layers add context.

Example:

```text
token embedding:
base representation of "bank"

contextual representation:
"bank" in "river bank"
"bank" in "bank account"
```

The base token embedding is the same starting point.

Later layers change the representation based on context.

> Token embeddings start the process; contextual layers refine it.

---

## Token Embedding Is Learned

The model does not receive perfect token meanings manually.

The embedding values are adjusted during training.

Simple flow:

```text
prediction error -> parameter update -> embedding changes
```

Over training, token embeddings become useful for the model's objective.

> Token embeddings are learned representational parameters.

---

## Why Token Embeddings Matter

Without token embeddings, the model would only have token IDs.

Token IDs are labels.

Embeddings are transformable representations.

```text
ID:
lookup key

embedding:
computational state
```

> Token embeddings are the first neural representation of text.

---

## Final Summary

- A token embedding is a numerical representation for a token ID.
- It is often retrieved from an embedding table.
- It is learned during training.
- It is the starting point before context is mixed in.
- Token IDs identify; token embeddings represent.
