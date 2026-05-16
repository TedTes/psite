---
title: "Nat"
excerpt: "A nat is a unit of information based on natural logarithms."
date: 2026-05-01
tags:
  - Foundations
  - Information Theory
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Information Theory and Loss"
chapterSlug: information-theory-and-loss
chapterOrder: 13
topicOrder: 3
---

# Nat

## Definition

A nat is a unit of information based on the natural logarithm.

Bits use:

```text
log base 2
```

Nats use:

```text
natural log
```

often written as:

```text
ln
```

> Nat = information measured using natural logarithms.

---

## Why Another Unit?

Information can be measured using different logarithm bases.

The unit changes, but the underlying idea stays the same:

```text
measure surprise or uncertainty
```

Bits are convenient for binary distinctions.

Nats are convenient in calculus and optimization because natural logarithms work cleanly with derivatives.

> Nats are common when probability meets calculus.

---

## Bit vs Nat

Bit:

```text
uses log base 2
```

Nat:

```text
uses natural log
```

Both measure information.

They use different scales.

> Bits and nats are like different units for the same kind of quantity.

---

## Simple Intuition

If an event is unlikely, it has high information.

That idea is true whether measured in bits or nats.

Example:

```text
probability = low
information = high
```

The unit only changes the numeric scale.

> Changing units does not change the underlying uncertainty.

---

## Why Nats Appear In Learning

Many learning losses use natural logs.

Example:

```text
negative log likelihood
```

When natural log is used, the loss is measured in nats.

This is common because optimization often works with derivatives, and natural logs behave cleanly there.

> Many probability-based learning losses are naturally measured in nats.

---

## Do You Need To Memorize The Conversion?

Not at this stage.

The useful distinction is:

```text
bit -> base 2 information unit
nat -> natural log information unit
```

The concepts of surprise, entropy, and loss work with either unit.

> Focus on the meaning first; the unit depends on the log base.

---

## Final Summary

- A nat is a unit of information.
- Nats use natural logarithms.
- Bits use log base 2.
- Both measure information, but on different scales.
- Nats are common in learning because natural logs work well with calculus.
- Negative log likelihood is often measured in nats.
