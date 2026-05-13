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
