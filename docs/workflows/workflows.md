---
title: Workflows
nav_order: 12
layout: title
has_toc: false
redirect_from:
    - /docs/workflows/workflow.html
---

Mit Workflows können Prozesse innerhalb von Univelop modelliert und automatisiert werden. Ein Workflow besteht aus einzelnen Schritten, die im Workflow-Designmodus per Drag & Drop zusammengestellt werden. Die Ausführung erfolgt wasserfallartig — Schritt für Schritt von oben nach unten.

## Workflow-Typen

Univelop unterscheidet drei Ausführungsmodi:

- **Client-Automatisierung** — Der Workflow läuft lokal auf dem Gerät des Benutzers. Erlaubt Schritte mit Benutzerinteraktion (z. B. [Zeige Nachricht](/docs/workflows/user-interaction/message), [Scanner](/docs/workflows/user-interaction/scanner)).
- **Server-Automatisierung** — Der Workflow läuft auf dem Server. Kann per Zeit-Trigger automatisch gestartet werden und eignet sich für Hintergrundaufgaben.
- **Geschäftsprozess** — Ein Server-Workflow, der an definierten Stellen pausieren und auf externe Ereignisse warten kann (z. B. [Warte auf Genehmigung](/docs/workflows/record-editing/wait-for-approval)).

## Workflow-Einstellungen

### Namen

1. **Name** — Der angezeigte Name des Workflows in der Workflow-Liste und in Workflow-Bausteinen.
2. **Technischer Name** — Identifikator für den Zugriff über die REST-API. Wird nicht zur Darstellung genutzt.

### Verhalten

1. **Benachrichtigungen anzeigen** — Ob am unteren Bildschirmrand Benachrichtigungen bei Start, Ende oder Fehler angezeigt werden.
2. **Auf Server ausführen** — Aktiviert die Server-Automatisierung. Ist dies deaktiviert, läuft der Workflow lokal auf dem Gerät.
3. **Nachricht bei Start** — Benutzerdefinierte Nachricht bei Workflow-Start.
4. **Nachricht nach Ausführung** — Benutzerdefinierte Nachricht nach Abschluss. Leer lassen, um keine Nachricht anzuzeigen.
5. **Zwischenstände anzeigen** — Zeigt den aktuellen Schritt während der Ausführung farblich an.

### Zeit-Trigger

Nur bei Server-Workflows verfügbar. Ermöglicht die automatische Ausführung zu einer bestimmten Zeit mit optionalem Intervall (z. B. jeden Montag um 08:00 Uhr).

## Starten eines Workflows

Workflows können auf mehrere Arten gestartet werden:

- **Manuell** im Workflow-Designmodus oder über die Workflow-Historie
- **Per Baustein** über den [Workflow-Button](/docs/bricks/advanced/flow-button) oder [Aktions-Button](/docs/bricks/advanced/action-button) in einem Datensatz
- **Per Zeit-Trigger** für Server-Workflows
- **Per Webhook** über die REST-API (mit dem [Webhook](/docs/workflows/advanced/webhook)-Schritt als erstem Schritt)

## Workflow-Historie

Jede Ausführung wird mit Auslösezeitpunkt protokolliert. Die Historie zeigt an, ob der Workflow erfolgreich war, fehlgeschlagen ist oder durch einen [Laufe weiter, wenn](/docs/workflows/structure/continue-if)-Schritt gestoppt wurde. In der Detailansicht lässt sich der Verlauf einzelner Schritte nachvollziehen.

{: .hint }
Die Detailansicht ist nur verfügbar, wenn der Workflow-Aufbau seit der Ausführung nicht verändert wurde.
