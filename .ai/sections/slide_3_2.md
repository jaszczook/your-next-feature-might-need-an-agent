# SLIDE 3.2 — ASSISTIVE SHAPE: THE SCENARIO

---

## Visual

Two panels stacked vertically, with a clear separator between them. Pattern first, then the real product.

**Top panel (~40% of slide — appears first):**

A small schematic diagram showing the generic shape:

```
[SOURCE]       [FORM]
   📄    →    □ □ □ □
         ↑ analyst reviews / edits / submits
```

Arrow labeled: *"agent extracts"*  
Source: a generic document icon; form: a stack of fields with placeholder labels.  
Caption underneath: *"prefill a form from a source"*  
Visual style: monochrome, simple — more diagram than illustration.

**Bottom panel (~55% of slide):**

Screenshot or short video (5–8 seconds, silent, looping) of our existing document-extraction tool — the real product that reads incoming customer documents, extracts data, lets the user correct it, then populates the system. Full width of the panel.

Caption underneath, dim: *"what we already built — [tool name]"*

Single line below the whole slide, small, centered: **"the user is still driving"**

> **Redaction:** all customer data must be fake — use obviously-fake names ("Jane Sample", "ACME Industries") and round-number amounts. **Do not use blur** — blur reads as "I'm hiding something."

## Design Notes

- Top-panel-first structure is the move: pattern, then concrete instance. The audience first sees the abstract shape, then sees that we already have a thing of that shape in production.
- Capture the moment of magic in the screenshot: source document on one side, populated form on the other, with at least one field visibly editable (cursor in it or highlighted state).

---

## Spoken

"Shape one. Assistive.

Generic version first. The user is doing something on a screen. There's a source — a document, a description, some input — and there's a destination, usually a form. The agent's job is to look at the source, extract what matters, and prefill the form so the user doesn't have to. The user reviews, fixes anything wrong, and submits.

That's the pattern. Prefill from a source. Once you see it, you'll notice it everywhere — onboarding flows, expense reports, KYC intakes, ticket triage.

[advance to bottom panel — beat]

And we've already built one. This is [tool name]. It reads incoming customer documents, pulls out the fields we need, drops them into the system. The analyst checks the extraction, fixes anything wrong, and submits.

It feels like an agent, and technically it is — there's a model, there are tools, there's a loop running somewhere behind this UI. But notice what the user is actually doing: they're filling out a form. The agent just made the form much easier to fill out.

Short leash. The user sees every output, approves every field, presses every button."

**Duration:** ~90 seconds.
