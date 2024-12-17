---
layout: title
title: Workflow
parent: Designmodi
nav_order: 4
---

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
   Der technische Name dient dazu, den Workflow über unsere API anzusprechen. Der technische Name wird nicht zur Darstellung genutzt.

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
