---
layout: center
---

<div class="min-center">
  <p class="section-heading">What's hard</p>
  <p class="section-sub">not new problems — recalibrated ones</p>
</div>

---

## Non-determinism &amp; evals

<EvalDiagram />

---

## Autonomy &amp; the three As

```mermaid
flowchart LR
  classDef agent fill:#1e3a5f,stroke:#4a90d9,color:#aecbfa
  classDef appr fill:#2d1f00,stroke:#c47b2a,color:#f0c87a
  classDef tool fill:#173326,stroke:#3cad72,color:#a8d5b5
  classDef ann fill:#1c1400,stroke:#c47b2a,color:#c47b2a

  O["ORCHESTRATOR"]:::agent
  O --"hold_card"--> APPR["HUMAN APPROVAL\nrequired before execution\ntimeout → auto-decline"]:::appr
  APPR --> HC["hold_card\n✅ executed"]:::tool
  APPR -.- AU["Authorization\nwho can approve?"]:::ann
  APPR -.- AUD["Audit\nis it logged?"]:::ann
  APPR -.- ACC["Accountability\nwho owns the outcome?"]:::ann
```

---

## Cost, latency, deployment

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
