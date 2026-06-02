---
title: "Word Embedding"
excerpt: "A word embedding is a numerical representation of a word, useful historically but less precise than token-level representation."
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
topicOrder: 5
---

# Word Embedding

## Definition

A word embedding is a numerical representation of a word.

Simple form:

```text
word -> embedding
```

Example:

```text
"cat" -> numerical representation
```

> A word embedding represents a word in a computable form.

---

## Word vs Token

A word and a token are not always the same thing.

Example:

```text
word:
"unbelievable"

possible tokens:
["un", "believ", "able"]
```

Modern language models often use token embeddings rather than pure word embeddings.

> Token embeddings are more general because tokens can be smaller than words.

---

## Why Word Embeddings Were Useful

Word embeddings helped show that words can be represented by learned numerical patterns.

They made it possible to compare words based on learned usage patterns.

Example idea:

```text
words used in similar contexts may get similar representations
```

This was an important step from symbolic identity to learned representation.

> Word embeddings showed that discrete language units can have useful geometry.

---

## Limitation Of One Word, One Embedding

A word can have multiple meanings.

Example:

```text
"bank" = financial institution
"bank" = side of a river
```

A single word embedding has difficulty representing both uses separately.

Contextual representations address this by changing the representation based on surrounding tokens.

> One fixed word representation can be too rigid for context-dependent meaning.

---

## Why This Still Matters

Even if modern models use token embeddings, word embeddings clarify the core idea:

```text
discrete language item -> learned numerical representation
```

They are a simpler entry point into embeddings.

> Word embeddings are a useful historical and conceptual bridge.

---

## Final Summary

- A word embedding represents a word numerically.
- A word is not always the same as a token.
- Word embeddings helped connect language to vector representations.
- One fixed word embedding struggles with multiple meanings.
- Modern models usually rely on token embeddings and contextual representations.
