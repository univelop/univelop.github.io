---
layout: default
title: Workflows Alt
parent: Alte Docs
nav_order: 15
has_children: true
has_toc: false
---

# <span style="color:#0b5394">**Workflows**</span>

## <span style="color:#0b5394">Allgemeines zu Workflows</span>

Mit Workflows können einfache Prozesse innerhalb von Univelop modelliert und automatisiert werden.
So können bspw. durch den [Baustein _Workflow_](/docs/record-spec-settings/grand-child-expanded/workflow.html) bei einem abgeschlossenen Auftrag eine Rechnung oder ein Protokoll in Form eines neuen, ausgefüllten Eintrages erstellt werden.
Ein Workflow ist ein Arbeitsablauf, welcher aus beliebig vielen einzelnen Schritten, den Workflow-Bausteinen, besteht. Diese werden im Workflow-Designmodus zusammengestellt, welcher über den Homescreen erreichbar ist.
Workflows können manuell im Workflow-Designmodus, in der Workflow Historie und per [Baustein _Workflow_](/docs/record-spec-settings/grand-child-expanded/workflow.html) gestartet werden.

## <span style="color:#0b5394">Workflow Bereich</span>

Die Workflows lassen sich im Homescreen über das Admin-Menü über den Punkt _Workflows_ erreichen. Dabei öffnet sich der zugehörige Bereich.
Dort werden alle bestehenden Workflows angezeigt und es lassen sich hier auch neue anlegen. Für die bestehenden Workflows kann von hier die Historie und der Designmodus geöffnet werden.

## <span style="color:#0b5394">Designmodus</span>

Ein Workflow lässt sich wie ein Listeneintrag mit Bausteinen per Drag-and-Drop zusammenstellen. Dabei ist der Workflow ein wasserfallartiger Ablauf, sprich er läuft nur in eine Richtung ab.

![designmode workflows](\assets\workflows\designmode workflows.png "designmode workflows")

1. <span style="color:#0b5394">**Bausteine via Drag and Drop platzieren**</span>
2. <span style="color:#0b5394">**Der Workflow**</span>
3. <span style="color:#0b5394">**Einstellungen**</span>
    - Name des Workflows sowie manuelles Ausführen und löschen des Workflows
    - Bei auswählen eines Bausteins im Workflow öffnet sich hier die erweiterten Einstellungen des Bausteins

## <span style="color:#0b5394">Einstellungen von Workflows</span>

### <span style="color:#0b5394">Namen</span>

1. <span style="color:#0b5394">**Name des Workflows**</span>  
   Dieser Name wird in der Liste von Workflows sowie in Workflow-Bausteinen angezeigt.
1. <span style="color:#0b5394">**Technischer Name**</span>  
   Der technische Name dient dazu, den Workflow über unsere [API](https://docs.univelop.de/docs/interface.html) anzusprechen. Der technische Name wird nicht zur Darstellung genutzt.

### <span style="color:#0b5394">Verhalten</span>

1. <span style="color:#0b5394">**Benachrichtigungen anzeigen**</span>  
   Ob Benachrichtigung am unteren Rande des Bildschirms angezeigt werden soll, wenn der Workflow startet, endet oder Fehler wirft.
2. <span style="color:#0b5394">**Auf Server ausführen**</span>  
   Ob der Workflow auf dem Server ausgeführt werden soll. Ist dies deaktiviert, wird der Workflow lokal, also auf dem Gerät des Nutzers ausgeführt.
   Diese Einstellung ist für einige Workflow Bausteine relevant. So können bspw. Mails nur versendet werden, wenn der Workflow auf dem Server läuft, und Nachrichten angezeigt werden, wenn der Workflow lokal läuft.
3. <span style="color:#0b5394">**Nachricht bei Start**</span>
   Welche Nachricht am unteren Rand des Bildschirms angezeigt werden soll, wenn der Workflow startet.
4. <span style="color:#0b5394">**Nachricht nach Ausführung**</span>
   Welche Nachricht am unteren Rand des Bildschirms angezeigt werden soll, wenn der Workflow geendet hat. Wenn leer, wird keine Nachricht angezeigt.
5. <span style="color:#0b5394">**Zwischenstände anzeigen**</span>
   Ob der Durchlauf vom Workflow in der Ansicht farblich dargestellt werden soll. Es wird der aktuelle Baustein

### <span style="color:#0b5394">Zeit-Trigger</span>

Diese Einstellungsgruppe wird nur angezeigt, wenn der Workflow auf dem Server läuft.
Hier kann eingestellt werden, dass der Workflow regelmäßig zu einer bestimmten Zeit ausgeführt wird.
Es wird hier die Zeit und das Datum der erstmaligen Ausführung gewählt. Soll der Workflow nicht nur einmal ausgeführt werden, kann hier auch ein Intervall eingestellt werden. Will man z.B., dass ein Workflow jeden Montag um 8 Uhr ausgeführt wird, so stellt man den nächsten Montag 08:00 Uhr im Kalender ein
und als Intervall "X mal pro Woche" und dann eine 1 ein.

## <span style="color:#0b5394">Workflow Historie</span>

Nutzt man einen Workflow regelmäßig oder stößt dabei auf Probleme, kann man die Ausführungshistorie anschauen.
Dabei wird jede Ausführung mit Auslösezeitpunkt gespeichert, und es wird angezeigt ob dieser Workflow geglückt, fehlgeschlagen oder durch einen _Fahre fort, wenn_ Baustein gestoppt wurde.
Dazu lässt sich in der Detailansicht angucken, welcher konkreter Baustein geglückt ist, gestoppt hat oder fehlgeschlagen ist.
_Diese Detailansicht ist nur sichtbar, wenn seit der Ausführung der Workflow im Aufbau nicht geändert wurde_

## <span style="color:#0b5394">Workflow Bausteine</span>

|:-----: |:-------:
|Basis |
|[Setze Variablen](/docs/workflows/grand-childs-bricks/set-variable.html) |[Zeige Nachricht](/docs/workflows/grand-childs-bricks/send-notification.html)
|Einträge laden/erstellen |
|[Iteriere über Einträge](/docs/workflows/grand-childs-bricks/iterate-records.html)
|[Finde ersten Eintrag](/docs/workflows/grand-childs-bricks/get-first-record.html) |[Erstelle einen neuen Eintrag](/docs/workflows/grand-childs-bricks/create-record.html)
|[Wähle Eintrag](/docs/workflows/grand-childs-bricks/choose-record.html)  
 |Einträge bearbeiten|
|[Ändere einen Eintrag](/docs/workflows/grand-childs-bricks/alter-record.html) |[Lösche einen Eintrag](/docs/workflows/grand-childs-bricks/delete-record.html)
|[Aktion ausführen](/docs/workflows/grand-childs-bricks/run-action.html) |[Genehmigung anfordern](/docs/workflows/grand-childs-bricks/request-approval.html)
|[Warte auf Genehmigung](/docs/workflows/grand-childs-bricks/await-approval.html)
|Struktur|
|[Wähle Pfade](/docs/workflows/grand-childs-bricks/choose-path.html) |[Laufe weiter, wenn](/docs/workflows/grand-childs-bricks/continue-if.html)  
 |[Iteriere über Werte](/docs/workflows/grand-childs-bricks/iterate-values.html)  
 |Erweitert|
|[Sende Web Request](/docs/workflows/grand-childs-bricks/web-request.html) |[Sende E-Mail](/docs/workflows/grand-childs-bricks/send-mail.html)
|[Versende Push-Nachricht](/docs/workflows/grand-childs-bricks/choose-record.html)|[Check Out](/docs/workflows/grand-childs-bricks/check-out.html)
|[Webhook](/docs/workflows/grand-childs-bricks/webhook.html) |[Erstelle einen neuen Nutzer](/docs/workflows/grand-childs-bricks/create-user.html)
|[Importiere Excel-Tabelle](/docs/workflows/grand-childs-bricks/import-excel.html) |[Erstelle Einladungslink](/docs/workflows/grand-childs-bricks/create-invitation-link.html)
