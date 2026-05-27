---
title: "Recurrence"
excerpt: "Recurrence lets a network reuse the same update rule across ordered steps while carrying state forward."
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
topicOrder: 10
---

# Recurrence

## Definition

Recurrence means a network updates a state across a sequence of steps.

Basic pattern:

```text
current input + previous state -> new state
```

The same update rule is reused at each step.

> Recurrence is repeated state update over ordered data.

---

## Why Recurrence Is Useful

Some data arrives in order.

Examples:

```text
text tokens
time series values
events over time
audio samples
```

The current value may depend on earlier values.

Recurrence gives the model a way to carry information forward.

> Recurrence is useful when order and previous context matter.

---

## State Across Steps

A recurrent model keeps a hidden state.

Example:

```text
step 1 -> hidden state 1
step 2 uses hidden state 1 -> hidden state 2
step 3 uses hidden state 2 -> hidden state 3
```

The state acts as a summary of previous steps.

> Recurrence connects past computation to current computation.

---

## Shared Update Rule

The same learned rule is applied at each position in the sequence.

```text
same parameters at step 1
same parameters at step 2
same parameters at step 3
```

This lets the model process sequences of different lengths using one update mechanism.

> Recurrent models reuse parameters across sequence steps.

---

## Final Summary

- Recurrence updates state across ordered steps.
- It uses current input and previous state.
- It is useful for sequence data.
- The hidden state carries information forward.
- The same update rule is reused across steps.
- Recurrence gives networks a structured way to model order.
