---
layout: workflow-step
title: Wähle Eintrag
parent: Einträge laden
grand_parent: Workflows
icon: youtube_searched_for
nav_order: 3
redirect_from:
    - /docs/workflows/grand-childs-bricks/choose-record.html
    - /docs/workflows/load-records/choose-record.html
---

Mit dem Schritt _Wähle Eintrag_ wird ein Datensatz geladen, damit dessen Werte im weiteren Workflow zugreifbar sind. Der Datensatz wird entweder automatisch aus dem Kontext übernommen (z. B. wenn der Workflow per [Workflow-Button](/docs/bricks/advanced/flow-button) aus einem Datensatz gestartet wurde) oder über Filter bestimmt.

## Einstellungen

1. **Verknüpfung mit** — Die Liste, aus der der Datensatz geladen wird.
2. **Aus Datensatzliste füllen** — Wenn aktiviert, wird automatisch der Datensatz verwendet, aus dem der Workflow gestartet wurde. Spart die manuelle Auswahl.
3. **Filter und Sortierung** — Schränkt die zur Auswahl stehenden Datensätze ein.

## Funktionsweise

Die Bausteinwerte des gewählten Datensatzes sind in folgenden Schritten über den technischen Namen des Schritts zugreifbar, z. B. `bestellungen.titel` für den Titel-Baustein eines Datensatzes mit dem Schrittnamen `bestellungen`.

## Hinweise

- Wird ein Workflow per [Starte Workflow](/docs/workflows/structure/start-workflow) mit einer Datensatz-ID gestartet, wählt dieser Schritt automatisch den übergebenen Datensatz.
- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.

## Verwandte Schritte

- [Finde ersten Eintrag](/docs/workflows/record-loading/first-record) — Findet einen Datensatz per Filter ohne Benutzerinteraktion
