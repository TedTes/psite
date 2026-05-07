---
title: "Valid Argument"
excerpt: "A valid argument is one where the conclusion must be true if the premises are true."
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
topicOrder: 20
---

# Valid Argument

## Definition

A valid argument is an argument whose conclusion must be true if its premises are true.

Basic form:

```text
if premises are true -> conclusion must be true
```

Validity is about structure.

It does not first ask whether the premises are actually true.

> Validity means the conclusion follows from the premises.

---

## Simple Example

Example:

```text
Premise 1: If P, then Q
Premise 2: P
Conclusion: Q
```

This is valid.

If the premises are true, the conclusion cannot be false.

The structure forces the conclusion.

> Valid form preserves truth from premises to conclusion.

---

## Validity Is About Form

The content can change while the form stays valid.

Example:

```text
If it rains, the ground gets wet.
It rains.
Therefore the ground gets wet.
```

Same form:

```text
If P, then Q
P
Therefore Q
```

The argument is valid because of the structure.

> Validity depends on reasoning form, not topic.

---

## Valid Does Not Mean True Premises

An argument can be valid even if its premises are false.

Example:

```text
Premise 1: If the moon is made of cheese, then cheese is in space.
Premise 2: The moon is made of cheese.
Conclusion: Cheese is in space.
```

The premises are not true.

But the structure is valid:

```text
If P, then Q
P
Therefore Q
```

> Validity does not guarantee true premises.

---

## Invalid Argument

An invalid argument does not force the conclusion.

Example:

```text
Premise 1: If P, then Q
Premise 2: Q
Conclusion: P
```

This is invalid.

Why?

Because `Q` may be true for another reason.

The premises can be true while the conclusion is false.

> Invalid means the conclusion does not necessarily follow.

---

## Final Summary

- A valid argument preserves truth from premises to conclusion.
- If the premises are true, the conclusion must be true.
- Validity is about structure.
- Validity does not mean the premises are true.
- An invalid argument allows true premises with a false conclusion.
- Validity is the first test of argument form.
