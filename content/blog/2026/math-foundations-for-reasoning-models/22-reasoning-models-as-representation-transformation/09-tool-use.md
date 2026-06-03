---
title: "Tool Use"
excerpt: "Tool use lets a model extend its computation by calling external systems and integrating their results."
date: 2026-05-01
tags:
  - Foundations
  - AI Systems
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Reasoning Models as Representation Transformation"
chapterSlug: reasoning-models-as-representation-transformation
chapterOrder: 22
topicOrder: 9
---

# Tool Use

## Definition

Tool use means a model calls an external system to perform part of a task.

Simple form:

```text
model -> tool call -> tool result -> model continues
```

The tool may search, calculate, fetch data, edit files, run code, or perform another operation.

> Tool use extends the model's computation beyond text generation.

---

## Why Tools Are Useful

A model has limits.

It may need:

```text
current information
exact calculation
file access
code execution
database lookup
external action
```

A tool can provide information or capability the model does not have internally.

> Tools connect reasoning to external state and operations.

---

## Tool Use As State Transition

Tool use changes the computation state.

Example:

```text
before tool:
model has a question

tool call:
search or compute

after tool:
model has new evidence
```

The tool result becomes part of the next input state.

> A tool call is a transition that adds external information or action result.

---

## Choosing Tools

A reasoning model must decide:

```text
whether to use a tool
which tool to use
what input to send
how to interpret the result
what to do next
```

This makes tool use part of planning and control.

> Tool use requires selecting and integrating external operations.

---

## Tools Do Not Guarantee Correctness

Tools can help, but errors can still happen.

Examples:

```text
wrong tool choice
bad query
misread result
outdated source
tool failure
```

The model still needs verification and careful integration.

> Tool use increases capability, but it does not remove the need for reasoning discipline.

---

## Final Summary

- Tool use lets a model call external systems.
- Tools can provide data, calculation, execution, or action.
- Tool results become part of later computation.
- Choosing and interpreting tools is itself a reasoning task.
- Tools improve capability but do not guarantee correctness.
