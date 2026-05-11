---
title: "Decision Boundary"
excerpt: "A decision boundary is the line, plane, or surface where a classifier changes its prediction."
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
topicOrder: 10
---

# Decision Boundary

## Definition

A decision boundary is where a classifier changes its prediction.

For a simple linear classifier:

```text
score = dot(w, x) + b
```

The boundary is where:

```text
score = 0
```

> Decision boundary = the cutoff surface between classes.

---

## Simple One-Dimensional Example

Suppose:

```text
score = x - 5
```

Decision rule:

```text
if score >= 0:
  class 1
else:
  class -1
```

Boundary:

```text
x - 5 = 0
x = 5
```

Inputs less than `5` go to one class.

Inputs greater than or equal to `5` go to the other.

> In one dimension, the boundary is a point.

---

## Two-Dimensional Example

For two features:

```text
score = w1*x1 + w2*x2 + b
```

The boundary is:

```text
w1*x1 + w2*x2 + b = 0
```

This forms a line in two-dimensional space.

One side of the line is one class.

The other side is the other class.

> In two dimensions, a linear decision boundary is a line.

---

## Higher Dimensions

With three features, a linear decision boundary is a plane.

With more features, it becomes a higher-dimensional flat surface.

The same idea remains:

```text
score = 0
```

is where the prediction changes.

> A linear boundary is flat in the feature space.

---

## Weight Vector And Boundary

The weight vector controls the boundary's orientation.

Example:

```text
score = dot(w, x) + b
```

The vector `w` points in the direction where the score increases.

The decision boundary is perpendicular to `w`.

> Weights orient the boundary.

---

## Bias And Boundary

Bias moves the boundary.

Example:

```text
score = dot(w, x) + b
```

Changing `b` shifts where:

```text
score = 0
```

It moves the boundary without changing the weight direction.

> Bias shifts the boundary position.

---

## Why Decision Boundary Matters

Classification is not only about individual scores.

It is also about how the model divides the input space.

For a linear classifier, the division is flat.

This is powerful, but limited.

> The decision boundary shows what kind of separation the classifier can express.

---

## Final Summary

- A decision boundary is where prediction changes.
- For linear classifiers, it is where `dot(w, x) + b = 0`.
- In one dimension, it is a point.
- In two dimensions, it is a line.
- In three dimensions, it is a plane.
- Weights orient the boundary.
- Bias shifts the boundary.
