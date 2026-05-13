---
title: "Probability Mass Function"
excerpt: "A probability mass function assigns probabilities to individual discrete values."
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
topicOrder: 3
---

# Probability Mass Function

## Definition

A probability mass function assigns probabilities to individual discrete values.

Short form:

```text
PMF
```

Example:

```text
X = die roll
```

PMF:

```text
P(X = 1) = 1/6
P(X = 2) = 1/6
P(X = 3) = 1/6
P(X = 4) = 1/6
P(X = 5) = 1/6
P(X = 6) = 1/6
```

> PMF = probability table for discrete outcomes.

---

## Why Mass?

The word "mass" means probability is placed on specific values.

For a discrete random variable, each possible value can receive its own probability.

Example:

```text
P(X = 3) = 1/6
```

The value `3` itself has probability mass.

> Discrete probability can sit directly on individual values.

---

## Valid PMF

A valid PMF must satisfy:

```text
each probability >= 0
all probabilities add to 1
```

Example:

```text
0.2 + 0.3 + 0.5 = 1.0
```

Invalid:

```text
0.2 + 0.3 + 0.7 = 1.2
```

The total probability cannot exceed `1`.

> A PMF must distribute all probability across possible discrete values.

---

## PMF As A Function

A PMF can be written as a function.

Example:

```text
p(x) = P(X = x)
```

For a fair die:

```text
p(1) = 1/6
p(2) = 1/6
...
p(6) = 1/6
```

The function takes a possible value and returns its probability.

> A PMF maps values to probabilities.

---

## PMF vs Distribution

A probability distribution is the general idea.

A PMF is one way to represent a distribution for discrete variables.

```text
distribution -> general structure of uncertainty
PMF -> discrete distribution as value-probability assignments
```

> A PMF is a discrete probability distribution.

---

## PMF In Classification

For classification, labels are discrete.

Example:

```text
Y = category
```

Possible values:

```text
bug
feature
question
```

A model can output:

```text
P(Y = bug) = 0.7
P(Y = feature) = 0.2
P(Y = question) = 0.1
```

This behaves like a PMF over labels.

> Classification probabilities form a distribution over discrete classes.

---

## Final Summary

- A PMF assigns probabilities to discrete values.
- Each probability must be nonnegative.
- All probabilities must add to 1.
- A PMF maps a possible value to its probability.
- PMF is the discrete form of a probability distribution.
- Classification outputs can be viewed as PMFs over labels.
