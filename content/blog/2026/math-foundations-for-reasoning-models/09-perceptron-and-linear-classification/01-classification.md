---
title: "Classification"
excerpt: "Classification is the task of assigning an input to one of several possible categories."
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
topicOrder: 1
---

# Classification

## Definition

Classification is the task of assigning an input to a category.

Example:

```text
input -> category
```

More concrete:

```text
email -> spam or not spam
image -> cat or dog
measurement -> pass or fail
```

> Classification = choosing a class for an input.

---

## Class

A class is one possible category.

Example:

```text
spam
not spam
```

or:

```text
cat
dog
bird
```

The classifier's job is to pick one of the allowed classes.

> A class is an output category.

---

## Input

The input is the thing being classified.

Example:

```text
email text
image data
person measurements
sensor readings
```

In this series, we often represent input as a vector.

Example:

```text
input = [x1, x2, x3]
```

> Classification often starts with vector data.

---

## Output

The output is the predicted class.

Example:

```text
input: [2, 5]
output: class A
```

The output is not just a number unless the classes are encoded numerically.

Example:

```text
0 = not spam
1 = spam
```

The number is an encoding of the class.

> Classification output is a category, even when represented by a number.

---

## Classification vs Regression

Classification predicts a category.

Regression predicts a numerical value.

Classification:

```text
input -> cat
input -> dog
```

Regression:

```text
input -> price
input -> temperature
```

This chapter focuses on classification.

> Classification chooses a class. Regression estimates a value.

---

## Decision Rule

A classifier needs a rule for deciding the class.

Example:

```text
if score >= 0:
  class A
else:
  class B
```

The rule turns a computed score into a category.

> Classification requires a decision rule.

---

## Why Classification Matters Here

The previous chapter ended with weighted sums.

Classification asks:

```text
Can a weighted sum produce a decision?
```

That question leads to perceptrons.

A perceptron is a simple classifier built from:

```text
input vector
weights
weighted sum
threshold
class output
```

> Classification is where weighted vector computation becomes a decision.

---

## Final Summary

- Classification assigns inputs to categories.
- A class is a possible category.
- Inputs are often represented as vectors.
- Outputs are predicted classes.
- Classification differs from regression.
- A classifier needs a decision rule.
- Perceptrons are simple linear classifiers.
