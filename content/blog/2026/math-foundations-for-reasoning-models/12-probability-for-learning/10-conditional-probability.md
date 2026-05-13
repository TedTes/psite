---
title: "Conditional Probability"
excerpt: "Conditional probability measures the probability of an event given that another event is known."
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
topicOrder: 10
---

# Conditional Probability

## Definition

Conditional probability measures the probability of one event given that another event is known.

Written as:

```text
P(A | B)
```

Read as:

```text
probability of A given B
```

> Conditional probability updates the probability of one thing using known information.

---

## Simple Example

Let:

```text
A = it rains
B = sky is cloudy
```

Then:

```text
P(A | B)
```

means:

```text
probability it rains, given that the sky is cloudy
```

This may be higher than the general probability of rain.

> Knowing context can change probability.

---

## Conditional vs Unconditional Probability

Unconditional probability:

```text
P(A)
```

means probability of `A` without extra information.

Conditional probability:

```text
P(A | B)
```

means probability of `A` after knowing `B`.

> Conditional probability is probability under context.

---

## Formula

Conditional probability can be written as:

```text
P(A | B) = P(A and B) / P(B)
```

This means:

```text
among cases where B happens,
what fraction also have A?
```

> Conditioning restricts attention to the world where `B` is true.

---

## Example With Counts

Suppose:

```text
100 messages total
40 are bug reports
20 are urgent
10 are both bug reports and urgent
```

Probability a message is urgent given it is a bug report:

```text
P(urgent | bug) = 10 / 40 = 0.25
```

We divide by bug reports, not by all messages.

> The condition changes the reference group.

---

## Why Conditional Probability Matters For Learning

Prediction often asks for conditional probability.

Example:

```text
P(label | input)
```

Read as:

```text
probability of a label given the input
```

This is what many classifiers try to estimate.

> Prediction is often conditional probability estimation.

---

## Conditional Probability And Context

The same outcome can have different probabilities under different conditions.

Example:

```text
P(rain)
P(rain | cloudy)
P(rain | clear sky)
```

Each answers a different question.

> Probability depends on what information is being conditioned on.

---

## Final Summary

- Conditional probability measures probability given known information.
- It is written as `P(A | B)`.
- It differs from unconditional probability `P(A)`.
- Conditioning changes the reference group.
- Prediction often asks for `P(label | input)`.
- Conditional probability connects probability to context.
