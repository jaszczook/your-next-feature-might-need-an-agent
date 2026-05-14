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
Six problems you'll hit when you build something like that. All six
have analogues you already know."
DURATION: ~80 seconds.
================================================================
