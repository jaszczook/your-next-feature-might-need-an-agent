---
layout: center
---

<div class="min-center">
  <p class="def-text">An agent is an LLM in a loop<br>with tools.</p>
</div>

---
layout: center
---

<svg viewBox="0 0 700 340" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="font-family:system-ui,sans-serif;max-height:88%">
  <defs>
    <marker id="ah22" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0,8 3,0 6" fill="#6b7280"/>
    </marker>
    <marker id="ah22b" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0,8 3,0 6" fill="#58a6ff"/>
    </marker>
  </defs>

  <!-- Agent boundary -->
  <rect x="148" y="55" width="520" height="250" rx="14" fill="none" stroke="#30363d" stroke-width="1.5" stroke-dasharray="8,5"/>
  <text x="408" y="48" fill="#30363d" font-size="11" text-anchor="middle" letter-spacing="3" font-weight="500">AGENT</text>

  <!-- MODEL (top-left of loop) -->
  <rect x="168" y="78" width="140" height="52" rx="8" fill="#1e3a5f" stroke="#4a90d9" stroke-width="2"/>
  <text x="238" y="110" fill="#aecbfa" font-size="14" font-weight="700" text-anchor="middle">MODEL</text>

  <!-- DECIDE (top-right of loop) -->
  <rect x="468" y="78" width="178" height="52" rx="8" fill="#161b22" stroke="#374151" stroke-width="2"/>
  <text x="557" y="99" fill="#e6edf3" font-size="14" font-weight="700" text-anchor="middle">DECIDE</text>
  <text x="557" y="118" fill="#8b949e" font-size="10" text-anchor="middle">respond or call a tool?</text>

  <!-- TOOL (bottom-right) -->
  <rect x="468" y="225" width="178" height="52" rx="8" fill="#173326" stroke="#3cad72" stroke-width="2"/>
  <text x="557" y="257" fill="#a8d5b5" font-size="14" font-weight="700" text-anchor="middle">TOOL</text>

  <!-- RESULT (bottom-left) -->
  <rect x="168" y="225" width="140" height="52" rx="6" fill="#161b22" stroke="#374151" stroke-width="2"/>
  <text x="238" y="257" fill="#8b949e" font-size="14" text-anchor="middle">RESULT</text>

  <!-- Internal loop arrows (gray) -->
  <line x1="308" y1="104" x2="468" y2="104" stroke="#6b7280" stroke-width="2" marker-end="url(#ah22)"/>
  <line x1="557" y1="130" x2="557" y2="225" stroke="#6b7280" stroke-width="2" marker-end="url(#ah22)"/>
  <text x="573" y="184" fill="#6b7280" font-size="10" text-anchor="start">call tool</text>
  <line x1="468" y1="251" x2="308" y2="251" stroke="#6b7280" stroke-width="2" marker-end="url(#ah22)"/>
  <line x1="238" y1="225" x2="238" y2="130" stroke="#6b7280" stroke-width="2" marker-end="url(#ah22)"/>

  <!-- USER box -->
  <rect x="18" y="133" width="92" height="90" rx="8" fill="#0d1117" stroke="#58a6ff" stroke-width="2"/>
  <text x="64" y="171" font-size="28" text-anchor="middle">👤</text>
  <text x="64" y="196" fill="#58a6ff" font-size="13" font-weight="600" text-anchor="middle">USER</text>

  <!-- Request arrow: USER → MODEL (thick blue) -->
  <line x1="110" y1="158" x2="168" y2="104" stroke="#58a6ff" stroke-width="2.5" marker-end="url(#ah22b)"/>
  <text x="128" y="122" fill="#58a6ff" font-size="11" text-anchor="middle">request</text>

  <!-- Response arrow: DECIDE → USER (blue, arcing above) -->
  <path d="M 468 86 C 420 42 160 42 110 178" stroke="#58a6ff" stroke-width="2.5" fill="none" stroke-dasharray="9,4" marker-end="url(#ah22b)"/>
  <text x="295" y="38" fill="#58a6ff" font-size="11" text-anchor="middle">response</text>

  <!-- Respond label on DECIDE -->
  <text x="455" y="78" fill="#58a6ff" font-size="10" text-anchor="end">respond ↖</text>
</svg>

---
layout: center
---

<div style="width:100%;display:flex;flex-direction:column;gap:1.2em;align-items:flex-start;">

<svg viewBox="0 0 840 170" width="100%" preserveAspectRatio="xMidYMid meet" style="font-family:system-ui,sans-serif">

  <!-- Axis line -->
  <line x1="60" y1="80" x2="780" y2="80" stroke="#e6edf3" stroke-width="2.5"/>
  <!-- Left cap -->
  <line x1="60" y1="68" x2="60" y2="92" stroke="#e6edf3" stroke-width="2.5"/>
  <!-- Right cap + arrowhead -->
  <polygon points="786,80 774,74 774,86" fill="#e6edf3"/>

  <!-- Left label -->
  <text x="60" y="30" fill="#e6edf3" font-size="13" font-weight="700" text-anchor="middle">SHORT LEASH</text>
  <text x="60" y="47" fill="#8b949e" font-size="10.5" text-anchor="middle">every step is approved</text>

  <!-- Right label -->
  <text x="780" y="30" fill="#e6edf3" font-size="13" font-weight="700" text-anchor="middle">LONG LEASH</text>
  <text x="780" y="47" fill="#8b949e" font-size="10.5" text-anchor="middle">acts and reports</text>

  <!-- Pills -->
  <rect x="20" y="92" width="158" height="28" rx="14" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1.5"/>
  <text x="99" y="111" fill="#aecbfa" font-size="11" text-anchor="middle">GitHub Copilot autocomplete</text>

  <rect x="235" y="92" width="110" height="28" rx="14" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
  <text x="290" y="111" fill="#a8d5b5" font-size="11" text-anchor="middle">Cursor chat</text>

  <rect x="450" y="92" width="155" height="28" rx="14" fill="#2d1f00" stroke="#c47b2a" stroke-width="1.5"/>
  <text x="527" y="111" fill="#f0c87a" font-size="11" text-anchor="middle">Claude Code (today)</text>

  <rect x="672" y="92" width="140" height="28" rx="14" fill="#161b22" stroke="#374151" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="742" y="111" fill="#6b7280" font-size="11" text-anchor="middle">autonomous / ?</text>

  <!-- Drift arrow -->
  <line x1="99" y1="138" x2="627" y2="138" stroke="#374151" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="633,138 621,133 621,143" fill="#374151"/>
  <text x="365" y="153" fill="#374151" font-size="10" text-anchor="middle">~2 years</text>

</svg>
</div>
