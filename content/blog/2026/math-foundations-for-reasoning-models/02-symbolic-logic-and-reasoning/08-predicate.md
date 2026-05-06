---
title: "Predicate"
excerpt: "A predicate is a statement form that becomes true or false when its variables are given values."
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
topicOrder: 8
---

# Predicate

## Definition

A predicate is a statement form with one or more variables.

It becomes a proposition when the variables are assigned values.

Example:

```text
Even(x)
```

This means:

```text
x is even
```

By itself, it is not yet true or false.

If:

```text
x = 4
```

then:

```text
Even(4) = true
```

> Predicate = proposition with open variable positions.

---

## Predicate vs Proposition

A proposition already has a truth value.

Example:

```text
Even(4)
```

This is true.

A predicate contains a variable.

Example:

```text
Even(x)
```

This needs a value for `x` before it can be true or false.

> Predicate becomes proposition after substitution.

---

## Predicates Describe Properties

A predicate can describe a property of an object.

Example:

```text
Human(x)
```

This says:

```text
x has the property of being human
```

If:

```text
x = Socrates
```

then:

```text
Human(Socrates)
```

is a proposition.

> Predicates let logic describe properties.

---

## Predicates Can Relate Objects

A predicate can also describe a relationship between objects.

Example:

```text
GreaterThan(x, y)
```

If:

```text
x = 5
y = 3
```

then:

```text
GreaterThan(5, 3) = true
```

If:

```text
x = 2
y = 9
```

then:

```text
GreaterThan(2, 9) = false
```

> Predicates can represent properties or relations.

---

## Predicate vs Function

A function returns a value or object.

Example:

```text
double(3) = 6
```

A predicate returns a truth value.

Example:

```text
Even(3) = false
```

This difference matters because predicates create statements for reasoning.

> Function gives a value; predicate gives true or false.

---

## Final Summary

- A predicate is a statement form with variables.
- A predicate becomes a proposition when variables are assigned.
- Predicates can describe properties.
- Predicates can describe relations between objects.
- A predicate returns true or false after substitution.
- Predicates are different from functions.
