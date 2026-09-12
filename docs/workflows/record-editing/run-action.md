---
layout: workflow-step
title: Führe Aktion aus
parent: Einträge bearbeiten
grand_parent: Workflows
icon: ads_click
nav_order: 3
redirect_from:
    - /docs/workflows/grand-childs-bricks/run-action.html
    - /docs/workflows/advanced/run-action.html
---

Mit dem Schritt _Führe Aktion aus_ wird die Aktion eines bestimmten Bausteins in einem Datensatz ausgelöst. Dies entspricht der manuellen Betätigung des Bausteins durch den Benutzer, z. B. das Auslösen eines [PDF erstellen](/docs/bricks/advanced/print-out)- oder [XML erstellen](/docs/bricks/advanced/xml)-Bausteins.

## Einstellungen

1. **Verknüpfung mit** — Die Liste, in der der Datensatz liegt.
2. **Verknüpfung mit Baustein** — Der Baustein, dessen Aktion ausgeführt werden soll. Nur Bausteine mit ausführbarer Aktion und gesetztem technischen Namen sind wählbar.
3. **Datensatz-ID** — Die ID des Datensatzes. Kann als Formel angegeben werden.
4. **Fehlerverhalten** — Bestimmt, was bei einem Fehler passiert: _Workflow abbrechen_ oder _Ignorieren_.

## Hinweise

- Typische Anwendungsfälle: [PDF erstellen](/docs/bricks/advanced/print-out), [XML erstellen](/docs/bricks/advanced/xml), [Webhook-Button](/docs/bricks/advanced/webhook-button).
- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.
- Dieser Schritt verbraucht keine [Credits](/docs/credits).
