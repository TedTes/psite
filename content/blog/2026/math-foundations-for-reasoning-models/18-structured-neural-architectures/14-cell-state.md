---
title: "Cell State"
excerpt: "Cell state is the LSTM memory path that carries information forward across sequence steps."
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
topicOrder: 14
---

# Cell State

## Definition

Cell state is an internal memory path used in an LSTM.

It is carried forward across sequence steps.

Basic pattern:

```text
previous cell state -> updated cell state -> next step
```

> Cell state is the LSTM's longer-running memory signal.

---

## Cell State vs Hidden State

An LSTM has both hidden state and cell state.

```text
hidden state:
exposed recurrent output signal

cell state:
internal memory path
```

The hidden state is used more directly as output to later computation.

The cell state is designed to carry information through time.

> Hidden state is the exposed signal; cell state is the memory path.

---

## Why A Separate Memory Path Helps

If all information must pass through one hidden state, useful information can be overwritten too easily.

The cell state gives the architecture a more direct path for carrying information forward.

Gates control how the cell state changes.

```text
keep some information
remove some information
add new information
```

> Cell state gives sequence memory a controlled path.

---

## Cell State Is Still Learned

The model does not manually decide what the cell state means.

Training shapes how it is used.

```text
loss -> gradients -> gate parameters -> cell state behavior
```

The cell state becomes useful because its update rules are learned.

> Cell state behavior is learned through the training objective.

---

## Final Summary

- Cell state is an LSTM internal memory path.
- It is carried across sequence steps.
- It is different from hidden state.
- Gates control how it is updated.
- It helps preserve useful information over time.
- Its behavior is learned, not manually assigned.
