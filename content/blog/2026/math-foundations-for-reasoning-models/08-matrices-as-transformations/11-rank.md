---
title: "Rank"
excerpt: "Rank describes how many independent directions a matrix transformation preserves or produces."
date: 2026-05-01
tags:
  - Foundations
  - Matrices
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Matrices as Transformations"
chapterSlug: matrices-as-transformations
chapterOrder: 8
topicOrder: 11
---

# Rank

## Definition

Rank describes how much independent structure a matrix has.

One useful way to think about it:

```text
rank = number of independent output directions
```

Example:

```text
[1 0]
[0 1]
```

has rank `2`.

It preserves two independent directions.

> Rank measures independent dimensional structure.

---

## Rank And Independent Rows

Rows can be independent or dependent.

Example:

```text
[1 0]
[0 1]
```

The rows point in different directions.

Rank:

```text
2
```

Another example:

```text
[1 0]
[2 0]
```

The second row is just `2` times the first.

Rank:

```text
1
```

> Dependent rows do not add new rank.

---

## Rank And Independent Columns

Rank can also be understood through columns.

Example:

```text
[1 0]
[0 1]
```

The columns are independent.

Rank:

```text
2
```

Example:

```text
[1 2]
[0 0]
```

The columns both lie in the same output direction.

Rank:

```text
1
```

> Rank describes independent column structure too.

---

## Full Rank

A matrix has full rank when it preserves as much independent structure as its shape allows.

For a 2 x 2 matrix:

```text
rank 2 = full rank
```

Example:

```text
[1 0]
[0 1]
```

This transformation keeps two independent directions.

> Full rank means no avoidable loss of independent directions.

---

## Low Rank

A matrix has low rank when it collapses some independent structure.

Example:

```text
[1 0]
[0 0]
```

This sends:

```text
[x, y] -> [x, 0]
```

The second direction is lost.

Rank:

```text
1
```

> Low rank means some directions are collapsed or redundant.

---

## Rank And Invertibility

For a square matrix to be invertible, it must have full rank.

Example:

```text
2 x 2 matrix
rank 2 -> can be invertible
rank 1 -> not invertible
```

If rank is lower than full, some information is lost.

Lost information cannot be recovered.

> Invertibility requires preserving all independent directions.

---

## Why Rank Matters

Rank helps answer:

```text
How many independent directions remain?
Did the transformation collapse information?
Are some rows or columns redundant?
Can the transformation be reversed?
```

> Rank measures how much independent structure survives.

---

## Final Summary

- Rank measures independent structure in a matrix.
- It can be understood through independent rows or columns.
- Full rank preserves as many directions as possible.
- Low rank means redundancy or collapse.
- A square matrix must have full rank to be invertible.
- Rank helps detect information loss.
