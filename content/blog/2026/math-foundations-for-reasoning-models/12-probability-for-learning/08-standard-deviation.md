---
title: "Standard Deviation"
excerpt: "Standard deviation is the square root of variance, giving spread in the original units."
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
topicOrder: 8
---

# Standard Deviation

## Definition

Standard deviation measures spread around the mean in the original units of the data.

It is the square root of variance.

```text
standard deviation = sqrt(variance)
```

> Standard deviation = typical distance from the mean.

---

## Why Not Just Use Variance?

Variance uses squared distances.

If the data is measured in:

```text
meters
```

variance is measured in:

```text
meters squared
```

That can be harder to interpret.

Standard deviation converts spread back into the original unit.

> Standard deviation is often easier to interpret than variance.

---

## Simple Example

Suppose variance is:

```text
9
```

Then standard deviation is:

```text
sqrt(9) = 3
```

This means values typically vary around the mean by about `3` units.

> Standard deviation gives spread in familiar units.

---

## Low Standard Deviation

Low standard deviation means values are close to the mean.

Example:

```text
99, 100, 101
```

The values are tightly grouped.

> Low standard deviation means low spread.

---

## High Standard Deviation

High standard deviation means values are more spread out.

Example:

```text
50, 100, 150
```

The values are farther from the mean.

> High standard deviation means high spread.

---

## Standard Deviation vs Variance

Variance:

```text
average squared distance from mean
```

Standard deviation:

```text
square root of variance
```

Both describe spread.

Standard deviation is usually easier to explain because it uses the original units.

> Variance is mathematically convenient; standard deviation is more interpretable.

---

## Why Standard Deviation Matters For Learning

Standard deviation helps describe how much values fluctuate.

Examples:

```text
feature values vary widely
loss values are unstable
predictions are tightly clustered
```

It is also used in normalization, where values are often centered and scaled.

> Standard deviation helps compare spread across data and model behavior.

---

## Final Summary

- Standard deviation is the square root of variance.
- It measures spread around the mean.
- It uses the original units of the data.
- Low standard deviation means values are tightly grouped.
- High standard deviation means values are spread out.
- It is easier to interpret than variance in many practical cases.
