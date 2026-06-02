---
title: "Token"
excerpt: "A token is the discrete unit a model receives after text has been split into processable pieces."
date: 2026-05-01
tags:
  - Foundations
  - Embeddings
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: "Foundations for Reasoning Models"
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: "Embeddings and Representation"
chapterSlug: embeddings-and-representation
chapterOrder: 20
topicOrder: 2
---

# Token

## Definition

A token is a discrete unit used by a model.

For text, a token may be:

```text
a word
a part of a word
a punctuation mark
a space-like pattern
```

A token is not always the same as a word.

> A token is the model's discrete input unit.

---

## Why Tokens Are Needed

Raw text must be converted into units before a model can process it.

Simple flow:

```text
text -> tokens -> token IDs -> embeddings
```

The token step turns continuous-looking text into a sequence of discrete pieces.

> Tokenization makes text countable and addressable by the model.

---

## Token vs Symbol

A token is a kind of symbol inside the model's input system.

It is distinguishable from other tokens.

Example:

```text
token A != token B
```

But being distinguishable is not enough.

The token must later become an embedding to participate in neural computation.

> Tokens distinguish input pieces; embeddings make them computable.

---

## Token Sequence

Models usually receive a sequence of tokens.

Example:

```text
text:
"the cat slept"

tokens:
[the, cat, slept]
```

Actual tokenization may split differently depending on the tokenizer.

The key idea is that text becomes an ordered list of discrete units.

> A token sequence is the structured input a language model operates on.

---

## Token Is Not The Final Representation

A token is an input unit.

It is not yet a rich model representation.

The next steps are:

```text
token -> token ID -> embedding -> contextual representation
```

Each step makes the input more usable for computation.

> A token starts the representation process; it does not finish it.

---

## Final Summary

- A token is a discrete model input unit.
- Tokens are not always words.
- Text is converted into a sequence of tokens.
- Tokens are distinguishable symbols.
- Token IDs identify tokens.
- Embeddings turn tokens into numerical representations.
