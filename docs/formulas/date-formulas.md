---
title: Datumsformeln
layout: title
parent: Formeln
nav_order: 3
redirect_from:
    - /docs/formulas/childs/date-formulas.html
    - /docs/how-to-use-formulas/date-formulas.html
---

Datumsformeln dienen dem Erstellen, Berechnen und Formatieren von Datumswerten. Da Datumswerte nicht direkt als Text angegeben werden können, werden sie immer über einen Datumsbaustein (per technischem Namen) oder eine Datumsformel wie `today()` bereitgestellt.

## formatDate

Die Formel `formatDate(datum, format)` gibt ein Datum in einem bestimmten Format als Text aus. Das Format wird als Zeichenkette angegeben.

{: .hint }
Text innerhalb des Formats muss in einfache Anführungszeichen (`'`) eingeschlossen werden: `"'Der 'dd. MMMM' ist ein Feiertag'"`.

### Formatierungssymbole

| Symbol | Beschreibung | Beispiel |
|--------|-------------|---------|
| yyyy | Jahr | 2022 |
| M | Monat (kurz) | 1 |
| MM | Monat (zweistellig) | 01 |
| MMM | Monatsname (kurz) | Jan |
| MMMM | Monatsname (lang) | Januar |
| d | Tag im Monat | 5 |
| dd | Tag im Monat (zweistellig) | 05 |
| EEE | Wochentag (kurz) | Do. |
| EEEE | Wochentag (lang) | Donnerstag |
| H | Stunde (0–23) | 0 |
| m | Minuten | 30 |
| s | Sekunden | 55 |
| Q | Quartal | 3 |
| QQQQ | Quartal (lang) | 3. Quartal |
| ' | Text-Delimiter | 'Datum=' |

### Formatierungsbeispiele

| Formel | Ergebnis |
|--------|---------|
| `formatDate(today(), "dd.MM.yyyy")` | "15.06.2021" |
| `formatDate(today(), "dd.MM.yyyy HH:mm:ss")` | "15.06.2021 08:00:00" |
| `formatDate(today(), "dd. MMMM, yyyy")` | "15. Juni, 2021" |
| `formatDate(today(), "QQQQ, yyyy")` | "2. Quartal, 2021" |
| `formatDate(today(), "'Der 'dd. MMMM' ist ein Feiertag'")` | "Der 15. Juni ist ein Feiertag" |

## Rechnen mit Datumsformeln

Datumsformeln können mit `+` und `-` kombiniert werden, um Tage zu addieren oder zu subtrahieren:

```
today() + 5        → 5 Tage in der Zukunft
today() - 5        → 5 Tage in der Vergangenheit
startOfMonth() + 10 → 11. des aktuellen Monats
```

Alternativ stehen `addDays()`, `subtractDays()`, `addMonths()` und `subtractMonths()` zur Verfügung.

{: .warning }
Die Berechnung mit `subtractMonths(endOfMonth(), 1)` liefert falsche Ergebnisse wegen unterschiedlicher Monatslängen. Stattdessen `startOfMonth() - 1` verwenden, um den letzten Tag des Vormonats zu erhalten.

### Dynamische Zeitspannen für Filter

| Zeitspanne | Von | Bis |
|-----------|-----|-----|
| Aktuelle Woche | `startOfWeek()` | `endOfWeek()` |
| Letzte Woche | `startOfWeek() - 7` | `endOfWeek() - 7` |
| Aktueller Monat | `startOfMonth()` | `endOfMonth()` |
| Letzter Monat | `subtractMonths(startOfMonth(), 1)` | `startOfMonth() - 1` |

## Datumskonstanten

{% include expression_variables_table.html category="date" %}

## Formelübersicht

{% include expressions_table.html category="date" %}
