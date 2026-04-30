---
title: The Perceptron Problem
excerpt: A bottom-up explanation of computation, representation, XOR, and how these ideas lead toward reasoning models.
date: 2026-04-30
tags:
  - Machine Learning
  - Neural Networks
  - Computation
author: Tedros Tesfu
draft: false
---

# The Perceptron Problem

## What I Am Trying To Do

I am trying to build a bottom-up explanation of reasoning models.

The goal is to remove the mystery around "reasoning" by starting from the simplest idea of computation, then moving upward:

```text
symbols -> rules -> computation -> learned functions -> representations -> language models -> reasoning models
```

The core thesis is:

> Reasoning models are not magic thinking machines. They are computational systems that transform symbolic inputs through learned representations.

To make that clear, I need to connect a few ideas in the right order:

- what theoretical computation is
- how machines transform input without awareness
- how learned models replace hand-written rules with learned transformations
- why XOR exposes the limits of simple linear models
- why representation and nonlinear layers matter
- how this leads toward language models and reasoning models

## 1. Most Relevant: Computation As Symbol Transformation

At the base level, computation is transformation.

```text
input -> transformation -> output
```

A Turing machine gives the theoretical version of this idea. It has:

- a tape containing symbols
- a head that reads and writes symbols
- a finite set of internal states
- transition rules

At each step, the machine applies a rule:

```text
current state + current symbol -> write symbol + move head + next state
```

This is important because the Turing machine does not understand the symbols. It only manipulates them according to formal rules.

That gives the first principle:

> Computation does not require awareness. It requires symbols, states, and transformation rules.

## 2. Most Relevant: From Explicit Rules To Learned Transformations

A normal program is a practical version of Turing-style computation.

The programmer writes the transformation:

```text
input -> explicit algorithm -> output
```

For example:

```text
numbers -> sorting algorithm -> sorted numbers
```

Machine learning changes where the transformation comes from.

Instead of hand-writing every rule, we give the machine examples:

```text
input examples + target outputs -> learned transformation
```

Then the model uses that learned transformation:

```text
new input -> model -> output
```

The machine still does not understand the input the way a human does. It receives encoded data and applies a computable transformation. The difference is that the transformation is learned from data instead of fully specified by a programmer.

## 3. Central Example: The Perceptron

A perceptron is one of the simplest learned classifiers.

It takes inputs, multiplies them by weights, adds them together, and checks whether the result crosses a threshold.

```text
inputs -> weighted sum -> threshold -> class
```

In geometric terms, a perceptron tries to draw a straight boundary between classes.

That means a single perceptron can solve problems where the classes are linearly separable.

But this raises the next question:

> What happens when the correct classification cannot be separated by one straight boundary?

## 4. Central Example: XOR

XOR is a small logic function that exposes the limitation of a single perceptron.

XOR takes two binary inputs and returns:

- `1` when the inputs are different
- `0` when the inputs are the same

The truth table is:

| Input A | Input B | XOR Output |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

So the classes are:

- Class `0`: `(0, 0)` and `(1, 1)`
- Class `1`: `(0, 1)` and `(1, 0)`

If we plot these four points on a two-dimensional grid, the `1` outputs sit on opposite corners, and the `0` outputs sit on the other opposite corners.

No single straight line can separate the two classes correctly.

So XOR gives the key lesson:

> A single perceptron cannot solve XOR because XOR is not linearly separable.

This does not mean XOR is impossible for machines. A Turing machine can compute XOR with explicit rules. The limitation is specific to a single-layer linear classifier.

## 5. Very Relevant: Why Representation Matters

XOR matters because it shows that some problems cannot be solved directly in the original input space.

The machine needs a different representation of the input.

```text
raw input -> new representation -> easier classification
```

This is the bridge from simple perceptrons to neural networks.

A neural network adds layers:

```text
raw input -> hidden representation -> output
```

Each layer transforms the input into a new representation. With nonlinear activation functions between layers, the network can represent nonlinear boundaries.

This point is important:

> Stacking linear layers alone is not enough. Without nonlinearity, many linear layers collapse into one linear transformation.

So the deeper lesson is not only "more layers." The deeper lesson is:

> Useful reasoning requires useful intermediate representations.

## 6. Relevant Bridge: Language Models

Language models apply the same bottom-up idea at a much larger scale.

They receive text as tokens:

```text
text -> tokens -> token IDs
```

Those token IDs become vectors:

```text
tokens -> embeddings
```

Then transformer layers repeatedly transform those representations:

```text
embeddings -> contextual representations -> next-token probabilities
```

The model is still doing computation. It is transforming encoded input into output probabilities.

But unlike a hand-written program, the transformation is stored in learned parameters. The model learns patterns from language, code, facts, examples, and reasoning traces.

## 7. Most Relevant To The Bigger Goal: Reasoning Models

A reasoning model is not outside computation.

It is a model optimized to perform more useful intermediate transformations before producing an answer.

Conceptually:

```text
problem -> intermediate representations -> answer
```

Visible reasoning steps, scratchpads, hidden chains of thought, tool calls, or planning traces are all attempts to give the model more structure between input and final output.

So the bottom-up path is:

```text
Turing machine:
symbol manipulation by explicit rules

Program:
human-written transformation

Perceptron:
learned linear transformation

Neural network:
learned nonlinear representation transformation

Language model:
learned transformation over token representations

Reasoning model:
language model optimized for multi-step transformations before output
```

## Current Thesis

Computation starts as formal symbol manipulation.

Machine learning turns some transformations from hand-written rules into learned functions.

The perceptron shows the simplest version of learned classification, and XOR shows why that version is limited.

Neural networks address the limitation by learning intermediate representations through nonlinear transformations.

Language models scale this idea to token sequences.

Reasoning models extend it by using more structured intermediate transformations before producing final answers.

The point is not that reasoning models are mysterious. The point is that they sit on a long stack of simpler ideas:

```text
symbol transformation -> learned transformation -> representation transformation -> multi-step reasoning
```
