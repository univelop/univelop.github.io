---
title: Regeln
nav_order: 13
layout: title
---

Regeln ermöglichen ereignis­basierte Automatisierungen. Von einfachen Hinweis­meldungen bis hin zur automatisierten Feld­aktualisierung, sobald ein Datensatz spezifische Bedingungen erfüllt.

Eine Regel besteht dabei aus einem Trigger sowie einem Regel-Workflow. Der Trigger ist das Ereignis, bei welchem der Regel-Workflow ausgeführt werden soll. Der Regel-Workflow ist dementsprechend die Aktion, welche bei Erfüllung des Ereignisses ausgeführt werden soll.

## Verwaltung von Regeln

1. Den Eintrags-Designmodus der gewünschten Liste öffnen
1. **Regeln verwalten** in der rechten Einstellungsleiste anklicken
1. **Regel-Workflow erstellen** Button oben rechts anklicken
1. Auf die **Trigger hinzufügen** Schaltfläche am Start des Workflows klicken
1. In der rechten Seitenleiste die gewünschte **Trigger-Art** auswählen
1. Workflow mit Schritten füllen

## Unterstützte Trigger

| Trigger                           | Auslösender Vorgang                                                                         | Bemerkung                                                        |
| --------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| **Datensatz geöffnet**            | Ein Datensatz wird in der Benutzeroberfläche geöffnet.                                      | Nur lesende Workflow-Schritte zulässig.                          |
| **Liste geöffnet**                | Eine Liste wird in der Benutzeroberfläche geöffnet.                                         | Ebenfalls nur lesende Workflow-Schritte zulässig.                |
| **Datensatz erfüllt Bedingungen** | Ein Datensatz wird gespeichert und erfüllt erstmals die im Trigger definierten Bedingungen. | Der Schritt **Ändere Datensatz** steht zusätzlich zur Verfügung. |

{: .hint }
Ein Trigger vom Typ _Datensatz erfüllt Bedingungen_ wird **nur beim erstmaligen Erreichen** der Bedingungen ausgelöst. Ändert sich danach ein anderer Baustein, wird der Trigger nicht erneut ausgelöst.

## Rahmenbedingungen

-   Regel-Workflows sind im Umfang der verfügbaren Workflow-Schritte reduziert, verursachen jedoch **keinen Credit-Verbrauch**.
-   Lesende Trigger (**Datensatz geöffnet**, **Liste geöffnet**) erlauben lediglich nicht-schreibende Workflow-Schritte. Datensatzänderungen sind nicht möglich.
-   Über den Schritt **Starte Workflow** kann aus jedem Trigger heraus ein normaler Workflow gestartet werden, in welchem dann wie gewohnt alle Workflow-Schritte zur Verfügung stehen.

## Anwendungsszenarien

-   Zeige eine Warnung, wenn ein Mitarbeiter einen Auftrag öffnet der älter als 2 Jahre ist. (Trigger **Datensatz geöffnet**, "Laufe weiter, wenn" Workflow-Schritt mit Bedingung **params.record.datum <= subtractYears(now(),2)**, "Zeige Nachricht" Workflow-Schritt, welcher Warnung zeigt)
-   Setze ein Datum, wenn der Eintrag den Status "Abgeschlossen" erreicht. (Trigger **Datensatz erfüllt Bedingungen** mit Bedingung Status = Abgeschlossen, "Ändere Datensatz" Workflow-Schritt welcher Datum auf **now()** setzt.)
