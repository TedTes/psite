---
title: "Overfitting"
excerpt: "Overfitting happens when optimization fits the training examples too specifically and loses usefulness on new cases."
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
topicOrder: 13
---

# Overfitting

## Definition

Overfitting happens when a model fits the training examples too specifically.

It performs well on examples it trained on, but poorly on new examples.

Example:

```text
training examples -> very low loss
new examples -> high error
```

> Overfitting means the model learned the training set too narrowly.

---

## Why It Happens

Optimization reduces the objective it is given.

If the objective only rewards training performance, the model may become too specialized to the training examples.

Example:

```text
objective: reduce training loss
result: parameters fit training details very closely
problem: those details may not matter for new examples
```

> Overfitting can happen when low training loss is treated as the whole goal.

---

## Memorizing vs Learning a Pattern

A useful model captures a pattern that transfers.

An overfit model may capture accidental details.

Example:

```text
useful pattern:
general structure shared by many examples

accidental detail:
noise or coincidence in the training examples
```

The accidental detail can reduce training loss, but hurt new-example behavior.

> Overfitting is fitting noise as if it were structure.

---

## Relation to Loss

Overfitting can look good if we only watch training loss.

Example:

```text
training loss: keeps decreasing
new-example error: starts increasing
```

This means optimization is still improving the training objective, but the model is becoming less useful outside the training examples.

> Lower training loss does not always mean better general behavior.

---

## Why Overfitting Matters

The purpose of learning is usually not to repeat the training examples.

The purpose is to handle new cases.

If the model only works on examples it already saw, the learning process has not captured the right structure.

> Overfitting breaks the connection between training success and real usefulness.

---

## Final Summary

- Overfitting means fitting training examples too specifically.
- It gives low training loss but poor new-example behavior.
- It can happen when optimization focuses too narrowly on training loss.
- Overfitting often captures accidental details instead of reusable structure.
- Lower training loss is not always better.
- The real goal is behavior that transfers beyond the training examples.
