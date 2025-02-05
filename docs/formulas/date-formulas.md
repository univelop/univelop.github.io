---
title: Datumsformeln
layout: title
parent: Formelsammlung
nav_order: 2
redirect_from:
    - /docs/formulas/childs/date-formulas.html
---


## <span style="color:#0b5394">**formatDate**</span>

Die Formel `formatDate(date, format)` dient dem strukturierten Ausgeben von Datumswerten. Dabei wird ein Datum und das gewünschte Format angegeben. Das gewünschte Format wird über einen Text für `format` angegeben.

Dabei sollte beachtet werden, dass Texte innerhalb des Formates per Delimiter(`'`) angegeben werden müssen.
So ist bspw. das Format `"Der dd. MMMM ist ein Feiertag"` nicht zulässig, da der enthaltene Text "Der [...] ist ein Feiertag" mit als Format interpretiert wird. Um speziell Text mit einem Datum zu verbinden, sollte ein Delimiter genutzt werden: `"'Der 'dd. MMMM' ist ein Feiertag'"`

### <span style="color:#0b5394">Formatierungsmöglichkeiten bei formatDate</span>

Das Format kann beliebig aus den folgenden Symbolen zusammengesetzt werden:

| Symbol | Beschreibung                                         | Beispiel    |
| ------ | ---------------------------------------------------- | ----------- |
| G      | Bezeichnung                                          | AD          |
| yyyy   | Jahr                                                 | 2022        |
| M      | Monat im Jahr (kurz)                                 | 1           |
| MM     | Monat im Jahr (lang)                                 | 01          |
| MMM    | Monatsname (kurz)                                    | Jan         |
| MMMM   | Monatsname (lang)                                    | Januar      |
| L      | alleinstehender Monat                                | Januar & 01 |
| d      | Tag im Monat                                         | 5           |
| dd     | Tag im Monat (lang)                                  | 05          |
| c      | alleinstehender Tag                                  | 10          |
| h      | Stunde am/pm (1~12)                                  | 12          |
| H      | Stunde in Tag (0~23)                                 | 0           |
| m      | Minuten einer Stunde                                 | 30          |
| s      | Sekunden einer Minute                                | 55          |
| S      | fractional second                                    | 978         |
| EEE    | Wochentag (kurz)                                     | Do.         |
| EEEE   | Wochentag (lang)                                     | Donnerstag  |
| D      | Tag im Jahr                                          | 189         |
| a      | am/pm marker                                         | PM          |
| k      | hour in day (1~24)                                   | 24          |
| K      | hour in am/pm (0~11)                                 | 0           |
| Q      | Quartal                                              | 3           |
| QQQ    | Quartal (kurz)                                       | Q3          |
| QQQQ   | Quartal (lang)                                       | 3. Quartal  |
| '      | Angabe von Text innerhalb des Formates               | 'Date='     |
| ''     | Angabe von Text innerhalb des Formates mit hochkomma | ''o'clock'' |

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

## <span style="color:#0b5394">**Datumskonstanten**</span>

{% include expression_variables_table.html category="date" %}


## <span style="color:#0b5394">**Formelübersicht**</span>

{% include expressions_table.html category="date" %}