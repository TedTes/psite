---
title: "GRU"
excerpt: "A GRU is a gated recurrent architecture that manages sequence information with a simpler state structure than an LSTM."
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
topicOrder: 16
---

# GRU

## Definition

GRU stands for Gated Recurrent Unit.

It is a recurrent architecture that uses gates to control hidden state updates.

Basic idea:

```text
current input + previous hidden state -> updated hidden state
```

The update is controlled by gates.

> A GRU is a gated recurrent model with a compact state structure.

---

## GRU vs LSTM

Both GRUs and LSTMs are recurrent architectures with gates.

One simple distinction:

```text
LSTM:
uses hidden state and cell state

GRU:
uses hidden state without a separate cell state
```

This makes GRUs simpler in structure.

> GRUs manage memory with fewer separate state components than LSTMs.

---

## Why Gates Still Matter

GRUs still need to decide what information to keep and what information to update.

Gates help control this.

Example roles:

```text
keep old state
mix in new information
reset part of the past signal
```

These controls are learned during training.

> GRU gates regulate how hidden state changes over time.

---

## Why Use A GRU

A GRU can be useful when sequence modeling needs memory control but a simpler recurrent unit is preferred.

It can capture sequence dependencies while using less structure than an LSTM.

This does not make it universally better.

It is a different architecture choice.

> GRU is a tradeoff between recurrent memory control and structural simplicity.

---

## Final Summary

- GRU means Gated Recurrent Unit.
- It is a recurrent architecture.
- It uses gates to update hidden state.
- Unlike LSTM, it does not use a separate cell state.
- GRUs are structurally simpler than LSTMs.
- They are useful for learning sequence patterns with gated state updates.
