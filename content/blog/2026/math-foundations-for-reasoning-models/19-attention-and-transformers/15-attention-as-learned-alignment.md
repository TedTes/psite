---
title: "Attention as Learned Alignment"
excerpt: "Attention can be understood as learned alignment between a current query and relevant source positions."
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
topicOrder: 15
---

# Attention As Learned Alignment

## Definition

Attention can be viewed as learned alignment.

Alignment means connecting one representation with the other representations that should influence it.

Simple form:

```text
current query aligns with relevant keys
```

The stronger the alignment, the larger the attention weight.

> Attention aligns a current position with useful source positions.

---

## Why Alignment Is A Useful View

Attention is easier to understand when seen as matching.

The model asks:

```text
which sources match the current need?
```

The query represents the current need.

The keys represent matchable source descriptions.

The values provide the content.

> Alignment is the connection between what is needed and what is available.

---

## Learned, Not Manually Defined

The alignment is not manually programmed.

The model learns how to create queries, keys, and values.

Then attention computes the interaction.

```text
learned representations -> attention scores -> learned behavior
```

Training shapes which alignments become useful.

> Attention alignment is learned from data and objective pressure.

---

## Soft Alignment

Attention usually creates soft alignment.

That means one position can align with multiple sources at once.

Example:

```text
source A -> 0.5
source B -> 0.3
source C -> 0.2
```

This is different from choosing only one source.

> Soft alignment allows several sources to contribute at the same time.

---

## Alignment Is Not Explanation By Default

Attention weights can sometimes be inspected.

But they should not automatically be treated as a full explanation of model behavior.

A high weight means high influence in that attention operation.

It does not prove the model's final reason.

> Learned alignment is part of the computation, not a complete human explanation.

---

## Final Summary

- Attention can be viewed as learned alignment.
- Queries align with keys.
- Values provide the information that gets mixed.
- Alignment is learned, not manually assigned.
- Attention is usually soft, allowing multiple sources to contribute.
- Attention weights are influence signals, not guaranteed explanations.
