---
title: "Activation"
excerpt: "Activation is the rule that converts a model's score into an output."
date: 2026-05-01
tags:
  - Foundations
  - Perceptron
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Perceptron and Linear Classification"
chapterSlug: perceptron-and-linear-classification
chapterOrder: 9
topicOrder: 9
---

# Activation

## Definition

Activation is the rule that converts a score into an output.

For a perceptron, the activation is usually a step rule.

Example:

```text
if score >= 0:
  output = 1
else:
  output = -1
```

> Activation = output rule applied to a score.

---

## Score Before Activation

The model first computes a score.

Example:

```text
score = dot(w, x) + b
```

This score is a number.

Example:

```text
score = 4.7
```

The activation decides what to do with that number.

> Activation comes after the weighted score.

---

## Step Activation

A step activation jumps from one output to another at a threshold.

Example:

```text
if score >= 0:
  output = 1
else:
  output = -1
```

Scores:

```text
3  -> 1
0  -> 1
-2 -> -1
```

> Step activation turns a score into one of two outputs.

---

## Activation vs Threshold

The threshold is the cutoff.

The activation is the rule using that cutoff.

Example:

```text
threshold = 0
activation rule = output 1 if score >= threshold else -1
```

> Threshold is the value. Activation is the decision function.

---

## Activation Produces The Prediction

For classification, the activation output is the prediction.

Example:

```text
score = -3
activation(score) = -1
prediction = -1
```

The model can then compare:

```text
prediction vs label
```

> Activation produces the model's predicted class.

---

## Activation Does Not Mean Awareness

The word "activation" does not mean the model understands anything.

It only means a rule produced an output.

Example:

```text
score = 5
activation = 1
```

This is rule-based computation.

> Activation is a mathematical output rule, not awareness.

---

## Later Activations

Later neural networks use other activation functions.

Examples:

```text
ReLU
sigmoid
tanh
```

Those come later.

For the perceptron, the important activation is the step rule.

> The perceptron uses a simple threshold-based activation.

---

## Final Summary

- Activation converts a score into an output.
- It comes after the weighted sum plus bias.
- A perceptron usually uses step activation.
- Threshold is the cutoff; activation is the rule.
- Activation produces the prediction.
- Activation does not imply awareness.
- More activation functions come later.
