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

| Symbol | Beschreibung                                         | Ausgabe in    | Beispiel    |
| ------ | ---------------------------------------------------- | ------------- | ----------- |
| G      | Bezeichnung                                          | (Text)        | AD          |
| yyyy   | Jahr                                                 | (Zahl)        | 2022        |
| M      | Monat im Jahr (kurz)                                 | (Zahl)        | 1           |
| MM     | Monat im Jahr (lang)                                 | (Zahl)        | 01          |
| MMM    | Monatsname (kurz)                                    | (Text)        | Jan         |
| MMMM   | Monatsname (lang)                                    | (Text)        | Januar      |
| L      | alleinstehender Monat                                | (Text & Zahl) | Januar & 01 |
| d      | Tag im Monat                                         | (Zahl)        | 5           |
| dd     | Tag im Monat (lang)                                  | (Zahl)        | 05          |
| c      | alleinstehender Tag                                  | (Zahl)        | 10          |
| h      | Stunde am/pm (1~12)                                  | (Zahl)        | 12          |
| H      | Stunde in Tag (0~23)                                 | (Zahl)        | 0           |
| m      | Minuten einer Stunde                                 | (Zahl)        | 30          |
| s      | Sekunden einer Minute                                | (Zahl)        | 55          |
| S      | fractional second                                    | (Zahl)        | 978         |
| EEE    | Wochentag (kurz)                                     | (Text)        | Do.         |
| EEEE   | Wochentag (lang)                                     | (Text)        | Donnerstag  |
| D      | Tag im Jahr                                          | (Number)      | 189         |
| a      | am/pm marker                                         | (Text)        | PM          |
| k      | hour in day (1~24)                                   | (Number)      | 24          |
| K      | hour in am/pm (0~11)                                 | (Number)      | 0           |
| Q      | Quartal                                              | (Zahl)        | 3           |
| QQQ    | Quartal (kurz)                                       | (Text & Zahl) | Q3          |
| QQQQ   | Quartal (lang)                                       | (Text & Zahl) | 3. Quartal  |
| '      | Angabe von Text innerhalb des Formates               | (Delimiter)   | 'Date='     |
| ''     | Angabe von Text innerhalb des Formates mit hochkomma | (Literal)     | ''o'clock'' |

**Hinweis:** Das Symbol "E" sollte nicht mehr verwendet werden, da es zu unerwarteten Ergebnissen führen kann; stattdessen können "EEE" oder "EEEE" genutzt werden.

### <span style="color:#0b5394">Formatierungsbeispiele</span>

| Formatierung                                              | Ausgabe                         |
| --------------------------------------------------------- | ------------------------------- |
| `formatDate(today(), "dd.MM.yyyy")`                       | "15.06.2021"                    |
| `formatDate(today(), "dd.MM.yyyy HH:mm:ss")`              | "15.06.2021 08:00:00"           |
| `formatDate(today(), "dd.MM.yyyy HH:mm:ss.SSS")`          | "15.06.2021 08:00:00.000"       |
| `formatDate(today(),"dd. MMMM, yyyy")`                    | "15. Juni, 2021"                |
| `formatDate(today(),"QQQQ, yyyy")`                        | "2. Quartal, 2021"              |
| `formatDate(today(),"'Der 'dd. MMMM' ist ein Feiertag'")` | "Der 15. Juni ist ein Feiertag" |

## <span style="color:#0b5394">**Datumsformeln zum Erzeugen von Daten**</span>

Folgende Formeln dienen dem erstellen von spezifischen Daten.
Alle Formeln liefern einen Zeitpunkt zurück, welcher aus Datum, Stunde, Minute und Sekunden besteht.

Hinweis: diese Formeln sollten nicht direkt im Baustein _Textformel_ oder an weiteren Stellen, wo Text erwartet wird, genutzt werden, da diese Daten intern mit UTC verarbeitet werden. Bei der direkten Nutzung kommen also ggf. durch die Zeitverschiebung vermeintlich falsche Daten heraus. Um das zu vermeiden, sollte die Formel `formatDate(date, format)` genutzt werden.
Beim Baustein _Datumsformel_ können folgende Formeln jedoch problemlos genutzt werden.

| Formel                               | Beschreibung                                                                                   | Beispiel (Ausgehend vom 15.06.2021, 8:00 Uhr als Aufrufzeitpunkt)                                              | Eingabewerte (Werte in den Klammern)        | Gelieferter Ergebnistyp |
| ------------------------------------ | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ----------------------- |
| `date(year, month, day)`             | Erstellt ein Datum aus gegebenem Jahr, Monat und Tag                                           | `date(2021, 6, 15)` liefert das Datum _15.06.2021 00:00:00.000000_                                             | 1. Wert: Zahl, 2. Wert: Zahl, 3. Wert: Zahl | Datum                   |
| `today()`                            | Datum, bestehend aus dem aktuellen Tag um 00:00 Uhr                                            | `today()` liefert _15.06.2021 00:00:00.000000_                                                                 |                                             | Datum                   |
| `now()`                              | Datum, bestehend aus dem aktuellen Zeitpunkt                                                   | `now()` liefert _15.06.2021 08:00:00.000000_                                                                   |                                             | Datum                   |
| `parseDate(text)`                    | Erstellt Datum aus Text im Format "dd.mm.yy" oder "dd.mm.yyyy", nur dieses Format ist zulässig | `parseDate("15.06.2021")` liefert _15.06.2021 08:00:00.000000_                                                 | 1. Wert: Text                               | Datum                   |
| `tryParseDate(text)`                 | Versucht ein Datum aus *value* zu machen. Tritt ein Fehler auf wird defaultDateTime zurück gegeben | `tryParseDate(\"11.11.24\")` liefert _2024-11-11 00:00:00.000_; `tryParseDate(1k.02.24)` liefert _1970-01-01 00:00:00.000_ | 1. Wert: Beliebiger Wert    | Datum                   |
| `defaultDateTime`                    | Gibt das Datum 00:00 01.01.1970. Dieses Datum wird nicht angezeigt                             | `defaultDateTime` liefert _1970-01-01 00:00:00.000_                                                            |                                             | Datum                   |
| `startOfWeek()`, `endOfWeek()`       | Beginn/Ende der aktuellen Kalenderwoche                                                        | `startOfWeek()` liefert _14.06.2021 00:00:00.000000_, `endOfWeek()` liefert _20.06.2021 00:00:00.000000_       |                                             | Datum                   |
| `startOfMonth()`, `endOfMonth()`     | Beginn/Ende des aktuellen Monats                                                               | `startOfMonth()` liefert _01.04.2021 00:00:00.000000_, `endOfMonth()` liefert _30.06.2021 00:00:00.000000_     |                                             | Datum                   |
| `startOfQuarter()`, `endOfQuarter()` | Beginn/Ende des aktuellen Quartals                                                             | `startOfQuarter()` liefert _01.04.2021 00:00:00.000000_, `endOfQuarter()` liefert _30.06.2021 00:00:00.000000_ |                                             | Datum                   |
| `startOfYear()`, `endOfYear()`       | Beginn/Ende des aktuelles Jahres                                                               | `startOfYear()` _01.01.2021 00:00:00.000000_, `endOfYear()` _31.12.2021 00:00:00.000000_                       |                                             | Datum                   |
| `currentMonth()`                     | Liefert den aktuellen Monat in Form eines Textes                                               | `currentMonth()` liefert "2021-06"                                                                             |                                             | Datum                   |

## <span style="color:#0b5394">**Datumsformeln zum Errechnen von Daten**</span>

Folgende Formeln sind dafür da, bestehende Daten zu verändern. Bspw. um ausgehend von einem Kaufdatum eine Bezahlungsfrist zu errechnen.

| Formel                                                  | Beschreibung                                    | Beispiel (Ausgehend vom 15.06.2021, 8:00 Uhr)                                                                             | Eingabewerte (Werte in den Klammern) | Gelieferter Ergebnistyp |
| ------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------------------- |
| `addMinutes(date, days)`, `subtractMinutes(date, days)` | Minuten addiert/subtrahiert auf einen Zeitpunkt | `addMinutes(now(),1)` liefert _15.06.2021 8:01:00.000000_, `subtractMinutes(now(),1)` liefert _15.06.2021 7:59:00.000000_ | 1. Wert: Datum, 2. Wert: Zahl        | Datum                   |
| `addHours(date, hours)`, `addHours(date, hours)`        | Stunden addiert/subtrahiert auf einen Zeitpunkt | `addHours(now(),1)` liefert _15.06.2021 9:00:00.000000_, `subtractHours(now(),1)` liefert _15.06.2021 7:00:00.000000_     | 1. Wert: Datum, 2. Wert: Zahl        | Datum                   |
| `addDays(date, days)`, `subtractDays(date, days)`       | Tage addiert/subtrahiert auf einen Zeitpunkt    | `addDays(now(),1)` liefert _16.06.2021 8:00:00.000000_, `subtractDays(now(),1)` liefert _14.06.2021 8:00:00.000000_       | 1. Wert: Datum, 2. Wert: Zahl        | Datum                   |
| `addWeeks(date, weeks)`, `subtractWeeks(date, weeks)`   | Monate addiert/subtrahiert auf einen Zeitpunkt  | `addWeeks(now(), 1)`, liefert _22.06.2021 8:00:00.000000_, `subtractWeeks(now(), 1)` liefert _22.06.2021 8:00:00.000000_  | 1. Wert: Datum, 2. Wert: Zahl        | Datum                   |
| `addMonths(date, weeks)`, `subtractMonths(date, weeks)` | Monate addiert/subtrahiert auf einen Zeitpunkt  | `addMonths(now(), 1)` liefert _15.07.2021 8:00:00.000000_, `subtractMonths(now(), 1)` liefert _15.05.2021 8:00:00.000000_ | 1. Wert: Datum, 2. Wert: Zahl        | Datum                   |

## <span style="color:#0b5394">**Datumsformeln zu Kalenderwochen**</span>

Folgende Formeln sind für das Ermitteln von Kalenderwoche anhand von Daten da.

| Formel                                                | Beschreibung                                                      | Beispiel (Ausgehend vom 15.06.2021, 8:00 Uhr)                                                   | Eingabewerte Werte (Werte in den Klammern) | Gelieferter Ergebnistyp |
| ----------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------ | ----------------------- |
| `calendarWeek(date)`                                  | Kalenderwoche des gegebenen Datums                                | `calendarWeek(today())` liefert _24_                                                            | 1. Wert: Datum                             | Zahl                    |
| `currentWeek`                                         | aktuelle Kalenderwoche                                            | `currentWeek` liefert "2021-W24"                                                                |                                            | Text                    |
| `dateToWeek(date)`                                    | Kalenderwoche des Datums                                          | `dateToWeek(date(2024,01,01))` liefert "2024-W01"                                               | 1. Wert: Datum                             | Text                    |
| `addWeeks(week, weeks)`, `subtractWeeks(week, weeks)` | Addiert/Subtrahiert gegebene Anzahl von Wochen zum/vom Wochentext | `addWeeks("2021-W24", 1)` liefert "2021-W25", `subtractWeeks("2021-W24", 1)` liefert "2021-W23" | 1. Wert: Wochentext, 2. Wert: Zahl         | Text                    |

## <span style="color:#0b5394">**Monatsformeln**</span>

Folgende Formeln sind für das Ermitteln von Monaten anhand von Daten da.

| Formel                                                      | Beschreibung                                               | Beispiel (Ausgehend vom 15.06.2021, 8:00 Uhr)                                                 | Eingabewerte (Werte in den Klammern)                   | Gelieferter Ergebnistyp |
| ----------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ----------------------- |
| `currentMonth`                                              | aktueller Monat                                            | `currentMonth` liefert "2021-08"                                                              |                                                        | Text                    |
| `dateToMonth(date)`                                         | Monat des Datums                                           | `dateToMonth(date(2024,01,01))` liefert "2024-01"                                             | 1. Wert: Datum                                         | Text                    |
| `addMonths(month, months)`, `subtractMonths(month, months)` | Addiert/Subtrahiert gegebene Monatszahl zum/vom Monatstext | `addMonths("2021-05", 1)` liefert "2021-06", `subtractMonths("2021-05", 1)` liefert "2021-04" | 1. Wert: Monatstext im Format "YYYY-MM", 2. Wert: Zahl | Text                    |

## <span style="color:#0b5394">**Weitere Datumsformeln**</span>

| Formel                                        | Beschreibung                                                                                                                                                    | Beispiel                                                                                                                                                                                                                         | Eingabewerte (Werte in den Klammern)                                         | Gelieferter Ergebnistyp          |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------- |
| `datesBetween(startDate, endDate, [options])` | Daten zwischen den zwei gegebenen Daten. Unter `[option]` kann optional über den Text "weekdays" angegeben werden, dass nur Wochentage angegeben werden sollen. | `datesBetween(today(), date(2021,6,19))` liefert _[15.06.2021, 16.06.2021, 17.06.2021, 18.06.2021, 19.06.2021]_, `datesBetween(today(), date(2021,6,19), "weekdays")` liefert _[15.06.2021, 16.06.2021, 17.06.2021, 18.06.2021]_ | 1. Wert: Datum, 2. Wert: Datum, 3. Wert: optional, Text "weekdays"           | Dynamischer Wert/Liste von Daten |
| `daysBetween(startDate, endDate)`             | Anzahl der Tage zwischen zwei Daten/Zeitpunkten                                                                                                                 | `daysBetween(date(2024,2,18), date(2021,2,20))` liefert 2, `daysBetween(date(2024,2,18), addHours(date(2024,2,20), 12))` liefert 2,5, `daysBetween(date(2024,2,20), date(2024,2,18))` liefert -2                                 | 1. Wert: Datum (optional mit Uhrzeit), 2. Wert: Datum (optional mit Uhrzeit) | Zahl                             |
| `hoursBetween(startDate, endDate)`            | Anzahl der Stunden zwischen zwei Daten/Zeitpunkten                                                                                                              | `hoursBetween(date(2024,2,18), date(2021,2,20))` liefert 48, `hoursBetween(date(2024,2,18), addHours(date(2024,2,20), 12))` liefert 60, `hoursBetween(date(2024,2,20), date(2024,2,18))` liefert -48                             | 1. Wert: Datum (optional mit Uhrzeit), 2. Wert: Datum (optional mit Uhrzeit) | Zahl                             |
