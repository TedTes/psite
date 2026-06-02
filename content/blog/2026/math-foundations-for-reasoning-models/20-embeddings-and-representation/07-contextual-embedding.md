---
title: "Contextual Embedding"
excerpt: "A contextual embedding is a representation whose meaning changes based on surrounding tokens."
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
topicOrder: 7
---

# Contextual Embedding

## Definition

A contextual embedding is a representation of a token after context has been mixed in.

Simple form:

```text
token embedding + surrounding information -> contextual embedding
```

The same token can have different contextual embeddings in different sequences.

> A contextual embedding represents a token in context.

---

## Why Context Matters

The same token can be used in different ways.

Example:

```text
"bank" in "river bank"
"bank" in "bank account"
```

The token may start with the same base embedding.

After attention and layer transformations, its representation can become different.

> Context changes the representation of the token.

---

## Base Embedding vs Contextual Embedding

Base token embedding:

```text
same starting representation for the token ID
```

Contextual embedding:

```text
updated representation after sequence information is mixed in
```

This distinction is important.

The base embedding identifies a token's starting representation.

The contextual embedding reflects the token's role in the current sequence.

> Base embedding is context-free; contextual embedding is sequence-dependent.

---

## How Context Gets Mixed

In transformer models, attention helps mix context.

Simple flow:

```text
token embeddings
  -> attention
  -> feedforward transformations
  -> contextual representations
```

Each layer can update the representation based on other positions.

> Contextual embeddings are produced by representation transformations across layers.

---

## Why This Matters

Contextual embeddings let a model represent flexible use.

The same token does not have to mean exactly one thing everywhere.

Example:

```text
same token
different surroundings
different representation
```

> Contextual representation is one reason modern models handle language better than fixed word embeddings.

---

## Final Summary

- A contextual embedding represents a token in context.
- It changes based on surrounding tokens.
- It differs from the base token embedding.
- Attention helps mix contextual information.
- Contextual embeddings allow flexible representation of token use.
