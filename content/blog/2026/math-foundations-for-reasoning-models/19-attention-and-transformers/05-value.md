---
title: "Value"
excerpt: "A value is the information a source position contributes after attention weights are computed."
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
topicOrder: 5
---

# Value

## Definition

A value is the information from a source position that can be passed into the attention output.

Simple form:

```text
value = content available to be mixed into the result
```

Keys are used to decide relevance.

Values are used to build the output.

> A value is the information attention carries forward from a source.

---

## Why Values Are Needed

Attention has two jobs:

```text
1. decide what is relevant
2. use relevant information to update the representation
```

Queries and keys handle the first job.

Values handle the second job.

> Values are the material that attention combines after relevance is estimated.

---

## Key vs Value

A source position produces both a key and a value.

```text
source representation -> key
source representation -> value
```

The key answers:

```text
should this source be used?
```

The value answers:

```text
what information should be used if this source matters?
```

> Key is for matching; value is for contribution.

---

## Weighted Values

After attention weights are computed, each value is multiplied by its weight.

Example:

```text
value A * 0.7
value B * 0.2
value C * 0.1
```

Then the weighted values are combined.

```text
output = weighted mixture of values
```

> Attention output is built from weighted values.

---

## Values Are Learned Representations

Values are not raw tokens.

They are learned representations derived from the current layer's data.

Example:

```text
position representation -> learned transformation -> value
```

This means attention moves learned information, not original text directly.

> Values are transformed information sources.

---

## Final Summary

- A value is the information a source position can contribute.
- Keys decide relevance.
- Values provide content.
- Attention weights scale values.
- The output is a weighted mixture of values.
