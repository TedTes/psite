---
title: "Attention Weight"
excerpt: "An attention weight is the amount of influence one source position has on the current output."
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
topicOrder: 6
---

# Attention Weight

## Definition

An attention weight is a number that says how much one source should contribute to the current output.

Simple form:

```text
source A -> 0.6
source B -> 0.3
source C -> 0.1
```

The larger the weight, the more influence that source has.

> An attention weight controls contribution.

---

## Where Attention Weights Come From

Attention weights come from query-key matching.

Basic flow:

```text
query + keys -> scores -> weights
```

Scores are raw relevance estimates.

Weights are normalized scores used to mix values.

> Attention weights turn relevance scores into usable contribution amounts.

---

## Weights Usually Sum To One

In many attention mechanisms, the weights are normalized so they sum to one.

Example:

```text
0.6 + 0.3 + 0.1 = 1.0
```

This makes the output a weighted mixture of values.

It also makes the weights easier to interpret locally.

> The weights divide influence among the available sources.

---

## Weight Does Not Mean Truth

A high attention weight does not mean a source is true, correct, or important in every sense.

It only means:

```text
for this computation, this source has high influence
```

The model can still assign poor weights.

The weights are learned, not guaranteed explanations.

> Attention weight means influence, not correctness.

---

## Example

Suppose a position uses three source values:

```text
A = previous word representation
B = current word representation
C = later word representation
```

Attention might assign:

```text
A -> 0.2
B -> 0.5
C -> 0.3
```

The output is built mostly from `B`, but still includes information from `A` and `C`.

> Attention weights create a soft mixture instead of a single hard selection.

---

## Final Summary

- An attention weight measures source influence.
- Weights come from query-key scores.
- They are used to mix values.
- They often sum to one.
- High weight does not guarantee truth or human-level importance.
