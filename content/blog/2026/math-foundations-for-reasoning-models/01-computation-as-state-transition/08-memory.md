---
title: Memory
excerpt: Memory is retained information from earlier steps that remains available to influence later computation.
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
topicOrder: 8
---

# What Is Memory?

## Definition

Memory is retained information from earlier steps that remains available to influence later computation.

Memory does not have to be a separate storage box.

It can be represented in the current state itself.

> Memory = information preserved across state changes

---

## Memory vs State

State is the current condition of the system.

Memory is information from earlier steps that is still present in the current state.

Example:

```text
Step 1: x = 2
Step 2: x = 3
Step 3: x = 4
```

The current state is:

```text
x = 4
```

The memory is not separate from `x`.

The value `x = 4` carries forward information produced by earlier steps.

> State is what the system is like now. Memory is what the current state preserves from before.

---

## Memory vs Input

Input is information provided to the system.

Memory is information retained inside the system across steps.

Example:

```text
Input: +1
Memory before: count = 0
Rule: add input to count
Memory after: count = 1
```

The input arrives from outside.

The memory persists inside the system.

> Input enters computation. Memory carries information through computation.

---

## Memory Does Not Require Separate Storage

A system can have memory even if there is no separate memory component.

Example:

```text
Input: 2
Rule: +1
Next state: 3
```

The value `3` is now the current state.

If the next step uses `3`, then information from the previous step has persisted.

```text
2 -> 3 -> 4 -> 5
```

There is no separate memory object in this example.

The current value itself carries the information needed for the next step.

> Memory requires persistence of information, not necessarily a separate storage device.

---

## Stateless Computation

A stateless system does not retain information from previous steps.

Each step depends only on the current input and rule.

Example:

```text
Input: 3 -> output: 5
Input: 3 -> output: 5
Input: 3 -> output: 5
```

The system does not remember that it has seen `3` before.

Repeating the same input produces the same output.

> Stateless computation does not carry information from one step to the next.

---

## Stateful Computation

A stateful system retains information across steps.

Later behavior can depend on what happened earlier.

Example:

```text
Input: +1
Memory before: count = 0
Memory after: count = 1

Input: +1
Memory before: count = 1
Memory after: count = 2

Input: +1
Memory before: count = 2
Memory after: count = 3
```

The same input `+1` produces different memory states over time because the system preserves the count.

> Stateful computation lets earlier steps influence later steps.

---

## Memory Can Be Full Or Partial

Memory does not always preserve everything about the past.

It may preserve full information or only partial information.

Example:

```text
Input: 2
Rule: +1
Next state: 3
```

If the rule is known, then `3` preserves enough information to recover the previous value:

```text
previous value = current value - 1
```

But another rule may lose information.

Example:

```text
Input: 5
Rule: is even?
Output/state: false
```

From `false`, we cannot recover the exact input `5`.

Many inputs could produce the same result:

```text
1 -> false
3 -> false
5 -> false
7 -> false
```

The exact value was lost.

But some information was preserved:

```text
the input was odd
```

> Memory can preserve some information while losing other information.

---

## Memory And Irreversibility

Irreversible computation does not mean there is no memory.

It means some information cannot be recovered.

Example:

```text
Input: 5
Rule: is even?
Output/state: false
```

The exact input is not recoverable.

But the result still preserves one property of the input:

```text
odd/even status
```

So:

```text
irreversible != no memory
irreversible = some information was lost
```

> Memory exists when some information from an earlier step remains available, even if other information is lost.

---

## Memory Contents

Memory can hold different kinds of information.

Examples:

- a counter value
- the last input
- a current position
- accumulated results
- a flag such as `is_finished = false`

The important point is not the type of information.

The important point is that the information persists across steps.

> Memory is about retained information, not a specific kind of data.

---

## Accessing Memory

For memory to affect computation, a rule must be able to use it.

Example:

```text
Memory: count = 3
Input: +1
Rule: add input to count
Next memory: count = 4
```

The rule uses the retained value `count = 3`.

If no rule can use the retained information, then it does not affect later computation.

> Memory matters when later rules can use the retained information.

---

## Updating Memory

Memory can change as computation proceeds.

Example:

```text
count = 0
count = 1
count = 2
count = 3
```

The memory is not frozen.

It is carried forward and updated.

> Memory persists across steps, but it may also be modified across steps.

---

## Forgetting And Overwriting

A system can lose memory by forgetting or overwriting information.

Example:

```text
Memory before: x = 5
Rule: set x = 0
Memory after: x = 0
```

The previous value `5` is no longer available.

Unless it was stored somewhere else, the system cannot recover it.

> Forgetting means earlier information is no longer available to later computation.

---

## Finite vs Unbounded Memory

### Finite memory

Finite memory has a fixed limit.

Example:

```text
Memory can store only the last 2 values.
```

If the sequence is:

```text
1, 2, 3, 4
```

then the memory may retain only:

```text
3, 4
```

---

### Unbounded memory (theoretical)

Unbounded memory can grow without a fixed limit.

Example:

```text
Memory stores the full sequence:
1, 2, 3, 4, ...
```

> Memory capacity determines how much past information can remain available.

---

## Why Memory Matters

Memory affects what a system can do.

Without memory, a system cannot use information from earlier steps.

With memory, a system can:

- accumulate results
- compare current input with past input
- track progress
- count steps
- preserve context across time

Example:

```text
Without memory:
Input: +1 -> output: 1
Input: +1 -> output: 1
Input: +1 -> output: 1

With memory:
count = 0
Input: +1 -> count = 1
Input: +1 -> count = 2
Input: +1 -> count = 3
```

> Memory allows earlier information to influence later behavior.

---

## Key Insight

Memory does not replace rules.

It changes what information rules can use.

Example:

```text
Rule: add input to count
```

The rule stays the same.

But the result depends on the retained value of `count`.

> Rules define what happens. Memory provides retained information that rules can use.

---

## Final Summary

- Memory is retained information from earlier steps.
- Memory is represented in state, but it is not the same thing as state.
- Memory does not require a separate storage device.
- Current state can carry information from previous states.
- Stateless computation does not retain information across steps.
- Stateful computation lets earlier steps influence later steps.
- Memory may preserve full information or only partial information.
- Irreversibility means some information was lost, not necessarily that no memory remains.
- Memory can be accessed, updated, forgotten, or overwritten.
- Memory can be finite or unbounded.
- Memory matters because it gives rules information from earlier computation.
