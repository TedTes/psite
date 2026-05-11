---
title: "Weighted Sum"
excerpt: "A weighted sum combines feature values by multiplying each feature by a weight and adding the results."
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
topicOrder: 7
---

# Weighted Sum

## Definition

A weighted sum multiplies each feature by a weight and adds the results.

Example:

```text
features = [x1, x2]
weights  = [w1, w2]
```

Weighted sum:

```text
w1*x1 + w2*x2
```

> Weighted sum = add feature values after weighting them.

---

## Simple Example

Let:

```text
features = [3, 4]
weights  = [2, 5]
```

Compute:

```text
2*3 + 5*4
= 6 + 20
= 26
```

The weighted sum is:

```text
26
```

> Weighted sums turn a feature vector into one score.

---

## Dot Product Form

A weighted sum is a dot product.

Example:

```text
w = [2, 5]
x = [3, 4]
```

Then:

```text
dot(w, x) = 2*3 + 5*4 = 26
```

So:

```text
weighted sum = dot(weights, features)
```

> Weighted sums connect linear classification to vector geometry.

---

## Adding Bias

A linear score often adds bias after the weighted sum.

Example:

```text
score = dot(w, x) + b
```

If:

```text
dot(w, x) = 26
b = -10
```

then:

```text
score = 16
```

> Bias shifts the weighted sum into a decision score.

---

## Contribution Of Each Feature

Each term contributes to the total score.

Example:

```text
2*3 + 5*4
```

Terms:

```text
2*3 = 6
5*4 = 20
```

The second feature contributes more in this example.

> A weighted sum decomposes the score into feature contributions.

---

## Sign Matters

Positive and negative terms can push the score in different directions.

Example:

```text
weights  = [2, -5]
features = [3, 4]
```

Weighted sum:

```text
2*3 + (-5)*4
= 6 - 20
= -14
```

The second feature pushes the score downward.

> Weight signs determine whether features support or oppose the score.

---

## Why Weighted Sum Matters

The perceptron starts with a weighted sum.

Basic shape:

```text
input features -> weighted sum -> threshold -> class
```

So before understanding perceptrons, the weighted sum must be clear.

> A perceptron decision begins with a weighted sum.

---

## Final Summary

- A weighted sum multiplies features by weights and adds.
- It produces one scalar score.
- It is equivalent to a dot product.
- Bias can be added after it.
- Each feature contributes one term.
- Weight signs matter.
- Perceptrons begin with weighted sums.
