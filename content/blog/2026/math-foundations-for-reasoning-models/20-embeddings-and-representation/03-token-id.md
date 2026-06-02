---
title: "Token ID"
excerpt: "A token ID is a consistent integer label that identifies a token and selects its embedding."
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
topicOrder: 3
---

# Token ID

## Definition

A token ID is a number assigned to a token.

Simple form:

```text
token -> token ID
```

Example:

```text
"cat" -> 4821
```

The exact number depends on the tokenizer.

> A token ID is a stable label for a token.

---

## Token ID Is Identity, Not Meaning

The number itself does not carry meaning by size.

Example:

```text
ID 100 is not "less meaningful" than ID 9000
ID 9000 is not "larger in meaning" than ID 100
```

The ID is mainly an index.

It tells the system which token is present.

> Token ID number value is not semantic value.

---

## Why Token IDs Are Needed

Computers need discrete identifiers to store and retrieve token information.

Simple flow:

```text
token -> ID -> embedding table lookup
```

The ID allows the model to find the embedding associated with that token.

> Token IDs connect tokens to embedding rows.

---

## Consistency Matters

The same tokenizer must map tokens consistently.

Example:

```text
"cat" -> 4821
```

If the same token mapped to different IDs unpredictably, the model could not use its learned embeddings reliably.

> Consistent token IDs preserve stable reference.

---

## Token ID vs Embedding

A token ID identifies.

An embedding represents.

```text
token ID:
which token is this?

embedding:
how should the model compute with this token?
```

The ID is discrete.

The embedding is numerical and transformable.

> The ID selects the representation; it is not the representation itself.

---

## Final Summary

- A token ID is a number assigned to a token.
- It identifies the token consistently.
- The number's magnitude does not define meaning.
- Token IDs are used to look up embeddings.
- Token ID and embedding are different concepts.
