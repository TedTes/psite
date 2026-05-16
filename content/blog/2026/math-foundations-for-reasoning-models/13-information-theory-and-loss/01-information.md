---
title: "Information"
excerpt: "Information reduces uncertainty by distinguishing one possible outcome from others."
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
topicOrder: 1
---

# Information

## Definition

Information is what reduces uncertainty by distinguishing one possible outcome from others.

Example:

```text
Before: message could be bug, billing, feature, or question
After: message is bug
```

The observation removes alternatives.

> Information reduces uncertainty.

---

## Information Is About Distinction

Information depends on what possibilities existed before.

If there is only one possible outcome, observing it gives no new information.

Example:

```text
Only possible value: A
Observed value: A
```

Nothing was uncertain.

But if many outcomes were possible, observing one tells us more.

> Information matters when there are alternatives to distinguish.

---

## Information vs Meaning

Information in this context does not require meaning.

Example:

```text
symbol observed: 10110
```

Even if we do not know what it means, it can still reduce uncertainty among possible symbol sequences.

This continues an earlier idea:

```text
computation can operate on structure without understanding meaning
```

> Information is not the same as semantic meaning.

---

## Probability And Information

Information is connected to probability.

Common intuition:

```text
likely outcome -> less information when observed
unlikely outcome -> more information when observed
```

Example:

```text
sun rises tomorrow -> low information
lottery number wins -> high information
```

> Less expected outcomes carry more information when they occur.

---

## Information As Reduction Of Possibilities

Suppose there are four possible labels:

```text
bug
billing
feature
question
```

If a signal narrows the possibilities to:

```text
bug
billing
```

it has reduced uncertainty.

If another signal identifies:

```text
bug
```

it reduces uncertainty further.

> Information can be understood as narrowing the space of possible states.

---

## Why Information Matters For Learning

Learning systems work with uncertainty.

They receive data that should reduce uncertainty about:

```text
which label is correct
which pattern matters
which parameter setting fits
which prediction is better
```

Information theory gives tools for measuring that reduction.

> Learning uses data as information that reduces uncertainty.

---

## Information And Loss

If a model assigns low probability to the true outcome, the true outcome is surprising under the model.

That surprise can be measured.

High surprise becomes high loss.

Low surprise becomes low loss.

> Loss can measure how badly the model's uncertainty matched reality.

---

## Final Summary

- Information reduces uncertainty.
- It depends on possible alternatives.
- Information does not require semantic meaning.
- Unlikely outcomes carry more information when observed.
- Information narrows possible states or explanations.
- Learning uses data as information.
- Loss can measure information mismatch between prediction and reality.
