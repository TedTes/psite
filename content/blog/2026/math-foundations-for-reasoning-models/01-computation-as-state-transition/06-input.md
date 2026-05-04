---
title: Input
excerpt: Input is information provided to a system for its rules to read, store, transform, or respond to.
date: 2026-05-01
tags:
  - Foundations
  - Computation
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: Foundations for Reasoning Models
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: Computation as State Transition
chapterSlug: computation-as-state-transition
chapterOrder: 1
topicOrder: 6
---

# What Is Input?

## Definition

Input is information provided to a system for its rules to read, store, transform, or respond to.

Input does not change state by itself.

A rule uses input to create state, update state, produce output, or leave the system unchanged.

> Input = provided information that a rule can use

---

## Input vs State

Input is information given to the system.

State is the system's current condition during computation.

Example:

```text
Input: 3
Initial state: x = 3
Rule: x -> x + 2
Next state: x = 5
```

The input helps create the initial state.

The state is what the system continues to update.

> Input can start computation, but state is what changes during computation.

---

## Input As Initial Condition

Input can define the starting point of computation.

Example:

```text
Input: 3
Initial state: x = 3
```

But input and initial state are not always identical.

Example:

```text
Input: user clicks submit
Initial state: form_submitted = true
```

The input is the event.

The initial state is how the system represents that event.

> Input often determines the initial state.

---

## Input Over Time

Input is not always provided once.

### One-time input

```text
input -> computation -> output
```

### Continuous input

Input may arrive while computation is already happening.

Example:

```text
Current state: x = 5
Input: +2
Rule: add input to x
Next state: x = 7

Input: +3
Rule: add input to x
Next state: x = 10
```

> Input can influence computation at multiple points.

---

## Input Must Be Recognizable

A system can only process input it is designed to recognize or handle.

Example:

```text
System rule: add numbers

Input: 5     -> valid
Input: "cat" -> invalid
```

The word `"cat"` has meaning to a person.

But it is invalid for a system whose rule only adds numbers.

> Input must belong to the domain of the system's rules.

---

## Raw Input vs Interpreted Input

The same input can be interpreted differently by different systems.

Example:

```text
Raw input: "5"
```

One system may treat it as text:

```text
"5" -> count characters -> 1
```

Another system may treat it as a number:

```text
"5" -> convert to number -> 5
5 -> add 1 -> 6
```

The raw input is the same.

The system's rules determine how it is handled.

> Input is processed according to the representation and rules of the system.

---

## Valid And Invalid Input

Invalid input is not about meaning.

It is about compatibility with the system's rules.

Examples:

```text
System rule: add numbers

Input: 5     -> valid
Input: "cat" -> invalid
```

`"cat"` is meaningful, but it is not valid for numeric addition.

`5` is valid because it fits the rule.

> Invalid input = input that is not compatible with the system's rules.

---

## Input May Be Ignored

Input can be available without affecting a particular step.

Example:

```text
State: x = 5
Input: y = 10
Rule: x -> x + 1
```

The input `y = 10` exists.

But the current rule does not use it.

Next state:

```text
x = 6
```

The rule only used `x`.

> Input affects computation only when some rule reads or uses it.

---

## Input As Representation

Input is always given in a representable form:

- numbers
- symbols
- text
- data structures
- events

For a system to process input, it must be able to distinguish it from other possible inputs.

Example:

```text
Input A: 0
Input B: 1
```

If the system can distinguish `0` from `1`, then different rules can apply.

If the system cannot distinguish them, it cannot treat them differently.

> Input must be distinguishable in the form the system receives.

---

## Final Summary

- Input is provided information that a rule can use.
- Input does not change state by itself.
- Input can determine the initial state.
- Input can arrive once or over time.
- Input must be recognizable by the system's rules.
- The same raw input can be interpreted differently by different systems.
- Invalid input is about rule compatibility, not human meaning.
- Input may be ignored if no current rule uses it.
- Input must be represented in a distinguishable form.
