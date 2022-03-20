---
layout: default
title: Die Programmstruktur
nav_order: 3
---

# <span style="color:#0b5394">**Die Programmstruktur**</span>

Im Folgenden erläutern wir die Programmstruktur im Einzelnen.
Für Nachbauten können gerne die [Tutorials](http://localhost:4000/docs/Tutorials.html "Tutorials") verwendet werden.

## <span style="color:#0b5394">Arbeitsbereiche</span>

Als Arbeitsbereich kann der Workspace oder Mandant verstanden werden, in dem man sich aktuell befindet. Er ist somit die oberste
Programmebene. Über den Arbeitsbereich können globale Einstellungen vorgenommen werden, z.B. Mitglieder hinzufügen, Kacheln importieren oder erstellen.

## <span style="color:#0b5394">Kacheln</span>

Ein Arbeitsbereich enthält eine oder mehrere Kacheln. Die Kachel steht mit ihrem Titel und der Darstellung (Icon, Summe Inhalte oder Summe über Baustein) für den Inhalt darin. Es gibt getrennt voneinander allgemeine Kacheln, die von allen Nutzern des
Arbeitsbereichs gesehen werden, und eigene Kacheln, welche immer aus den allgemeinen Kacheln gefilterte Inhalte darstellen.

### <span style="color:#3d85c6"> gefilterte Kacheln</span>

Filterkacheln bilden einen wesentlichen Teil in der Arbeit mit Univelop. Aus gefilterten Kacheln können Aufgaben oder sonstige Arbeitsergleichterung abgeleitet werden.

Gefilterte Kacheln können auf zwei Wege erstellt werden:  
- Speichern der gefilterten Liste
Wurde in der Liste temporär ein Filter gesetzt, kann die Filterung als "gefilterte Kachel" über das Symbol "Speichern" gespeichert werden.
- Gefilterte Kachel über den Homescreen erstellen
Im Designmodus des Arbeitsbereichs können neben allgemeinen Kacheln auch "gefilterte Kacheln" erstellt werden. Hier wird die gefilterte Kachel per Drag and Drop in den Arbeitsbereich. Anschließend wählt man den Namen der Filterkachel sowie die Basiskachel, die die Grundlage der Datenlieferung für die Filterung liefert. ANschließend wird in den Kacheleinstellungen unter *Filter und Sortierung* die gewünschte Filterung eingestellt.

<span style="color:#3d85c6">Darum Filterkacheln genutzt werden</span>

Filterkacheln eignen sich hervorragend dazu eine Standard-Dateneingabe zu erleichtern. Als Beispiel könnte eine Kachel *Zeiterfassung* dienen. Um die erfassten Arbeitszeiten auf sich selbst zu filtern, bietet sich solch eine Filterkachel an. Darüber hinaus, können über diese Kachel auch neue Datensätze erfasst werden. Der Vorteil hierbei ist, dass die Filter entsprechend in der Neuerfassung von Datensätzen bereits vorerfasst sind (z. B. Mitarbeitername, Tätigkeitsart).  
Zeiterfassungen unterliegen aber auch einer ständig Prüfung, sodass neue Arbeitszeiten so besser gefiltert werden können (z. B. Filter: bereits freigegeben = Nein).

## <span style="color:#0b5394">Listen</span>

Die Kachel ist die symbolische Darstellung einer Liste, also der Inhalt dieser Kachel. Wird eine Kachel aufgerufen, wird zunächst die gesamte Liste mit Inhalten (reduzierter Inhalt in der Listenansicht) angezeigt. Wird anschließend ein Listeneintrag ausgewählt, wird der entsprechende Datesnatz angezeigt. 

## <span style="color:#0b5394">Einträge</span>

Eine Liste besteht im Detail aus diversen Listeneinträgen. Diese sind also der Inhalt dieser Liste. 
Je nach Benennung der einzelnen Bausteine innerhalb dieser Liste und deren Inhalte können diese Listeneinträge 
individuell jeden denkbaren Datensatz digitalisieren.

## <span style="color:#0b5394">Bausteine</span>

Ein Listeneintrag besteht aus verschiedenen Bausteinen, die in Abschnitten in sinnvoller Weise aneinander gereiht werden. Durch 
Betiteln der Bausteine wird die gewünschte Darstellung des Inhalts erreicht. [Mehr im Abschnitt "Bausteine"](https://univelop.github.io/docs/record-spec-settings.html "Die Bausteine und deren Einstellungen")

## <span style="color:#0b5394">Zusammenfassung der Programmstruktur</span>

![homescreen](..\assets\software-structure\homescreen.png "homescreen")
![list-record](..\assets\software-structure\list-record.png "list-record")

|Nummer     |Bezeichnung    |    Beschreibung
|1          |Home-Button    | Wechsel des Arbeitsbereichs
|2          |Kacheln        | Die Kacheln stehen symbolisch für die dahinterliegenden Listen
|3          |Einstellungen  | weitere Einstellungen
|4          |Liste          | Sammlung aller Datensätze in individueller Kurzform dargestellt
|5          |Eintrag        | Die Einträge beinhalten alle Details und Verknüpfungen der Liste
