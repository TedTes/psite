---
title: "Linear Independence"
excerpt: "Linear independence means vectors provide directions that cannot be built from each other."
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
topicOrder: 13
---

# Linear Independence

## Definition

Vectors are linearly independent when none of them can be built from the others using a linear combination.

Simple example:

```text
[1, 0]
[0, 1]
```

Neither vector can be made by scaling the other.

They provide different directions.

> Linear independence = no vector is redundant.

---

## Dependent Vectors

Vectors are linearly dependent when at least one vector can be built from the others.

Example:

```text
[1, 0]
[2, 0]
```

The second vector is:

```text
2 * [1, 0] = [2, 0]
```

So it does not add a new direction.

> Linear dependence means at least one vector repeats existing structure.

---

## Independent Directions

In two dimensions:

```text
[1, 0]
[0, 1]
```

give two independent directions.

One controls the first component.

One controls the second component.

Together they can build any vector like:

```text
[3, 5]
```

using:

```text
3 * [1, 0] + 5 * [0, 1]
```

> Independent vectors expand what can be built.

---

## Redundancy

Linear dependence means redundancy.

Example:

```text
v = [1, 2]
w = [2, 4]
```

Since:

```text
w = 2 * v
```

`w` does not add a new direction.

It gives more of the same direction.

> Dependent vectors add size, not new structure.

---

## Why Independence Matters

Independence tells us whether a set of vectors carries unique directions.

This matters when building a coordinate system.

A useful basis should avoid redundant vectors.

Example:

```text
[1, 0]
[0, 1]
```

is useful in two dimensions because each vector contributes something the other cannot.

> Independence is needed for clean vector representation.

---

## Not About Meaning

Linear independence is structural.

It does not depend on what the vectors mean in the real world.

Example:

```text
[1, 0]
[0, 1]
```

They may represent positions, measurements, or abstract data components.

The independence relation is about whether one can be built from the other.

> Linear independence is about construction, not interpretation.

---

## Final Summary

- Linearly independent vectors cannot be built from each other.
- Linearly dependent vectors contain redundancy.
- Scaling one vector cannot create a new independent direction.
- Independent vectors add new structure.
- Basis vectors should be independent.
- Independence is structural, not semantic.
