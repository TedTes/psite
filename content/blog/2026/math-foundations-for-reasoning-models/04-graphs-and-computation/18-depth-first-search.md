---
title: "Depth-First Search"
excerpt: "Depth-first search explores one branch of a graph as far as possible before backing up."
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
topicOrder: 18
---

# Depth-First Search

## Definition

Depth-first search is a way to explore a graph.

It follows one path as far as possible before backing up and trying another path.

It is often shortened to:

```text
DFS
```

> Depth-first search = go deep first, then backtrack.

---

## Simple Example

Consider this tree:

```text
    A
   / \
  B   C
 / \
D   E
```

A depth-first traversal might visit:

```text
A, B, D, E, C
```

It starts at `A`, goes into `B`, then goes deeper into `D`.

Only after finishing that branch does it come back and try `E`, then `C`.

> DFS commits to a branch before moving sideways.

---

## Backtracking

Backtracking means returning to an earlier node when there is nowhere new to go.

Example:

```text
A -> B -> D
```

If `D` has no unvisited neighbors, DFS backs up to `B`.

Then it checks whether `B` has another unvisited neighbor.

> Backtracking lets DFS recover from dead ends.

---

## DFS In A Graph With Cycles

If a graph has cycles, DFS must track visited nodes.

Example:

```text
A -> B
B -> C
C -> A
```

Without tracking visited nodes, DFS could loop forever:

```text
A -> B -> C -> A -> B -> C
```

> Visited-node tracking prevents repeated exploration.

---

## What DFS Is Useful For

DFS is useful when the structure has branches that need to be explored deeply.

Examples:

- checking whether a path exists
- exploring tree structure
- detecting cycles
- walking nested folders
- searching possible choices

> DFS is a general pattern for exploring connected structure.

---

## Final Summary

- Depth-first search explores one branch deeply before trying another.
- DFS uses backtracking when it reaches a dead end.
- DFS must track visited nodes in graphs with cycles.
- DFS is useful for path search, tree traversal, and cycle detection.
- DFS is about exploration order, not changing the graph.
