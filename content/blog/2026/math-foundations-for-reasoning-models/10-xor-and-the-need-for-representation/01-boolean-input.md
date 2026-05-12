---
title: "Boolean Input"
excerpt: "A Boolean input is a value with two possible states, usually represented as 0 or 1."
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
topicOrder: 1
---

# Boolean Input

## Definition

A Boolean input is an input with two possible values.

Common values:

```text
0
1
```

or:

```text
false
true
```

> Boolean input = input with two possible states.

---

## Boolean Values As Symbols

Boolean values can be represented by symbols.

Example:

```text
0 = false
1 = true
```

The symbols `0` and `1` are not the only possible representation.

We could also write:

```text
F and T
No and Yes
Off and On
```

The important part is that the two states are distinguishable and used consistently.

> Boolean values are two-state symbols.

---

## Boolean Input As Vector Data

Two Boolean inputs can be represented as a vector.

Example:

```text
x = [x1, x2]
```

where each component can be:

```text
0 or 1
```

Possible inputs:

```text
[0, 0]
[0, 1]
[1, 0]
[1, 1]
```

> Boolean inputs can still be treated as vector data.

---

## Discrete Input

Boolean input is discrete.

There are no values between:

```text
0 and 1
```

in the Boolean setting.

The input is either one state or the other.

> Boolean values are separate possibilities, not continuous measurements.

---

## Why Boolean Inputs Matter For XOR

XOR uses two Boolean inputs.

Example:

```text
x1 = 0
x2 = 1
```

The output is also Boolean:

```text
0 or 1
```

This makes XOR small enough to list completely.

> XOR is built from two Boolean inputs and one Boolean output.

---

## Boolean Does Not Mean Simple For Linear Models

Boolean inputs are simple as values.

But their class pattern can still be difficult for a linear classifier.

XOR is the key example.

It has only four possible inputs, but one straight line cannot separate its classes.

> Simple inputs can still create nonlinearly separable patterns.

---

## Final Summary

- A Boolean input has two possible values.
- Common encodings are `0/1` or `false/true`.
- Boolean values are symbols used consistently.
- Two Boolean inputs can form a vector.
- Boolean inputs are discrete.
- XOR uses two Boolean inputs.
- Simple Boolean input can still expose limits of linear classification.
