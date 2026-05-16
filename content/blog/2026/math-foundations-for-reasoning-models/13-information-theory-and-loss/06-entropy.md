---
title: "Entropy"
excerpt: "Entropy measures the average uncertainty or expected surprise of a probability distribution."
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
topicOrder: 6
---

# Entropy

## Definition

Entropy measures the average uncertainty of a probability distribution.

Another way to say it:

```text
entropy = expected surprise
```

> Entropy measures how uncertain a distribution is before observing the outcome.

---

## Low Entropy

A distribution has low entropy when one outcome is very likely.

Example:

```text
A: 0.99
B: 0.01
```

There is little uncertainty.

We almost know the outcome before observing it.

> Low entropy means high certainty.

---

## High Entropy

A distribution has high entropy when probability is spread across possibilities.

Example:

```text
A: 0.5
B: 0.5
```

There is more uncertainty.

Both outcomes are equally plausible.

> High entropy means high uncertainty.

---

## Entropy Uses Self-Information

Self-information measures surprise for one outcome:

```text
-log(p)
```

Entropy averages that surprise across all possible outcomes, weighted by their probabilities.

Basic idea:

```text
entropy = average surprise under the distribution
```

> Entropy is expected self-information.

---

## Entropy Is About The Distribution

Entropy is not about one observed value.

It is about the whole distribution.

Example:

```text
coin with P(heads)=0.5, P(tails)=0.5
```

has higher entropy than:

```text
coin with P(heads)=0.99, P(tails)=0.01
```

> Entropy describes uncertainty before the outcome is known.

---

## Entropy And Labels

Suppose a model outputs:

```text
bug: 0.25
billing: 0.25
feature: 0.25
question: 0.25
```

The model is highly uncertain.

If it outputs:

```text
bug: 0.97
billing: 0.01
feature: 0.01
question: 0.01
```

the entropy is lower.

> Entropy measures uncertainty in predicted label distributions.

---

## Entropy Is Not Accuracy

Low entropy does not guarantee correctness.

A model can be very confident and wrong.

Example:

```text
true label: billing
model: bug 0.99
```

The prediction has low entropy but poor correctness.

> Entropy measures uncertainty, not truth.

---

## Final Summary

- Entropy measures average uncertainty.
- It is expected surprise.
- Low entropy means concentrated probability.
- High entropy means spread-out probability.
- Entropy describes a distribution, not one outcome.
- Low entropy does not guarantee correctness.
- Entropy helps describe uncertainty in model outputs.
