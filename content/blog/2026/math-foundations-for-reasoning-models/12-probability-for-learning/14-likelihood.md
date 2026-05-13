---
title: "Likelihood"
excerpt: "Likelihood measures how well a hypothesis or parameter setting explains the observed data."
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
topicOrder: 14
---

# Likelihood

## Definition

Likelihood measures how well a hypothesis or parameter setting explains observed data.

In Bayes theorem:

```text
P(E | H)
```

is the likelihood of evidence `E` under hypothesis `H`.

> Likelihood = how expected the data is if the hypothesis were true.

---

## Simple Example

Let:

```text
H = message is spam
E = message contains "free money"
```

Likelihood:

```text
P(E | H)
```

means:

```text
probability of seeing "free money" if the message is spam
```

If spam messages often contain that phrase, the likelihood is high.

> Likelihood asks whether the evidence fits the hypothesis.

---

## Likelihood vs Probability Of Hypothesis

These are different:

```text
P(E | H)
P(H | E)
```

Likelihood:

```text
How likely is the evidence if the hypothesis is true?
```

Posterior:

```text
How likely is the hypothesis after seeing the evidence?
```

> Likelihood is not the same as posterior probability.

---

## Likelihood For Parameters

In learning, a hypothesis can be a parameter setting.

Example:

```text
parameters = w
data = D
```

Likelihood:

```text
P(D | w)
```

means:

```text
how likely the observed data is under parameters w
```

> Parameters are judged by how well they explain observed data.

---

## High Likelihood

High likelihood means the observed data is expected under the hypothesis.

Example:

```text
hypothesis predicts rain
evidence shows rain
```

The evidence fits the hypothesis.

> High likelihood means good fit to observed evidence.

---

## Low Likelihood

Low likelihood means the observed data is surprising under the hypothesis.

Example:

```text
hypothesis predicts clear sky
evidence shows heavy rain
```

The evidence does not fit well.

> Low likelihood means poor fit to observed evidence.

---

## Why Likelihood Matters For Learning

Learning can be framed as finding parameters that make the observed data likely.

Basic goal:

```text
choose parameters that assign high probability to the data we actually saw
```

This leads to maximum likelihood estimation.

> Likelihood connects data fitting to probability.

---

## Final Summary

- Likelihood measures how well a hypothesis explains evidence.
- In Bayes theorem, likelihood is `P(E | H)`.
- Likelihood is not the same as posterior probability.
- Parameters can be treated as hypotheses.
- High likelihood means the observed data fits the hypothesis.
- Learning can search for parameters with high likelihood.
