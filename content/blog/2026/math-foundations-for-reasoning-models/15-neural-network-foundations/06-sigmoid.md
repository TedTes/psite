---
title: "Sigmoid"
excerpt: "Sigmoid is an activation function that squashes any score into a value between 0 and 1."
date: 2026-05-01
tags:
  - Foundations
  - Neural Networks
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Neural Network Foundations"
chapterSlug: neural-network-foundations
chapterOrder: 15
topicOrder: 6
---

# Sigmoid

## Definition

Sigmoid is an activation function that maps any input score into a value between 0 and 1.

Basic behavior:

```text
very negative score -> close to 0
score near 0 -> around 0.5
very positive score -> close to 1
```

> Sigmoid compresses scores into the range from 0 to 1.

---

## Simple Interpretation

Sigmoid can be useful when an output should act like a soft yes/no value.

Example:

```text
0.01 -> very low
0.50 -> uncertain middle
0.99 -> very high
```

It does not make the value automatically true probability in every context.

But it gives a bounded value that can be interpreted that way when the model is designed for it.

> Sigmoid turns unbounded scores into bounded signals.

---

## Why Squashing Matters

A weighted sum can become very large or very small.

Sigmoid squashes that score.

```text
score = 100 -> output close to 1
score = -100 -> output close to 0
```

The output stays in a fixed range.

> Sigmoid controls the output range.

---

## Saturation

Sigmoid changes slowly when scores are very large or very negative.

Example:

```text
score 10 -> output close to 1
score 20 -> output still close to 1
```

The output does not change much.

This is called saturation.

> Saturation means large score changes produce small output changes.

---

## Final Summary

- Sigmoid maps scores into the range from 0 to 1.
- Negative scores move toward 0.
- Positive scores move toward 1.
- Scores near 0 map near 0.5.
- Sigmoid is useful for bounded outputs.
- Very large or very small scores can saturate.
