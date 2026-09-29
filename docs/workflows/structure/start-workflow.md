---
layout: workflow-step
title: Starte Workflow
parent: Struktur
grand_parent: Workflows
icon: account_tree
nav_order: 6
redirect_from:
    - /docs/workflows/advanced/start-workflow.html
---

Mit dem Schritt _Starte Workflow_ wird ein anderer Workflow gestartet. Dem Ziel-Workflow können Parameter und optional eine Datensatz-ID übergeben werden.

## Einstellungen

1. **Auf Ausführung warten** — Wenn aktiviert, wartet der aktuelle Workflow, bis der gestartete Workflow abgeschlossen ist. Nicht verfügbar in Regel-Workflows.
2. **Fehler-Verhalten** — Bestimmt, was bei einem Fehler im gestarteten Workflow passiert: _Workflow abbrechen_ (Standard) oder _Ignorieren_. Nur verfügbar wenn _Auf Ausführung warten_ aktiviert ist.
3. **Workflow starten** — Der zu startende Workflow.
4. **Datensatz-ID** — _Optional._ Die ID eines Datensatzes, der dem Ziel-Workflow übergeben wird. Beginnt der Ziel-Workflow mit einem [Wähle Eintrag](/docs/workflows/record-loading/choose-record)-Schritt, wird dieser Datensatz automatisch ausgewählt.
5. **Parameter** — _Optional._ Benutzerdefinierte Parameter (Name, Typ, Wert), die dem Ziel-Workflow übergeben werden. Im Ziel-Workflow sind diese über `params.parameterName` zugreifbar.

## Hinweise

- Client-Workflows können sowohl lokale als auch Server-Workflows starten.
- Server-Workflows können nur andere Server-Workflows starten.
- Verfügbar in: Geräteseitige Automatisierung, Cloud-Automatisierung, Geschäftsprozess.
- Dieser Schritt verbraucht keine [Credits](/docs/credits).

## Verwandte Schritte

- [Gib Wert zurück](/docs/workflows/advanced/return-value) — Für die Rückgabe von Werten an den aufrufenden Workflow
