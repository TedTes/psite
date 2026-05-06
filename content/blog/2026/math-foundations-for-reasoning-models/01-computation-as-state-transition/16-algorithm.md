---
title: Algorithm
excerpt: An algorithm is a finite, explicit procedure that organizes steps so a system can process input and produce behavior.
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
topicOrder: 16
---

# What Is an Algorithm?

## Definition

An algorithm is a finite, explicit procedure for carrying out a computation.

It tells a system:

- where to start
- what steps are allowed
- how to choose the next step
- when to stop, if a stopping condition is reached

> Algorithm = finite procedure for step-by-step computation

---

## Algorithm vs Execution

An algorithm is the procedure.

Execution is one run of that procedure.

Example:

```text
Algorithm:
repeat subtract 1 until the value reaches 0
```

One execution:

```text
3 -> 2 -> 1 -> 0 -> stop
```

Another execution:

```text
5 -> 4 -> 3 -> 2 -> 1 -> 0 -> stop
```

The algorithm is the same.

The execution trace changes because the starting input changes.

> Algorithm = reusable procedure. Execution = one trace produced by running it.

---

## Algorithm vs Transition Rule

A transition rule describes one kind of allowed step.

An algorithm may organize many rules into a procedure.

Example rules:

```text
if x > 0 -> subtract 1
if x = 0 -> stop
```

Together, those rules form a simple algorithm:

```text
count down to 0
```

> A transition rule defines a possible step. An algorithm organizes steps into a procedure.

---

## Finite Description

An algorithm must have a finite description.

This does not mean the execution always finishes quickly.

It means the procedure itself can be written down using a limited number of instructions.

Example:

```text
repeat:
  if x > 0, subtract 1
  otherwise stop
```

This description is finite.

It can generate different execution lengths depending on the input.

> A finite algorithm can produce short or long executions.

---

## Explicit Steps

An algorithm must be precise enough to follow.

Vague instruction:

```text
make the number better
```

This is not an algorithm.

Precise instruction:

```text
if x is greater than 0, replace x with x - 1
```

This is usable because the condition and action are clear.

> An algorithm needs explicit steps, not vague intention.

---

## Input-Dependent Behavior

The same algorithm may behave differently for different inputs.

Example algorithm:

```text
if x is even, divide by 2
if x is odd, subtract 1
```

Input:

```text
x = 8
```

Step:

```text
8 -> 4
```

Input:

```text
x = 7
```

Step:

```text
7 -> 6
```

The procedure is the same.

The selected step depends on the current value.

> Algorithms can contain conditions that make behavior depend on state.

---

## Repetition

Algorithms often reuse the same rule many times.

Example:

```text
while x > 0:
  x = x - 1
```

Execution:

```text
4 -> 3 -> 2 -> 1 -> 0 -> stop
```

The instruction is small.

The trace can contain many steps.

> Repetition lets a finite procedure produce a longer computation.

---

## State During an Algorithm

An algorithm does not only transform input once.

It creates intermediate states.

Example:

```text
Input: 4
Step 1: 4 -> 3
Step 2: 3 -> 2
Step 3: 2 -> 1
Step 4: 1 -> 0
Output: 0
```

The values `3`, `2`, and `1` are not the original input.

They are intermediate states produced during execution.

> Algorithms work by moving through intermediate states.

---

## Stopping Condition

Many algorithms include a stopping condition.

Example:

```text
if x = 0:
  stop
```

Without a stopping condition, the system may continue forever.

Example:

```text
repeat:
  x = x + 1
```

Execution:

```text
1 -> 2 -> 3 -> 4 -> ...
```

> A stopping condition defines when execution should end.

---

## Output

An algorithm may produce output in different ways.

It may return a value:

```text
Input: 3
Algorithm: add 1
Output: 4
```

It may change stored state:

```text
Before: [1] [0] [1]
After:  [1] [1] [1]
```

It may answer a question:

```text
Input: 5
Question: is x even?
Output: false
```

> Output is the result or effect produced by executing the algorithm.

---

## Correctness

An algorithm can be judged by whether it does what it claims to do.

Claim:

```text
This algorithm turns any positive number into 0.
```

Procedure:

```text
while x > 0:
  x = x - 1
```

Example:

```text
3 -> 2 -> 1 -> 0
```

This supports the claim for that input.

But correctness is stronger than one example.

Correctness asks whether the procedure works for all inputs it is supposed to handle.

> Correctness means the algorithm's behavior matches its intended result.

---

## Algorithm As Structured Computation

An algorithm combines the pieces introduced so far:

- input gives the starting data
- state changes over time
- transition rules define valid steps
- memory can preserve needed information
- read, write, and move operations can update a workspace
- finite control provides internal context
- configuration captures the current computational snapshot
- execution produces the trace

The algorithm is the organized procedure behind that process.

> Algorithm is the structure that tells computation how to proceed.

---

## Final Summary

- An algorithm is a finite, explicit procedure for computation.
- Execution is one run of an algorithm.
- A transition rule describes a possible step; an algorithm organizes steps into a procedure.
- The same algorithm can produce different traces for different inputs.
- Algorithms often use conditions, repetition, and stopping conditions.
- Algorithms move through intermediate states.
- Output may be a returned value, a changed state, or an answer.
- Correctness means the algorithm does what it is supposed to do.
- Algorithm connects rules, state, memory, configuration, and execution into one organized process.
