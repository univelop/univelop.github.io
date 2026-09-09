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

1. **Workflow** — Der zu startende Workflow.
2. **Datensatz-ID** — _Optional._ Die ID eines Datensatzes, der dem Ziel-Workflow übergeben wird. Beginnt der Ziel-Workflow mit einem [Wähle Eintrag](/docs/workflows/record-loading/choose-record)-Schritt, wird dieser Datensatz automatisch ausgewählt.
3. **Parameter** — _Optional._ Benutzerdefinierte Parameter (Name, Typ, Wert), die dem Ziel-Workflow übergeben werden. Im Ziel-Workflow sind diese über `params.parameterName` zugreifbar.
4. **Auf Ausführung warten** — Wenn aktiviert, wartet der aktuelle Workflow, bis der gestartete Workflow abgeschlossen ist.
5. **Fehlerverhalten** — Bestimmt, was bei einem Fehler im gestarteten Workflow passiert: _Workflow abbrechen_ oder _Ignorieren_.

## Hinweise

- Client-Workflows können sowohl lokale als auch Server-Workflows starten.
- Server-Workflows können nur andere Server-Workflows starten.
- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.
- Dieser Schritt verbraucht keine [Credits](/docs/credits).

## Verwandte Schritte

- [Gib Wert zurück](/docs/workflows/advanced/return-value) — Für die Rückgabe von Werten an den aufrufenden Workflow
