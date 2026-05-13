---
title: "Mean"
excerpt: "The mean is an average value, often used to summarize the center of data or a distribution."
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
topicOrder: 6
---

# Mean

## Definition

The mean is an average value.

For a list of numbers:

```text
mean = sum of values / number of values
```

Example:

```text
values: 2, 4, 6
mean = (2 + 4 + 6) / 3 = 4
```

> Mean = arithmetic average.

---

## Mean As Center

The mean often describes the center of a set of values.

Example:

```text
2, 4, 6
```

The mean is:

```text
4
```

which sits in the middle of the values.

> The mean summarizes where values are centered.

---

## Mean And Expectation

Expectation and mean are closely related.

For data:

```text
mean = average of observed values
```

For a probability distribution:

```text
expectation = probability-weighted mean
```

So expectation is the distribution-level version of the mean.

> Mean is average over observed data; expectation is average over a distribution.

---

## Mean Can Be Affected By Extreme Values

Example:

```text
1, 2, 3, 100
```

Mean:

```text
(1 + 2 + 3 + 100) / 4 = 26.5
```

The mean is pulled upward by `100`.

> The mean is sensitive to extreme values.

---

## Mean Is Not Always Typical

The mean may not represent a typical example.

For:

```text
1, 2, 3, 100
```

the mean is `26.5`, but no value is near `26.5`.

So the mean is useful, but it should not be blindly treated as typical.

> Mean summarizes data, but it can hide distribution shape.

---

## Mean In Learning

Learning often uses means.

Examples:

```text
mean loss
mean prediction error
mean feature value
mean activation
```

The mean compresses many values into one summary.

> Mean is a basic tool for summarizing model behavior over many examples.

---

## Mean Loss

If a model has losses across examples:

```text
0.2, 0.5, 0.1, 0.4
```

Mean loss:

```text
(0.2 + 0.5 + 0.1 + 0.4) / 4 = 0.3
```

This gives one number for average model error.

> Mean loss summarizes performance across examples.

---

## Final Summary

- The mean is the arithmetic average.
- It often describes the center of values.
- Expectation is a probability-weighted mean over a distribution.
- Mean can be affected by extreme values.
- Mean is useful but does not show the full distribution.
- Learning uses means to summarize loss, error, features, and predictions.
