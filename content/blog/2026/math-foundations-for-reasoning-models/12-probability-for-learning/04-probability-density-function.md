---
title: "Probability Density Function"
excerpt: "A probability density function describes how probability is distributed over continuous values."
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
topicOrder: 4
---

# Probability Density Function

## Definition

A probability density function describes how probability is distributed over continuous values.

Short form:

```text
PDF
```

Example:

```text
X = height
```

Height can vary continuously, so probability is described over intervals.

> PDF = probability structure for continuous values.

---

## Density Is Not Direct Probability

For continuous variables, the probability of one exact value is usually `0`.

Example:

```text
P(height = exactly 170.000000... cm) = 0
```

This does not mean the value is impossible in ordinary language.

It means probability is spread over a continuum.

> Continuous probability is assigned to intervals, not exact points.

---

## Probability Over An Interval

For a continuous variable, we ask:

```text
P(160 <= X <= 170)
```

not usually:

```text
P(X = 165)
```

The PDF tells how much probability density lies across the interval.

The total probability over an interval is the area under the density curve.

> Interval probability comes from area under the density.

---

## Valid PDF

A valid PDF must satisfy:

```text
density is never negative
total area under the curve is 1
```

The values of the PDF itself do not need to add like discrete probabilities.

The area matters.

> For PDFs, probability is area, not height alone.

---

## PDF vs PMF

PMF:

```text
discrete values
probability on each value
```

PDF:

```text
continuous values
probability over intervals
```

Example:

```text
die roll -> PMF
temperature -> PDF
```

> PMFs assign probability to points; PDFs assign density across ranges.

---

## Why Density Matters For Learning

Some model outputs or data values are continuous.

Examples:

```text
predicted house price
sensor reading
time duration
embedding coordinate
```

For these, uncertainty may be represented as a continuous distribution.

> PDFs help describe uncertainty over continuous quantities.

---

## Avoiding A Common Confusion

The PDF value at a point is not the probability of that point.

Example:

```text
density at x = 5
```

does not mean:

```text
P(X = 5)
```

It helps determine probability around that point through an interval.

> Density at a point is local probability concentration, not direct point probability.

---

## Final Summary

- A PDF describes probability over continuous values.
- Exact point probability is usually 0 for continuous variables.
- Probability is assigned to intervals.
- Interval probability is area under the density curve.
- A valid PDF is nonnegative and has total area 1.
- PMF is for discrete values; PDF is for continuous values.
