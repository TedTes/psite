---
title: "Inverse Function"
excerpt: "An inverse function reverses the mapping of another function when that reversal is well-defined."
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
topicOrder: 29
---

# Inverse Function

## Definition

An inverse function reverses another function.

If:

```text
f(a) = b
```

then the inverse sends:

```text
b -> a
```

> Inverse function = function that undoes another function.

---

## Simple Example

Let:

```text
f(x) = x + 1
```

Then the inverse is:

```text
f^-1(x) = x - 1
```

Example:

```text
f(3) = 4
f^-1(4) = 3
```

The inverse takes the output back to the original input.

> An inverse reverses direction.

---

## Inverse Requires No Ambiguity

Not every function has an inverse function.

Example:

```text
f(x) = x * x
Domain: {-2, -1, 0, 1, 2}
```

Then:

```text
-2 -> 4
2 -> 4
```

If the output is `4`, the original input could be `-2` or `2`.

The reversal is ambiguous.

> If different inputs collapse into one output, the inverse is not a function.

---

## Connection To Bijective Functions

A function has a clean inverse function when it is bijective.

Bijective means:

```text
no two inputs share an output
and every codomain value is reached
```

This gives every output exactly one input to return to.

> Bijectivity makes inverse functions well-defined.

---

## Undoing With Composition

If `f^-1` is the inverse of `f`, then applying both returns the original value.

Example:

```text
f(x) = x + 1
f^-1(x) = x - 1
```

Then:

```text
f^-1(f(3)) = 3
f(f^-1(4)) = 4
```

> A function and its inverse cancel each other.

---

## Final Summary

- An inverse function reverses another function.
- If `f(a) = b`, the inverse sends `b` back to `a`.
- Not every function has an inverse function.
- If multiple inputs produce the same output, reversal is ambiguous.
- Bijective functions have clean inverse functions.
- A function and its inverse undo each other.
