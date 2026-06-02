---
title: "Embedding"
excerpt: "An embedding is a numerical representation that makes a discrete item usable inside neural computation."
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
topicOrder: 1
---

# Embedding

## Definition

An embedding is a numerical representation of a discrete item.

Simple form:

```text
discrete item -> numerical representation
```

For example:

```text
token -> embedding
```

The embedding gives the model something it can compare, transform, and pass through layers.

> An embedding makes a discrete item operable inside neural computation.

---

## Why Embeddings Are Needed

A token by itself is a symbol.

A model needs a representation it can compute with.

Example:

```text
"cat" -> token ID -> embedding
```

The embedding is not the original text.

It is the model's numerical representation of that token.

> Embeddings connect symbolic input to numerical computation.

---

## Embedding Is Not Meaning Itself

An embedding can contain useful learned patterns.

But it is not human meaning directly stored in a vector.

It is a representation shaped by training.

Example:

```text
training objective pushes representations to become useful
```

Useful does not always mean perfectly meaningful or correct.

> Embedding meaning is model-relative, not inherent.

---

## Embedding As A Lookup

One common way to produce embeddings is with a lookup table.

Simple form:

```text
token ID -> row in embedding table -> embedding vector
```

The token ID selects the representation.

The embedding vector carries the information used by the model.

> The ID finds the embedding; the embedding does the representational work.

---

## What An Embedding Enables

Once a token has an embedding, the model can apply operations such as:

```text
comparison
attention
weighted mixing
layer transformation
prediction
```

This is why embeddings are a bridge between tokens and neural networks.

> Embeddings turn symbols into transformable representations.

---

## Final Summary

- An embedding is a numerical representation of a discrete item.
- It makes tokens computable by neural layers.
- It is not human meaning directly.
- It is shaped by training.
- A token ID often selects an embedding from a table.
- Embeddings provide the material that attention and later layers transform.
