---
title: "Function Composition"
excerpt: "Function composition applies one function, then uses its output as the input to another function."
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
topicOrder: 28
---

# Function Composition

## Definition

Function composition means applying one function after another.

If:

```text
f(x) = x + 1
g(x) = x * 2
```

then:

```text
g(f(x))
```

means:

```text
apply f first
then apply g to the result
```

> Composition = output of one function becomes input to the next.

---

## Simple Example

Let:

```text
f(x) = x + 1
g(x) = x * 2
```

For input `3`:

```text
f(3) = 4
g(4) = 8
```

So:

```text
g(f(3)) = 8
```

> Composition builds a multi-step transformation.

---

## Order Matters

Changing the order can change the result.

Using the same functions:

```text
f(x) = x + 1
g(x) = x * 2
```

Apply `f` then `g`:

```text
g(f(3)) = g(4) = 8
```

Apply `g` then `f`:

```text
f(g(3)) = f(6) = 7
```

Different order, different result.

> Function composition is usually order-sensitive.

---

## Compatibility

Composition only works when the output of the first function is a valid input for the second.

Example:

```text
f: number -> word
g: word -> first letter
```

Then `g(f(x))` can make sense.

But if:

```text
g: number -> number
```

and `f` outputs a word, then `g(f(x))` is not valid.

> The output type of one function must fit the domain of the next.

---

## Composition As A New Function

A composition can be treated as one new function.

If:

```text
h(x) = g(f(x))
```

then `h` combines both steps.

Example:

```text
f(x) = x + 1
g(x) = x * 2
h(x) = (x + 1) * 2
```

> A chain of functions can become a single function.

---

## Final Summary

- Function composition applies functions in sequence.
- The output of one function becomes input to the next.
- Order usually matters.
- Composition requires compatible domains and outputs.
- A composition can be treated as a new function.
- Composition builds larger transformations from smaller ones.
