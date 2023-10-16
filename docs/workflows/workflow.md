---
layout: default
title: Workflows
nav_order: 14
has_children: true
has_toc: false
---

# <span style="color:#0b5394">**Workflows**</span>
## <span style="color:#0b5394">Allgemeines zu Workflows</span>

Mit Workflows können einfache Prozesse innerhalb von Univelop modelliert und automatisiert werden.
So können bspw. durch den [Baustein *Workflow*](/docs/record-spec-settings/grand-child-expanded/workflow.html) bei einem abgeschlossenen Auftrag eine Rechnung oder ein Protokoll in Form eines neuen, ausgefüllten Eintrages erstellt werden.
Ein Workflow ist ein Abeitsablauf, welcher aus beliebig vielen einzelnen Schritten, den Workflow-Bausteinen, besteht. Diese werden im Workflow-Designmodus zusammengestellt, welcher über den Homescreen erreichbar ist. 
Workflows können manuell im Workflow-Designmodus, in der Workflow Historie und per [Baustein *Workflow*](/docs/record-spec-settings/grand-child-expanded/workflow.html) gestartet werden.

## <span style="color:#0b5394">Workflow Bereich</span>

Sind die Workflows für den Arbeitsbereich freigeschaltet, lassen sie sich im Homescreen über das Admin-Menü über den Punkt *Workflows* erreichen. Dabei öffnet sich der zugehörige Bereich.
Dort werden alle bestehenden Workflows angezeigt und es lassen sich hier auch neue anlegen. Für die bestehenden Workflows kann von hier die Historie und der Designmodus geöffnet werden.

## <span style="color:#0b5394">Designmodus</span>

Ein Workflow lässt sich wie ein Listeneintrag mit Bausteinen per Drag-and-Drop zusammenstellen. Dabei ist der Workflow ein wasserfallartiger Ablauf, sprich er läuft nur in eine Richtung ab. 

![designmode workflows](\assets\workflows\designmode workflows.png "designmode workflows")

1. <span style="color:#0b5394">**Bausteine via Drag and Drop platzieren**</span>
2. <span style="color:#0b5394">**Der Workflow**</span>
3. <span style="color:#0b5394">**Einstellungen**</span>
    - Name des Workflows sowie manuelles Ausführen und löschen des Workflows
    - Bei auswählen eines Bausteins im Workflow öffnet sich hier die erweiterten Einstellungen des Bausteins

## <span style="color:#0b5394">Workflow Historie</span>

Nutzt man einen Workflow regelmäßig oder stößt dabei auf Probleme, kann man die Ausführungshistorie anschauen.
Dabei wird jede Ausführung mit Auslösezeitpunkt gespeichert, und es wird angezeigt ob dieser Workflow geglückt, fehlgeschlagen oder durch einen *Fahre fort, wenn* Baustein gestoppt wurde.
Dazu lässt sich in der Detailansicht angucken, welcher konkreter Baustein geglückt ist, gestoppt hat oder fehlgeschlagen ist.
*Diese Detailansicht ist nur sichtbar, wenn seit der Ausführung der Workflow im Aufbau nicht geändert wurde*


## <span style="color:#0b5394">Workflow Bausteine</span>

|:-----:            |:-------:
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
