---
title: "Threshold"
excerpt: "A threshold is a cutoff value used to turn a score into a decision."
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
topicOrder: 8
---

# Threshold

## Definition

A threshold is a cutoff value.

It turns a score into a decision.

Example:

```text
if score >= 0:
  output = 1
else:
  output = -1
```

Here the threshold is:

```text
0
```

> Threshold = cutoff for deciding between outputs.

---

## Simple Example

Suppose:

```text
threshold = 10
```

Decision rule:

```text
if score >= 10:
  pass
else:
  fail
```

Scores:

```text
12 -> pass
9  -> fail
10 -> pass
```

> Threshold separates one decision region from another.

---

## Threshold In A Perceptron

A perceptron computes a score:

```text
score = dot(w, x) + b
```

Then it applies a threshold rule:

```text
if score >= 0:
  class 1
else:
  class -1
```

This converts a number into a class.

> Threshold turns a linear score into a classification output.

---

## Threshold vs Bias

Threshold and bias are closely related.

Rule:

```text
dot(w, x) >= threshold
```

can be rewritten as:

```text
dot(w, x) - threshold >= 0
```

So:

```text
b = -threshold
```

This is why many formulas use threshold `0` after including bias.

> Bias can move the threshold into the score formula.

---

## Threshold Creates A Boundary

The threshold defines where the decision changes.

Example:

```text
score = 0
```

is the boundary between:

```text
score >= 0
score < 0
```

For linear models, this boundary becomes a line, plane, or higher-dimensional flat surface.

> Threshold creates the decision boundary.

---

## Too High Or Too Low

Changing the threshold changes decisions.

Example:

```text
threshold = 0
```

may classify many inputs as positive.

```text
threshold = 100
```

may classify fewer inputs as positive.

Threshold controls how much score is required to choose a class.

> Threshold changes how strict the decision rule is.

---

## Why Threshold Matters

Without a threshold, a weighted sum is just a number.

With a threshold, the number becomes a decision.

Example:

```text
weighted sum -> score
threshold -> class
```

> Threshold is the bridge from score to class.

---

## Final Summary

- A threshold is a cutoff value.
- It turns a score into a decision.
- Perceptrons use threshold rules.
- Bias can absorb the threshold into the score.
- The threshold creates a decision boundary.
- Changing the threshold changes classification behavior.
