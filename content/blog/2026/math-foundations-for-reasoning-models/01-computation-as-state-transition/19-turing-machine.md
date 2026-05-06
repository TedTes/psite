---
title: Turing Machine
excerpt: A Turing machine is a simple theoretical model that shows computation as symbols, memory, rules, and step-by-step state transitions.
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
topicOrder: 19
---

# What Is a Turing Machine?

## Definition

A Turing machine is a simple theoretical model of computation.

It describes a system with:

- a tape for storing symbols
- a current position on the tape
- a finite control state
- transition rules
- step-by-step execution

> A Turing machine is a precise model of rule-based computation over symbols.

---

## Why Introduce This Model?

So far, the pieces were introduced separately:

- symbols
- state
- transition rules
- input and output
- memory
- tape
- read, write, and move operations
- finite control
- configuration
- step-by-step execution
- algorithms

A Turing machine combines these into one clean model.

It gives us a way to ask:

```text
What can be computed by following explicit rules step by step?
```

> The Turing machine turns the earlier pieces into one precise computation model.

---

## Main Components

A Turing machine has four main operational parts.

### 1. Tape

The tape stores symbols.

Example:

```text
[1] [0] [1] [_] [_]
```

The blank symbol `_` represents an empty tape cell.

### 2. Current Position

The machine is focused on one tape cell at a time.

Example:

```text
[1] [0] [1] [_]
     ^
```

### 3. Finite Control

The finite control stores the current control state.

Example:

```text
Control state: scanning
```

### 4. Transition Rules

Transition rules define what the machine does next.

Example:

```text
(scanning, 0) -> (write 1, move right, next state returning)
```

> A Turing machine is built from tape, position, finite control, and transition rules.

---

## One Step

At each step, the machine:

1. reads the symbol at the current position
2. checks the current control state
3. finds an applicable transition rule
4. writes a symbol
5. moves left or right
6. changes control state

Example:

```text
Before:
[1] [0] [1]
     ^
Control state: scanning

Rule:
(scanning, 0) -> (write 1, move right, next state returning)

After:
[1] [1] [1]
         ^
Control state: returning
```

> One Turing machine step transforms one configuration into the next.

---

## Configuration

A configuration is the machine's full current snapshot.

For a Turing machine, it includes:

- tape contents
- current tape position
- current control state

Example:

```text
Tape: [1] [0] [1]
          ^
Control state: scanning
```

This configuration determines which rule can apply next.

> Turing machine execution is a sequence of configurations.

---

## Input

Input is written on the tape before execution begins.

Example input:

```text
101
```

Initial tape:

```text
[1] [0] [1] [_] [_]
 ^
Control state: scanning
```

The input does not need to be meaningful to the machine.

It only needs to be represented as distinguishable symbols.

> Input gives the initial tape contents.

---

## Output

Output is what remains or becomes observable after execution.

Example:

```text
Before:
[1] [0] [1]

After:
[1] [1] [1]
```

The output may be:

- the final tape contents
- part of the final tape contents
- a final control state such as `accept` or `reject`

> Output is read from the result of execution.

---

## Algorithm As Transition Rules

An algorithm can be represented by a set of transition rules.

Example:

```text
(scanning, 1) -> (write 1, move right, next state scanning)
(scanning, 0) -> (write 1, move right, next state scanning)
(scanning, _) -> (write _, move left, next state halted)
```

This procedure scans across the tape.

When it sees `0`, it changes it to `1`.

When it reaches blank space, it stops.

> A Turing machine algorithm is expressed as transition rules.

---

## Halting

A Turing machine halts when execution has no next step.

This can happen because:

- it enters a `halted` control state
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

> Halting means the machine stops producing new configurations.

---

## Deterministic And Non-Deterministic Versions

A deterministic Turing machine has at most one applicable rule for each current situation.

Example:

```text
(scanning, 0) -> one next action
```

A non-deterministic version may allow multiple possible next actions.

Example:

```text
(scanning, 0) -> possible action 1
(scanning, 0) -> possible action 2
```

The core idea is the same:

```text
configuration -> rule -> next configuration
```

> The Turing machine model can describe single-path or branching computation.

---

## Not A Modern Computer

A Turing machine is not meant to look like a laptop or phone.

It is intentionally simple.

It removes everything that is not needed for the basic idea of computation.

What remains is:

- symbols
- memory
- rules
- step-by-step state change

> A Turing machine is a simplified model for understanding computation, not a product design.

---

## Why This Matters

The Turing machine matters because it gives a precise answer to a basic question:

```text
What does it mean for a procedure to be computable by explicit rules?
```

It shows that computation does not require mystery.

It can be described as:

```text
read -> write -> move -> change control state -> repeat
```

From those simple operations, complex behavior can be built.

> A Turing machine makes computation analyzable as symbolic state transition.

---

## Final Summary

- A Turing machine is a theoretical model of computation.
- It uses a tape, current position, finite control, and transition rules.
- It reads one symbol at a time.
- It writes symbols, moves position, and changes control state.
- Its execution is a sequence of configurations.
- Input is placed on the tape before execution begins.
- Output is read from the result of execution.
- Algorithms can be represented as transition rules.
- A Turing machine may halt or continue indefinitely.
- The model reduces computation to symbols, memory, rules, and state transitions.
