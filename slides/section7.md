---
layout: center
---

```mermaid
flowchart LR
    S["SHORT LEASH\nevery step approved"]:::ep
    A["GitHub Copilot\nautocomplete"]:::blue
    B["Cursor chat"]:::green
    C["Claude Code\n(today)"]:::orange
    D["Devin / SWE-agent"]:::orange
    QN{{"your feature?\n— decide deliberately —"}}:::feature
    L["LONG LEASH\nacts and reports"]:::ep

    S --- A --- B --- C --- D --- QN --- L

    classDef ep fill:#0d1117,stroke:#e6edf3,color:#e6edf3,font-weight:700
    classDef blue fill:#1e3a5f,stroke:#4a90d9,color:#aecbfa
    classDef green fill:#173326,stroke:#3cad72,color:#a8d5b5
    classDef orange fill:#2d1f00,stroke:#c47b2a,color:#f0c87a
    classDef feature fill:#0d1a26,stroke:#58a6ff,color:#58a6ff,stroke-dasharray:4 2
```

---
layout: center
---

<div style="max-width:640px">
  <p class="quote-text">"Full-stack used to mean front to back."</p>
  <div v-click>
    <p class="own-text">Now it means prompt to production.</p>
  </div>
</div>

---
layout: center
---

<div class="min-center" style="text-align:center">
  <p class="thanks-word">Thanks.</p>
</div>
