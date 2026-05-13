---
title: "Covariance"
excerpt: "Covariance measures whether two variables tend to move together."
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
topicOrder: 9
---

# Covariance

## Definition

Covariance measures how two variables move together.

Basic question:

```text
when one variable is above its mean,
is the other also above its mean?
```

> Covariance = joint direction of variation.

---

## Positive Covariance

Positive covariance means two variables tend to move in the same direction.

Example:

```text
study time increases
test score tends to increase
```

When one is high, the other tends to be high.

When one is low, the other tends to be low.

> Positive covariance means values tend to rise and fall together.

---

## Negative Covariance

Negative covariance means two variables tend to move in opposite directions.

Example:

```text
price increases
demand tends to decrease
```

When one is high, the other tends to be low.

> Negative covariance means one variable tends to rise when the other falls.

---

## Near-Zero Covariance

Near-zero covariance means there is little linear co-movement.

It does not always mean the variables are completely unrelated.

There may be a nonlinear relationship that covariance does not capture well.

> Zero covariance means no clear linear movement together.

---

## Covariance Uses Deviations From Mean

Covariance compares how each variable differs from its own mean.

For each pair of values:

```text
X deviation = X - mean(X)
Y deviation = Y - mean(Y)
```

Then it looks at the product:

```text
X deviation * Y deviation
```

If the products are often positive, covariance is positive.

If they are often negative, covariance is negative.

> Covariance measures whether deviations align.

---

## Covariance vs Variance

Variance measures spread of one variable.

Covariance measures joint spread of two variables.

```text
variance -> one variable
covariance -> two variables
```

In fact, variance can be seen as covariance of a variable with itself.

> Covariance extends spread from one variable to relationships between variables.

---

## Why Covariance Matters For Learning

Learning often depends on relationships between variables.

Examples:

```text
feature and label move together
two features carry similar information
one feature increases while another decreases
```

Covariance helps identify these relationships.

> Covariance gives a first look at how variables relate.

---

## Final Summary

- Covariance measures how two variables move together.
- Positive covariance means they tend to move in the same direction.
- Negative covariance means they tend to move in opposite directions.
- Near-zero covariance means little linear co-movement.
- Variance describes one variable; covariance describes two.
- Learning uses covariance to understand relationships between features and outcomes.
