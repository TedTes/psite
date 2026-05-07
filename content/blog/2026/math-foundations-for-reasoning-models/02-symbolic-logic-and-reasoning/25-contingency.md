---
title: "Contingency"
excerpt: "A contingency is a proposition that can be true under some assignments and false under others."
date: 2026-05-01
tags:
  - Foundations
  - Logic
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Symbolic Logic and Reasoning"
chapterSlug: symbolic-logic-and-reasoning
chapterOrder: 2
topicOrder: 25
---

# Contingency

## Definition

A contingency is a proposition that is sometimes true and sometimes false, depending on the truth values of its parts.

Example:

```text
P AND Q
```

This is true when both `P` and `Q` are true.

It is false in other cases.

> Contingency = truth depends on the case.

---

## Truth Table Example

Truth table:

```text
P      Q      P AND Q
true   true   true
true   false  false
false  true   false
false  false  false
```

The final column is not always true.

It is also not always false.

So the expression is contingent.

> A contingent statement has mixed truth table results.

---

## Contingency vs Tautology

A tautology is always true.

Example:

```text
P OR NOT P
```

A contingency is not always true.

Example:

```text
P AND Q
```

It depends on whether `P` and `Q` are true.

> Tautology is always true; contingency depends on assignment.

---

## Contingency vs Contradiction

A contradiction is always false.

Example:

```text
P AND NOT P
```

A contingency is sometimes true and sometimes false.

Example:

```text
P OR Q
```

This can be true or false depending on the case.

> Contradiction is always false; contingency varies.

---

## Why Contingency Matters

Most useful factual claims are contingent.

Example:

```text
It is raining.
```

This is true in some situations and false in others.

Logic needs to distinguish contingent truth from truth guaranteed by form.

> Contingency captures statements whose truth depends on the situation.

---

## Final Summary

- A contingency is sometimes true and sometimes false.
- Truth tables can identify contingencies.
- A contingency is different from a tautology.
- A contingency is different from a contradiction.
- Many factual claims are contingent.
- Contingency means truth depends on assignment or interpretation.
