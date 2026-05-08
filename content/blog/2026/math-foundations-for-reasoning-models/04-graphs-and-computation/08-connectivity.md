---
title: "Connectivity"
excerpt: "Connectivity describes whether nodes can be reached from one another through paths."
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
topicOrder: 8
---

# Connectivity

## Definition

Connectivity describes whether nodes can be reached from one another through paths.

Example:

```text
A -- B -- C
```

`A` is connected to `C` because there is a path:

```text
A -- B -- C
```

> Connectivity = reachability through graph structure.

---

## Connected Nodes

Two nodes are connected if a path exists between them.

Example:

```text
A -- B
B -- C
D
```

`A`, `B`, and `C` are connected to each other.

`D` is isolated.

There is no path from `D` to the others.

> Connection can be direct or indirect.

---

## Connected Graph

An undirected graph is connected if every node can reach every other node.

Example:

```text
A -- B -- C -- D
```

This graph is connected.

Every node belongs to the same reachable structure.

> Connected graph = no isolated pieces.

---

## Disconnected Graph

A graph is disconnected if it has separate pieces.

Example:

```text
A -- B
C -- D
```

There is no path from `A` to `C`.

The graph has two separate components:

```text
{A, B}
{C, D}
```

> A disconnected graph has more than one reachable group.

---

## Direction Can Affect Reachability

In a directed graph:

```text
A -> B -> C
```

`A` can reach `C`.

But `C` cannot reach `A` unless reverse edges exist.

Direction changes what can be reached from where.

> Directed connectivity depends on edge direction.

---

## Final Summary

- Connectivity describes reachability through paths.
- Two nodes are connected if a path exists between them.
- A connected graph has all nodes in one reachable structure.
- A disconnected graph has separate components.
- In directed graphs, reachability depends on direction.
