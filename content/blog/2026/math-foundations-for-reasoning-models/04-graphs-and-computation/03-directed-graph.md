---
title: "Directed Graph"
excerpt: "A directed graph has edges with direction, so A to B is different from B to A."
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
topicOrder: 3
---

# Directed Graph

## Definition

A directed graph is a graph where edges have direction.

Example:

```text
A -> B
```

This means the connection goes from `A` to `B`.

It does not automatically mean the connection goes from `B` to `A`.

> Directed graph = graph with one-way edges.

---

## Direction Matters

In a directed graph:

```text
A -> B
```

is different from:

```text
B -> A
```

If both directions exist, both edges must be present:

```text
A -> B
B -> A
```

> Direction makes connection asymmetric unless the reverse edge is also defined.

---

## Directed Edges As Ordered Pairs

A directed edge can be represented as an ordered pair.

Example:

```text
(A, B)
```

means:

```text
A -> B
```

The first element is the starting node.

The second element is the ending node.

> Directed edges use order to encode direction.

---

## Simple Examples

Directed graphs can represent relationships where direction matters.

Examples:

- web page links
- task dependencies
- one-way roads
- state transitions
- input-output flow

Example:

```text
Task A -> Task B
```

can mean:

```text
Task B depends on Task A
```

> Directed graphs model structured movement or dependency.

---

## Incoming And Outgoing Edges

For:

```text
A -> B
```

the edge is outgoing from `A`.

The edge is incoming to `B`.

This distinction matters when tracking flow through a graph.

> Direction lets us ask where a connection comes from and where it goes.

---

## Final Summary

- A directed graph has edges with direction.
- `A -> B` is different from `B -> A`.
- Directed edges can be represented as ordered pairs.
- Directed graphs are useful for dependencies, links, transitions, and flow.
- Direction creates incoming and outgoing edges.
