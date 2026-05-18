---
title: "Parameter Space"
excerpt: "Parameter space is the set of all possible parameter settings a learning system can search through."
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
topicOrder: 4
---

# Parameter Space

## Definition

Parameter space is the set of all possible parameter settings.

If a system has one parameter, the parameter space is all possible values that parameter can take.

Example:

```text
parameter w can be any number
parameter space = all possible w values
```

If a system has two parameters:

```text
parameters: w and b
parameter setting: (w, b)
```

The parameter space contains all possible pairs.

> Parameter space is where optimization searches.

---

## Parameter Setting

A parameter setting is one specific choice inside parameter space.

Example:

```text
parameter space:
all possible (w, b)

one parameter setting:
(w = 2, b = 1)
```

Different settings can produce different outputs and different loss.

```text
(w = 2, b = 1) -> loss 4.5
(w = 3, b = -1) -> loss 1.2
```

> Optimization compares parameter settings by their objective value.

---

## One Parameter

With one parameter, searching is easy to imagine.

```text
w = -2
w = -1
w = 0
w = 1
w = 2
```

Each value gives a possible behavior.

The optimizer tries to move toward values with lower loss.

> One parameter creates a one-dimensional search space.

---

## Multiple Parameters

Most learning systems have more than one parameter.

Example:

```text
output = w1 * x1 + w2 * x2 + b
```

The parameters are:

```text
w1
w2
b
```

One setting is:

```text
(w1 = 1, w2 = -2, b = 0.5)
```

The optimizer changes these values together.

> A model with many parameters has a large parameter space.

---

## Parameter Space vs Data Space

Data space contains possible inputs.

Parameter space contains possible internal settings.

Example:

```text
data space:
all possible input values

parameter space:
all possible parameter values
```

Training does not usually change the input examples.

Training changes the parameter setting.

> Data space is what the model receives. Parameter space is what optimization searches.

---

## Final Summary

- Parameter space is the set of all possible parameter settings.
- A parameter setting is one specific point in that space.
- One parameter creates a one-dimensional search.
- Multiple parameters create a larger search space.
- Different parameter settings produce different losses.
- Optimization moves through parameter space to improve the objective.
