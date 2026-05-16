---
title: "KL Divergence"
excerpt: "KL divergence measures the extra surprise caused by using one distribution to approximate another."
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
topicOrder: 8
---

# KL Divergence

## Definition

KL divergence measures how different one probability distribution is from another.

More intuitively:

```text
KL divergence = extra surprise from using the wrong distribution
```

> KL divergence measures distribution mismatch.

---

## Two Distributions

KL divergence compares:

```text
true distribution
approximate distribution
```

Example:

```text
target distribution: what reality follows
model distribution: what the model predicts
```

If they match closely, KL divergence is low.

If they differ strongly, KL divergence is high.

> KL divergence evaluates how poorly one distribution stands in for another.

---

## Extra Surprise

Suppose the true distribution expects `A` often.

But the model gives `A` low probability.

Then outcomes from the true distribution become surprising under the model.

That extra surprise is what KL divergence captures.

> Bad probability assignment creates extra surprise.

---

## KL Divergence Is Not Symmetric

Usually:

```text
KL(P || Q) != KL(Q || P)
```

This means the direction matters.

Using `Q` to approximate `P` is not the same as using `P` to approximate `Q`.

> KL divergence is directional mismatch, not ordinary distance.

---

## KL Divergence Cannot Be Negative

KL divergence is always:

```text
>= 0
```

If the two distributions are identical:

```text
KL = 0
```

The more they differ, the larger the divergence.

> Zero KL divergence means no mismatch between the distributions.

---

## KL Divergence vs Cross-Entropy

Cross-entropy measures how surprising target outcomes are under the model.

KL divergence measures the extra surprise beyond the target distribution's own uncertainty.

Relationship idea:

```text
cross-entropy = entropy + KL divergence
```

So cross-entropy includes:

```text
unavoidable target uncertainty
plus
model mismatch
```

> KL divergence isolates the mismatch part.

---

## Why KL Matters For Learning

Learning often tries to make a model distribution closer to a target distribution.

Examples:

```text
predicted labels vs true labels
student model vs teacher model
approximate distribution vs desired distribution
```

KL divergence gives a way to measure that mismatch.

> KL divergence is useful when learning is distribution matching.

---

## Final Summary

- KL divergence measures mismatch between distributions.
- It can be understood as extra surprise from using the wrong distribution.
- It is directional, not symmetric.
- It is always nonnegative.
- It is zero only when distributions match.
- Cross-entropy includes entropy plus KL divergence.
- Learning can use KL divergence to compare model and target distributions.
