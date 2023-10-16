---
layout: default
title: Datumsformeln
nav_order: 1
parent: Formelsammlung
---

# <span style="color:#0b5394">**Datumsformeln**</span>

## <span style="color:#0b5394">**formatDate**</span>

Die Formel `formatDate(date, format)` dient dem strukturierten Ausgeben von Datumswerten. Dabei wird ein Datum und das gewünschte Format angegeben. Das gewünschte Format wird über einen Text für `format` angegeben. 

Dabei sollte beachtet werden, dass Texte innerhalb des Formates per Delimiter(`'`) angegeben werden müssen.
So ist bspw. das Format `"Der dd. MMMM ist ein Feiertag"` nicht zulässig, da der enthaltene Text "Der [...] ist ein Feiertag" mit als Format interpretiert wird. Um speziell Text mit einem Datum zu verbinden, sollte ein Delimiter genutzt werden: `"'Der 'dd. MMMM' ist ein Feiertag'"`

### <span style="color:#0b5394">Formatierungsmöglichkeiten bei formatDate</span>

Das Format kann beliebig aus den folgenden Symbolen zusammengesetzt werden:

|Symbol   |Beschreibung           |Ausgabe in         |Beispiel|
|------   |-------                |------------       |-------|
|G        |Bezeichnung            |(Text)             |AD|
|yyyy     |Jahr                   |(Zahl)             |2022|
|M        |Monat im Jahr (kurz)   |(Zahl)             |1|
|MM       |Monat im Jahr (lang)   |(Zahl)             |01|
|MMM      |Monatsname (kurz)      |(Text)             |Jan|
|MMMM     |Monatsname (lang)      |(Text)             |Januar|
|L        |alleinstehender Monat  |(Text & Zahl)      |Januar & 01|
|d        |Tag im Monat           |(Zahl)             |5|
|dd       |Tag im Monat (lang)    |(Zahl)             |05|
|c        |alleinstehender Tag    |(Zahl)             |10|
|h        |Stunde am/pm (1~12)    |(Zahl)             |12|
|H        |Stunde in Tag (0~23)   |(Zahl)             |0|
|m        |Minuten einer Stunde   |(Zahl)             |30|
|s        |Sekunden einer Minute  |(Zahl)             |55|
|S        |fractional second      |(Zahl)             |978|
|E        |Wochentag (kurz)       |(Text)             |Do.|
|EEEE     |Wochentag (lang)       |(Text)             |Donnerstag|
|D        |Tag im Jahr            |(Number)           |189|
|a        |am/pm marker           |(Text)             |PM|
|k        |hour in day (1~24)     |(Number)           |24|
|K        |hour in am/pm (0~11)   |(Number)           |0|
|Q        |Quartal                |(Zahl)             |3|
|QQQ      |Quartal (kurz)         |(Text & Zahl)      |Q3|
|QQQQ     |Quartal (lang)         |(Text & Zahl)      |3. Quartal|
|'        |Angabe von Text innerhalb des Formates|(Delimiter)   |'Date='|
|''       |Angeabe von Text innerhalb des Formates mit hochkomma|(Literal)  |''o'clock''|

### <span style="color:#0b5394">Formatierungsbeispiele</span>

| Formatierung | Ausgabe |
|-------------|---------|
|`formatDate(today(), "dd.MM.yyyy")` | "15.06.2021" |
|`formatDate(today(), "dd.MM.yyyy HH:mm:ss")` | "15.06.2021 08:00:00" |
|`formatDate(today(), "dd.MM.yyyy HH:mm:ss.SSS")` | "15.06.2021 08:00:00.000" |
|`formatDate(today(),"dd. MMMM, yyyy")` | "15. Juni, 2021" |
|`formatDate(today(),"QQQQ, yyyy")` | "2. Quartal, 2021" |
|`formatDate(today(),"'Der 'dd. MMMM' ist ein Feiertag'")`| "Der 15. Juni ist ein Feiertag"|

## <span style="color:#0b5394">**Datumsformeln zum Erzeugen von Daten**</span>

Folgende Formeln dienen dem erstellen von spezifischen Daten. 
Alle Formeln liefern einen Zeitpunkt zurück, welcher aus Datum, Stunde, Minute und Sekunden besteht.

Hinweis: diese Formeln sollten nicht direkt im Baustein *Textformel* oder an weiteren Stellen, wo Text erwartet wird, genutzt werden, da diese Daten intern mit UTC verarbeitet werden. Bei der direkten Nutzung kommen also ggf. durch die Zeitverschiebung vermeintlich falsche Daten heraus. Um das zu vermeiden, sollte die Formel `formatDate(date, format)` genutzt werden.
Beim Baustein *Datumsformel* können folgende Formeln jedoch problemlos genutzt werden.

|Formel mit Beispielwert | Ausgabe (bezogen auf den 15.06.2021, 8:00 Uhr) | Beschreibung | Einzugebene Werte (Werte in den Klammern) |
|-------------|---------|---------|-----|
|`date(2021,6,15)` | *15.06.2021 00:00:00.000000* | Erstellt ein Datum aus gegebenem Jahr, Monat und Tag | 1. Wert: Zahl,  2. Wert: Zahl,  3. Wert: Zahl|
| `today()` | *15.06.2021 00:00:00.000000* | Datum, bestehend aus dem aktuellen Tag um 00:00 Uhr| |
| `now()` | *15.06.2021 08:00:00.000000* | Datum, bestehend aus dem akuellen Zeitpunkt| |
|`parseDate("15.06.2021")` | *15.06.2021 08:00:00.000000*| Erstellt Datum aus Text im Format "dd.mm.yy" oder "dd.mm.yyyy", nur dieses Format ist zulässig | 1. Wert: Text|
|`startOfWeek()`, `endOfWeek()`| *14.06.2021 00:00:00.000000*, *20.06.2021 00:00:00.000000*  | Beginn/Ende der aktuellen Kalenderwoche | |
|`startOfMonth()`, `endOfMonth()`| *01.04.2021 00:00:00.000000*, *30.06.2021 00:00:00.000000*  | Beginn/Ende des aktuellen Monats | |
| `startOfQuarter()`, `endOfQuarter()` |  *01.04.2021 00:00:00.000000*, *30.06.2021 00:00:00.000000* | Beginn/Ende des aktuellen Quartals | |
| `startOfYear()`, `endOfYear()` | *01.01.2021 00:00:00.000000*, *31.12.2021 00:00:00.000000* | Beginn/Ende des aktuelles Jahres | |
| `currentMonth()` | *2021-06* | Aktueller Monat  |   |

## <span style="color:#0b5394">**Datumsformeln zum Errechnen von Daten**</span>

Folgende Formeln sind dafür da, bestehende Daten zu verändern. Bspw. um ausgehend von einem Kaufdatum eine Bezahlungsfrist zu errechnen.

|Formel mit Beispielwert | Ausgabe (bezogen auf den 15.06.2021, 8:00 Uhr) | Beschreibung  | Einzugebene Werte (Werte in den Klammern) |
|-------------|---------|---------|-------|
| `addMinutes(now(),1)`, `subtractMinutes(now(),1)` | *15.06.2021 8:01:00.000000*, *15.06.2021 7:59:00.000000* | Minuten addiert/subtrahiert auf einen Zeitpunkt| 1. Wert: Datum, 2. Wert: Zahl|
| `addHours(now(),1)`, `subtractHours(now(),1)` | *15.06.2021 9:00:00.000000*, *15.06.2021 7:00:00.000000* | Stunden addiert/subtrahiert auf einen Zeitpunkt| 1. Wert: Datum, 2. Wert: Zahl|
| `addDays(now(),1)`, `subtractDays(now(),1)` | *16.06.2021 8:00:00.000000*, *14.06.2021 8:00:00.000000* | Tage addiert/subtrahiert auf einen Zeitpunkt| 1. Wert: Datum, 2. Wert: Zahl|
| `addWeeks(now(), 1)`, `subtractWeeks(now(), 1)` |*22.06.2021 8:00:00.000000*, *22.06.2021 8:00:00.000000* | Monate addiert/subtrahiert auf einen Zeitpunkt| 1. Wert: Datum, 2. Wert: Zahl|
| `addMonths(now(), 1)`, `subtractMonths(now(), 1)` | Aufruf von "addMonths(today(),1)" ergibt *15.07.2021 8:00:00.000000*|  Monate addiert/subtrahiert auf einen Zeitpunkt| 1. Wert: Datum, 2. Wert: Zahl|

## <span style="color:#0b5394">**Datumsformeln zu Kalenderwochen**</span>

Folgende Formeln sind für das ermitteln von Kalenderwoche anhand von Daten da.

|Formel mit Beispielwert | Ausgabe (bezogen auf den 15.06.2021, 8:00 Uhr) | Beschreibung | Einzugebene Werte (Werte in den Klammern) |
|-------------|---------|---------|-------|
| `calendarWeek(today())`   | *24*   | Kalenderwoche des gegebenen Datums| 1. Wert: Datum|
| `currentWeek()`         | *2021-W24*   | aktuelle Kalenderwoche|   |

## <span style="color:#0b5394">**Weitere Datumsformeln**</span>

|Formel mit Beispielwert | Ausgabe (bezogen auf den 15.06.2021, 8:00 Uhr) | Beschreibung | Einzugebene Werte (Werte in den Klammern) |
|-------------|---------|---------|-------|
| `datesBetween(today(),date(2021,6,19))`, `datesBetween(today(),date(2021,6,19),"weekdays")`  |*[15.06.2021, 16.06.2021, 17.06.2021, 18.06.2021, 19.06.2021]*, *[15.06.2021, 16.06.2021, 17.06.2021, 18.06.2021]* | Daten zwischen den zwei gegebenen Daten. Unter `[option]` kann optional über den Text "weekdays" angegeben werden, dass nur Wochentage angegeben werden sollen. | 1. Wert: Datum, 2. Wert: Datum, 3. Wert: optional, Text "weekdays"|