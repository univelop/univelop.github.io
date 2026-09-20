---
layout: workflow-step
title: Setze Genehmigung zurück
parent: Einträge bearbeiten
grand_parent: Workflows
icon: approval
nav_order: 6
---

Mit dem Schritt _Setze Genehmigung zurück_ wird ein [Genehmigung](/docs/bricks/advanced/approval)-Baustein auf den Ausgangszustand (inaktiv) zurückgesetzt.

## Einstellungen

1. **Verknüpfung mit** — Die Liste, die den Datensatz enthält.
2. **Datensatz-ID** — Die ID des Datensatzes.
3. **Verknüpfung mit Baustein** — Der [Genehmigung](/docs/bricks/advanced/approval)-Baustein, der zurückgesetzt werden soll.
4. **Genehmiger zurücksetzen** — Wenn aktiviert, wird auch der eingetragene Genehmiger entfernt. Diese Einstellung hat keine Auswirkung, wenn eine feste Person oder ein dynamischer Mitglied-Baustein als Genehmiger konfiguriert ist.

## Hinweise

- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.

## Verwandte Schritte

- [Fordere Genehmigung an](/docs/workflows/record-editing/send-approval-request) — Sendet die Genehmigungsanfrage
- [Warte auf Genehmigung](/docs/workflows/record-editing/wait-for-approval) — Pausiert den Workflow bis zur Genehmigung
