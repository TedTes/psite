---
title: "Feature"
excerpt: "A feature is one measurable component used to describe an input for a model."
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
topicOrder: 2
---

# Feature

## Definition

A feature is one measurable property of an input.

Example:

```text
house:
rooms = 3
size = 1200
age = 20
```

Features:

```text
rooms
size
age
```

> Feature = one input property used by a model.

---

## Feature As Vector Component

When data is represented as a vector, each component can be a feature.

Example:

```text
input = [3, 1200, 20]
```

could mean:

```text
feature 1 = rooms
feature 2 = size
feature 3 = age
```

> Features are the meanings attached to vector components.

---

## Feature Consistency

Feature order must stay consistent.

Good:

```text
[rooms, size, age]
[3, 1200, 20]
[4, 1500, 10]
```

Bad:

```text
[rooms, size, age]
[3, 1200, 20]
[10, 4, 1500]
```

The second row uses a different order.

That breaks the representation.

> Feature positions must keep the same meaning across examples.

---

## Feature Values

A feature has a value for each input.

Example:

```text
feature: size
value: 1200
```

In vector form:

```text
[3, 1200, 20]
```

`1200` is the value of the `size` feature for that input.

> A feature names the property. A feature value gives its value for one input.

---

## Features And Classification

A classifier uses features to make a decision.

Example:

```text
input features = [hours studied, attendance]
class = pass or fail
```

The classifier does not see the real-world object directly.

It sees the feature representation.

> Classification depends on how inputs are represented as features.

---

## Good Features

A useful feature helps separate classes.

Example:

```text
feature: number of missed payments
class: risky or not risky
```

This feature may carry useful information.

A weak feature may not help.

Example:

```text
feature: random ID number
```

If it has no meaningful relation to the class, it may not help classification.

> Features matter because they shape what the classifier can use.

---

## Feature Scale

Feature scale can affect linear models.

Example:

```text
rooms = 3
price = 300000
```

Large-scale features can dominate a weighted sum if not handled carefully.

This is why normalization can matter.

> Feature scale affects numerical comparison and weighted sums.

---

## Final Summary

- A feature is one measurable property of an input.
- In vectors, features are component meanings.
- Feature order must be consistent.
- A feature value is the value for one input.
- Classification depends on feature representation.
- Useful features help separate classes.
- Feature scale can affect linear models.
