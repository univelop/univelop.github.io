---
layout: default
title: Release Version 1.14.0
nav_order: 85
parent: Latest Updates
---

# <span style="color:#0b5394">**Release Version 1.14.0**</span>

Folgende Neuerungen und Verbesserungen wurden mit der Version 1.14.0 ausgerollt:

## <span style="color:#0b5394">**Tabs für die Strukturierung**</span>

Mit der neuen Version können Einträge mit [Tabs](/docs/global-settings-and-functions.html#tabs) erweitert werden. Dadurch können bspw. sehr lange Einträge, bei welchen viel gescrollt werden muss, durch mehrere Tabs aufgeteilt und verkleinert werden.

![release tabs](\assets\latest-updates\release tabs.png "release tabs")
## <span style="color:#0b5394">**Verbesserung der Verknüpfung beim Baustein *Datensatz***</span>  

Um die Verknüpfung eines [Bausteins *Datensatz*](/docs/record-spec-settings/grand-child-expanded/record.html) durch das Ändern der Einstellungen versehentlich aufzulösen, wird nun das Ändern der Einstellung "Verknüpfung mit" blockiert, wenn bereits Datensätze über diesen Baustein verknüpft sind. Dadurch sind die Verknüpfung sicher vor versehentlichen Änderungen im Designmodus. 

## <span style="color:#0b5394">**Workflow-Baustein *Check Out***</span>  

Um nach einem erfolgreich durchgeführten Workflow den Nutzer wieder auf die Hauptseite zu leiten, gibt es in der neuen Version den [Workflow-Baustein *Check Out*](/docs/workflows/grand-childs-bricks/check-out.html). Dieser kann mit einer individuellen Überschrift und einer Nachricht konfiguriert werden.

![release workflow checkout](\assets\latest-updates\release workflow checkout.png "release workflow checkout")
## <span style="color:#0b5394">**Baustein *Datum* mit mehreren Feldern**</span>  

Um alle Daten zu nutzen, die der [Baustein *Datum*](/docs/record-spec-settings/grand-childs-form/date.html) speichert, kann nun neben dem tatsächlichen Datum auch die Kalenderwoche und der Monat aus diesem Baustein, bspw. für das Filtern, genutzt und darauf gefiltert werden. So kann bspw. ein Filter auf einen Datumsbaustein über "2023-06" für den Juni, oder über "2023-W22" für die 22. Kalenderwoche erstellt werden.

![release date fields](\assets\latest-updates\release date fields.png "release date fields")

## <span style="color:#0b5394">**Neue Textkonstanten *currentWeek* und *currentMonth***</span>  

Um die Möglichkeiten mit unseren Workflows zu erweitern gibt es nun zwei neue [Textkonstanten](/docs/formulary/childs/formula%20date.html#liste-mit-standard-datumsformeln). *currentWeek* für die aktuelle Kalenderwoche und *currentMonth* für den aktuellen Monat.

## <span style="color:#0b5394">**Baustein *Bild***</span>  

Um dasselbe Bild in jedem Eintrag anzuzeigen, analog zum Baustein *Datei*, gibt es mit der neuen Version den [Baustein *Bild*](/docs/record-spec-settings/grand-childs-base/image.html). Mit diesem können bspw. Anleitungen oder Tabellen in Einträge eingebunden werden, welche sonst nur schwer über andere Bausteine darstellbar sind. 

![release brick image](\assets\latest-updates\release brick image.png "release brick image")
## <span style="color:#0b5394">**Wertebereich für Baustein *Nummer***</span>  

Der [Baustein *Nummer*](/docs/record-spec-settings/grand-childs-form/number.html) besitzt absofort die Einstellung für eine höchst- und kleinstmögliche Zahl. Dadurch kann die Eingabe auf nur sinnvolle und erwünschte Zahlen beschränkt werden. Bspw. bei der Angabe einer Liefermenge kann nun angegeben werden, dass die Zahl zwischen 1 und 100 liegen soll.

### <span style="color:#0b5394">**Weitere Verbesserungen**</span>

- Verbesserung Pflichtfeldprüfung bei Status setzen über Workflows
- Diverse Fehler behoben
