---
title: "Sound Argument"
excerpt: "A sound argument is valid and has true premises."
date: 2026-05-01
tags:
  - Foundations
  - Logic
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Symbolic Logic and Reasoning"
chapterSlug: symbolic-logic-and-reasoning
chapterOrder: 2
topicOrder: 21
---

# Sound Argument

## Definition

A sound argument is an argument that is:

- valid
- built from true premises

If an argument is sound, its conclusion is true.

> Sound argument = valid structure + true premises.

---

## Validity Comes First

An argument must be valid before it can be sound.

Example:

```text
Premise 1: If P, then Q
Premise 2: P
Conclusion: Q
```

This form is valid.

If the premises are also true, then the argument is sound.

> Soundness requires validity.

---

## True Premises Matter

Validity alone is not enough for soundness.

Example:

```text
Premise 1: If the moon is made of cheese, then cheese is in space.
Premise 2: The moon is made of cheese.
Conclusion: Cheese is in space.
```

The structure is valid.

But the second premise is false.

So the argument is not sound.

> A valid argument with false premises is not sound.

---

## Sound Argument Example

Example:

```text
Premise 1: If a number is divisible by 4, then it is even.
Premise 2: 8 is divisible by 4.
Conclusion: 8 is even.
```

The structure is valid.

The premises are true.

So the argument is sound.

> A sound argument gives a trustworthy conclusion.

---

## Soundness vs Validity

Validity asks:

```text
Does the conclusion follow from the premises?
```

Soundness asks:

```text
Does the conclusion follow, and are the premises true?
```

Validity is structural.

Soundness combines structure with truth.

> Validity checks form; soundness checks form plus true starting points.

---

## Final Summary

- A sound argument is valid and has true premises.
- Soundness requires validity.
- A valid argument with false premises is not sound.
- A sound argument guarantees a true conclusion.
- Validity is about structure.
- Soundness is about structure plus truth.
