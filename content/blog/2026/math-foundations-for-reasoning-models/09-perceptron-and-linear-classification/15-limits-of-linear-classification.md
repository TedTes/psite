---
title: "Limits of Linear Classification"
excerpt: "Linear classification is limited because one flat boundary cannot represent every class pattern."
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
topicOrder: 15
---

# Limits Of Linear Classification

## Definition

Linear classification uses one linear decision boundary.

That boundary can be:

```text
point in 1D
line in 2D
plane in 3D
higher-dimensional flat surface in more dimensions
```

The limitation is simple:

```text
one flat boundary cannot separate every pattern
```

> Linear classification is powerful but limited by linear separability.

---

## Works Well When Data Is Linearly Separable

If the classes can be separated by one line, a linear classifier can work.

Example:

```text
class A on the left
class B on the right
```

A line can divide them.

This is the setting where a basic perceptron can succeed.

> Linear classifiers work naturally on linearly separable data.

---

## Fails When One Boundary Is Not Enough

Some patterns require more than one boundary.

Example idea:

```text
class A appears in two corners
class B appears in the other two corners
```

No single line can separate them perfectly.

This is the kind of problem XOR exposes.

> Some class patterns cannot be separated by one flat boundary.

---

## Representation Matters

Linear separability depends on the representation.

Data that is not separable in one feature space may become separable after changing features.

Example idea:

```text
original features -> not linearly separable
new representation -> linearly separable
```

This is one reason representation matters.

> Linear models depend strongly on the feature representation.

---

## No Curved Boundary

A basic linear classifier does not create curved boundaries.

It uses:

```text
dot(w, x) + b = 0
```

That equation creates a flat boundary.

If the real class separation is curved, the linear classifier may fail.

> A linear classifier cannot bend its boundary.

---

## Perceptron Limitation

The perceptron has the same limitation.

It computes:

```text
score = dot(w, x) + b
```

and uses a threshold.

So it can only create a linear decision boundary.

If no such boundary separates the data, a single perceptron cannot solve the task perfectly.

> A single perceptron is limited to linear separation.

---

## Why This Limitation Is Useful

The limitation is not a failure of the concept.

It teaches what is missing.

If one linear boundary is not enough, we need:

- different features
- multiple boundaries
- nonlinear transformations
- layered representations

These ideas lead naturally to XOR and multi-layer networks.

> The limit of linear classification motivates representation learning.

---

## Final Summary

- Linear classification uses one flat decision boundary.
- It works when data is linearly separable.
- It fails when one boundary cannot separate the classes.
- Feature representation affects separability.
- A single perceptron cannot create curved or multi-part boundaries.
- The limitation motivates nonlinear representation.
