---
title: "Directed Acyclic Graph"
excerpt: "A directed acyclic graph is a directed graph with no directed cycles."
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
topicOrder: 14
---

# Directed Acyclic Graph

## Definition

A directed acyclic graph is a directed graph with no directed cycles.

It is often shortened to:

```text
DAG
```

Directed means edges have arrows.

Acyclic means there is no way to follow arrows and return to the same node.

> DAG = directed graph without directed loops.

---

## Simple Example

Example:

```text
A -> B -> D
A -> C -> D
```

This is a DAG.

The arrows move forward through the structure.

There is no path that returns to `A`, `B`, `C`, or `D`.

> A DAG allows branching and merging without circular flow.

---

## Non-Example

This is not a DAG:

```text
A -> B
B -> C
C -> A
```

Why?

Because it contains a directed cycle:

```text
A -> B -> C -> A
```

> A directed cycle breaks acyclic structure.

---

## DAG vs Tree

A tree branches without cycles.

A DAG also has no directed cycles, but it can allow multiple paths to the same node.

Example:

```text
A -> C
B -> C
```

Node `C` can have more than one incoming edge.

This makes DAGs useful for representing shared dependencies.

> A DAG can merge branches in ways a rooted tree usually does not.

---

## Why DAGs Matter

DAGs are useful when structure must move forward without circular dependency.

Examples:

- task scheduling
- build systems
- prerequisite structure
- data processing pipelines
- computation graphs

> DAGs represent ordered dependency without loops.

---

## Final Summary

- A directed acyclic graph is a directed graph with no directed cycles.
- It is often called a DAG.
- A DAG can branch and merge.
- A DAG cannot contain circular arrow-following paths.
- DAGs are useful for dependency and flow structure.
