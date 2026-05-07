---
title: "Variable Binding"
excerpt: "Variable binding occurs when a quantifier controls a variable inside its scope."
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
topicOrder: 29
---

# Variable Binding

## Definition

Variable binding occurs when a quantifier controls a variable inside its scope.

Example:

```text
For every x, P(x)
```

The quantifier:

```text
For every x
```

binds the variable `x` in:

```text
P(x)
```

> A bound variable is controlled by a quantifier.

---

## Bound Variable

In:

```text
For every x, Human(x)
```

the variable `x` is bound.

It does not refer to one specific object.

It ranges over the domain.

The statement says:

```text
every object in the domain is human
```

> A bound variable ranges over the domain specified by the quantifier.

---

## Free Variable

A free variable is not controlled by a quantifier.

Example:

```text
Human(x)
```

Here `x` is free.

The expression is not yet a complete proposition unless `x` is assigned.

Compare:

```text
For every x, Human(x)
```

Now `x` is bound.

> Free variables need assignment or binding.

---

## Same Symbol, Different Binding

The same variable symbol can be reused in separate quantified expressions.

Example:

```text
For every x, P(x)
There exists x such that Q(x)
```

The two uses of `x` are controlled by different quantifiers.

They do not automatically refer to the same object.

> Binding is local to the quantifier's scope.

---

## Why Binding Matters

Variable binding prevents confusion about what a variable refers to.

Example:

```text
For every x, P(x) -> Q(x)
```

We need to know whether both `P(x)` and `Q(x)` are inside the scope of the same `x`.

If binding is unclear, the meaning is unclear.

> Binding connects variables to the quantifiers that control them.

---

## Final Summary

- Variable binding happens when a quantifier controls a variable.
- A bound variable is inside the quantifier's scope.
- A free variable is not controlled by a quantifier.
- Free variables need assignment or binding.
- The same symbol can be reused under different quantifiers.
- Binding clarifies what variables refer to in logical expressions.
