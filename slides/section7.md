---
layout: center
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

---
layout: center
---

<div style="max-width:640px">
  <p class="quote-text">"if you don't design silicon,<br>you're not a full-stack developer"</p>
  <div v-click>
    <p class="own-text">if you don't ship agents,<br>you're not a full-stack developer</p>
  </div>
</div>

---
layout: center
---

<div class="min-center" style="text-align:center">
  <p class="thanks-word">Thanks.</p>
</div>
