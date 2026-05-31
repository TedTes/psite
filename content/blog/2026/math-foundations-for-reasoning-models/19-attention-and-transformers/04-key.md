---
title: "Key"
excerpt: "A key is the representation used to decide whether a source position matches a query."
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
topicOrder: 4
---

# Key

## Definition

A key is the part of attention that represents what a source position can be matched against.

Simple form:

```text
key = matchable description of a source
```

The query is compared with keys to decide relevance.

> A key lets attention judge whether a source is relevant to the current query.

---

## Why Keys Are Needed

Attention needs more than a current request.

It also needs a way to describe each possible source.

Example:

```text
query:
what does the current position need?

key:
what does this source position offer for matching?
```

The comparison produces a score.

> Keys make information sources searchable by attention.

---

## Key Is Not The Same As Value

This distinction matters.

The key is used for matching.

The value is the information that gets passed forward.

```text
key:
used to decide relevance

value:
used to build the output
```

The model may use one representation to decide whether a source matters and another representation as the content to copy from.

> Keys decide access; values supply information.

---

## Query-Key Match

Attention compares a query with each key.

Example:

```text
query compared with key A -> score A
query compared with key B -> score B
query compared with key C -> score C
```

Higher score means stronger match.

The scores are later turned into attention weights.

> Query-key comparison creates relevance scores.

---

## Key Is Learned

A key is not manually assigned.

It is produced by a learned transformation.

Example:

```text
source representation -> learned transformation -> key
```

During training, the model learns key representations that help useful matching happen.

> Keys are learned match signals.

---

## Final Summary

- A key is a matchable representation of a source position.
- A query is compared with keys.
- Query-key comparison produces relevance scores.
- Keys are used for matching, not directly as the passed content.
- Values carry the information that attention mixes into the output.
