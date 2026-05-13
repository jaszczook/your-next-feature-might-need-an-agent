<template>
  <div class="eval-layout">
    <div class="eval-left">
      <svg viewBox="0 0 300 210" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="font-family:system-ui,sans-serif">
        <defs>
          <marker id="ah51" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0,8 3,0 6" fill="#6b7280"/>
          </marker>
        </defs>
        <rect x="80" y="8" width="140" height="42" rx="8" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1.5"/>
        <text x="150" y="25" fill="#aecbfa" font-size="10" font-weight="700" text-anchor="middle">SAME PROMPT</text>
        <text x="150" y="41" fill="#8b949e" font-size="9" text-anchor="middle">"dispute on account 4821"</text>

        <line x1="110" y1="50" x2="50" y2="108" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah51)"/>
        <line x1="150" y1="50" x2="150" y2="108" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah51)"/>
        <line x1="190" y1="50" x2="250" y2="108" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah51)"/>

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

        <text x="150" y="174" fill="#6b7280" font-size="9" text-anchor="middle">all three outcomes are correct</text>
        <text x="150" y="188" fill="#6b7280" font-size="9" text-anchor="middle">but different tool sequences</text>
        <text x="150" y="205" fill="#4a90d9" font-size="9" font-weight="600" text-anchor="middle">assert output == X no longer works</text>
      </svg>
    </div>
    <div class="eval-right">
      <div class="eval-right-label">invert the test pyramid</div>
      <svg viewBox="0 0 290 200" width="100%" height="88%" preserveAspectRatio="xMidYMid meet" style="font-family:system-ui,sans-serif">
        <polygon points="14,10 276,10 240,62 50,62" fill="#2d1f00" stroke="#c47b2a" stroke-width="1.5"/>
        <text x="145" y="32" fill="#f0c87a" font-size="11" font-weight="700" text-anchor="middle">TRAJECTORY</text>
        <text x="145" y="50" fill="#c47b2a" font-size="9" text-anchor="middle">did it walk a valid path?</text>
        <rect x="230" y="4" width="38" height="16" rx="8" fill="#c47b2a"/>
        <text x="249" y="16" fill="#0d1117" font-size="8" font-weight="700" text-anchor="middle">NEW</text>

        <polygon points="50,70 240,70 212,116 78,116" fill="#161b22" stroke="#374151" stroke-width="1.5"/>
        <text x="145" y="89" fill="#e6edf3" font-size="11" font-weight="700" text-anchor="middle">SINGLE STEP</text>
        <text x="145" y="106" fill="#8b949e" font-size="9" text-anchor="middle">does each tool call make sense?</text>

        <polygon points="78,124 212,124 190,168 100,168" fill="#0d1a0d" stroke="#30363d" stroke-width="1.5"/>
        <text x="145" y="142" fill="#6b7280" font-size="11" font-weight="700" text-anchor="middle">FINAL</text>
        <text x="145" y="158" fill="#4b5563" font-size="9" text-anchor="middle">was the answer right?</text>

        <text x="280" y="38" fill="#c47b2a" font-size="8.5" text-anchor="end">most tests</text>
        <text x="280" y="95" fill="#8b949e" font-size="8.5" text-anchor="end">some tests</text>
        <text x="280" y="148" fill="#4b5563" font-size="8.5" text-anchor="end">few tests</text>

        <text x="145" y="186" fill="#8b949e" font-size="8.5" text-anchor="middle">trajectory = glass-box testing — you own the internals</text>
      </svg>
    </div>
  </div>
</template>
