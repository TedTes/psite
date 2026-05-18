---
title: "Generalization"
excerpt: "Generalization is the ability of a learned system to work on new examples, not only the examples used for training."
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
topicOrder: 16
---

# Generalization

## Definition

Generalization is the ability to perform well on new examples.

The model does not just repeat the training examples.

It captures structure that applies beyond them.

Example:

```text
training examples -> low loss
new examples -> also good behavior
```

> Generalization means learned behavior transfers.

---

## Why Training Loss Is Not Enough

Training loss measures performance on examples used during training.

But the real test is often new cases.

Example:

```text
training loss: low
new-example error: high
```

This means the model optimized the training objective but did not learn the right reusable structure.

> Low training loss is useful only if it leads to good behavior beyond training.

---

## Generalization vs Memorization

Memorization reproduces seen examples.

Generalization handles unseen examples.

```text
memorization:
works because the example was already seen

generalization:
works because the underlying pattern was learned
```

The difference matters because most useful systems are expected to respond to new inputs.

> Generalization is pattern transfer, not example recall.

---

## Relation to Optimization

Optimization directly reduces an objective.

Generalization asks whether reducing that objective produced useful behavior.

Example:

```text
objective: reduce training loss
desired result: low loss on new examples too
```

If optimization reduces training loss but harms new-example behavior, the optimization target is incomplete or too narrow.

> Generalization connects optimization to real usefulness.

---

## Role of Regularization

Regularization helps generalization by shaping the solution.

It discourages parameter settings that fit training details too specifically.

```text
loss -> fit the data
regularization -> prefer less brittle solutions
```

This can make the learned pattern more likely to transfer.

> Regularization is one tool for making optimization support generalization.

---

## Final Summary

- Generalization means working on new examples.
- Training loss alone does not guarantee generalization.
- Memorization repeats seen examples.
- Generalization captures reusable structure.
- Optimization reduces an objective, but generalization measures broader usefulness.
- Regularization can help optimization find solutions that transfer better.
