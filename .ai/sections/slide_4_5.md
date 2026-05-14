SLIDE 4.5 — P5: PROTOCOLS
TITLE BAR:
P5 — Protocols                   designed for LLMs / OpenAPI for agents
DIAGRAM (P4's diagram with the inner system DIMMED 30-40% and protocol
pills added on boundaries):
The diagram has the same elements as P4 (orchestrator, audit band,
GATE, three sub-agents, tools, services, STATE, MEMORY_SERVICE) but
the inner system is visually quieter so the protocol pills can be
the foreground.

MCP pill on the boundary between check_fraud_patterns and the
Fraud DB. Pill is a labeled lozenge that visually CROSSES the
boundary — half on your side, half on theirs. Label: "MCP".
The Fraud DB box gets relabeled with otherness markers:
Fraud DB (vendor)  OR  Fraud DB (Risk team)
— whichever lands better for your bank.
A2A pill on a NEW arrow leaving response_agent outward to an
external agent. The arrow goes from response_agent itself (not
from one of its tools) to:
Customer Comms Agent (other team)
This positioning matters — A2A is between AGENTS, not between
a tool and another agent. Same pill visual treatment as MCP.

Both pills share IDENTICAL styling — same shape, same fill, same
font. They're the same idea applied at two scopes.
Otherness markers: the Fraud DB and Customer Comms Agent should be
visually distinct from in-house components (different fill, dashed
border, or "external" tag).
Optional flourish: a faint dashed trust-boundary line running between
in-house and external components, with both protocol pills sitting on
that line.
ADDITIONAL VISUAL ELEMENT: Along the bottom margin, a thin three-cell
strip contrasting MCP with REST. Small text, low visual weight — this
is a footnote, not the foreground. Three short cells:
REST API                    MCP
every consumer              the LLM
full surface area           curated surface
bytes on the wire           tokens in the window
NO SNIPPET. The bottom third of the slide where code lived on P1-P4
is replaced by this comparison strip.
Optional single dim line in the lower margin if the slide feels
bottom-heavy after the strip:
written by you    ·    spoken between systems
SPOKEN:
"Problem five. And this one's different — I'm not adding anything to
the system. I'm pointing at things that were already there.
[point at the dimmed diagram broadly — beat]
Look at what we built. Tools. Sub-agents. Callbacks. State. Memory.
All of it lives inside your codebase — your team owns it, your repo,
your deploys.
But two of these arrows cross a line.
[point at MCP pill — beat]
The Fraud DB isn't yours. It belongs to the risk team — different
team, different repo, different release cadence. When your tool calls
into it, you're talking to a system that someone else maintains. How
do you describe that interface? You don't want a bespoke client that
breaks every time they ship. You want a protocol. That protocol is
MCP.
And here's where I want to push back on a thing you might be thinking,
which is 'isn't this just OpenAPI?' Almost, but not exactly. MCP and
REST solve overlapping problems for different consumers, and the
difference matters.
[gesture at the comparison strip — beat]
A REST API is designed for every consumer — your frontend, batch
jobs, mobile, partner teams, scripts. So it tends to be wide:
hundreds of endpoints, deep object graphs, generous response payloads.
That's correct, for a human-or-machine consumer that can handle
arbitrary data.
MCP is designed for an LLM. The consumer is sitting in a context
window with a finite token budget, and every byte you hand it costs
attention and money. So MCP servers tend to expose a curated surface
— a smaller set of operations, each with descriptions the model can
actually read, return shapes that are compact enough not to clutter
the context, and metadata about when each tool is appropriate. It's
less like a REST API and more like a well-scoped SDK that happens to
be discoverable at runtime.
If REST is 'here's everything we can do, you figure out what you
need,' MCP is 'here are the five things an agent would sensibly want
to do, with documentation aimed at the model.' Same network plumbing
underneath; very different design discipline on top.
[point at A2A pill — beat]
And the response agent — when it needs to hand a draft off to the
customer comms agent that another team owns, that's not a tool call
anymore. That's one agent talking to another agent. Same problem, one
level up. That's A2A. OpenAPI, but for agents.
The same allegory twice, at two scopes. MCP names tool boundaries.
A2A names agent boundaries. Both exist for the same reason OpenAPI
exists between services — to keep two teams from breaking each other
when they ship independently — with the added discipline of being
designed for an LLM as a consumer.
[beat]
Five down. Five patterns, all of them analogues of things you already
do. Problem six is the substrate that ties them together."
DURATION: ~120 seconds.
