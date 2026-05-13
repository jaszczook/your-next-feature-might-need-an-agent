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
