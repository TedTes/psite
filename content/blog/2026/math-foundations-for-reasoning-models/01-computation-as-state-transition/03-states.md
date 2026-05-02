---
title: States
excerpt: State is the current description of a system, and computation can be understood as movement from one state to another.
date: 2026-05-01
tags:
  - Foundations
  - Computation
  - Reasoning Models
author: Tedros Tesfu
draft: true
series: Foundations for Reasoning Models
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: Computation as State Transition
chapterSlug: computation-as-state-transition
chapterOrder: 1
topicOrder: 3
---

# What Is State?

## Definition

State is the current description of a system at a given moment, relative to what the system can store, observe, or use.

Examples:

- `x = 5`
- `(x = 5, y = 10, flag = true)`
- a webpage: content, form inputs, selected tab, scroll position

State does not mean every physical detail of reality.

It means the relevant current condition of the system being described.

> State = the current snapshot of a system's relevant information

## State vs Input

Input is the information given to a system.

State is the system's current situation during computation.

Example:

```text
Input: 3
Initial state: x = 3
Rule: add 2
New state: x = 5
```

Input often helps create the first state.

After that, computation proceeds by changing state step by step.

> Input can start computation, but state is what changes during computation.

## Initial State

The initial state is the starting condition of the system before the first transition.

Example:

```text
Initial state: x = 3
```

If the system applies `+2`, the next states are:

```text
3 -> 5 -> 7 -> 9
```

The input may determine the initial state, but they are not always identical.

Example:

```text
Input: user clicks submit
Initial state after input: form_submitted = true
```

> Initial state = where the system begins before rules start changing it

## State Transition

A state transition is the movement from one state to another by applying a rule.

Example:

```text
Current state: x = 3
Rule: add 2
Next state: x = 5
```

In general:

```text
State(t + 1) = Rule(State(t))
```

> Computation can be understood as a sequence of state transitions.

## State Changes Over Time

State is not fixed.

Example:

```text
Initial: 3
+2 -> 5
+2 -> 7
+2 -> 9
```

Each step:

- reads the current state
- applies a rule
- produces a new state

> Computation = rule-governed change of state over time

## Relationship Between States

States are connected through rules.

The next state is not random if the rule is defined.

Example:

```text
Rule: add 2

3 -> 5
5 -> 7
7 -> 9
```

The relationship between states is structured.

> Rules define how one state leads to another.

## Relevant vs Irrelevant Parts Of State

A system may contain more information than a rule uses at a particular step.

Example:

```text
State: x = 5, y = 10
Rule: add 1 to x
```

The rule only uses `x`, but `y` can still be part of the system state.

Why?

Because a later rule may use `y`.

Better distinction:

- system state = information the system currently has
- active information = the part used by the current rule

> A rule may inspect only part of the state, but the unused part can still matter later.

## State vs Memory

State is the current condition of the system.

Memory is the mechanism that preserves information across steps.

Example:

```text
Step 1: x = 5
Step 2: x = 6
Step 3: x = 7
```

For `x` to persist across steps, the system must have some way to store it.

That storage is memory.

> State describes what the system is like now. Memory helps carry state across time.

## Internal vs External State

Some state is internal to the system.

Some state is externally visible.

Examples:

- internal state: variables, hidden flags, memory contents
- external state: printed output, screen display, file contents

Example:

```text
Internal state: counter = 3
External state: screen shows "3"
```

These are related, but not identical.

The internal state may change before the external state is updated.

> Internal state affects how the system behaves. External state is what the outside world can observe.

## State vs Configuration

State is the current data or condition.

Configuration is state plus execution context.

Example:

```text
(x = 5, at step 1)
(x = 5, at step 2)
```

The data value is the same: `x = 5`.

But the system is in a different position in the process.

That difference can change what happens next.

> Configuration = state + where the system is in execution

## State Space

State space is the set of all possible states a system can be in.

Example:

```text
x can be 1, 2, or 3
```

Then the state space is:

```text
{1, 2, 3}
```

For two binary values:

```text
x in {0, 1}
y in {0, 1}
```

The state space is:

```text
(0, 0)
(0, 1)
(1, 0)
(1, 1)
```

> Computation moves within a state space.

## Fixed Rule vs Rate Of Change

A fixed rule creates consistent structure, but not necessarily constant change.

Examples:

```text
Rule: add 2
3 -> 5 -> 7 -> 9
```

The amount of change is constant.

```text
Rule: multiply by 2
3 -> 6 -> 12 -> 24
```

The rule is fixed, but the amount of change grows.

> Fixed rule does not mean fixed rate of change.

## State Can Stabilize, Repeat, Or Stop

State does not always keep changing in a progressive direction.

### Fixed Point

A fixed point is a state that maps back to itself.

```text
10 -> 10 -> 10
```

### Cycle

A cycle repeats previous states.

```text
0 -> 1 -> 0 -> 1
```

### Termination

Termination means the computation stops.

```text
running -> halted
```

> State evolution does not guarantee progress.

## Reversibility

Some state transitions can be reversed.

Others cannot.

### Reversible

```text
x -> x + 2
```

If the result is `7`, the previous value can be recovered by subtracting `2`.

### Irreversible

```text
x -> floor(x / 2)
```

Both `4` and `5` become `2`.

The original value is lost.

> Reversibility depends on whether information is preserved.

## Deterministic vs Non-Deterministic

In a deterministic system, one state has one next state.

Example:

```text
5 -> 6
```

In a non-deterministic system, one state may have multiple possible next states.

Example:

```text
5 -> 6
5 -> 4
```

This does not mean the system is meaningless.

It means the transition rule allows more than one possible next state.

> State may or may not uniquely determine what happens next.

## Final Summary

- State is the current description of a system.
- Input can initialize state.
- Computation can be understood as a sequence of state transitions.
- Rules connect one state to another.
- A rule may use only part of the state.
- Memory preserves information across steps.
- Configuration adds execution context.
- State space defines all possible states.
- State can stabilize, repeat, or stop.
- Some transitions are reversible, others are not.
- Behavior can be deterministic or non-deterministic.
