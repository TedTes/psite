---
title: "Function"
excerpt: "A function maps each allowed input to exactly one output."
date: 2026-05-01
tags:
  - Foundations
  - Abstract Structure
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Sets, Relations, and Functions"
chapterSlug: sets-relations-and-functions
chapterOrder: 3
topicOrder: 21
---

# Function

## Definition

A function maps each allowed input to exactly one output.

Basic form:

```text
input -> output
```

Example:

```text
f(x) = x + 1
```

Then:

```text
f(2) = 3
f(5) = 6
```

> Function = rule that assigns one output to each allowed input.

---

## Function As A Relation

A function can be seen as a special kind of relation.

Example:

```text
f = {(1, 2), (2, 3), (3, 4)}
```

Each ordered pair connects an input to an output.

The first value is the input.

The second value is the output.

> A function is a relation with a stricter rule.

---

## The One Output Requirement

For a relation to be a function, one input cannot point to two different outputs.

This is a function:

```text
{(1, a), (2, b), (3, c)}
```

This is not a function:

```text
{(1, a), (1, b), (2, c)}
```

Why?

Because input `1` maps to both `a` and `b`.

> A function cannot give two different answers for the same input.

---

## Inputs Do Not Have To Be Numbers

Functions can operate on many kinds of inputs.

Examples:

```text
lowercase word -> uppercase word
file name -> file extension
person -> birth year
state -> next state
```

The key requirement is not that the input is numeric.

The key requirement is that each allowed input has exactly one output.

> Function is about mapping, not just arithmetic.

---

## Why Functions Matter

Functions make transformation precise.

They let us ask:

- what inputs are allowed?
- what output does each input produce?
- can two inputs produce the same output?
- does every possible output get used?

These questions become important when studying structure and computation.

> Functions turn rules into precise input-output mappings.

---

## Final Summary

- A function maps each allowed input to exactly one output.
- A function can be represented as ordered pairs.
- A function is a special kind of relation.
- One input cannot map to two different outputs.
- Inputs do not have to be numbers.
- Functions make transformation precise.
