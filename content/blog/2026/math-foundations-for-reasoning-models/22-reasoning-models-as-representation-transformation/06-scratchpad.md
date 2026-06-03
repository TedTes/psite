---
title: "Scratchpad"
excerpt: "A scratchpad is an external workspace where intermediate steps can be represented, inspected, and reused."
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
topicOrder: 6
---

# Scratchpad

## Definition

A scratchpad is an external workspace for intermediate work.

Simple form:

```text
task -> intermediate notes -> final answer
```

In a reasoning model, a scratchpad may be written text, structured data, or tool-visible state.

> A scratchpad externalizes intermediate representation.

---

## Why A Scratchpad Helps

Some information is difficult to keep only in hidden state.

A scratchpad lets the system store intermediate results in a visible form.

Examples:

```text
partial calculation
list of constraints
candidate plan
tool result
draft answer
```

This can reduce the need to recompute or remember everything internally.

> A scratchpad gives reasoning a reusable workspace.

---

## Scratchpad vs Memory

Memory stores information across steps.

A scratchpad is one possible memory medium.

```text
memory:
information preserved for later use

scratchpad:
external place where preserved information is written
```

The scratchpad makes some intermediate state explicit.

> Scratchpad is externalized memory for a task.

---

## Scratchpad vs Hidden State

Hidden state is inside the model's computation.

Scratchpad content is outside the model as visible or retrievable text/state.

```text
hidden state:
not directly inspectable

scratchpad:
can be read again as input
```

This distinction matters for tool use and verification.

> A scratchpad can become input to later steps.

---

## Scratchpad Is Not Automatically Correct

Writing intermediate steps does not guarantee correctness.

The scratchpad can contain:

```text
wrong assumptions
bad calculations
irrelevant notes
incomplete plans
```

It is useful because it can be inspected and revised.

> A scratchpad helps structure reasoning, but it still needs checking.

---

## Final Summary

- A scratchpad is an external workspace.
- It stores intermediate representations.
- It can act as task-level memory.
- It differs from hidden state because it can be read again.
- It is useful but not automatically correct.
