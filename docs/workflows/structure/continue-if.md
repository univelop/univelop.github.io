---
layout: workflow-step
title: Laufe weiter, wenn
parent: Struktur
grand_parent: Workflows
icon: skip_next
nav_order: 2
redirect_from:
    - /docs/workflows/grand-childs-bricks/continue-if.html
---

Mit dem Schritt _Laufe weiter, wenn_ wird der Workflow anhand einer Bedingung entweder fortgesetzt oder abgebrochen. Er eignet sich als Prüfpunkt, z. B. um sicherzustellen, dass ein Bauteil im Bestand liegt oder ein Fahrzeug einsatzbereit ist.

## Einstellungen

1. **Bedingung** — Eine Ja/Nein-Formel. Ergibt die Formel `true`, läuft der Workflow weiter. Bei `false` wird der Workflow beendet.
2. **Warnung anzeigen** — Wenn aktiviert, wird bei Abbruch eine Warnung angezeigt.
3. **Warnungstext** — Der Text der Warnung, die bei Abbruch angezeigt wird. Kann dynamisch mit `${}` gestaltet werden.

## Hinweise

- Der Abbruch wird in der Workflow-Historie als gestoppt (nicht als fehlgeschlagen) vermerkt.
- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.
- Dieser Schritt verbraucht keine [Credits](/docs/credits).
