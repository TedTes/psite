---
title: "Feature Map"
excerpt: "A feature map records where and how strongly a learned filter responds across an input."
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
topicOrder: 9
---

# Feature Map

## Definition

A feature map is the output produced by applying a filter across an input.

Basic pattern:

```text
input -> filter -> feature map
```

Each value in the feature map is a response.

> A feature map shows where a learned pattern appears.

---

## What Values Mean

A feature map value measures how strongly the filter responded at a position.

Example:

```text
high value -> strong match
low value -> weak match
```

The feature map keeps this response across many positions.

> Feature maps preserve pattern strength by location.

---

## Multiple Feature Maps

A convolutional layer usually has multiple filters.

Each filter produces its own feature map.

Example:

```text
filter 1 -> feature map 1
filter 2 -> feature map 2
filter 3 -> feature map 3
```

Together, these maps represent multiple learned signals.

> Multiple feature maps store multiple pattern responses.

---

## Feature Map As Representation

A feature map is an internal representation.

It is not the final answer by itself.

It gives later layers structured information.

```text
input -> feature maps -> later layers -> output
```

Later layers can combine feature maps into more task-relevant representations.

> Feature maps are intermediate structured representations.

---

## Final Summary

- A feature map is produced by applying a filter across an input.
- It stores response strength at positions.
- High values mean stronger filter response.
- Multiple filters produce multiple feature maps.
- Feature maps are internal representations.
- Later layers combine feature maps into higher-level signals.
