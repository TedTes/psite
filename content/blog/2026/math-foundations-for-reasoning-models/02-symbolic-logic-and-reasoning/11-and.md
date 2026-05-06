---
title: "AND"
excerpt: "AND is true only when both connected propositions are true."
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
topicOrder: 11
---

# AND

## Definition

AND is a logical operator that combines two propositions.

It is true only when both propositions are true.

Example:

```text
P AND Q
```

This means:

```text
P is true and Q is true
```

> AND requires both parts.

---

## Simple Example

Let:

```text
P = "It is raining"
Q = "The ground is wet"
```

Then:

```text
P AND Q
```

means:

```text
It is raining and the ground is wet.
```

This compound proposition is true only if both statements are true.

> If either part is false, the whole AND statement is false.

---

## Truth Pattern

AND has this truth pattern:

```text
P      Q      P AND Q
true   true   true
true   false  false
false  true   false
false  false  false
```

Only the first row is true.

Both inputs must be true.

> AND is strict: one false part makes the whole statement false.

---

## AND As Constraint

AND can express multiple requirements.

Example:

```text
number is greater than 0 AND number is even
```

For:

```text
number = 4
```

both parts are true.

For:

```text
number = 3
```

the first part is true, but the second part is false.

So the whole statement is false.

> AND narrows what counts as satisfying a statement.

---

## AND In Reasoning

If an AND statement is true, then each part is true.

Example:

```text
P AND Q is true
```

Then we can infer:

```text
P is true
Q is true
```

This makes AND useful for breaking compound statements into parts.

> A true AND statement gives both components.

---

## Final Summary

- AND combines two propositions.
- It is true only when both propositions are true.
- If either part is false, the whole statement is false.
- AND expresses multiple requirements.
- A true AND statement lets us infer each component.
