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
flowchart LR
    subgraph ND["Non-determinism"]
        direction TB
        P["same prompt:\n'dispute on account 4821'"]:::prompt
        O1["path A — get_account →\nfraud_check → decline"]:::out
        O2["path B — fraud_check →\nget_account → decline"]:::out
        O3["path C — get_account →\nhold_card → decline"]:::out
        N["all three correct — different paths\nassert output == X no longer works"]:::note
        P --> O1 & O2 & O3
        O1 & O2 & O3 --> N
    end

    subgraph EV["Evals = Inverted Pyramid"]
        direction TB
        T["TRAJECTORY — glass-box ★\ndid it walk the right path?"]:::new
        S["SINGLE STEP — white-box\nwas each tool call correct?"]:::mid
        F["FINAL RESPONSE — black-box\nwas the answer right?"]:::bot
        T --> S --> F
    end

    classDef prompt fill:#1e3a5f,stroke:#4a90d9,color:#aecbfa
    classDef out fill:#173326,stroke:#3cad72,color:#a8d5b5
    classDef note fill:#0d1117,stroke:#374151,color:#8b949e
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
    <div class="col-not">one call, small cost</div>
    <div class="col-yes">N steps × model calls — budget the loop before you build the feature</div>
  </div>

  <div class="col-card">
    <div class="col-icon">⏱</div>
    <div class="col-hdr">Latency</div>
    <div class="col-not">P50 in milliseconds</div>
    <div class="col-yes">P95 in seconds — design retry budgets and timeouts from day one</div>
  </div>

  <div class="col-card">
    <div class="col-icon">🔁</div>
    <div class="col-hdr">Deployment</div>
    <div class="col-not">a stateless request handler</div>
    <div class="col-yes">a long-running process — you need state, checkpoints, and a resume path</div>
  </div>

</div>
