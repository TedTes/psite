---
title: "Tree"
excerpt: "A tree is a connected graph with no cycles."
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
topicOrder: 9
---

# Tree

## Definition

A tree is a connected graph with no cycles.

Connected means every node can be reached from every other node.

No cycles means there is no path that loops back to its starting point.

> Tree = connected graph without loops.

---

## Simple Example

Example tree:

```text
    A
   / \
  B   C
     / \
    D   E
```

The graph is connected.

There is exactly one path between any two nodes.

There are no cycles.

> A tree branches without closing into a loop.

---

## Non-Example: Cycle

This is not a tree:

```text
A -- B
|    |
D -- C
```

Why?

Because it contains a cycle:

```text
A -- B -- C -- D -- A
```

> A graph with a cycle is not a tree.

---

## Non-Example: Disconnected

This is not a tree:

```text
A -- B

C -- D
```

Why?

Because the graph has two disconnected pieces.

There is no path from `A` to `C`.

> A tree must be one connected structure.

---

## Tree As Hierarchy

Trees are often used to represent hierarchy.

Examples:

- folders inside folders
- categories and subcategories
- decision branches
- family-style ancestry structures
- expression structure

When a tree is given a starting node, it becomes a rooted tree.

> Tree structure supports branching without circular dependency.

---

## Final Summary

- A tree is a connected graph with no cycles.
- Every node in a tree is reachable from every other node.
- A tree cannot contain loops.
- A disconnected graph is not a tree.
- Trees are useful for hierarchy and branching structure.
