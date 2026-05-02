---
title: What Is a Symbol?
excerpt: A symbol is a distinguishable token that can be recognized, stored, compared, and transformed according to rules.
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
topicOrder: 2
---

# What Is a Symbol?

## Definition

A symbol is a distinguishable token inside a system.

It may stand in place of something else, but it does not have to. In formal computation, a symbol can simply be an element from a set of possible marks.

Examples:

- `"A"` can represent a letter or sound
- `5` can represent a quantity
- `x` can represent an unknown value
- `0` and `1` can be symbols in a binary system

The important distinction:

> A symbol is not the thing itself. It is a representation or token that a system can operate on.

For computation, a stronger definition is:

> A symbol is a distinguishable token that can be recognized, stored, compared, and transformed according to rules.

## Symbols Vs Reality

A symbol does not need to resemble what it represents.

Examples:

- `"cat"` does not look like an animal
- `"5"` is not five physical objects
- `x` has no inherent value
- `01000001` is not visually similar to the letter `A`

The connection between a symbol and its meaning is assigned.

```text
symbol != reality
```

This matters because computers and reasoning models do not manipulate real-world objects directly. They manipulate representations.

The machine does not operate on a cat. It operates on a word, token, code, or other representation of the cat.

## Does A Symbol Need Meaning?

No.

Example:

```text
Input: "xk3#9!"
Rule: count characters
Output: 6
```

The string may have no meaningful interpretation for a human, but computation still works.

The system only needs the input to be distinguishable and compatible with the rule.

> Symbols can be processed without meaning.

This is one of the core ideas behind computation:

> Meaning is not required for rule-following.

## Symbols And Alphabets

In formal computation, symbols usually come from an **alphabet**.

An alphabet is the set of symbols a system can read or write.

Examples:

```text
Binary alphabet: {0, 1}
Decimal digits: {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
Logic symbols: {AND, OR, NOT, true, false}
```

In a Turing machine, the alphabet is the finite set of marks that can appear on the tape.

The machine does not need to understand those marks. It only needs to distinguish them and apply transition rules.

## Symbols Vs Encoding

A symbol is the unit being represented.

An encoding is the form that lets a particular system store, read, compare, or transmit that symbol.

Example:

```text
Symbol: "A"
Encoding: ASCII code 65
Machine form: binary data
```

The symbol gives identity:

```text
"A" is different from "B"
```

The encoding makes that identity usable by a machine:

```text
65 can be stored, compared, transmitted, and processed
```

So the distinction is:

```text
symbol = what is being represented
encoding = how that symbol is represented inside a system
```

This solves a practical problem.

A human can look at `"A"` and recognize it as a letter. A computer needs a concrete internal representation. Encoding is the bridge between the human-visible symbol and the machine-operable form.

Examples:

```text
Letter "A" -> ASCII code 65
Text character -> Unicode value
Decimal digit "5" -> stored character code
Button press -> electrical/digital signal
```

The key idea:

> Symbols make information distinguishable. Encodings make symbols usable by a particular system.

## Arbitrary Vs Structural Representation

There are different relationships between symbols and what they represent.

### Arbitrary Symbols

Some symbols are arbitrary.

Examples:

- language words like `"cat"` and `"dog"`
- variable names like `x` and `y`
- labels like `class_A` and `class_B`

There is no inherent connection between the mark and what it represents.

### Structural Symbol Systems

Some symbol systems preserve structure.

For example, the glyph `5` is arbitrary. But the number system has structure:

```text
5 > 4
5 + 1 = 6
5 occupies a position in an ordered numeric system
```

So the better distinction is:

> Individual symbols can be arbitrary, but symbol systems can preserve structure.

This is important for computation because rules depend on the structure of the symbol system.

## Consistency Requirement

Even if a symbol is arbitrary, its interpretation must be consistent within a given context.

Example:

```text
x = 5
x + 1 = 6
```

In that expression, `x` must refer to `5` consistently.

But symbols can also change meaning when the rules allow it.

Example:

```text
x = 5
x = x + 1
```

After the update, `x` refers to `6`.

So the more precise rule is:

> A symbol must be interpreted consistently within a given rule, context, or scope.

This idea will matter later when we discuss variables, binding, memory, and state.

## Symbols In Computation

Computation operates on symbols and encoded representations, not directly on real-world objects.

Example:

```text
Symbol: "5"
Interpretation: number 5
Rule: add 1
Output symbol: "6"
```

This example needs the interpretation step. If `"5"` is just a string, `add 1` may not be valid unless the system knows how to treat that string as a number.

That distinction matters:

```text
"5" as text -> string operation
5 as number -> arithmetic operation
```

The same mark can participate in different computations depending on how the system represents and interprets it.

## Encoding Vs Embedding

Encoding and embedding are related, but they solve different problems.

An encoding makes a symbol usable by a machine.

Example:

```text
Symbol: "cat"
Encoding: token ID 5432
```

The encoding preserves identity. It tells the system:

```text
this is token 5432, not token 9187
```

That is useful, but it is limited. A token ID only identifies the symbol. By itself, it does not explain how `"cat"` relates to `"dog"`, `"animal"`, or `"run"`.

An embedding solves a later problem:

> How can a model represent relationships between symbols, not just identify them?

For now, the important distinction is:

```text
encoding = makes a symbol machine-readable
embedding = makes a symbol useful for learned relationships
```

We do not need to explain embeddings deeply yet. They belong later in the series, after we understand representation, geometry, and learning.

For this chapter, the simple pipeline is enough:

```text
symbol -> encoding -> computation
```

Later, when the problem becomes learning relationships between symbols, we will extend that pipeline.

## Manipulability

For something to function as a symbol in computation, a system must be able to operate on it.

The system must be able to do things like:

- read it
- distinguish it from other symbols
- compare it
- store it
- transform it

Example:

```text
Input: "cat"
Rule: uppercase
Output: "CAT"
```

This works because the system can recognize each character and apply a text transformation rule.

So a useful working definition is:

> Symbol = distinguishable representation + operability.

## When Something Cannot Function As A Symbol

Something cannot participate in computation if the system cannot distinguish it or cannot apply any rule to it.

### Cannot Be Distinguished

Two inputs may be different in the outside world, but if the system represents them the same way, it cannot treat them differently.

Example:

```text
Outside inputs:
0
1

System representation:
0 -> X
1 -> X
```

The outside inputs are different, but the system only sees `X` in both cases.

Since the distinction was lost during representation, no later rule can recover it.

> If two inputs collapse into the same internal representation, the system cannot compute differently over them.

### Cannot Be Operated On

An input may exist, but no available rule applies to it.

Example:

```text
Input: image
System: only supports numbers
Rule: add 1
Result: invalid
```

The image might contain information, but this system has no applicable operation for it.

The principle:

> No distinction or no applicable operation means no computation for that system.

## Rule Applicability

A rule must be defined for the kind of input it receives.

Examples:

```text
Input: "cat"
Rule: add 1
Result: invalid
```

```text
Input: 5
Rule: uppercase
Result: invalid
```

A rule is valid only within its domain of applicable inputs.

This is why representation matters. The same raw input may need to be converted into the right form before a rule can operate on it.

## Symbols And Structure

Symbols may be arbitrary, but computation depends on structure.

Different symbol systems can express the same abstract relationship:

```text
Decimal: 2 + 3 = 5
Roman numerals: II + III = V
Binary: 10 + 11 = 101
```

But the rules are not automatically the same.

Binary arithmetic, Roman numeral manipulation, and decimal arithmetic require different procedures unless they are translated into a common representation.

So the precise point is:

> The same abstract structure can be represented in different symbol systems, but computation requires rules appropriate to the chosen representation.

## Why This Matters For Reasoning Models

Reasoning models begin with symbols.

A text prompt is first broken into tokens. Those tokens are not meanings themselves. They are discrete symbols or symbol-like units that the model can process.

At a high level:

```text
text -> tokens -> encoded token IDs -> model computation -> output tokens
```

The model does not manipulate the world directly. It manipulates encoded representations.

This is why symbols matter:

- symbols make information distinguishable
- encodings make symbols usable by a particular system
- rules or learned procedures transform those representations
- meaning is interpreted through the surrounding system and use case

This connects directly to the larger idea:

> Reasoning models are computational systems that transform representations.

## Final Summary

- A symbol is a distinguishable token inside a system.
- A symbol is not the thing itself.
- Meaning is not required for computation.
- Symbols often come from an alphabet.
- Encoding is how a symbol is represented inside a system.
- Individual symbols can be arbitrary.
- Symbol systems can preserve structure.
- Symbols must be distinguishable and operable.
- Rules must apply to the input representation.
- The same structure can be represented in different symbol systems.
- Computation depends on rules that match the chosen representation.
- Embeddings solve a later problem: representing learned relationships between symbols.
