---
title: LLM Integration Architectures - A Layered Reference
excerpt: A practical reference for structuring LLM systems across delivery, memory, retrieval, agency, system design, and governance.
date: 2026-02-18
tags:
  - LLMs
  - Architecture
  - AI Systems
author: Tedros Tesfu
draft: true
---

LLM systems can be organized into layers, from delivery, to memory, to agency. This is a practical reference: six layers, the patterns inside each, and what they are good for.

Each layer builds on the one below it, but most products only need a few layers. Two techniques show up across many designs: streaming for better perceived latency, and on-device inference for privacy or offline use.

## The 6 Layers

![The 6 layers of LLM architecture](/uploads/1771512458781-5vogfo.png)

### Layer 1: Transport and Delivery

Layer 1 is about how requests reach the model and how responses return to the user. At its simplest, this is a stateless API call:

`Client -> Backend -> LLM -> Response`

This is enough for rewrite features, summarization, draft generation, or any one-shot task where no memory or external knowledge is required. Many early LLM products stop at this layer.

Two important delivery patterns build on top of the basic API call.

The first is streaming. Instead of waiting for the full response, the backend streams tokens to the client as they are generated. This dramatically improves perceived latency and user experience, especially for long outputs, without significantly increasing architectural complexity.

The second is queue plus worker, or asynchronous processing. For long-running tasks such as document parsing, bulk scoring, or multi-step workflows, the request is placed into a queue and processed by a background worker. The result is stored and returned later, rather than blocking the request cycle. This pattern becomes necessary as soon as tasks exceed normal request time limits.

Layer 1 solves delivery and responsiveness. It does not solve memory, grounding, or action-taking.

### Layer 2: Memory

Layer 2 introduces state. Instead of treating every request as independent, the system begins to remember something about prior interactions.

The simplest form is context injection. The backend stores recent conversation turns and appends them to each new prompt. The model then sees the system instruction, the conversation history, and the latest user message together. This enables multi-turn conversations and continuity.

However, context windows are finite and token costs grow with history length. If you keep appending everything indefinitely, latency and cost increase linearly.

To manage this, systems introduce summarized memory. Instead of storing raw history forever, the system periodically compresses earlier turns into a structured summary. Future prompts include the summary plus the most recent exchanges.

This preserves continuity while controlling token usage. More advanced systems implement long-term memory by separating different types of stored information:

- Episodic memory for past interactions
- Semantic memory for facts about the user or domain, often stored in a vector database

At this stage, architecture decisions become more serious. You need to define:

- What gets stored
- How long it persists
- How it is retrieved
- How privacy is handled

Layer 2 solves continuity. It lets the model behave as if it remembers.

### Layer 3: Retrieval

Layer 3 introduces external knowledge. Instead of relying only on what fits inside the prompt or what the base model was trained on, the system retrieves relevant information at runtime and injects it into the context.

The most common pattern is Retrieval-Augmented Generation, or RAG. When a user submits a query, it is converted into an embedding and compared against a vector database of stored documents.

The most relevant chunks are selected and inserted into the prompt before calling the model. The model then generates a response grounded in those retrieved passages.

This reduces hallucination and allows the system to work with private or dynamic knowledge, such as internal documentation, customer data, or regulatory content, without fine-tuning the model.

In practice, retrieval quality depends heavily on:

- How documents are chunked
- What metadata is stored
- Whether hybrid search, keyword plus vector, is used
- Whether results are reranked before injection

For higher-precision systems, a reranking step can be added. Initial candidates are retrieved quickly, then a more expensive model reorders them based on deeper semantic relevance. This improves accuracy but adds latency and cost.

Fine-tuning solves a different problem. It adjusts model behavior, such as tone or output structure, while retrieval injects knowledge dynamically. For most knowledge problems, retrieval is the better first choice.

Layer 3 solves knowledge grounding.

### Layer 4: Agency

Up to this point, the model can generate text, remember context, and access external knowledge. Layer 4 introduces something different: the ability to act.

Agency means the model is no longer just producing language. It can decide to call tools, trigger APIs, query databases, or execute structured workflows.

The most common pattern is tool calling, or function calling. The model receives the user input and determines whether a tool should be used. Instead of responding directly, it returns a structured tool invocation. The backend executes that tool and sends the result back to the model, which then produces the final answer.

In this pattern, the model decides and the code executes. This separation is critical. The model handles interpretation and planning. Deterministic systems handle validation, permissions, and state mutation.

For more complex workflows, systems introduce a plan-execute structure. One model, or one step, generates a plan of actions. A controlled executor then performs those actions. This is more stable than allowing the model to freely loop.

The most flexible and most dangerous version is the ReAct loop. The model alternates between reasoning steps and tool calls until it decides it is finished. This enables open-ended research or multi-step problem solving, but it requires strict guardrails:

- Step limits
- Timeouts
- Tool-level access control
- Cost budgets

Some systems extend this further into multi-agent architectures, where different models take on specialized roles such as planner, researcher, critic, or executor. That is only justified when tasks truly benefit from specialization or parallelization.

Layer 4 solves action.

### Layer 5: System Design

By this point, the system can deliver responses, remember context, retrieve knowledge, and act through tools.

Layer 5 is about how those capabilities are composed, constrained, and optimized in a production environment.

One common pattern is multi-model routing. Not every request requires the largest or most expensive model. A routing layer classifies the task and sends it to the appropriate model: cheaper models for simple tasks, larger models for complex reasoning, vision models for image input, and so on.

This improves cost efficiency and latency, but it introduces a new challenge: the router itself must be reliable.

Another foundational pattern is the hybrid deterministic plus LLM architecture. The model is responsible for understanding, planning, and extraction. Deterministic code is responsible for validation, rule enforcement, and committing changes to databases or external systems.

This separation prevents the model from directly mutating critical state without verification. In production systems that touch real data, this pattern is not optional.

Systems at this layer also introduce event-driven design. Instead of only responding synchronously to user requests, the model can be triggered by background events such as file uploads, database changes, scheduled jobs, or webhooks.

A worker processes the event, calls the model, and stores the result. This allows LLM functionality to become part of larger automation pipelines.

As usage grows, optimization patterns become necessary:

- Caching to reduce cost and latency
- Budget controls to limit token usage, steps, or model size per request

These are architectural controls, not prompt tweaks.

Layer 5 solves composition and efficiency.

### Layer 6: Process and Governance

Layer 6 addresses what happens around the model, not just inside it. Once an LLM system interacts with real users, real data, and real decisions, governance becomes part of the architecture.

The most visible pattern is human-in-the-loop review. Instead of allowing the model's output to immediately trigger state changes, a human reviews, edits, or approves the result before it is committed.

In regulated domains such as legal, medical, insurance, or finance, this is not a feature. It is a requirement.

Beyond review, systems introduce policy and access control. The model should not have unrestricted access to every tool or dataset. A policy layer determines which tools are available, under what conditions, and for which users.

This enforces least-privilege principles and prevents accidental or malicious misuse.

Production systems also require guardrails. Inputs may be moderated before reaching the model. Outputs may be validated against schemas, business rules, or safety filters before being returned or committed. LLM output should be treated as untrusted input until verified.

Finally, mature systems implement observability and evaluation loops. Prompts, tool calls, latency, token usage, and outputs are logged with appropriate privacy controls.

Changes to prompts, retrieval strategies, or model versions are tested against evaluation datasets before deployment. Without this feedback loop, improvements become guesswork.

Layer 6 ensures reliability, safety, and accountability. It turns an LLM prototype into a production system.
