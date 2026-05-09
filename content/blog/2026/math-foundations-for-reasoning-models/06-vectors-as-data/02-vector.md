---
title: "Vector"
excerpt: "A vector is an ordered collection of scalar values treated as one object."
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
topicOrder: 2
---

# Vector

## Definition

A vector is an ordered collection of scalar values.

Example:

```text
[3, 7, 2]
```

This vector has three values:

```text
3
7
2
```

The order matters.

```text
[3, 7, 2] is not the same as [2, 7, 3]
```

> Vector = ordered values treated as one object.

---

## Why Vectors Exist

A single scalar can describe one quantity.

But many situations require multiple quantities together.

Example:

```text
person:
height = 70
weight = 180
age = 30
```

As a vector:

```text
[70, 180, 30]
```

The vector lets the system treat related values as one structured item.

> Vectors package multiple measurements into one object.

---

## Vector As Data

A vector can represent data when each position has a consistent meaning.

Example:

```text
[70, 180, 30]
```

could mean:

```text
position 1 = height
position 2 = weight
position 3 = age
```

Without that consistent interpretation, the vector is only a list of numbers.

> A vector becomes useful data when its positions are consistently interpreted.

---

## Vector Dimension

The number of values in a vector is its dimension.

Examples:

```text
[4, 9] has dimension 2
[4, 9, 1] has dimension 3
[4, 9, 1, 8] has dimension 4
```

Dimension tells us how many components the vector has.

> Dimension = number of components.

---

## Vector vs List

A list is a general ordered collection.

A vector is an ordered collection used as a mathematical object.

Example:

```text
List: ["cat", 5, true]
Vector: [2, 4, 6]
```

In this chapter, vectors are numerical.

That matters because we can add them, subtract them, scale them, and compare them.

> A vector is a list-like structure with numerical operations.

---

## Vector As State

A state can contain multiple values.

Example:

```text
state = [x, y]
state = [3, 5]
```

A transition rule can update the vector:

```text
[3, 5] -> [4, 5]
```

Here the system moved from one vector state to another.

> A vector can describe the state of a system with multiple quantities.

---

## Why Vectors Matter For Later Concepts

Vectors let us move from single values to structured numerical data.

They make it possible to represent:

- positions
- measurements
- features
- states with multiple parts

The important shift is simple:

```text
one number -> many coordinated numbers
```

> Vectors are the first step toward treating data as structured numerical objects.

---

## Final Summary

- A vector is an ordered collection of scalars.
- Order matters.
- Dimension is the number of components.
- A vector can represent data when each position has a consistent meaning.
- A vector can describe a multi-part state.
- Vectors let computation operate on many related values together.
