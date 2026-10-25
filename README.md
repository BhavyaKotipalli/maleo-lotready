# LotReady

A Maleo workflow concept: from material evidence to buyer-ready lots.

LotReady is a hackathon prototype for the Maleo Systems "Node → Oxide: Solve for the Pilot Customer" challenge. It proposes a step between Node (material identification and grading) and Oxide (scrap brokerage) that checks a lot's evidence against one buyer's requirements, instead of giving it a single trust score.

> **Pilot prototype with synthetic demo data.** All lots, buyers, people and tickets are fictional. It is not integrated with Node or Oxide, and no AI model runs; the AI suggestion is labelled as simulated inference.

## Run it

Open `index.html` in a browser. There is nothing to install and no build step. State is kept in the browser's local storage when it is available; **Reset demo** restores the starting data.

## What it does

- **Node intake:** imports a simulated Node record and keeps the AI suggestion, the seller's declaration and reviewed evidence separate.
- **Buyer readiness:** marks each buyer requirement Pass, Missing or Fail, with its evidence, reason and next action. The same lot gives different results for a general recycler and an alloy-specific buyer.
- **Evidence scope:** an operator reviewing a sample reading is a separate check from whether that sampling scope is enough for the buyer. Spot readings pass only when the buyer's (fictional) policy accepts that scope.
- **Evidence passport:** claims with sources, evidence with scope, limitations, review record and a local event log. Exports as JSON.
- **Oxide listing:** a draft listing can be previewed at any stage; publishing to the local demo exchange unlocks only when every requirement passes and the review is current. Any later edit makes the review stale and withdraws the listing.
- **Present:** a four-slide presentation mode with speaker notes and keyboard navigation.

## Tests

```bash
node tests/check.js
node tests/smoke.js
```

`check.js` exercises the readiness rules (missing vs contradictory evidence, stale reviews, publishing gates, unit conversion, reset). `smoke.js` renders every screen through a stub DOM and walks the aluminium demo journey.

## Not built (proposed)

A shared lot ID linking real Node records and Oxide listings, an API with PostgreSQL for lots, requirements, evidence metadata and review events, object storage for evidence files, and an optional Python/PyTorch suggestion service. Requirements stay rule-based, with people reviewing evidence.
