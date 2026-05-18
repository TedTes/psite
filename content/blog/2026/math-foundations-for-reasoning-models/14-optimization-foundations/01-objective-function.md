---
title: "Objective Function"
excerpt: "An objective function turns improvement into a measurable quantity that can be minimized or maximized."
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
topicOrder: 1
---

# Objective Function

## Definition

An objective function is a function that defines what a system is trying to improve.

It turns a goal into a number.

Examples:

```text
goal: make predictions accurate
objective: minimize prediction error

goal: make a route shorter
objective: minimize distance

goal: make profit larger
objective: maximize profit
```

> An objective function makes improvement measurable.

---

## Why It Matters

Optimization needs something to optimize.

Without an objective function, there is no precise way to compare one option against another.

Example:

```text
option A -> score 12
option B -> score 7
```

If lower is better, option B is better.

If higher is better, option A is better.

> The objective function defines what "better" means.

---

## Objective vs Goal

A goal may be informal.

An objective function must be measurable.

Example:

```text
informal goal:
make the model good

objective function:
reduce average loss on training examples
```

"Good" is too vague for optimization.

"Reduce loss" gives the system a number to move toward.

> The goal describes the intention. The objective function defines the measurable target.

---

## Minimize or Maximize

Objective functions can be used in two common ways.

### Minimize

```text
loss
error
distance
cost
```

Lower is better.

### Maximize

```text
accuracy
reward
profit
similarity
```

Higher is better.

Many maximization problems can be rewritten as minimization problems.

Example:

```text
maximize accuracy
same direction as
minimize error
```

> Optimization is about choosing values that make the objective better.

---

## In Learning

In learning systems, the objective function usually depends on parameters.

```text
parameters -> model output -> loss -> objective value
```

The system changes parameters to improve the objective.

Example:

```text
parameter setting A -> loss 3.2
parameter setting B -> loss 1.1
```

If the objective is to minimize loss, setting B is better.

> Learning turns parameter adjustment into objective reduction.

---

## Objective Function vs Loss Function

A loss function measures error.

An objective function defines what optimization should improve.

Sometimes they are the same.

Example:

```text
objective = minimize loss
```

Sometimes the objective includes more than loss.

Example:

```text
objective = loss + penalty for overly large parameters
```

> Loss can be part of the objective, but the objective is the full thing being optimized.

---

## Final Summary

- An objective function defines what should be improved.
- It turns an informal goal into a measurable quantity.
- Optimization needs an objective to compare options.
- Objectives can be minimized or maximized.
- In learning, the objective usually depends on parameters.
- Loss is often the objective, but not always the whole objective.
