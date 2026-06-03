---
title: "Intermediate Representation"
excerpt: "An intermediate representation is a temporary transformed state between the input and final output."
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
topicOrder: 3
---

# Intermediate Representation

## Definition

An intermediate representation is a representation produced between the input and the final output.

Simple form:

```text
input representation -> intermediate representation -> output representation
```

It is not the final answer.

It is a temporary state used during computation.

> Intermediate representations carry partial structure during reasoning.

---

## Why Intermediate Representations Matter

Reasoning often cannot jump directly from input to output.

The model may need to hold:

```text
partial results
constraints
possible steps
relationships
uncertainty
```

Intermediate representations let the model preserve and transform this information.

> Multi-step tasks need useful states between start and finish.

---

## Visible vs Hidden Intermediate Representations

Some intermediate representations are visible.

Example:

```text
written scratchpad text
tool output
draft answer
```

Others are hidden inside the model.

Example:

```text
hidden states across layers
internal activations
contextual embeddings
```

Both can affect the final output.

> Intermediate representation can be external text or internal model state.

---

## Not Necessarily Human-Readable

Internal representations do not need to look like human reasoning.

They may be distributed across many dimensions.

They may not map cleanly to a sentence or symbolic step.

```text
useful for model computation
not directly readable by humans
```

> A representation can be computationally useful without being interpretable.

---

## Connection To State

Earlier, state was the current description of a system.

An intermediate representation is part of the model's changing state during computation.

```text
state at step t -> state at step t + 1
```

Reasoning can be viewed as a sequence of representational states.

> Intermediate representations are reasoning states in motion.

---

## Final Summary

- An intermediate representation exists between input and output.
- It carries partial information during computation.
- It may be visible or hidden.
- It does not need to be human-readable.
- Reasoning can be understood as changing intermediate representations.
