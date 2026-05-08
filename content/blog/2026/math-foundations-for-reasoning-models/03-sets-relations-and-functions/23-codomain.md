---
title: "Codomain"
excerpt: "The codomain is the declared set where a function's outputs are expected to live."
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
topicOrder: 23
---

# Codomain

## Definition

The codomain is the set of possible output values declared for a function.

Example:

```text
f(x) = x + 1
Domain: {1, 2, 3}
Codomain: {1, 2, 3, 4, 5}
```

The function outputs:

```text
2, 3, 4
```

All of these outputs are inside the codomain.

> Codomain = where outputs are allowed to land.

---

## Codomain Is Declared

The codomain is part of how the function is described.

Example:

```text
f: {1, 2, 3} -> {1, 2, 3, 4, 5}
```

This says:

```text
inputs come from {1, 2, 3}
outputs are expected to be in {1, 2, 3, 4, 5}
```

> The codomain gives the output space of the function.

---

## Codomain vs Actual Outputs

The codomain may include values that never appear as outputs.

Example:

```text
f(x) = x + 1
Domain: {1, 2, 3}
Codomain: {1, 2, 3, 4, 5}
```

Actual outputs:

```text
{2, 3, 4}
```

The codomain contains `1` and `5`, but the function never produces them.

> The codomain can be larger than the actual outputs.

---

## Why Codomain Matters

The codomain lets us ask whether the function reaches all intended outputs.

Example:

```text
Domain: {1, 2, 3}
Codomain: {2, 3, 4}
f(x) = x + 1
```

Here every codomain value is reached.

But if the codomain is:

```text
{1, 2, 3, 4, 5}
```

then not every codomain value is reached.

> Codomain matters when studying coverage of outputs.

---

## Final Summary

- The codomain is the declared output set.
- Every actual output must belong to the codomain.
- The codomain can contain values the function never produces.
- The codomain is different from the actual set of outputs.
- Codomain helps define whether a function covers its intended output space.
