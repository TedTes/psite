---
title: "Cartesian Product"
excerpt: "The Cartesian product creates all ordered pairs from two sets."
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
topicOrder: 11
---

# Cartesian Product

## Definition

The Cartesian product of two sets is the set of all ordered pairs formed by taking one element from the first set and one from the second.

Example:

```text
A = {1, 2}
B = {a, b}
```

Cartesian product:

```text
A x B = {(1, a), (1, b), (2, a), (2, b)}
```

> Cartesian product creates all possible ordered pair combinations.

---

## Order Matters

In an ordered pair:

```text
(1, a)
```

the first position comes from the first set.

The second position comes from the second set.

This is different from:

```text
(a, 1)
```

So:

```text
A x B
```

is not always the same as:

```text
B x A
```

> Cartesian product is ordered.

---

## Why Ordered Pairs Matter

Ordered pairs let us represent relationships.

Example:

```text
(person, city)
```

could represent:

```text
person lives in city
```

A relation can be built by selecting some ordered pairs from a Cartesian product.

> Cartesian product creates the space of possible relationships.

---

## Size Of A Cartesian Product

If `A` has 2 elements and `B` has 3 elements:

```text
A = {1, 2}
B = {a, b, c}
```

then:

```text
A x B
```

has:

```text
2 * 3 = 6
```

ordered pairs.

> The product size multiplies the sizes of the sets.

---

## Final Summary

- Cartesian product creates ordered pairs from two sets.
- The first pair position comes from the first set.
- The second pair position comes from the second set.
- Order matters in Cartesian products.
- Cartesian products define the space of possible relations.
