---
title: "Vector Component"
excerpt: "A vector component is one scalar value at a specific position inside a vector."
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
topicOrder: 3
---

# Vector Component

## Definition

A vector component is one value inside a vector.

Example:

```text
v = [4, 9, 2]
```

The components are:

```text
first component = 4
second component = 9
third component = 2
```

> Component = one scalar value at a position in a vector.

---

## Position Matters

A component is not only a value.

It is a value in a specific position.

Example:

```text
[4, 9]
[9, 4]
```

Both vectors contain `4` and `9`.

But the components are arranged differently.

If the first position means `height` and the second position means `weight`, then switching them changes the meaning.

> Components get meaning from their position.

---

## Component Names

For a two-value vector, people often use names like:

```text
[x, y]
```

Example:

```text
v = [3, 7]
```

Then:

```text
x = 3
y = 7
```

For a three-value vector:

```text
[x, y, z]
```

These names are only labels for positions.

> Component names help us refer to positions clearly.

---

## Accessing Components

Computation often needs to read one component at a time.

Example:

```text
v = [10, 20, 30]
```

Rule:

```text
read the second component
```

Output:

```text
20
```

> A rule can operate on the whole vector or on selected components.

---

## Updating Components

A rule can change one component while leaving others the same.

Example:

```text
state = [x, y]
state = [3, 5]
```

Rule:

```text
increase x by 1
```

Transition:

```text
[3, 5] -> [4, 5]
```

Only the first component changed.

> Component-level updates let a vector state change part by part.

---

## Component Consistency

The same position should mean the same thing across examples.

Good:

```text
[height, weight, age]
[70, 180, 30]
[65, 140, 25]
```

Bad:

```text
[height, weight, age]
[70, 180, 30]
[25, 65, 140]
```

The second data point uses a different order.

That breaks the structure.

> Vectors depend on consistent component meaning.

---

## Final Summary

- A component is one scalar inside a vector.
- Components are identified by position.
- Position gives a component its role.
- Rules can read or update individual components.
- Component order must stay consistent.
- Vector structure depends on component structure.
