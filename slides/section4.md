---
layout: center
---

<div class="min-center">
  <p class="section-heading">Five problems</p>
  <p class="section-sub">tools &nbsp;·&nbsp; orchestration &nbsp;·&nbsp; callbacks &nbsp;·&nbsp; state &nbsp;·&nbsp; protocols</p>
</div>

---
class: problem-slide-wrap
---

<div class="problem-slide">
  <div class="title-bar">
    <span class="tb-l">P1 — Tools</span>
    <span class="tb-r">service calls / adapter pattern</span>
  </div>
  <div class="dia">
    <svg viewBox="0 0 880 285" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="font-family:system-ui,sans-serif">
      <defs>
        <marker id="ah41" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0,8 3,0 6" fill="#6b7280"/>
        </marker>
      </defs>

      <!-- CASE_AGENT -->
      <rect x="340" y="10" width="200" height="46" rx="8" fill="#1e3a5f" stroke="#4a90d9" stroke-width="2"/>
      <text x="440" y="38" fill="#aecbfa" font-size="14" font-weight="700" text-anchor="middle">CASE_AGENT</text>

      <!-- Agent → tools -->
      <line x1="440" y1="56" x2="107" y2="108" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah41)"/>
      <line x1="440" y1="56" x2="283" y2="108" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah41)"/>
      <line x1="440" y1="56" x2="498" y2="108" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah41)"/>
      <line x1="440" y1="56" x2="788" y2="108" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah41)"/>

      <!-- TOOLS -->
      <rect x="30" y="108" width="154" height="42" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="107" y="134" fill="#a8d5b5" font-size="12" text-anchor="middle">get_account</text>

      <rect x="200" y="108" width="166" height="42" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="283" y="134" fill="#a8d5b5" font-size="12" text-anchor="middle">get_transactions</text>

      <rect x="382" y="108" width="232" height="42" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="498" y="134" fill="#a8d5b5" font-size="12" text-anchor="middle">check_fraud_patterns</text>

      <rect x="718" y="108" width="140" height="42" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="788" y="134" fill="#a8d5b5" font-size="12" text-anchor="middle">hold_card</text>

      <!-- Tools → services -->
      <line x1="107" y1="150" x2="162" y2="210" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah41)"/>
      <line x1="283" y1="150" x2="162" y2="210" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah41)"/>
      <line x1="498" y1="150" x2="498" y2="210" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah41)"/>
      <line x1="788" y1="150" x2="788" y2="210" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah41)"/>

      <!-- Annotation -->
      <text x="540" y="188" fill="#6b7280" font-size="9" text-anchor="start">result: text · data · artifact</text>

      <!-- SERVICES -->
      <rect x="57" y="210" width="210" height="42" rx="6" fill="#211500" stroke="#c47b2a" stroke-width="1.5"/>
      <text x="162" y="236" fill="#f0c87a" font-size="12" text-anchor="middle">Account Service</text>

      <rect x="388" y="210" width="220" height="42" rx="6" fill="#211500" stroke="#c47b2a" stroke-width="1.5"/>
      <text x="498" y="236" fill="#f0c87a" font-size="12" text-anchor="middle">Fraud DB</text>

      <rect x="718" y="210" width="140" height="42" rx="6" fill="#211500" stroke="#c47b2a" stroke-width="1.5"/>
      <text x="788" y="236" fill="#f0c87a" font-size="12" text-anchor="middle">Card Service</text>
    </svg>
  </div>
</div>

```python {8}
def hold_card(card_id: str, reason: str) -> dict:
    """Place a temporary hold on a card. Use when fraud is suspected."""
    return card_service.hold(card_id, reason)

case_agent = LlmAgent(
    model="gemini-2.5-flash",
    name="case_agent",
    tools=[get_account, get_transactions, check_fraud_patterns, hold_card],
)
```

---
class: problem-slide-wrap
---

<div class="problem-slide">
  <div class="title-bar">
    <span class="tb-l">P2 — Sub-agents</span>
    <span class="tb-r">service composition / saga</span>
  </div>
  <div class="dia">
    <svg viewBox="0 0 900 368" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="font-family:system-ui,sans-serif">
      <defs>
        <marker id="ah42" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0,8 3,0 6" fill="#6b7280"/>
        </marker>
      </defs>

      <!-- COMPLAINT_HANDLER_AGENT (orchestrator, PROMOTED) -->
      <rect x="270" y="10" width="295" height="50" rx="8" fill="#0d2240" stroke="#58a6ff" stroke-width="2.5"/>
      <text x="417" y="32" fill="#7dc6ff" font-size="13" font-weight="700" text-anchor="middle">COMPLAINT_HANDLER_AGENT</text>
      <text x="417" y="49" fill="#58a6ff" font-size="10" text-anchor="middle">(orchestrator)</text>

      <!-- Orchestrator → sub-agents + hold_card -->
      <line x1="417" y1="60" x2="112" y2="112" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah42)"/>
      <line x1="417" y1="60" x2="318" y2="112" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah42)"/>
      <line x1="417" y1="60" x2="526" y2="112" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah42)"/>
      <line x1="417" y1="60" x2="798" y2="112" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#ah42)"/>

      <!-- SUB-AGENTS -->
      <rect x="12" y="112" width="200" height="44" rx="8" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1.5"/>
      <text x="112" y="139" fill="#aecbfa" font-size="13" font-weight="600" text-anchor="middle">ACCOUNT_AGENT</text>

      <rect x="228" y="112" width="180" height="44" rx="8" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1.5"/>
      <text x="318" y="139" fill="#aecbfa" font-size="13" font-weight="600" text-anchor="middle">FRAUD_AGENT</text>

      <rect x="424" y="112" width="204" height="44" rx="8" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1.5"/>
      <text x="526" y="139" fill="#aecbfa" font-size="13" font-weight="600" text-anchor="middle">RESPONSE_AGENT</text>

      <!-- hold_card at orchestrator level (tool, green) -->
      <rect x="728" y="112" width="145" height="44" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="800" y="139" fill="#a8d5b5" font-size="13" font-weight="600" text-anchor="middle">hold_card</text>

      <!-- Sub-agent → tools -->
      <line x1="112" y1="156" x2="63" y2="218" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah42)"/>
      <line x1="112" y1="156" x2="173" y2="218" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah42)"/>
      <line x1="318" y1="156" x2="318" y2="218" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah42)"/>
      <line x1="526" y1="156" x2="520" y2="218" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah42)"/>

      <!-- TOOLS -->
      <rect x="12" y="218" width="104" height="40" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="64" y="243" fill="#a8d5b5" font-size="11" text-anchor="middle">get_account</text>

      <rect x="122" y="218" width="104" height="40" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="174" y="232" fill="#a8d5b5" font-size="10" text-anchor="middle">get_</text>
      <text x="174" y="248" fill="#a8d5b5" font-size="10" text-anchor="middle">transactions</text>

      <rect x="228" y="218" width="180" height="40" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="318" y="232" fill="#a8d5b5" font-size="10" text-anchor="middle">check_fraud_</text>
      <text x="318" y="248" fill="#a8d5b5" font-size="10" text-anchor="middle">patterns</text>

      <!-- generate_pdf NEW -->
      <rect x="424" y="218" width="148" height="40" rx="6" fill="#173326" stroke="#f0a500" stroke-width="2"/>
      <text x="498" y="243" fill="#a8d5b5" font-size="11" text-anchor="middle">generate_pdf</text>
      <rect x="544" y="218" width="28" height="16" rx="3" fill="#f0a500"/>
      <text x="558" y="230" fill="#000" font-size="9" font-weight="700" text-anchor="middle">NEW</text>

      <!-- Tools → services -->
      <line x1="64" y1="258" x2="118" y2="318" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah42)"/>
      <line x1="174" y1="258" x2="118" y2="318" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah42)"/>
      <line x1="318" y1="258" x2="318" y2="318" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah42)"/>
      <line x1="498" y1="258" x2="498" y2="318" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah42)"/>
      <!-- hold_card → Card Service (long vertical) -->
      <line x1="800" y1="156" x2="800" y2="318" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah42)"/>

      <!-- SERVICES -->
      <rect x="12" y="318" width="212" height="42" rx="6" fill="#211500" stroke="#c47b2a" stroke-width="1.5"/>
      <text x="118" y="344" fill="#f0c87a" font-size="12" text-anchor="middle">Account Service</text>

      <rect x="228" y="318" width="180" height="42" rx="6" fill="#211500" stroke="#c47b2a" stroke-width="1.5"/>
      <text x="318" y="344" fill="#f0c87a" font-size="12" text-anchor="middle">Fraud DB</text>

      <rect x="424" y="318" width="148" height="42" rx="6" fill="#102828" stroke="#3ecec4" stroke-width="1.5"/>
      <text x="498" y="344" fill="#a0f0ec" font-size="12" text-anchor="middle">📄 PDF artifact</text>

      <rect x="728" y="318" width="145" height="42" rx="6" fill="#211500" stroke="#c47b2a" stroke-width="1.5"/>
      <text x="800" y="344" fill="#f0c87a" font-size="12" text-anchor="middle">Card Service</text>
    </svg>
  </div>
</div>

```python {4}
complaint_handler_agent = LlmAgent(
    model="gemini-2.5-flash",
    name="complaint_handler",
    sub_agents=[account_agent, fraud_agent, response_agent],
    tools=[hold_card],
)
```

---
class: problem-slide-wrap
---

<div class="problem-slide">
  <div class="title-bar">
    <span class="tb-l">P3 — Callbacks</span>
    <span class="tb-r">AOP / interceptors / middleware</span>
  </div>
  <div class="dia">
    <svg viewBox="0 0 900 368" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="font-family:system-ui,sans-serif">
      <defs>
        <marker id="ah43" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0,8 3,0 6" fill="#6b7280"/>
        </marker>
      </defs>

      <!-- audit_log band around orchestrator -->
      <rect x="262" y="3" width="310" height="65" rx="10" fill="rgba(100,20,120,0.12)" stroke="#9b59b6" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="267" y="15" fill="#9b59b6" font-size="9" text-anchor="start">audit_log — before_tool_callback</text>

      <!-- COMPLAINT_HANDLER_AGENT (orchestrator) -->
      <rect x="270" y="10" width="295" height="50" rx="8" fill="#0d2240" stroke="#58a6ff" stroke-width="2.5"/>
      <text x="417" y="32" fill="#7dc6ff" font-size="13" font-weight="700" text-anchor="middle">COMPLAINT_HANDLER_AGENT</text>
      <text x="417" y="49" fill="#58a6ff" font-size="10" text-anchor="middle">(orchestrator)</text>

      <!-- Orchestrator → sub-agents -->
      <line x1="417" y1="60" x2="112" y2="112" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah43)"/>
      <line x1="417" y1="60" x2="318" y2="112" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah43)"/>
      <line x1="417" y1="60" x2="526" y2="112" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah43)"/>

      <!-- Orchestrator → GATE → hold_card -->
      <line x1="565" y1="35" x2="608" y2="70" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah43)"/>
      <line x1="690" y1="90" x2="760" y2="112" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah43)"/>

      <!-- GATE box -->
      <rect x="608" y="68" width="82" height="46" rx="6" fill="#2d1040" stroke="#9b59b6" stroke-width="2"/>
      <text x="649" y="86" fill="#ce9aff" font-size="11" font-weight="700" text-anchor="middle">🔒 GATE</text>
      <text x="649" y="99" fill="#9b59b6" font-size="8.5" text-anchor="middle">human confirm</text>

      <!-- SUB-AGENTS -->
      <rect x="12" y="112" width="200" height="44" rx="8" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1.5"/>
      <text x="112" y="139" fill="#aecbfa" font-size="13" font-weight="600" text-anchor="middle">ACCOUNT_AGENT</text>

      <rect x="228" y="112" width="180" height="44" rx="8" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1.5"/>
      <text x="318" y="139" fill="#aecbfa" font-size="13" font-weight="600" text-anchor="middle">FRAUD_AGENT</text>

      <rect x="424" y="112" width="204" height="44" rx="8" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1.5"/>
      <text x="526" y="139" fill="#aecbfa" font-size="13" font-weight="600" text-anchor="middle">RESPONSE_AGENT</text>

      <!-- hold_card (after gate) -->
      <rect x="760" y="112" width="128" height="44" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="824" y="139" fill="#a8d5b5" font-size="12" font-weight="600" text-anchor="middle">hold_card</text>

      <!-- Sub-agent → tools -->
      <line x1="112" y1="156" x2="63" y2="218" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah43)"/>
      <line x1="112" y1="156" x2="173" y2="218" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah43)"/>
      <line x1="318" y1="156" x2="318" y2="218" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah43)"/>
      <line x1="526" y1="156" x2="520" y2="218" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah43)"/>

      <!-- TOOLS -->
      <rect x="12" y="218" width="104" height="40" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="64" y="243" fill="#a8d5b5" font-size="11" text-anchor="middle">get_account</text>

      <rect x="122" y="218" width="104" height="40" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="174" y="232" fill="#a8d5b5" font-size="10" text-anchor="middle">get_</text>
      <text x="174" y="248" fill="#a8d5b5" font-size="10" text-anchor="middle">transactions</text>

      <rect x="228" y="218" width="180" height="40" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="318" y="232" fill="#a8d5b5" font-size="10" text-anchor="middle">check_fraud_</text>
      <text x="318" y="248" fill="#a8d5b5" font-size="10" text-anchor="middle">patterns</text>

      <rect x="424" y="218" width="148" height="40" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="498" y="243" fill="#a8d5b5" font-size="11" text-anchor="middle">generate_pdf</text>

      <!-- Tools → services -->
      <line x1="64" y1="258" x2="118" y2="318" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah43)"/>
      <line x1="174" y1="258" x2="118" y2="318" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah43)"/>
      <line x1="318" y1="258" x2="318" y2="318" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah43)"/>
      <line x1="498" y1="258" x2="498" y2="318" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah43)"/>
      <line x1="824" y1="156" x2="824" y2="318" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah43)"/>

      <!-- SERVICES -->
      <rect x="12" y="318" width="212" height="42" rx="6" fill="#211500" stroke="#c47b2a" stroke-width="1.5"/>
      <text x="118" y="344" fill="#f0c87a" font-size="12" text-anchor="middle">Account Service</text>

      <rect x="228" y="318" width="180" height="42" rx="6" fill="#211500" stroke="#c47b2a" stroke-width="1.5"/>
      <text x="318" y="344" fill="#f0c87a" font-size="12" text-anchor="middle">Fraud DB</text>

      <rect x="424" y="318" width="148" height="42" rx="6" fill="#102828" stroke="#3ecec4" stroke-width="1.5"/>
      <text x="498" y="344" fill="#a0f0ec" font-size="12" text-anchor="middle">📄 PDF artifact</text>

      <rect x="760" y="318" width="128" height="42" rx="6" fill="#211500" stroke="#c47b2a" stroke-width="1.5"/>
      <text x="824" y="344" fill="#f0c87a" font-size="12" text-anchor="middle">Card Service</text>
    </svg>
  </div>
</div>

```python {6,8,19}
# Cross-cutting: log every tool call. Callback shape.
def audit_tool_call(tool, args, tool_context):
    logger.info(f"{tool.name} called with {args}")

# Targeted: gate a specific tool on human approval.
@long_running_tool
def hold_card(card_id: str, reason: str):
    approval = yield {
        "type": "approval_request",
        "card_id": card_id,
        "reason": reason,
    }
    if not approval["approved"]:
        return {"status": "denied", "by": approval["user"]}
    return card_service.hold(card_id, reason)

complaint_handler_agent = LlmAgent(
    ...
    before_tool_callback=audit_tool_call,
    tools=[hold_card],
)
```

---
class: problem-slide-wrap
---

<div class="problem-slide">
  <div class="title-bar">
    <span class="tb-l">P4 — Sessions &amp; memory</span>
    <span class="tb-r">request scope / database</span>
  </div>
  <div class="dia">
    <svg viewBox="0 0 1080 368" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="font-family:system-ui,sans-serif">
      <defs>
        <marker id="ah44" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0,8 3,0 6" fill="#6b7280"/>
        </marker>
        <marker id="ah44t" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0,8 3,0 6" fill="#3ecec4"/>
        </marker>
      </defs>

      <!-- audit_log band -->
      <rect x="262" y="3" width="310" height="65" rx="10" fill="rgba(100,20,120,0.12)" stroke="#9b59b6" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="267" y="15" fill="#9b59b6" font-size="9" text-anchor="start">audit_log — before_tool_callback</text>

      <!-- COMPLAINT_HANDLER_AGENT -->
      <rect x="270" y="10" width="295" height="50" rx="8" fill="#0d2240" stroke="#58a6ff" stroke-width="2.5"/>
      <text x="417" y="32" fill="#7dc6ff" font-size="13" font-weight="700" text-anchor="middle">COMPLAINT_HANDLER_AGENT</text>
      <text x="417" y="49" fill="#58a6ff" font-size="10" text-anchor="middle">(orchestrator)</text>

      <!-- Orchestrator → sub-agents -->
      <line x1="417" y1="60" x2="112" y2="112" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah44)"/>
      <line x1="417" y1="60" x2="318" y2="112" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah44)"/>
      <line x1="417" y1="60" x2="526" y2="112" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah44)"/>

      <!-- Orchestrator → GATE → hold_card -->
      <line x1="565" y1="35" x2="608" y2="70" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah44)"/>
      <line x1="690" y1="90" x2="760" y2="112" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah44)"/>

      <!-- GATE -->
      <rect x="608" y="68" width="82" height="46" rx="6" fill="#2d1040" stroke="#9b59b6" stroke-width="2"/>
      <text x="649" y="86" fill="#ce9aff" font-size="11" font-weight="700" text-anchor="middle">🔒 GATE</text>
      <text x="649" y="99" fill="#9b59b6" font-size="8.5" text-anchor="middle">human confirm</text>

      <!-- SUB-AGENTS -->
      <rect x="12" y="112" width="200" height="44" rx="8" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1.5"/>
      <text x="112" y="139" fill="#aecbfa" font-size="13" font-weight="600" text-anchor="middle">ACCOUNT_AGENT</text>

      <rect x="228" y="112" width="180" height="44" rx="8" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1.5"/>
      <text x="318" y="139" fill="#aecbfa" font-size="13" font-weight="600" text-anchor="middle">FRAUD_AGENT</text>

      <rect x="424" y="112" width="204" height="44" rx="8" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1.5"/>
      <text x="526" y="139" fill="#aecbfa" font-size="13" font-weight="600" text-anchor="middle">RESPONSE_AGENT</text>

      <rect x="760" y="112" width="128" height="44" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="824" y="139" fill="#a8d5b5" font-size="12" font-weight="600" text-anchor="middle">hold_card</text>

      <!-- Sub-agent → tools -->
      <line x1="112" y1="156" x2="63" y2="218" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah44)"/>
      <line x1="112" y1="156" x2="173" y2="218" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah44)"/>
      <line x1="318" y1="156" x2="318" y2="218" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah44)"/>
      <line x1="526" y1="156" x2="520" y2="218" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah44)"/>

      <!-- TOOLS -->
      <rect x="12" y="218" width="104" height="40" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="64" y="243" fill="#a8d5b5" font-size="11" text-anchor="middle">get_account</text>
      <rect x="122" y="218" width="104" height="40" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="174" y="232" fill="#a8d5b5" font-size="10" text-anchor="middle">get_</text>
      <text x="174" y="248" fill="#a8d5b5" font-size="10" text-anchor="middle">transactions</text>
      <rect x="228" y="218" width="180" height="40" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="318" y="232" fill="#a8d5b5" font-size="10" text-anchor="middle">check_fraud_</text>
      <text x="318" y="248" fill="#a8d5b5" font-size="10" text-anchor="middle">patterns</text>
      <rect x="424" y="218" width="148" height="40" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="498" y="243" fill="#a8d5b5" font-size="11" text-anchor="middle">generate_pdf</text>

      <!-- Tools → services -->
      <line x1="64" y1="258" x2="118" y2="318" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah44)"/>
      <line x1="174" y1="258" x2="118" y2="318" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah44)"/>
      <line x1="318" y1="258" x2="318" y2="318" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah44)"/>
      <line x1="498" y1="258" x2="498" y2="318" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah44)"/>
      <line x1="824" y1="156" x2="824" y2="318" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah44)"/>

      <!-- SERVICES -->
      <rect x="12" y="318" width="212" height="42" rx="6" fill="#211500" stroke="#c47b2a" stroke-width="1.5"/>
      <text x="118" y="344" fill="#f0c87a" font-size="12" text-anchor="middle">Account Service</text>
      <rect x="228" y="318" width="180" height="42" rx="6" fill="#211500" stroke="#c47b2a" stroke-width="1.5"/>
      <text x="318" y="344" fill="#f0c87a" font-size="12" text-anchor="middle">Fraud DB</text>
      <rect x="424" y="318" width="148" height="42" rx="6" fill="#102828" stroke="#3ecec4" stroke-width="1.5"/>
      <text x="498" y="344" fill="#a0f0ec" font-size="12" text-anchor="middle">📄 PDF artifact</text>
      <rect x="760" y="318" width="128" height="42" rx="6" fill="#211500" stroke="#c47b2a" stroke-width="1.5"/>
      <text x="824" y="344" fill="#f0c87a" font-size="12" text-anchor="middle">Card Service</text>

      <!-- ── NEW: STATE box (upper right) ── -->
      <rect x="920" y="72" width="148" height="88" rx="8" fill="#102828" stroke="#3ecec4" stroke-width="2"/>
      <text x="994" y="93" fill="#3ecec4" font-size="12" font-weight="700" text-anchor="middle">STATE</text>
      <text x="994" y="107" fill="#6b7280" font-size="9" text-anchor="middle">this session</text>
      <text x="994" y="123" fill="#a0f0ec" font-size="10" text-anchor="middle">draft_response</text>
      <text x="994" y="137" fill="#a0f0ec" font-size="10" text-anchor="middle">customer_id</text>
      <text x="994" y="151" fill="#6b7280" font-size="10" text-anchor="middle">...</text>

      <!-- Dashed line: orchestrator → STATE -->
      <path d="M 417 10 C 600 -5 820 10 920 115" fill="none" stroke="#3ecec4" stroke-width="1.5" stroke-dasharray="6,4"/>

      <!-- ── NEW: MEMORY_SERVICE box (lower right) ── -->
      <!-- Cylinder top -->
      <ellipse cx="994" cy="270" rx="74" ry="12" fill="#1e1000" stroke="#e07020" stroke-width="2"/>
      <rect x="920" y="270" width="148" height="82" fill="#1e1000" stroke="#e07020" stroke-width="2" stroke-top="none"/>
      <line x1="920" y1="270" x2="920" y2="352" stroke="#e07020" stroke-width="2"/>
      <line x1="1068" y1="270" x2="1068" y2="352" stroke="#e07020" stroke-width="2"/>
      <ellipse cx="994" cy="352" rx="74" ry="12" fill="#1e1000" stroke="#e07020" stroke-width="2"/>
      <text x="994" y="295" fill="#e07020" font-size="11" font-weight="700" text-anchor="middle">MEMORY_SERVICE</text>
      <text x="994" y="309" fill="#6b7280" font-size="9" text-anchor="middle">long-term</text>
      <text x="994" y="325" fill="#f0a060" font-size="10" text-anchor="middle">past complaints</text>
      <text x="994" y="339" fill="#f0a060" font-size="10" text-anchor="middle">patterns</text>

      <!-- Solid arrow: STATE → MEMORY, labeled "session ends" -->
      <line x1="994" y1="160" x2="994" y2="258" stroke="#3ecec4" stroke-width="2" marker-end="url(#ah44t)"/>
      <text x="1000" y="215" fill="#3ecec4" font-size="9" text-anchor="start">session ends</text>
    </svg>
  </div>
</div>

```python {2,5-9}
# Inside a tool — short-term state for this conversation
tool_context.state["draft_response"] = text

# After resolution — keep what's useful next time
memory_service.add(
    customer_id=session.state["customer_id"],
    summary=session.state["resolution_summary"],
    tags=["fraud_hold", "disputed_transaction"],
)
```

---
class: dia-slide
---

<div class="title-bar">
  <span class="tb-l">P5 — Protocols</span>
  <span class="tb-r">designed for LLMs / OpenAPI for agents</span>
</div>
<div class="dia-full">
  <svg viewBox="0 0 1120 418" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="font-family:system-ui,sans-serif">
    <defs>
      <marker id="ah45" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0,8 3,0 6" fill="#4b5563"/>
      </marker>
      <marker id="ah45e" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0,8 3,0 6" fill="#8b949e"/>
      </marker>
    </defs>

    <!-- ── INNER SYSTEM dimmed at 0.4 ── -->
    <g opacity="0.38">
      <!-- audit band -->
      <rect x="262" y="3" width="310" height="65" rx="10" fill="rgba(100,20,120,0.12)" stroke="#9b59b6" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="267" y="15" fill="#9b59b6" font-size="9">audit_log — before_tool_callback</text>
      <!-- Orchestrator -->
      <rect x="270" y="10" width="295" height="50" rx="8" fill="#0d2240" stroke="#58a6ff" stroke-width="2"/>
      <text x="417" y="32" fill="#7dc6ff" font-size="13" font-weight="700" text-anchor="middle">COMPLAINT_HANDLER_AGENT</text>
      <text x="417" y="49" fill="#58a6ff" font-size="10" text-anchor="middle">(orchestrator)</text>
      <!-- Arrows orch→subs -->
      <line x1="417" y1="60" x2="112" y2="112" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah45)"/>
      <line x1="417" y1="60" x2="318" y2="112" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah45)"/>
      <line x1="417" y1="60" x2="526" y2="112" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah45)"/>
      <line x1="565" y1="35" x2="608" y2="70" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah45)"/>
      <line x1="690" y1="90" x2="760" y2="112" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah45)"/>
      <!-- GATE -->
      <rect x="608" y="68" width="82" height="46" rx="6" fill="#2d1040" stroke="#9b59b6" stroke-width="1.5"/>
      <text x="649" y="86" fill="#ce9aff" font-size="10" text-anchor="middle">🔒 GATE</text>
      <!-- Sub-agents -->
      <rect x="12" y="112" width="200" height="44" rx="8" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1.5"/>
      <text x="112" y="139" fill="#aecbfa" font-size="12" text-anchor="middle">ACCOUNT_AGENT</text>
      <rect x="228" y="112" width="180" height="44" rx="8" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1.5"/>
      <text x="318" y="139" fill="#aecbfa" font-size="12" text-anchor="middle">FRAUD_AGENT</text>
      <rect x="424" y="112" width="204" height="44" rx="8" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1.5"/>
      <text x="526" y="139" fill="#aecbfa" font-size="12" text-anchor="middle">RESPONSE_AGENT</text>
      <rect x="760" y="112" width="128" height="44" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="824" y="139" fill="#a8d5b5" font-size="12" text-anchor="middle">hold_card</text>
      <!-- Subs → tools -->
      <line x1="112" y1="156" x2="63" y2="218" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah45)"/>
      <line x1="112" y1="156" x2="173" y2="218" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah45)"/>
      <line x1="318" y1="156" x2="318" y2="218" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah45)"/>
      <line x1="526" y1="156" x2="520" y2="218" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah45)"/>
      <!-- Tools -->
      <rect x="12" y="218" width="104" height="40" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="64" y="243" fill="#a8d5b5" font-size="11" text-anchor="middle">get_account</text>
      <rect x="122" y="218" width="104" height="40" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="174" y="240" fill="#a8d5b5" font-size="10" text-anchor="middle">get_transactions</text>
      <rect x="228" y="218" width="180" height="40" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="318" y="243" fill="#a8d5b5" font-size="10" text-anchor="middle">check_fraud_patterns</text>
      <rect x="424" y="218" width="148" height="40" rx="6" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="498" y="243" fill="#a8d5b5" font-size="11" text-anchor="middle">generate_pdf</text>
      <!-- Tools → services -->
      <line x1="64" y1="258" x2="118" y2="318" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah45)"/>
      <line x1="174" y1="258" x2="118" y2="318" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah45)"/>
      <line x1="318" y1="258" x2="318" y2="318" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah45)"/>
      <line x1="498" y1="258" x2="498" y2="318" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah45)"/>
      <line x1="824" y1="156" x2="824" y2="318" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah45)"/>
      <!-- Services -->
      <rect x="12" y="318" width="212" height="42" rx="6" fill="#211500" stroke="#c47b2a" stroke-width="1.5"/>
      <text x="118" y="344" fill="#f0c87a" font-size="12" text-anchor="middle">Account Service</text>
      <rect x="424" y="318" width="148" height="42" rx="6" fill="#102828" stroke="#3ecec4" stroke-width="1.5"/>
      <text x="498" y="344" fill="#a0f0ec" font-size="12" text-anchor="middle">📄 PDF artifact</text>
      <rect x="760" y="318" width="128" height="42" rx="6" fill="#211500" stroke="#c47b2a" stroke-width="1.5"/>
      <text x="824" y="344" fill="#f0c87a" font-size="12" text-anchor="middle">Card Service</text>
      <!-- STATE + MEMORY (dimmed) -->
      <rect x="920" y="72" width="148" height="88" rx="8" fill="#102828" stroke="#3ecec4" stroke-width="1.5"/>
      <text x="994" y="93" fill="#3ecec4" font-size="11" font-weight="700" text-anchor="middle">STATE</text>
      <ellipse cx="994" cy="270" rx="74" ry="10" fill="#1e1000" stroke="#e07020" stroke-width="1.5"/>
      <rect x="920" y="270" width="148" height="70" fill="#1e1000" stroke-left="#e07020" stroke-right="#e07020" stroke-width="0"/>
      <line x1="920" y1="270" x2="920" y2="340" stroke="#e07020" stroke-width="1.5"/>
      <line x1="1068" y1="270" x2="1068" y2="340" stroke="#e07020" stroke-width="1.5"/>
      <ellipse cx="994" cy="340" rx="74" ry="10" fill="#1e1000" stroke="#e07020" stroke-width="1.5"/>
      <text x="994" y="295" fill="#e07020" font-size="10" font-weight="700" text-anchor="middle">MEMORY_SERVICE</text>
    </g>

    <!-- ── EXTERNAL + PROTOCOL PILLS at full opacity ── -->

    <!-- Fraud DB (vendor) — external styling, replaces dimmed Fraud DB -->
    <rect x="228" y="318" width="180" height="42" rx="6" fill="#1a1a20" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
    <text x="318" y="337" fill="#8b949e" font-size="11" text-anchor="middle">Fraud DB</text>
    <text x="318" y="352" fill="#6b7280" font-size="10" text-anchor="middle">(vendor / Risk team)</text>

    <!-- MCP pill: on boundary of check_fraud_patterns ↔ Fraud DB (vendor) -->
    <rect x="295" y="279" width="46" height="22" rx="11" fill="#1c2128" stroke="#58a6ff" stroke-width="2"/>
    <text x="318" y="294" fill="#58a6ff" font-size="11" font-weight="700" text-anchor="middle">MCP</text>

    <!-- Customer Comms Agent (other team) — external agent -->
    <rect x="648" y="112" width="90" height="44" rx="0" fill="none"/>
    <!-- Arrow from RESPONSE_AGENT curving to Customer Comms Agent -->
    <path d="M 628 134 C 680 200 840 200 905 134" fill="none" stroke="#8b949e" stroke-width="2" stroke-dasharray="0" marker-end="url(#ah45e)"/>
    <!-- External agent box -->
    <rect x="900" y="112" width="196" height="44" rx="8" fill="#1a1a20" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
    <text x="998" y="130" fill="#8b949e" font-size="11" text-anchor="middle">Customer Comms Agent</text>
    <text x="998" y="147" fill="#6b7280" font-size="10" text-anchor="middle">(other team)</text>

    <!-- A2A pill: on the curved arrow -->
    <rect x="770" y="188" width="46" height="22" rx="11" fill="#1c2128" stroke="#58a6ff" stroke-width="2"/>
    <text x="793" y="203" fill="#58a6ff" font-size="11" font-weight="700" text-anchor="middle">A2A</text>

    <!-- ── Comparison strip (bottom) ── -->
    <line x1="20" y1="374" x2="1100" y2="374" stroke="#30363d" stroke-width="1"/>
    <!-- Three cells -->
    <text x="290" y="390" fill="#6b7280" font-size="10" font-weight="600" text-anchor="middle">REST API</text>
    <text x="290" y="403" fill="#4b5563" font-size="9" text-anchor="middle">every consumer · full surface · bytes on the wire</text>
    <line x1="560" y1="376" x2="560" y2="418" stroke="#30363d" stroke-width="1"/>
    <text x="840" y="390" fill="#58a6ff" font-size="10" font-weight="600" text-anchor="middle">MCP</text>
    <text x="840" y="403" fill="#6b7280" font-size="9" text-anchor="middle">the LLM · curated surface · tokens in the window</text>
  </svg>
</div>

---
class: dia-slide
---

<div class="title-bar">
  <span class="tb-l">Events</span>
  <span class="tb-r">the bus underneath</span>
</div>
<div class="dia-full">
  <svg viewBox="0 0 920 370" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="font-family:system-ui,sans-serif">
    <defs>
      <marker id="ah46" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
        <polygon points="0 0,7 2.5,0 5" fill="#6b7280"/>
      </marker>
    </defs>

    <!-- ── TOP: miniaturized schematic (~25% of slide) ── -->
    <g opacity="0.45" transform="scale(0.55) translate(170, 10)">
      <!-- Orchestrator -->
      <rect x="270" y="10" width="220" height="38" rx="6" fill="#0d2240" stroke="#58a6ff" stroke-width="2"/>
      <text x="380" y="33" fill="#7dc6ff" font-size="16" text-anchor="middle">Orchestrator</text>
      <!-- Sub-agents -->
      <rect x="30" y="80" width="140" height="34" rx="5" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1.5"/>
      <text x="100" y="101" fill="#aecbfa" font-size="13" text-anchor="middle">Account</text>
      <rect x="245" y="80" width="140" height="34" rx="5" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1.5"/>
      <text x="315" y="101" fill="#aecbfa" font-size="13" text-anchor="middle">Fraud</text>
      <rect x="460" y="80" width="160" height="34" rx="5" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1.5"/>
      <text x="540" y="101" fill="#aecbfa" font-size="13" text-anchor="middle">Response</text>
      <!-- audit band hint -->
      <rect x="263" y="3" width="230" height="52" rx="8" fill="none" stroke="#9b59b6" stroke-width="1.5" stroke-dasharray="4,3"/>
      <!-- GATE -->
      <rect x="640" y="12" width="60" height="34" rx="5" fill="#2d1040" stroke="#9b59b6" stroke-width="1.5"/>
      <text x="670" y="33" fill="#ce9aff" font-size="12" text-anchor="middle">🔒</text>
      <!-- hold_card tool -->
      <rect x="720" y="12" width="90" height="34" rx="4" fill="#173326" stroke="#3cad72" stroke-width="1.5"/>
      <text x="765" y="33" fill="#a8d5b5" font-size="12" text-anchor="middle">hold_card</text>
    </g>

    <!-- Vertical dotted drop-lines from schematic to event stream -->
    <line x1="210" y1="88" x2="210" y2="148" stroke="#374151" stroke-width="1" stroke-dasharray="3,3"/>
    <line x1="415" y1="88" x2="415" y2="148" stroke="#374151" stroke-width="1" stroke-dasharray="3,3"/>
    <line x1="644" y1="88" x2="644" y2="148" stroke="#374151" stroke-width="1" stroke-dasharray="3,3"/>

    <!-- ── MIDDLE: EVENT STREAM ── -->
    <rect x="10" y="148" width="900" height="72" rx="8" fill="#0d1a26" stroke="#30363d" stroke-width="1.5"/>
    <text x="16" y="141" fill="#8b949e" font-size="10" font-weight="600" letter-spacing="2">EVENT STREAM</text>

    <!-- Event tokens -->
    <!-- 1: user_message -->
    <rect x="18" y="160" width="88" height="24" rx="12" fill="#1c2128" stroke="#374151" stroke-width="1"/>
    <text x="62" y="176" fill="#8b949e" font-size="9" text-anchor="middle">user_message</text>
    <line x1="106" y1="172" x2="118" y2="172" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah46)"/>

    <!-- 2: llm_request -->
    <rect x="120" y="160" width="82" height="24" rx="12" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1"/>
    <text x="161" y="176" fill="#aecbfa" font-size="9" text-anchor="middle">llm_request</text>
    <line x1="202" y1="172" x2="214" y2="172" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah46)"/>

    <!-- 3: tool_call -->
    <rect x="216" y="160" width="88" height="24" rx="12" fill="#173326" stroke="#3cad72" stroke-width="1"/>
    <text x="260" y="172" fill="#a8d5b5" font-size="9" text-anchor="middle">tool_call</text>
    <text x="260" y="182" fill="#a8d5b5" font-size="8" text-anchor="middle">[get_account]</text>
    <line x1="304" y1="172" x2="316" y2="172" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah46)"/>

    <!-- 4: tool_response -->
    <rect x="318" y="160" width="82" height="24" rx="12" fill="#173326" stroke="#3cad72" stroke-width="1"/>
    <text x="359" y="176" fill="#a8d5b5" font-size="9" text-anchor="middle">tool_response</text>
    <line x1="400" y1="172" x2="412" y2="172" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah46)"/>

    <!-- 5: llm_request -->
    <rect x="414" y="160" width="82" height="24" rx="12" fill="#1e3a5f" stroke="#4a90d9" stroke-width="1"/>
    <text x="455" y="176" fill="#aecbfa" font-size="9" text-anchor="middle">llm_request</text>
    <line x1="496" y1="172" x2="508" y2="172" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah46)"/>

    <!-- 6: tool_call(hold_card) -->
    <rect x="510" y="160" width="90" height="24" rx="12" fill="#2d1040" stroke="#9b59b6" stroke-width="1"/>
    <text x="555" y="172" fill="#ce9aff" font-size="9" text-anchor="middle">tool_call</text>
    <text x="555" y="182" fill="#9b59b6" font-size="8" text-anchor="middle">[hold_card]</text>
    <line x1="600" y1="172" x2="612" y2="172" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah46)"/>

    <!-- 7: approval_request + PAUSED -->
    <rect x="614" y="156" width="100" height="32" rx="6" fill="#2d1040" stroke="#9b59b6" stroke-width="2"/>
    <text x="664" y="170" fill="#ce9aff" font-size="9" font-weight="700" text-anchor="middle">approval_req</text>
    <text x="664" y="182" fill="#f0a500" font-size="9" text-anchor="middle">⏸ paused</text>
    <line x1="714" y1="172" x2="726" y2="172" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#ah46)"/>

    <!-- 8: approval_response + resume -->
    <rect x="728" y="160" width="92" height="24" rx="12" fill="#173326" stroke="#3cad72" stroke-width="1"/>
    <text x="774" y="172" fill="#a8d5b5" font-size="9" text-anchor="middle">approval_resp</text>
    <text x="774" y="182" fill="#3cad72" font-size="8" text-anchor="middle">▶ resumed</text>
    <line x1="820" y1="172" x2="832" y2="172" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ah46)"/>

    <!-- 9: final_response -->
    <rect x="834" y="160" width="68" height="24" rx="12" fill="#1c2128" stroke="#58a6ff" stroke-width="1.5"/>
    <text x="868" y="176" fill="#58a6ff" font-size="9" text-anchor="middle">final_resp</text>

    <!-- ── BOTTOM: three property labels ── -->
    <text x="155" y="252" fill="#e6edf3" font-size="14" font-weight="600" text-anchor="middle">observability</text>
    <text x="155" y="270" fill="#8b949e" font-size="10" text-anchor="middle">every action is already logged</text>

    <line x1="310" y1="240" x2="310" y2="280" stroke="#30363d" stroke-width="1"/>

    <text x="460" y="252" fill="#e6edf3" font-size="14" font-weight="600" text-anchor="middle">persistence</text>
    <text x="460" y="270" fill="#8b949e" font-size="10" text-anchor="middle">state is a projection of events</text>

    <line x1="610" y1="240" x2="610" y2="280" stroke="#30363d" stroke-width="1"/>

    <text x="765" y="252" fill="#e6edf3" font-size="14" font-weight="600" text-anchor="middle">resumability</text>
    <text x="765" y="270" fill="#8b949e" font-size="10" text-anchor="middle">pause → persist → resume anywhere</text>

    <!-- Separator line -->
    <line x1="20" y1="238" x2="900" y2="238" stroke="#30363d" stroke-width="1"/>

    <!-- Drop lines from event tokens to label areas -->
    <line x1="161" y1="220" x2="155" y2="238" stroke="#374151" stroke-width="1" stroke-dasharray="2,2"/>
    <line x1="460" y1="220" x2="460" y2="238" stroke="#374151" stroke-width="1" stroke-dasharray="2,2"/>
    <line x1="664" y1="220" x2="765" y2="238" stroke="#374151" stroke-width="1" stroke-dasharray="2,2"/>
  </svg>
</div>
