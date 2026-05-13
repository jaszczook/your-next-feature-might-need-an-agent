---
layout: center
class: mermaid-full
---

```mermaid
flowchart LR
    SL["SHORT LEASH\nevery step approved"]:::ep
    LL["LONG LEASH\nacts and reports"]:::ep

    D1(["●\nus, two years ago"]):::dotL
    D2(["●\nus, today"]):::dotR
    D3(["●\nthe people we build for"]):::dotL

    SL --- D1
    SL --- D3
    D2 --- LL
    D1 -. "extended over 2 years" .-> D2

    classDef ep fill:#0d1117,stroke:#e6edf3,color:#e6edf3,font-weight:700
    classDef dotL fill:#1e3a5f,stroke:#4a90d9,color:#aecbfa
    classDef dotR fill:#173326,stroke:#3cad72,color:#a8d5b5
```

<!--
## FLOW
- Frame the slide: what this diagram is about
- [point at Row 1] Us, two years ago — short leash, right to distrust
- [point at Row 2] Us, today — long leash, earned experimentally
- [point at Row 3] The people we build for — same place we were, same valid distrust
- Articulate what changes about full-stack dev: our job is to earn the leash extension
- → transition cue: advance to full-stack redefinition

---

## SPOKEN
Here's the thing I've been thinking about a lot.
[point at Row 1] Us, two years ago. Short leash. We didn't trust the tools. We were right not to.
[point at Row 2] Us, today. Long leash. We've earned the trust experimentally, one small handoff at a time. Two years of small experiments got us here. Nobody handed us this leash; we earned it.
[point at Row 3 — let this beat land]
And the people we build software for — the analysts, the relationship managers, the compliance team, the customers — they're right here. Same place we were. They don't trust the agent in our product yet, and they're right not to, because we haven't given them a reason to.
Our job — and this is what changes about full-stack development — is to build features that earn the leash extension. We're the ones who decide where on this axis a given user, for a given task, lives today. And we're the ones who, if we build it right, get to move that dot to the right over time.
That dot moving — that's the product.
-->

---
layout: center
---

<div style="max-width:640px">
  <p class="quote-text">"if you don't design silicon,<br>you're not a full-stack developer"</p>
  <div v-click>
    <p class="own-text">if you don't ship agents,<br>you're not a full-stack developer</p>
  </div>
</div>

<!--
## FLOW
- [STATE 1] Introduce the recurring industry riff; name the joke and the real thing it points at
- [STATE 1] Land the beat: the definition of full-stack keeps moving
- [STATE 2 — after click] Deliver own line: it's moving again
- [STATE 2] Honest ambivalence: don't fully believe it yet, but think it's coming
- [STATE 2] Bifurcated honest note: builders will thrive; pure-coders will feel friction; both are real
- → transition cue: advance to thanks

---

## SPOKEN
There's a riff that goes around every few years in our industry. Some version of: "if you don't design silicon, you're not a full-stack developer." If you don't write your own database, you're not full-stack. If you don't run your own kernel, if you don't do your own DevOps, if you don't, if you don't, if you don't.
It's a joke, mostly. But it points at a real thing — the definition of full-stack keeps moving. What we mean by "full-stack" in 2026 is not what we meant in 2016, and it's very not what we meant in 2006.
[pause — then advance to State 2]

[click]

I think it's moving again.
If you don't ship agents, you're not a full-stack developer.
I don't fully believe that. Not yet. I'm not sure I believe it for myself yet, even though it's literally what I do all day.
But I think it's going to be true. Maybe in eighteen months. Maybe in three years. And I'd rather we be on the early side of that line than the late side.
[beat]
One last honest thing about that. If you got into this work because you like building — shipping something that works, watching someone use it, fixing the next thing — agents are going to be a great few years for you. There's never been more leverage between an idea and a working product. The fun part of this job is about to get more fun.
If you got into this work because you specifically love writing code — the craft of it, the loops and the data structures and the quiet satisfaction of getting a function exactly right — I won't pretend this transition is purely good news. A meaningful share of the keystrokes is moving off your keyboard and onto the model's. The work doesn't disappear; it shifts. Designing what the agent should do, deciding where the leash lives, debugging why it chose the wrong path — that's still you. But less of it looks like the typing you fell in love with.
I'm being honest with you because most of us, in this room, are some mix of both. The builder side is going to thrive. The pure-coder side is going to feel some friction. Both are real, and neither is a reason to sit this out.
-->

---
layout: center
---

<div class="min-center" style="text-align:center">
  <p class="thanks-word">Thanks.</p>
</div>

<!--
## FLOW
- Closing line

---

## SPOKEN
Thanks. I'd love to hear what you build.
-->
