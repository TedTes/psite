---
title: "Relation"
excerpt: "A relation is a set of ordered pairs that describes which objects are connected."
date: 2026-05-01
tags:
  - Foundations
  - Abstract Structure
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Sets, Relations, and Functions"
chapterSlug: sets-relations-and-functions
chapterOrder: 3
topicOrder: 12
---

# Relation

## Definition

A relation is a set of ordered pairs.

It describes which objects are connected.

Example:

```text
Relation: lessThan
Pairs: {(1, 2), (1, 3), (2, 3)}
```

The pair:

```text
(1, 2)
```

means:

```text
1 is less than 2
```

> Relation = structured connection between objects.

---

## Relation As Selected Pairs

A Cartesian product gives all possible ordered pairs.

Example:

```text
A = {1, 2}
B = {a, b}
A x B = {(1, a), (1, b), (2, a), (2, b)}
```

A relation selects some of those pairs.

Example:

```text
R = {(1, a), (2, b)}
```

> A relation is a subset of a Cartesian product.

---

## Relation vs Predicate

A predicate can describe a relationship.

Example:

```text
GreaterThan(x, y)
```

A relation stores the pairs where the predicate is true.

Example:

```text
GreaterThan = {(5, 3), (4, 2)}
```

> Predicate gives the test; relation gives the true pairs.

---

## Relations Can Connect A Set To Itself

Some relations connect elements from one set to elements in the same set.

Example:

```text
A = {1, 2, 3}
R = {(1, 2), (2, 3)}
```

Here `R` relates elements of `A` to other elements of `A`.

This kind of relation is common when studying ordering, reachability, and graph structure.

> Relations can describe internal structure inside a set.

---

## Final Summary

- A relation is a set of ordered pairs.
- A relation describes which objects are connected.
- A relation is a subset of a Cartesian product.
- Predicates and relations are closely connected.
- Relations can connect elements across sets or within the same set.
