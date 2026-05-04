---
title: Transition
excerpt: A transition is one allowed step from one state to another, and computation is built by chaining transitions together.
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
topicOrder: 4
---

# What Is a Transition?

## Definition

A transition is the change from one state to another.

Basic form:

```text
State(t) -> State(t + 1)
```

Example:

```text
3 -> 5
```

This means the system was in one state, then moved to another state.

> A transition is a single step of computation.

## Transition vs Transition Rule

A transition and a transition rule are related, but they are not the same thing.

A transition rule is the general instruction.

A transition is one concrete application of that instruction.

Example:

```text
Transition rule: x = x + 2

Transition: 3 -> 5
Transition: 5 -> 7
Transition: 7 -> 9
```

The rule describes what is allowed.

The transition is what actually happens in one step.

> Transition rule = general pattern. Transition = one actual step.

## Allowed vs Disallowed Transitions

For computation, a transition is not just any change.

It is a change allowed by the system's rules.

Example:

```text
Rule: x = x + 2
```

Allowed:

```text
3 -> 5
5 -> 7
```

Disallowed:

```text
3 -> 9
```

Why?

Because `3 -> 9` does not follow the rule `x = x + 2`.

> A valid transition must be allowed by the system's rule.

## Transition As One Step

A transition is one step.

Computation is many transitions chained together.

Example:

```text
3 -> 5 -> 7 -> 9
```

Each arrow is a transition.

The whole sequence is the computation.

> Transition = one step. Computation = a sequence of steps.

## Conditional Transitions

A transition may depend on the current state.

Example:

```text
if x < 10:
  x = x + 1
else:
  x = x + 5
```

Results:

```text
5 -> 6
10 -> 15
```

The rule is the same overall rule, but different current states activate different branches.

> Same rule structure, different current state, different transition.

## Deterministic vs Non-Deterministic Transitions

In a deterministic system, one current state has exactly one next state.

Example:

```text
5 -> 6
```

In a non-deterministic system, one current state may allow multiple possible next states.

Example:

```text
5 -> 6
5 -> 4
```

This does not mean the system has no structure.

It means the transition rule allows more than one possible next state.

> Transitions may or may not uniquely determine the next state.

## Terminal State And Termination

Some transitions lead to states where no further transitions occur.

Example:

```text
if x > 0:
  x = x - 1
else:
  stop
```

Sequence:

```text
3 -> 2 -> 1 -> 0 -> stop
```

The stopping point is a terminal state.

A terminal state has no outgoing transition.

> Termination means computation reaches a state where no next step is taken.

## Types Of Transition Behavior

Transitions can produce different long-term behavior.

### Unbounded Progression

The system keeps moving through new states.

```text
1 -> 2 -> 3 -> 4 -> ...
```

### Cycle

The system repeats previous states.

```text
0 -> 1 -> 0 -> 1
```

### Termination

The system stops.

```text
3 -> 2 -> 1 -> 0 -> stop
```

> A transition sequence can progress, cycle, or terminate.

## Transition Relation

The set of all allowed transitions is called a transition relation.

Example:

```text
Allowed transitions:
1 -> 2
2 -> 3
3 -> stop
```

Together, these define how the system may move through its state space.

This matters because computation is not only about one step.

It is about the full structure of possible steps.

> A transition relation describes all allowed state-to-state movements.

## Configuration Transitions

In formal computation, transitions often move from one configuration to another.

A configuration includes more than raw data.

It may include:

- current state
- current position in execution
- memory contents
- tape position
- active instruction

Example:

```text
(state = q1, tape = 101, head = position 2)
  ->
(state = q2, tape = 111, head = position 3)
```

This prepares the idea of a Turing machine.

A Turing machine does not merely transform values.

It moves from one full machine configuration to another.

> Formal computation is often described as transitions between configurations.

## Final Summary

- A transition is a change from one state to another.
- A transition rule defines which transitions are allowed.
- A transition is one concrete application of a rule.
- A valid transition must follow the system's rules.
- A transition is one step; computation is a sequence of transitions.
- Transitions can be conditional.
- Transitions can be deterministic or non-deterministic.
- Some transitions lead to terminal states.
- Transition sequences can progress, cycle, or terminate.
- A transition relation describes all allowed transitions.
- In formal computation, transitions often occur between configurations.
