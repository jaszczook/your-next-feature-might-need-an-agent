# SLIDE 5.2 — AUTONOMY BOUNDARIES

**Title bar:** `C2 — Autonomy boundaries | authorization`

---

## Diagram

A focused close-up of the card-hold gate from P3, lifted out of the system and given its own slide. Visual hierarchy: the gate is larger than the thing it gates.

```
        [agent decides: hold card?]
                     ↓
        ┌────────────────────────────┐
        │  🔒  HUMAN APPROVAL        │  ← large, dominant, heavy border
        │   analyst reviews          │
        │   → approve / deny         │
        └────────────────────────────┘
                     ↓
               [hold_card]
                     ↓
               [Card Service]
```

To one side of the central gate, three small inline label tags:  
**authorization · audit · accountability**

## Design Notes

The three "A" labels are an alliterative mnemonic. Keep them as **inline tags**, not a bulleted list.

---

## Spoken

"Second one. Autonomy boundaries. The card-hold gate we kept coming back to in the deep-dive — here's where I name what it actually is. It's authorization. It's the exact same question you ask every time you build any feature in this bank: who is allowed to do this thing, under what conditions, with what trail? Except the actor isn't a user clicking a button — it's an agent calling a tool.

[point at the three labels — beat]

Authorization. Audit. Accountability. Three things you already build into every sensitive endpoint. The vocabulary doesn't change. What changes is where the actor sits. When a user freezes a card, you have user IDs, session tokens, RBAC, the whole stack. When an agent freezes a card, you need the same controls, plus a human approval gate, plus a complete record of what the agent saw before it decided.

The recalibration here is: every place you would normally put an authorization check on a user, you might now also need one on an agent. And the more autonomous the agent — the longer the leash — the more these gates matter. We extended the leash on our coding assistants over two years because they can't actually move customer money. The leash on a complaint-handling agent at a bank lives forever in tension with the size of the action.

Long leash overall, short leash where it counts. That's the whole game."

**Duration:** ~75 seconds.
