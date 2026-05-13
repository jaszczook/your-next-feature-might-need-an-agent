================================================================
SECTION 4 — DEEP-DIVE: FIVE PROBLEMS + EVENTS (~10 min, 7 slides)
PURPOSE: Teach the five core patterns of agent development by walking
through them as five problems encountered while building the Cmd+K
case-management feature. Close the section with one slide pulling
back to show the runtime substrate that makes those five patterns
work together.
CROSS-CUTTING DESIGN PRINCIPLES FOR SECTION 4:

CONSTRUCTION ARC. The diagram GROWS across P1 → P5. Each problem
slide's diagram is the previous slide's diagram plus one new
element. Nothing previously shown moves, gets renamed, or
disappears — except the rename between P1 (case_agent) and P2
(complaint_handler_agent), which reflects a genuine role change
from worker to orchestrator.
STANDARD TEMPLATE for slides 4.1-4.4:

Title bar at top: "P# — name" left-aligned (small), "allegory"
right-aligned (small)
Diagram in the upper ~65% of slide
Snippet in the lower ~35% of slide, monospace, slightly smaller
than body text, with syntax highlighting
Code snippets are NOT read aloud — the audience absorbs them in
~4 seconds while I talk over the allegory


P5 is the exception — no snippet, diagram only. Slide 4.6 (events)
uses a different layout entirely; see its own section.
VISUAL CONTINUITY for the growing diagram:

Same node shapes for agents across all 5 slides
Same arrow styles for tool calls, sub-agent delegation, request/response
Distinct visual styles for: agents (boxes), tools (smaller rounded
interface-layer boxes), services (database/external-system styles),
callbacks (cross-cutting bands or wrapping brackets), storage
(cylinder or heavy-fill boxes)
When elements are added on a new slide, render them with subtle
visual emphasis (new badge, slightly brighter, or animation on
entry); previously shown elements stay in their existing style.


ANIMATION RECOMMENDATION: If your tooling supports it (PowerPoint
Morph, Keynote Magic Move, equivalent), build the five problem
slides as morphs of one master diagram. The audience should
literally see the system accrete element-by-element.


SLIDE 4.0 — SECTION DIVIDER: "FIVE PROBLEMS"
VISUAL:

Minimalist text slide.
Main text:
Five problems
Below, smaller and dimmed:
tools  ·  orchestration  ·  callbacks  ·  state  ·  protocols

SPOKEN:
"Okay. The Cmd+K feature. If you actually sit down to build this thing,
five problems will hit you in roughly this order. Each one has a name
in agent-land and a name in regular software, and I'm going to give
you both — because once you see the analogy, the agent version stops
feeling weird.
Problem one. The agent needs to do something."
DURATION: ~15 seconds.

SLIDE 4.1 — P1: TOOLS
TITLE BAR:
P1 — Tools                       service calls / adapter pattern
DIAGRAM:

One agent box at the top, labeled "CASE_AGENT". Same visual style as
the AGENT in the loop diagram from Section 2.
Four tool boxes in the middle row, rendered as a visually distinct
interface layer (smaller boxes, rounded corners, lighter fill —
these need to be visibly "movable pieces" because in P2 they
redistribute under sub-agents):
get_account
get_transactions
check_fraud_patterns
hold_card
Backend services at the bottom, one per tool:
get_account     → Account Service
get_transactions → Account Service (same service, or shown as
one box with two arrows; one box cleaner)
check_fraud_patterns → Fraud DB
hold_card → Card Service
Annotation, small and dim, on one of the result arrows:
result can be: text · structured data · artifact (PDF, etc.)

SNIPPET:
def hold_card(card_id: str, reason: str) -> dict:
"""Place a temporary hold on a card. Use when fraud is suspected."""
return card_service.hold(card_id, reason)
case_agent = LlmAgent(
model="gemini-2.5-flash",
name="case_agent",
tools=[get_account, get_transactions, check_fraud_patterns, hold_card],
)
HIGHLIGHTING:

Bold/color the entire tools=[...] list. The list IS the lesson —
this is the agent's complete capability surface.

SPOKEN:
"Problem one. The agent needs to actually do something — pull
accounts, query the fraud DB, hold cards. These are service calls.
You've been writing these your whole career.
In agent-land they're called tools, but it's the adapter pattern.
The agent doesn't know what HTTP is or what your fraud DB is; it
knows there are functions it can call, and each function knows how
to talk to its real system. Same way a service client wraps a REST
API today.
[glance at diagram — beat] Meet our case_agent. Four tools, three
backend services. The agent calls whichever one it needs based on
what the user asked for.
[glance at snippet — beat]
Two things. One: a plain Python function becomes a tool the moment
you put it in that tools= list. No special base class, no decorator.
If you can write a function, you can write a tool.
Two — that docstring isn't a comment for humans. It's a contract for
the LLM. The model reads it to decide when to call this function.
'Place a temporary hold on a card. Use when fraud is suspected.' That
sentence is what makes the agent reach for hold_card instead of
guessing.
Tools don't only return text, by the way. Structured data, or
artifacts — a PDF, an image, a file. Same shape as a multipart
response.
Problem two: this one agent is fine for now, but it's about to be
doing too much."
DURATION: ~110 seconds.

SLIDE 4.2 — P2: SUB-AGENTS
TITLE BAR:
P2 — Sub-agents                  service composition / saga
DIAGRAM (this is P1's diagram with new elements added):

The top box is now relabeled "COMPLAINT_HANDLER_AGENT". It's
visually PROMOTED — larger, distinct fill, with the label
"(orchestrator)" underneath. This is the only renaming in the
whole construction arc, and it reflects a genuine role change.
A NEW middle row appears between the orchestrator and the tools —
three sub-agent boxes, equal size, same visual treatment as each
other:
ACCOUNT_AGENT
FRAUD_AGENT
RESPONSE_AGENT
The four "old" tools from P1 migrate under their owning sub-agents:
ACCOUNT_AGENT → get_account, get_transactions
FRAUD_AGENT → check_fraud_patterns
A new tool appears under RESPONSE_AGENT:
generate_pdf (NEW — mark with badge, asterisk, or different border)
And RESPONSE_AGENT now emits a 📄 PDF artifact, visually emphasized
as the concrete output.
hold_card stays directly under the orchestrator, NOT under any
sub-agent. Positioned at the same vertical level as the sub-agent
row. This positioning is the visible setup for P3.
The old tools (get_account, get_transactions, check_fraud_patterns,
hold_card) should render in exactly the same visual style as P1.
Audience eye should recognize them.

SNIPPET:
complaint_handler_agent = LlmAgent(
model="gemini-2.5-flash",
name="complaint_handler",
sub_agents=[account_agent, fraud_agent, response_agent],
tools=[hold_card],
)
HIGHLIGHTING:

Bold/color sub_agents=[...] — same visual treatment as tools=[...]
in P1.
Optional: if your tooling supports a strikethrough-on-entry
animation for the three tools that moved, it would beautifully
visualize the migration. Don't force it if it's a hassle.

SPOKEN:
"Problem two. That case_agent from a minute ago is going to drown
if it has to know everything about accounts, everything about fraud,
and everything about drafting customer communications. Big prompts,
conflicting instructions, no separation of concerns.
What you actually want is service composition. Same instinct you have
today: when one service is doing too much, you break it into smaller
services and put something in front to coordinate. Here, that
'something in front' is itself an agent — an orchestrator. We're
renaming the agent because its role just changed: it's not doing the
work directly anymore, it's coordinating others.
[point at diagram — beat]
Look at what changed. Same four tools as before, they didn't go
anywhere. We just regrouped them under three specialists. Account
agent knows the account systems. Fraud agent knows the fraud DB.
Response agent knows how to draft messages — and it just got a new
tool, generate_pdf, which spits out that artifact at the bottom.
Notice one tool that did not get pulled into a sub-agent: hold_card.
Still hanging directly off the orchestrator. That positioning is on
purpose.
[glance at snippet — beat]
And here's the genuinely different thing about this code. There is no
orchestration logic. No if fraud_detected then call response_agent.
The orchestrator doesn't describe the saga; it just declares its
participants. The LLM inside the orchestrator figures out the sequence
at runtime, based on what the user asked and what each sub-agent
returns.
If you've written a saga before — Camunda, Step Functions — you know
there's a flow diagram somewhere. Here there isn't. The flow is in the
model's head, one decision at a time. That's the power and that's the
discomfort.
Problem three. About that card hold."
DURATION: ~115 seconds.

SLIDE 4.3 — P3: CALLBACKS
TITLE BAR:
P3 — Callbacks                   AOP / interceptors / middleware
DIAGRAM (P2's diagram with two new elements added; nothing else moves):

An "audit_log" band or bracket WRAPPING the orchestrator box —
cross-cutting visual style (thick bracket on left, or colored band
along the top edge of the orchestrator). Label:
audit_log — before_tool_callback
A "🔒 GATE" node inserted between the orchestrator and hold_card.
Same middleware visual style as the audit band (matching color,
matching styling — they're the same KIND of thing, applied at
different scopes). Label:
GATE — long-running tool · awaits human confirm
Optional: small human-figure icon next to the gate, with a
pause/resume glyph (▶❚❚▶) hinting at "runs, pauses, resumes."

If animation is supported: both callbacks fade in on slide entry,
on top of the existing diagram from P2.
DESIGN NOTE: The audit band and the GATE share the same visual
language because they're both "middleware applied at a scope." The
mechanism differs (callback vs long-running tool) and the snippet
shows that — but visually, they read as the same idea, which is the
teaching point.
SNIPPET:
# Cross-cutting: log every tool call. Callback shape.
def audit_tool_call(tool, args, tool_context):
logger.info(f"{tool.name} called with {args}")
# Targeted: gate a specific tool on human approval.
# Long-running tool — yields, pauses the run, resumes on response.
@long_running_tool
def hold_card(card_id: str, reason: str):
approval = yield {
"type": "approval_request",
"tool": "hold_card",
"card_id": card_id,
"reason": reason,
}
if not approval["approved"]:
return {"status": "denied", "by": approval["user"]}
return card_service.hold(card_id, reason)

complaint_handler_agent = LlmAgent(
...
before_tool_callback=audit_tool_call,
tools=[hold_card],
)
HIGHLIGHTING:

Bold/color before_tool_callback=audit_tool_call (the cross-cutting
callback).
Bold/color @long_running_tool and the yield line (the human-in-the-
loop mechanism).
The ... in the constructor stands in for everything from P2 — the
audience's brain fills it in. Keep it as ... to signal "everything
from before stays."

DESIGN NOTE ON THE SNIPPET: The snippet now shows TWO mechanisms side
by side because they're genuinely different in ADK. before_tool_callback
is the right shape for cross-cutting concerns like audit logging —
fast, synchronous, applied to every tool call. For human-in-the-loop
approval, ADK's first-class pattern is a long-running tool: the tool
yields a request, the agent run pauses, the host application surfaces
the request to a human, and the response is fed back in to resume.
Both ARE middleware in the conceptual sense — that's why the slide
groups them visually — but the audience should see that the
implementation diverges based on whether the interceptor is
synchronous-and-everywhere (callback) or async-and-targeted (long-
running tool).
SPOKEN:
"Problem three. We need a way to say 'always log this' and 'never do
that without asking first.' These are cross-cutting concerns. In
every framework you've ever used — Spring AOP, Express middleware,
request interceptors — there's a way to attach behavior around a
function without changing the function itself.
Agent frameworks have the same idea, but here it splits into two
shapes depending on what you're doing.
[point at audit band — beat] Up here, on the orchestrator, I've
attached an audit_tool_call callback. ADK calls this a
before_tool_callback. It runs synchronously before every tool call,
no matter which tool, no matter which sub-agent triggered it. Every
action the agent takes, we have a log line. Same shape as a global
interceptor.
[point at GATE — beat] And down here, on hold_card specifically, I
need something different. The agent can't just log and proceed —
it has to stop, ask a human, and wait for an answer that might come
two minutes later. A synchronous callback is the wrong tool for that.
The right tool is a long-running tool: hold_card runs, yields an
approval request, the whole agent run suspends, and when an analyst
clicks approve or deny in the UI, the answer feeds back in and the
run resumes. This is the short leash inside the long one — the
agent can pull accounts, check fraud, draft responses on its own, but
it cannot freeze a real customer's card without a person saying yes.
[glance at snippet — beat]
Two mechanisms, one idea. Both are middleware. Both are 'attach
behavior to a tool call.' The callback is the synchronous, applied-to-
everything flavor; the long-running tool is the asynchronous, applied-
to-a-specific-thing flavor. Once you see them as the same family,
the rest of the ADK callback surface — before_agent, after_agent,
before_model — falls into place. Different scopes, same idea.
Problem four. The agent needs to remember things."
DURATION: ~110 seconds.

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
And that's the five problems. Five patterns, all of them analogues of
things you already do. Before we talk about what's hard, one slide
on the runtime that ties this all together."
DURATION: ~120 seconds.

SLIDE 4.6 — EVENTS: THE RUNTIME SUBSTRATE
TITLE BAR:
Events                            the bus underneath
DIAGRAM:
A different layout from the P1-P5 slides — the system we just built
is now schematic and small in the upper portion of the slide, because
the point is what's UNDERNEATH it.

Upper third of slide (~30%): a miniaturized, schematic version of
the full system from P5. Orchestrator, sub-agents, tools, audit
band, gate. Rendered small, low detail, low contrast — this is
"the system you already understand."
Middle of slide: a thick horizontal lane spanning full slide width,
labeled "EVENT STREAM". Inside the lane, a left-to-right sequence
of event tokens with arrows between them, e.g.:
user_message → llm_request → tool_call(check_fraud_patterns)
→ tool_response → llm_request → tool_call(hold_card)
→ approval_request → [paused] → approval_response
→ tool_response → llm_request → final_response
Render these as small pill-shaped tokens, monospace label, with
arrows. The pause point is visually emphasized — maybe a gap in
the stream, maybe a vertical "pause" glyph.
Dotted vertical lines connect components in the upper schematic
DOWN to the events they emit in the stream. The orchestrator emits
llm_request events; tools emit tool_call and tool_response;
the long-running tool from P3 emits approval_request.
Lower portion of slide: three short labels along the bottom of the
event stream, evenly spaced:
observability         persistence         resumability
Each is a one-word answer to "what does the event stream give you?"

DESIGN NOTES:

This slide intentionally breaks the construction-arc visual
template. The point isn't another element added to the system;
it's a layer underneath the system that was implicit on every
previous slide.
The pause-and-resume in the event stream is the most important
visual detail. It's what makes the human-in-the-loop pattern on
P3 actually work as code, and seeing it laid out as events makes
it click.

NO SNIPPET. The slide is dense enough visually.
SPOKEN:
"One slide before we talk about what's hard. I want to show you the
runtime substrate that ties everything we just built together,
because it's the piece that's easiest to miss if you only look at
the agent code.
Everything an ADK agent does is an event. Not metaphorically — literally.
When the user sends a message, that's an event. When the model decides
to call a tool, that's an event. When the tool returns, that's an event.
When the long-running hold_card tool yields its approval request,
that's an event. When the analyst clicks approve two minutes later,
that's an event, and the runtime feeds it back into the agent and
the run continues.
[point at the stream — beat]
The orchestrator, the sub-agents, the callbacks, the tools — they're
all producers and consumers on this stream. The diagram on top is
what you write. The stream underneath is what actually runs.
And once you see it that way, three things you'd otherwise build by
hand fall out for free.
[point at the three labels — beat]
Observability. You don't need to instrument your agent to know what
it did. The event stream is the trace. Every tool call, every model
decision, every retry — already there, already structured. Plug it
into your logging pipeline and you have audit-grade history.
Persistence. State, sessions, conversation history — those aren't
separate concepts. They're projections of the event stream. The
framework can replay events to reconstruct where a conversation was
when the process died, or when a long-running tool finally got its
human response.
Which is the third thing: resumability. The reason the human-in-the-loop
pattern from problem three actually works in production — not just in
a notebook — is that the runtime can pause the event stream at the
approval request, persist it, and resume it on a different machine
two hours later. That's not magic; that's just sourcing your state
from events.
[beat]
So when you build with ADK, you're not just writing an agent. You're
writing producers on an event bus that already knows how to log,
checkpoint, and resume. The patterns from the last five slides are
the shape. Events are the substrate. Both matter.
Now, what's actually hard."
DURATION: ~110 seconds.
================================================================
