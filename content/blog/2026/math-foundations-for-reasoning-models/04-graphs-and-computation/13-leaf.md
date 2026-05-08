---
title: "Leaf"
excerpt: "A leaf is a node in a rooted tree that has no children."
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
topicOrder: 13
---

# Leaf

## Definition

A leaf is a node in a rooted tree that has no children.

Example:

```text
    A
   / \
  B   C
```

`B` and `C` are leaves.

They do not branch further.

> Leaf = endpoint of a rooted tree branch.

---

## Simple Example

Consider:

```text
A
|-- B
|   `-- D
`-- C
```

Leaves:

```text
D
C
```

`A` is not a leaf because it has children.

`B` is not a leaf because it has child `D`.

> A leaf has no outgoing branch below it.

---

## Leaf vs Root

The root is where the hierarchy starts.

A leaf is where a branch ends.

Example:

```text
Root: A
Leaves: D, C

A
|-- B
|   `-- D
`-- C
```

> Root starts the tree; leaves terminate branches.

---

## Leaf As Final Result

Leaves often represent final or indivisible pieces.

Examples:

- final choices in a decision tree
- files inside folders
- values inside an expression tree
- terminal outcomes of a branching process

The exact meaning depends on the graph being modeled.

> Leaves often mark where decomposition or branching stops.

---

## Final Summary

- A leaf is a node with no children.
- Leaves are endpoints of branches.
- A root starts a hierarchy.
- A leaf terminates a branch.
- Leaves often represent final choices, values, or outcomes.
