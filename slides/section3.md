---
layout: center
---

<div class="min-center">
  <p class="section-heading">Two shapes</p>
  <p class="section-sub">assistive &nbsp;·&nbsp; agentic</p>
</div>

---

<div style="display:flex;flex-direction:column;height:100%;gap:0.5em">
  <div class="panel-top">

```mermaid
flowchart LR
    SRC["📄 SOURCE"]:::src
    AGT>"agent extracts"]:::agt
    FORM["FORM\n▢ field 1\n▢ field 2\n▢ field 3"]:::form
    USR(["👤 USER\nreviews & submits"]):::usr

    SRC --> AGT --> FORM --> USR

    classDef src fill:#211500,stroke:#c47b2a,color:#f0c87a
    classDef agt fill:#1e3a5f,stroke:#4a90d9,color:#aecbfa
    classDef form fill:#161b22,stroke:#374151,color:#e6edf3
    classDef usr fill:#0d2240,stroke:#58a6ff,color:#7dc6ff
```

  <p class="panel-cap">prefill a form from a source</p>
  </div>

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

  <p style="text-align:center;font-size:0.68em;color:#8b949e;padding-top:0.4em">the user is still driving</p>
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
      <div class="screen-placeholder">[ IMAGE PLACEHOLDER — assistive dog sketch ]</div>
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
      <div class="screen-placeholder">[ IMAGE PLACEHOLDER — agentic dog sketch ]</div>
    </div>
    <div class="dog-labels">
      <span><b>user delegates</b></span>
      <span><b>long leash</b> (mostly)</span>
      <span>you're building <b>an agent</b></span>
    </div>
  </div>

</div>
