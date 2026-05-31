---
title: "Attention"
excerpt: "Attention is a learned way to decide which pieces of information should influence the current representation."
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
topicOrder: 1
---

# Attention

## Definition

Attention is a mechanism for choosing how much different pieces of information should influence the current computation.

Simple form:

```text
current position asks: which other information matters here?
```

The answer is not a single hard choice.

It is usually a set of weights:

```text
source A -> high weight
source B -> low weight
source C -> medium weight
```

> Attention is learned weighting over available information.

---

## Why Attention Is Needed

Earlier architectures moved information through fixed paths.

Examples:

```text
convolution:
nearby positions interact first

recurrence:
information moves step by step through time
```

Those structures are useful, but they can make some interactions indirect.

Attention asks a different question:

```text
which positions should directly influence this position?
```

> Attention makes information flow depend on relevance, not only fixed distance or sequence order.

---

## Basic Example

Suppose a sequence has three pieces:

```text
A B C
```

When updating `B`, the model may use:

```text
A -> 0.2
B -> 0.5
C -> 0.3
```

This means:

```text
new B = some mixture of A, B, and C
```

The exact mixture is learned.

> Attention updates one representation using weighted information from other representations.

---

## Attention Is Not Awareness

The word "attention" can be misleading.

In this context, attention does not mean consciousness, intention, or understanding.

It means a learned computation that assigns influence.

Example:

```text
this position receives more signal from that position
```

That is a structural operation.

> Attention is a computation over representations, not mental awareness.

---

## Attention As Information Routing

A useful way to think about attention:

```text
available information -> relevance scores -> weighted mixture
```

The model does not move every piece of information equally.

It routes more signal from some positions and less from others.

> Attention is flexible routing inside a representation system.

---

## Final Summary

- Attention weights available information.
- The weights decide how much each source contributes.
- It makes information flow more flexible than fixed local or recurrent paths.
- Attention does not imply awareness.
- It is a learned routing mechanism over representations.
