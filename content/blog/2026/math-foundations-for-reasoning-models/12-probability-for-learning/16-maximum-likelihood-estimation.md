---
title: "Maximum Likelihood Estimation"
excerpt: "Maximum likelihood estimation chooses parameters that make the observed data most likely."
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
topicOrder: 16
---

# Maximum Likelihood Estimation

## Definition

Maximum likelihood estimation chooses parameters that make the observed data most likely.

Short form:

```text
MLE
```

Basic goal:

```text
choose parameters that maximize P(data | parameters)
```

> MLE = choose the explanation under which the observed data is most probable.

---

## Parameters As Hypotheses

Different parameter values imply different predictions.

Example:

```text
parameter setting A -> data is likely
parameter setting B -> data is unlikely
```

MLE chooses the parameter setting that gives the highest likelihood to the data.

> Parameters are judged by how well they explain observations.

---

## Simple Coin Example

Suppose we flip a coin 10 times and observe:

```text
7 heads
3 tails
```

Possible parameter:

```text
p = probability of heads
```

MLE would choose a value near:

```text
p = 0.7
```

because that makes the observed data most likely.

> MLE fits parameters to observed frequencies.

---

## Likelihood Function

The likelihood function treats the data as fixed and parameters as adjustable.

```text
L(parameters) = P(data | parameters)
```

The question is:

```text
which parameters make L largest?
```

> A likelihood function scores parameter settings by data fit.

---

## Why Log Likelihood Is Often Used

Likelihoods can involve multiplying many probabilities.

Multiplying many small numbers can become hard to work with.

Log likelihood turns products into sums.

```text
maximize likelihood
same parameter choice as
maximize log likelihood
```

> Log likelihood is usually easier to optimize.

---

## MLE And Loss

Learning often minimizes loss instead of directly maximizing likelihood.

A common connection:

```text
minimize negative log likelihood
```

Since maximizing log likelihood is equivalent to minimizing its negative.

> Negative log likelihood turns likelihood maximization into loss minimization.

---

## Why MLE Matters For Learning

Many learning methods can be understood as MLE.

Basic idea:

```text
model assigns probabilities
data is observed
choose parameters that assign high probability to observed data
```

This connects probability to optimization.

> MLE turns learning into probability-based parameter fitting.

---

## Final Summary

- Maximum likelihood estimation chooses parameters that make observed data most likely.
- It maximizes `P(data | parameters)`.
- Parameters are treated as possible explanations.
- Log likelihood is often used because it is easier to optimize.
- Minimizing negative log likelihood is equivalent to maximizing log likelihood.
- MLE connects probability, loss, and optimization.
