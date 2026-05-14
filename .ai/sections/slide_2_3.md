# SLIDE 2.3 — THE LEASH

---

## Visual

A horizontal axis across the slide.

- **Left endpoint:** SHORT LEASH / *every step is approved*
- **Right endpoint:** LONG LEASH / *acts and reports*

Pill-shaped markers along the axis, left to right, in roughly chronological order of when each entered our workflows:

- **Far left:** GitHub Copilot autocomplete
- **Left of center:** Cursor chat
- **Right of center:** Claude Code (today)
- **Far right:** autonomous coding agent / ?

*Optional:* faint drift arrow underneath the axis pointing rightward, annotated "~2 years" — signals a continuous slide along the axis, not a jump.

## Design Notes

- This is the **talk's spine** — referenced again on slide 7.2. Use the identical axis treatment every time it appears.
- The three named tools trace the audience's lived experience of the leash extending. Order matters: Copilot first (tab-completion = canonical short-leash); Cursor in the middle (chat-with-context is more autonomous, but the developer still drives turn-by-turn); Claude Code on the right (most of this audience now hands it multi-step tasks).

---

## Spoken

"I think about this as a leash. On the left, short leash — the model proposes, you approve, every single step. On the right, long leash — you give it a goal, it goes off, it comes back when it's done.

You already know this axis. You've been walking along it for two years.

Cast your mind back. The early days were Copilot autocomplete — grey text appearing at the end of your line, you hit tab or you didn't. That's about as short as a leash gets. One token suggestion, one human decision, repeat. We loved it. We did not let it touch anything else.

Then Cursor — chat in the editor, with context, asking it to write a function or refactor a file. Still you driving turn-by-turn, but each turn was a much bigger chunk of work. Leash got longer.

And now most of you, including me, give Claude Code or whatever else you use a ticket and walk away for ten minutes. The model is running its own loop in there — reading files, running tests, editing, running tests again — and you check in at the end. Long leash.

Nobody made us do that. We extended the leash ourselves, one small experiment at a time, as trust accumulated. Two years of small handoffs got us from autocomplete to autonomy.

[beat]

That same dial is what we're turning when we build agents into our own products. The whole design question is: for this feature, for this user, how long is the leash?

Two shapes show up over and over. Let's look at them."

**Duration:** ~90 seconds.
