---
title: "Prior"
excerpt: "A prior is the probability assigned before observing new evidence."
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
topicOrder: 13
---

# Prior

## Definition

A prior is the probability assigned before observing new evidence.

In Bayes theorem:

```text
P(H)
```

is the prior probability of hypothesis `H`.

> Prior = starting probability before new evidence.

---

## Simple Example

Suppose:

```text
H = a message is spam
```

Before reading the message, we may know:

```text
P(spam) = 0.2
```

That is the prior.

It comes before inspecting specific words in the message.

> The prior describes what we believe before seeing the current evidence.

---

## Prior Is Not Guessing Blindly

A prior can come from background information.

Examples:

```text
historical frequency
domain knowledge
previous observations
base rate in data
```

If 20 percent of previous messages were spam, `0.2` may be a reasonable prior.

> A prior can encode known background structure.

---

## Prior And Evidence

Evidence updates the prior.

Basic flow:

```text
prior -> observe evidence -> posterior
```

Example:

```text
P(spam) -> message contains suspicious phrase -> P(spam | phrase)
```

> The prior is the starting point for an update.

---

## Strong Prior

A strong prior means the starting belief is hard to move.

Example:

```text
P(H) is very close to 0 or 1
```

Evidence must be strong to change it substantially.

> Strong priors resist weak evidence.

---

## Weak Prior

A weak prior means the starting belief is less committed.

Example:

```text
several hypotheses start with similar probabilities
```

New evidence can shift the belief more easily.

> Weak priors leave more room for evidence to decide.

---

## Why Priors Matter For Learning

Models often start with assumptions before seeing data.

Examples:

```text
which labels are common
which patterns are likely
which solutions are simpler
```

These assumptions affect learning.

> Learning never starts from nothing; some structure is already present.

---

## Final Summary

- A prior is probability before new evidence.
- It is written as `P(H)`.
- Priors can come from background data or domain knowledge.
- Evidence updates priors into posteriors.
- Strong priors resist weak evidence.
- Weak priors are easier to shift.
- Priors matter because learning begins with assumptions.
