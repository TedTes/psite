---
title: "Path"
excerpt: "A path is a sequence of connected nodes in a graph."
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
topicOrder: 6
---

# Path

## Definition

A path is a sequence of nodes where each neighboring pair is connected by an edge.

Example:

```text
A -> B -> C
```

This is a path from `A` to `C` if the graph contains:

```text
A -> B
B -> C
```

> Path = valid route through connected nodes.

---

## Path In An Undirected Graph

In an undirected graph:

```text
A -- B -- C
```

there is a path from `A` to `C`.

There is also a path from `C` to `A`.

The edges do not restrict direction.

> In undirected graphs, paths can move across edges either way.

---

## Path In A Directed Graph

In a directed graph, direction must be respected.

Example:

```text
A -> B -> C
```

There is a path from `A` to `C`.

But there is not necessarily a path from `C` to `A`.

The reverse path exists only if reverse edges are present.

> In directed graphs, paths must follow arrows.

---

## Path Length

The length of a path is usually the number of edges used.

Example:

```text
A -> B -> C -> D
```

This path has length `3` because it uses three edges:

```text
A -> B
B -> C
C -> D
```

> Path length counts steps between nodes.

---

## Simple Path

A simple path does not repeat nodes.

Example:

```text
A -> B -> C
```

is simple.

This path is not simple:

```text
A -> B -> C -> B
```

because `B` appears twice.

> A simple path avoids revisiting the same node.

---

## Final Summary

- A path is a sequence of connected nodes.
- In directed graphs, paths must follow edge direction.
- In undirected graphs, paths can move either way across edges.
- Path length counts the number of edges used.
- A simple path does not repeat nodes.
