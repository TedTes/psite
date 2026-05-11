---
title: "Perceptron Learning Rule"
excerpt: "The perceptron learning rule updates weights and bias when the model misclassifies an example."
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
topicOrder: 13
---

# Perceptron Learning Rule

## Definition

The perceptron learning rule updates the weights and bias when the perceptron makes a mistake.

Basic idea:

```text
if prediction is correct:
  do nothing
if prediction is wrong:
  adjust weights and bias
```

> Perceptron learning changes the decision boundary after errors.

---

## Setup

Use labels:

```text
-1
1
```

For one training example:

```text
input = x
label = y
```

where:

```text
y is either -1 or 1
```

The perceptron predicts:

```text
prediction = sign(dot(w, x) + b)
```

> The model compares prediction with label.

---

## Correct Prediction

If the prediction matches the label, no update is needed.

Example:

```text
label = 1
prediction = 1
```

The current weights handled this example correctly.

So:

```text
weights stay the same
bias stays the same
```

> Correct examples do not force an update.

---

## Incorrect Prediction

If the prediction differs from the label, the model updates.

Example:

```text
label = 1
prediction = -1
```

The score was too low for this example.

The weights should move toward the input.

Another case:

```text
label = -1
prediction = 1
```

The score was too high.

The weights should move away from the input.

> The update moves the boundary in a direction that helps the mistaken example.

---

## Update Rule

One common form:

```text
w = w + learning_rate * y * x
b = b + learning_rate * y
```

when the example is misclassified.

Where:

```text
w = weight vector
x = input vector
y = label (-1 or 1)
b = bias
```

> The label decides the update direction.

---

## Example Update

Suppose:

```text
w = [0, 0]
b = 0
x = [2, 3]
y = 1
learning_rate = 1
```

If the model misclassifies this example, update:

```text
w = [0, 0] + 1 * 1 * [2, 3]
w = [2, 3]
```

Bias:

```text
b = 0 + 1 * 1
b = 1
```

> The model shifts toward classifying this example as positive.

---

## What The Update Does Geometrically

The weight vector controls the decision boundary.

Updating weights changes the boundary's orientation.

Updating bias shifts the boundary.

So each mistake changes the boundary slightly.

> Perceptron learning adjusts the boundary from errors.

---

## When It Converges

If the data is linearly separable, the perceptron learning rule can eventually find a separating boundary.

If the data is not linearly separable, it may keep making updates.

This is a limitation of linear classification.

> Perceptron learning works cleanly when a linear separator exists.

---

## Final Summary

- The perceptron updates only after mistakes.
- Correct predictions do not require an update.
- With labels `-1` and `1`, the label controls update direction.
- The weight update is `w = w + learning_rate * y * x`.
- The bias update is `b = b + learning_rate * y`.
- Weight updates rotate the boundary.
- Bias updates shift the boundary.
- Convergence depends on linear separability.
