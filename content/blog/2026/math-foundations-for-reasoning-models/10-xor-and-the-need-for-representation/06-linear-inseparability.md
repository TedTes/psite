---
title: "Linear Inseparability"
excerpt: "Linear inseparability means no single linear boundary can correctly separate the classes."
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
topicOrder: 6
---

# Linear Inseparability

## Definition

Linear inseparability means no single linear boundary can separate the classes correctly.

In 2D:

```text
no single line works
```

For XOR:

```text
class 0: [0,0], [1,1]
class 1: [0,1], [1,0]
```

> XOR is linearly inseparable in its original input space.

---

## What Linear Separability Would Require

Linear separability would require one line such that:

```text
class 1 points are on one side
class 0 points are on the other side
```

For XOR, that means:

```text
[0,1] and [1,0] together
[0,0] and [1,1] together
```

No single line can do that.

> XOR requires separating opposite corners from opposite corners.

---

## Why One Line Fails

The XOR classes alternate around the square.

Move around the square:

```text
[0,0] -> class 0
[1,0] -> class 1
[1,1] -> class 0
[0,1] -> class 1
```

The class changes at every corner.

A single line can split the square into two sides, but it cannot alternate labels around the corners like that.

> A straight line creates two regions, not alternating corner regions.

---

## Boundary Shape Problem

A linear classifier produces a flat boundary.

In 2D:

```text
line
```

XOR needs a decision structure that acts like:

```text
positive in two separated regions
negative in two separated regions
```

One line cannot create two separated positive regions.

> XOR requires more structure than one flat boundary provides.

---

## Not A Training Failure

If one perceptron fails on XOR, it is not just because training was poor.

Even perfect weight search cannot find a single linear boundary that solves XOR.

The needed boundary does not exist in the original 2D representation.

> The failure is representational, not just procedural.

---

## Connection To Features

Linear inseparability depends on the feature space.

In the original features:

```text
x1, x2
```

XOR is not linearly separable.

But if we create a better representation, the classes may become separable.

> Changing representation can change separability.

---

## Why It Matters

Linear inseparability is the reason XOR became important historically and conceptually.

It shows:

```text
simple linear classifiers have real limits
representation can matter more than the final classifier
```

> XOR forces the shift from linear decision rules to representation transformation.

---

## Final Summary

- Linear inseparability means no single linear boundary can separate the classes.
- XOR is linearly inseparable in its original 2D input space.
- XOR classes occupy alternating corners.
- One line cannot create the needed separation.
- The perceptron failure is not just a training failure.
- A different representation can change the problem.
