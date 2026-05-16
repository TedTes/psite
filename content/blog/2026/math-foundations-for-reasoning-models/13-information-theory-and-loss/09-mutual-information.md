---
title: "Mutual Information"
excerpt: "Mutual information measures how much knowing one variable reduces uncertainty about another."
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
topicOrder: 9
---

# Mutual Information

## Definition

Mutual information measures how much knowing one variable reduces uncertainty about another variable.

Basic question:

```text
If I know X, how much less uncertain am I about Y?
```

> Mutual information measures shared information between variables.

---

## Simple Example

Let:

```text
X = sky condition
Y = rain or no rain
```

Knowing the sky is cloudy may reduce uncertainty about rain.

If it does, then `X` and `Y` share information.

> One variable can carry information about another.

---

## High Mutual Information

High mutual information means one variable is very informative about the other.

Example:

```text
X = exact duplicate of Y
```

Knowing `X` tells you `Y`.

Uncertainty about `Y` drops strongly.

> High mutual information means strong uncertainty reduction.

---

## Low Mutual Information

Low mutual information means knowing one variable tells little about the other.

Example:

```text
X = coin flip result
Y = tomorrow's temperature
```

Knowing the coin flip does not help much with the temperature.

> Low mutual information means weak shared information.

---

## Mutual Information And Independence

If two variables are independent, knowing one does not reduce uncertainty about the other.

So:

```text
independent variables -> mutual information = 0
```

If mutual information is greater than zero, there is some dependency.

> Mutual information detects dependence through uncertainty reduction.

---

## Mutual Information vs Covariance

Covariance measures linear co-movement.

Mutual information measures general dependence through uncertainty.

This means mutual information can detect relationships that covariance may miss.

Example:

```text
nonlinear relationship
```

may have low covariance but still carry information.

> Mutual information is broader than covariance.

---

## Why Mutual Information Matters For Learning

Learning depends on useful information in inputs.

Example:

```text
feature X helps predict label Y
```

If a feature has high mutual information with the label, it may be useful.

If it has low mutual information, it may add little.

> Useful features reduce uncertainty about what the model should predict.

---

## Final Summary

- Mutual information measures shared information between variables.
- It asks how much knowing one variable reduces uncertainty about another.
- High mutual information means strong dependence.
- Independent variables have zero mutual information.
- Mutual information is broader than covariance.
- Learning uses informative features to reduce uncertainty about targets.
