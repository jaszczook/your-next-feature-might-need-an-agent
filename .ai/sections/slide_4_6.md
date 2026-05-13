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
