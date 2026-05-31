---
title: "Query"
excerpt: "A query is the representation of what a position is looking for when attention is computed."
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
topicOrder: 3
---

# Query

## Definition

A query is the part of attention that represents what the current position is looking for.

Simple form:

```text
query = request for relevant information
```

It is not a natural language question.

It is a learned representation used for matching.

> A query tells attention what kind of information is being searched for.

---

## Why A Query Is Needed

Attention needs a way to compare the current position with possible information sources.

Without a query, the system has no current need to match against.

Example:

```text
current position: needs context
other positions: may contain useful information
query: represents the current need
```

> The query gives attention a target for relevance.

---

## Query Is Computed From The Current Representation

The query comes from the current position's representation.

Example:

```text
current representation -> learned transformation -> query
```

The model learns how to produce useful queries during training.

The query is not manually written by a person.

> A query is learned from the representation being updated.

---

## Query Does Not Work Alone

A query only becomes useful when compared with keys.

Basic relationship:

```text
query -> compared with keys -> relevance scores
```

If the query matches a key strongly, that source receives more influence.

If it matches weakly, that source receives less influence.

> A query asks; keys provide matchable descriptions.

---

## Example

Suppose a position is being updated.

Its query may be treated like:

```text
what information helps this position?
```

Other positions have keys.

The query is compared with those keys.

The result helps decide which values are mixed into the output.

> The query is the attention mechanism's current search signal.

---

## Final Summary

- A query represents what the current position is looking for.
- It is a learned representation, not a literal question.
- It comes from the position being updated.
- It is compared with keys.
- Query-key matching produces relevance scores.
