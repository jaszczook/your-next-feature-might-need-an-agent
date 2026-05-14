# SLIDE 3.5 — AGENTIC SHAPE: THE RECAP (WITH DOGS)

---

## Visual

Two rows, stacked top and bottom, with a thin horizontal divider between them.

> Top/bottom layout — not left/right. Dog-and-handler sketches are wider than tall, so full-width rows let the leash stretch across the slide.

**Top row — header "ASSISTIVE":**
- **Left side (~55–60% of row):** sketch of a person standing close to a dog on a short, taut leash, speech bubble: *"SIT."* Dog is sitting. Leash visibly tight.
- **Right side:** three short lines, vertically centered:
  - *user drives*
  - *short leash*
  - *you're building a tool*

**Bottom row — header "AGENTIC":**
- **Left side (~55–60% of row):** sketch of a person walking with a dog on a long, slack leash (or off-leash), speech bubble: *"BEHAVE."* Dog trotting ahead, doing its own thing.
- **Right side:** three short lines, vertically centered:
  - *user delegates*
  - *long leash (mostly)*
  - *you're building an agent*

## Implementation Note

Dog sketch images are provided by the speaker and placed in the `.dog-sketch` div in `slides/section3.md`. The slide layout (two rows, header column, label column) is already coded — just drop the images in. Images should be monochrome, wide-format (wider than tall), with a visible leash-length difference between the two rows.

## Design Notes

- **"long leash (mostly)"** is doing real work — it acknowledges the card-hold exception that lives inside the agentic shape.
- The dog metaphor becomes available as shorthand for the rest of the talk. Use it sparingly — two or three callbacks across remaining sections is the right dose.

---

## Spoken

"So here's how I think about it.

[gesture at top row] Assistive — you tell the dog to sit. It sits. You tell it to come. It comes. Short leash. User drives every step. You're building a tool.

[gesture at bottom row] Agentic — you tell the dog to behave. It runs around, sniffs things, hopefully doesn't bite anyone. Long leash. User delegates the goal. You're building an agent.

Most features you build will be the dog on top. That's fine. But when the natural unit of work for the user is a goal and not a step — when 'behave' is the right instruction — that's when you reach for an agent.

The Cmd+K example is what I want to dig into for the next nine minutes. Six problems you'll hit when you build something like that. All six have analogues you already know."

**Duration:** ~80 seconds.
