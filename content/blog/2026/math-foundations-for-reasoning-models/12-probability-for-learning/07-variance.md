---
title: "Variance"
excerpt: "Variance measures how spread out values are around the mean."
date: 2026-05-01
tags:
  - Foundations
  - Probability
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Probability for Learning"
chapterSlug: probability-for-learning
chapterOrder: 12
topicOrder: 7
---

# Variance

## Definition

Variance measures how spread out values are around the mean.

Basic question:

```text
How far do values usually sit from the average?
```

> Variance = average squared distance from the mean.

---

## Why Mean Is Not Enough

Two datasets can have the same mean but different spread.

Example:

```text
A: 4, 5, 6
B: 0, 5, 10
```

Both have mean:

```text
5
```

But `B` is more spread out.

> Mean tells center; variance tells spread.

---

## How Variance Is Computed

Basic steps:

```text
1. find the mean
2. measure each value's distance from the mean
3. square those distances
4. average the squared distances
```

Squaring prevents positive and negative distances from canceling.

> Variance uses squared deviations from the mean.

---

## Simple Example

Values:

```text
4, 5, 6
```

Mean:

```text
5
```

Distances from mean:

```text
-1, 0, 1
```

Squared distances:

```text
1, 0, 1
```

Average squared distance:

```text
(1 + 0 + 1) / 3 = 2/3
```

> The variance is `2/3`.

---

## Low Variance

Low variance means values are close to the mean.

Example:

```text
9, 10, 11
```

The values cluster tightly.

> Low variance means low spread.

---

## High Variance

High variance means values are far from the mean.

Example:

```text
0, 10, 20
```

The values are spread out.

> High variance means high spread.

---

## Why Variance Matters For Learning

Variance helps describe uncertainty and stability.

Examples:

```text
high variance predictions -> unstable outputs
low variance errors -> consistent behavior
high variance data -> broad range of examples
```

> Variance tells how much values fluctuate around their center.

---

## Final Summary

- Variance measures spread around the mean.
- Mean tells center; variance tells dispersion.
- Variance averages squared distances from the mean.
- Low variance means values are close together.
- High variance means values are spread out.
- Learning uses variance to reason about uncertainty, stability, and data spread.
