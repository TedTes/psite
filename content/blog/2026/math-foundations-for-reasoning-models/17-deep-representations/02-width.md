---
title: "Width"
excerpt: "Width is the number of units in a layer, controlling how many signals a layer can represent at once."
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
topicOrder: 2
---

# Width

## Definition

Width is the number of neurons or units in a layer.

Example:

```text
layer with 4 neurons -> width 4
layer with 128 neurons -> width 128
```

> Width measures how many values a layer produces at one stage.

---

## What Width Controls

A wider layer can compute more signals in parallel.

Example:

```text
input -> layer output:
[a1, a2, a3, a4]
```

Each output value can represent a different learned signal.

Increasing width gives the layer more room to represent different aspects of the input.

> Width controls representational capacity within a layer.

---

## Width vs Depth

Width and depth are different.

```text
width:
how many units are in one layer

depth:
how many layers are stacked
```

A network can be:

```text
wide but shallow
narrow but deep
wide and deep
```

These choices affect what the model can represent and how it trains.

> Width is capacity at a stage; depth is number of stages.

---

## Wider Is Not Automatically Better

More width gives more parameters and more possible signals.

But it can also increase:

```text
computation cost
memory cost
risk of overfitting
optimization difficulty
```

The useful width depends on the task, data, and training setup.

> Width adds capacity, but capacity must be controlled.

---

## Final Summary

- Width is the number of units in a layer.
- Wider layers produce more output values.
- Width lets a layer represent multiple signals in parallel.
- Width is different from depth.
- More width increases capacity and cost.
- Useful networks balance width, depth, data, and optimization.
