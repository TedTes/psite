---
title: "Bijective Function"
excerpt: "A bijective function pairs each input with exactly one output and reaches every codomain value."
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
topicOrder: 27
---

# Bijective Function

## Definition

A function is bijective when it is both injective and surjective.

That means:

```text
different inputs produce different outputs
and every codomain value is reached
```

> Bijective function = perfect pairing between domain and codomain.

---

## Simple Example

Suppose:

```text
f(x) = x + 1
Domain: {1, 2, 3}
Codomain: {2, 3, 4}
```

Then:

```text
1 -> 2
2 -> 3
3 -> 4
```

Each input has a different output.

Every codomain value is reached.

So the function is bijective.

> Bijection creates one-to-one coverage.

---

## Non-Example: Not Injective

Suppose:

```text
f(x) = x * x
Domain: {-1, 0, 1}
Codomain: {0, 1}
```

Then:

```text
-1 -> 1
0 -> 0
1 -> 1
```

Every codomain value is reached, but output `1` is used by two different inputs.

So the function is not bijective.

> A bijection cannot merge different inputs into one output.

---

## Non-Example: Not Surjective

Suppose:

```text
f(x) = x + 1
Domain: {1, 2}
Codomain: {2, 3, 4}
```

Then:

```text
1 -> 2
2 -> 3
```

The codomain value `4` is never reached.

So the function is not bijective.

> A bijection cannot leave codomain values unused.

---

## Why Bijectivity Matters

A bijective function preserves distinction and covers the whole target set.

This means each output corresponds to exactly one input.

That makes reversal possible.

Example:

```text
1 -> 2
2 -> 3
3 -> 4
```

Can be reversed as:

```text
2 -> 1
3 -> 2
4 -> 3
```

> Bijection supports clean reversibility.

---

## Final Summary

- A bijective function is both injective and surjective.
- Different inputs produce different outputs.
- Every codomain value is reached.
- Each output corresponds to exactly one input.
- Bijective functions create perfect pairing.
- Bijectivity makes reversal possible.
