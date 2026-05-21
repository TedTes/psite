---
title: "Feature Hierarchy"
excerpt: "A feature hierarchy is a layered structure where later features build from earlier learned signals."
date: 2026-05-01
tags:
  - Foundations
  - Representation
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Deep Representations"
chapterSlug: deep-representations
chapterOrder: 17
topicOrder: 5
---

# Feature Hierarchy

## Definition

A feature hierarchy is a layered organization of learned signals.

Earlier layers learn simpler signals.

Later layers combine earlier signals into more task-relevant signals.

Basic pattern:

```text
simple features -> combined features -> task-specific features
```

> A feature hierarchy is representation built in stages.

---

## What Is A Feature

A feature is a signal used by the model.

It can be:

```text
an input value
a hidden layer value
a combination of earlier values
```

In deep networks, many features are learned rather than manually specified.

> A feature is any useful signal for the model's computation.

---

## Why Hierarchy Matters

Complex patterns can be easier to represent if they are built from simpler parts.

Example:

```text
simple signals
-> combinations
-> larger patterns
-> final decision
```

This does not mean every network always forms a clean human-readable hierarchy.

It means the architecture allows later layers to build on earlier layer outputs.

> Hierarchy means later representations depend on earlier representations.

---

## Hierarchy Is Learned

The hierarchy is not usually written by hand.

Training shapes it through loss.

```text
loss -> gradients -> parameter updates -> changed features
```

If a feature helps reduce loss, training can strengthen the parameters that produce it.

> Feature hierarchies emerge from repeated learned transformations.

---

## Final Summary

- A feature hierarchy builds later signals from earlier signals.
- A feature is a useful signal in the model.
- Earlier layers can produce simpler features.
- Later layers can combine them into more task-relevant features.
- The hierarchy is shaped by training.
- It may not always be cleanly interpretable by humans.
