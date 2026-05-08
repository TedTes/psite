---
title: "Node"
excerpt: "A node is an individual object in a graph, used to represent something that can be connected to other things."
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
topicOrder: 1
---

# Node

## Definition

A node is an individual object in a graph.

It represents something that can be connected to other things.

Example:

```text
Nodes: A, B, C
```

The nodes are the things being studied.

> Node = object in a graph.

---

## Node As Element

From the previous chapter, a set contains elements.

A graph starts with a set of nodes.

Example:

```text
V = {A, B, C}
```

Here `V` is the set of nodes.

Each node is one element of that set.

> Nodes are the elements that graph structure is built on.

---

## What A Node Can Represent

A node can represent many kinds of things.

Examples:

- a person
- a city
- a web page
- a task
- a state
- a value in a computation

The graph does not care what the node means by itself.

The graph cares about how nodes are connected.

> Meaning comes from interpretation; graph structure comes from connections.

---

## Label vs Node

A node may have a label.

Example:

```text
Node label: A
```

The label is a name used to refer to the node.

The node is the object inside the graph.

Two graphs can both have a node labeled `A`, but those nodes belong to different graph structures.

> A label names a node; it is not the whole structure of the node.

---

## Why Nodes Matter

Nodes let us separate objects from relationships.

Example:

```text
Objects: A, B, C
Connections: A connected to B, B connected to C
```

Without nodes, there is nothing to connect.

Without connections, nodes are just isolated objects.

> Graphs begin by identifying the objects that can participate in structure.

---

## Final Summary

- A node is an object in a graph.
- A graph starts with a set of nodes.
- Nodes can represent many kinds of things.
- A label names a node.
- Nodes become useful when connections between them are defined.
