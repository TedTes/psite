---
title: "Bridge to Information Theory"
excerpt: "Probability describes uncertainty; information theory measures uncertainty, surprise, and mismatch."
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
topicOrder: 18
---

# Bridge To Information Theory

## Where We Are

This chapter introduced probability as the language of uncertainty.

The progression was:

```text
random variable -> distribution -> expectation -> uncertainty over outcomes
```

Then we added:

```text
conditional probability
Bayes theorem
likelihood
model output as distribution
```

> Probability lets us describe uncertain outcomes in structured form.

---

## What Probability Added

Probability gave us a way to say:

```text
which outcomes are possible
how likely each outcome is
how variables relate
how evidence changes belief
how models can output uncertainty
```

This is necessary because learning rarely operates with complete certainty.

> Probability turns uncertainty into a mathematical object.

---

## Why Probability Is Not Enough

Probability tells us how likely something is.

But learning also needs to measure:

```text
how surprising an outcome is
how uncertain a distribution is
how different two distributions are
how much information is gained
how costly a wrong probability assignment is
```

Those questions lead to information theory.

> Information theory measures the meaning of probability assignments for uncertainty and error.

---

## Surprise

An unlikely event carries more surprise than a likely event.

Example:

```text
P(event) = 0.9 -> low surprise
P(event) = 0.01 -> high surprise
```

Information theory gives a way to measure that surprise.

> Surprise connects probability to information.

---

## Uncertainty Of A Distribution

Some distributions are very certain.

Example:

```text
A: 0.99
B: 0.01
```

Others are uncertain.

Example:

```text
A: 0.5
B: 0.5
```

Information theory measures this uncertainty using entropy.

> Entropy measures how uncertain a distribution is.

---

## Mismatch Between Distributions

Learning often compares:

```text
target distribution
predicted distribution
```

If the model assigns low probability to the correct outcome, the mismatch is large.

Information theory gives tools for measuring this mismatch.

Examples:

```text
cross-entropy
KL divergence
```

> Loss can be understood as information mismatch.

---

## Bridge Question

The next chapter begins with:

```text
What is information?
```

Then it builds toward:

```text
bit
self-information
surprise
entropy
cross-entropy
KL divergence
loss function
negative log likelihood
```

These ideas connect probability to learning objectives.

> Probability describes uncertainty; information theory measures it.

---

## Final Summary

- Probability describes uncertainty over outcomes.
- Conditional probability describes uncertainty under context.
- Likelihood measures how well data fits a hypothesis.
- Model outputs can be distributions.
- Information theory measures surprise, uncertainty, and distribution mismatch.
- The next chapter connects probability to loss through information.
