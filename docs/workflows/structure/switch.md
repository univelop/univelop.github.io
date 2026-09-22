---
layout: workflow-step
title: Wähle Pfade
parent: Struktur
grand_parent: Workflows
icon: alt_route
nav_order: 1
redirect_from:
    - /docs/workflows/grand-childs-bricks/choose-path.html
---

Mit dem Schritt _Wähle Pfade_ wird der Workflow in mehrere parallele Pfade aufgeteilt. Jeder Pfad hat eine eigene Bedingung, die bestimmt, ob er ausgeführt wird. Es können beliebig viele Pfade definiert werden.

## Einstellungen

1. **Pfad-Bedingungen** — Für jeden Pfad wird eine Ja/Nein-Formel angegeben. Ergibt die Formel `true`, wird der Pfad ausgeführt.
2. **Standard-Pfad** — Wird automatisch ausgeführt, wenn kein anderer Pfad aktiv ist. Wird mindestens ein normaler Pfad ausgeführt, wird der Standard-Pfad übersprungen.

## Funktionsweise

Alle Pfade, deren Bedingung zutrifft, werden parallel ausgeführt. Die inneren Schritte jedes Pfades laufen sequentiell ab. Der Workflow setzt erst fort, wenn alle aktiven Pfade abgeschlossen sind.

## Hinweise

- Es können mehrere Pfade gleichzeitig aktiv sein — es handelt sich nicht um ein Entweder-Oder.
- Der Standard-Pfad eignet sich als Fallback, z. B. für Fehlermeldungen wenn keine Bedingung zutrifft.
- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.
- Dieser Schritt verbraucht keine [Credits](/docs/credits).
