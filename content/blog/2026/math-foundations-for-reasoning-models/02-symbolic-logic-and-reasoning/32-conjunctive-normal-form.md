---
title: "Conjunctive Normal Form"
excerpt: "Conjunctive normal form rewrites logic as an AND of OR-groups."
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
topicOrder: 32
---

# Conjunctive Normal Form

## Definition

Conjunctive normal form is a standard way to write logical expressions.

It has this shape:

```text
(A OR B) AND (C OR D) AND (E OR F)
```

In short:

```text
AND of OR-groups
```

> Conjunctive normal form organizes logic as clauses joined by AND.

---

## Clause

In conjunctive normal form, each OR-group is called a clause.

Example:

```text
(P OR Q)
```

Another clause:

```text
(NOT R OR S)
```

Full expression:

```text
(P OR Q) AND (NOT R OR S)
```

This is in conjunctive normal form.

> A clause is an OR-group inside the larger AND structure.

---

## Why This Form Matters

Normal forms make logical expressions easier to compare and process.

Instead of many possible shapes, we use one standard shape.

Example:

```text
(P OR Q) AND (R OR S)
```

This structure makes it clear:

```text
both clauses must hold
```

and within each clause:

```text
at least one part must hold
```

> Normal form reduces structural variation.

---

## Satisfaction

A conjunctive normal form expression is true only when every clause is true.

Example:

```text
(P OR Q) AND (R OR S)
```

For the full expression to be true:

```text
P OR Q must be true
R OR S must be true
```

Each clause allows alternatives.

But all clauses must be satisfied.

> CNF requires every clause to be satisfied.

---

## Connection To AND And OR

Conjunctive means joined by AND.

Normal form means a standardized shape.

So:

```text
Conjunctive normal form
```

means:

```text
standard form built as AND of clauses
```

where each clause is built using OR.

> CNF layers OR inside AND.

---

## Final Summary

- Conjunctive normal form is an AND of OR-groups.
- Each OR-group is a clause.
- The full expression is true only when every clause is true.
- CNF gives logic a standard structure.
- CNF is useful because it makes symbolic expressions easier to compare, transform, and check.
