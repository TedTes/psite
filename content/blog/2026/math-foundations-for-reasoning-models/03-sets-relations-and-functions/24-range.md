---
title: "Range"
excerpt: "The range is the set of actual outputs a function produces from its domain."
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
topicOrder: 24
---

# Range

## Definition

The range of a function is the set of actual outputs it produces.

Example:

```text
f(x) = x + 1
Domain: {1, 2, 3}
```

Outputs:

```text
f(1) = 2
f(2) = 3
f(3) = 4
```

So the range is:

```text
{2, 3, 4}
```

> Range = outputs that actually occur.

---

## Range In Ordered Pairs

For a function represented as:

```text
f = {(1, a), (2, b), (3, b)}
```

the range is:

```text
{a, b}
```

Even though `b` appears more than once, it is listed once in the range because sets do not duplicate elements.

> In ordered pairs, the range comes from the output positions.

---

## Domain, Codomain, Range

These three ideas answer different questions.

```text
Domain: what inputs are allowed?
Codomain: where outputs are allowed to land?
Range: what outputs actually happen?
```

Example:

```text
f(x) = x * x
Domain: {-2, -1, 0, 1, 2}
Codomain: {0, 1, 2, 3, 4}
Range: {0, 1, 4}
```

The function never outputs `2` or `3`.

> Range is determined by applying the function to the domain.

---

## Why Range Matters

The range tells us what a function actually reaches.

This matters when asking:

- which outputs are possible?
- which outputs are impossible?
- does the function cover its codomain?

> Range describes the real behavior of the function.

---

## Final Summary

- The range is the set of actual outputs.
- The range comes from applying the function to its domain.
- In ordered pairs, the range is the set of second components that occur.
- The range can be smaller than the codomain.
- Domain, codomain, and range describe different parts of a function.
