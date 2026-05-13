---
title: "Bayes Theorem"
excerpt: "Bayes theorem shows how to update belief in a hypothesis after observing evidence."
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
topicOrder: 12
---

# Bayes Theorem

## Definition

Bayes theorem describes how to update the probability of a hypothesis after observing evidence.

Basic form:

```text
P(H | E) = P(E | H) * P(H) / P(E)
```

Where:

```text
H = hypothesis
E = evidence
```

> Bayes theorem updates belief using evidence.

---

## What The Terms Mean

```text
P(H)     = prior probability of the hypothesis
P(E | H) = probability of evidence if the hypothesis is true
P(E)     = overall probability of the evidence
P(H | E) = updated probability of the hypothesis given evidence
```

The result `P(H | E)` is the posterior.

> Bayes theorem turns prior belief plus evidence into updated belief.

---

## Simple Example

Let:

```text
H = message is spam
E = message contains the word "free"
```

Bayes theorem asks:

```text
P(spam | contains "free")
```

using:

```text
P(contains "free" | spam)
P(spam)
P(contains "free")
```

> Evidence changes how likely a hypothesis seems.

---

## Why Direction Matters

These are different:

```text
P(E | H)
P(H | E)
```

Example:

```text
P(word appears | spam)
P(spam | word appears)
```

The first asks how likely the evidence is if the hypothesis is true.

The second asks how likely the hypothesis is after seeing the evidence.

> Bayes theorem helps reverse conditional probability correctly.

---

## Evidence Must Be Interpreted With Base Rate

Evidence alone can be misleading.

If a hypothesis is very rare, even strong-looking evidence may not make it likely.

That is why `P(H)` matters.

It is the base probability before seeing the evidence.

> Bayes theorem combines evidence with prior likelihood.

---

## Why Bayes Matters For Learning

Learning often involves updating beliefs from data.

Example:

```text
before data -> many possible explanations
after data -> some explanations become more likely
```

Bayes theorem gives a clean probability rule for this kind of update.

> Data can be treated as evidence that changes probabilities.

---

## Do Not Treat It As Magic

Bayes theorem is not a separate kind of reasoning.

It follows from conditional probability.

It is powerful because it organizes:

```text
prior belief
evidence likelihood
updated belief
```

> Bayes theorem is structured probability updating.

---

## Final Summary

- Bayes theorem updates a hypothesis after evidence.
- It computes `P(H | E)`.
- It uses prior probability, likelihood, and evidence probability.
- `P(E | H)` and `P(H | E)` are not the same.
- Base rates matter.
- Bayes theorem connects probability to learning from evidence.
