---
layout: title
title: Workflow
parent: Designmodi
nav_order: 4
---

Im Workflow-Designmodus werden Workflows erstellt und konfiguriert. Ein Workflow besteht aus einer Abfolge von Schritten, die wasserfallartig — also nur in eine Richtung — ablaufen.

## Designmodus öffnen

Den Workflow-Designmodus einer Kachel erreicht man über die Kacheleinstellungen im [Arbeitsbereich-Designmodus](/docs/designmode/workspace). Im Bereich **Workflows** kann ein neuer Workflow erstellt oder ein bestehender bearbeitet werden.

## Aufbau

Der Workflow-Designmodus ist in drei Bereiche unterteilt:

1. **Links — Bausteinkatalog** — alle verfügbaren Workflow-Schritte, die per Drag-and-Drop in den Workflow gezogen werden können
2. **Mitte — Workflow** — die Abfolge der Schritte, die den Workflow bilden
3. **Rechts — Einstellungen** — Einstellungen des Workflows oder des ausgewählten Schritts

## Workflow-Einstellungen

### Name

1. **Name** — der Anzeigename des Workflows, der in der Liste der Workflows und in Workflow-Bausteinen angezeigt wird
2. **Technischer Name** — dient dazu, den Workflow über die REST-API anzusprechen. Wird nicht zur Darstellung genutzt.

### Verhalten

1. **Benachrichtigungen anzeigen** — steuert, ob am unteren Bildschirmrand eine Meldung erscheint, wenn der Workflow startet, endet oder einen Fehler wirft
2. **Auf Server ausführen** — legt fest, ob der Workflow auf dem Server läuft. Ist dies deaktiviert, läuft er lokal auf dem Gerät des Nutzers. Schritte der Kategorie [Benutzerinteraktion](/docs/workflows/user-interaction/user-interaction) können nur in lokal ausgeführten Workflows verwendet werden.
3. **Nachricht bei Start** — Meldung, die beim Start des Workflows angezeigt wird
4. **Nachricht nach Ausführung** — Meldung, die nach Abschluss des Workflows angezeigt wird. Bleibt das Feld leer, wird keine Meldung angezeigt.
5. **Zwischenstände anzeigen** — hebt den aktuell ausgeführten Schritt im Workflow farblich hervor

### Zeit-Trigger

Diese Einstellungsgruppe wird nur angezeigt, wenn der Workflow **auf dem Server** läuft. Hier kann eingestellt werden, dass der Workflow regelmäßig zu einer bestimmten Zeit automatisch ausgeführt wird.

1. **Datum und Uhrzeit** — Zeitpunkt der erstmaligen Ausführung
2. **Intervall** — Wiederholungsrhythmus (z. B. "X mal pro Woche")

Soll ein Workflow beispielsweise jeden Montag um 8:00 Uhr laufen, wird der nächste Montag um 08:00 Uhr als Startzeit eingestellt und das Intervall auf "1 mal pro Woche" gesetzt.

## Weitere Aktionen

- **Manuell ausführen** — startet den Workflow sofort
- **Löschen** — entfernt den Workflow
