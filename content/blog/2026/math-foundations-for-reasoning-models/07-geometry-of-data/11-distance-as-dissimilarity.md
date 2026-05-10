---
title: "Distance as Dissimilarity"
excerpt: "Distance can represent dissimilarity when the vector space is structured meaningfully."
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
topicOrder: 11
---

# Distance As Dissimilarity

## Definition

Distance can be used as a measure of dissimilarity.

If two points are close, they may be similar.

If two points are far apart, they may be different.

Example:

```text
A = [2, 3]
B = [3, 4]
C = [20, 30]
```

`A` is closer to `B` than to `C`.

> Distance as dissimilarity means farther points are treated as more different.

---

## When This Works

Distance is useful when the vector components have consistent meaning.

Example:

```text
[height, weight]
```

Then:

```text
[70, 180]
[71, 182]
```

are close in the chosen coordinates.

They describe similar measurements.

> Distance works when the geometry reflects the data structure.

---

## When This Can Mislead

Distance can mislead if components are not comparable.

Example:

```text
[rooms, price]
```

Price may have much larger raw values than rooms.

```text
[3, 300000]
[4, 320000]
```

The price component dominates the distance.

That may or may not match the comparison we want.

> Raw distance can be controlled by scale.

---

## Distance vs Alignment

Distance and alignment measure different things.

Example:

```text
A = [3, 4]
B = [30, 40]
```

These vectors are far apart by distance.

But they point in the same direction.

So they are:

```text
different in size
similar in direction
```

> Distance compares separation. Alignment compares direction.

---

## Dissimilarity Depends On The Question

There is no single universal meaning of dissimilarity.

For some tasks, size matters.

For others, direction matters more.

Example:

```text
[3, 4]
[30, 40]
```

If we care about total amount, they are different.

If we care about pattern, they are similar.

> Dissimilarity depends on what the comparison is meant to preserve.

---

## Normalization Can Change Distance

Normalization can change what distance measures.

Example:

```text
A = [3, 4]
B = [30, 40]
```

Before normalization, the distance is large.

After length normalization:

```text
A -> [0.6, 0.8]
B -> [0.6, 0.8]
```

The distance becomes `0`.

> Normalization changes dissimilarity by changing what information is kept.

---

## Why Distance Matters For Data

Distance gives a practical way to compare vector data.

It can help answer:

```text
Which data points are close?
Which examples are unusual?
Which groups form clusters?
Which point changed the most?
```

But distance is only useful if the representation makes the distance meaningful.

> Distance is a comparison tool, not automatic truth.

---

## Final Summary

- Distance can represent dissimilarity.
- Close points may be treated as similar.
- Far points may be treated as different.
- Distance depends on component meaning and scale.
- Distance differs from directional alignment.
- Normalization can change distance.
- Dissimilarity is meaningful only relative to a representation and question.
