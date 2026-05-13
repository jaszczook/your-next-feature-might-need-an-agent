---
layout: center
---

<div class="min-center">
  <p class="section-heading">Two shapes</p>
  <p class="section-sub">assistive &nbsp;·&nbsp; agentic</p>
</div>

---

<div class="two-panel">
  <!-- TOP PANEL: generic pattern -->
  <div class="panel-top">
    <svg viewBox="0 0 560 110" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="font-family:system-ui,sans-serif">
      <defs>
        <marker id="ah32" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0,8 3,0 6" fill="#6b7280"/>
        </marker>
      </defs>
      <!-- SOURCE -->
      <rect x="30" y="28" width="90" height="55" rx="8" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1.5"/>
      <text x="75" y="52" fill="#aecbfa" font-size="26" text-anchor="middle">📄</text>
      <text x="75" y="74" fill="#8b949e" font-size="10" text-anchor="middle">SOURCE</text>

      <!-- Arrow with label -->
      <line x1="120" y1="55" x2="200" y2="55" stroke="#6b7280" stroke-width="2" marker-end="url(#ah32)"/>
      <text x="160" y="47" fill="#8b949e" font-size="9.5" text-anchor="middle">agent extracts</text>

      <!-- FORM (fields) -->
      <rect x="200" y="22" width="150" height="66" rx="8" fill="#161b22" stroke="#374151" stroke-width="1.5"/>
      <rect x="210" y="30" width="130" height="12" rx="3" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1"/>
      <rect x="210" y="46" width="130" height="12" rx="3" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1"/>
      <rect x="210" y="62" width="130" height="12" rx="3" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1"/>
      <text x="275" y="95" fill="#8b949e" font-size="10" text-anchor="middle">FORM</text>

      <!-- "analyst reviews" annotation -->
      <path d="M 275 88 Q 380 88 390 55" stroke="#8b949e" stroke-width="1" fill="none" stroke-dasharray="3,2"/>
      <text x="395" y="52" fill="#8b949e" font-size="9" text-anchor="start">↑ analyst reviews / edits / submits</text>

      <!-- Caption -->
      <text x="165" y="108" fill="#6b7280" font-size="9.5" text-anchor="middle">prefill a form from a source</text>

      <!-- Bottom label -->
      <text x="460" y="100" fill="#e6edf3" font-size="10" font-style="italic" text-anchor="middle">the user is still driving</text>
    </svg>
  </div>

  <!-- BOTTOM PANEL: existing tool screenshot placeholder -->
  <div class="panel-bottom">
    <div style="padding:0.5em 0.8em;font-size:0.62em;color:#8b949e;border-bottom:1px solid #30363d">
      What we already built
    </div>
    <div class="screen-placeholder">
      [ SCREENSHOT / SHORT VIDEO PLACEHOLDER ]<br>
      <span style="font-size:0.85em;margin-top:0.4em;display:block">
        Document-extraction tool — source doc on left, populated form on right, one field editable.<br>
        Use obviously-fake data: "Jane Sample", "ACME Industries", round amounts. No blur.
      </span>
    </div>
  </div>
</div>

---
layout: center
---

<div class="min-center">
  <p class="punchline-text">You're not building an agent here.<br>You're building a tool.</p>
</div>

---

<p style="font-size:0.6em;color:#8b949e;margin:0 0 0.3em">Cmd+K in a case management app</p>

<div class="cmdK-outer">
  <!-- Blurred background: faded case-management UI -->
  <div class="cmdK-bg">
    <div style="display:flex;gap:0.8em;height:100%">
      <div style="width:22%;border-right:1px solid #374151;padding-right:0.5em">
        <div style="height:12px;background:#374151;border-radius:3px;margin-bottom:6px"></div>
        <div style="height:10px;background:#21262d;border-radius:3px;margin-bottom:5px"></div>
        <div style="height:10px;background:#21262d;border-radius:3px;margin-bottom:5px"></div>
        <div style="height:10px;background:#21262d;border-radius:3px;margin-bottom:5px"></div>
        <div style="height:10px;background:#21262d;border-radius:3px;margin-bottom:5px"></div>
        <div style="height:10px;background:#21262d;border-radius:3px;margin-bottom:5px"></div>
      </div>
      <div style="flex:1">
        <div style="height:14px;background:#374151;border-radius:3px;margin-bottom:8px;width:40%"></div>
        <div style="height:8px;background:#21262d;border-radius:2px;margin-bottom:4px"></div>
        <div style="height:8px;background:#21262d;border-radius:2px;margin-bottom:4px;width:80%"></div>
        <div style="height:8px;background:#21262d;border-radius:2px;margin-bottom:10px;width:60%"></div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;margin-bottom:6px">
          <div style="height:7px;background:#21262d;border-radius:2px"></div>
          <div style="height:7px;background:#21262d;border-radius:2px"></div>
          <div style="height:7px;background:#21262d;border-radius:2px"></div>
          <div style="height:7px;background:#21262d;border-radius:2px"></div>
          <div style="height:7px;background:#21262d;border-radius:2px"></div>
          <div style="height:7px;background:#21262d;border-radius:2px"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Command palette (foreground) -->
  <div class="cmdK-palette">
    <div class="cmdK-lbl">⌘K &nbsp;—&nbsp; case management</div>
    <div class="cmdK-text">
      pull this customer's account, find the disputed transaction,<br>
      check fraud patterns, draft a response, hold the card if needed,<br>
      generate a PDF summary<span style="animation:blink 1s step-end infinite;color:#58a6ff">▌</span>
    </div>
    <div class="cmdK-hint">↵ to run</div>
  </div>
</div>

---

<div class="dog-grid">

  <!-- ASSISTIVE row -->
  <div class="dog-row ass">
    <div class="dog-hdr">Assistive</div>
    <div class="dog-sketch">
      <svg viewBox="0 0 310 112" height="90" preserveAspectRatio="xMidYMid meet" style="font-family:system-ui,sans-serif">
        <!-- Person -->
        <circle cx="55" cy="18" r="14" fill="none" stroke="#e6edf3" stroke-width="2"/>
        <line x1="55" y1="32" x2="55" y2="72" stroke="#e6edf3" stroke-width="2"/>
        <line x1="36" y1="50" x2="74" y2="50" stroke="#e6edf3" stroke-width="2"/>
        <line x1="55" y1="72" x2="40" y2="100" stroke="#e6edf3" stroke-width="2"/>
        <line x1="55" y1="72" x2="70" y2="100" stroke="#e6edf3" stroke-width="2"/>
        <!-- Speech bubble -->
        <rect x="68" y="2" width="38" height="22" rx="6" fill="#1c2128" stroke="#8b949e" stroke-width="1.2"/>
        <polygon points="75,24 72,34 84,24" fill="#1c2128" stroke="#8b949e" stroke-width="1.2" stroke-linejoin="round"/>
        <text x="87" y="17" fill="#e6edf3" font-size="12" font-weight="700" text-anchor="middle">SIT</text>
        <!-- Leash — short, taut -->
        <line x1="74" y1="50" x2="142" y2="66" stroke="#c47b2a" stroke-width="2.5"/>
        <!-- Dog (sitting) -->
        <ellipse cx="164" cy="62" rx="24" ry="19" fill="none" stroke="#e6edf3" stroke-width="2"/>
        <circle cx="176" cy="42" r="15" fill="none" stroke="#e6edf3" stroke-width="2"/>
        <ellipse cx="167" cy="30" rx="7" ry="10" fill="none" stroke="#e6edf3" stroke-width="1.5"/>
        <line x1="152" y1="81" x2="152" y2="108" stroke="#e6edf3" stroke-width="2"/>
        <path d="M 183 74 Q 198 64 194 55" fill="none" stroke="#e6edf3" stroke-width="2"/>
      </svg>
    </div>
    <div class="dog-labels">
      <span><b>user drives</b></span>
      <span><b>short leash</b></span>
      <span>you're building <b>a tool</b></span>
    </div>
  </div>

  <!-- AGENTIC row -->
  <div class="dog-row age">
    <div class="dog-hdr">Agentic</div>
    <div class="dog-sketch">
      <svg viewBox="0 0 360 112" height="90" preserveAspectRatio="xMidYMid meet" style="font-family:system-ui,sans-serif">
        <!-- Person -->
        <circle cx="50" cy="18" r="14" fill="none" stroke="#e6edf3" stroke-width="2"/>
        <line x1="50" y1="32" x2="50" y2="72" stroke="#e6edf3" stroke-width="2"/>
        <line x1="31" y1="50" x2="69" y2="50" stroke="#e6edf3" stroke-width="2"/>
        <line x1="50" y1="72" x2="35" y2="100" stroke="#e6edf3" stroke-width="2"/>
        <line x1="50" y1="72" x2="65" y2="100" stroke="#e6edf3" stroke-width="2"/>
        <!-- Speech bubble -->
        <rect x="63" y="2" width="60" height="22" rx="6" fill="#1c2128" stroke="#8b949e" stroke-width="1.2"/>
        <polygon points="70,24 67,34 80,24" fill="#1c2128" stroke="#8b949e" stroke-width="1.2" stroke-linejoin="round"/>
        <text x="93" y="17" fill="#e6edf3" font-size="12" font-weight="700" text-anchor="middle">BEHAVE</text>
        <!-- Leash — long, slack -->
        <path d="M 69 50 Q 170 105 280 62" fill="none" stroke="#c47b2a" stroke-width="2.5"/>
        <!-- Dog (trotting ahead) -->
        <ellipse cx="302" cy="58" rx="28" ry="16" fill="none" stroke="#e6edf3" stroke-width="2"/>
        <circle cx="323" cy="43" r="15" fill="none" stroke="#e6edf3" stroke-width="2"/>
        <ellipse cx="315" cy="31" rx="6" ry="9" fill="none" stroke="#e6edf3" stroke-width="1.5"/>
        <!-- Running legs -->
        <line x1="286" y1="74" x2="275" y2="98" stroke="#e6edf3" stroke-width="2"/>
        <line x1="298" y1="74" x2="305" y2="98" stroke="#e6edf3" stroke-width="2"/>
        <line x1="316" y1="73" x2="323" y2="97" stroke="#e6edf3" stroke-width="2"/>
        <line x1="306" y1="74" x2="295" y2="97" stroke="#e6edf3" stroke-width="2"/>
        <!-- Tail (back) -->
        <path d="M 274 54 Q 258 40 264 32" fill="none" stroke="#e6edf3" stroke-width="2"/>
      </svg>
    </div>
    <div class="dog-labels">
      <span><b>user delegates</b></span>
      <span><b>long leash</b> (mostly)</span>
      <span>you're building <b>an agent</b></span>
    </div>
  </div>

</div>
