---
title: "Child"
excerpt: "A child is a node directly below another node in a rooted tree."
date: 2026-05-01
tags:
  - Foundations
  - Graphs
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Graphs and Computation"
chapterSlug: graphs-and-computation
chapterOrder: 4
topicOrder: 12
---

# Child

## Definition

A child is a node directly below another node in a rooted tree.

Example:

```text
    A
   / \
  B   C
```

`B` is a child of `A`.

`C` is also a child of `A`.

> Child = direct successor in a rooted tree.

---

## Parent And Child Are Paired Roles

If `A` is the parent of `B`, then `B` is a child of `A`.

Example:

```text
A
`-- B
```

Both statements describe the same direct connection from different sides.

> Parent and child describe direction in a hierarchy.

---

## A Node Can Have Multiple Children

Example:

```text
    A
  / | \
 B  C  D
```

`A` has three children:

```text
B
C
D
```

This is how trees branch.

> Children are the immediate branches from a node.

---

## A Node Can Have No Children

Example:

```text
A
`-- B
```

`B` has no children.

A node with no children is called a leaf.

> Not every node must branch further.

---

## Child vs Descendant

Child means one level below.

Descendant means any level below.

Example:

```text
A
`-- B
    `-- C
```

`B` is a child of `A`.

`C` is a descendant of `A`, but not a child of `A`.

> Child is immediate; descendant can be deeper.

---

## Final Summary

- A child is directly below another node in a rooted tree.
- Parent and child are paired roles.
- A node can have many children.
- A node can also have no children.
- Child means immediate successor, while descendant can be deeper.
