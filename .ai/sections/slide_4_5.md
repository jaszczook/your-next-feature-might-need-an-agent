# SLIDE 4.5 — P5: PROTOCOLS

**Title bar:** `P5 — Protocols | designed for LLMs / OpenAPI for agents`

---

## Diagram

P4's diagram with the inner system **dimmed 30–40%** and protocol pills added on boundaries. The inner system is visually quieter so the protocol pills are the foreground.

**MCP pill:** On the boundary between `check_fraud_patterns` and the Fraud DB. A labeled lozenge that visually **crosses the boundary** — half on your side, half on theirs. Label: `MCP`.  
The Fraud DB box gets an otherness marker: `Fraud DB (vendor)` or `Fraud DB (Risk team)`.

**A2A pill:** On a new arrow leaving `response_agent` outward to: `Customer Comms Agent (other team)`. The arrow goes from `response_agent` itself, not from one of its tools — A2A is between agents, not between a tool and another agent. Same pill visual treatment as MCP.

Both pills share **identical styling** — same shape, fill, and font. They're the same idea applied at two scopes.

Otherness markers: Fraud DB and Customer Comms Agent should be visually distinct from in-house components (different fill, dashed border, or "external" tag).

*Optional:* a faint dashed trust-boundary line between in-house and external components, with both protocol pills sitting on that line.

> **No snippet. No comparison strip.** The diagram fills the full slide below the title bar (mermaid width at 96%). The MCP vs REST comparison is delivered entirely by the speaker.

---

## Spoken

"Problem five. And this one's different — I'm not adding anything to the system. I'm pointing at things that were already there.

[point at the diagram broadly — beat]

Look at what we built. Tools. Sub-agents. Callbacks. State. Memory. All of it lives inside your codebase — your team owns it, your repo, your deploys.

But two of these arrows cross a line.

[point at MCP pill — beat]

The Fraud DB isn't yours. It belongs to the risk team — different team, different repo, different release cadence. When your tool calls into it, you're talking to a system that someone else maintains. How do you describe that interface? You don't want a bespoke client that breaks every time they ship. You want a protocol. That protocol is MCP.

And here's where I want to push back on something you might be thinking: 'isn't this just OpenAPI?' Almost, but not exactly.

A REST API is designed for every consumer — your frontend, batch jobs, mobile, partner teams, scripts. So it tends to be wide: hundreds of endpoints, deep object graphs, generous response payloads. That's correct, for a human-or-machine consumer that can handle arbitrary data.

MCP is designed for an LLM. The consumer is sitting in a context window with a finite token budget, and every byte you hand it costs attention and money. So MCP servers expose a curated surface — a smaller set of operations, each with descriptions the model can actually read, return shapes compact enough not to clutter the context, and metadata about when each tool is appropriate. It's less like a REST API and more like a well-scoped SDK that happens to be discoverable at runtime.

If REST is 'here's everything we can do, you figure out what you need,' MCP is 'here are the five things an agent would sensibly want to do, with documentation aimed at the model.' Same network plumbing underneath; very different design discipline on top.

[point at A2A pill — beat]

And the response agent — when it needs to hand a draft off to the customer comms agent that another team owns, that's not a tool call anymore. That's one agent talking to another agent. Same problem, one level up. That's A2A. OpenAPI, but for agents.

The same allegory twice, at two scopes. MCP names tool boundaries. A2A names agent boundaries. Both exist for the same reason OpenAPI exists between services — to keep two teams from breaking each other when they ship independently — with the added discipline of being designed for an LLM as a consumer.

[beat]

Five down. Five patterns, all of them analogues of things you already do. Problem six is the substrate that ties them together."

**Duration:** ~120 seconds.
