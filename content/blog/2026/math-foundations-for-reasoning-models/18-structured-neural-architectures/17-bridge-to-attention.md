---
title: "Bridge to Attention"
excerpt: "Structured architectures explain locality and recurrence; attention asks which positions should directly interact."
date: 2026-05-01
tags:
  - Foundations
  - Neural Architectures
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Structured Neural Architectures"
chapterSlug: structured-neural-architectures
chapterOrder: 18
topicOrder: 17
---

# Bridge To Attention

## Where We Are

This chapter explained how architecture shapes representation learning.

The progression was:

```text
inductive bias -> fully connected networks -> convolution
```

Then local structure:

```text
filter -> kernel -> receptive field -> pooling -> feature map
```

And sequence structure:

```text
recurrence -> hidden state -> sequence modeling -> LSTM -> gates -> GRU
```

> Structured architectures build assumptions into how information flows.

---

## What Structured Architectures Added

Deep representations showed that layers transform information.

Structured architectures showed that the shape of those transformations matters.

Examples:

```text
convolution:
local repeated patterns

recurrence:
ordered state updates

gates:
controlled memory updates
```

> Architecture controls the paths available for representation building.

---

## The Limitation Of Fixed Paths

Convolution uses local neighborhoods.

Recurrence moves through sequences step by step.

These are useful structures, but they also constrain how information moves.

Example:

```text
faraway positions may need many steps to interact
some positions may be more relevant than nearby positions
```

This raises a new question.

> What if the model could choose which positions matter most?

---

## Why Attention Comes Next

Attention is a mechanism for weighting information from different positions.

Instead of only relying on fixed local windows or step-by-step recurrence, attention asks:

```text
for this position, which other positions are relevant?
```

The model computes weights over information sources.

> Attention makes information routing more flexible.

---

## Bridge Question

The next chapter begins with:

```text
what is attention?
```

That leads to:

```text
self-attention
query
key
value
attention weight
scaled dot-product attention
multi-head attention
positional encoding
transformer block
```

> Attention extends structured representation learning by allowing direct relevance-based interaction.

---

## Final Summary

- Structured architectures encode inductive biases.
- Convolution focuses on local repeated patterns.
- Recurrence processes ordered state updates.
- LSTMs and GRUs use gates to manage sequence memory.
- These architectures shape how information moves.
- Attention asks which positions should directly influence each other.
