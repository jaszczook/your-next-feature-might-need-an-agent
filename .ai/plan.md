================================================================
TALK META
Title: "Your Next Feature Might Need an Agent"
Duration: 30 minutes
Audience: Full-stack developers at a large global bank. All are
various AI developer assistant daily users for ~2 years —
GitHub Copilot, Cursor, Claude Code, and others in that lineage.
Technically sophisticated; they read code fast and don't need it
read aloud to them.
Speaker: Me — full-stack developer at the bank, previously at
Samsung and Bravura Solutions, currently building an agent on top
of an internal project area using Google's ADK.
Tone: Inspirational-but-grounded. Colleague-to-colleague, not hype.
Allegories carry the teaching load — generic programming vocabulary
(services, middleware, sessions), not Spring-specific.
Slide philosophy:

Slides serve the speaker. The audience should watch me, not read
walls of text.
Opening and closing slides are minimalist; the words do the work.
Code snippets are absorbed in ~4 seconds while I talk over them.
I never read snippets aloud.
Diagrams are the heroes of teaching slides; snippets are subordinate.
Visual consistency across the talk is critical — the deep-dive's
growing diagram is the highest-value visual investment in the deck.
Forward-references in the spoken script are kept minimal and only
used when a connection genuinely needs naming. No "we'll come back
to this in a minute" filler — it reads as artificial. Trust the
audience to follow the build.

Total slide count: ~27 slides across 7 sections.
Recurring visual elements (use identical treatment each time they
appear):

The leash axis (appears on slides 2.3 and 7.2)
The bishop image (appears on slide 1.3 only — the closing callback
slide has been removed)
Agent/tool/sub-agent shapes (used across all of Section 4 and
referenced in Section 5)
Title-bar template "P# — name [left] | analogy [right]"
(used on all of Section 4's problem slides and Section 5's
challenge slides)
Minimalist text slide template (used on title, definition,
section dividers, punchline, and thanks slides)

================================================================
SECTION 1 — OPENING (~3 min, 3 slides)
PURPOSE: Establish thesis, introduce speaker, plant the "agents are
already changing whose work gets amplified" frame.

SLIDE 1.1 — TITLE
VISUAL:

Minimalist text slide.
Large type, generous whitespace.
Main title, left-aligned or centered, on two lines:
Your Next Feature
Might Need an Agent
Below, smaller and dimmed: my name and "Internal Tech Talk" framing
(or whatever framing the bank uses for internal talks).
No agenda preview, no subtitle, no tagline.

DESIGN NOTES:

The line break "Your Next Feature / Might Need an Agent" is
deliberate — the rhythm wants to pause there.
The word "Might" is doing important work — colleague-to-colleague
register. Not "will," not "should." Don't let a designer "fix" it.

SPOKEN (open cold on the title — no greeting, no thank-you):
"Your next feature might need an agent. That's the claim. Over the
next half hour I want to convince you it's true some of the time,
give you the mental model for when, and walk through what building
one actually looks like."
DURATION: ~20 seconds.

SLIDE 1.2 — ABOUT ME
VISUAL:

Photo of me (head-and-shoulders, not corporate-stiff) on one side.
Three or four short lines on the other side:
[my name]
Full-stack developer, [N] years
Samsung → Bravura Solutions → [bank]
Currently building with ADK on [project area]
The arrow notation in line 3 reads as a career arc at a glance.
No logos, no certifications, no tech-stack list.

DESIGN NOTES:

The Samsung/Bravura/bank line tells the audience "I've been
writing real code at real companies my whole career" without
having to say it.
The AI-assistant reference is NOT on the slide; it lives in the
spoken word as an aside, so it reads as "something we share"
rather than a credential.

SPOKEN:
"Quick about me. I'm [name]. I've been a full-stack developer my
entire career — started at Samsung, then Bravura Solutions, now here
at [bank] for the last [N] years on [team]. These days I'm building
an agent on top of [project area] using Google's ADK — you'll see a
bit of it later.
Oh, and like a lot of you, I've been using AI dev assistants —
Copilot, Cursor, Claude Code, whatever's been on my machine — basically
every day for the last couple of years. Hold onto that — it matters
in a minute."
DURATION: ~40 seconds.

SLIDE 1.3 — BISHOP
VISUAL:

One image, centered, ~60% of slide. No text.
Image options in order of preference:

Real childhood photo of me with a computer (best — earns warmth
and goodwill immediately).
Line drawing of a child at an old CRT-monitor computer setup,
minimalist style.
Nostalgic photo of a 90s/early-2000s home computer (beige tower,
curved-glass monitor).


The bishop is NOT in the image. The bishop lives in the words.

SPOKEN:
"When I was a kid, a bishop came to my school and asked us all what
we wanted to be when we grew up. I said 'an IT guy.' I didn't really
know what that meant. I just knew there was a computer in my house
and I liked clicking on it.
Turned out to be a decent answer. I grew up, I kept clicking on
computers, and eventually people started paying me to do it.
Then a couple of years ago, something funny happened. I opened my
dev assistant, and it started clicking. And I still got paid.
[beat]
Which is the thing I want you to sit with for a second. We — in this
room — get to ship code faster because we have an agent doing some of
the clicking for us. And we still get paid for that output. That's a
gift, and it's the gift this room got first.
The people we build software for haven't gotten it yet. The analyst
running complaints, the relationship manager pulling together a pitch,
the ops person reconciling a break — none of them have an agent in
their workflow doing the clicking the way we do in ours. The whole
talk, in one sentence: that's the asymmetry we get to close. Our job,
increasingly, is to give them what we already have."
DELIVERY: Don't rush. The shift from "funny anecdote about me" to
"this is the actual stakes" is the whole point of this slide; let
the beat before the third paragraph do its work.
DURATION: ~110 seconds with the pause.
================================================================
SECTION 2 — MENTAL MODEL + THE LEASH (~2 min, 3 slides)
PURPOSE: Establish the working definition of an agent and the leash
axis that will frame every design decision in the rest of the talk.

SLIDE 2.1 — DEFINITION
VISUAL:

Minimalist text slide.
One sentence, large, centered:
An agent is an LLM in a loop
with tools.
Line break after "loop" so the eye rests on it before "with tools."
No attribution, no source, no decoration.

SPOKEN:
"Before we go anywhere, the working definition. An agent is an LLM in
a loop with tools.
That's it. That's the whole thing. Every agent framework you've heard
of — LangChain, ADK, the Anthropic SDK, whatever — they're all
elaborations on this one sentence. LLM. In a loop. With tools.
Let's look at the loop."
DURATION: ~25 seconds.

SLIDE 2.2 — THE LOOP DIAGRAM
VISUAL:

A USER actor on the left side (stick figure or labeled box).
A loop of four nodes on the right side, arranged as a cycle:
MODEL → DECIDE → TOOL → RESULT → back to MODEL
Four boxes around the perimeter of a rough square or circle, with
arrows tracing the loop clockwise.
Two arrows connect the user to the loop:
request → arrow going from user INTO the loop, entering at MODEL
response ← arrow coming OUT of the loop, exiting from DECIDE
back to the user
Annotation next to DECIDE node: "respond or call a tool?"
The "respond" branch is the response arrow going back to the user.
The "call a tool" branch goes down into TOOL.
Request/response arrows are visually distinct from internal loop
arrows (thicker, different color, or solid-vs-dashed).
Optional: faint dashed boundary around the four loop nodes,
labeled "agent" — makes the inside/outside distinction explicit.
Optional: animate the loop arrows lighting up in sequence on
slide entry, then staying.

DESIGN NOTES:

Adding the user as an actor is what makes this diagram teach.
Without the user, "DECIDE" is abstract. With the user, the two
branches of the decision are visible: respond goes out, call-a-tool
continues the loop.
The asymmetry — one request in, one response out, but potentially
many internal iterations — is a teaching point.

SPOKEN:
"Here's the loop. A user sends a request. The model gets it, and it
decides — respond directly back to the user, or call a tool. If it
responds, we're done; that arrow goes back out. If it calls a tool,
the tool runs, the result comes back, and the model gets to decide
again with that new information. And again. And again. Until it
decides to respond.
From the user's side, this looks like one request and one response.
Inside, the loop might have spun three times, or thirty. That's the
engine. Everything else we're going to talk about today is scaffolding
around this loop.
The interesting question isn't how the loop works. The interesting
question is: how many times does it get to run before you check on it?"
DURATION: ~50 seconds.

SLIDE 2.3 — THE LEASH
VISUAL:

A horizontal axis across the slide.
Left endpoint labeled:
SHORT LEASH
every step is approved
Right endpoint labeled:
LONG LEASH
acts and reports
Example markers along the axis, small pill-shaped labels, arranged
left-to-right in roughly chronological order of when each became
common in our workflows:
GitHub Copilot autocomplete (far left)
Cursor chat (left of center)
Claude Code (today) (right of center)
autonomous coding agent / ? (far right)
Optional faint drift arrow underneath the axis pointing rightward,
with a small annotation "~2 years" — visually signals that this
has been a continuous slide along the axis, not a jump.

DESIGN NOTES:

This is the talk's spine — referenced again on slide 7.2. Use the
identical axis treatment everywhere it appears.
The three named tools (Copilot, Cursor, Claude Code) trace the
audience's lived experience of the leash extending. Order matters:
Copilot first because tab-completion is the canonical short-leash
experience; Cursor in the middle because chat-with-context is
meaningfully more autonomous than autocomplete but the developer
still drives turn-by-turn; Claude Code on the right because most of
this audience now hands it multi-step tasks.

SPOKEN:
"I think about this as a leash. On the left, short leash — the model
proposes, you approve, every single step. On the right, long leash —
you give it a goal, it goes off, it comes back when it's done.
You already know this axis. You've been walking along it for two years.
Cast your mind back. The early days were Copilot autocomplete — grey
text appearing at the end of your line, you hit tab or you didn't.
That's about as short as a leash gets. One token suggestion, one
human decision, repeat. We loved it. We did not let it touch anything
else.
Then Cursor — chat in the editor, with context, asking it to write a
function or refactor a file. Still you driving turn-by-turn, but each
turn was a much bigger chunk of work. Leash got longer.
And now most of you, including me, give Claude Code or whatever else
you use a ticket and walk away for ten minutes. The model is running
its own loop in there — reading files, running tests, editing, running
tests again — and you check in at the end. Long leash.
Nobody made us do that. We extended the leash ourselves, one small
experiment at a time, as trust accumulated. Two years of small
handoffs got us from autocomplete to autonomy.
[beat]
That same dial is what we're turning when we build agents into our
own products. The whole design question is: for this feature, for
this user, how long is the leash?
Two shapes show up over and over. Let's look at them."
DURATION: ~90 seconds.
================================================================
SECTION 3 — TWO SHAPES (~5-6 min, 5 slides)
PURPOSE: Distinguish assistive features (short leash, "you're building
a tool") from agentic features (long leash, "you're building an
agent"). Introduce the Cmd+K case-management example that will anchor
the deep-dive.

SLIDE 3.1 — SECTION DIVIDER: "TWO SHAPES"
VISUAL:

Minimalist text slide.
Main text, large, centered or left-aligned:
Two shapes
Below, smaller and dimmed:
assistive  ·  agentic

SPOKEN:
"Two shapes show up over and over when you start building features
with agents in them. I want to give them names, because once you can
name them, you can tell which one you're looking at — and that
determines almost every other decision you make."
DURATION: ~10 seconds.

SLIDE 3.2 — ASSISTIVE SHAPE: THE SCENARIO
VISUAL:
This slide has TWO panels stacked vertically, with a clear separator
between them. The split establishes the pattern first, then grounds
it in a real product.
TOP PANEL (~40% of slide, comes in first):

A small, schematic diagram showing the generic shape:
[SOURCE]      [FORM]
📄    →    □ □ □ □
↑ analyst reviews / edits / submits
The arrow is labeled "agent extracts"
The source could be a generic document icon; the form is a stack
of fields with placeholder labels.
Small caption underneath: "prefill a form from a source"
Visual style: monochrome, simple, more diagram than illustration.

BOTTOM PANEL (~55% of slide):

Screenshot or short video (5-8 seconds, silent, looping) of our
existing document-extraction tool — the real product that reads
incoming customer documents, extracts data, lets the user correct
it, then populates the system.
The screenshot/video takes the full width of this panel.
Small caption underneath, dim: "what we already built — [tool name]"
Single line of text underneath the whole slide, small, centered:
the user is still driving
Redaction: all customer data on the screenshot must be fake — use
obviously-fake names ("Jane Sample", "ACME Industries") and
round-number amounts. Do NOT use blur — blur reads as "I'm hiding
something."

DESIGN NOTES:

The top-panel-first structure is the move: pattern, then concrete
instance. The audience first sees the abstract shape — "this is
what an assistive feature looks like in general" — and then sees
that we already have a thing of that shape in production.
Capture the moment of magic in the screenshot: source document on
one side, populated form on the other, with at least one field
visibly editable (cursor in it or highlighted state).

SPOKEN:
"Shape one. Assistive.
Generic version first. The user is doing something on a screen.
There's a source — a document, a description, some input — and there's
a destination, usually a form. The agent's job is to look at the
source, extract what matters, and prefill the form so the user doesn't
have to. The user reviews, fixes anything wrong, and submits.
That's the pattern. Prefill from a source. Once you see it, you'll
notice it everywhere — onboarding flows, expense reports, KYC
intakes, ticket triage.
[advance to bottom panel — beat]
And we've already built one. This is [tool name]. It reads incoming
customer documents, pulls out the fields we need, drops them into
the system. The analyst checks the extraction, fixes anything wrong,
and submits.
It feels like an agent, and technically it is — there's a model,
there are tools, there's a loop running somewhere behind this UI. But
notice what the user is actually doing: they're filling out a form.
The agent just made the form much easier to fill out.
Short leash. The user sees every output, approves every field, presses
every button."
DURATION: ~90 seconds.

SLIDE 3.3 — ASSISTIVE SHAPE: THE PUNCHLINE
VISUAL:

Minimalist text slide.
One sentence, large, centered:
You're not building an agent here.
You're building a tool.
Line break where shown — setup and snap.
No diagram, no icon.

SPOKEN:
"Here's the reframe. When you're building something this assistive —
short leash, user driving — you're not really building an agent.
You're building a tool. A very smart tool, sure. A tool that happens
to have a language model inside it. But functionally, in terms of how
you should think about it, design it, test it, ship it — it's a tool.
And that's fine. Tools are great. Most of what you build will be tools.
The mistake is calling it an agent and then over-engineering it like
one.
[beat]
But here's the thing. A short-leashed tool only uses a sliver of what
modern LLMs can actually do. These models can plan, sequence actions
across systems, recover from errors, decide when they have enough
information and when they need more. If every step you let it take
has to be approved one at a time, you're using a Formula 1 engine
to drive in a school zone. Fine sometimes, but you're leaving the
machine's actual capability on the floor.
And — more importantly — you're leaving the user's work on the
floor. The reason to extend the leash isn't to show off the model.
It's because the user has a goal, and right now they're spending an
hour doing the six clicks between them and that goal. Make the leash
longer, the six clicks collapse, the user gets their hour back. That
hour is the product.
So sometimes the leash does need to be longer. And the shape changes."
DURATION: ~75 seconds.

SLIDE 3.4 — AGENTIC SHAPE: THE Cmd+K MOCKUP
VISUAL:

Background: a faded, low-contrast case management UI. Don't render
in detail — set dressing only. Suggested elements (all rendered
dimly, desaturated or blurred):

Left sidebar with a list of cases (rectangles, no readable text)
Main panel showing a case detail view — customer name
placeholder, a few tabs, a transaction table with rows


Foreground: a sharp, fully readable Cmd+K command palette, centered
on top of the background. Should resemble Spotlight / VSCode command
palette / Linear command bar.
Inside the palette:

Search/input field with a blinking cursor
User's typed command, wrapping across 2-3 lines, in full:
pull this customer's account, find the disputed transaction,
check fraud patterns, draft a response, hold the card if needed,
generate a PDF summary
Optional small hint below: "↵ to run"


Small label nearby (not a slide title):
Cmd+K in a case management app

SPOKEN:
"Shape two. Agentic. Same kind of internal app — case management, the
user is a complaints analyst. But instead of a form, there's a command
bar. Cmd+K, type what you want.
Look at what's in this prompt. Pull this customer's account. Find the
disputed transaction. Check fraud patterns. Draft a response. Hold the
card if needed. Generate a PDF summary.
That's not one action. That's six. Across at least four backend systems.
With a conditional in the middle.
If you tried to build this as a form, the form would have six steps
and a wizard and a state machine and you'd ship it next year. As an
agentic feature, the user types one sentence and the agent figures out
the sequence.
Long leash overall — the user isn't approving each step. But notice
the hold the card bit. That one needs a short leash inside the long
one. That tension is where the interesting design questions live."
DURATION: ~85 seconds.

SLIDE 3.5 — AGENTIC SHAPE: THE RECAP (WITH DOGS)
VISUAL:

Two rows, stacked top and bottom, with a thin horizontal divider
between them. This is a TOP/BOTTOM split, not left/right — the
dog sketches are wider than they are tall, so giving each its own
full-width row lets the leash actually stretch across the slide.

TOP ROW — header "ASSISTIVE":

Sketch on the left side of the row: person standing close to a dog
on a SHORT TAUT leash, speech bubble saying "SIT". Dog is sitting.
Leash visibly tight. Sketch takes about 55-60% of the row width.
Three short lines on the right side of the row, vertically centered:
user drives
short leash
you're building a tool

BOTTOM ROW — header "AGENTIC":

Sketch on the left side of the row: person walking with a dog on a
LONG SLACK leash (or off-leash), speech bubble saying "BEHAVE". Dog
trotting ahead, doing its own thing. Leash visibly slack. Sketch
takes about 55-60% of the row width.
Three short lines on the right side of the row, vertically centered:
user delegates
long leash (mostly)
you're building an agent

STYLE NOTES FOR THE DOG SKETCHES:

Minimalist line drawings, NOT stock photos.
Monochrome.
Same style across both — same line weight, same proportions.
Speech bubbles, not captions — emphasizes the person is speaking
to the dog (the metaphor is about instructions, not descriptions).
Exaggerate the leash difference: top = visibly tight, bottom =
visibly slack.

DESIGN NOTES:

Top/bottom layout chosen because dog-and-handler sketches are
naturally wider than tall — a side-by-side layout would force the
leash to be cramped vertically, which kills the visual punch of
"slack vs taut."
The dog metaphor becomes available as shorthand for the rest of the
talk. Don't overuse — two or three callbacks across remaining
sections is the right dose.
The "long leash (mostly)" parenthetical is doing real work — it
acknowledges the card-hold exception that lives inside the agentic
shape.

SPOKEN:
"So here's how I think about it.
[gesture at top row] Assistive — you tell the dog to sit. It sits.
You tell it to come. It comes. Short leash. User drives every step.
You're building a tool.
[gesture at bottom row] Agentic — you tell the dog to behave. It
runs around, sniffs things, hopefully doesn't bite anyone. Long leash.
User delegates the goal. You're building an agent.
Most features you build will be the dog on top. That's fine. But when
the natural unit of work for the user is a goal and not a step — when
'behave' is the right instruction — that's when you reach for an
agent.
The Cmd+K example is what I want to dig into for the next nine minutes.
Five problems you'll hit when you build something like that. All five
have analogues you already know."
DURATION: ~80 seconds.
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
SECTION 5 — CHALLENGES (~3.5 min, 4 slides)
PURPOSE: Honest acknowledgment of what's actually hard about building
agents. Framed as recalibrations of disciplines the audience already
has, not new disciplines.
CROSS-CUTTING:

Same title-bar template as Section 4: "name" left, "analogy" right.
Theme repeats across all three challenge slides: "you already know
how to do this; the variables shift."


SLIDE 5.0 — SECTION DIVIDER: "WHAT'S HARD"
VISUAL:

Minimalist text slide.
Main text:
What's hard
Below, smaller and dimmed:
not new problems — recalibrated ones

DESIGN NOTE: This subtitle is critical framing. Without it, "What's
hard" sets up an antagonistic relationship between the deep-dive and
the challenges. With it, the two sections feel continuous.
SPOKEN:
"I just spent ten minutes telling you how much of this looks like
things you already do. I meant it. But I'd be lying if I told you
it's just the same job with different syntax. There are three places
where the recalibration is real, and I want to be honest about each
one.
None of these are reasons not to build agents. They're things you
already know how to do, that you'll do slightly differently when
there's a model in the loop."
DURATION: ~15 seconds.

SLIDE 5.1 — NON-DETERMINISM & EVALS
TITLE BAR:
Non-determinism & evals          distributed systems / testing pyramid
DIAGRAM:

Top panel (~1/3 of slide), compressed:
"same input → AGENT → different outputs (but valid)"
Three example outputs showing same outcome, different wording:
"Card held. Customer emailed."
"Card has been suspended; customer notified."
"I've placed a hold and sent the notification."
Dashed horizontal separator.
Header above the bottom panel:
evals = tests, probabilistic
Bottom panel: inverted testing pyramid (wide at bottom, narrow at
top). Three layers, from top to bottom:
TRAJECTORY (glass box)
→ did it take the right path?
tools, order, arguments
[VISUALLY EMPHASIZED — this is the new layer. Different fill /
thicker border / "new" badge.]
SINGLE STEP (white box)
→ was each individual decision correct?
FINAL RESPONSE (black box)
→ did the answer match the rubric?

DESIGN NOTE: This taxonomy (single step / trajectory / final response)
is the standard agent-evaluation taxonomy used by Langfuse, MLflow,
Confident AI, Langchain. The "glass box" / "white box" / "black box"
captions are doing memorable work — give them visual prominence.
SPOKEN:
"First one. Non-determinism. You give the agent the same input twice,
you might get different output. Not different outcomes — different
wording, different ordering. The card got held both times. The
customer got notified both times. But the strings are different.
[gesture at top panel — beat]
You've seen this before. Distributed systems are non-deterministic.
Network calls are non-deterministic. The playbook is the same: you
don't test for one exact output, you test for properties that should
hold across runs. The vocabulary in agent-land is evals. Evals are
tests, but probabilistic.
Now — and this is the part I want you to remember from this slide —
evals aren't just one thing. There's a pyramid. And it maps almost
one-to-one onto the testing pyramid you already know.
[point at bottom — beat]
Bottom layer: final response. Black-box testing. You give the agent
an input, you grade the final answer against a rubric. Did it answer
the right thing? Did it stay within policy? This is the cheapest
layer to write and the most superficial — and it's still necessary.
Just not sufficient on its own.
[point at middle — beat]
Middle layer: single-step evals. White-box. You isolate one decision
the agent made — say, the moment it chose to call
check_fraud_patterns — and you grade that decision on its own. Did
it pick the right tool? Did it pass the right arguments? This is the
closest analog to a unit test in agent-land.
[point at top — beat]
Top layer — and this is the one that's genuinely new. Trajectory.
Glass-box. Not 'is the final answer correct,' and not 'was each
individual step correct' — but 'did the agent take the right path
overall?' Did it call check_fraud_patterns before it called
hold_card, or did it skip the check? Did it loop ten times when it
should have looped twice? Did it pull the account, or did it
hallucinate the customer ID?
Trajectory evals catch what the other two layers miss. The final
response can look fine and every individual step can look defensible,
but the agent took an expensive, wrong, or dangerous path to get
there. If you only check the endpoints, you'll ship those failures.
Same pyramid you already know. Black-box at the bottom. White-box in
the middle. Trajectory — the glass-box layer — on top. The discipline
isn't new; the top layer is.
And — quick callback — remember the event stream from a moment ago?
That's literally what you grade trajectory evals against. The events
are the trajectory."
DURATION: ~110 seconds.

SLIDE 5.2 — AUTONOMY BOUNDARIES
TITLE BAR:
Autonomy boundaries              authorization
DIAGRAM:
A focused close-up of the card-hold gate from P3, lifted out of the
system and given its own slide. Visual hierarchy: the gate is larger
than the thing it gates.
Top: small box
agent decides: hold card?
Center: LARGE, dominant box — heavy border, distinctive fill
🔒  HUMAN APPROVAL
analyst reviews
→ approve / deny
Below center: smaller boxes, almost afterthoughts
hold_card
↓
Card Service
To one side of the central gate, three small label tags:
authorization · audit · accountability
DESIGN NOTE: The three "A" labels are an alliterative mnemonic. Don't
turn them into a bulleted list — keep them as inline tags.
SPOKEN:
"Second one. Autonomy boundaries. The card-hold gate we kept coming
back to in the deep-dive — here's where I name what it actually is.
It's authorization. It's the exact same question you ask every time
you build any feature in this bank: who is allowed to do this thing,
under what conditions, with what trail? Except the actor isn't a user
clicking a button — it's an agent calling a tool.
[point at the three labels — beat]
Authorization. Audit. Accountability. Three things you already build
into every sensitive endpoint. The vocabulary doesn't change. What
changes is where the actor sits. When a user freezes a card, you
have user IDs, session tokens, RBAC, the whole stack. When an agent
freezes a card, you need the same controls, plus a human approval
gate, plus a complete record of what the agent saw before it decided.
The recalibration here is: every place you would normally put an
authorization check on a user, you might now also need one on an
agent. And the more autonomous the agent — the longer the leash —
the more these gates matter. We extended the leash on our coding
assistants over two years because they can't actually move customer
money. The leash on a complaint-handling agent at a bank lives
forever in tension with the size of the action.
Long leash overall, short leash where it counts. That's the whole
game."
DURATION: ~75 seconds.

SLIDE 5.3 — COST, LATENCY, DEPLOYMENT
TITLE BAR:
Cost, latency, deployment        sizing decisions
DIAGRAM:

Three equal columns, same visual structure across all three.
Each column has a header, a small icon, and a one-sentence
recalibration in "not X — Y" format.
COLUMN 1:
COST
💰
not CPU-hours
— tokens
COLUMN 2:
LATENCY
⏱
not p99 of one call
— a loop of N calls
COLUMN 3:
DEPLOYMENT
🚀
not a service —
a service that thinks

DESIGN NOTE: The icons are decorative; the teaching is in the text.
The "not X — Y" parallel structure across all three columns makes the
lesson visible at a glance.
SPOKEN:
"Last one. Cost, latency, deployment. These I'm grouping because
they're all the same kind of thing — sizing decisions you already make
about any system, with the variables shifted.
[point at cost — beat] Cost: you used to count CPU-hours. Now you
count tokens. And tokens scale with how long the conversation runs
and how many tool calls happen inside one user request. A long-leashed
agent costs more than a short-leashed one. That's not a problem; it's
just a budget line you didn't have before.
[point at latency — beat] Latency: you used to look at p99 of a single
API call. Now you're looking at p99 of a loop. Each turn of the loop
is a model call, sometimes plus a tool call. Three turns means three
latencies stacked. The user feels the sum.
[point at deployment — beat] Deployment: it's not quite a service the
way you're used to. It's a service that thinks for a while between
the request and the response. State has to live somewhere, sessions
have to survive, and the autoscaling story is weirder than it is for
a stateless web service.
None of these are new disciplines. They're the same questions you ask
about any system, with new variables plugged in. You'll get used to
the variables fast — most of you already have, in your dev assistant,
where you've been making cost-versus-leash tradeoffs for two years
whether you noticed or not."
DURATION: ~85 seconds.
================================================================
SECTION 6 — DEMO (~2 min, 2 slides)
PURPOSE: Show a real product, in a different feature shape from the
Cmd+K example, that uses the same five patterns. No framing slide —
the audience does the mapping themselves.
THE PRODUCT: An agent we're building at the bank that ACCOMPANIES
people working on financial documents. It drafts sections, pulls
research from attached files, keeps track of what's been written and
what's next. It's neither cleanly assistive nor cleanly agentic —
it's a long-running, stateful, collaborative experience.

SLIDE 6.1 — BRIDGE
VISUAL:

Minimalist text slide. Very quiet — even quieter than other text
slides in this deck.
Main line, medium-large (smaller than other text-slide headlines —
this is a transition, not a declaration):
Let me show you one.
Below, smaller and dimmed:
an agent we're building at [bank] for financial document authoring

DESIGN NOTES:

The original phrasing "Enough theory. Let me show you one." reads
as a flourish — slightly performative, the kind of line that pulls
focus to the speaker. Cutting "Enough theory." removes the rhetorical
curtain-raise; the slide just opens the door to the demo without
announcing that it's doing so.
"One" rather than "ours" still does its work — implies "an example
of the pattern you just learned about."
Slightly smaller headline type than other minimalist slides — this
is a bridge, and bridges shouldn't shout.

SPOKEN:
"Let me show you one.
This is an agent we're building at this bank. I work on it. It
accompanies people when they're authoring financial documents — drafts
sections, pulls research from attached files, keeps track of what's
been written and what's next.
I'm going to shut up for about a minute and a half and let you watch.
See if you can spot the patterns we just walked through."
DELIVERY:

Land it quiet. No pause-for-applause energy on this slide.
Move to the video promptly — don't let the bridge linger.

DURATION: ~20 seconds.

SLIDE 6.2 — VIDEO
VISUAL:

The video itself, full-bleed or as large as slide tooling allows.
No title bar, no logo, no caption. Black bars around the video are
fine if aspect ratio doesn't match; anything else on the slide
pulls focus.
Video length: 60-90 seconds.
Embedded, not linked. Auto-plays on slide entry.
Silent or with text overlays in the video itself (no competing
voiceover — I'm silent during the video).

PRODUCTION NOTES (for me when I add the video later):

Cut to the moments that show pattern-recognizable behavior:

A tool call into an attached file (P1)
The agent producing a draft, with research informing it (P2)
A moment of state continuity, e.g., "I remember you said earlier..."
(P4)
A guardrail moment if one exists (P3)


Aim for ~4 moments in ~90 seconds.
Redact any confidential client data, internal system names visible
in the UI, etc. Use obviously-fake placeholder content.

DELIVERY:

During the video: silent. Don't talk over the demo.
When video ends: hold silence 2-3 seconds. Look at the room.
Then, on the last frame of the video or on a black slide if your
tooling auto-advances:
"That's the one I get to work on.
[beat]
Every pattern I showed you is in there somewhere. I'll let you
find them."
Then advance to the closing.

NO FRAMING SLIDE. The audience does the mapping in their own heads;
that's a stronger experience than a pedagogical recap.
DURATION: ~2 minutes total including the video.
================================================================
SECTION 7 — CLOSING (~3 min, 3 slides)
PURPOSE: Land the talk's argument. Leash callback → reframe → exit.
DESIGN NOTE FOR THIS SECTION: The bishop-callback slide that used to
sit here has been removed. It was doing emotional-closure work that
the closing didn't actually need — the bishop frame from slide 1.3
is already doing its job by carrying the talk's thesis ("we have
something the people we build for don't yet"), and revisiting it at
the end risks turning the closing into a victory lap rather than a
call to action. Cutting it tightens the closing from four slides to
three and lets the leash-axis slide do the closing's heavy lifting
without competition.

SLIDE 7.1 — WHERE WE WERE / WHERE THEY ARE
VISUAL:

Same horizontal leash axis as Slide 2.3 — same visual style, same
endpoint labels.
Three labeled rows below the axis, each with a single dot
positioned along the leash:
Row 1: "us, two years ago"
● — dot on far left
Row 2: "us, today"
● — dot on far right
Row 3: "the people we build software for, today"
● — dot on far left, VERTICALLY ALIGNED with Row 1's dot
Optional Row 4: just "?" with two empty dots at unknown positions
along the axis — implicit "where this is going."
Monochrome. Same dot size and style across rows. The vertical
alignment between Row 1 and Row 3 is the single most important
visual detail on the slide — the audience should see, without you
saying it, that "the people we build software for are where we were
two years ago."

SPOKEN:
"Here's the thing I've been thinking about a lot.
[point at Row 1] Us, two years ago. Short leash. We didn't trust the
tools. We were right not to.
[point at Row 2] Us, today. Long leash. We've earned the trust
experimentally, one small handoff at a time. Two years of small
experiments got us here. Nobody handed us this leash; we earned it.
[point at Row 3 — let this beat land]
And the people we build software for — the analysts, the relationship
managers, the compliance team, the customers — they're right here.
Same place we were. They don't trust the agent in our product yet,
and they're right not to, because we haven't given them a reason to.
Our job — and this is what changes about full-stack development — is
to build features that earn the leash extension. We're the ones who
decide where on this axis a given user, for a given task, lives today.
And we're the ones who, if we build it right, get to move that dot to
the right over time.
That dot moving — that's the product."
DURATION: ~80 seconds.

SLIDE 7.2 — FULL-STACK REDEFINITION
VISUAL: Two-state slide.
STATE 1 (initial):

One quote, centered, large, with quotation marks:
"if you don't design silicon,
you're not a full-stack developer"

STATE 2 (on click / fade-in):

A second line appears below the first, in my own voice (no
quotation marks), visually emphasized (bolder, different color, or
just the absence of quotes making it stand out):
"if you don't design silicon,
you're not a full-stack developer"
if you don't ship agents,
you're not a full-stack developer
Same line-break structure as the original quote (rhythm match).

SPOKEN (over State 1):
"There's a riff that goes around every few years in our industry.
Some version of: 'if you don't design silicon, you're not a full-stack
developer.' If you don't write your own database, you're not full-stack.
If you don't run your own kernel, if you don't do your own DevOps, if
you don't, if you don't, if you don't.
It's a joke, mostly. But it points at a real thing — the definition
of full-stack keeps moving. What we mean by 'full-stack' in 2026 is
not what we meant in 2016, and it's very not what we meant in 2006.
[pause — then advance to State 2]
I think it's moving again."
SPOKEN (over State 2):
"If you don't ship agents, you're not a full-stack developer.
I don't fully believe that. Not yet. I'm not sure I believe it for
myself yet, even though it's literally what I do all day.
But I think it's going to be true. Maybe in eighteen months. Maybe in
three years. And I'd rather we be on the early side of that line than
the late side.
[beat]
One last honest thing about that. If you got into this work because
you like building — shipping something that works, watching someone
use it, fixing the next thing — agents are going to be a great few
years for you. There's never been more leverage between an idea and
a working product. The fun part of this job is about to get more fun.
If you got into this work because you specifically love writing
code — the craft of it, the loops and the data structures and the
quiet satisfaction of getting a function exactly right — I won't
pretend this transition is purely good news. A meaningful share of
the keystrokes is moving off your keyboard and onto the model's. The
work doesn't disappear; it shifts. Designing what the agent should
do, deciding where the leash lives, debugging why it chose the wrong
path — that's still you. But less of it looks like the typing you
fell in love with.
I'm being honest with you because most of us, in this room, are some
mix of both. The builder side is going to thrive. The pure-coder
side is going to feel some friction. Both are real, and neither is
a reason to sit this out."
DURATION: ~135 seconds.

SLIDE 7.3 — THANKS
VISUAL:

One word, centered, large:
Thanks.
With a period — not exclamation mark, not question mark.
No "Questions?" prompt on the slide.
Optional small contact info underneath, dim — only if bank culture
expects it.

SPOKEN (pick the one that fits the room, in order of preference):

"Thanks. I'd love to hear what you build."
"Thanks. Let's talk."
"Thanks. Happy to take questions, or grab me later in Slack."

DELIVERY:

Match the colleague-to-colleague register the whole talk has been in.
The shortest version is almost always the right one.
Do not put "any questions?" on the slide — it tanks closing energy.

DURATION: ~10 seconds.
================================================================