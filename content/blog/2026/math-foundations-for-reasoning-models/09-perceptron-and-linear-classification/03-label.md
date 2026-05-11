---
title: "Label"
excerpt: "A label is the known or target class assigned to an example."
date: 2026-05-01
tags:
  - Foundations
  - Perceptron
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Perceptron and Linear Classification"
chapterSlug: perceptron-and-linear-classification
chapterOrder: 9
topicOrder: 3
---

# Label

## Definition

A label is the class assigned to an example.

Example:

```text
input: email
label: spam
```

or:

```text
input: [hours studied, attendance]
label: pass
```

> Label = the class an example belongs to.

---

## Label vs Prediction

A label is the expected or known answer.

A prediction is the model's answer.

Example:

```text
label: spam
prediction: not spam
```

The model is wrong in this case.

> Label is target output. Prediction is model output.

---

## Labels In Training

During training, examples usually come with labels.

Example:

```text
input: [2, 5]
label: class A
```

The model uses the label to check whether its prediction is correct.

If prediction and label differ, the model may update its parameters.

> Labels provide feedback for learning.

---

## Label Encoding

Labels are often encoded as numbers.

Example:

```text
not spam = 0
spam = 1
```

or:

```text
class A = -1
class B = 1
```

The number is not the class itself.

It is a representation of the class.

> Numeric labels are encodings of categories.

---

## Binary Labels

For binary classification, there are two possible labels.

Example:

```text
0 or 1
```

or:

```text
-1 or 1
```

Perceptrons often use `-1` and `1` because the update rule becomes simple.

> Binary classification uses two labels.

---

## Correct And Incorrect Prediction

The model is correct when prediction matches label.

Example:

```text
label: 1
prediction: 1
```

The model is incorrect when they differ.

Example:

```text
label: 1
prediction: -1
```

> Learning depends on comparing prediction to label.

---

## Why Labels Matter

Labels connect features to desired outputs.

Example:

```text
features -> label
[hours studied, attendance] -> pass
```

Without labels, the model does not know which class each training example should belong to.

> Labels tell the classifier what it is supposed to learn.

---

## Final Summary

- A label is the known or target class for an example.
- A prediction is the model's output.
- Labels provide feedback during training.
- Labels can be encoded numerically.
- Binary classification has two possible labels.
- Perceptrons often use labels `-1` and `1`.
- Learning compares predictions with labels.
