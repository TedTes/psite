---
title: "Scaled Dot-Product Attention"
excerpt: "Scaled dot-product attention computes relevance by comparing queries and keys, then uses the result to mix values."
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
topicOrder: 7
---

# Scaled Dot-Product Attention

## Definition

Scaled dot-product attention is a common way to compute attention.

It uses three parts:

```text
queries
keys
values
```

The basic flow:

```text
compare queries with keys -> weights -> mix values
```

> Scaled dot-product attention is a precise rule for computing attention weights and outputs.

---

## Dot Product As Matching

A dot product compares two vectors.

In attention, it compares a query with a key.

Simple idea:

```text
query dot key = match score
```

Higher score means stronger alignment between the query and key.

Lower score means weaker alignment.

> The dot product gives a relevance score.

---

## Why It Is Scaled

When vectors are large, dot-product scores can become large.

Very large scores can make the attention weights too sharp too early.

Scaling reduces this effect.

Simple idea:

```text
raw score -> scaled score -> weight
```

> Scaling keeps attention scores in a more stable range.

---

## The Basic Computation

For one query:

```text
1. compare the query with each key
2. scale the scores
3. turn scores into weights
4. use weights to combine values
```

As a compact sequence:

```text
query + keys -> scores
scores -> weights
weights + values -> output
```

> Attention output is a weighted mixture of values based on query-key matches.

---

## Why This Matters

Scaled dot-product attention gives the model a repeatable rule for information routing.

The learned parts are the representations used as queries, keys, and values.

The attention rule then computes how they interact.

> Learned representations plus a fixed attention rule produce flexible context mixing.

---

## Final Summary

- Scaled dot-product attention compares queries with keys.
- The dot product creates match scores.
- Scaling keeps scores more stable.
- Scores become attention weights.
- Weights are used to mix values into the output.
