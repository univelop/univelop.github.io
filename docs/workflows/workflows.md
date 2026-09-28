---
title: Workflows
nav_order: 12
layout: title
has_toc: false
redirect_from:
    - /docs/workflows/workflow.html
---

Mit Workflows können Prozesse innerhalb von Univelop modelliert und automatisiert werden. Ein Workflow besteht aus einzelnen Schritten, die im Workflow-Designmodus per Drag & Drop zusammengestellt werden. Die Ausführung erfolgt wasserfallartig — Schritt für Schritt von oben nach unten.

## Workflow-Arten

Univelop unterscheidet drei Ausführungsmodi:

- **Geräteseitige Automatisierung** — Wird ohne Wartezeit lokal auf dem Gerät ausgeführt und kann interaktive Schritte, wie das Zeigen von Nachrichten, beinhalten (z. B. [Zeige Nachricht](/docs/workflows/user-interaction/message), [Scanner](/docs/workflows/user-interaction/scanner)). Das Gerät muss aktiv sein.
- **Cloud-Automatisierung** — Wird in der Cloud ausgeführt. Ideal für systemseitige Aufgaben wie das Senden von E-Mails, die Anbindung externer Systeme oder zeitgesteuerte Aufgaben.
- **Geschäftsprozess** — Ermöglicht die Abbildung längerer Abläufe. Unterstützt Wartezustände auf Entscheidungen, wie das Warten auf eine Genehmigung (z. B. [Warte auf Genehmigung](/docs/workflows/record-editing/wait-for-approval)).

## Workflow-Einstellungen

### Namen

1. **Name des Workflows** — Der angezeigte Name des Workflows in der Workflow-Liste und in Workflow-Bausteinen.
2. **Technischer Name** — Identifikator für den Zugriff über die REST-API. Wird nicht zur Darstellung genutzt.

### Labels

Workflows können mit Labels versehen werden, um sie in der Workflow-Übersicht besser unterscheiden und über die Suche filtern zu können.

1. **Name** — Der Name des Labels. Wird auch auf dem Label selbst in der Workflow-Übersicht angezeigt.
2. **Beschreibung** — Eine Beschreibung des Labels.
3. **Farbe** — Die Farbe, in der das Label angezeigt wird.

{: .hint }
Pro Arbeitsbereich können maximal 25 Labels angelegt werden.

### Verhalten

1. **Benachrichtigungen anzeigen** — Ob am unteren Bildschirmrand Benachrichtigungen bei Start, Ende oder Fehler angezeigt werden.
2. **Workflow-Art auswählen** — Öffnet den Dialog zur Auswahl der [Workflow-Art](#workflow-arten): Geräteseitige Automatisierung, Cloud-Automatisierung oder Geschäftsprozess.
3. **Nachricht bei Start** — Benutzerdefinierte Nachricht bei Workflow-Start. Nur bei Cloud-Automatisierung oder Geschäftsprozess.
4. **Nachricht nach Ausführung** — Benutzerdefinierte Nachricht nach Abschluss. Leer lassen, um keine Nachricht anzuzeigen. Nur bei Geräteseitiger Automatisierung.

{: .hint }
Neben den drei oben genannten Workflow-Arten gibt es die Regel-Workflows als separates Feature — bei diesen wird die Einstellungsgruppe "Verhalten" nicht angezeigt.

### Zeitgesteuerter Start

Nur bei Cloud-Automatisierung und Geschäftsprozess verfügbar. Ermöglicht die automatische Ausführung zu einer bestimmten Zeit mit optionalem Intervall (z. B. jeden Montag um 08:00 Uhr).

## Starten eines Workflows

Workflows können auf mehrere Arten gestartet werden:

- **Manuell** im Workflow-Designmodus oder über die Workflow-Historie
- **Per Baustein** über den [Workflow-Button](/docs/bricks/advanced/flow-button) oder [Aktions-Button](/docs/bricks/advanced/action-button) in einem Datensatz
- **Per Zeit-Trigger** für Cloud-Automatisierung und Geschäftsprozess
- **Per Webhook** über die REST-API (mit dem [Webhook](/docs/workflows/advanced/webhook)-Schritt als erstem Schritt)

## Workflow-Historie

Jede Ausführung wird mit Auslösezeitpunkt protokolliert. Die Historie zeigt an, ob der Workflow erfolgreich war, fehlgeschlagen ist oder durch einen [Laufe weiter, wenn](/docs/workflows/structure/continue-if)-Schritt gestoppt wurde. In der Detailansicht lässt sich der Verlauf einzelner Schritte nachvollziehen.

{: .hint }
Die Detailansicht ist nur verfügbar, wenn der Workflow-Aufbau seit der Ausführung nicht verändert wurde.
