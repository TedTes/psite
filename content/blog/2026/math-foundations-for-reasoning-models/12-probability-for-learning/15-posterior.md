---
title: "Posterior"
excerpt: "A posterior is the updated probability after evidence has been observed."
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
topicOrder: 15
---

# Posterior

## Definition

A posterior is the updated probability after observing evidence.

In Bayes theorem:

```text
P(H | E)
```

is the posterior probability of hypothesis `H` given evidence `E`.

> Posterior = probability after evidence.

---

## Prior To Posterior

Bayesian updating moves from:

```text
prior -> evidence -> posterior
```

Example:

```text
P(spam) -> observe message words -> P(spam | words)
```

The posterior is the revised probability after using the evidence.

> The posterior is the result of updating.

---

## Simple Example

Let:

```text
H = message is spam
E = message contains suspicious phrase
```

Posterior:

```text
P(spam | suspicious phrase)
```

This is the probability the message is spam after seeing the phrase.

> Posterior probability depends on both prior and evidence.

---

## Posterior Uses More Than Likelihood

A high likelihood does not automatically mean a high posterior.

Bayes theorem combines:

```text
prior
likelihood
evidence probability
```

If the prior is very low, the posterior may still be moderate.

> Posterior is updated belief, not evidence fit alone.

---

## Posterior As A Distribution

The posterior can be a full distribution over hypotheses.

Example:

```text
H1: 0.7
H2: 0.2
H3: 0.1
```

This says evidence made `H1` most likely, but uncertainty remains.

> Posterior distributions preserve uncertainty after evidence.

---

## Why Posterior Matters For Learning

Learning can be viewed as updating beliefs from data.

Before data:

```text
many explanations are possible
```

After data:

```text
some explanations become more likely
```

The posterior captures this updated uncertainty.

> A posterior represents what the data has taught the system.

---

## Posterior vs Final Certainty

A posterior does not always mean certainty.

Example:

```text
P(H | E) = 0.65
```

The hypothesis is more likely than before, but not guaranteed.

> Posterior probability can still represent uncertainty.

---

## Final Summary

- A posterior is probability after observing evidence.
- It is written as `P(H | E)`.
- It results from updating a prior with evidence.
- It is not the same as likelihood.
- A posterior can be a distribution over hypotheses.
- Learning can be interpreted as updating beliefs from data.
