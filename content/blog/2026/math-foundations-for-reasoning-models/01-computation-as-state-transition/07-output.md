---
title: Output
excerpt: Output is the result a system makes available after applying a rule to input, state, or both.
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
topicOrder: 7
---

# What Is Output?

## Definition

Output is the result a system makes available after applying a rule to input, state, or both.

Output can be:

- a returned value
- a changed state
- an external effect
- a signal to another system
- an intermediate result used by a later step

> Output = result made available by computation

---

## Output vs State

State is the system's current condition.

Output is what the system exposes, returns, changes, or makes available from that condition.

Example:

```text
State: x = 5
Rule: return x + 1
Output: 6
```

The state contains `x = 5`.

The output is `6`.

> State is what the system currently has. Output is what the system makes available.

---

## Output As Final Result

In many cases, the final state contains the information used as output.

Example:

```text
Input: 3
Rule: add 2 three times

States:
3 -> 5 -> 7 -> 9

Output: 9
```

The final state is `9`.

The output is the value exposed from that final state.

> A final state can determine the final output.

---

## Output As Extracted Information

Output can also be derived from the state.

Example:

```text
State: (x = 5, y = 10)
Rule: return x + y
Output: 15
```

The output is not the whole state.

It is extracted from part of the state.

> Output may be a value derived from the current state.

---

## Output As Effect

Output is not always a returned value.

It can also be an effect.

Examples:

```text
print("hello") -> text appears on screen
delete file -> file no longer exists
send signal -> another system receives it
```

In these cases, the output is what the computation causes or exposes.

> Output can be a value, a state change, or an observable effect.

---

## Output Does Not Always Change State

Output may leave the internal state unchanged while still creating an external effect.

Example:

```text
Internal state: x = 5
Rule: print x
External output: 5
Internal state after output: x = 5
```

The internal state did not change.

But something was still produced outside the internal state.

> Output can expose information without changing the internal state.

---

## Output Over Time

Output is not always a single result.

### Single output

```text
input -> computation -> final output
```

### Continuous output

Output may be produced during computation.

Example:

```text
State: 3 -> output: 3
State: 5 -> output: 5
State: 7 -> output: 7
State: 9 -> output: 9
```

Each output is produced before the full sequence is finished.

> Output can be generated at intermediate steps.

---

## Output Must Be Available

Output must be available to some observer, system, or later step.

Examples:

- displayed value
- returned result
- saved file
- signal to another system
- value passed into the next step

If nothing can access or use the result, then it does not function as output for that system.

> Output must be representable and accessible.

---

## No Final Output

Some computations may never produce a final output.

Example:

```text
while true:
  keep running
```

The system may keep changing state.

It may even produce intermediate outputs.

But if it never stops, it does not produce a final result.

> A computation can have no final output if it never reaches a final result.

---

## Output As Input

Output can feed into further computation.

Example:

```text
First computation:
Input: 3
Rule: add 2
Output: 5

Next computation:
Input: 5
Rule: add 2
Output: 7
```

What counts as output in one step may become input for another step.

> Output of one computation can become input to another.

---

## Raw Output vs Interpreted Output

The same output can be interpreted differently by different systems.

Example:

```text
Output: "7"
```

One system may treat it as text:

```text
"7" -> count characters -> 1
```

Another system may treat it as a number:

```text
"7" -> convert to number -> 7
7 -> add 1 -> 8
```

The raw output is the same.

The interpretation depends on the system that receives it.

> Output becomes useful only relative to a system that can handle it.

---

## Output vs Meaning

Output does not require meaning.

Example:

```text
Output: "xk3#9!"
```

This may have no human meaning.

But it can still be output if it is produced by the system and made available.

> Output is a structured result, not necessarily meaningful interpretation.

---

## Final Summary

- Output is a result made available by computation.
- Output may come from input, state, or both.
- State is what the system currently has; output is what it exposes, returns, changes, or makes available.
- A final state can determine the final output.
- Output can be extracted from part of the state.
- Output can be a returned value, state change, signal, or external effect.
- Output can expose information without changing internal state.
- Output may be produced once, continuously, or at intermediate steps.
- Some computations may never produce a final output.
- Output of one computation can become input to another.
- Output does not require human meaning.
