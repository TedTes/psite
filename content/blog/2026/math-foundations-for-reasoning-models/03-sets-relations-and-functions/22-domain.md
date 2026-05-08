---
title: "Domain"
excerpt: "The domain is the set of inputs a function is defined to accept."
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
topicOrder: 22
---

# Domain

## Definition

The domain of a function is the set of allowed inputs.

Example:

```text
f(x) = x + 1
Domain: integers
```

This means `f` accepts inputs like:

```text
-2, -1, 0, 1, 2
```

> Domain = what the function is allowed to receive.

---

## Domain Controls Valid Use

A function is only defined for inputs in its domain.

Example:

```text
f(x) = first letter of x
Domain: non-empty words
```

Valid:

```text
f("cat") = "c"
```

Invalid:

```text
f(5)
```

The input `5` is not a word.

> The domain tells us when applying a function makes sense.

---

## Same Rule, Different Domain

The same rule can behave differently depending on the domain.

Example:

```text
f(x) = x * x
```

If the domain is:

```text
{1, 2, 3}
```

then the outputs are:

```text
1, 4, 9
```

If the domain is:

```text
{-3, -2, -1, 0, 1, 2, 3}
```

then the outputs include repeated results:

```text
9, 4, 1, 0, 1, 4, 9
```

> A function is not fully specified by the formula alone; the domain matters.

---

## Domain In Ordered Pairs

For a function represented as ordered pairs:

```text
f = {(1, a), (2, b), (3, c)}
```

the domain is:

```text
{1, 2, 3}
```

It is the set of first components.

> In ordered pairs, the domain comes from the input positions.

---

## Final Summary

- The domain is the set of allowed inputs.
- A function is only defined on its domain.
- The same rule can behave differently with a different domain.
- In ordered pairs, the domain is the set of first components.
- Knowing the domain prevents invalid function use.
