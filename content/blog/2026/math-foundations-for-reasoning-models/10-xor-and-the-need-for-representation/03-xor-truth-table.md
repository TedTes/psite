---
title: "XOR Truth Table"
excerpt: "The XOR truth table lists every possible input pair and its output."
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
chapter: "XOR and the Need for Representation"
chapterSlug: xor-and-the-need-for-representation
chapterOrder: 10
topicOrder: 3
---

# XOR Truth Table

## Definition

A truth table lists every possible input and output for a Boolean rule.

For XOR, there are two Boolean inputs:

```text
x1
x2
```

Each can be:

```text
0 or 1
```

So there are four possible input pairs.

> A truth table makes a Boolean rule explicit.

---

## XOR Truth Table

The XOR truth table is:

```text
x1  x2  XOR
0   0   0
0   1   1
1   0   1
1   1   0
```

The output is `1` only when the inputs are different.

> XOR is true for different inputs and false for matching inputs.

---

## Reading The Table

Row by row:

```text
0, 0 -> 0
```

Both inputs are false.

Output is `0`.

```text
0, 1 -> 1
```

Exactly one input is true.

Output is `1`.

```text
1, 0 -> 1
```

Exactly one input is true.

Output is `1`.

```text
1, 1 -> 0
```

Both inputs are true.

Output is `0`.

> The middle two rows are positive. The matching-input rows are negative.

---

## Inputs As Points

Each input pair can be treated as a point in 2D.

```text
[0, 0]
[0, 1]
[1, 0]
[1, 1]
```

The output gives the class label for each point.

```text
[0, 0] -> class 0
[0, 1] -> class 1
[1, 0] -> class 1
[1, 1] -> class 0
```

> The truth table becomes a small dataset.

---

## Class Pattern

The class `1` points are:

```text
[0, 1]
[1, 0]
```

The class `0` points are:

```text
[0, 0]
[1, 1]
```

This creates a diagonal pattern.

Class `1` is on one diagonal.

Class `0` is on the other diagonal.

> XOR places matching inputs and different inputs on opposite diagonals.

---

## Why The Truth Table Matters

The truth table shows the whole problem.

There are no hidden cases.

All possible inputs are listed.

That makes XOR useful for studying the limits of a classifier.

If one perceptron cannot solve these four rows, the issue is not missing data.

The issue is representation and linear separability.

> XOR is small enough to inspect completely.

---

## Final Summary

- A truth table lists all Boolean input-output cases.
- XOR with two inputs has four rows.
- XOR outputs `1` for different inputs.
- XOR outputs `0` for matching inputs.
- The table can be treated as a small classification dataset.
- The class pattern forms opposite diagonals.
- This pattern exposes linear inseparability.
