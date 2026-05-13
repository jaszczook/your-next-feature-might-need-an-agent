# Tech Meetup Presentation — 19 May

Slidev presentation deck: "Your Next Feature Might Need an Agent"  
30-minute talk for full-stack developers at a global bank. Tone: colleague-to-colleague, inspirational-but-grounded.

## Stack

- **Slidev** (`@slidev/cli`) — Markdown-driven slide framework
- `slides/section{1-7}.md` — one file per section, concatenated at build time
- `components/` — Vue components embedded in slides
- `style.css` — global slide styles

## Commands

```
make dev      # start dev server (default)
make build    # production build
make export   # export to PDF
```

## Rules

- **Do not access `node_modules/` or `.idea/`** — both are listed in `.claudeignore`. Work only on project content files.

## Content source of truth

All detailed section plans, speaker notes, and design specs live in `.ai/sections/`:

- `meta.md` — talk title, audience, tone, slide philosophy, visual conventions
- `section1.md` – `section7.md` — per-section slide plans

Read these before editing slides. Do not duplicate their content here.

## Slide conventions (from meta.md)

- Slides serve the speaker; audience watches, not reads
- Diagrams are primary teaching tools; code snippets are secondary
- Title-bar template: `P# — name [left] | analogy [right]` (Section 4 & 5)
- Minimalist text template for title, dividers, punchline, and thanks slides
- Recurring visuals must be identical each time they appear (leash axis, bishop image, agent/tool shapes)
