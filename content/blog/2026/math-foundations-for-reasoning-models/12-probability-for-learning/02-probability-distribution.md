---
title: "Probability Distribution"
excerpt: "A probability distribution describes how probability is assigned across possible values of a random variable."
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
topicOrder: 2
---

# Probability Distribution

## Definition

A probability distribution describes how probability is assigned across possible values of a random variable.

Example:

```text
X = result of a fair coin flip
```

Distribution:

```text
P(X = heads) = 0.5
P(X = tails) = 0.5
```

> Probability distribution = structure of uncertainty over possible values.

---

## Why A Distribution Is Needed

A random variable tells what can vary.

A distribution tells how likely each possibility is.

Example:

```text
X = die roll
```

Possible values:

```text
1, 2, 3, 4, 5, 6
```

For a fair die:

```text
each value has probability 1/6
```

> A random variable names the uncertainty; a distribution describes it.

---

## Probabilities Must Be Valid

For discrete outcomes, probabilities must obey two rules:

```text
each probability is between 0 and 1
all probabilities add to 1
```

Example:

```text
P(heads) = 0.5
P(tails) = 0.5
total = 1.0
```

> A distribution must account for all possible outcomes.

---

## Uneven Distribution

Not all distributions are uniform.

Example:

```text
P(rain) = 0.8
P(no rain) = 0.2
```

One outcome is more likely than the other.

The possible values are the same, but the probabilities are different.

> A distribution can express unequal likelihood.

---

## Distribution vs Single Prediction

A single prediction gives one answer.

Example:

```text
rain
```

A distribution gives uncertainty across answers.

Example:

```text
rain: 0.8
no rain: 0.2
```

> A distribution carries more information than a single hard decision.

---

## Distribution Over Labels

In classification, a model may output probabilities over labels.

Example:

```text
bug report: 0.7
feature request: 0.2
question: 0.1
```

This says the model is most confident in `bug report`, but not completely certain.

> Model outputs can be distributions over possible labels.

---

## Why Distributions Matter For Learning

Learning often means improving the predicted distribution.

A model should assign higher probability to correct outcomes and lower probability to incorrect ones.

This connects probability to loss later.

> Learning can be seen as shaping probability distributions toward better predictions.

---

## Final Summary

- A probability distribution assigns probability across possible values.
- A random variable names the uncertain quantity.
- A distribution describes how likely each value is.
- Valid discrete probabilities are between 0 and 1 and add to 1.
- Distributions can be uniform or uneven.
- Model outputs can be probability distributions over labels.
