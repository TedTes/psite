---
title: "Syntax vs Semantics"
excerpt: "Syntax is the form of an expression; semantics is what that expression means under an interpretation."
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
topicOrder: 2
---

# Syntax vs Semantics

## Definition

Syntax is the formal structure of an expression.

Semantics is what that expression means under an interpretation.

Example:

```text
x + 1
```

Syntax asks:

```text
Is this expression formed correctly?
```

Semantics asks:

```text
What does it mean when x has a value?
```

> Syntax = form. Semantics = meaning.

---

## Syntax

Syntax is about whether symbols are arranged correctly.

Valid form:

```text
x + 1
```

Invalid form:

```text
+ x 1 )
```

The invalid form may contain recognizable symbols.

But the arrangement does not follow the rules of the language.

> Syntax controls which expressions are well-formed.

---

## Semantics

Semantics gives meaning to a well-formed expression.

Example:

```text
x + 1
```

If:

```text
x = 5
```

then:

```text
x + 1 = 6
```

The syntax did not change.

The meaning became concrete once an interpretation was supplied.

> Semantics depends on interpretation.

---

## Same Syntax, Different Semantics

The same expression can mean different things in different contexts.

Example:

```text
x + 1
```

Context 1:

```text
x = 2
result = 3
```

Context 2:

```text
x = 10
result = 11
```

The syntax is the same.

The semantic value changes.

> Same form can produce different meaning under different assignments.

---

## Syntax Without Semantics

An expression can have correct syntax without a known meaning.

Example:

```text
P AND Q
```

This is syntactically valid.

But until `P` and `Q` are interpreted, we do not know whether the expression is true or false.

> A well-formed expression may still need interpretation.

---

## Why This Matters For Reasoning

Reasoning has two layers.

First, expressions must be formed correctly.

Second, the expressions must be interpreted correctly.

Example:

```text
If P, then Q
P
Therefore Q
```

The structure is syntactic.

Whether the statements are true depends on semantics.

> Logic needs both valid form and meaningful interpretation.

---

## Final Summary

- Syntax is symbolic form.
- Semantics is meaning under interpretation.
- Syntax determines whether an expression is well-formed.
- Semantics determines what the expression refers to or whether it is true.
- The same syntax can have different semantics.
- Reasoning requires keeping form and meaning separate.
