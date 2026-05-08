---
title: "Membership"
excerpt: "Membership tells whether an object belongs to a set."
date: 2026-05-01
tags:
  - Foundations
  - Abstract Structure
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Sets, Relations, and Functions"
chapterSlug: sets-relations-and-functions
chapterOrder: 3
topicOrder: 3
---

# Membership

## Definition

Membership tells whether an object belongs to a set.

Example:

```text
Set: {1, 2, 3}
Object: 2
```

Since `2` is in the set:

```text
2 is a member of {1, 2, 3}
```

> Membership = belongs to a set.

---

## Member vs Non-Member

Example set:

```text
A = {1, 2, 3}
```

Member:

```text
2 belongs to A
```

Non-member:

```text
5 does not belong to A
```

The membership question is yes-or-no:

```text
Is this object in this set?
```

> Membership is a truth-valued relationship between object and set.

---

## Membership Depends On The Set

The same object can be a member of one set and not another.

Example:

```text
A = {1, 2, 3}
B = {4, 5, 6}
```

The object `2` belongs to `A`.

It does not belong to `B`.

> Membership is relative to a specific set.

---

## Membership And Predicates

Membership can be understood as a predicate.

Example:

```text
InSet(x, A)
```

This asks:

```text
Is x a member of A?
```

For:

```text
x = 2
A = {1, 2, 3}
```

the answer is:

```text
true
```

> Membership connects set structure to logical truth.

---

## Final Summary

- Membership tells whether an object belongs to a set.
- An object can be a member or non-member.
- Membership depends on the specific set.
- Membership is a yes-or-no relation.
- Membership connects sets to predicates and truth values.
