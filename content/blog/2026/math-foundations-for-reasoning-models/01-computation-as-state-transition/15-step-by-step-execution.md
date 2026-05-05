---
title: Step-by-Step Execution
excerpt: Step-by-step execution is the trace of configurations produced by repeatedly applying transition rules.
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
topicOrder: 15
---

# What Is Step-by-Step Execution?

## Definition

Step-by-step execution is the trace of configurations produced by repeatedly applying transition rules.

It starts from an initial configuration.

Then each step applies a rule, if a rule applies.

Execution either:

- reaches a terminal configuration
- continues forever
- branches into multiple possible paths in a non-deterministic system

> Execution = configuration -> rule -> next configuration

---

## Basic Structure

Execution proceeds as a sequence:

```text
Configuration 0 -> Configuration 1 -> Configuration 2 -> ...
```

Each step:

- starts from the current configuration
- checks which transition rule applies
- produces the next configuration

If no rule applies, execution stops.

> If a rule applies, one step produces the next configuration.

---

## Execution vs Single Transition

A transition is one step.

Execution is the whole sequence of steps.

Example:

```text
Configuration 0 -> Configuration 1
```

That is one transition.

Example:

```text
Configuration 0 -> Configuration 1 -> Configuration 2 -> Configuration 3
```

That is execution.

> Transition = one step. Execution = the sequence of steps.

---

## Initial Configuration

Execution needs a starting point.

That starting point is the initial configuration.

Example:

```text
Initial configuration:
Tape: [1] [0] [1]
          ^
Control state: scanning
```

This gives the system enough information to begin:

- what is stored on the tape
- where the system is focused
- what control state is active

> Initial configuration = where execution begins.

---

## Anatomy Of One Step

One execution step has a simple structure.

Given the current configuration:

1. read the symbol at the current position
2. use the control state and read symbol to find an applicable rule
3. write the selected symbol
4. move the current position
5. change to the next control state
6. produce the next configuration

Example rule:

```text
(scanning, 0) -> (write 1, move right, next state returning)
```

This rule says what one step does when:

- the current control state is `scanning`
- the read symbol is `0`

> One step updates the configuration according to one applicable rule.

---

## Example Trace

Start:

```text
Configuration 0:
Tape: [1] [0] [1]
          ^
Control state: scanning
```

Read symbol:

```text
0
```

Applicable rule:

```text
(scanning, 0) -> (write 1, move right, next state returning)
```

After one step:

```text
Configuration 1:
Tape: [1] [1] [1]
              ^
Control state: returning
```

Now the system continues from `Configuration 1`.

Suppose another rule applies:

```text
(returning, 1) -> (write 1, move left, next state scanning)
```

After another step:

```text
Configuration 2:
Tape: [1] [1] [1]
          ^
Control state: scanning
```

So the execution trace is:

```text
Configuration 0 -> Configuration 1 -> Configuration 2
```

> Execution is the trace produced by repeated configuration transitions.

---

## Deterministic Execution

In deterministic execution, the current configuration and transition rules allow at most one next configuration.

```text
current configuration -> one next configuration
```

This does not mean every configuration has a next step.

It means that if a next step exists, there is only one.

> Deterministic execution has at most one next step from each configuration.

---

## Non-Deterministic Execution

In non-deterministic execution, one configuration may allow more than one possible next configuration.

Example:

```text
current configuration -> possible next configuration: move left
current configuration -> possible next configuration: move right
```

This means execution may branch into different possible traces.

> Non-deterministic execution can produce multiple possible paths.

---

## Halting Configuration

Execution may terminate when no further transition applies.

Example:

```text
Configuration 0 -> Configuration 1 -> Configuration 2 -> halted
```

A configuration may halt because:

- the control state is `halted`
- no rule applies to the current control state and read symbol

Example:

```text
Control state: halted
```

or:

```text
Control state: scanning
Read symbol: _
No matching rule
```

> A halting configuration has no next step.

---

## Infinite Execution

Execution may continue indefinitely.

Examples:

```text
Configuration 0 -> Configuration 1 -> Configuration 0 -> Configuration 1 -> ...
```

This is a cycle.

Another example:

```text
Configuration 0 -> Configuration 1 -> Configuration 2 -> Configuration 3 -> ...
```

This keeps producing new configurations.

> Not all execution traces terminate.

---

## Local Step, Global Trace

Each step uses local information:

- current tape position
- symbol at that position
- current control state
- transition rules

It does not need every previous configuration if the current configuration already preserves the needed information.

But the full execution trace may still be analyzed afterward.

```text
Configuration 0 -> Configuration 1 -> Configuration 2 -> ...
```

> Each step is local, but execution creates a trace over time.

---

## Why This Matters

Step-by-step execution matters because it shows how computation actually unfolds.

It connects the earlier pieces:

- tape provides structured memory
- read observes the current symbol
- write updates tape memory
- move changes the current position
- finite control provides internal context
- configuration captures the full current snapshot
- transition rules produce the next configuration

This makes computation traceable.

We can inspect each step and ask:

- what was the current configuration?
- what symbol was read?
- which rule applied?
- what changed?
- what is the next configuration?

> Step-by-step execution turns computation into an analyzable sequence.

---

## Final Summary

- Step-by-step execution is a sequence of configuration transitions.
- Execution starts from an initial configuration.
- Each step depends on the current configuration and the transition rules.
- If a rule applies, the step produces a next configuration.
- If no rule applies, execution stops.
- A deterministic system has at most one next configuration from a given configuration.
- A non-deterministic system may allow multiple possible next configurations.
- Execution may halt or continue indefinitely.
- Behavior depends on the initial configuration and transition rules.
