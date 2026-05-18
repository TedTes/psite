---
title: "Parameter"
excerpt: "A parameter is an adjustable value inside a model that controls how inputs are transformed into outputs."
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
topicOrder: 3
---

# Parameter

## Definition

A parameter is an adjustable value inside a system.

It affects how input becomes output.

Example:

```text
output = parameter * input
```

If the parameter is 2:

```text
input 5 -> output 10
```

If the parameter is 3:

```text
input 5 -> output 15
```

> A parameter controls the behavior of a computation.

---

## Parameter vs Input

Input is the data given to the system.

Parameter is part of the system's internal rule.

Example:

```text
output = weight * input
```

Here:

```text
input = value being processed
weight = parameter being learned or chosen
```

Changing the input asks the same system to process different data.

Changing the parameter changes the system itself.

> Inputs are processed. Parameters control how processing happens.

---

## Parameter vs Output

Output is the result.

Parameter is one of the causes of the result.

Example:

```text
input: 4
parameter: 2
output: 8
```

If the parameter changes:

```text
input: 4
parameter: 5
output: 20
```

> The output changes because the parameter changes the transformation.

---

## Learning as Parameter Change

In learning, the system changes parameters to reduce loss.

```text
current parameters -> output -> loss
updated parameters -> new output -> new loss
```

The goal is not just to produce one output.

The goal is to find parameter values that produce better outputs across many cases.

> Learning is parameter adjustment guided by loss.

---

## Fixed Rule vs Adjustable Rule

Some computations have fixed rules.

Example:

```text
add 1
```

The rule does not change.

Learning systems often have adjustable rules.

Example:

```text
multiply by parameter
add parameter
combine inputs using parameters
```

The structure of the rule may stay fixed, but the parameter values change.

> Parameters make a rule tunable.

---

## Final Summary

- A parameter is an adjustable value inside a system.
- Parameters affect how inputs map to outputs.
- Inputs are processed; parameters control processing.
- Outputs are results; parameters help produce those results.
- Learning changes parameters to reduce loss.
- Parameters make a rule adjustable rather than fully fixed.
