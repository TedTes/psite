---
title: "Weighted Graph"
excerpt: "A weighted graph attaches values to edges so connections can carry cost, distance, strength, or capacity."
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
topicOrder: 5
---

# Weighted Graph

## Definition

A weighted graph is a graph where edges have values attached to them.

Example:

```text
A --5-- B
```

The value `5` is the weight of the edge.

> Weighted graph = graph where connections carry values.

---

## What A Weight Can Mean

The meaning of a weight depends on the system being modeled.

Examples:

- distance between cities
- cost of travel
- time required
- strength of a connection
- amount of capacity
- risk or difficulty

The graph only stores the value.

The interpretation comes from the context.

> Weight gives a connection measurable structure.

---

## Simple Example

Suppose:

```text
A --2-- B
B --4-- C
A --10-- C
```

The graph says:

```text
A to B has weight 2
B to C has weight 4
A to C has weight 10
```

If weight means distance, then going from `A` to `C` through `B` has total distance:

```text
2 + 4 = 6
```

This is shorter than direct edge weight `10`.

> Weights let us compare possible routes.

---

## Weighted vs Unweighted

In an unweighted graph, an edge only says:

```text
connected or not connected
```

In a weighted graph, an edge also says:

```text
how much
```

Example:

```text
A -- B
```

only shows connection.

```text
A --7-- B
```

shows connection plus value.

> Weighted graphs add measurement to connection.

---

## Directed Weighted Graphs

A graph can be both directed and weighted.

Example:

```text
A --3--> B
B --8--> A
```

The direction and weight are both part of the edge.

The two directions can have different weights.

> Direction and weight are separate features that can be combined.

---

## Final Summary

- A weighted graph attaches values to edges.
- Weights can represent distance, cost, time, strength, or capacity.
- Weighted graphs allow comparison between routes.
- Unweighted graphs show connection only.
- A graph can be both directed and weighted.
