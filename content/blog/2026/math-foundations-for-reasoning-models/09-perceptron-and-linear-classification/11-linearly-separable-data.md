---
title: "Linearly Separable Data"
excerpt: "Data is linearly separable when one linear boundary can correctly separate the classes."
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
topicOrder: 11
---

# Linearly Separable Data

## Definition

Data is linearly separable when a linear boundary can separate the classes.

In two dimensions:

```text
one line separates the classes
```

In higher dimensions:

```text
one flat boundary separates the classes
```

> Linearly separable = separable by one linear decision boundary.

---

## Simple Picture

Imagine two classes:

```text
class A: points on the left
class B: points on the right
```

If a single line can divide them:

```text
class A | class B
```

then the data is linearly separable.

> A linear classifier can solve linearly separable data.

---

## Not About Labels Alone

Linearly separable depends on both:

- feature representation
- labels

Example:

```text
features = [x1, x2]
label = class
```

The same labels may be separable in one feature space but not another.

> Separability depends on how data is represented.

---

## Linear Boundary

A linear boundary has the form:

```text
dot(w, x) + b = 0
```

If there are weights and bias that separate all examples correctly, the data is linearly separable.

Example:

```text
positive examples: score >= 0
negative examples: score < 0
```

> Separability means some weight vector and bias can divide the classes.

---

## Margin Idea

If points are not only separated, but separated with space between them and the boundary, there is a margin.

Example:

```text
class A     boundary     class B
```

The empty space around the boundary is the margin.

We do not need margin formally yet.

The useful idea is that cleaner separation is easier to classify.

> More space between classes can make classification easier.

---

## Not Linearly Separable

Data is not linearly separable when no single linear boundary can separate the classes.

Example idea:

```text
class A appears in two separated regions
class B appears between them
```

One straight line cannot divide them correctly.

This limitation becomes important in the XOR chapter.

> Some patterns require more than one linear boundary or a different representation.

---

## Why It Matters For Perceptrons

The basic perceptron can learn a separating boundary when the data is linearly separable.

If the data is not linearly separable, the basic perceptron cannot find a perfect linear separator.

It may keep updating without settling.

> Perceptrons depend on linear separability for perfect classification.

---

## Final Summary

- Data is linearly separable when one linear boundary separates the classes.
- In two dimensions, the boundary is a line.
- Separability depends on features and labels.
- A boundary has form `dot(w, x) + b = 0`.
- Some data is not linearly separable.
- Basic perceptrons work best when a linear separator exists.
