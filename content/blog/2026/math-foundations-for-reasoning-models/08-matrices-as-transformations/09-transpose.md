---
title: "Transpose"
excerpt: "The transpose flips a matrix across its main diagonal by turning rows into columns."
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
topicOrder: 9
---

# Transpose

## Definition

The transpose of a matrix turns rows into columns.

Example:

```text
A =
[1 2 3]
[4 5 6]
```

Transpose:

```text
A transpose =
[1 4]
[2 5]
[3 6]
```

> Transpose swaps rows and columns.

---

## Shape Change

If a matrix has shape:

```text
rows x columns
```

then its transpose has shape:

```text
columns x rows
```

Example:

```text
A is 2 x 3
A transpose is 3 x 2
```

> Transpose flips the matrix shape.

---

## Row Becomes Column

Start with:

```text
A =
[1 2 3]
[4 5 6]
```

First row:

```text
[1 2 3]
```

becomes first column:

```text
[1]
[2]
[3]
```

Second row:

```text
[4 5 6]
```

becomes second column:

```text
[4]
[5]
[6]
```

> Transpose reorganizes the same entries.

---

## Entries Are Not Changed

Transpose does not change the values themselves.

It changes where they sit.

Example:

```text
1 stays 1
2 stays 2
3 stays 3
```

But row and column positions are swapped.

> Transpose changes arrangement, not entry values.

---

## Transpose Twice

If you transpose twice, you return to the original matrix.

Example:

```text
A -> A transpose -> A
```

Why?

Because swapping rows and columns twice restores the original arrangement.

> Transpose is its own undo operation.

---

## Why Transpose Matters

Transpose is useful because it changes how a matrix is oriented.

It can help:

- turn row data into column data
- align shapes for multiplication
- compare rows and columns
- express relationships between transformations

> Transpose is a basic operation for rearranging matrix structure.

---

## Transpose And Dot Product

A dot product can be written using a row vector and a column vector.

Example:

```text
[2 3] * [4]
        [5]
```

means:

```text
2*4 + 3*5 = 23
```

Transpose helps switch between row and column orientation.

> Transpose helps align vectors for matrix-style multiplication.

---

## Final Summary

- Transpose swaps rows and columns.
- A rows x columns matrix becomes columns x rows.
- Entry values stay the same.
- Transposing twice returns the original matrix.
- Transpose helps align shapes and compare matrix structure.
- It is a basic operation for reorganizing matrices.
