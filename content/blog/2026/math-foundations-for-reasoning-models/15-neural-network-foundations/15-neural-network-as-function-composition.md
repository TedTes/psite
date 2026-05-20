---
title: "Neural Network as Function Composition"
excerpt: "A neural network can be understood as several functions composed into one larger input-output function."
date: 2026-05-01
tags:
  - Foundations
  - Neural Networks
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Neural Network Foundations"
chapterSlug: neural-network-foundations
chapterOrder: 15
topicOrder: 15
---

# Neural Network as Function Composition

## Definition

A neural network can be understood as a composition of functions.

Each layer is a function.

The network connects them in sequence.

```text
input -> function 1 -> function 2 -> function 3 -> output
```

> A neural network is a layered input-output function.

---

## Function Composition

Function composition means the output of one function becomes the input to the next.

Example:

```text
first function: f
second function: g

input -> f -> g -> output
```

Written compactly:

```text
g(f(input))
```

> Composition chains transformations together.

---

## Layers as Functions

Each layer transforms values.

```text
layer 1: input values -> hidden values
layer 2: hidden values -> new hidden values
layer 3: hidden values -> output values
```

The whole network is the result of composing these layer functions.

> Layers are transformation steps inside a larger function.

---

## Parameters Inside the Functions

The functions are not fixed in every detail.

They contain parameters.

```text
weights
biases
```

Training changes these parameters.

So the network is a function whose behavior can be adjusted.

> Neural networks are parameterized function compositions.

---

## Why Composition Matters

Composition lets the network build transformations step by step.

```text
raw input
-> first representation
-> second representation
-> final output
```

Each stage can reshape the information before passing it forward.

> Function composition lets networks build layered representations.

---

## Final Summary

- A neural network is a composition of functions.
- Each layer is a function.
- The output of one layer becomes the input to the next.
- The network contains parameters inside its functions.
- Training adjusts those parameters.
- Composition lets the network build representations step by step.
