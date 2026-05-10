---
title: "Matrix as Transformation"
excerpt: "A matrix can represent a rule that transforms an input vector into an output vector."
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
topicOrder: 3
---

# Matrix As Transformation

## Definition

A matrix can represent a transformation.

That means it can act on an input vector and produce an output vector.

Basic form:

```text
matrix * input vector = output vector
```

Example idea:

```text
A * v = new v
```

> Matrix as transformation = structured rule for changing vectors.

---

## Transformation From Vector To Vector

A vector can represent a point or data item.

Example:

```text
v = [2, 3]
```

A matrix can transform it:

```text
v -> transformed v
```

Example output:

```text
[2, 3] -> [4, 6]
```

This could represent scaling both components by `2`.

> A matrix can turn one vector into another vector.

---

## Component Rules

A matrix transformation creates output components from input components.

Example:

```text
input = [x, y]
```

A transformation might define:

```text
new x = 2*x
new y = 3*y
```

If:

```text
input = [4, 5]
```

then:

```text
output = [8, 15]
```

> A matrix packages component update rules.

---

## Transformations Can Scale

A matrix can scale components.

Example rule:

```text
new x = 2*x
new y = 2*y
```

Input:

```text
[3, 4]
```

Output:

```text
[6, 8]
```

The vector keeps its direction but becomes larger.

> Scaling is one kind of matrix transformation.

---

## Transformations Can Mix Components

A matrix can also mix components.

Example:

```text
new x = x + y
new y = y
```

Input:

```text
[3, 4]
```

Output:

```text
[7, 4]
```

The first output component uses both input components.

> Matrix transformations can combine components, not only scale them separately.

---

## Transformation vs Data Storage

A matrix can be used in two ways:

```text
as data storage
as transformation rule
```

As data storage:

```text
rows = examples
columns = features
```

As transformation:

```text
matrix acts on vector
```

The same rectangular structure can serve different roles.

> A matrix's role depends on how it is used.

---

## Why This Matters

Matrix transformations connect algebra, vectors, and computation.

They fit the familiar pattern:

```text
input -> rule -> output
```

In matrix form:

```text
input vector -> matrix transformation -> output vector
```

> A matrix is a compact way to describe structured vector computation.

---

## Final Summary

- A matrix can represent a transformation.
- It can map an input vector to an output vector.
- It packages component update rules.
- It can scale, mix, or rearrange components.
- A matrix can also be used as data storage.
- Matrix transformations are structured input-output rules.
