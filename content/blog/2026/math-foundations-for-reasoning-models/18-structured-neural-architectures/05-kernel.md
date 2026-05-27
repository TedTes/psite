---
title: "Kernel"
excerpt: "A kernel is the small set of weights a convolution applies to each local region."
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
topicOrder: 5
---

# Kernel

## Definition

A kernel is the small set of weights used by a convolution.

It defines the size and values of the local pattern being applied.

Example:

```text
3 values in a row
3 by 3 values in a grid
```

> A kernel is the weight structure of a convolution filter.

---

## Kernel vs Filter

The words kernel and filter are often used closely.

For this chapter:

```text
kernel:
the small weight window

filter:
the learned pattern detector using that kernel
```

In many practical discussions, people use them almost interchangeably.

> Kernel emphasizes the weight window; filter emphasizes the pattern detector.

---

## Kernel Size

Kernel size determines how much local context is used at once.

Examples:

```text
small kernel:
uses a small neighborhood

larger kernel:
uses a larger neighborhood
```

A larger kernel can see more local information, but it also uses more parameters.

> Kernel size controls local context.

---

## Sliding The Kernel

The kernel is moved across the input.

At each position:

```text
kernel weights combine with local input values
produce one response
```

Repeating this across positions creates a feature map.

> A convolution applies the kernel repeatedly across the input.

---

## Final Summary

- A kernel is a small weight window used in convolution.
- It defines the local pattern size.
- Kernel and filter are closely related terms.
- Kernel size controls how much local context is used.
- The kernel slides across the input.
- Its responses form a feature map.
