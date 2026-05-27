---
title: "Filter"
excerpt: "A filter is a learned pattern used by a convolution to detect a specific local signal."
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
topicOrder: 4
---

# Filter

## Definition

A filter is a learned pattern used in a convolution.

It is applied to small local regions of the input.

Basic idea:

```text
filter + local input region -> response value
```

> A filter detects whether a local pattern is present.

---

## What A Filter Learns

A filter learns weights.

Those weights define what local pattern it responds to.

Example:

```text
filter weights:
some values positive
some values negative
some values near zero
```

The learned weights determine what kind of local structure produces a high response.

> A filter is a trainable local pattern detector.

---

## One Filter, Many Positions

The same filter is applied across many positions.

```text
position 1 -> response
position 2 -> response
position 3 -> response
```

This means the filter can detect the same pattern wherever it appears.

> A filter is reused across the input.

---

## Multiple Filters

A convolutional layer can use many filters.

Each filter can learn a different pattern.

Example:

```text
filter 1 -> detects pattern A
filter 2 -> detects pattern B
filter 3 -> detects pattern C
```

Together, they produce multiple feature maps.

> Multiple filters let a layer detect multiple local patterns.

---

## Final Summary

- A filter is a learned local pattern.
- It is used inside convolution.
- It produces response values at different positions.
- The same filter is reused across the input.
- Multiple filters detect multiple kinds of patterns.
- Filters are learned through training.
