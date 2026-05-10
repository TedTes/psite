---
title: "Composition of Transformations"
excerpt: "Composition means applying transformations in sequence, where one output becomes the next input."
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
topicOrder: 6
---

# Composition Of Transformations

## Definition

Composition means applying transformations in sequence.

Example:

```text
input -> transformation 1 -> intermediate output -> transformation 2 -> final output
```

If transformations are matrices, composition can be represented by matrix multiplication.

> Composition = chaining transformations.

---

## Step-By-Step Example

Start with:

```text
v = [2, 3]
```

First transformation:

```text
scale by 2
[2, 3] -> [4, 6]
```

Second transformation:

```text
swap components
[4, 6] -> [6, 4]
```

The composed transformation sends:

```text
[2, 3] -> [6, 4]
```

> A composed transformation is the total effect of several steps.

---

## Output Becomes Input

Composition works because the output of one transformation becomes the input to the next.

Example:

```text
v -> B(v) -> A(B(v))
```

Read this as:

```text
apply B first
then apply A
```

The composed transformation is:

```text
A * B
```

> In `A * B`, `B` acts first on the vector.

---

## Why Order Matters

Changing the order can change the result.

Example:

```text
scale then shift direction
```

may not match:

```text
shift direction then scale
```

For matrices:

```text
A * B is usually not equal to B * A
```

This is because the sequence of transformations matters.

> Composition is order-sensitive.

---

## Composition As One Rule

Multiple transformations can be replaced by one combined transformation.

Example:

```text
v -> B(v) -> A(B(v))
```

can be represented as:

```text
v -> (A * B)(v)
```

The matrix `A * B` packages the combined effect.

> Composition compresses a sequence into one transformation rule.

---

## Connection To Computation

Composition matches the computation pattern from earlier chapters:

```text
state -> rule -> next state
```

With transformations:

```text
vector -> matrix -> new vector
```

With composition:

```text
vector -> matrix B -> matrix A -> final vector
```

> Composition is step-by-step computation over vectors.

---

## Why It Matters

Complex transformations can be built from simple ones.

Example:

```text
scale
rotate
project
```

Each can be represented separately.

Composition lets them act as one structured operation.

> Composition explains how simple transformations build complex transformations.

---

## Final Summary

- Composition applies transformations in sequence.
- One output becomes the next input.
- Matrix multiplication represents composition.
- In `A * B`, `B` acts first.
- Order usually matters.
- Composition can package many steps into one transformation.
