---
title: Regeln
nav_order: 13
layout: title
---

Regeln ermöglichen ereignisbasierte Automatisierungen innerhalb einer Liste. Von einfachen Hinweismeldungen bis hin zur automatisierten Feldaktualisierung — Regeln reagieren auf bestimmte Ereignisse und führen einen Workflow aus.

Eine Regel besteht aus einem **Trigger** (dem auslösenden Ereignis) und einem **Regel-Workflow** (der Aktion, die bei Eintreten des Ereignisses ausgeführt wird).

## Verwaltung

1. Den [Eintrags-Designmodus](/docs/designmode/record) der gewünschten Liste öffnen
2. **Regeln verwalten** in der rechten Einstellungsleiste klicken
3. **Regel-Workflow erstellen** klicken
4. Auf **Trigger hinzufügen** am Start des Workflows klicken
5. Die gewünschte Trigger-Art auswählen
6. Workflow mit Schritten füllen

## Unterstützte Trigger

| Trigger | Auslöser | Bemerkung |
|---|---|---|
| **Datensatz geöffnet** | Ein Datensatz wird in der Benutzeroberfläche geöffnet | Nur lesende Workflow-Schritte zulässig |
| **Liste geöffnet** | Eine Liste wird in der Benutzeroberfläche geöffnet | Nur lesende Workflow-Schritte zulässig |
| **Datensatz erfüllt Bedingungen** | Ein Datensatz wird gespeichert und erfüllt erstmals die definierten Bedingungen | Zusätzlich steht der Schritt **Ändere Datensatz** zur Verfügung |

{: .hint }
Der Trigger "Datensatz erfüllt Bedingungen" wird nur beim **erstmaligen** Erreichen der Bedingungen ausgelöst. Ändert sich danach ein anderer Baustein, wird der Trigger nicht erneut ausgelöst.

## Rahmenbedingungen

- Regel-Workflows verursachen **keinen Credit-Verbrauch**
- Lesende Trigger erlauben nur nicht-schreibende Workflow-Schritte
- Über den Schritt [Starte Workflow](/docs/workflows/structure/start-workflow) kann aus einem Regel-Workflow heraus ein normaler Workflow gestartet werden, in dem alle Schritte verfügbar sind

## Beispiele

- **Warnung bei altem Auftrag:** Trigger "Datensatz geöffnet" → Laufe weiter, wenn `params.record.datum <= subtractYears(now(),2)` → Zeige Nachricht mit Warnung
- **Datum bei Abschluss setzen:** Trigger "Datensatz erfüllt Bedingungen" mit Status = Abgeschlossen → Ändere Datensatz: Datum auf `now()` setzen
