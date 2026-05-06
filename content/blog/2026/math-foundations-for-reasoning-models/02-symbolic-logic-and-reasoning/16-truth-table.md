---
title: "Truth Table"
excerpt: "A truth table shows how a compound proposition's truth value depends on the truth values of its parts."
date: 2026-05-01
tags:
  - Foundations
  - Logic
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Symbolic Logic and Reasoning"
chapterSlug: symbolic-logic-and-reasoning
chapterOrder: 2
topicOrder: 16
---

# Truth Table

## Definition

A truth table lists all possible truth value combinations for propositions.

It shows the resulting truth value of a compound proposition.

Example:

```text
P      Q      P AND Q
true   true   true
true   false  false
false  true   false
false  false  false
```

> A truth table makes a logical operator's behavior explicit.

---

## Why Truth Tables Matter

Logical operators can be confusing if described only in words.

A truth table removes ambiguity.

Example:

```text
P OR Q
```

Truth table:

```text
P      Q      P OR Q
true   true   true
true   false  true
false  true   true
false  false  false
```

This shows that logical OR is true when both parts are true.

> Truth tables reveal the exact truth pattern.

---

## Rows Represent Cases

Each row is one possible case.

For two propositions:

```text
P
Q
```

there are four combinations:

```text
true, true
true, false
false, true
false, false
```

The table checks the expression under each case.

> A truth table tests every possible truth assignment.

---

## Truth Table For NOT

NOT has one input proposition.

```text
P      NOT P
true   false
false  true
```

This shows that NOT reverses truth value.

> A truth table can describe one-input or multi-input operators.

---

## Truth Tables For Compound Expressions

Truth tables can evaluate larger expressions.

Example:

```text
(P AND Q) OR R
```

To evaluate it, break it into parts:

```text
P AND Q
then
(P AND Q) OR R
```

Each intermediate column helps compute the final result.

> Complex expressions can be evaluated step by step.

---

## Final Summary

- A truth table lists possible truth assignments.
- It shows the truth value of a compound proposition.
- Each row represents one possible case.
- Truth tables make logical operators precise.
- They can evaluate simple or complex expressions.
- Truth tables are a practical tool for checking symbolic reasoning.
