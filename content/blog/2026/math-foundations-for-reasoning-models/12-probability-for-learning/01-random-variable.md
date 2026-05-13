---
title: "Random Variable"
excerpt: "A random variable is a value-producing variable whose result is uncertain before observation."
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
topicOrder: 1
---

# Random Variable

## Definition

A random variable is a variable whose value is uncertain before it is observed.

It represents a possible outcome using a value.

Example:

```text
X = result of a coin flip
```

Possible values:

```text
heads
tails
```

> Random variable = uncertain outcome represented as a value.

---

## Why It Is Called A Variable

It is called a variable because it can take different values.

Example:

```text
X = number shown after rolling a die
```

Possible values:

```text
1, 2, 3, 4, 5, 6
```

Before the roll, we do not know which value `X` will take.

After the roll, the value is observed.

> A random variable names the uncertain quantity we care about.

---

## Random Does Not Mean Patternless

Random does not mean there is no structure.

For a fair die:

```text
each face has probability 1/6
```

The exact result is uncertain.

But the possible values and their probabilities can still be structured.

> Probability studies structured uncertainty, not pure chaos.

---

## Random Variable vs Value

A random variable is the uncertain quantity.

A value is one realized outcome.

Example:

```text
X = die roll
X = 4 after observing the roll
```

Before observation:

```text
X could be 1, 2, 3, 4, 5, or 6
```

After observation:

```text
X has one value
```

> Random variable before observation; value after observation.

---

## Discrete Random Variable

A discrete random variable has separate possible values.

Example:

```text
number of emails received today
```

Possible values:

```text
0, 1, 2, 3, ...
```

The values are countable.

> Discrete random variables take separate values.

---

## Continuous Random Variable

A continuous random variable can take values along a continuum.

Example:

```text
temperature
time
height
```

Possible values are not just separate points.

There can be values between values.

> Continuous random variables take values over a continuous range.

---

## Why Random Variables Matter For Learning

Learning systems often deal with uncertainty.

Example:

```text
X = input features
Y = label
```

The model may not know the correct label with certainty.

Instead, it may estimate probabilities.

> Random variables let us talk about uncertain inputs, labels, and predictions.

---

## Final Summary

- A random variable represents an uncertain outcome as a value.
- It can take different possible values before observation.
- Random does not mean patternless.
- A random variable is not the same as one realized value.
- Random variables can be discrete or continuous.
- Learning uses random variables to reason about uncertain data and labels.
