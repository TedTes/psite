---
title: "Edge"
excerpt: "An edge is a connection between nodes in a graph."
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
topicOrder: 2
---

# Edge

## Definition

An edge is a connection between nodes.

Example:

```text
A -- B
```

This means node `A` is connected to node `B`.

> Edge = connection between nodes.

---

## Edge As Pair

An edge can be represented as a pair of nodes.

Example:

```text
(A, B)
```

This says there is a connection involving `A` and `B`.

In graph language:

```text
V = {A, B, C}
E = {(A, B), (B, C)}
```

`V` is the set of nodes.

`E` is the set of edges.

> A graph is built from nodes plus edges.

---

## Edge As Relation

An edge is closely related to the idea of a relation.

If a relation says:

```text
A is connected to B
```

then the graph can draw that relation as an edge:

```text
A -- B
```

> Edges make relation structure visible.

---

## Edge vs Node

A node is an object.

An edge is a connection between objects.

Example:

```text
A, B, C are nodes
A -- B is an edge
B -- C is an edge
```

> Nodes are things; edges are links between things.

---

## Self-Loop

Sometimes an edge can connect a node to itself.

Example:

```text
A -- A
```

This is called a self-loop.

It means the node has a relationship to itself.

> Some graph structures allow self-connections.

---

## Final Summary

- An edge is a connection between nodes.
- Edges can be represented as pairs.
- A graph contains nodes and edges.
- Edges are a visual form of relation structure.
- A self-loop connects a node to itself.
