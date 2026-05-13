SLIDE 4.4 — P4: SESSIONS & MEMORY
TITLE BAR:
P4 — Sessions & memory           request scope / database
DIAGRAM (P3's diagram with two new components added on the RIGHT side):

STATE box (upper right), labeled "STATE — this session". Light/
ephemeral visual style. Inside, example keys:
draft_response
customer_id
...
Connected to the orchestrator with a DASHED line — dashed because
it's not a tool call, just a place values get written and read.
MEMORY_SERVICE box (lower right), labeled "MEMORY_SERVICE — long-term".
Styled like a database (cylinder shape, or heavier/darker fill, or
a small database icon). Inside, example contents:
past complaints
patterns
...
A SOLID arrow from STATE going DOWN to MEMORY_SERVICE, labeled
"session ends". This is the most important visual element on the
slide — the entire teaching point in one arrow.

CRITICAL: Do NOT connect MEMORY_SERVICE directly to the orchestrator.
The only relationship is via STATE → "session ends" → MEMORY_SERVICE.
SNIPPET:
# Inside a tool — short-term state for this conversation
tool_context.state["draft_response"] = text
# After resolution — keep what's useful next time
memory_service.add(
customer_id=session.state["customer_id"],
summary=session.state["resolution_summary"],
tags=["fraud_hold", "disputed_transaction"],
)
HIGHLIGHTING:

Highlight tool_context.state[...] on the top
Highlight memory_service.add(...) on the bottom
Different colors if possible — emphasizes the parallel-but-not-same
shape.

SPOKEN:
"Problem four. The agent needs to remember things. Two kinds of
things, actually — and that's the whole lesson on this slide.
Kind one: short-term. The response agent drafts a reply. Two tool
calls later, the orchestrator needs to attach that draft to a PDF.
Where did the draft go in the meantime? It went into state. State
is request scope. It's the thing that lives for as long as this
conversation is alive, and then it goes away. Same idea as a
request-scoped bean or session storage in a web app.
[point at STATE box — beat]
Kind two: long-term. The bank wants the agent to know things across
sessions — last month's complaint patterns, customers who've already
had two fraud holds, whatever. That's not request scope. That's a
database. The framework calls it a memory_service and that's exactly
what it is — a separate service that the agent reads from and writes
to.
[point at MEMORY_SERVICE box — beat]
And the arrow between them is the whole game. When a conversation ends,
you decide what's worth keeping. You take what's in state, you push
what matters into memory_service, and now it's available next time.
That's the entire lifecycle.
[glance at snippet — beat]
Top line — inside a tool, mid-conversation — you write to
tool_context.state. It's an attribute on the context object the
framework hands you. Lives as long as the request lives.
Bottom block — after the case is resolved — you decide what's worth
keeping. Not the whole transcript. The customer ID, a summary, some
tags. Structured facts. That's what goes into memory_service, and
that's what the agent retrieves next time this customer comes back,
or next time someone files a similar complaint.
Two-tier storage, and you decide what crosses the boundary. You
already build this every week. The agent version isn't new, it's just
labeled differently.
One more problem, and then we zoom out."
DURATION: ~90 seconds.
