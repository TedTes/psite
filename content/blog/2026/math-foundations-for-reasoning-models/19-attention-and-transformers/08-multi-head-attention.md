---
title: "Multi-Head Attention"
excerpt: "Multi-head attention runs several attention operations in parallel so different relation patterns can be learned."
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
topicOrder: 8
---

# Multi-Head Attention

## Definition

Multi-head attention means running multiple attention operations in parallel.

Each attention operation is called a head.

Simple form:

```text
head 1 -> attention output
head 2 -> attention output
head 3 -> attention output
```

The outputs are then combined.

> Multi-head attention gives the model multiple ways to route information at the same layer.

---

## Why Multiple Heads Are Useful

One attention head produces one pattern of interaction.

Multiple heads allow different patterns to be learned at once.

Example:

```text
one head may focus on nearby context
another may focus on repeated terms
another may focus on structural dependency
```

These are possibilities, not guaranteed human-readable roles.

> Multiple heads increase the range of relation patterns the layer can represent.

---

## Same Input, Different Projections

Each head receives information from the same sequence, but uses different learned transformations.

Basic idea:

```text
same representation
  -> query/key/value for head 1
  -> query/key/value for head 2
  -> query/key/value for head 3
```

This lets each head compare and mix information differently.

> Different heads learn different views of the same sequence.

---

## Combining Heads

After each head computes its output, the outputs are combined.

Simple form:

```text
head outputs -> combined representation -> next part of the block
```

The combined representation carries information gathered through several attention patterns.

> Multi-head attention merges multiple context-mixing results.

---

## Heads Are Not Always Interpretable

It is tempting to assign a clean meaning to every head.

Sometimes a head may show a recognizable pattern.

But attention heads are learned components, not labeled reasoning modules.

> A head is a learned attention pathway, not a guaranteed explanation.

---

## Final Summary

- Multi-head attention runs several attention heads in parallel.
- Each head has its own learned query, key, and value projections.
- Different heads can learn different relation patterns.
- Head outputs are combined.
- Heads are useful computational pathways, not guaranteed human-interpretable modules.
