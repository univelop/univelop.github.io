---
layout: workflow-step
title: Check Out
parent: Benutzerinteraktion
grand_parent: Workflows
icon: check_circle
nav_order: 2
redirect_from:
    - /docs/workflows/grand-childs-bricks/check-out.html
    - /docs/workflows/advanced/checkout.html
---

Mit dem Schritt _Check Out_ wird ein Popup mit Titel, Nachricht und einem Button zur Rückkehr auf die Hauptseite angezeigt. Er eignet sich als Abschluss eines Workflows, um den Benutzer nach erfolgreicher Einreichung zurück zum Homescreen zu leiten.

## Einstellungen

1. **Titel** — Der Titel des Popups. Kann dynamisch mit `${}` gestaltet werden.
2. **Nachricht** — Der Nachrichtentext. Kann dynamisch mit `${}` gestaltet werden.

## Hinweise

- Nur in **Client-Automatisierungen** verfügbar — nicht auf dem Server ausführbar.
- Dieser Schritt verbraucht keine [Credits](/docs/credits).

## Verwandte Schritte

- [Zeige Nachricht](/docs/workflows/user-interaction/message) — Für reine Informationsanzeige ohne Navigation
