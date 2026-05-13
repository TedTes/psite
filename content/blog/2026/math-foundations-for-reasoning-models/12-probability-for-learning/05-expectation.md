---
title: "Expectation"
excerpt: "Expectation is the probability-weighted average value of a random variable."
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
topicOrder: 5
---

# Expectation

## Definition

Expectation is the probability-weighted average value of a random variable.

Basic idea:

```text
possible value * probability of that value
```

then add across possible values.

> Expectation = long-run average implied by a distribution.

---

## Simple Example

Let:

```text
X = coin flip payout
```

Values:

```text
heads -> 1
tails -> 0
```

Fair coin probabilities:

```text
P(heads) = 0.5
P(tails) = 0.5
```

Expectation:

```text
E[X] = 1*0.5 + 0*0.5 = 0.5
```

> The expected payout is `0.5`.

---

## Expectation May Not Be An Actual Outcome

The expected value does not have to be one of the possible outcomes.

In the coin example:

```text
possible values: 0 or 1
expected value: 0.5
```

You never observe half a coin-flip payout in one trial.

But over many trials, the average approaches `0.5`.

> Expectation summarizes many possible outcomes, not one guaranteed outcome.

---

## Weighted Average

Expectation gives more influence to more likely values.

Example:

```text
X = 0 with probability 0.9
X = 10 with probability 0.1
```

Expectation:

```text
E[X] = 0*0.9 + 10*0.1 = 1
```

The rare value `10` affects the expectation, but its low probability limits its weight.

> Expectation is average weighted by probability.

---

## Expectation vs Most Likely Value

Expectation is not always the most likely value.

Example:

```text
X = 0 with probability 0.9
X = 10 with probability 0.1
```

Most likely value:

```text
0
```

Expected value:

```text
1
```

> Expected value and most likely value answer different questions.

---

## Why Expectation Matters For Learning

Learning often optimizes average behavior over data.

Example:

```text
average error across examples
```

That average can be understood as an expectation over the data distribution.

> Expectation connects probability to average performance.

---

## Expected Loss

If loss measures error for one example, expected loss measures average error over possible examples.

Basic shape:

```text
expected loss = average loss under the data distribution
```

Learning often tries to reduce expected loss.

> Expected loss is the probability-weighted error a model is trying to reduce.

---

## Final Summary

- Expectation is a probability-weighted average.
- It summarizes the long-run average implied by a distribution.
- The expected value may not be an actual possible outcome.
- Expectation is not always the most likely value.
- Learning often tries to improve expected behavior over data.
- Expected loss connects probability to optimization.
