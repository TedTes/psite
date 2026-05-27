---
title: "Fully Connected Network"
excerpt: "A fully connected network lets every unit in one layer connect to every unit in the next layer."
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
topicOrder: 2
---

# Fully Connected Network

## Definition

A fully connected network is a network where every unit in one layer connects to every unit in the next layer.

Basic pattern:

```text
each input value -> each neuron in the next layer
```

Every output in the next layer can use all values from the previous layer.

> Fully connected means all-to-all connection between adjacent layers.

---

## What It Computes

Each neuron computes a weighted combination of all previous layer values.

Example:

```text
neuron output = w1*x1 + w2*x2 + w3*x3 + bias
```

If there are many inputs, each neuron has many weights.

> Fully connected layers allow unrestricted mixing of previous values.

---

## Strength

The strength of a fully connected layer is flexibility.

It can learn many different combinations because every previous value can influence every next value.

Example:

```text
input 1 can affect output 1
input 1 can affect output 2
input 2 can affect output 1
input 2 can affect output 2
```

> Fully connected layers are general-purpose transformation layers.

---

## Limitation

Fully connected layers do not assume local structure.

They treat all input positions as separate values unless the data representation or training teaches otherwise.

For structured data, this can be inefficient.

Example:

```text
image-like data has nearby spatial structure
sequence data has order over time
fully connected layers do not directly encode those assumptions
```

> Fully connected networks are flexible but weakly structured.

---

## Final Summary

- A fully connected network uses all-to-all connections between adjacent layers.
- Each neuron can use every previous layer value.
- This gives flexible mixing.
- It also creates many parameters.
- Fully connected layers do not directly encode local or sequential structure.
- Structured architectures add stronger assumptions for specific data patterns.
