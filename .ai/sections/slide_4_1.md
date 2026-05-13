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
