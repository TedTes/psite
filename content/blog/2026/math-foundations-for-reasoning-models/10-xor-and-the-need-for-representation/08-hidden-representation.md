---
title: "Hidden Representation"
excerpt: "A hidden representation is an intermediate form that can make a difficult pattern easier to separate."
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
topicOrder: 8
---

# Hidden Representation

## Definition

A hidden representation is an intermediate form of the input.

Instead of classifying the original input directly:

```text
input -> class
```

we create:

```text
input -> hidden representation -> class
```

> Hidden representation = transformed input used before the final decision.

---

## Why Hidden Representation Helps

Some patterns are hard to separate in their original representation.

XOR in original form:

```text
[x1, x2]
```

is not linearly separable.

But if we transform the input into a different representation, the classes may become easier to separate.

> Hidden representation can change the geometry of the problem.

---

## Representation Before Decision

A classifier depends on the representation it receives.

Original input:

```text
[x1, x2]
```

Hidden representation:

```text
[h1, h2]
```

The final classifier sees:

```text
[h1, h2]
```

not the raw input directly.

> The final decision is made in the hidden space.

---

## Simple Intuition

XOR asks whether inputs are different.

Raw coordinates:

```text
x1
x2
```

do not make that difference easy for one line.

A hidden representation can create features that detect parts of the pattern.

Example idea:

```text
h1 detects one region
h2 detects another region
```

Then the final classifier can combine those detections.

> Hidden units can turn a hard pattern into simpler pieces.

---

## Hidden Does Not Mean Mysterious

"Hidden" only means the representation is internal.

It is not directly given as the original input.

It is computed by the model.

Example:

```text
input -> computed hidden values -> output
```

> Hidden means intermediate, not magical.

---

## Relation To Layers

A hidden layer creates hidden representations.

Basic structure:

```text
input layer -> hidden layer -> output layer
```

The hidden layer transforms the input.

The output layer makes the final decision.

> Hidden layers create representations for later layers to use.

---

## Why This Matters For XOR

XOR shows that the original 2D representation is insufficient for one perceptron.

A hidden representation can create a new space where the classes become separable.

This is the basic reason multi-layer networks matter.

> XOR motivates learning intermediate representations.

---

## Final Summary

- A hidden representation is an intermediate input form.
- It sits between original input and final output.
- It can change the geometry of the problem.
- It can make non-separable patterns easier to separate.
- Hidden means internal, not mysterious.
- Hidden layers create hidden representations.
- XOR shows why hidden representations are useful.
