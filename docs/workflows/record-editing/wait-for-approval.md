---
layout: workflow-step
title: Warte auf Genehmigung
parent: Einträge bearbeiten
grand_parent: Workflows
icon: approval
nav_order: 5
redirect_from:
    - /docs/workflows/grand-childs-bricks/await-approval.html
    - /docs/workflows/edit-records/wait-for-approval.html
---

Mit dem Schritt _Warte auf Genehmigung_ wird der Workflow pausiert, bis der angegebene [Genehmigung](/docs/bricks/advanced/approval)-Baustein genehmigt, abgelehnt oder zurückgesetzt wird.

## Einstellungen

1. **Verknüpfung mit** — Die Liste, die den Datensatz enthält.
2. **Verknüpfung mit Baustein** — Der [Genehmigung](/docs/bricks/advanced/approval)-Baustein, auf den gewartet wird.
3. **Datensatz-ID** — Die ID des Datensatzes.
4. **Warten auf** — Das Ereignis, bei dem der Workflow fortgesetzt wird:
   - **Genehmigung** — Nur bei Genehmigung wird fortgesetzt.
   - **Genehmigung oder Ablehnung** — Bei Genehmigung oder Ablehnung.
   - **Genehmigung, Ablehnung oder Zurücksetzen** — Bei jedem Statuswechsel.

{: .important }
Der technische Name des Genehmigung-Bausteins muss gesetzt sein.

## Funktionsweise

Nach der Pause kann der Genehmigungsstatus über den technischen Namen des Bausteins abgefragt werden. Die möglichen Werte sind: `inactive`, `pending`, `approved`, `refused`. Mit einem [Wähle Pfade](/docs/workflows/structure/switch)-Schritt können unterschiedliche Folgeaktionen je nach Ergebnis definiert werden.

## Hinweise

- Dieser Schritt ist **nur in Geschäftsprozessen** verfügbar — nicht in Client- oder Server-Automatisierungen.

## Verwandte Schritte

- [Fordere Genehmigung an](/docs/workflows/record-editing/send-approval-request) — Sendet die Genehmigungsanfrage
- [Setze Genehmigung zurück](/docs/workflows/record-editing/reset-approval) — Setzt den Genehmigungsstatus zurück
