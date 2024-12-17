---
layout: title
title: Datumsformeln
parent: Arbeiten mit Formeln
nav_order: 1
---

Datumsformeln sind nur in Verbindung mit dem
Baustein _Datum_
möglich. Diese Formeln können in den Filtern für
Datensatzverknüpfungen
oder im
Listenfilter
verwendet werden, wenn dort der Formelbutton zu sehen ist.

<span style="color:#3d85c6">**Beispiel:**</span>

![example formula button](\assets\formulary\example formula button.png "example formula button")

1. Datumsfeld in Filter und Sortierung auswählen
2. Formelbutton auswählen
3. Formel eintragen

Dadurch werden die Datensätze entsprechend des sog. dynamischen Datumsfilter gefiltert.  
**HINWEIS:** Keine eigenen Werte in die Klammer setzen (s. Liste mit Standard-Datumsformeln)

In den Klammern der einzelnen Formeln können **keine** eigenen Werte hinsichtlich einer eigenen Zeitpunktsberechnung
erfolgen (zum Beispiel: endOfMonth(24.09.2021) = 30.09.2021). Die Eingabe einer Datumsformel erfolgt **immer vom
tagesaktuellen Datum** automatisch durch die App. Das hat den Vorteil, dass dieser sog. dynamische Filter automatisch
"mitwandert" und die Filterung entsprechend der gewählten Formel immer aktuell hält.  
Möchte man mit den o. g. Formeln doch mit einem eigenen Zeitpunkt arbeiten, muss dieser selbst errechnet werden
(s. _Formelberechnung mit Datumsformel_).

### <span style="color:#3d85c6">Formelberechnung mit Datumsformel</span>

_(nur möglich über einen Datumsbezug aus einer Datumsformel (s. o.))_

Mit den o. g. Datumsformeln kann ebenfalls gerechnet werden.

**Beispiel (Berechnungszeitpunkt _15.06.2021_):**  
today() + 5 = **20.06.2021**  
today() - 5 = **10.06.2021**
startOfMonth() + 10 = **11.06.2021**

Für das selbe Ergebnis können auch die Formeln **_addDays()_** und **_subtractDays()_** genutzt werden:

**Beispiel (Berechnungszeitpunkt _15.06.2021_):**  
addDays(today() , 5) = **20.06.2021**
subtractDays(today() , 5) = **10.06.2021**

Sollen der Datumsformel nun ganze Monate addiert oder subtrahiert werden, können die Formelberechnungen **_addMonths()_**
und **_subtractMonths()_** verwendet werden. Der Berechnungsformel und der gewählten Datumsformel werden anhand der frei
gewählten Zahl die entsprechenden Monate hinzugefügt.  
HINWEIS: Die Berechnung über diese Formeln über einen Monatswechsel führt zu einer falschen Berechnung aufgrund der
unterschiedlichen Monatsendungen (s. Beschreibung unter den folgenden Beispielen).

Die zu addierende oder subtrahierende Zahl (muss eine ganze und positive Zahl sein) und wird mit einer Komma-Trennung in der entsprechenden Formel eingesetzt.

**Beispiel:**

| Berechnung       | Beispiel (Berechnungszeitpunkt: _15.06.2021_) |        Ergebnis        |
| ---------------- | --------------------------------------------- | :--------------------: |
| addMonths()      | addMonths(startOfWeek()**,1**)                |    _14.**07**.2021_    |
| addMonths()      | addMonths(startOfWeek()**,3**)                |    _14.**09**.2021_    |
| subtractMonths() | subtractMonths(startOfQuarter()**,1**)        |    _01.**03**.2021_    |
| subtractMonths() | subtractMonths(startOfQuarter()**,5**)        | \*01.**10**.**2020\*** |

Eine Berechnung des Endes des letzten Monats kann **nicht** über _subtractMonths(endOfMonth(),1)_ dargestellt werden.
Die Datumsformel _endOfMonth()_ greift dabei nämlich auf das Ende des aktuellen Monats zu. Aufgrund der unterschiedlichen
Endtage der einzelnen Monate würde immer mindestens ein Tag ignoriert werden.

**Beispiel (Berechnungszeitpunkt: _15.03.2022_):**  
<span style="color:#3d85c6">erwartetes Ergebnis:</span>  
subtractMonths(endOfMonth(),1) = subtractMonths(31.03.2022, 1) = <span style="color:darkgreen">**28.02.2022**</span>  
<span style="color:#3d85c6">tatsächliches Ergebnis:</span>  
subtractMonths(endOfMonth(),1) = subtractMonths(31.03.2022, 1) = <span style="color:darkred">**03.03.2022**</span>

Dieses Ergebnis kommt zustande, da der Februar 2022 nur 28 Tage hat und nicht 31 Tage wie der März.

Um dieses Problem zu umgehen wird einfach der Wert vom Monatsanfang errechnet und davon ein Tag abgezogen.

**Beispiel (Berechnungszeitpunkt: _15.03.2022_):**  
startOfMonth() - 1 = <span style="color:darkgreen">**28.02.2022**</span>

### <span style="color:#3d85c6">Darstellungen von dynamischen Zeitspannen mit Formelberechnungen:</span>

Durch die Möglichkeit der Formelberechnung mit einer Datumsformel lassen sich verschiedene Darstellungsmöglichkeiten
errechnen, die in den Filteroptionen (z. B. einer Kachel) leicht verwendet werden können.

| Formelkombination                                     | Beschreibung    | Ausgabewerte (Beispiel Berechnungszeitpunkt: _15.06.2021_) |
| ----------------------------------------------------- | --------------- | :--------------------------------------------------------: |
| startOfWeek() und endOfWeek()                         | aktuelle Woche  |                 14.06.2021 und 20.06.2021                  |
| startOfWeek() -7 und endOfWeek() -7                   | letzte Woche    |                 07.06.2021 und 13.06.2021                  |
| startOfMonth() und endOfMonth()                       | aktueller Monat |                 01.06.2021 und 30.06.2021                  |
| subtractMonths(startOfMonth(),1) und startOfMonth()-1 | Letzter Monat   |                 01.05.2021 und 31.05.2021                  |

**Beispiel _"alle Datensätze aus dem Vormonat_ (Berechnungszeitpunkt: _15.03.2022_):"**  
![example previous month](\assets\formulary\example previous month.png "example previous month")

1. Designmodus _Arbeitsbereich_ öffnen
2. Kachel auswählen und in den Einstellungen _Filter & Sortierung_ öffnen
3. Datumsfeld für Filter wählen
4. zutreffenden Operator auswählen
5. über den jeweiligen Formelbutton die Datumsformel inkl. Formelberechnung eingeben

Im Ergebnis wird der gesetzte Filter beim Aufrufen des Bausteins automatisch anhand der Berechnung vorbelegt:
![example previous month2](\assets\formulary\example previous month2.png "example previous month2")
