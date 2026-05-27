---
title: "Hidden State"
excerpt: "A hidden state is an internal summary carried from one sequence step to the next."
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
topicOrder: 11
---

# Hidden State

## Definition

A hidden state is an internal value carried across steps in a recurrent model.

Basic pattern:

```text
previous hidden state + current input -> new hidden state
```

It stores information from earlier computation in a form the model can use.

> A hidden state is the model's running internal summary.

---

## Why It Is Hidden

The hidden state is not usually the final output.

It is an internal representation.

```text
input sequence -> hidden states -> outputs
```

The model uses it to compute later states and outputs.

> Hidden means internal to the model's computation.

---

## Hidden State As Memory

The hidden state acts like memory over a sequence.

It can carry information from previous steps into later steps.

Example:

```text
step 1 information -> hidden state
step 2 uses hidden state
step 3 uses updated hidden state
```

This does not mean the model remembers everything perfectly.

It means the architecture gives it a place to carry information.

> Hidden state is a limited learned memory signal.

---

## Hidden State Changes Over Time

The hidden state is updated at each step.

```text
h1 -> h2 -> h3 -> h4
```

Each new state depends on the previous state and the current input.

This makes sequence processing a state transition process.

> Recurrent computation is structured state transition.

---

## Final Summary

- Hidden state is an internal sequence representation.
- It is carried from one step to the next.
- It summarizes previous computation.
- It acts like limited learned memory.
- It changes as new inputs arrive.
- Recurrent models use hidden state to connect sequence steps.
