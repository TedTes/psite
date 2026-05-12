---
title: "XOR Definition"
excerpt: "XOR is a Boolean rule that outputs true when exactly one input is true."
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
topicOrder: 2
---

# XOR Definition

## Definition

XOR means exclusive OR.

It outputs `1` when exactly one input is `1`.

It outputs `0` when the inputs are the same.

Basic rule:

```text
XOR(x1, x2) = 1 if x1 and x2 are different
XOR(x1, x2) = 0 if x1 and x2 are the same
```

> XOR = true when exactly one input is true.

---

## Same Inputs

When both inputs are the same, XOR outputs `0`.

Examples:

```text
XOR(0, 0) = 0
XOR(1, 1) = 0
```

Why?

Because there is not exactly one true input.

> Same inputs produce output `0`.

---

## Different Inputs

When the inputs are different, XOR outputs `1`.

Examples:

```text
XOR(0, 1) = 1
XOR(1, 0) = 1
```

Why?

Because exactly one input is true.

> Different inputs produce output `1`.

---

## XOR vs OR

Normal OR outputs `1` if at least one input is `1`.

Example:

```text
OR(1, 1) = 1
```

XOR is stricter.

It excludes the case where both inputs are true:

```text
XOR(1, 1) = 0
```

> XOR is OR with the "both true" case excluded.

---

## XOR As Classification

XOR can be treated as a classification task.

Input:

```text
[x1, x2]
```

Output class:

```text
0 or 1
```

Examples:

```text
[0, 0] -> 0
[0, 1] -> 1
[1, 0] -> 1
[1, 1] -> 0
```

> XOR maps two input bits to one output class.

---

## Why XOR Matters

XOR matters because it is simple but not linearly separable in the original input space.

There are only four possible inputs.

But no single straight line can separate output `1` from output `0`.

> XOR is a small problem that exposes a real limit of one perceptron.

---

## Final Summary

- XOR means exclusive OR.
- It outputs `1` when exactly one input is `1`.
- It outputs `0` when inputs are the same.
- XOR differs from OR because `XOR(1, 1) = 0`.
- XOR can be treated as a binary classification task.
- XOR is simple but not linearly separable in its original two-input representation.
