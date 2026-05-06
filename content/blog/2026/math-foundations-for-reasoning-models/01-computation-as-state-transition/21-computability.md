---
title: Computability
excerpt: Computability asks whether a problem can be solved by some finite, explicit procedure over symbolic inputs.
date: 2026-05-01
tags:
  - Foundations
  - Computation
  - Reasoning Models
author: Tedros Tesfu
draft: false
series: Foundations for Reasoning Models
seriesSlug: math-foundations-for-reasoning-models
seriesOrder: 1
chapter: Computation as State Transition
chapterSlug: computation-as-state-transition
chapterOrder: 1
topicOrder: 21
---

# What Is Computability?

## Definition

Computability asks whether a problem can be solved by an algorithm.

More precisely:

```text
A problem is computable if there exists a finite, explicit procedure
that produces the correct output for every valid input.
```

> Computability = whether a problem can be solved by rule-based computation

---

## What Counts As a Problem?

A computability question needs a clearly defined problem.

Example:

```text
Input: two numbers
Output: their sum
```

This is clear.

Another example:

```text
Input: a list of numbers
Output: the same list in sorted order
```

This is also clear.

Vague problem:

```text
Input: text
Output: the best answer
```

This is not precise enough by itself.

We would need to define what "best" means.

> Computability requires a well-defined input-output task.

---

## Input And Output Must Be Representable

For a problem to be computed, its inputs and outputs must be represented as symbols.

Example:

```text
Number: 5
Representation: "5"
```

Example:

```text
List: [3, 1, 2]
Representation: "3,1,2"
```

The machine does not manipulate the real-world objects directly.

It manipulates symbolic representations.

> Computation works over represented information.

---

## Existence Of An Algorithm

Computability is about whether an algorithm exists.

It is not only about whether we have personally written the algorithm.

Example:

```text
Problem: add two whole numbers
```

This is computable because there is a finite procedure for addition.

Example:

```text
Problem: sort a finite list of numbers
```

This is computable because there are finite procedures for sorting.

> A problem is computable when some correct finite procedure exists.

---

## Computable vs One Example

Solving one instance does not prove the whole problem is computable.

Example:

```text
Input: 2 + 3
Output: 5
```

That solves one case.

But an algorithm for addition must handle all valid inputs:

```text
2 + 3
10 + 45
1000 + 9999
...
```

Computability is about the general procedure, not a single answer.

> Computability asks for a method that works across the intended input space.

---

## Computable vs Efficient

Computable does not mean fast.

A problem may be computable but take a very long time for large inputs.

Example:

```text
Input: a long list
Output: all possible orderings of that list
```

There is a finite procedure:

```text
generate every ordering
```

But the number of orderings grows quickly.

The problem may still be computable.

It may not be practical for large inputs.

> Computability is about possible procedure, not practical speed.

---

## Computable vs Already Computed

A problem can be computable even if we have not run the computation yet.

Example:

```text
Input: 987654321 + 123456789
```

Even before calculating the result, we know the problem is computable because addition has a procedure.

Computability is about the existence of the method.

Execution is the running of the method on a specific input.

> Computable means there is a method, not that the result is already known.

---

## Computable Functions

A function maps input to output.

Example:

```text
f(x) = x + 1
```

This function is computable because there is a procedure:

```text
read x
add 1
return the result
```

Another example:

```text
isEven(x)
```

Output:

```text
true or false
```

This is computable because we can define a procedure to check divisibility by 2.

> A computable function has an algorithm that produces its output from its input.

---

## Decision Problems

Some problems ask for a yes-or-no answer.

These are decision problems.

Example:

```text
Input: a number
Question: is it even?
Output: yes or no
```

Another example:

```text
Input: a word
Question: does it contain the letter "a"?
Output: yes or no
```

Decision problems are useful because they make the input-output structure very clear.

> A decision problem computes an answer such as yes/no or true/false.

---

## Limits Of Computation

Not every clearly stated problem is computable.

This is the surprising part.

Some problems can be described precisely, but no general algorithm exists for solving every valid input.

That means computability has a boundary.

Some tasks are inside the boundary:

```text
addition
sorting
checking whether a finite string contains a symbol
```

Some tasks fall outside the boundary.

> Computability is also about discovering the limits of rule-based procedures.

---

## Why This Matters

Computability matters because it separates three questions:

- Is the problem well-defined?
- Does an algorithm exist?
- Is the algorithm practical to run?

These are different questions.

A problem can be:

- well-defined but not computable
- computable but too slow to be practical
- computable and practical

> Computability asks the most basic question: can this be solved by an algorithm at all?

---

## Final Summary

- Computability asks whether a problem can be solved by an algorithm.
- A computable problem has a finite, explicit procedure for producing correct output.
- Inputs and outputs must be represented as symbols.
- Solving one example is not the same as solving the general problem.
- Computable does not mean fast.
- Computable does not mean already computed.
- Functions and yes-or-no questions can be computable.
- Some precisely defined problems are not computable.
- Computability identifies the boundary of rule-based computation.
