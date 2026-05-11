---
title: "Binary Classification"
excerpt: "Binary classification assigns each input to one of two possible classes."
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
topicOrder: 14
---

# Binary Classification

## Definition

Binary classification is classification with two possible classes.

Examples:

```text
spam or not spam
pass or fail
yes or no
positive or negative
```

> Binary classification = choosing between two classes.

---

## Binary Labels

The two classes are often encoded numerically.

Common encodings:

```text
0 and 1
```

or:

```text
-1 and 1
```

The perceptron often uses:

```text
-1 and 1
```

because the learning rule becomes simple.

> Binary labels are numeric representations of two classes.

---

## Binary Prediction

A binary classifier produces one of two outputs.

Example:

```text
if score >= 0:
  prediction = 1
else:
  prediction = -1
```

The score is continuous or numerical.

The prediction is categorical.

> The classifier turns a score into one of two labels.

---

## Decision Boundary

Binary classification divides the input space into two regions.

For a linear classifier:

```text
dot(w, x) + b = 0
```

One side is class `1`.

The other side is class `-1`.

> A binary linear classifier splits space into two decision regions.

---

## Example

Suppose:

```text
score = 2*x1 - x2 + 1
```

Decision:

```text
score >= 0 -> class 1
score < 0  -> class -1
```

Input:

```text
x = [3, 4]
```

Score:

```text
2*3 - 4 + 1 = 3
```

Prediction:

```text
class 1
```

> Binary classification uses the sign of the score to choose a class.

---

## Binary vs Multi-Class

Binary classification has two classes.

Multi-class classification has more than two.

Binary:

```text
cat or dog
```

Multi-class:

```text
cat, dog, bird, horse
```

This chapter focuses on binary classification because the perceptron is easiest to understand there first.

> Binary classification is the simplest classification setting.

---

## Why It Matters

Binary classification is the first step toward understanding learned decision systems.

It gives a clean structure:

```text
input -> score -> threshold -> one of two classes
```

The perceptron is a direct implementation of that structure.

> Binary classification is the simplest setting for perceptrons.

---

## Final Summary

- Binary classification chooses between two classes.
- Labels are often encoded as `0/1` or `-1/1`.
- Perceptrons commonly use `-1/1`.
- A score is converted into one of two predictions.
- A linear boundary divides the space into two regions.
- Binary classification is the simplest classification case.
