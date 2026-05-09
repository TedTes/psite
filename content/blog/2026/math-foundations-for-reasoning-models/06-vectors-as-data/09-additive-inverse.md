---
title: "Additive Inverse"
excerpt: "The additive inverse of a vector is the vector that cancels it to zero."
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
topicOrder: 9
---

# Additive Inverse

## Definition

The additive inverse of a vector is the vector that cancels it to the zero vector.

Example:

```text
v = [3, 5]
```

The additive inverse is:

```text
-v = [-3, -5]
```

Because:

```text
[3, 5] + [-3, -5] = [0, 0]
```

> Additive inverse = the vector that brings another vector back to zero.

---

## Component By Component

The additive inverse flips the sign of each component.

Example:

```text
[4, -2, 7]
```

Additive inverse:

```text
[-4, 2, -7]
```

Each component becomes its opposite.

> To find the additive inverse, reverse every component's sign.

---

## Relation To Subtraction

Subtraction is addition of an additive inverse.

Example:

```text
[8, 9] - [3, 4]
```

is the same as:

```text
[8, 9] + [-3, -4]
```

Result:

```text
[5, 5]
```

> Additive inverse explains vector subtraction.

---

## Opposite Direction

The additive inverse has the same size but opposite direction.

Example:

```text
v  = [3, 4]
-v = [-3, -4]
```

Both have magnitude `5`.

But they point in opposite directions.

> Additive inverse preserves size while reversing direction.

---

## Canceling Change

If a vector represents a change, its additive inverse undoes that change.

Example:

```text
move right and up: [3, 2]
move back:         [-3, -2]
```

Together:

```text
[3, 2] + [-3, -2] = [0, 0]
```

The net change is zero.

> Additive inverse represents the change needed to return to the starting point.

---

## Zero Vector Is Its Own Inverse

The zero vector's additive inverse is itself.

Example:

```text
[0, 0] + [0, 0] = [0, 0]
```

There is nothing to cancel.

> The zero vector already equals its own opposite.

---

## Final Summary

- The additive inverse cancels a vector to zero.
- It is created by flipping every component's sign.
- Subtraction is addition with an additive inverse.
- The inverse has the same magnitude but opposite direction.
- It can represent undoing a change.
- The zero vector is its own additive inverse.
