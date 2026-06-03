---
title: "Self-Correction"
excerpt: "Self-correction is the process of using feedback or verification to revise a model's previous output or intermediate state."
date: 2026-05-01
tags:
  - Foundations
  - AI Systems
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Reasoning Models as Representation Transformation"
chapterSlug: reasoning-models-as-representation-transformation
chapterOrder: 22
topicOrder: 12
---

# Self-Correction

## Definition

Self-correction is revising a previous output or intermediate state after detecting a problem.

Simple form:

```text
candidate -> check -> identify issue -> revise
```

It is a feedback loop.

> Self-correction uses evaluation to update behavior.

---

## Why Self-Correction Matters

Multi-step reasoning can produce errors.

If the system can detect an error, it can try to repair it.

Examples:

```text
wrong calculation -> recompute
bad plan -> adjust steps
failed test -> edit code
missing constraint -> revise answer
```

> Self-correction helps recover from intermediate mistakes.

---

## Correction Requires A Signal

The model needs some signal that something is wrong.

Signals may come from:

```text
validation check
tool output
test failure
user feedback
contradiction
constraint mismatch
```

Without a signal, revision may be arbitrary.

> Correction depends on useful feedback.

---

## Self-Correction Is Not Guaranteed

A model can revise in the wrong direction.

Examples:

```text
misdiagnose the issue
change a correct part
ignore the real constraint
become more verbose without becoming more accurate
```

Correction needs verification, not just another response.

> Self-correction works best when grounded by checks.

---

## Correction Loop

A simple reasoning loop:

```text
generate
verify
revise
verify again
finalize
```

This loop treats reasoning as iterative state improvement.

Each pass updates the representation of the problem and solution.

> Self-correction is iterative representation refinement.

---

## Final Summary

- Self-correction revises earlier output or state.
- It depends on feedback or verification.
- It can repair errors in multi-step tasks.
- It can also fail if the correction signal is weak.
- Strong correction loops combine generation, verification, and revision.
