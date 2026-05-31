---
title: "Self-Attention"
excerpt: "Self-attention lets positions in the same sequence use each other when updating their own representations."
date: 2026-05-01
tags:
  - Foundations
  - Transformers
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Attention and Transformers"
chapterSlug: attention-and-transformers
chapterOrder: 19
topicOrder: 2
---

# Self-Attention

## Definition

Self-attention is attention applied within the same sequence.

Each position can look at other positions in that same sequence.

Basic idea:

```text
position 1 uses positions 1, 2, 3, ...
position 2 uses positions 1, 2, 3, ...
position 3 uses positions 1, 2, 3, ...
```

> Self-attention updates each position using information from the sequence itself.

---

## Why It Is Called Self-Attention

The word "self" means the sequence attends to itself.

The information source and the information target come from the same collection.

Example:

```text
input sequence:
the cat slept

each word can use information from the other words
```

This does not mean the system has a self.

It only means the sequence is used as its own context.

> Self-attention is internal attention within one sequence.

---

## What Gets Updated

Self-attention does not usually replace a token with another token.

It updates the representation at each position.

Example:

```text
old representation at position 2
       +
information from other positions
       ->
new representation at position 2
```

The position stays in place.

The information inside that position changes.

> Self-attention enriches each position with context from other positions.

---

## Difference From Recurrence

Recurrence processes sequence information step by step.

Self-attention can connect positions more directly.

Example:

```text
recurrence:
A -> B -> C -> D

self-attention:
D can directly use A, B, C, and D
```

This direct interaction is one reason self-attention became useful for long sequences.

> Self-attention reduces the need for information to travel only through neighboring steps.

---

## Same Sequence, Different Roles

Even though the same sequence is used, each position may use it differently.

Example:

```text
position 1 may focus on position 3
position 2 may focus on position 1
position 3 may focus on position 2
```

The weights depend on the current position and the available context.

> Self-attention is context-dependent interaction inside a sequence.

---

## Final Summary

- Self-attention applies attention within one sequence.
- Each position can use information from other positions.
- The output is an updated representation at each position.
- It does not imply awareness or identity.
- It gives sequence positions a direct way to influence each other.
