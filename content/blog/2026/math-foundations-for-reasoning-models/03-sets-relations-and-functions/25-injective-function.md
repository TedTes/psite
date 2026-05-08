---
title: "Injective Function"
excerpt: "An injective function never sends two different inputs to the same output."
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
topicOrder: 25
---

# Injective Function

## Definition

A function is injective when different inputs always produce different outputs.

Basic form:

```text
if a is not b
then f(a) is not f(b)
```

Equivalent form:

```text
if f(a) = f(b)
then a = b
```

> Injective function = no output is reused by two different inputs.

---

## Simple Example

Suppose:

```text
f(x) = x + 1
Domain: {1, 2, 3}
```

Then:

```text
1 -> 2
2 -> 3
3 -> 4
```

Each input produces a different output.

So the function is injective.

> Injective functions preserve input distinction in the outputs.

---

## Non-Example

Suppose:

```text
f(x) = x * x
Domain: {-2, -1, 0, 1, 2}
```

Then:

```text
-2 -> 4
2 -> 4
-1 -> 1
1 -> 1
0 -> 0
```

Different inputs can produce the same output.

So the function is not injective.

> A function is not injective when distinct inputs collapse into the same output.

---

## Injective vs Function

Every injective mapping is still a function, so each input has exactly one output.

Injective adds an extra requirement:

```text
different inputs must not share an output
```

Function requirement:

```text
one input -> one output
```

Injective requirement:

```text
different inputs -> different outputs
```

> Injective is stricter than being a function.

---

## Why Injectivity Matters

Injectivity tells us whether output still identifies the input.

If a function is injective, seeing the output is enough to know which input produced it.

If it is not injective, information may be lost.

Example:

```text
square output: 4
possible inputs: -2 or 2
```

> Injectivity is about preserving distinctions.

---

## Final Summary

- An injective function maps different inputs to different outputs.
- No output is reused by two different inputs.
- `f(x) = x + 1` is injective over integers.
- `f(x) = x * x` is not injective over integers.
- Injectivity preserves distinctions between inputs.
