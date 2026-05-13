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
