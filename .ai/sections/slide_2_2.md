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
