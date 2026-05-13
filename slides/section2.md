---
layout: center
---

<div class="min-center">
  <p class="def-text">An agent is an LLM in a loop<br>with tools.</p>
</div>

---
layout: center
---

```mermaid
flowchart LR
    USER(["👤 USER"])
    MODEL["MODEL"]
    DECIDE{"DECIDE\nrespond or\ncall a tool?"}
    TOOL["TOOL"]
    RESULT["RESULT"]

    USER -->|request| MODEL
    MODEL --> DECIDE
    DECIDE -->|respond| USER
    DECIDE -->|call tool| TOOL
    TOOL --> RESULT
    RESULT --> MODEL

    subgraph AGENT[" — AGENT — "]
        MODEL
        DECIDE
        TOOL
        RESULT
    end
```

---
layout: center
---

```mermaid
flowchart LR
    S["SHORT LEASH\nevery step approved"]:::ep
    A["GitHub Copilot\nautocomplete"]:::blue
    B["Cursor chat"]:::green
    C["Claude Code\n(today)"]:::orange
    D["autonomous / ?"]:::dim
    L["LONG LEASH\nacts and reports"]:::ep

    S --- A --- B --- C --- D --- L

    classDef ep fill:#0d1117,stroke:#e6edf3,color:#e6edf3,font-weight:700
    classDef blue fill:#1e3a5f,stroke:#4a90d9,color:#aecbfa
    classDef green fill:#173326,stroke:#3cad72,color:#a8d5b5
    classDef orange fill:#2d1f00,stroke:#c47b2a,color:#f0c87a
    classDef dim fill:#161b22,stroke:#374151,color:#6b7280
```
