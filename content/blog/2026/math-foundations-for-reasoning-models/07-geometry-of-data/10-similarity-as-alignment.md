---
title: "Similarity as Alignment"
excerpt: "Similarity can be understood as directional alignment between vector representations."
date: 2026-05-01
tags:
  - Foundations
  - Geometry
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Geometry of Data"
chapterSlug: geometry-of-data
chapterOrder: 7
topicOrder: 10
---

# Similarity As Alignment

## Definition

Similarity can be understood as alignment between vectors.

If two vectors point in a similar direction, they are geometrically similar.

Example:

```text
A = [3, 4]
B = [30, 40]
```

These have different sizes but the same direction.

> Similarity as alignment means comparing direction, not only distance.

---

## Same Direction

Two vectors with the same direction are strongly aligned.

Example:

```text
[1, 0]
[5, 0]
```

They point the same way.

Their angle is:

```text
0
```

If normalized:

```text
[1, 0]
[1, 0]
```

they become identical.

> Same direction means maximum alignment.

---

## Opposite Direction

Opposite vectors are anti-aligned.

Example:

```text
[1, 0]
[-1, 0]
```

They lie on the same line but point opposite ways.

Their angle is:

```text
180 degrees
```

> Opposite direction means maximum opposition.

---

## Perpendicular Direction

Perpendicular vectors are not aligned.

Example:

```text
[1, 0]
[0, 1]
```

Their dot product is:

```text
0
```

Their angle is:

```text
90 degrees
```

> Perpendicular vectors have no directional alignment.

---

## Why Normalize For Similarity

Raw dot product depends on magnitude.

Example:

```text
dot([1, 0], [100, 0]) = 100
dot([1, 0], [2, 0]) = 2
```

Both vectors point in the same direction, but one is larger.

If the goal is directional similarity, normalize first.

Then comparison focuses on alignment.

> Normalization can separate direction from magnitude.

---

## Similarity Is Not Always Distance

Two vectors can be far apart but still aligned.

Example:

```text
A = [3, 4]
B = [30, 40]
```

Their distance is large.

But their direction is the same.

So by alignment, they are similar.

> Distance and alignment answer different comparison questions.

---

## Similarity Depends On Representation

Alignment only has meaning if the vector representation is meaningful.

Example:

```text
[height, weight]
```

If each component has a consistent role, comparing vectors can be useful.

If components are mixed randomly, alignment may not mean anything useful.

> Similarity depends on how data is represented.

---

## Final Summary

- Similarity can mean directional alignment.
- Same direction means strong alignment.
- Opposite direction means anti-alignment.
- Perpendicular direction means no alignment.
- Dot product helps measure alignment.
- Normalization helps focus on direction.
- Similarity depends on the representation.
