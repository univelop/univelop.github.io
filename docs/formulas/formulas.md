---
layout: default
title: Formelsammlung
nav_order: 13
has_children: true
has_toc: true
---

# <span style="color:#0b5394">**Formelsammlung**</span>

|<span style="color:#0b5394">Formelkategorie/Formeln</span> | Beschreibung | Beispiel
|:------:              |:------------:            |:------------:
|<span style="color:#0b5394">Strukturformeln</span>|<span></span>|<span></span>
| [`if(condition,then)`](/docs/formulas/childs/other-formulas.html#strukturformel)   | Wenn die Bedingung wahr ist, dann liefere `then` Wert| `if(1==1, "wahr")` liefert "wahr"
| [`ifElse(condition,then,else)`](/docs/formulas/childs/other-formulas.html#strukturformel) | Wenn die Bedingung wahr ist, dann liefere `then` Wert, ansonsten `else` Wert | `ifElse(1==1, "wahr", "falsch")` liefert "wahr", `ifElse(1==2, "wahr", "falsch")` liefert "falsch"
|<span style="color:#0b5394">Logische Operatoren</span>  |<span></span>|<span></span>
| [`==`](/docs/formulas/childs/other-formulas.html#operatoren)            |Gleich               |`1 == 2` liefert false
| [`&&`](/docs/formulas/childs/other-formulas.html#operatoren)            |Und                  |`1 == 1 && 2 == 2` liefert true
| [`||`](/docs/formulas/childs/other-formulas.html#operatoren)            |Oder                 |`1 == 1 || 2 == 3` liefert true
| [`<`](/docs/formulas/childs/other-formulas.html#operatoren)             |Kleiner als          |`1 < 2` liefert true
| [`>`](/docs/formulas/childs/other-formulas.html#operatoren)             |Größer als           |`1 > 2` liefert false
| [`!=`](/docs/formulas/childs/other-formulas.html#operatoren)            |Ungleich             |`1 != 2` liefert true
| [`<=`](/docs/formulas/childs/other-formulas.html#operatoren)            |Kleiner gleich       |`1 <= 2` liefert true
| [`>=`](/docs/formulas/childs/other-formulas.html#operatoren)            |Größer gleich        |`1 >= 2` liefert false
|<span style="color:#0b5394">Rechensymbole</span>|<span></span>|<span></span>
| [`+`](/docs/formulas/childs/other-formulas.html#rechensymbole)             |Plus, Addition, Verbindung von zwei Texten      |`1 + 2` liefert 3, `"Hallo " + "Welt"` liefert "Hallo Welt"
| [`-`](/docs/formulas/childs/other-formulas.html#rechensymbole)             |Minus, Subtraktion   |`1 - 2` liefert -1
| [`*`](/docs/formulas/childs/other-formulas.html#rechensymbole)             |Mal, Multiplikation, Wiederholung von Text  |`2 * 3` liefert 6, `"Hallo " * 3` liefert "Hallo Hallo Hallo "
| [`/`](/docs/formulas/childs/other-formulas.html#rechensymbole)             |Geteilt, Division    |`6 / 2` liefert 3
| [`%`](/docs/formulas/childs/other-formulas.html#rechensymbole)             |Modulo, Restwert einer Teilung |`5 % 2` liefert 1
|<span style="color:#0b5394">Mathematische Funktionen</span>|<span></span>|<span></span>
|[`ceil(number)`](/docs/formulas/childs/number-formulas.html#zahlenformeln)             |Aufrunden            | `ceil(3.1)` liefert 4
|[`floor(number)`](/docs/formulas/childs/number-formulas.html#zahlenformeln)            |Abrunden             | `floor(3.9)` liefert 3
|[`round(number)`](/docs/formulas/childs/number-formulas.html#zahlenformeln)            |Runden               | `round(3.499)` liefert 3, `round(3.511)` liefert 4 
|[`abs(number)`](/docs/formulas/childs/number-formulas.html#zahlenformeln)              |Betragsfunktion      | `abs(-4)` liefert 4
|<span style="color:#0b5394">Datumsformeln</span>|<span></span>|(Beispiel Berechnungszeitpunkt: *15.06.2021 (Dienstag)* um 8:00 Uhr)
| [`formatDate(date, "format")`](/docs/formulas/childs/date-formulas.html#formatdate) | Formatiert ein Datum (Bezug auf [Baustein *Datum*](/docs/record-spec-settings/grand-childs-form/date.html)) in die gewählte Formatierung ([s. Formatierungsmöglichkeiten Datum](/docs/formulas/childs/date-formulas.html#formatierungsmöglichkeiten-bei-formatdate)) | `formatDate(today(), "dd.MM.yyyy")` liefert *15.06.2021*
|[`date(year,month,day)`](/docs/formulas/childs/date-formulas.html#datumsformeln-zum-erzeugen-von-daten ) | Intern nutzbares Datum aus gegebenem Jahr, Monat und Tag| `date(2021,06,15)` liefert *15.06.2021 00:00:00.000000*
|[`parseDate(text)`](/docs/formulas/childs/date-formulas.html#datumsformeln-zum-erzeugen-von-daten)  |Erstellt Datum aus Text im Format "dd.mm.yy" oder "dd.mm.yyyy"| Aufruf von "parseDate(15.06.2021)" liefert *15.06.2021 00:00:00.000000*
| [`today()`](/docs/formulas/childs/date-formulas.html#datumsformeln-zum-erzeugen-von-daten)     | aktuelles Datum | *15.06.2021 00:00:00.000000*
| [`now()`](/docs/formulas/childs/date-formulas.html#datumsformeln-zum-erzeugen-von-daten)     | aktueller Zeitpunkt | *15.06.2021 08:00:00.000000*
| [`calendarWeek(date)`](/docs/formulas/childs/date-formulas.html#datumsformeln-zu-kalenderwochen) | Kalenderwoche des gegebenen Datums| *24*
| [`currentWeek()`](/docs/formulas/childs/date-formulas.html#datumsformeln-zu-kalenderwochen)| aktuelle Kalenderwoche | *2021-W24*
|[`startOfWeek()`](/docs/formulas/childs/date-formulas.html#datumsformeln-zum-erzeugen-von-daten), [`endOfWeek()`](/docs/formulas/childs/date-formulas.html#datumsformeln-zum-erzeugen-von-daten)| Beginn/Ende der aktuellen Kalenderwoche |*14.06.2021 00:00:00.000000*, *20.06.2021 00:00:00.000000* 
| [`currentMonth()`]() | Aktueller Monat  | *2021-06*
|[`startOfMonth()`](/docs/formulas/childs/date-formulas.html#datumsformeln-zum-erzeugen-von-daten), [`endOfMonth()`](/docs/formulas/childs/date-formulas.html#datumsformeln-zum-erzeugen-von-daten)| Beginn/Ende des aktuellen Monats | *01.04.2021 00:00:00.000000*, *30.06.2021 00:00:00.000000*
| [`startOfQuarter()`](/docs/formulas/childs/date-formulas.html#datumsformeln-zum-erzeugen-von-daten), [`endOfQuarter()`](/docs/formulas/childs/date-formulas.html#datumsformeln-zum-erzeugen-von-daten)   | Beginn des aktuellen Quartals     | *01.04.2021 00:00:00.000000*, *30.06.2021 00:00:00.000000*
| [`startOfYear()`](/docs/formulas/childs/date-formulas.html#datumsformeln-zum-erzeugen-von-daten),[`endOfYear()`](/docs/formulas/childs/date-formulas.html#datumsformeln-zum-erzeugen-von-daten) | Beginn/Ende des aktuelles Jahres       | *01.01.2021 00:00:00.000000*, *31.12.2021 00:00:00.000000*
| [`datesBetween(date,date,[optionen])`](/docs/formulas/childs/date-formulas.html#weitere-datumsformeln) | Daten zwischen den zwei gegebenen Daten| *[15.06.2021, 16.06.2021, 17.06.2021, 18.06.2021]* Bei Angabe vom *18.06.2021* als zweites Datum 
| [`addMinutes(date,minutes)`](/docs/formulas/childs/date-formulas.html#datumsformeln-zum-errechnen-von-daten), [`subtractMinutes(date,minutes)`](/docs/formulas/childs/date-formulas.html#datumsformeln-zum-errechnen-von-daten)  | Minuten addiert/subtrahiert auf einen Zeitpunkt | Aufruf von "addMinutes(today(),1)" ergibt *15.06.2021 8:01:00.000000*
| [`addHours(date,hours)`](/docs/formulas/childs/date-formulas.html#datumsformeln-zum-errechnen-von-daten), [`subtractHours(date,hours)`](/docs/formulas/childs/date-formulas.html#datumsformeln-zum-errechnen-von-daten)    | Stunden addiert/subtrahiert auf einen Zeitpunkt | Aufruf von "addHours(today(),1)" ergibt *15.06.2021 9:00:00.000000*
| [`addDays(date, days)`](/docs/formulas/childs/date-formulas.html#datumsformeln-zum-errechnen-von-daten), [`subtractDays(date, days)`](/docs/formulas/childs/date-formulas.html#datumsformeln-zum-errechnen-von-daten)       | Tage addiert/subtrahiert auf einen Zeitpunkt | Aufruf von "addDays(today(),1)" ergibt *16.06.2021 8:00:00.000000*
| [`addWeeks(date, weeks)`](/docs/formulas/childs/date-formulas.html#datumsformeln-zum-errechnen-von-daten), [`subtractWeeks(date, weeks)`](/docs/formulas/childs/date-formulas.html#datumsformeln-zum-errechnen-von-daten)     | Monate addiert/subtrahiert auf einen Zeitpunkt | Aufruf von "addWeeks(today(),1)" ergibt *22.06.2021 8:00:00.000000*
| [`addMonths(date, months)`](/docs/formulas/childs/date-formulas.html#datumsformeln-zum-errechnen-von-daten), [`subtractMonths(date, months)`](/docs/formulas/childs/date-formulas.html#datumsformeln-zum-errechnen-von-daten)   | Monate addiert/subtrahiert auf einen Zeitpunkt | Aufruf von "addMonths(today(),1)" ergibt *15.07.2021 8:00:00.000000*
|<span style="color:#0b5394">Textkonstanten/Daten vom aktuellen Nutzer </span>|<span></span>|<span></span> 
| [`currentUserName`](/docs/formulas/childs/text-formulas.html#textkonstanten)       | Name des aktuellen Benutzers   | "Max Mustermann"
| [`currentUserId`](/docs/formulas/childs/text-formulas.html#textkonstanten)         | ID des aktuellen Benutzers     | "123abc123abc123abc123abc1231"
| [`currentUserEmail`](/docs/formulas/childs/text-formulas.html#textkonstanten)      | E-Mail des aktuellen Benutzers | "max.mustermann@mail.de"
| [`currentUserTeamName`](/docs/formulas/childs/text-formulas.html#textkonstanten)   | Name des aktiven Teams des aktuellen Benutzers | "Team 1"
| [`currentUserTeamId`](/docs/formulas/childs/text-formulas.html#textkonstanten)     | ID des aktiven Teams des aktuellen Benutzers | "123ab123"
| [`currentUserRoleName`](/docs/formulas/childs/text-formulas.html#textkonstanten)   | Name der aktiven Rolle des aktuellen Benutzers | "Admin"
| [`currentUserRoleId`](/docs/formulas/childs/text-formulas.html#textkonstanten)     | ID der aktiven Rolle des aktuellen Benutzers | "1234abcd"
|<span style="color:#0b5394">Textformeln</span>|<span></span>|<span></span> 
| [`toText(value)`](/docs/formulas/childs/text-formulas.html#textformeln-1)  | Wandelt einen nicht textuellen Wert in eine textuelle Darstellung des Wertes um | `toText(123)` liefert "123"
| [`toNumber(value)`](/docs/formulas/childs/number-formulas.html#zahlenformeln) | Wandelt einen Text in eine numerische Darstellung des Wertes um | `toNumber("123")` liefert 123
| [`contains(text,sub)`](/docs/formulas/childs/text-formulas.html#textbezogene-formeln) | Gibt Ja/Nein abhängig davon zurück, ob der Text *sub* im Text *text* vorhanden ist. | `contains("Hallo Welt","Welt")`  liefert true
| [`textLength(value)`](/docs/formulas/childs/text-formulas.html#textbezogene-formeln)  | Gibt die Textlänge inklusive Leerzeichen aus | `textLength("Hallo Welt")` liefert 10
| [`firstLetters(value,count)`](/docs/formulas/childs/text-formulas.html#textformeln-1) | Liefert die ersten *count* Zeichen vom Anfang des Textes | `firstLetters("Hallo Welt",5)` liefert "Hallo"
| [`lastLetters(value,count)`](/docs/formulas/childs/text-formulas.html#textformeln-1) | Liefert die letzten *count* Zeichen vom Ende des Textes | `lastLetters("Hallo Welt",4)` liefert "Welt"
| [`firstWords(value,count)`](/docs/formulas/childs/text-formulas.html#textformeln-1) | Liefert die ersten *count* Wörter vom Anfang des Textes. Als Wörter zählen solche, die durch nur *ein* Leerzeichen getrennt sind. | `firstWords("Hallo du große Welt",2)` liefert "Hallo du", `firstWords("Hallo,  du große Welt",2)` liefert "Hallo  du"
| [`lastWords(value,count)`](/docs/formulas/childs/text-formulas.html#textformeln-1) | Liefert die ersten *count* Wörter vom Anfang des Textes. Als Wörter zählen solche, die durch nur *ein* Leerzeichen getrennt sind. | *Der Stopp der Zählung erfolgt nach einem Leerzeichen und nur nach einem Leerzeichen*
| [`replace(text,find,sub)`](/docs/formulas/childs/text-formulas.html#textformeln-1) | Ersetzt jedes vorkommen des Textes *find* im Text *text* mit *sub* | `replace("Hallo Welt", "Welt", "Mond")` liefert "Hallo Mond"
| [`count(list)`](/docs/formulas/childs/number-formulas.html#zahlenformeln) | Zählt die Elemente einer Liste/eines dynamischen Wertes | `count([1,2,4])` liefert 3
| [`formatNumber(number, decimalCount, thousandSeparator)`](/docs/formulas/childs/text-formulas.html#textformeln-1) | Formatiert die Nummber zu gewünschtem Format | `formatNumber(1000,2,true)` das Ergebnis *1.000,00*  
| [`randomString(length)`](/docs/formulas/childs/text-formulas.html#textformeln-1) | Erzeugt eine zufällige Zeichenkette (bestehend aus Kleinbuchstaben und Zahlen) mit gegebener Länge  | `randomString(10)` könnte z.B. "f49gf623bk" liefern
| [`toUpperCase(text)`](/docs/formulas/childs/text-formulas.html#textformeln-1)  | Konvertiert den gegebenen Text auf Großbuchstaben | `toUpperCase("Hallo Welt")` liefert "HALLO WELT"
| [`toLowerCase(text)`](/docs/formulas/childs/text-formulas.html#textformeln-1)  | Konvertiert den gegebenen Text auf Kleinbuchstaben | `toLowerCase("Hallo Welt")` liefert "hallo welt"
| [`parseJson(jsontext)`](/docs/formulas/childs/text-formulas.html#textformeln-1) | Konvertiert einen Json-String zu einem Json-Objekt | <span></span>
| [`basicAuth(username, password)`](/docs/formulas/childs/text-formulas.html#textformeln-1) | Verschlüsselt Nutzername und Passwort  | <span></span>