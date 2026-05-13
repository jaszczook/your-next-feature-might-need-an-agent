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
