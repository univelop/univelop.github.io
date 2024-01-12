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
|E        |Wochentag (kurz)       |(Text)             |Do|
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

|Formel | Beschreibung | Beispiel (Ausgehend vom 15.06.2021, 8:00 Uhr als Aufrufzeitpunkt) | Einzugebene Werte (Werte in den Klammern) | Gelieferter Ergebnistyp |
|-------------|---------|---------|--|--|
|`date(year, month, day)` | Erstellt ein Datum aus gegebenem Jahr, Monat und Tag | `date(2021, 6, 15)` liefert das Datum *15.06.2021 00:00:00.000000* | 1. Wert: Zahl,  2. Wert: Zahl,  3. Wert: Zahl| Datum |
| `today()`| Datum, bestehend aus dem aktuellen Tag um 00:00 Uhr | `today()` liefert *15.06.2021 00:00:00.000000* | | Datum |
| `now()` | Datum, bestehend aus dem akuellen Zeitpunkt | `now()` liefert *15.06.2021 08:00:00.000000* | | Datum |
|`parseDate(text)` | Erstellt Datum aus Text im Format "dd.mm.yy" oder "dd.mm.yyyy", nur dieses Format ist zulässig | `parseDate("15.06.2021")` liefert *15.06.2021 08:00:00.000000*| 1. Wert: Text | Datum |
|`startOfWeek()`, `endOfWeek()`|  Beginn/Ende der aktuellen Kalenderwoche | `startOfWeek()` liefert *14.06.2021 00:00:00.000000*, `endOfWeek()` liefert *20.06.2021 00:00:00.000000* | | Datum |
|`startOfMonth()`, `endOfMonth()`| Beginn/Ende des aktuellen Monats | `startOfMonth()` liefert *01.04.2021 00:00:00.000000*, `endOfMonth()` liefert *30.06.2021 00:00:00.000000*  | | Datum |
| `startOfQuarter()`, `endOfQuarter()` | Beginn/Ende des aktuellen Quartals | `startOfQuarter()` liefert *01.04.2021 00:00:00.000000*, `endOfQuarter()` liefert *30.06.2021 00:00:00.000000* | | Datum |
| `startOfYear()`, `endOfYear()` | Beginn/Ende des aktuelles Jahres |`startOfYear()` *01.01.2021 00:00:00.000000*, `endOfYear()` *31.12.2021 00:00:00.000000* | | Datum  |
| `currentMonth()` | Liefert den aktuellen Monat in Form eines Textes  | `currentMonth()` liefert "2021-06" | | Datum |

## <span style="color:#0b5394">**Datumsformeln zum Errechnen von Daten**</span>

Folgende Formeln sind dafür da, bestehende Daten zu verändern. Bspw. um ausgehend von einem Kaufdatum eine Bezahlungsfrist zu errechnen.

|Formel | Beschreibung | Beispiel (Ausgehend vom 15.06.2021, 8:00 Uhr) | Einzugebene Werte (Werte in den Klammern) | Gelieferter Ergebnistyp | 
|-------------|---------|---------|--|--|
| `addMinutes(date, days)`, `subtractMinutes(date, days)` | Minuten addiert/subtrahiert auf einen Zeitpunkt | `addMinutes(now(),1)` liefert *15.06.2021 8:01:00.000000*, `subtractMinutes(now(),1)` liefert *15.06.2021 7:59:00.000000* | 1. Wert: Datum, 2. Wert: Zahl | Datum | 
| `addHours(date, hours)`, `addHours(date, hours)` | Stunden addiert/subtrahiert auf einen Zeitpunkt|`addHours(now(),1)` liefert *15.06.2021 9:00:00.000000*, `subtractHours(now(),1)` liefert *15.06.2021 7:00:00.000000*| 1. Wert: Datum, 2. Wert: Zahl| Datum |
| `addDays(date, days)`, `subtractDays(date, days)` | Tage addiert/subtrahiert auf einen Zeitpunkt| `addDays(now(),1)` liefert *16.06.2021 8:00:00.000000*, `subtractDays(now(),1)` liefert *14.06.2021 8:00:00.000000* | 1. Wert: Datum, 2. Wert: Zahl | Datum |
| `addWeeks(date, weeks)`, `subtractWeeks(date, weeks)` | Monate addiert/subtrahiert auf einen Zeitpunkt| `addWeeks(now(), 1)`, liefert *22.06.2021 8:00:00.000000*, `subtractWeeks(now(), 1)` liefert *22.06.2021 8:00:00.000000* | 1. Wert: Datum, 2. Wert: Zahl | Datum |
| `addMonths(date, weeks)`, `subtractMonths(date, weeks)` | Monate addiert/subtrahiert auf einen Zeitpunkt |  `addMonths(now(), 1)` liefert *15.07.2021 8:00:00.000000*, `subtractMonths(now(), 1)` liefert *15.05.2021 8:00:00.000000* | 1. Wert: Datum, 2. Wert: Zahl| Datum |

## <span style="color:#0b5394">**Datumsformeln zu Kalenderwochen**</span>

Folgende Formeln sind für das Ermitteln von Kalenderwoche anhand von Daten da.

|Formel | Beschreibung | Beispiel (Ausgehend vom 15.06.2021, 8:00 Uhr) | Einzugebene Werte (Werte in den Klammern) | Gelieferter Ergebnistyp | 
|-------------|---------|---------|--|--|
| `calendarWeek(date)` | Kalenderwoche des gegebenen Datums  | `calendarWeek(today())` liefert *24* | 1. Wert: Datum | Zahl |
| `currentWeek`      | aktuelle Kalenderwoche  | `currentWeek` liefert "2021-W24" |  | Text |
| `dateToWeek(date)`      | Kalenderwoche des Datums  | `dateToWeek(date(2024,01,01))` liefert "2024-W01" | 1. Wert: Datum | Text |
| `addWeeks(week, weeks)`, `subtractWeeks(week, weeks)` | Addiert/Subtrahiert gegebene Wochenanzahl zum/vom Wochentext | `addWeeks("2021-W24", 1)` liefert "2021-W25", `subtractWeeks("2021-W24", 1)` liefert "2021-W23" | 1. Wert: Wochentext, 2. Wert: Zahl  | Text |

## <span style="color:#0b5394">**Monatsformeln**</span>

Folgende Formeln sind für das Ermitteln von Monaten anhand von Daten da.

|Formel | Beschreibung | Beispiel (Ausgehend vom 15.06.2021, 8:00 Uhr) | Einzugebene Werte (Werte in den Klammern) | Gelieferter Ergebnistyp | 
|-------------|---------|---------|--|--|
| `currentMonth`      | aktueller Monat  | `currentMonth` liefert "2021-08" |  | Text |
| `dateToMonth(date)`      | Monat des Datums  | `dateToMonth(date(2024,01,01))` liefert "2024-01" | 1. Wert: Datum | Text |
| `addMonths(month, months)`, `subtractMonths(month, months)` | Addiert/Subtrahiert gegebene Monatszahl zum/vom Monatstext | `addMonths("2021-05", 1)` liefert "2021-06", `subtractMonths("2021-05", 1)` liefert "2021-04" | 1. Wert: Monatstext im Format "YYYY-MM", 2. Wert: Zahl  | Text |

## <span style="color:#0b5394">**Weitere Datumsformeln**</span>

|Formel | Beschreibung | Beispiel (Ausgehend vom 15.06.2021, 8:00 Uhr) | Einzugebene Werte (Werte in den Klammern) | Gelieferter Ergebnistyp | 
|-------------|---------|---------|--|--|
|`datesBetween(startDate, endDate, [options])`| Daten zwischen den zwei gegebenen Daten. Unter `[option]` kann optional über den Text "weekdays" angegeben werden, dass nur Wochentage angegeben werden sollen. |  `datesBetween(today(), date(2021,6,19))` liefert *[15.06.2021, 16.06.2021, 17.06.2021, 18.06.2021, 19.06.2021]*, `datesBetween(today(), date(2021,6,19), "weekdays")` liefert *[15.06.2021, 16.06.2021, 17.06.2021, 18.06.2021]*  |1. Wert: Datum, 2. Wert: Datum, 3. Wert: optional, Text "weekdays"| Dynamischer Wert/Liste von Daten |