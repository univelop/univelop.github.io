---
layout: default
title: Datumsformel
parent: Arbeiten mit Formeln
nav_order: 1
---

# <span style="color:#0b5394">**Arbeiten mit Formeln**</span>

## <span style="color:#0b5394">Datumsformeln</span>

Datumsformeln sind nur in Verbindung mit dem
    [Baustein *Datum*](/docs/record-spec-settings/grand-childs-form/date.html)
möglich. Diese Formeln können in den Filtern für
    [Datensatzverknüpfungen](/docs/link-lists.html)
oder im
    [Listenfilter](/docs/design-mode-settings.html#liste)
verwendet werden, wenn dort der Formelbutton zu sehen ist.  

<span style="color:#3d85c6">**Beispiel:**</span>

![example formula button](\assets\formulary\example formula button.png "example formula button")

1. Datumsfeld in Filter und Sortierung auswählen
2. Formelbutton auswählen
3. Formel eintragen

Dadurch werden die Datensätze entsprechend des sog. dynamischen Datumsfilter gefiltert.  
**HINWEIS:** Keine eigenen Werte in die Klammer setzen (s. Liste mit Standard-Datumsformeln)

### <span style="color:#3d85c6">Liste mit Standard-Datumsformeln</span>

| Datumsformel              | Beschreibung                      | Ausgabewert (Beispiel Berechnungszeitpunkt: *15.06.2021 (Dienstag)*)|
|------------               |------------                       |:-------------:
| today()                   | aktuelles Datum                   | *15.06.2021 (Dienstag)*
| startOfWeek()             | Beginn der aktuellen Woche        | *14.06.2021 (Montag)*
| endOfWeek()               | Ende der aktuellen Woche          | *20.06.2021 (Sonntag)*
| startOfMonth()            | Beginn des aktuellen Monats       | *01.06.2021 (Dienstag)*
| endOfMonth()              | Ende des aktuellen Monats         | *30.06.2021 (Mittwoch)*
| startOfQuarter()          | Beginn des aktuellen Quartals     | *01.04.2021 (Donnerstag)*
| endOfQuarter()            | Ende des aktuellen Quartals       | *30.06.2021 (Mittwoch)*
| startOfYear()             | Beginn des aktuelles Jahres       | *01.01.2021 (Freitag)*
| endOfYear()               | Ende des aktuellen Jahres         | *31.12.2021 (Freitag)*
| calendarWeek(date)        | Kalenderwoche des gegebenen Datums| *24*
  
In den Klammern der einzelnen Formeln können **keine** eigenen Werte hinsichtlich einer eigenen Zeitpunktsberechnung
erfolgen (zum Beispiel: endOfMonth(24.09.2021) = 30.09.2021). Die Eingabe einer Datumsformel erfolgt **immer vom
tagesaktuellen Datum** automatisch durch die App. Das hat den Vorteil, dass dieser sog. dynamische Filter automatisch
"mitwandert" und die Filterung entsprechend der gewählten Formel immer aktuell hält.  
Möchte man mit den o. g. Formeln doch mit einem eigenen Zeitpunkt arbeiten, muss dieser selbst errechnet werden
(s. *Formelberechnung mit Datumsformel*).

### <span style="color:#3d85c6">Formelberechnung mit Datumsformel</span>
*(nur möglich über einen Datumsbezug aus einer Datumsformel (s. o.))*  

Mit den o. g. Datumsformeln kann ebenfalls gerechnet werden.  

**Beispiel (Berechnungszeitpunkt *15.06.2021*):**  
today() + 5 = **20.06.2021**  
today() - 5 = **10.06.2021**
startOfMonth() + 10 = **11.06.2021**

Für das selbe Ergebnis können auch die Formeln ***addDays()*** und ***subtractDays()*** genutzt werden:

**Beispiel (Berechnungszeitpunkt *15.06.2021*):**  
addDays(today() , 5) = **20.06.2021**
subtractDays(today() , 5) = **10.06.2021**

Sollen der Datumsformel nun ganze Monate addiert oder subtrahiert werden, können die Formelberechnungen ***addMonths()***
und ***subtractMonths()*** verwendet werden. Der Berechnungsformel und der gewählten Datumsformel werden anhand der frei
gewählten Zahl die entsprechenden Monate hinzugefügt.  
HINWEIS: Die Berechnung über diese Formeln über einen Monatswechsel führt zu einer falschen Berechnung aufgrund der
unterschiedlichen Monatsendungen (s. Beschreibung unter den folgenden Beispielen).  

Die zu addierende oder subtrahierende Zahl (muss eine ganze und positive Zahl sein) und wird mit einer Komma-Trennung in der entsprechenden Formel eingesetzt.  

**Beispiel:**

| Berechnung                | Beispiel (Berechnungszeitpunkt: *15.06.2021*)     | Ergebnis
|------                     |------                                             |:------:
| addMonths()               | addMonths(startOfWeek()**,1**)                    | *14.**07**.2021*
| addMonths()               | addMonths(startOfWeek()**,3**)                    | *14.**09**.2021*
| subtractMonths()          | subtractMonths(startOfQuarter()**,1**)            | *01.**03**.2021*
| subtractMonths()          | subtractMonths(startOfQuarter()**,5**)            | *01.**10**.**2020***

Eine Berechnung des Endes des letzten Monats kann **nicht** über *subtractMonths(endOfMonth(),1)* dargestellt werden.
Die Datumsformel *endOfMonth()* greift dabei nämlich auf das Ende des aktuellen Monats zu. Aufgrund der unterschiedlichen
Endtage der einzelnen Monate würde immer mindestens ein Tag ignoriert werden. 

**Beispiel (Berechnungszeitpunkt: *15.03.2022*):**  
<span style="color:#3d85c6">erwartetes Ergebnis:</span>  
subtractMonths(endOfMonth(),1) = subtractMonths(31.03.2022, 1) = <span style="color:darkgreen">**28.02.2022**</span>  
<span style="color:#3d85c6">tatsächliches Ergebnis:</span>  
subtractMonths(endOfMonth(),1) = subtractMonths(31.03.2022, 1) = <span style="color:darkred">**03.03.2022**</span>
  
Dieses Ergebnis kommt zustande, da der Februar 2022 nur 28 Tage hat und nicht 31 Tage wie der März.  

Um dieses Problem zu umgehen wird einfach der Wert vom Monatsanfang errechnet und davon ein Tag abgezogen.  

**Beispiel (Berechnungszeitpunkt: *15.03.2022*):**  
startOfMonth() - 1 = <span style="color:darkgreen">**28.02.2022**</span>

### <span style="color:#3d85c6">Darstellungen von dynamischen Zeitspannen mit Formelberechnungen:</span>

Durch die Möglichkeit der Formelberechnung mit einer Datumsformel lassen sich verschiedene Darstellungsmöglichkeiten
errechnen, die in den Filteroptionen (z. B. einer Kachel) leicht verwendet werden können.

| Formelkombination                                        | Beschreibung       | Ausgabewerte (Beispiel Berechnungszeitpunkt: *15.06.2021*)
|------                                                    |------              |:------:
| startOfWeek() und endOfWeek()                            | aktuelle Woche     | 14.06.2021 und 20.06.2021
| startOfWeek() -7 und endOfWeek() -7                      | letzte Woche       | 07.06.2021 und 13.06.2021
| startOfMonth() und endOfMonth()                          | aktueller Monat    | 01.06.2021 und 30.06.2021
| subtractMonths(startOfMonth(),1) und startOfMonth()-1    | Letzter Monat      | 01.05.2021 und 31.05.2021

**Beispiel *"alle Datensätze aus dem Vormonat* (Berechnungszeitpunkt: *15.03.2022*):"**  
![example previous month](\assets\formulary\example previous month.png "example previous month")  

1. Designmodus *Arbeitsbereich* öffnen
2. Kachel auswählen und in den Einstellungen *Filter & Sortierung* öffnen
3. Datumsfeld für Filter wählen
4. zutreffenden Operator auswählen
5. über den jeweiligen Formelbutton die Datumsformel inkl. Formelberechnung eingeben  

Im Ergebnis wird der gesetzte Filter beim Aufrufen des Bausteins automatisch anhand der Berechnung vorbelegt:
![example previous month2](\assets\formulary\example previous month2.png "example previous month2") 