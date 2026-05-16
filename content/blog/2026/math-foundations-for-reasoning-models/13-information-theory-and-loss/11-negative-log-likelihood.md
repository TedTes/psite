---
title: "Negative Log Likelihood"
excerpt: "Negative log likelihood penalizes a model when it assigns low probability to the observed data."
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
topicOrder: 11
---

# Negative Log Likelihood

## Definition

Negative log likelihood is a loss based on the probability assigned to observed data.

Basic form:

```text
NLL = -log(P(observed data))
```

If the model assigns high probability to the observed data, NLL is low.

If the model assigns low probability, NLL is high.

> Negative log likelihood penalizes being surprised by what actually happened.

---

## Connection To Likelihood

Likelihood asks:

```text
how likely is the observed data under this model?
```

Negative log likelihood turns that into a quantity to minimize.

```text
maximize likelihood
same goal as
minimize negative log likelihood
```

> NLL turns likelihood maximization into loss minimization.

---

## Why Negative Log?

The log makes products of probabilities easier to handle.

The negative sign changes maximization into minimization.

```text
high probability -> low negative log
low probability -> high negative log
```

This matches the usual learning goal:

```text
lower loss is better
```

> Negative log probability becomes a useful error score.

---

## Classification Example

Suppose the true label is:

```text
bug
```

Model A assigns:

```text
P(bug) = 0.9
```

Model B assigns:

```text
P(bug) = 0.01
```

Model A has lower NLL.

Model B has higher NLL.

> The correct outcome should receive high probability.

---

## NLL And Surprise

NLL is the self-information of the observed outcome under the model.

```text
self-information = -log(p)
NLL = -log(probability assigned to observed outcome)
```

So NLL measures surprise.

> Negative log likelihood is model surprise turned into loss.

---

## NLL And Cross-Entropy

For one-hot classification targets, cross-entropy and negative log likelihood are closely aligned.

If the target says the correct class has probability `1`, then cross-entropy reduces to:

```text
-log(probability assigned to correct class)
```

That is negative log likelihood.

> In common classification settings, cross-entropy is NLL for the correct class.

---

## Why NLL Matters For Learning

NLL gives a clear training objective:

```text
assign high probability to observed data
```

It connects:

```text
probability
information
loss
optimization
```

> NLL is one of the main bridges from probability to trainable models.

---

## Final Summary

- Negative log likelihood is `-log(P(observed data))`.
- It is low when observed data has high probability.
- It is high when observed data has low probability.
- It converts likelihood maximization into loss minimization.
- It measures surprise under the model.
- For one-hot classification, it aligns with cross-entropy loss.
