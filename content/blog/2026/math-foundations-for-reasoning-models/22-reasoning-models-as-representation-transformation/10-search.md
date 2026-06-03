---
title: "Search"
excerpt: "Search is the exploration of possible states, steps, plans, or answers before choosing a path forward."
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
topicOrder: 10
---

# Search

## Definition

Search is the exploration of possible options.

Simple form:

```text
current state -> possible next states -> selected path
```

In reasoning models, search can apply to answers, plans, tool calls, or intermediate steps.

> Search explores possible paths before choosing one.

---

## Why Search Is Needed

Some tasks have many possible paths.

Examples:

```text
multiple solution strategies
many possible tool calls
different interpretations
several candidate answers
```

The model or system may need to compare alternatives.

> Search helps when the next step is not obvious.

---

## Search Space

The search space is the set of possible options being explored.

Examples:

```text
possible answers
possible plans
possible actions
possible program edits
possible proof steps
```

A larger search space can be more powerful but also more expensive.

> Search space defines what can be considered.

---

## Search Is Not Always Exhaustive

A reasoning model usually cannot explore every possible path.

It may use limited search.

Examples:

```text
consider a few candidates
sample alternatives
rank likely options
use heuristics
```

This makes search practical but imperfect.

> Search often explores enough to help, not everything possible.

---

## Search And Verification

Search produces candidates.

Verification checks candidates.

Simple flow:

```text
generate options -> evaluate options -> choose or revise
```

This combination is stronger than generation alone.

> Search is more useful when paired with evaluation.

---

## Final Summary

- Search explores possible paths.
- It can apply to answers, plans, steps, or tool calls.
- The search space defines available options.
- Search is usually limited, not exhaustive.
- Search works best with verification.
