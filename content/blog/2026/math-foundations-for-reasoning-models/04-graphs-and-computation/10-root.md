---
title: "Root"
excerpt: "The root is the chosen starting node of a rooted tree."
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
topicOrder: 10
---

# Root

## Definition

The root is the chosen starting node of a rooted tree.

Example:

```text
    A
   / \
  B   C
```

Here `A` is the root.

> Root = starting node of a tree hierarchy.

---

## Root Gives Direction To A Tree

A plain tree does not always have an inherent top or bottom.

When we choose a root, the tree becomes organized around that node.

Example:

```text
Root: A

A
|-- B
+-- C
```

Now `B` and `C` are below `A`.

> The root gives the tree an orientation.

---

## Root Has No Parent

In a rooted tree, the root has no parent.

Example:

```text
    A
   / \
  B   C
```

`A` is the root.

`B` and `C` may have `A` as parent.

But `A` has no parent inside this tree.

> The root is where parent-child structure begins.

---

## Different Root, Different View

The same tree can be viewed differently if a different root is chosen.

Example:

```text
A -- B -- C
```

If `A` is root:

```text
A
`-- B
    `-- C
```

If `B` is root:

```text
B
|-- A
+-- C
```

> Root choice affects the hierarchy we see.

---

## Why Roots Matter

Roots matter when a structure needs a starting point.

Examples:

- file system folder trees
- decision trees
- parse trees
- search trees
- dependency explanations

> A root turns a branching structure into an organized hierarchy.

---

## Final Summary

- The root is the chosen starting node of a rooted tree.
- A root gives direction to tree structure.
- The root has no parent in the tree.
- The same tree can be rooted in different ways.
- Roots are useful when a hierarchy needs a starting point.
