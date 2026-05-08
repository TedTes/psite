---
title: "Breadth-First Search"
excerpt: "Breadth-first search explores a graph level by level from a starting node."
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
topicOrder: 19
---

# Breadth-First Search

## Definition

Breadth-first search is a way to explore a graph level by level.

It is often shortened to:

```text
BFS
```

It visits nearby nodes before deeper nodes.

> Breadth-first search = explore outward by distance from the start.

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

A breadth-first traversal visits:

```text
A, B, C, D, E
```

It visits `A` first.

Then it visits the nodes one edge away:

```text
B, C
```

Then it visits the nodes two edges away:

```text
D, E
```

> BFS explores by layers.

---

## BFS And Shortest Paths

In an unweighted graph, BFS can find the shortest path measured by number of edges.

Example:

```text
A -- B -- D
A -- C -- D
```

Starting from `A`, BFS reaches `D` after two steps.

It finds a path with the fewest edges.

> In unweighted graphs, BFS finds nearest reachable nodes first.

---

## Tracking Visited Nodes

Like DFS, BFS must track visited nodes when graphs may contain cycles.

Example:

```text
A -- B
B -- C
C -- A
```

If visited nodes are not tracked, the search can repeat the same nodes.

> Visited-node tracking prevents repeated work.

---

## BFS vs DFS

DFS goes deep first:

```text
A, B, D, E, C
```

BFS goes wide first:

```text
A, B, C, D, E
```

The graph may be the same.

The exploration order is different.

> DFS prioritizes depth; BFS prioritizes closeness to the start.

---

## Final Summary

- Breadth-first search explores level by level.
- BFS visits nearby nodes before deeper nodes.
- BFS can find shortest paths in unweighted graphs.
- BFS must track visited nodes in graphs with cycles.
- BFS and DFS differ by exploration order.
