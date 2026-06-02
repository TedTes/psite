---
title: "Bias"
excerpt: "Bias is systematic error caused by assumptions that make a model too limited for the real pattern."
date: 2026-05-01
tags:
  - Foundations
  - Learning Theory
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Generalization and Learning Theory"
chapterSlug: generalization-and-learning-theory
chapterOrder: 21
topicOrder: 8
---

# Bias

## Definition

In learning theory, bias means systematic error from the model's assumptions.

Simple form:

```text
model assumption misses the real pattern -> consistent error
```

This is not the same as social bias, though models can have that too.

Here, bias means error caused by a limited or mismatched model form.

> Bias is systematic error from simplifying assumptions.

---

## Why Bias Exists

Every model makes assumptions.

Examples:

```text
linear model assumes a linear relationship
small model assumes a limited set of transformations
architecture assumes certain information flow
```

These assumptions help learning, but they can also be wrong for the task.

> Bias comes from the model's chosen way of representing patterns.

---

## High Bias

High bias means the model is too restricted to capture the true pattern well.

Example:

```text
real pattern:
curved

model:
straight line
```

The model may make similar errors even with more training data.

> High bias often leads to underfitting.

---

## Bias Is Not Always Bad

Some bias is necessary.

Without assumptions, the model has no guidance about what patterns to prefer.

Example:

```text
convolution prefers local repeated patterns
attention allows relevance-based interaction
regularization prefers simpler solutions
```

Useful assumptions can improve generalization.

> Bias becomes a problem when the assumption is wrong for the task.

---

## Bias And Generalization

Good generalization requires the right kind of bias.

The model must prefer patterns that are likely to hold beyond the training data.

Bad bias pushes the model toward a wrong structure.

Useful bias pushes it toward reusable structure.

> Generalization depends on assumptions that match the problem.

---

## Final Summary

- Bias is systematic error from model assumptions.
- High bias usually means the model is too limited.
- Bias can cause underfitting.
- Some bias is necessary for learning.
- Useful bias helps the model prefer reusable patterns.
