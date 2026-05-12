---
title: "Nonlinear Transformation"
excerpt: "A nonlinear transformation changes the representation in a way that is not limited to one linear map."
date: 2026-05-01
tags:
  - Foundations
  - Representation
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "XOR and the Need for Representation"
chapterSlug: xor-and-the-need-for-representation
chapterOrder: 10
topicOrder: 9
---

# Nonlinear Transformation

## Definition

A nonlinear transformation changes data in a way that is not just one linear map.

A linear transformation preserves:

```text
addition
scalar multiplication
```

A nonlinear transformation can change relationships more flexibly.

Example:

```text
x -> x^2
```

> Nonlinear transformation can reshape the representation.

---

## Why Linear Transformation Is Not Enough

A linear transformation can rotate, scale, project, or mix components.

But if the final classifier is still one linear boundary in the transformed space, a purely linear chain can collapse into one linear transformation.

That means:

```text
linear transformation + linear classifier
```

is still linear overall.

> Stacking only linear transformations does not create nonlinear decision power.

---

## Nonlinearity Changes The Geometry

Nonlinearity can change how points are arranged.

Example idea:

```text
original space: XOR is not linearly separable
new nonlinear representation: XOR can become separable
```

The point is not that the input changed as data.

The representation changed.

> Nonlinearity can make a hard separation easier in a new space.

---

## Example Feature

For XOR, one useful idea is to create a feature that captures interaction between inputs.

Example:

```text
x1 * x2
```

This is not a linear feature because it multiplies two input components.

It adds information about how the inputs relate.

> Nonlinear features can express relationships that raw components do not.

---

## Nonlinear Activation

In neural networks, nonlinear activation functions help create nonlinear transformations.

Basic structure:

```text
weighted sum -> activation -> hidden value
```

If the activation is nonlinear, the hidden representation can become nonlinear.

This lets later layers solve patterns that one linear classifier cannot.

> Nonlinear activation gives layers more representational power.

---

## Why Nonlinearity Matters For XOR

XOR cannot be separated by one line in the original input space.

To solve it, the model needs a representation where the class structure becomes easier.

Nonlinearity helps create that representation.

It allows the model to build intermediate features that are not just weighted sums of raw inputs.

> XOR requires a representational change beyond one linear boundary.

---

## Nonlinear Does Not Mean Unstructured

Nonlinear does not mean random.

A nonlinear transformation is still a rule.

Example:

```text
input -> rule -> transformed output
```

The difference is that the rule is not limited to linear operations.

> Nonlinear transformation is still computation.

---

## Final Summary

- A nonlinear transformation is not limited to one linear map.
- Linear transformations alone do not solve nonlinear separability.
- Nonlinearity can reshape the geometry of the data.
- Nonlinear features can capture interactions.
- Nonlinear activation can create hidden representations.
- XOR motivates nonlinear representation.
- Nonlinear still means rule-based transformation.
