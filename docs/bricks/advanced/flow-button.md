---
layout: title
title: Workflow
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 14
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/workflow.html
---

Über den Baustein _Workflow_ kann ein verbundener Workflow per Button-Klick aus einem Eintrag heraus gestartet werden. Während der Ausführung zeigt ein Lade-Spinner den Fortschritt an. Bei Fehlern wird eine Warnung unter dem Button angezeigt.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Verknüpfter Workflow** — Der Workflow, der bei Klick auf den Button ausgeführt wird.
2. **Pflichtfelder prüfen** — Validiert vor der Ausführung, ob alle als Pflichtfeld markierten Bausteine ausgefüllt sind.
3. **Parameter** — Optionale Variablen, die an den Workflow übergeben werden.

## Hinweise

- Die Ausführungshistorie wird oben rechts im Eintrag eingeblendet, sobald ein Workflow-Button verbaut ist. Dort können Details zu vergangenen Ausführungen eingesehen werden.
- Dieser Baustein ist in geteilten Datensätzen nicht verfügbar.

## Verwandte Bausteine

- [Webhook](/docs/bricks/advanced/webhook-button) — Für direkte HTTP-Anfragen an externe Systeme
- [Status-Button](/docs/bricks/advanced/status-button) — Zum Ändern eines Status per Button
