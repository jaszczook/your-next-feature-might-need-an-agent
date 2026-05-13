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

IMPLEMENTATION NOTE:

Dog sketch images are provided by the speaker and placed in the
`.dog-sketch` div in slides/section3.md. The slide layout (two rows,
header column, label column) is already coded. Just drop the images in.
Images should be monochrome, wide-format (wider than tall), with visible
leash length difference between the two rows.

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
