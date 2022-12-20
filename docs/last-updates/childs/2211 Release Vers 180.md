---
layout: default
title: Release Version 1.8.0
nav_order: 91
parent: Latest Updates
---

# <span style="color:#0b5394">**Release Version 1.8.0**</span>

Folgende Neuerungen und Verbesserungen wurden mit der Version 1.8.0 ausgerollt:


## <span style="color:#0b5394">**Baustein *Genehmigung***</span>

Der neue [Baustein *Genehmigung*](/docs/record-spec-settings/grand-child-expanded/approval.html) bietet die Möglichkeit, Listeneinträge durch einen ausgewählten Benutzer genehmigen und optional dabei sperren zu lassen. Fordert man die Genehmigung von einem Nutzer an, kann dieser bspw. eine Bestellanforderung mit einer Bemerkung ablehnen oder zusätzlich mit  einer Unterschrift genehmigen. So kann, statt bisher mit mehreren Bausteinen, über einen einzigen die Prüfungsanforderung und Genehmigung bei Prozessen wie einer Bestellanforderung gelöst werden.

![release approval brick](\assets\latest-updates\release approval brick.png "release approval brick")

## <span style="color:#0b5394">**Eigenes Team bei Baustein *Benutzer***</span>  

Beim [Baustein *Benutzer*](/docs/record-spec-settings/grand-childs-form/user.html) lässt sich über eine Einstellung aktivieren, dass nur Nutzer gewählt werden können, die zum eigenen Team gehören. Dadurch wird die Nutzung des Bausteins mit vielen Nutzern vereinfacht. 

## <span style="color:#0b5394">**Baustein *Scheduler***</span>  

Wir haben den neuen [Baustein *Scheduler*](/docs/record-spec-settings/grand-child-expanded/scheduler.html) in Univelop implementiert. Diese zeigt Buchungen mit einer individuell anpassbaren Darstellung in einer übersichtlichen Wochenansicht an. So können bspw. Aufgaben oder Einsätze angelegt und dabei einem Nutzer und Wochentag sowie einem zugehörigen Projekt zugeteilt werden. Damit werden viele Listeneinträge auf einen Blick strukturiert angezeigt, was hin- und herfiltern in der Listenansicht ersparen kann.

![release brick scheduler](\assets\latest-updates\release brick scheduler.png "release brick scheduler")

## <span style="color:#0b5394">**Filter und Sortierung in Workflows**</span>  

In der neuen Version haben wir die Filterung und Sortierung in [Workflows](/docs/workflows/workflow.html) und dessen Bausteinen erweitert. Es nun möglich, über Formeln, und dadurch auch über Workflow-Variablen, zu filtern und zu sortieren. Dadurch sind die Workflows noch flexibler und besser konfigurierbar.

## <span style="color:#0b5394">**Änderungsdatum bei Baustein *Datei Upload***</span>  

Der [Baustein *Datei Upload*](/docs/record-spec-settings/grand-childs-form/upload-file.html) hat als Einstellung die Möglichkeit bekommen, das letzte Änderungsdatum der Dateien anzuzeigen. So sieht man auf einen Blick, wann vorhandene Dateien zuletzt geändert bzw. hochgeladen wurden.

## <span style="color:#0b5394">**Workflow-Baustein *Versende Push-Nachricht***</span>  

Zu den [Workflows](/docs/workflows/workflow.html) ist der [Baustein *Versende Push-Nachricht*](/docs/workflows/grand-childs-bricks/send-notification.html) dazugekommen. Über diesen können Push-Nachrichten mit individuellem Titel und Nachricht an Nutzer versendet werden. Die Push-Nachrichten können bei Bedarf an Listeneinträge gebunden und die Empfänger können detailliert ausgewählt werden.

![release notification step](\assets\latest-updates\release notification step.png "release notification step")

### <span style="color:#0b5394">**Weitere Verbesserungen**</span>

- Verbesserung Duplizieren mit Werten trotz Datenübernahme
- [Baustein *Tabelle*](/docs/record-spec-settings/grand-child-expanded/table.html) ohne Verbindung per Baustein nutzbar
- Datumsformeln bei [Baustein *Datensatz*](/docs/record-spec-settings/grand-child-expanded/record.html) zum Filtern möglich
- Rote Schrift beim [Baustein *Textfeld*](/docs/record-spec-settings/grand-childs-form/text.html) möglich
- Verbesserung der Kachelduplizierung
- Diverse kleine Fehler behoben