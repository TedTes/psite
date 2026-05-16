---
title: "Bit"
excerpt: "A bit is the amount of information needed to distinguish between two equally likely possibilities."
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
topicOrder: 2
---

# Bit

## Definition

A bit is a unit of information.

One bit is the information needed to distinguish between two equally likely possibilities.

Example:

```text
coin flip: heads or tails
```

If both are equally likely, observing the result gives one bit of information.

> Bit = information from resolving one fair two-way uncertainty.

---

## Bit As Binary Distinction

A bit is often represented using:

```text
0
1
```

But the bit is not just the symbol.

The bit measures the distinction between two possibilities.

Example:

```text
0 = no
1 = yes
```

> A bit is a unit of distinction, often encoded as 0 or 1.

---

## More Possibilities Require More Bits

If there are four equally likely possibilities:

```text
A
B
C
D
```

we need two bits to identify one outcome.

Example:

```text
A -> 00
B -> 01
C -> 10
D -> 11
```

> More possible outcomes require more information to distinguish.

---

## Bits And Probability

Bits connect to probability through surprise.

If an event has probability:

```text
1/2
```

its information is:

```text
1 bit
```

If an event has probability:

```text
1/4
```

its information is:

```text
2 bits
```

> Lower probability events carry more bits when observed.

---

## Bit vs Binary Value

A binary value is a symbol:

```text
0 or 1
```

A bit is an amount of information.

They are related, but not identical.

Example:

```text
binary symbol -> representation
bit -> information amount
```

> Binary symbols encode information; bits measure information.

---

## Why Bits Matter For Learning

Learning systems often reduce uncertainty.

Bits give a way to measure how much uncertainty is reduced.

Example:

```text
model narrows 8 equally likely labels to 1 label
```

That resolves:

```text
3 bits of uncertainty
```

because:

```text
8 = 2^3
```

> Bits let uncertainty reduction be measured.

---

## Final Summary

- A bit is a unit of information.
- One bit resolves two equally likely possibilities.
- Bits are often encoded as 0 and 1.
- More possibilities require more bits.
- Lower probability events carry more bits when observed.
- Binary value is representation; bit is information amount.
