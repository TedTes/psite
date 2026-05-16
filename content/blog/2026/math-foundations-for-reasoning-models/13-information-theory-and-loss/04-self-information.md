---
title: "Self-Information"
excerpt: "Self-information measures how much information is gained when a specific outcome occurs."
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
topicOrder: 4
---

# Self-Information

## Definition

Self-information measures how much information is gained when a specific outcome occurs.

It is also called the information content of an outcome.

Basic idea:

```text
more unlikely outcome -> more self-information
more likely outcome -> less self-information
```

> Self-information measures surprise of one observed outcome.

---

## Formula

For an outcome with probability `p`, self-information is:

```text
-log(p)
```

If the log is base 2, the unit is bits.

If the log is natural log, the unit is nats.

> Self-information is negative log probability.

---

## Why Negative Log?

Probabilities are between:

```text
0 and 1
```

The log of a probability in that range is usually negative.

Example:

```text
log(0.5) < 0
```

Using negative log makes information positive.

> Negative log turns probability into positive surprise.

---

## Likely Outcome

If an outcome is very likely:

```text
p = 0.9
```

then:

```text
-log(p)
```

is small.

The event does not reveal much because it was already expected.

> Likely outcomes carry low self-information.

---

## Unlikely Outcome

If an outcome is unlikely:

```text
p = 0.01
```

then:

```text
-log(p)
```

is large.

The event reveals more because it was unexpected.

> Unlikely outcomes carry high self-information.

---

## Self-Information And Loss

Suppose a model assigns probability `p` to the correct answer.

If `p` is high:

```text
-log(p) is low
```

If `p` is low:

```text
-log(p) is high
```

This is why negative log probability becomes a useful loss.

> Wrong confidence creates high information surprise.

---

## One Outcome, Not Whole Distribution

Self-information is about one observed outcome.

Entropy, which comes later, averages self-information across a whole distribution.

```text
self-information -> one outcome
entropy -> expected self-information
```

> Self-information is the building block for entropy.

---

## Final Summary

- Self-information measures information from one observed outcome.
- It is larger for unlikely outcomes.
- It is smaller for likely outcomes.
- Its formula is `-log(p)`.
- The log base determines the unit.
- Negative log probability connects information theory to loss.
