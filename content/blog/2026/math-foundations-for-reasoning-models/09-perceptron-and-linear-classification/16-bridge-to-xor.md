---
title: "Bridge to XOR"
excerpt: "XOR exposes why one linear boundary is not enough and why representation matters."
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
topicOrder: 16
---

# Bridge To XOR

## Where We Are

This chapter moved from weighted sums to linear classification.

The progression was:

```text
features -> weights -> weighted sum -> threshold -> class
```

Then we studied:

- bias
- activation
- decision boundary
- linear separability
- perceptron
- perceptron learning rule
- binary classification

> A perceptron is a simple linear classifier.

---

## What The Perceptron Added

The perceptron gave us a concrete decision machine.

Basic form:

```text
score = dot(w, x) + b
```

Decision:

```text
score >= 0 -> class 1
score < 0  -> class -1
```

This turns vector input into a binary class.

> A perceptron converts weighted vector structure into a decision.

---

## What Linear Classification Can Do

Linear classification can separate classes when one flat boundary is enough.

In two dimensions:

```text
one line separates the classes
```

This is useful and important.

Many simple patterns can be handled this way.

> Linear classification works when the class structure is linearly separable.

---

## What Linear Classification Cannot Do

Some patterns cannot be separated by one line.

If the same class appears in separated regions, one linear boundary may fail.

This is not because the perceptron forgot a rule.

It is because its representation is too limited.

> One linear boundary cannot express every class pattern.

---

## Why XOR Comes Next

XOR is the simplest clean example of this limitation.

It has two binary inputs and one binary output.

But its class pattern cannot be separated by one straight line in the original input space.

That makes it a perfect next topic.

> XOR shows the boundary of what one perceptron can represent.

---

## Representation Becomes The Problem

The XOR problem shifts the question.

Instead of asking only:

```text
What weights should we choose?
```

we must ask:

```text
Is the current representation enough?
```

If the representation makes the classes non-separable, no single linear boundary can fix it.

> XOR reveals that representation can matter more than the classifier rule.

---

## Bridge Question

The next chapter begins with:

```text
What is XOR, and why does one perceptron fail on it?
```

That question leads to:

- Boolean inputs
- XOR truth table
- plotting XOR
- linear inseparability
- hidden representation
- why multi-layer networks matter

> XOR is the doorway from linear classification to representation learning.

---

## Final Summary

- A perceptron is a linear binary classifier.
- It uses weighted sums and thresholds.
- Its decision boundary is linear.
- Linear classifiers work on linearly separable data.
- Some patterns are not linearly separable.
- XOR is the simplest important example.
- XOR motivates hidden representations and multi-layer networks.
