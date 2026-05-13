SLIDE 5.3 — COST, LATENCY, DEPLOYMENT
TITLE BAR:
C3 — Cost, latency, deployment        sizing decisions
DIAGRAM:

Three equal columns, same visual structure across all three.
Each column has a header, a small icon, and a one-sentence
recalibration in "not X — Y" format.
COLUMN 1:
COST
💰
not CPU-hours
— tokens
COLUMN 2:
LATENCY
⏱
not p99 of one call
— a loop of N calls
COLUMN 3:
DEPLOYMENT
🚀
not a service —
a service that thinks

DESIGN NOTE: The icons are decorative; the teaching is in the text.
The "not X — Y" parallel structure across all three columns makes the
lesson visible at a glance.
SPOKEN:
"Last one. Cost, latency, deployment. These I'm grouping because
they're all the same kind of thing — sizing decisions you already make
about any system, with the variables shifted.
[point at cost — beat] Cost: you used to count CPU-hours. Now you
count tokens. And tokens scale with how long the conversation runs
and how many tool calls happen inside one user request. A long-leashed
agent costs more than a short-leashed one. That's not a problem; it's
just a budget line you didn't have before.
[point at latency — beat] Latency: you used to look at p99 of a single
API call. Now you're looking at p99 of a loop. Each turn of the loop
is a model call, sometimes plus a tool call. Three turns means three
latencies stacked. The user feels the sum.
[point at deployment — beat] Deployment: it's not quite a service the
way you're used to. It's a service that thinks for a while between
the request and the response. State has to live somewhere, sessions
have to survive, and the autoscaling story is weirder than it is for
a stateless web service.
None of these are new disciplines. They're the same questions you ask
about any system, with new variables plugged in. You'll get used to
the variables fast — most of you already have, in your dev assistant,
where you've been making cost-versus-leash tradeoffs for two years
whether you noticed or not."
DURATION: ~85 seconds.
================================================================
