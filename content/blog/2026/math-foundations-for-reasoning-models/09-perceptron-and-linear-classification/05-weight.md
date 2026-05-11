---
title: "Weight"
excerpt: "A weight is a scalar that controls how strongly a feature contributes to a model's score."
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
topicOrder: 5
---

# Weight

## Definition

A weight is a scalar attached to a feature.

Example:

```text
score = w1*x1 + w2*x2
```

`w1` is the weight for `x1`.

`w2` is the weight for `x2`.

> Weight = scalar influence assigned to a feature.

---

## Weight Controls Contribution

A feature contributes through multiplication by its weight.

Example:

```text
score = 3*x1 + 1*x2
```

Here:

```text
weight for x1 = 3
weight for x2 = 1
```

If both feature values are similar, `x1` contributes more strongly.

> Larger weight means stronger contribution, all else equal.

---

## Positive Weight

A positive weight increases the score when the feature increases.

Example:

```text
score = 2*x
```

If:

```text
x = 3
```

then:

```text
score = 6
```

More `x` means higher score.

> Positive weight pushes the score upward as the feature grows.

---

## Negative Weight

A negative weight decreases the score when the feature increases.

Example:

```text
score = -2*x
```

If:

```text
x = 3
```

then:

```text
score = -6
```

More `x` means lower score.

> Negative weight pushes the score downward as the feature grows.

---

## Zero Weight

A zero weight removes a feature's effect from the score.

Example:

```text
score = 0*x1 + 4*x2
```

`x1` has no effect because:

```text
0*x1 = 0
```

> Zero weight means the feature is ignored by the linear score.

---

## Weight Vector

Weights can be collected into a vector.

Example:

```text
w = [2, -1, 4]
x = [3, 5, 2]
```

Weighted sum:

```text
dot(w, x) = 2*3 + (-1)*5 + 4*2
          = 6 - 5 + 8
          = 9
```

> The weight vector defines how the model looks at the input vector.

---

## Geometric Meaning

Weights define a direction in feature space.

The dot product:

```text
dot(w, x)
```

measures how much the input aligns with that weight direction.

This connects perceptrons back to geometry.

> A weight vector gives the model a direction of attention.

---

## Final Summary

- A weight is a scalar attached to a feature.
- It controls feature contribution.
- Positive weights increase the score.
- Negative weights decrease the score.
- Zero weights ignore a feature.
- Weights form a weight vector.
- The weight vector defines a direction for the classifier.
