---
title: "Vector Subtraction"
excerpt: "Vector subtraction compares vectors by subtracting matching components."
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
topicOrder: 6
---

# Vector Subtraction

## Definition

Vector subtraction subtracts matching components.

Example:

```text
[7, 9] - [2, 4] = [5, 5]
```

Because:

```text
7 - 2 = 5
9 - 4 = 5
```

> Vector subtraction = component-by-component difference.

---

## Same Dimension Requirement

Like addition, subtraction requires the same dimension.

Valid:

```text
[7, 9] - [2, 4]
```

Invalid:

```text
[7, 9] - [2, 4, 1]
```

The components do not line up.

> Subtraction requires matching structure.

---

## Subtraction As Difference

Subtraction can show how one vector differs from another.

Example:

```text
current = [8, 10]
target  = [5, 4]
```

Difference:

```text
current - target = [3, 6]
```

This means:

```text
first component differs by 3
second component differs by 6
```

> Vector subtraction exposes component-level differences.

---

## Subtraction As Movement

If two vectors represent positions, subtraction can describe movement between them.

Example:

```text
start = [2, 3]
end   = [7, 8]
```

Movement from start to end:

```text
end - start = [5, 5]
```

So `[5, 5]` is the change needed to get from the first position to the second.

> Subtraction can produce a change vector.

---

## Order Matters

Vector subtraction is not the same in both directions.

Example:

```text
[7, 9] - [2, 4] = [5, 5]
[2, 4] - [7, 9] = [-5, -5]
```

The size of the difference may match, but the direction is opposite.

> Subtraction keeps track of direction of change.

---

## Relation To Addition

Subtraction can be understood as adding the opposite vector.

Example:

```text
[7, 9] - [2, 4]
```

is the same as:

```text
[7, 9] + [-2, -4]
```

Result:

```text
[5, 5]
```

> Subtraction is addition with an additive inverse.

---

## Final Summary

- Vector subtraction subtracts matching components.
- Vectors must have the same dimension.
- Subtraction can measure difference.
- Subtraction can describe movement from one vector to another.
- Order matters.
- Subtraction is connected to additive inverse.
