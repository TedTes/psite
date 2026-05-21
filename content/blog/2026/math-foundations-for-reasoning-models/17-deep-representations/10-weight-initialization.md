---
title: "Weight Initialization"
excerpt: "Weight initialization sets the starting parameter values before training begins, shaping early gradient flow."
date: 2026-05-01
tags:
  - Foundations
  - Representation
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Deep Representations"
chapterSlug: deep-representations
chapterOrder: 17
topicOrder: 10
---

# Weight Initialization

## Definition

Weight initialization is the choice of starting values for weights before training begins.

Before learning:

```text
weights need initial values
training updates them from there
```

> Initialization defines the starting point in parameter space.

---

## Why Initialization Matters

Training starts from the initial parameters.

If the starting values are poor, training can be harder.

Examples:

```text
weights too large -> unstable activations or gradients
weights too small -> weak signals or tiny gradients
all weights identical -> neurons may learn the same thing
```

> Initialization affects the first signals that training uses.

---

## Not Starting From Zero Everywhere

If many weights start with exactly the same value, neurons can behave too similarly.

Example:

```text
neuron 1 starts like neuron 2
neuron 2 receives same gradient pattern
both keep behaving similarly
```

Random initialization helps different neurons begin with different roles.

> Different starting values help neurons learn different signals.

---

## Scale Matters

The size of initial weights matters.

If weights are too large, outputs and gradients can become unstable.

If weights are too small, signals can shrink too much.

Good initialization tries to keep values in a useful range.

> Initialization helps preserve signal flow at the start of training.

---

## Final Summary

- Weight initialization sets starting weight values.
- It determines where training begins in parameter space.
- Poor initialization can make training unstable or slow.
- Identical weights can make neurons behave too similarly.
- Random starting values help break symmetry.
- The scale of initial weights affects activation and gradient flow.
