---
layout: workflow-step
title: Fordere Genehmigung an
parent: Einträge bearbeiten
grand_parent: Workflows
icon: approval
nav_order: 4
redirect_from:
    - /docs/workflows/grand-childs-bricks/request-approval.html
    - /docs/workflows/edit-records/send-approval-request.html
---

Mit dem Schritt _Fordere Genehmigung an_ wird eine Genehmigungsanfrage an einen [Genehmigung](/docs/bricks/advanced/approval)-Baustein gesendet. Bei erfolgreicher Anforderung läuft der Workflow ohne Pause weiter. Wurde der Datensatz bereits genehmigt, passiert nichts.

## Einstellungen

1. **Verknüpfung mit** — Die Liste, die den Datensatz enthält.
2. **Verknüpfung mit Baustein** — Der [Genehmigung](/docs/bricks/advanced/approval)-Baustein, auf den sich die Anfrage bezieht.
3. **Datensatz-ID** — Die ID des Datensatzes, der genehmigt werden soll.

{: .important }
Der technische Name des Genehmigung-Bausteins muss gesetzt sein.

## Hinweise

- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.

## Verwandte Schritte

- [Warte auf Genehmigung](/docs/workflows/record-editing/wait-for-approval) — Pausiert den Workflow bis zur Genehmigung/Ablehnung
- [Setze Genehmigung zurück](/docs/workflows/record-editing/reset-approval) — Setzt den Genehmigungsstatus zurück
