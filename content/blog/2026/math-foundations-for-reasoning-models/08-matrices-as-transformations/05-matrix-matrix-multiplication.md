---
title: "Matrix-Matrix Multiplication"
excerpt: "Matrix-matrix multiplication combines two matrix transformations into one transformation."
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
topicOrder: 5
---

# Matrix-Matrix Multiplication

## Definition

Matrix-matrix multiplication combines two matrices.

If matrices represent transformations, multiplying them creates a new transformation.

Basic form:

```text
A * B = C
```

`C` is the matrix that represents applying `B` and then `A`.

> Matrix-matrix multiplication combines transformations.

---

## Shape Requirement

For:

```text
A * B
```

the number of columns in `A` must match the number of rows in `B`.

Example:

```text
A is 2 x 3
B is 3 x 4
```

Then:

```text
A * B is valid
```

The result shape is:

```text
2 x 4
```

> Inner dimensions must match. Outer dimensions become the result shape.

---

## Why The Shape Rule Exists

A matrix transformation needs an input of the right size.

Example:

```text
B maps 4-component vectors to 3-component vectors
A maps 3-component vectors to 2-component vectors
```

Then applying `B` first gives something `A` can accept:

```text
4 components -> B -> 3 components -> A -> 2 components
```

So:

```text
A * B maps 4 components to 2 components
```

> Matrix multiplication works when the output of one transformation fits the input of the next.

---

## Entry Calculation

Each entry in the result comes from a row-column dot product.

Example:

```text
A =
[1 2]
[3 4]

B =
[5 6]
[7 8]
```

Result entry at row 1, column 1:

```text
dot([1, 2], [5, 7]) = 1*5 + 2*7 = 19
```

Result entry at row 1, column 2:

```text
dot([1, 2], [6, 8]) = 1*6 + 2*8 = 22
```

> Matrix multiplication uses row-column alignment.

---

## Full Example

Using:

```text
A =
[1 2]
[3 4]

B =
[5 6]
[7 8]
```

The result is:

```text
A * B =
[19 22]
[43 50]
```

Because:

```text
row 1 with column 1 = 19
row 1 with column 2 = 22
row 2 with column 1 = 43
row 2 with column 2 = 50
```

> Every result entry comes from one row of the first matrix and one column of the second.

---

## Order Matters

Matrix multiplication usually depends on order.

In general:

```text
A * B is not the same as B * A
```

Why?

Because transformations happen in sequence.

Changing the order changes the sequence.

> Matrix multiplication is usually not order-swappable.

---

## Why It Matters

Matrix-matrix multiplication lets us combine multiple transformations into one.

Example:

```text
first scale
then rotate
then project
```

These can be represented by separate matrices.

Multiplying them can produce one matrix that performs the combined transformation.

> Matrix multiplication composes structured vector transformations.

---

## Final Summary

- Matrix-matrix multiplication combines matrices.
- It is valid when inner dimensions match.
- The result shape comes from the outer dimensions.
- Each result entry is a row-column dot product.
- Order usually matters.
- Multiplication can combine transformations into one transformation.
