---
title: "Parent"
excerpt: "A parent is the node directly above another node in a rooted tree."
date: 2026-05-01
tags:
  - Foundations
  - Graphs
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Graphs and Computation"
chapterSlug: graphs-and-computation
chapterOrder: 4
topicOrder: 11
---

# Parent

## Definition

A parent is the node directly above another node in a rooted tree.

Example:

```text
    A
   / \
  B   C
```

`A` is the parent of `B`.

`A` is also the parent of `C`.

> Parent = direct predecessor in a rooted tree.

---

## Parent Depends On Root

Parent relationships depend on how the tree is rooted.

Example:

```text
A -- B -- C
```

If `A` is the root:

```text
A
`-- B
    `-- C
```

Then `B` is the parent of `C`.

If `C` is the root:

```text
C
`-- B
    `-- A
```

Then `B` is the parent of `A`.

> Parent is a role created by the rooted structure.

---

## Direct Relationship

Parent means directly connected one level above.

Example:

```text
A
`-- B
    `-- C
```

`A` is the parent of `B`.

`B` is the parent of `C`.

`A` is not the parent of `C`.

`A` is an ancestor of `C`.

> Parent means one step above, not any earlier node.

---

## Parent And Dependency

In some structures, a parent can represent what something comes from or depends on.

Example:

```text
Expression
`-- Addition
    |-- x
    `-- 1
```

`Addition` is the parent of `x` and `1`.

This means the two pieces belong directly inside that larger expression.

> Parent relationships organize parts inside a hierarchy.

---

## Final Summary

- A parent is directly above another node in a rooted tree.
- Parent relationships depend on the chosen root.
- Parent means one level above, not any earlier node.
- A node above another by multiple levels is an ancestor.
- Parent relationships help organize hierarchy.
