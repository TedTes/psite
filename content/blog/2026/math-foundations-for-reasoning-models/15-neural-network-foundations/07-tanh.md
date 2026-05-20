---
title: "Tanh"
excerpt: "Tanh is an activation function that squashes scores into values between -1 and 1."
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
topicOrder: 7
---

# Tanh

## Definition

Tanh is an activation function that maps scores into values between -1 and 1.

Basic behavior:

```text
very negative score -> close to -1
score near 0 -> close to 0
very positive score -> close to 1
```

> Tanh compresses scores into a centered range.

---

## Tanh vs Sigmoid

Sigmoid outputs values between 0 and 1.

Tanh outputs values between -1 and 1.

```text
sigmoid range: 0 to 1
tanh range: -1 to 1
```

The important difference is that tanh is centered around zero.

> Tanh can represent negative, neutral, and positive activation.

---

## Centered Output

Because tanh is centered at zero, its output can express direction.

Example:

```text
-0.8 -> strong negative signal
 0.0 -> neutral signal
 0.8 -> strong positive signal
```

This can be useful when the next computation benefits from values that can go below and above zero.

> Tanh gives a bounded signal with a negative and positive side.

---

## Saturation

Like sigmoid, tanh can saturate.

When the input score is very large or very negative, the output changes very little.

Example:

```text
large positive score -> output close to 1
even larger score -> still close to 1
```

> Saturation means the output becomes insensitive to further score changes.

---

## Final Summary

- Tanh maps scores into the range from -1 to 1.
- It is centered around zero.
- Negative scores move toward -1.
- Positive scores move toward 1.
- Tanh can express negative, neutral, and positive signals.
- Like sigmoid, tanh can saturate at extreme scores.
