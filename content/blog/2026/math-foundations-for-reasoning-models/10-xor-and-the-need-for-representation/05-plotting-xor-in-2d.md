---
title: "Plotting XOR in 2D"
excerpt: "Plotting XOR in 2D shows why its classes cannot be separated by one straight line."
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
topicOrder: 5
---

# Plotting XOR In 2D

## Definition

Plotting XOR in 2D means treating each input pair as a point.

Input:

```text
[x1, x2]
```

Coordinates:

```text
x1 = horizontal position
x2 = vertical position
```

> XOR inputs can be plotted as four points in a square.

---

## The Four Points

XOR has four possible inputs:

```text
[0, 0]
[0, 1]
[1, 0]
[1, 1]
```

These are the four corners of a square.

Each point has a class label:

```text
[0, 0] -> 0
[0, 1] -> 1
[1, 0] -> 1
[1, 1] -> 0
```

> XOR places labels on the corners of a 2D square.

---

## Text Plot

One way to view it:

```text
x2
1     class 1: [0,1]     class 0: [1,1]

0     class 0: [0,0]     class 1: [1,0]

      0                  1            x1
```

The class `1` points are on one diagonal.

The class `0` points are on the other diagonal.

> XOR creates a diagonal class pattern.

---

## What A Linear Classifier Needs

A linear classifier needs one line that separates the classes.

In 2D, the boundary is:

```text
w1*x1 + w2*x2 + b = 0
```

One side of the line is class `1`.

The other side is class `0`.

> A linear classifier gets one straight line.

---

## Why The Plot Matters

Looking at the plot reveals the problem.

Class `0` is not all on one side.

Class `1` is not all on one side.

They alternate across the square.

Any straight line that separates one positive point tends to put the other positive point with a negative point.

> The 2D plot makes the failure visible.

---

## Diagonal Separation Is Not Linear Separation

The classes are separated by diagonals as a pattern.

But a single straight line cannot put both class `1` points on one side and both class `0` points on the other.

The issue is not that the points are hard to list.

The issue is the geometry of their arrangement.

> XOR is simple logically, but not linearly separable geometrically.

---

## Why This Matters

The plot connects truth tables to geometry.

The truth table tells the rule.

The plot tells whether a linear boundary can represent it.

For XOR:

```text
truth table is simple
linear boundary is insufficient
```

> Plotting shows the representational limit of one linear classifier.

---

## Final Summary

- XOR inputs can be plotted in 2D.
- The four inputs are corners of a square.
- Class `1` points are opposite corners.
- Class `0` points are the other opposite corners.
- A linear classifier has one straight boundary.
- No single straight line separates the XOR classes.
- The plot exposes linear inseparability.
