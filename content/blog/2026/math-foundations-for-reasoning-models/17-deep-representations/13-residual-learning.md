---
title: "Residual Learning"
excerpt: "Residual learning lets layers learn changes to an existing representation instead of rebuilding the whole representation."
date: 2026-05-01
tags:
  - Foundations
  - Representation
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Deep Representations"
chapterSlug: deep-representations
chapterOrder: 17
topicOrder: 13
---

# Residual Learning

## Definition

Residual learning is a pattern where a layer learns a change to an existing representation.

Instead of learning the whole transformation from scratch, the layer learns an adjustment.

Basic form:

```text
output = input + learned change
```

> Residual learning means learning what to add or modify.

---

## Residual Meaning

A residual is a leftover difference.

In this context:

```text
input representation = what already exists
learned residual = change to apply
output representation = input + change
```

The layer does not need to replace the input completely.

It can improve or adjust it.

> A residual is the modification added to an existing representation.

---

## Why This Helps

Sometimes the useful transformation is close to keeping the input the same.

In that case, learning a small change can be easier than learning an entirely new mapping.

Example:

```text
keep most of the representation
adjust the parts that matter
```

This helps deep networks add refinement across layers.

> Residual learning makes layers learn refinements.

---

## Relation To Skip Connections

Residual learning commonly uses skip connections.

The skip path carries the original input forward.

The layer path computes a change.

Then they are combined.

```text
skip path: input
layer path: learned change
combined: input + learned change
```

> Skip connections provide the path that makes residual learning possible.

---

## Final Summary

- Residual learning learns changes to a representation.
- The basic form is `output = input + learned change`.
- A residual is the difference or adjustment being added.
- This can be easier than learning a full replacement.
- Residual learning often uses skip connections.
- It helps deep networks refine representations across layers.
