---
layout: default
title: Kalender
parent: Erweiterte Bausteine
grand_parent: Die Bausteine und deren Einstellungen
nav_order: 8
---

# <span style="color:#0b5394"><span class="material-icons">comment</span> **Baustein *Kalender***</span>

Der Baustein *Kalender* wird verwendet um Einträge, die mit einem [Baustein *Datum*](/docs/record-spec-settings/grand-childs-form/date.html) ausgewählt sind, in einer Kalenderform darzustellen. Beispiele sind Arbeitszeiten von Mitarbeitern, Wiedervorlageeinträge, Ablaufdatum, Aufgabenverwaltung, etc. Der Baustein *Kalender* verweist dazu auf die Einträge die innerhalb des Kalender angezeigt werden.

![calender](\assets\record-spec-settings\calender.png "calender")

Der Kalender wird mit zwei Kacheln verknüpft um die gewünschten Einträge entsprechend anzuzeigen. Bei der Auswahl eines Tages wird entsprechend den Einstellungen ebenfalls unter dem Kalender eine Vorschau der Einträge angezeigt.Zusätzliche Einstellungen ist die Anzeige des Badges in den einzelnen Tagen und auch das entsprechende Kalenderformat kann angepasst werden:

![calender](\assets\record-spec-settings\calender-settings.png "calender")

1. <span style="color:#0b5394">**Verknüpfung mit**</span>  
    Hier wird die Kachel ausgewählt, die die Einträge für den Kalender beinhaltet
2. <span style="color:#0b5394">**Verknüpfung über**</span>  
    Hier wird die Kachel ausgewählt, die die Einträge entsprechend filtern soll
3. <span style="color:#0b5394">**Verknüpfung zu Datum**</span>  
    Verweis auf den [Baustein *Datum*](/docs/record-spec-settings/grand-childs-form/date.html) für die Zuordnung der einzelnen Tage
4. <span style="color:#0b5394">**Anzahl der Vorschau**</span>  
    Einstellung der Anzahl der Vorschaudatensätze
5. <span style="color:#0b5394">**Einstellung des Badges**</span>  
    Die Badges werden ind en Tagen angezeigt, wo der Baustein *Kalender* Einträge gefunden hat. Folgende Einstellungen sind möglich:
    - Anzahl der Punkte         (ein Punkt = ein Eintrag, zwei Punkte = zwei Einträge, etc.)
    - Anzahl der Einträge       (Ausgabe als Zahl)
    - Summe über einen Baustein (Ausgabe der gewählten Summe (z. B. Arbeitszeit) für jeden Kalendertag)
6. <span style="color:#0b5394">**Einstellung des Kalenderformats**</span>  
    Folgende Einstellungen sind möglich:
    - Monat
    - zwei Wochen
    - eine Woche