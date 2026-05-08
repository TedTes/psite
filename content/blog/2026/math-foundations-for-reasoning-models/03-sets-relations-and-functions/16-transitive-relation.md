---
title: "Transitive Relation"
excerpt: "A transitive relation carries connection forward: if a relates to b and b relates to c, then a relates to c."
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
topicOrder: 16
---

# Transitive Relation

## Definition

A relation is transitive when connection can be carried through an intermediate element.

Basic form:

```text
if a relates to b
and b relates to c
then a relates to c
```

As ordered pairs:

```text
(a, b)
(b, c)
therefore (a, c)
```

> Transitive relation = connection carries forward.

---

## Simple Example

The relation:

```text
less than
```

is transitive.

If:

```text
1 < 2
2 < 3
```

then:

```text
1 < 3
```

The relationship carries through the middle value.

> Transitivity lets chains imply direct connections.

---

## Non-Example

The relation:

```text
is parent of
```

is not transitive.

If:

```text
Ada is parent of Ben
Ben is parent of Cleo
```

it does not follow that:

```text
Ada is parent of Cleo
```

Ada is a grandparent, not a parent.

> Not every chain preserves the same relation.

---

## Transitivity In Ordered Pairs

Example relation:

```text
R = {(1, 2), (2, 3), (1, 3)}
```

Because `(1, 2)` and `(2, 3)` are present, transitivity requires `(1, 3)`.

It is included.

Non-transitive example:

```text
R = {(1, 2), (2, 3)}
```

Here `(1, 3)` is missing.

> Transitivity checks whether required shortcut pairs exist.

---

## Why Transitivity Matters

Transitivity supports reasoning over chains.

Example:

```text
A depends on B
B depends on C
```

If dependency is treated transitively, then:

```text
A depends on C
```

This kind of structure appears in ordering, hierarchy, reachability, and computation graphs.

> Transitivity turns step-by-step links into longer structural consequences.

---

## Final Summary

- A transitive relation carries connection through an intermediate element.
- If `(a, b)` and `(b, c)` are present, `(a, c)` must be present.
- "Less than" is transitive.
- "Is parent of" is not transitive.
- Transitivity supports reasoning over chains.
- Transitivity is important for order, dependency, and graph structure.
