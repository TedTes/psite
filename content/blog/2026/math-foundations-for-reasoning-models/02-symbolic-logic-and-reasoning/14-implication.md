---
title: "Implication"
excerpt: "Implication connects a condition to a consequence: if the first proposition holds, the second must hold."
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
topicOrder: 14
---

# Implication

## Definition

Implication connects a condition to a consequence.

Basic form:

```text
If P, then Q
```

This means:

```text
whenever P is true, Q must also be true
```

> Implication says one proposition leads to another.

---

## Antecedent And Consequent

In:

```text
If P, then Q
```

`P` is the antecedent.

`Q` is the consequent.

The antecedent is the condition.

The consequent is what follows from the condition.

> Antecedent = if-part. Consequent = then-part.

---

## Simple Example

Example:

```text
If a number is divisible by 4, then it is even.
```

Let:

```text
P = number is divisible by 4
Q = number is even
```

Then:

```text
If P, then Q
```

When `P` is true, `Q` must be true.

> Implication captures dependency between statements.

---

## When Implication Fails

An implication fails only when the antecedent is true and the consequent is false.

Example:

```text
If P, then Q
```

False case:

```text
P = true
Q = false
```

That means the condition happened, but the promised consequence did not.

> Implication fails when true condition leads to false consequence.

---

## Truth Pattern

Implication has this truth pattern:

```text
P      Q      If P, then Q
true   true   true
true   false  false
false  true   true
false  false  true
```

The unintuitive part is when `P` is false.

In formal logic, the implication is still true because it did not violate the rule:

```text
whenever P is true, Q must be true
```

If `P` is not true, no violation occurred.

> Implication is about preserving the consequence when the condition holds.

---

## Implication In Reasoning

Implication supports a common reasoning step.

Example:

```text
If P, then Q
P
Therefore Q
```

If the implication is true and `P` is true, then `Q` follows.

> Implication lets reasoning move from condition to consequence.

---

## Final Summary

- Implication has the form `If P, then Q`.
- `P` is the antecedent.
- `Q` is the consequent.
- It says whenever `P` is true, `Q` must be true.
- It fails only when `P` is true and `Q` is false.
- Implication supports condition-based reasoning.
