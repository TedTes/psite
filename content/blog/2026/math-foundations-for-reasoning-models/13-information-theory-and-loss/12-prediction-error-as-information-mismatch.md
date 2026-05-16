---
title: "Prediction Error as Information Mismatch"
excerpt: "Prediction error can be understood as mismatch between what the model expected and what actually occurred."
date: 2026-05-01
tags:
  - Foundations
  - Information Theory
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Information Theory and Loss"
chapterSlug: information-theory-and-loss
chapterOrder: 13
topicOrder: 12
---

# Prediction Error As Information Mismatch

## Definition

Prediction error can be understood as mismatch between what the model expected and what actually occurred.

If a model assigns a distribution:

```text
what it expects
```

and reality reveals:

```text
what happened
```

then error measures the mismatch between the two.

> Prediction error is failed expectation made measurable.

---

## Hard Error vs Probability Error

Hard error asks:

```text
was the final answer correct?
```

Probability error asks:

```text
did the model assign good probability to the true outcome?
```

These are different.

> Probability error evaluates the whole distribution, not only the final choice.

---

## Example

True label:

```text
bug
```

Model output:

```text
bug: 0.4
billing: 0.35
feature: 0.15
question: 0.10
```

The model's top class is correct.

But it was not very confident.

Loss can still reflect uncertainty.

> Correct hard prediction can still have nonzero information mismatch.

---

## Worse Example

True label:

```text
bug
```

Model output:

```text
bug: 0.01
billing: 0.8
feature: 0.1
question: 0.09
```

The true outcome was very surprising under the model.

This creates high loss.

> Low probability on the true outcome means high mismatch.

---

## Information Mismatch

The model's distribution expresses uncertainty.

The observed target reveals what happened.

If the model's uncertainty was aligned with reality, loss is low.

If the model's uncertainty was misaligned, loss is high.

> Loss measures how poorly the model's uncertainty matched the observed outcome.

---

## Why This View Matters

This view is stronger than simply saying:

```text
wrong answer
```

It asks:

```text
how much probability did the model place on what happened?
```

That makes learning smoother because near-misses and confident mistakes can be treated differently.

> Information mismatch gives more training signal than binary correctness.

---

## Connection To Learning

Learning can reduce future mismatch.

Basic loop:

```text
predict distribution
observe outcome
measure mismatch
adjust parameters
predict better distribution next time
```

> Learning improves by reducing repeated information mismatch.

---

## Final Summary

- Prediction error can be viewed as information mismatch.
- The model predicts a distribution.
- Reality reveals an outcome.
- Loss measures how surprising reality was under the model.
- Correct hard predictions can still have probability error.
- Confident wrong predictions create high mismatch.
- This gives learning a richer error signal.
