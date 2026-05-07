---
title: "Disjunctive Normal Form"
excerpt: "Disjunctive normal form rewrites logic as an OR of AND-groups."
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
topicOrder: 33
---

# Disjunctive Normal Form

## Definition

Disjunctive normal form is a standard way to write logical expressions.

It has this shape:

```text
(A AND B) OR (C AND D) OR (E AND F)
```

In short:

```text
OR of AND-groups
```

> Disjunctive normal form organizes logic as alternatives joined by OR.

---

## Term

In disjunctive normal form, each AND-group is often called a term.

Example:

```text
(P AND Q)
```

Another term:

```text
(NOT R AND S)
```

Full expression:

```text
(P AND Q) OR (NOT R AND S)
```

This is in disjunctive normal form.

> A term is an AND-group inside the larger OR structure.

---

## Why This Form Matters

Disjunctive normal form describes different ways a statement can be true.

Example:

```text
(P AND Q) OR (R AND S)
```

This says the expression is true if:

```text
P and Q are both true
```

or:

```text
R and S are both true
```

Each term is one satisfying path.

> DNF describes alternative sufficient cases.

---

## Satisfaction

A disjunctive normal form expression is true if at least one term is true.

Example:

```text
(P AND Q) OR (R AND S)
```

For the full expression to be true, either:

```text
P AND Q
```

is true, or:

```text
R AND S
```

is true.

> DNF needs at least one complete term to be satisfied.

---

## CNF vs DNF

Conjunctive normal form:

```text
AND of OR-groups
```

Disjunctive normal form:

```text
OR of AND-groups
```

CNF emphasizes all constraints that must be satisfied.

DNF emphasizes alternative cases that make the expression true.

> CNF is all clauses; DNF is any complete case.

---

## Final Summary

- Disjunctive normal form is an OR of AND-groups.
- Each AND-group can be called a term.
- DNF describes alternative ways an expression can be true.
- A DNF expression is true if at least one term is true.
- DNF is different from CNF.
- DNF gives logical expressions a standard alternative-case structure.
