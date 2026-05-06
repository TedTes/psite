---
title: "Substitution"
excerpt: "Substitution replaces a symbol or variable with a value or expression while preserving the surrounding structure."
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
topicOrder: 4
---

# Substitution

## Definition

Substitution means replacing a variable with a value or expression.

Example:

```text
x + 1
```

Substitute:

```text
x = 5
```

Result:

```text
5 + 1
```

> Substitution replaces a symbol while keeping the surrounding structure.

---

## Why Substitution Matters

Variables make expressions general.

Substitution makes them specific.

General expression:

```text
x + 1
```

Specific case:

```text
5 + 1
```

Now the expression can be evaluated:

```text
6
```

> Substitution turns a general form into a particular instance.

---

## Substitution In Logic

Logical statements can also use substitution.

Example:

```text
Human(x)
```

Substitute:

```text
x = Socrates
```

Result:

```text
Human(Socrates)
```

The structure of the statement remains.

Only the variable is replaced.

> Substitution lets a general logical form apply to a particular object.

---

## Correct Substitution

Substitution must replace the intended symbol consistently.

Example:

```text
x + x
```

Substitute:

```text
x = 3
```

Correct result:

```text
3 + 3
```

Incorrect result:

```text
3 + x
```

If the same variable refers to the same value in the same context, every occurrence must be replaced.

> Substitution must respect the variable's context.

---

## Substitution vs Evaluation

Substitution is not the same as evaluation.

Substitution:

```text
x + 1
x = 5
5 + 1
```

Evaluation:

```text
5 + 1 = 6
```

Substitution replaces symbols.

Evaluation computes the result.

> Substitution prepares an expression; evaluation produces a value.

---

## Final Summary

- Substitution replaces a variable with a value or expression.
- It keeps the surrounding structure intact.
- It turns a general form into a specific instance.
- Substitution must be consistent within its context.
- Substitution is different from evaluation.
- In logic, substitution lets general statements apply to particular objects.
