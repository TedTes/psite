---
title: "XOR Classes"
excerpt: "XOR creates two classes: matching inputs and different inputs."
date: 2026-05-01
tags:
  - Foundations
  - Representation
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "XOR and the Need for Representation"
chapterSlug: xor-and-the-need-for-representation
chapterOrder: 10
topicOrder: 4
---

# XOR Classes

## Definition

XOR creates two classes.

Class `0`:

```text
inputs are the same
```

Class `1`:

```text
inputs are different
```

> XOR classes separate matching inputs from different inputs.

---

## Class 0

Class `0` contains inputs where both values match.

Examples:

```text
[0, 0] -> 0
[1, 1] -> 0
```

Both inputs false:

```text
0, 0
```

Both inputs true:

```text
1, 1
```

In both cases, XOR returns `0`.

> Class `0` means no exclusive difference.

---

## Class 1

Class `1` contains inputs where the values differ.

Examples:

```text
[0, 1] -> 1
[1, 0] -> 1
```

Exactly one input is true.

That is the exclusive OR case.

> Class `1` means exactly one input is true.

---

## Class Pattern

The four points are:

```text
[0, 0] -> 0
[0, 1] -> 1
[1, 0] -> 1
[1, 1] -> 0
```

So:

```text
class 0: [0, 0], [1, 1]
class 1: [0, 1], [1, 0]
```

The classes are crossed.

They do not sit cleanly on one side of a line.

> XOR classes alternate across the square.

---

## Why This Is Different From Simple Separation

Some classification problems put all class `0` examples on one side and all class `1` examples on the other.

XOR does not.

Class `0` appears in two opposite corners.

Class `1` appears in the other two opposite corners.

This is why one straight boundary cannot separate them.

> XOR classes are diagonally separated, not side-separated.

---

## Class Encoding

We can encode XOR classes as:

```text
0 and 1
```

or:

```text
-1 and 1
```

The encoding changes the symbols.

It does not change the class pattern.

> Encoding changes representation of labels, not the underlying XOR relation.

---

## Why XOR Classes Matter

XOR classes force us to look beyond the rule itself.

The rule is simple:

```text
same -> 0
different -> 1
```

But the geometry of the classes is not linearly separable in the original 2D input space.

> XOR shows that simple logical structure can create difficult geometric structure.

---

## Final Summary

- XOR has two classes.
- Class `0` means inputs match.
- Class `1` means inputs differ.
- Class `0` points are opposite corners.
- Class `1` points are the other opposite corners.
- The classes alternate across the square.
- This creates a nonlinearly separable pattern.
