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

<div class="title-bar">
  <span class="tb-l">P1 — Tools</span>
  <span class="tb-r">service calls / adapter pattern</span>
</div>

```mermaid
flowchart TD
    CA["CASE_AGENT"]:::agent

    GA["get_account"]:::tool
    GT["get_transactions"]:::tool
    CFP["check_fraud_patterns"]:::tool
    HC["hold_card"]:::tool

    AS["Account Service"]:::svc
    FDB["Fraud DB"]:::svc
    CS["Card Service"]:::svc

    CA --> GA & GT & CFP & HC
    GA & GT --> AS
    CFP --> FDB
    HC --> CS

    classDef agent fill:#1e3a5f,stroke:#4a90d9,color:#aecbfa,font-weight:700
    classDef tool fill:#173326,stroke:#3cad72,color:#a8d5b5
    classDef svc fill:#211500,stroke:#c47b2a,color:#f0c87a
```

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

<div class="title-bar">
  <span class="tb-l">P2 — Sub-agents</span>
  <span class="tb-r">service composition / saga</span>
</div>

```mermaid
flowchart TD
    ORCH["COMPLAINT_HANDLER_AGENT\n(orchestrator)"]:::orch

    AA["ACCOUNT_AGENT"]:::agent
    FA["FRAUD_AGENT"]:::agent
    RA["RESPONSE_AGENT"]:::agent
    HC["hold_card"]:::tool

    GA["get_account"]:::tool
    GT["get_transactions"]:::tool
    CFP["check_fraud_patterns"]:::tool
    GPDF["generate_pdf ★"]:::toolnew

    AS["Account Service"]:::svc
    FDB["Fraud DB"]:::svc
    PDF["📄 PDF artifact"]:::artifact
    CS["Card Service"]:::svc

    ORCH --> AA & FA & RA
    ORCH -.->|direct| HC
    AA --> GA & GT
    FA --> CFP
    RA --> GPDF
    GA & GT --> AS
    CFP --> FDB
    GPDF --> PDF
    HC --> CS

    classDef orch fill:#0d2240,stroke:#58a6ff,color:#7dc6ff,font-weight:700
    classDef agent fill:#1e3a5f,stroke:#4a90d9,color:#aecbfa,font-weight:600
    classDef tool fill:#173326,stroke:#3cad72,color:#a8d5b5
    classDef toolnew fill:#173326,stroke:#f0a500,color:#a8d5b5,font-weight:700
    classDef svc fill:#211500,stroke:#c47b2a,color:#f0c87a
    classDef artifact fill:#102828,stroke:#3ecec4,color:#a0f0ec
```

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

<div class="title-bar">
  <span class="tb-l">P3 — Callbacks</span>
  <span class="tb-r">AOP / interceptors / middleware</span>
</div>

```mermaid
flowchart TD
    subgraph audit["audit_log — before_tool_callback"]
        ORCH["COMPLAINT_HANDLER_AGENT\n(orchestrator)"]:::orch
    end

    GATE["🔒 GATE\nhuman confirm"]:::gate
    AA["ACCOUNT_AGENT"]:::agent
    FA["FRAUD_AGENT"]:::agent
    RA["RESPONSE_AGENT"]:::agent
    HC["hold_card"]:::tool

    GA["get_account"]:::tool
    GT["get_transactions"]:::tool
    CFP["check_fraud_patterns"]:::tool
    GPDF["generate_pdf"]:::tool

    AS["Account Service"]:::svc
    FDB["Fraud DB"]:::svc
    PDF["📄 PDF artifact"]:::artifact
    CS["Card Service"]:::svc

    ORCH --> AA & FA & RA
    ORCH --> GATE --> HC
    AA --> GA & GT
    FA --> CFP
    RA --> GPDF
    GA & GT --> AS
    CFP --> FDB
    GPDF --> PDF
    HC --> CS

    classDef orch fill:#0d2240,stroke:#58a6ff,color:#7dc6ff,font-weight:700
    classDef agent fill:#1e3a5f,stroke:#4a90d9,color:#aecbfa,font-weight:600
    classDef tool fill:#173326,stroke:#3cad72,color:#a8d5b5
    classDef svc fill:#211500,stroke:#c47b2a,color:#f0c87a
    classDef artifact fill:#102828,stroke:#3ecec4,color:#a0f0ec
    classDef gate fill:#2d1040,stroke:#9b59b6,color:#ce9aff,font-weight:700
```

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

<div class="title-bar">
  <span class="tb-l">P4 — Sessions &amp; memory</span>
  <span class="tb-r">request scope / database</span>
</div>

```mermaid
flowchart TD
    subgraph audit["audit_log — before_tool_callback"]
        ORCH["COMPLAINT_HANDLER_AGENT\n(orchestrator)"]:::orch
    end

    STATE["STATE\ndraft_response · customer_id …"]:::state
    MEM[("MEMORY_SERVICE\npast complaints · patterns")]:::memory

    GATE["🔒 GATE\nhuman confirm"]:::gate
    AA["ACCOUNT_AGENT"]:::agent
    FA["FRAUD_AGENT"]:::agent
    RA["RESPONSE_AGENT"]:::agent
    HC["hold_card"]:::tool

    GA["get_account"]:::tool
    GT["get_transactions"]:::tool
    CFP["check_fraud_patterns"]:::tool
    GPDF["generate_pdf"]:::tool

    AS["Account Service"]:::svc
    FDB["Fraud DB"]:::svc
    PDF["📄 PDF artifact"]:::artifact
    CS["Card Service"]:::svc

    ORCH <--> STATE
    ORCH -. "session ends" .-> MEM
    ORCH --> AA & FA & RA
    ORCH --> GATE --> HC
    AA --> GA & GT
    FA --> CFP
    RA --> GPDF
    GA & GT --> AS
    CFP --> FDB
    GPDF --> PDF
    HC --> CS

    classDef orch fill:#0d2240,stroke:#58a6ff,color:#7dc6ff,font-weight:700
    classDef agent fill:#1e3a5f,stroke:#4a90d9,color:#aecbfa,font-weight:600
    classDef tool fill:#173326,stroke:#3cad72,color:#a8d5b5
    classDef svc fill:#211500,stroke:#c47b2a,color:#f0c87a
    classDef artifact fill:#102828,stroke:#3ecec4,color:#a0f0ec
    classDef gate fill:#2d1040,stroke:#9b59b6,color:#ce9aff,font-weight:700
    classDef state fill:#102828,stroke:#3ecec4,color:#a0f0ec,font-weight:700
    classDef memory fill:#1e1000,stroke:#e07020,color:#f0a060
```

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

```mermaid
flowchart TD
    subgraph audit["audit_log — before_tool_callback"]
        ORCH["COMPLAINT_HANDLER_AGENT\n(orchestrator)"]:::orch
    end

    GATE["🔒 GATE"]:::gate
    AA["ACCOUNT_AGENT"]:::agent
    FA["FRAUD_AGENT"]:::agent
    RA["RESPONSE_AGENT"]:::agent
    HC["hold_card"]:::tool

    GA["get_account"]:::tool
    GT["get_transactions"]:::tool
    CFP["check_fraud_patterns"]:::tool
    GPDF["generate_pdf"]:::tool

    AS["Account Service"]:::svc
    FDB["Fraud DB\n(vendor / Risk team)"]:::ext
    PDF["📄 PDF artifact"]:::artifact
    CS["Card Service"]:::svc
    CCA["Customer Comms Agent\n(other team)"]:::ext

    ORCH --> AA & FA & RA
    ORCH --> GATE --> HC
    AA --> GA & GT
    FA --> CFP
    RA --> GPDF
    RA -->|A2A| CCA
    GA & GT --> AS
    CFP -->|MCP| FDB
    GPDF --> PDF
    HC --> CS

    classDef orch fill:#0d2240,stroke:#58a6ff,color:#7dc6ff,font-weight:700
    classDef agent fill:#1e3a5f,stroke:#4a90d9,color:#aecbfa,font-weight:600
    classDef tool fill:#173326,stroke:#3cad72,color:#a8d5b5
    classDef svc fill:#211500,stroke:#c47b2a,color:#f0c87a
    classDef artifact fill:#102828,stroke:#3ecec4,color:#a0f0ec
    classDef gate fill:#2d1040,stroke:#9b59b6,color:#ce9aff,font-weight:700
    classDef ext fill:#1a1a20,stroke:#555,color:#8b949e,stroke-dasharray:5 5
```

---
class: dia-slide
---

<div class="title-bar">
  <span class="tb-l">Events</span>
  <span class="tb-r">the bus underneath</span>
</div>

```mermaid
sequenceDiagram
    actor U as USER
    participant A as AGENT
    participant T as TOOLS
    participant H as 🧑 HUMAN

    U->>A: user_message
    activate A
    A->>T: tool_call — get_account
    T-->>A: tool_response
    A->>T: tool_call — hold_card
    activate H
    T-->>H: ⏸ approval_request
    H-->>T: ▶ approval_response
    deactivate H
    T-->>A: result
    deactivate A
    A-->>U: final_response
```

<div class="event-props">
  <span><b>observability</b> — every action is already logged</span>
  <span><b>persistence</b> — state is a projection of events</span>
  <span><b>resumability</b> — pause → persist → resume anywhere</span>
</div>
