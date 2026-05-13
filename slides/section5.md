---
layout: center
---

<div class="min-center">
  <p class="section-heading">What's hard</p>
  <p class="section-sub">not new problems — recalibrated ones</p>
</div>

---
class: dia-slide
---

<div class="title-bar">
  <span class="tb-l">Non-determinism &amp; evals</span>
  <span class="tb-r">distributed systems / testing pyramid</span>
</div>

```mermaid
flowchart TB
    subgraph ND["Same input → different outputs (all valid)"]
        direction TB
        P["'dispute on account 4821'"]:::prompt
        A["AGENT"]:::agent
        O1["'Card held. Customer emailed.'"]:::out
        O2["'Card has been suspended;\ncustomer notified.'"]:::out
        O3["'I've placed a hold and\nsent the notification.'"]:::out
        P --> A --> O1 & O2 & O3
    end

    subgraph EV["Evals = Inverted Pyramid"]
        direction TB
        T["TRAJECTORY — glass-box ★\ndid it walk the right path?"]:::new
        S["SINGLE STEP — white-box\nwas each tool call correct?"]:::mid
        F["FINAL RESPONSE — black-box\nwas the answer right?"]:::bot
        T --> S --> F
    end

    ND ~~~ EV

    classDef prompt fill:#1e3a5f,stroke:#4a90d9,color:#aecbfa
    classDef agent fill:#0d2240,stroke:#58a6ff,color:#7dc6ff,font-weight:700
    classDef out fill:#173326,stroke:#3cad72,color:#a8d5b5
    classDef new fill:#2d1f00,stroke:#c47b2a,color:#f0c87a,font-weight:700
    classDef mid fill:#161b22,stroke:#374151,color:#e6edf3,font-weight:700
    classDef bot fill:#0d1a0d,stroke:#30363d,color:#6b7280
```

---
class: dia-slide
---

<div class="title-bar">
  <span class="tb-l">Autonomy boundaries</span>
  <span class="tb-r">authorization</span>
</div>

```mermaid
flowchart LR
    ORCH["ORCHESTRATOR"]:::agent
    GATE["🔒 HUMAN APPROVAL\nanalyst reviews\napprove · deny\ntimeout → auto-decline"]:::gate
    TOOL["hold_card\nexecuted ✓"]:::tool

    AUTH["Authorization\nwho can approve?"]:::label
    AUDIT["Audit\nis it logged?"]:::label
    ACCT["Accountability\nwho owns the outcome?"]:::label

    ORCH -->|hold_card| GATE --> TOOL
    GATE --- AUTH & AUDIT & ACCT

    classDef agent fill:#1e3a5f,stroke:#4a90d9,color:#aecbfa,font-weight:700
    classDef gate fill:#2d1f00,stroke:#c47b2a,color:#f0c87a,font-weight:700
    classDef tool fill:#173326,stroke:#3cad72,color:#a8d5b5
    classDef label fill:#1c1400,stroke:#c47b2a,color:#f0c87a
```

---
class: dia-slide
---

<div class="title-bar">
  <span class="tb-l">Cost, latency, deployment</span>
  <span class="tb-r">sizing decisions</span>
</div>

<div class="three-cols">

  <div class="col-card">
    <div class="col-icon">💰</div>
    <div class="col-hdr">Cost</div>
    <div class="col-not">CPU-hours</div>
    <div class="col-yes">tokens</div>
  </div>

  <div class="col-card">
    <div class="col-icon">⏱</div>
    <div class="col-hdr">Latency</div>
    <div class="col-not">p99 of one call</div>
    <div class="col-yes">a loop of N calls</div>
  </div>

  <div class="col-card">
    <div class="col-icon">🔁</div>
    <div class="col-hdr">Deployment</div>
    <div class="col-not">a service</div>
    <div class="col-yes">a service that thinks</div>
  </div>

</div>
