---
title: "LSTM"
excerpt: "An LSTM is a recurrent architecture designed to carry useful sequence information through a cell state and gates."
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
topicOrder: 13
---

# LSTM

## Definition

LSTM stands for Long Short-Term Memory.

It is a recurrent architecture designed to carry information across sequence steps more effectively than a simple recurrent update.

Basic idea:

```text
current input
previous hidden state
previous cell state
-> updated hidden state and cell state
```

> An LSTM is a recurrent model with a structured memory path.

---

## Why It Was Introduced

Simple recurrent models can struggle to carry information over many steps.

Gradients can vanish or explode.

Useful earlier information can be overwritten too quickly.

LSTMs add structure to control what is kept, changed, and exposed.

> LSTMs help recurrent models manage information over longer sequences.

---

## Main Parts

An LSTM uses:

```text
hidden state:
the output-like recurrent state

cell state:
a longer-running memory path

gates:
learned controls for information flow
```

The gates decide how much information to keep, forget, or output.

> LSTMs separate memory storage from exposed hidden state.

---

## Not Magic Memory

An LSTM does not remember everything.

It learns what to preserve based on the training objective.

Example:

```text
useful information -> can be kept
irrelevant information -> can be reduced
```

The memory behavior is learned through parameters and loss.

> LSTM memory is learned and limited, not perfect recall.

---

## Final Summary

- LSTM means Long Short-Term Memory.
- It is a recurrent architecture.
- It uses hidden state, cell state, and gates.
- It was designed to help carry information across longer sequences.
- It does not remember everything automatically.
- Its memory behavior is learned through training.
