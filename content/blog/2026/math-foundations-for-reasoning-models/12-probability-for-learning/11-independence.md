---
title: "Independence"
excerpt: "Independence means knowing one event does not change the probability of another."
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
topicOrder: 11
---

# Independence

## Definition

Two events are independent if knowing one does not change the probability of the other.

Formal idea:

```text
P(A | B) = P(A)
```

If `B` happened, but the probability of `A` stays the same, then `A` is independent of `B`.

> Independence means one piece of information does not affect the probability of another.

---

## Simple Example

Flip a fair coin twice.

Let:

```text
A = first flip is heads
B = second flip is heads
```

Knowing the first flip was heads does not change the probability of the second flip.

```text
P(B | A) = P(B) = 0.5
```

> Separate fair coin flips are independent.

---

## Dependence

Events are dependent if knowing one changes the probability of the other.

Example:

```text
A = sky is cloudy
B = it rains
```

Knowing it is cloudy may change the probability of rain.

```text
P(rain | cloudy) != P(rain)
```

> Dependence means information changes probability.

---

## Product Rule For Independent Events

If `A` and `B` are independent:

```text
P(A and B) = P(A) * P(B)
```

Example:

```text
P(two heads) = 0.5 * 0.5 = 0.25
```

> Independence lets joint probability factor into separate probabilities.

---

## Independence Is An Assumption

Independence should not be assumed without reason.

Example:

```text
two features in data may influence each other
```

If they are treated as independent when they are not, the model may misread the structure.

> Independence is a strong claim about missing interaction.

---

## Independence vs Uncorrelated

Independence means knowing one variable gives no information about the other.

Uncorrelated usually means no linear relationship.

Variables can be uncorrelated but still dependent in a nonlinear way.

> Independence is stronger than zero covariance.

---

## Why Independence Matters For Learning

Independence affects modeling assumptions.

Examples:

```text
are data examples independent?
are features independent?
does one label depend on another?
```

These assumptions shape how probability is modeled.

> Learning systems often rely on assumptions about what depends on what.

---

## Final Summary

- Independence means knowing one event does not change another event's probability.
- It can be written as `P(A | B) = P(A)`.
- Dependent events change each other's probabilities.
- Independent events satisfy `P(A and B) = P(A) * P(B)`.
- Independence is a strong assumption.
- It is stronger than merely having zero covariance.
