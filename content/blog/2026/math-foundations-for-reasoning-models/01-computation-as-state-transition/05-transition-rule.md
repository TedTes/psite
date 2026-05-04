---
title: Transition Rule
excerpt: A transition rule defines which next states are allowed from a current state and what conditions make those moves valid.
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
topicOrder: 5
---

# What Is a Transition Rule?

## Definition

A transition rule is the instruction that determines how a system may move from its current state to a next state.

Simple form:

```text
current state -> next state
```

As a rule:

```text
Rule(current state) = next state
```

If more than one next state is allowed:

```text
Rule(current state) = {possible next states}
```

> A transition rule defines the allowed next state or next states for a current state.

## Transition Rule vs Transition

A transition rule is the general instruction.

A transition is one actual step produced by applying that instruction.

Example:

```text
Rule: x -> x + 2

Transitions:
3 -> 5
5 -> 7
7 -> 9
```

The rule describes the pattern.

Each transition is one instance of that pattern.

> Rule = what is allowed. Transition = what happens in one step.

## Rule As Condition And Action

A transition rule often has two parts:

- condition: when the rule applies
- action: how the state changes

Example:

```text
if x < 10:
  x -> x + 1
```

The condition is:

```text
x < 10
```

The action is:

```text
x -> x + 1
```

When the condition is true, the action can be applied.

When the condition is false, this rule does not apply.

> A transition rule says when a change is allowed and what change happens.

## Applicable Rules

A rule must be applicable to the current state.

Example:

```text
Rule: x -> x - 1 if x > 0
```

If the current state is:

```text
x = 3
```

then the rule applies:

```text
3 -> 2
```

If the current state is:

```text
x = 0
```

then the rule does not apply.

The condition `x > 0` is not satisfied.

> A rule that does not apply cannot produce a valid transition.

## Valid And Invalid Next States

A transition rule defines which next states are valid.

Example:

```text
State space: {1, 2, 3, 4}
Rule: x -> x + 1, but stay at 4 if x is already 4
```

Valid transitions:

```text
1 -> 2
2 -> 3
3 -> 4
4 -> 4
```

Invalid transitions:

```text
1 -> 3
2 -> 4
```

Those jumps are invalid because the rule only allows movement by one step at a time.

> Not every possible change is valid. Valid changes are the ones allowed by the rule.

## Rule As Constraint

The state space contains all possible states.

The transition rule constrains which movements are allowed inside that space.

Example:

```text
State space: {1, 2, 3, 4}
Rule: move forward by 1
```

The state `1` exists in the state space.

The state `4` also exists in the state space.

But the rule does not allow:

```text
1 -> 4
```

The state exists, but the movement is not allowed.

> State space defines what can exist. Transition rules define how movement can happen.

## Total And Partial Rules

A transition rule can be total or partial.

### Total Rule

A total rule is defined for every state in the relevant state space.

Example:

```text
State space: {1, 2, 3, 4}
Rule: x -> x + 1, but stay at 4 if x is already 4
```

Every state has a next state:

```text
1 -> 2
2 -> 3
3 -> 4
4 -> 4
```

> A total rule always gives a next state.

### Partial Rule

A partial rule is defined only for some states.

Example:

```text
Rule: x -> x - 1 if x > 1
```

Valid transitions:

```text
3 -> 2
2 -> 1
```

But for:

```text
x = 1
```

the rule is undefined.

No next state is produced by this rule.

> A partial rule may leave some states without a next step.

## When No Rule Applies

If no rule applies, the system cannot take another transition.

This can mean different things depending on how the system is defined:

- the computation has intentionally stopped
- the system reached a state where no valid next step exists

Example:

```text
Rule: x -> x - 1 if x > 0
```

Sequence:

```text
3 -> 2 -> 1 -> 0
```

At `0`, the rule no longer applies.

The system has no next transition under that rule.

> No applicable rule means no next step can be taken.

## Deterministic And Non-Deterministic Rules

A deterministic transition rule allows exactly one next state for a current state.

Example:

```text
Rule: x -> x + 1
5 -> 6
```

A non-deterministic transition rule allows more than one possible next state.

Example:

```text
Rule: x -> x + 1 or x -> x - 1

Possible transitions:
5 -> 6
5 -> 4
```

This does not mean the system has no rules.

It means the rule permits multiple valid next states.

> Deterministic rules allow one next state. Non-deterministic rules allow multiple possible next states.

## Local Updates

A transition rule may change only part of the state.

Example:

```text
Current state: (x = 5, y = 10)
Rule: x -> x + 1
Next state: (x = 6, y = 10)
```

Only `x` changed.

`y` stayed the same.

The whole state still matters, even when the rule updates only one part of it.

> A rule can update part of the state while leaving the rest unchanged.

## Composition Of Rules

Transition rules can be applied in sequence.

Example:

```text
Rule 1: x -> x + 2
Rule 2: x -> x * 3
```

Starting from:

```text
x = 3
```

Apply Rule 1:

```text
3 -> 5
```

Then apply Rule 2:

```text
5 -> 15
```

Together:

```text
3 -> 5 -> 15
```

> Larger computations can be built by applying simple rules step by step.

## Final Summary

- A transition rule defines how a system may move from one state to another.
- A transition is one actual step produced by applying a rule.
- A rule can be understood as condition plus action.
- A rule must be applicable to the current state.
- The rule determines which next states are valid.
- State space defines possible states; transition rules define allowed movement.
- A rule can be total or partial.
- If no rule applies, no next step can be taken.
- A rule can be deterministic or non-deterministic.
- A rule may update only part of the state.
- Larger computations can be built by composing rules.
