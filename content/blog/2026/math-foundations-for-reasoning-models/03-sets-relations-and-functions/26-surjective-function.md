---
title: "Surjective Function"
excerpt: "A surjective function reaches every value in its codomain."
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
topicOrder: 26
---

# Surjective Function

## Definition

A function is surjective when every value in the codomain is reached by at least one input.

Basic form:

```text
for every output y in the codomain
there is some input x such that f(x) = y
```

> Surjective function = every codomain value is hit.

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

Every codomain value is reached.

So the function is surjective.

> Surjectivity means the range equals the codomain.

---

## Non-Example

Suppose:

```text
f(x) = x + 1
Domain: {1, 2, 3}
Codomain: {1, 2, 3, 4, 5}
```

Actual outputs:

```text
{2, 3, 4}
```

The function does not output:

```text
1
5
```

So it is not surjective.

> A function is not surjective if any codomain value is missed.

---

## Surjectivity Depends On Codomain

The same formula can be surjective or not surjective depending on the codomain.

Example:

```text
f(x) = x + 1
Domain: {1, 2, 3}
```

With codomain:

```text
{2, 3, 4}
```

it is surjective.

With codomain:

```text
{1, 2, 3, 4, 5}
```

it is not surjective.

> Surjectivity is about the declared output space, not just the formula.

---

## Why Surjectivity Matters

Surjectivity tells us whether a function covers all intended outputs.

It answers:

```text
can every codomain value be produced?
```

If yes, the function reaches the whole codomain.

If no, some declared outputs are impossible.

> Surjectivity is about output coverage.

---

## Final Summary

- A surjective function reaches every codomain value.
- Surjectivity means the range equals the codomain.
- A function can miss some codomain values.
- Surjectivity depends on the chosen codomain.
- Surjectivity describes output coverage.
