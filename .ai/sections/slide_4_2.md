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
