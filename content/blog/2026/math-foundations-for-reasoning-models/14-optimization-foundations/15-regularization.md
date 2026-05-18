---
title: "Regularization"
excerpt: "Regularization adds constraints or penalties so optimization prefers solutions that generalize better."
date: 2026-05-01
tags:
  - Foundations
  - Optimization
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Optimization Foundations"
chapterSlug: optimization-foundations
chapterOrder: 14
topicOrder: 15
---

# Regularization

## Definition

Regularization is a way to guide optimization so the model does not fit the training examples too narrowly.

It adds a preference or constraint.

Example:

```text
minimize training loss
but also prefer simpler parameter settings
```

> Regularization shapes what kind of solution optimization prefers.

---

## Why It Is Needed

If optimization only reduces training loss, the model may overfit.

Regularization adds another pressure.

```text
training loss says:
fit the examples

regularization says:
do not fit them in an overly specific way
```

The objective becomes more careful.

> Regularization helps prevent training success from becoming too narrow.

---

## Regularization as Penalty

One way to regularize is to add a penalty to the objective.

Example:

```text
objective = loss + penalty
```

The penalty may discourage parameter settings that are too large, too complex, or too sensitive.

This means a parameter setting must be good enough on training loss while also satisfying the regularization preference.

> A regularization penalty changes what counts as a good parameter setting.

---

## Regularization as Constraint

Regularization can also act like a constraint.

Example:

```text
allowed:
parameter settings that stay within a preferred range

discouraged:
parameter settings that become too extreme
```

The optimizer still searches, but the search is shaped by the constraint.

> Regularization narrows or reshapes the search through parameter space.

---

## What Regularization Is Trying to Preserve

Regularization is not about making training loss as low as possible at all costs.

It tries to preserve behavior that transfers.

Useful solutions often capture broad structure rather than accidental detail.

```text
broad structure -> more likely to generalize
training-specific detail -> more likely to overfit
```

> Regularization encourages reusable structure over training-specific memorization.

---

## Final Summary

- Regularization guides optimization with penalties or constraints.
- It helps reduce overfitting.
- It changes the objective from pure training loss to a more careful target.
- Regularization can discourage overly complex or extreme parameter settings.
- It shapes the search through parameter space.
- The goal is better behavior on new examples, not just lower training loss.
