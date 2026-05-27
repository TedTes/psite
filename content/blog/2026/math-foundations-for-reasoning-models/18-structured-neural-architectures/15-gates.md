---
title: "Gates"
excerpt: "Gates are learned controls that decide how much information should pass, be forgotten, or be written."
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
topicOrder: 15
---

# Gates

## Definition

Gates are learned controls that regulate information flow.

They produce values that decide how much information passes through.

Basic idea:

```text
gate value near 0 -> block more
gate value near 1 -> pass more
```

> A gate controls how strongly information is allowed through.

---

## Why Gates Are Useful

Sequence models must decide what to keep and what to ignore.

Example:

```text
old information may still matter
new information may replace old information
irrelevant information should be reduced
```

Gates let the model learn these controls.

> Gates help models manage memory and updates.

---

## Gates In LSTMs

LSTMs use gates to control the cell state and hidden state.

Common gate roles:

```text
forget:
how much old information to remove

input:
how much new information to write

output:
how much internal state to expose
```

These are learned through training.

> LSTM gates control forgetting, writing, and exposing information.

---

## Gates Are Not Human Decisions

A gate does not understand in a human sense.

It is a learned numeric control.

```text
input values + previous state -> gate values
```

The gate values are useful if they help reduce loss.

> Gates are learned computations, not conscious choices.

---

## Final Summary

- Gates regulate information flow.
- They control how much information passes through.
- They help sequence models keep, forget, and update information.
- LSTMs use gates for memory control.
- Gate behavior is learned from data and loss.
- Gates are numeric computations, not human-like decisions.
