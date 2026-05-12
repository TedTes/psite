---
title: "Multi-Layer Network"
excerpt: "A multi-layer network uses intermediate layers to transform inputs before making a final decision."
date: 2026-05-01
tags:
  - Foundations
  - Representation
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "XOR and the Need for Representation"
chapterSlug: xor-and-the-need-for-representation
chapterOrder: 10
topicOrder: 10
---

# Multi-Layer Network

## Definition

A multi-layer network has more than one layer of computation.

Basic structure:

```text
input -> hidden layer -> output layer
```

The hidden layer creates an intermediate representation.

The output layer makes the final decision.

> Multi-layer network = representation transformation before final output.

---

## Single Layer vs Multi-Layer

A single perceptron does:

```text
input -> weighted sum -> threshold -> output
```

A multi-layer network does:

```text
input -> hidden representation -> output
```

The extra layer gives the model a chance to transform the input before classification.

> A multi-layer network can change the representation before deciding.

---

## Hidden Layer

A hidden layer computes hidden values.

Example:

```text
h1 = rule 1 applied to input
h2 = rule 2 applied to input
```

Hidden representation:

```text
h = [h1, h2]
```

The output layer then uses `h`.

> Hidden layers create new features for the output layer.

---

## Why This Helps XOR

XOR is not linearly separable in the original input space.

But a hidden layer can compute intermediate features that make the final separation easier.

Example idea:

```text
hidden unit 1 detects one useful region
hidden unit 2 detects another useful region
output combines them
```

The final classifier does not have to solve XOR directly from raw inputs.

It solves it from the hidden representation.

> Multi-layer networks can solve XOR by changing the representation.

---

## Nonlinearity Is Needed

If every layer is only linear, the layers collapse into one linear transformation.

Example:

```text
linear layer -> linear layer
```

is still linear overall.

To gain new representational power, the network needs nonlinear activation between layers.

> Multiple layers need nonlinearity to go beyond one linear model.

---

## Layer As Computation

A multi-layer network is still step-by-step computation.

Example:

```text
read input
compute hidden values
compute output score
apply final decision
```

Each step transforms information.

There is no need to treat it as mysterious.

> A network is a sequence of structured transformations.

---

## What This Adds

The important addition is not only "more parameters."

It is:

```text
intermediate representation
```

The network can create internal features that make the final decision easier.

> Multi-layer networks learn or define useful intermediate structure.

---

## Final Summary

- A multi-layer network has more than one computation layer.
- A hidden layer creates intermediate representation.
- The output layer uses the hidden representation.
- XOR can be solved by transforming the representation.
- Nonlinearity is needed to go beyond one linear transformation.
- Multi-layer networks are still step-by-step computation.
- The key idea is representation before decision.
