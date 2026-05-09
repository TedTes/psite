---
title: "Span"
excerpt: "Span is the set of all vectors that can be built from given vectors using linear combinations."
date: 2026-05-01
tags:
  - Foundations
  - Vectors
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Vectors as Data"
chapterSlug: vectors-as-data
chapterOrder: 6
topicOrder: 14
---

# Span

## Definition

Span is the set of all vectors that can be built from given vectors using linear combinations.

Example:

```text
v = [1, 0]
w = [0, 1]
```

Using:

```text
a * v + b * w
```

we can build:

```text
[a, b]
```

So these two vectors span all two-component vectors.

> Span = everything you can build from available vectors.

---

## Span With One Vector

Start with one vector:

```text
v = [1, 2]
```

All scalar multiples are in its span:

```text
0 * v = [0, 0]
1 * v = [1, 2]
2 * v = [2, 4]
-1 * v = [-1, -2]
```

This creates all vectors in that same direction.

> One vector spans all scaled versions of itself.

---

## Span With Two Independent Vectors

Use:

```text
[1, 0]
[0, 1]
```

Linear combinations create:

```text
a * [1, 0] + b * [0, 1] = [a, b]
```

By choosing different `a` and `b`, we can create any two-component vector.

> Independent vectors can span a larger space.

---

## Span With Redundant Vectors

Use:

```text
[1, 0]
[2, 0]
```

Both point in the same direction.

Any linear combination gives:

```text
a * [1, 0] + b * [2, 0] = [a + 2b, 0]
```

The second component is always `0`.

So these vectors cannot build `[0, 1]`.

> Redundant vectors limit the span.

---

## Span As Reachability

Span answers a reachability question:

```text
Which vectors can be reached using these building blocks?
```

Example:

```text
starting vectors: [1, 0], [0, 1]
reachable: [3, 5]
```

because:

```text
3 * [1, 0] + 5 * [0, 1] = [3, 5]
```

> Span describes what can be constructed.

---

## Span And Basis

A basis is a set of independent vectors that spans a space.

Example:

```text
[1, 0]
[0, 1]
```

These vectors are:

```text
independent
able to build all two-component vectors
```

So they form a basis for two-dimensional vectors.

> Basis = independent vectors that span the space.

---

## Why Span Matters For Data

If data lives in a vector structure, span tells what kinds of data patterns can be represented.

If the available vectors span only a limited set, then some vectors cannot be built.

That means the representation has limits.

> Span connects available structure to representable possibilities.

---

## Final Summary

- Span is the set of vectors buildable from given vectors.
- It uses linear combinations.
- One vector spans scaled versions of itself.
- Independent vectors can span more structure.
- Redundant vectors limit what can be built.
- A basis is independent and spans the space.
- Span describes representational reach.
