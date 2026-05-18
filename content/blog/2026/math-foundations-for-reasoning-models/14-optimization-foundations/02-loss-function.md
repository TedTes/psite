---
title: "Loss Function"
excerpt: "A loss function measures how wrong an output is and gives optimization something concrete to reduce."
date: 2026-05-01
tags:
  - Foundations
  - Optimization
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Optimization Foundations"
chapterSlug: optimization-foundations
chapterOrder: 14
topicOrder: 2
---

# Loss Function

## Definition

A loss function measures how wrong an output is.

It compares:

```text
predicted output
expected output
```

and produces a number.

Example:

```text
expected: 10
predicted: 7
loss: 3
```

> A loss function turns wrongness into a measurable value.

---

## Why Loss Is Needed

A model can produce an output, but optimization needs to know whether that output is good or bad.

Loss provides that signal.

```text
small loss -> output is closer to what we wanted
large loss -> output is farther from what we wanted
```

Without loss, the system can generate outputs but cannot measure improvement.

> Loss tells optimization what needs to be reduced.

---

## Loss as Feedback

Loss is not just a final score.

It acts as feedback for changing parameters.

```text
input -> model -> output -> loss
```

Then optimization asks:

```text
how should the parameters change so the loss becomes smaller?
```

> Loss connects output quality to parameter updates.

---

## One Example vs Many Examples

Loss can be measured for one example.

```text
example 1 -> loss 0.8
```

But learning usually uses many examples.

```text
example 1 -> loss 0.8
example 2 -> loss 0.2
example 3 -> loss 1.4
```

The training objective often combines these losses.

Example:

```text
average loss = total loss / number of examples
```

> A loss function can measure one mistake, while an objective often combines many mistakes.

---

## Loss Depends on Parameters

The same input can produce different loss depending on the parameters.

Example:

```text
parameters A -> prediction 7 -> loss 3
parameters B -> prediction 9 -> loss 1
```

The input did not change.

The expected output did not change.

The parameters changed, so the prediction changed, and the loss changed.

> Optimization searches for parameters that produce lower loss.

---

## Lower Loss Is Not Always Better in the Full Sense

Lower training loss usually means the model fits the training examples better.

But fitting training examples is not always the same as solving the real problem.

Example:

```text
very low training loss
poor behavior on new examples
```

This is why later topics include overfitting, regularization, and generalization.

> Loss is necessary, but the chosen loss must match the real goal.

---

## Final Summary

- A loss function measures how wrong an output is.
- It compares prediction with expected output.
- Loss gives optimization a signal to reduce.
- Loss can be measured per example or combined across examples.
- Loss changes when parameters change.
- Lower loss is useful only when the loss matches the intended behavior.
