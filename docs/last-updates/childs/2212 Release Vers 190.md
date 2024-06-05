---
layout: default
title: Release Version 1.9.0
nav_order: 90
parent: Latest Updates
---

# <span style="color:#0b5394">**Release Version 1.9.0**</span>

Folgende Neuerungen und Verbesserungen wurden mit der Version 1.9.0 ausgerollt:


## <span style="color:#0b5394">**Detailsicht für Nutzer**</span>

Damit Admins über die [Mitgliederliste](/docs/global-settings-and-functions.html#mitglieder) eines Arbeitsbereiches den Mitgliedern direkt Rollen oder Teams zuweisen oder entfernen können, gibt es in der neuen Version eine Detailansicht für Nutzerdaten. Auf dieser kann dazu das aktive Team oder die aktive Rolle geändert werden. Neben den zugeteilten Rollen und Teams wird auch die letzte Aktivität in dem Arbeitsbereich angezeigt. Das schafft einen besseren Überblick über die Rollen- und Team-Zuweisung.

![release member edit screen](\assets\latest-updates\release member edit screen.png "release member edit screen")

## <span style="color:#0b5394">**Neue Formeln für Formelbausteine**</span>  

Für mehr Möglichkeiten mit den Formelbausteinen haben wir zwei neue Formeln implementiert. Für das Berechnen der passenden Kalenderwoche anhand eines Datums gibt es jetzt die Formel [calendarWeek(*date*)](/docs/formulary/childs/formula%20date.html#liste-mit-standard-datumsformeln). Um alle Vorkommen eines bestimmten Textes innerhalb eines Textes zu ersetzten gibt es die neue Formel [replace(*text*, *find*, *sub*)](/docs/formulary/childs/symbol-operator.html#weitere-funktionen-der-formelbausteine), die in *text* jedes Vorkommen von *find* mit *sub* ersetzt.

## <span style="color:#0b5394">**Designänderung vom Designmodus**</span>  

Der Designmodus der App wurde von uns neu designt. Dieser ist jetzt simpler gestaltet, hat jedoch denselben Aufbau. Alle Kacheln, Bausteine, Einstellungen etc. finden sich an gewohnter Stelle wieder. 

![release designmode](\assets\latest-updates\release designmode.png "release designmode")

## <span style="color:#0b5394">**Wertübernahme bei Baustein *Datensatz***</span>  

Um bei der Wertübernahme mehr Möglichkeiten zu bieten, haben wir diese auf mehrere Bausteine erweitert. So können bspw. Werte aus Formelbausteinen in deren Pendants übernommen werden (Datumsformel zu Baustein *Datum*) oder auch vom Baustein *Datensatz sperren* zum Baustein *Schalter*.

## <span style="color:#0b5394">**Workflow-Baustein *Genehmigung anfordern***</span>  

Zu den Workflows ist der neue [Baustein *Genehmigung anfordern*](/docs/workflows/grand-childs-bricks/request-approval.html) hinzugekommen. Er erweitert die Funktionalität des [Bausteins *Genehmigung*](/docs/record-spec-settings/grand-child-expanded/approval.html) auf die Workflows. Bei *Genehmigung anfordern* wird ein Genehmiger ausgewählt und die Funktion “Anfordern”, wie sie im Baustein vorhanden ist, ausgeführt. Dieser Baustein kann also bspw. ausgeführt werden, wenn im Workflow davor eine Bedingung eintritt.

![release workflow request approval](\assets\latest-updates\release workflow request approval.png "release workflow request approval")

## <span style="color:#0b5394">**Workflow-Baustein *Warte auf Genehmigung***</span>  

Ein weiterer neuer [Baustein *Warte auf Genehmigung*](/docs/workflows/grand-childs-bricks/await-approval.html) ist auch zu den Workflows hinzugekommen. Dieser kann einen Workflow anstoßen, sobald eine Genehmigung in einem verbundenen [Baustein *Genehmigung*](/docs/record-spec-settings/grand-child-expanded/approval.html) erteilt wird.

![release workflow await approval](\assets\latest-updates\release workflow await approval.png "release workflow await approval")

## <span style="color:#0b5394">**Genehmiger beim [Baustein *Genehmigung*](/docs/record-spec-settings/grand-child-expanded/approval.html)**</span>  

In der neuen Version ist es möglich, für die Auswahl eines Genehmigers Filter zu setzten, um bestimmte Nutzergruppen anzuzeigen. So können bspw. Teams oder Rollen gewählt werden, zu denen der Genehmiger gehören muss. Dazu ist es möglich, einen Genehmiger anhand eines Baustein *Benutzer* festzulegen. 

### <span style="color:#0b5394">**Weitere Verbesserungen**</span>

- Verbesserung Nutzbarkeit im [Baustein *Tabelle*](/docs/record-spec-settings/grand-child-expanded/table.html)
- Verbesserung der Referenzprüfung beim Löschen von Bausteinen
- Rote Schrift bei Formelbausteinen möglich
- Diverse kleine Fehler behoben