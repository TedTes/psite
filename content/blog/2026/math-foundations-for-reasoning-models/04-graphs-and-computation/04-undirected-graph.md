---
title: "Undirected Graph"
excerpt: "An undirected graph has edges without direction, so a connection works both ways."
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
topicOrder: 4
---

# Undirected Graph

## Definition

An undirected graph is a graph where edges do not have direction.

Example:

```text
A -- B
```

This means `A` is connected to `B`, and `B` is connected to `A`.

> Undirected graph = graph with two-way connections.

---

## Direction Is Not Stored

In an undirected graph:

```text
A -- B
```

is the same connection as:

```text
B -- A
```

There is no separate direction.

The edge only says the two nodes are connected.

> Undirected edges describe mutual connection.

---

## Simple Examples

Undirected graphs can represent relationships where direction is not important.

Examples:

- two cities connected by a road
- two people who are friends
- two devices connected by a cable
- two concepts that are associated

Example:

```text
Ada -- Ben
```

can mean:

```text
Ada and Ben are friends
```

> Undirected graphs model symmetric relationships.

---

## Undirected Edge As Unordered Pair

An undirected edge can be understood as an unordered pair.

Example:

```text
{A, B}
```

This means the pair contains `A` and `B`, but no first or second direction is being used.

> Undirected edges connect nodes without ordering them.

---

## Directed vs Undirected

Directed:

```text
A -> B
```

The connection has direction.

Undirected:

```text
A -- B
```

The connection has no direction.

Use a directed graph when order or flow matters.

Use an undirected graph when only connection matters.

> The choice depends on what the edge is meant to represent.

---

## Final Summary

- An undirected graph has edges without direction.
- `A -- B` means `A` and `B` are mutually connected.
- Undirected edges are like unordered pairs.
- Undirected graphs model symmetric relationships.
- Directed graphs are used when direction matters.
