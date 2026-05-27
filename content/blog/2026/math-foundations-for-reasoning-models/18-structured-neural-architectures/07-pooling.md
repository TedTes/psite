---
title: "Pooling"
excerpt: "Pooling summarizes nearby feature values to reduce detail while keeping useful local signals."
date: 2026-05-01
tags:
  - Foundations
  - Neural Architectures
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Structured Neural Architectures"
chapterSlug: structured-neural-architectures
chapterOrder: 18
topicOrder: 7
---

# Pooling

## Definition

Pooling is an operation that summarizes nearby values.

Basic idea:

```text
local group of values -> summary value
```

Example summaries:

```text
maximum value
average value
```

> Pooling reduces local detail into a smaller representation.

---

## Why Pooling Is Used

Pooling can reduce the size of a representation.

Example:

```text
large feature map -> smaller feature map
```

This can reduce computation and make later layers work with more compact information.

> Pooling compresses local feature information.

---

## Max Pooling

Max pooling takes the largest value in a local region.

Example:

```text
[0.1, 0.7, 0.2, 0.4] -> 0.7
```

This keeps the strongest local response.

> Max pooling asks which feature response was strongest nearby.

---

## Average Pooling

Average pooling takes the average of nearby values.

Example:

```text
[0.1, 0.7, 0.2, 0.4] -> 0.35
```

This preserves a smoother summary of the region.

> Average pooling summarizes the overall local response.

---

## Final Summary

- Pooling summarizes nearby feature values.
- It can reduce representation size.
- Max pooling keeps the strongest local response.
- Average pooling keeps an average local response.
- Pooling removes some detail while preserving useful signals.
- It is often used with convolutional representations.
