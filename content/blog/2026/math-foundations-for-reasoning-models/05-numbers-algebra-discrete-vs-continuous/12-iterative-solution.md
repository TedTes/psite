---
title: "Iterative Solution"
excerpt: "An iterative solution uses repeated steps to move toward an answer."
date: 2026-05-01
tags:
  - Foundations
  - Algebra
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Numbers, Algebra, Discrete vs Continuous"
chapterSlug: numbers-algebra-discrete-vs-continuous
chapterOrder: 5
topicOrder: 12
---

# Iterative Solution

## Definition

An iterative solution uses repeated steps to move toward an answer.

Basic form:

```text
start with a value
apply an update rule
repeat
```

> Iterative solution = answer approached through repeated updates.

---

## Simple Example

Suppose we want to count down to zero.

Start:

```text
x = 3
```

Rule:

```text
x = x - 1
```

Steps:

```text
3 -> 2 -> 1 -> 0
```

The result comes from repeated application of a rule.

> Iteration turns one rule into a sequence of states.

---

## Approximation Example

Some iterative methods approximate an answer.

Example goal:

```text
find a number close to sqrt(2)
```

Instead of writing the exact value directly, a method can improve a guess step by step.

Example:

```text
guess 1
better guess
better guess
better guess
```

Each step should move closer to the target.

> Iteration is often used when direct solution is difficult.

---

## Iteration Needs A Rule

An iterative solution needs an update rule.

Example:

```text
current value -> next value
```

Without a rule, repeated steps are not controlled.

The rule decides how the next step is produced.

> Iteration is structured repetition, not random repetition.

---

## Stopping Condition

An iterative method also needs a stopping condition.

Examples:

```text
stop when x = 0
stop after 100 steps
stop when change is very small
stop when error is below a limit
```

Without a stopping condition, the process may continue forever.

> Iteration needs a way to decide when enough steps have been taken.

---

## Final Summary

- An iterative solution uses repeated updates.
- It starts from an initial value.
- It applies an update rule.
- It may produce an exact result or an approximation.
- It needs a stopping condition.
- Iteration is step-based rather than direct.
