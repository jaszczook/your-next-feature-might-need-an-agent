---
layout: center
---

<div class="min-center">
  <p class="section-heading">What's hard</p>
  <p class="section-sub">not new problems — recalibrated ones</p>
</div>

---

## Non-determinism &amp; evals

<div class="eval-layout">
  <div class="eval-left">
    <svg viewBox="0 0 300 210" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="font-family:system-ui,sans-serif">
      <defs>
        <marker id="ah51" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0,8 3,0 6" fill="#6b7280"/>
        </marker>
      </defs>
      <!-- INPUT box -->
      <rect x="80" y="8" width="140" height="42" rx="8" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1.5"/>
      <text x="150" y="25" fill="#aecbfa" font-size="10" font-weight="700" text-anchor="middle">SAME PROMPT</text>
      <text x="150" y="41" fill="#8b949e" font-size="9" text-anchor="middle">"dispute on account 4821"</text>

      <!-- Three fan arrows -->
      <line x1="110" y1="50" x2="50" y2="108" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah51)"/>
      <line x1="150" y1="50" x2="150" y2="108" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah51)"/>
      <line x1="190" y1="50" x2="250" y2="108" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah51)"/>

      <!-- Three output boxes (different tool sequences) -->
      <rect x="8" y="108" width="88" height="44" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="52" y="126" fill="#a8d5b5" font-size="8.5" text-anchor="middle">get_account →</text>
      <text x="52" y="138" fill="#a8d5b5" font-size="8.5" text-anchor="middle">fraud_check →</text>
      <text x="52" y="150" fill="#a8d5b5" font-size="8.5" text-anchor="middle">decline</text>

      <rect x="106" y="108" width="88" height="44" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="150" y="126" fill="#a8d5b5" font-size="8.5" text-anchor="middle">fraud_check →</text>
      <text x="150" y="138" fill="#a8d5b5" font-size="8.5" text-anchor="middle">get_account →</text>
      <text x="150" y="150" fill="#a8d5b5" font-size="8.5" text-anchor="middle">decline</text>

      <rect x="204" y="108" width="88" height="44" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="248" y="126" fill="#a8d5b5" font-size="8.5" text-anchor="middle">get_account →</text>
      <text x="248" y="138" fill="#a8d5b5" font-size="8.5" text-anchor="middle">hold_card →</text>
      <text x="248" y="150" fill="#a8d5b5" font-size="8.5" text-anchor="middle">decline</text>

      <!-- "all correct" label -->
      <text x="150" y="174" fill="#6b7280" font-size="9" text-anchor="middle">all three outcomes are correct</text>
      <text x="150" y="188" fill="#6b7280" font-size="9" text-anchor="middle">but different tool sequences</text>
      <text x="150" y="205" fill="#4a90d9" font-size="9" font-weight="600" text-anchor="middle">assert output == X no longer works</text>
    </svg>
  </div>
  <div class="eval-right">
    <div class="eval-right-label">invert the test pyramid</div>
    <svg viewBox="0 0 290 200" width="100%" height="88%" preserveAspectRatio="xMidYMid meet" style="font-family:system-ui,sans-serif">
      <!-- TRAJECTORY tier — top, widest, amber NEW badge -->
      <polygon points="14,10 276,10 240,62 50,62" fill="#2d1f00" stroke="#c47b2a" stroke-width="1.5"/>
      <text x="145" y="32" fill="#f0c87a" font-size="11" font-weight="700" text-anchor="middle">TRAJECTORY</text>
      <text x="145" y="50" fill="#c47b2a" font-size="9" text-anchor="middle">did it walk a valid path?</text>
      <rect x="230" y="4" width="38" height="16" rx="8" fill="#c47b2a"/>
      <text x="249" y="16" fill="#0d1117" font-size="8" font-weight="700" text-anchor="middle">NEW</text>

      <!-- SINGLE STEP tier — middle -->
      <polygon points="50,70 240,70 212,116 78,116" fill="#161b22" stroke="#374151" stroke-width="1.5"/>
      <text x="145" y="89" fill="#e6edf3" font-size="11" font-weight="700" text-anchor="middle">SINGLE STEP</text>
      <text x="145" y="106" fill="#8b949e" font-size="9" text-anchor="middle">does each tool call make sense?</text>

      <!-- FINAL RESPONSE tier — bottom, narrowest -->
      <polygon points="78,124 212,124 190,168 100,168" fill="#0d1a0d" stroke="#30363d" stroke-width="1.5"/>
      <text x="145" y="142" fill="#6b7280" font-size="11" font-weight="700" text-anchor="middle">FINAL</text>
      <text x="145" y="158" fill="#4b5563" font-size="9" text-anchor="middle">was the answer right?</text>

      <!-- Labels on right side -->
      <text x="280" y="38" fill="#c47b2a" font-size="8.5" text-anchor="end">most tests</text>
      <text x="280" y="95" fill="#8b949e" font-size="8.5" text-anchor="end">some tests</text>
      <text x="280" y="148" fill="#4b5563" font-size="8.5" text-anchor="end">few tests</text>

      <!-- "glass box" annotation -->
      <text x="145" y="186" fill="#8b949e" font-size="8.5" text-anchor="middle">trajectory = glass-box testing — you own the internals</text>
    </svg>
  </div>
</div>

---

## Autonomy &amp; the three As

<svg viewBox="0 0 740 260" width="100%" height="70%" preserveAspectRatio="xMidYMid meet" style="font-family:system-ui,sans-serif;display:block;margin-top:0.3em">
  <defs>
    <marker id="ah52" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0,8 3,0 6" fill="#6b7280"/>
    </marker>
  </defs>

  <!-- ORCHESTRATOR -->
  <rect x="18" y="88" width="138" height="52" rx="8" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1.5"/>
  <text x="87" y="118" fill="#aecbfa" font-size="12" font-weight="700" text-anchor="middle">ORCHESTRATOR</text>

  <!-- Arrow to gate -->
  <line x1="156" y1="114" x2="228" y2="114" stroke="#6b7280" stroke-width="2" marker-end="url(#ah52)"/>
  <text x="192" y="107" fill="#6b7280" font-size="9" text-anchor="middle">hold_card</text>

  <!-- HUMAN APPROVAL — large, dominant, amber -->
  <rect x="228" y="56" width="220" height="116" rx="10" fill="#2d1f00" stroke="#c47b2a" stroke-width="2.5"/>
  <text x="338" y="96" fill="#f0c87a" font-size="14" font-weight="700" text-anchor="middle">HUMAN</text>
  <text x="338" y="114" fill="#f0c87a" font-size="14" font-weight="700" text-anchor="middle">APPROVAL</text>
  <text x="338" y="136" fill="#c47b2a" font-size="9" text-anchor="middle">required before execution</text>
  <text x="338" y="152" fill="#c47b2a" font-size="9" text-anchor="middle">timeout → auto-decline</text>

  <!-- Arrow out -->
  <line x1="448" y1="114" x2="520" y2="114" stroke="#6b7280" stroke-width="2" marker-end="url(#ah52)"/>

  <!-- TOOL (hold_card) -->
  <rect x="520" y="88" width="130" height="52" rx="8" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
  <text x="585" y="110" fill="#a8d5b5" font-size="11" font-weight="700" text-anchor="middle">hold_card</text>
  <text x="585" y="128" fill="#3cad72" font-size="9" text-anchor="middle">executed</text>

  <!-- Three A annotations hanging below HUMAN APPROVAL -->
  <!-- Authorization -->
  <line x1="278" y1="172" x2="278" y2="206" stroke="#c47b2a" stroke-width="1" stroke-dasharray="3,2"/>
  <rect x="224" y="206" width="108" height="30" rx="5" fill="#1c1400" stroke="#c47b2a" stroke-width="1"/>
  <text x="278" y="218" fill="#f0c87a" font-size="10" font-weight="600" text-anchor="middle">Authorization</text>
  <text x="278" y="230" fill="#8b7040" font-size="8" text-anchor="middle">who can approve?</text>

  <!-- Audit -->
  <line x1="338" y1="172" x2="338" y2="206" stroke="#c47b2a" stroke-width="1" stroke-dasharray="3,2"/>
  <rect x="292" y="206" width="92" height="30" rx="5" fill="#1c1400" stroke="#c47b2a" stroke-width="1"/>
  <text x="338" y="218" fill="#f0c87a" font-size="10" font-weight="600" text-anchor="middle">Audit</text>
  <text x="338" y="230" fill="#8b7040" font-size="8" text-anchor="middle">is it logged?</text>

  <!-- Accountability -->
  <line x1="398" y1="172" x2="398" y2="206" stroke="#c47b2a" stroke-width="1" stroke-dasharray="3,2"/>
  <rect x="340" y="206" width="116" height="30" rx="5" fill="#1c1400" stroke="#c47b2a" stroke-width="1"/>
  <text x="398" y="218" fill="#f0c87a" font-size="10" font-weight="600" text-anchor="middle">Accountability</text>
  <text x="398" y="230" fill="#8b7040" font-size="8" text-anchor="middle">who owns the outcome?</text>

  <!-- Caption -->
  <text x="338" y="255" fill="#6b7280" font-size="9" text-anchor="middle">three questions to answer before you ship an agent that touches real state</text>
</svg>

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
