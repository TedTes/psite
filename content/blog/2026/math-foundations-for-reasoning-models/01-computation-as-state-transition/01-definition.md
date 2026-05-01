---
title: What Is Computation?
excerpt: Computation is rule-governed manipulation of information, symbols, or states through structured transitions.
date: 2026-05-01
tags:
  - Math Foundations
  - Computation
  - Reasoning Models
author: Tedros Tesfu
draft: true
series: Math Foundations for Reasoning Models
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: Computation as State Transition
chapterSlug: computation-as-state-transition
chapterOrder: 1
topicOrder: 1
---

# What Is Computation?

## Why This Matters

Computation can feel too obvious to define.

But if the goal is to understand reasoning models from the bottom up, computation is the first concept that needs to be made clear.

Any system that:

- takes something in
- follows rules
- changes state or produces a result

is following the basic shape of computation.

```text
input -> rule -> output
```

Examples:

- calculator: numbers -> arithmetic rule -> result
- software: request -> program logic -> response
- thermostat: temperature -> control rule -> heat on/off
- AI model: prompt -> learned computation -> output

The important point:

> Understanding computation means understanding how systems produce outcomes.

## Removing The Illusion Of Complexity

Systems like software, automation, and AI can look opaque from the outside.

But complex behavior is usually composed from simpler steps.

At a low level, a system repeatedly does something like:

```text
read current information -> apply a rule -> update something
```

This gives us a way to analyze systems:

- what information goes in?
- what rule is applied?
- what state changes?
- what output is produced?
- where can the process fail?

This does not explain all intelligence. But it gives the ground floor.

## Basic Structure

The simplest picture of computation is:

```text
input -> rule -> output
```

Example:

```text
Input: 2
Rule: add 1
Output: 3
```

So a first definition is:

> Computation is rule-based processing of input to produce output.

That definition is useful, but it is not complete enough.

For reasoning models, software, and theoretical computation, we also need the idea of **state**.

## What Is Input?

Input is the information available before a rule is applied.

Examples:

- number: `5`
- text: `"cat"`
- list: `[3, 1, 2]`
- symbol: `A`
- action: button click

Input does not need to have human meaning.

For a machine, input only needs to be distinguishable.

## Does Input Need Meaning?

No.

Example:

```text
Input: "xk3#9!"
Rule: count characters
Output: 6
```

The string does not need to mean anything. The rule only needs something it can operate on.

This distinction matters:

```text
information != meaning
```

Meaning is imposed by interpretation. Computation can operate on structure without human-like understanding.

## What Is A Rule?

A rule is a precise instruction for what to do next.

Examples:

- add `2`
- sort a list
- check if a number is even
- convert text to uppercase
- move to the next state

A rule defines a relationship between what the system has now and what it should do next.

Example:

```text
Input: 5
Rule: add 1
Output: 6
```

The same input can produce different outputs under different rules:

```text
Input: 5

Rule: add 1    -> Output: 6
Rule: multiply by 2 -> Output: 10
Rule: is even? -> Output: false
```

The rule determines the mapping.

## Does Computation Always Transform The Input?

Not by mutating the original input.

Example:

```text
Input: 5
Rule: is even?
Output: false
```

The number `5` does not change. But the computation still transforms information: it maps a number to a truth value.

So the better distinction is:

> Computation does not always mutate input, but it does produce a new value, state, effect, or result from what was given.

## What Is Output?

Output is what results from applying a rule.

Examples:

- value: `5 -> 7`
- decision: `true` or `false`
- structure: unsorted list -> sorted list
- action: print text
- state change: file exists -> file deleted

Sometimes output is visible. Sometimes it is internal.

## Can There Be No Output?

Yes, depending on what we mean by output.

Some computations return a value. Some only change state. Some produce an observable effect. Some never halt, which means they never produce a final result.

Examples:

- deleting a file changes system state
- printing text creates an observable effect
- an infinite loop may never return a final value

So a more precise statement is:

> A computation may produce a returned value, a changed state, an observable effect, or no final result if it does not halt.

## Is Computation Goal-Oriented?

Not by itself.

A computation follows rules. It does not need to know why those rules matter.

The goal comes from outside the computation:

- a programmer
- a user
- a training objective
- an environment
- a system designer

For example, a sorting algorithm does not care why a list should be sorted. It only follows the procedure.

> Goals are external to computation. Rule-following is internal to computation.

## Does Computation Require Understanding?

No.

Example:

```text
Input: "12345"
Rule: reverse the string
Output: "54321"
```

The system does not need to know that the string represents numbers. It only needs to apply the rule.

This is the key idea:

> Computation operates on structure, not meaning.

Meaning can be assigned by humans, systems, or downstream interpretation. But the computation itself can proceed without awareness.

## Computation As State Transition

The input-output view is useful, but state gives us a deeper view.

A **state** is the condition of a system at a particular moment.

Examples:

- a light is `on` or `off`
- a program is waiting, running, or finished
- a thermostat is heating or idle
- a machine is in state `q0`, `q1`, or `q2`

A **transition** is a movement from one state to another.

```text
current state -> rule -> next state
```

More generally:

```text
current state + input -> transition rule -> next state + output/effect
```

Example:

```text
Current state: light is off
Input: switch pressed
Rule: toggle light
Next state: light is on
```

This is why computation is not only about producing output. It is also about moving through states.

## Step-By-Step Computation

Many computations happen through a sequence of steps.

Example:

```text
Input: 3

Step 1: add 2      -> 5
Step 2: multiply 3 -> 15
Step 3: subtract 1 -> 14

Output: 14
```

The output of one step becomes the input to the next step.

This gives a more realistic picture:

```text
initial state -> step -> step -> step -> final state/output
```

Complex behavior can be built from many simple transitions.

## The Turing Machine Connection

A Turing machine is a formal model of computation.

It has:

- a tape containing symbols
- a head that reads and writes symbols
- a finite set of internal states
- transition rules

At each step, the machine applies a rule:

```text
current state + current symbol
-> write symbol + move left/right + next state
```

This is computation as state transition in its clearest form.

The machine does not understand the symbols. It does not know what the input means. It simply follows rules that transform one configuration into another.

## What Is A Configuration?

A configuration is the full situation of the machine at one moment.

For a Turing machine, this includes:

- the current tape contents
- the current head position
- the current internal state

So computation is not just:

```text
input -> output
```

It is more like:

```text
configuration 1 -> configuration 2 -> configuration 3 -> ...
```

The final output is only what we observe when the process stops.

## Why This Matters For Reasoning Models

Reasoning models can seem mysterious because their behavior is complex.

But they still fit inside the broader idea of computation.

At a high level:

```text
prompt -> model computation -> output
```

At a deeper level:

```text
tokens -> representations -> layer transformations -> output probabilities
```

The model is not manipulating meaning directly. It is transforming encoded information through learned rules and parameters.

This does not mean reasoning models are simple. It means they are not magic.

They are computational systems that move from one representation to another until an output can be produced.

## A More Precise Definition

The simple definition was:

> Computation is rule-based processing of input to produce output.

A stronger definition is:

> Computation is the rule-governed manipulation of information, symbols, or states. It maps an initial configuration through one or more steps into a new configuration, output, or observable effect.

This definition is broad enough to include:

- arithmetic
- programs
- state machines
- Turing machines
- neural networks
- reasoning models

## Bridge To The Next Topic

If computation is rule-governed manipulation of symbols and states, the next question is:

> What kinds of symbols and rules let us represent reasoning?

That leads to symbolic logic.

Symbolic logic gives us a formal way to represent propositions, truth, inference, contradiction, and validity. It is one of the earliest ways humans made reasoning computable.
