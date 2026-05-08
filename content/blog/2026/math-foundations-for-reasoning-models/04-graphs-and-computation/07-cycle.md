---
title: "Cycle"
excerpt: "A cycle is a path that returns to its starting node."
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
topicOrder: 7
---

# Cycle

## Definition

A cycle is a path that returns to its starting node.

Example:

```text
A -> B -> C -> A
```

The path starts at `A` and comes back to `A`.

> Cycle = closed path.

---

## Cycle In An Undirected Graph

Example:

```text
A -- B
B -- C
C -- A
```

These edges form a cycle:

```text
A -- B -- C -- A
```

You can start at `A`, move through connected nodes, and return to `A`.

> An undirected cycle closes back on itself.

---

## Cycle In A Directed Graph

In a directed graph, the arrows must form a closed route.

Example:

```text
A -> B
B -> C
C -> A
```

This is a directed cycle.

But:

```text
A -> B
B -> C
A -> C
```

is not a directed cycle, because there is no edge returning to `A`.

> Directed cycles must follow arrows back to the start.

---

## Self-Loop As Cycle

A self-loop can be treated as a cycle of length `1`.

Example:

```text
A -> A
```

The path starts at `A` and immediately returns to `A`.

> A self-loop is the smallest cycle when allowed by the graph.

---

## Why Cycles Matter

Cycles indicate repetition or circular dependency.

Examples:

```text
A depends on B
B depends on C
C depends on A
```

This creates a circular structure.

In computation, cycles can also represent repeated steps.

> Cycles show when structure can loop back on itself.

---

## Final Summary

- A cycle is a path that returns to its starting node.
- Undirected cycles close through connected edges.
- Directed cycles must follow arrows back to the start.
- A self-loop can be a cycle of length `1`.
- Cycles often represent repetition or circular dependency.
