---
title: Suchen und Filtern
layout: title
nav_order: 7
redirect_from:
    - /docs/search-and-filters.html
---

## Suchen

Mit dem Lupen-Symbol kann innerhalb einer Liste, einer Filterkachel oder einer verknüpften Datensatzliste nach Inhalten gesucht werden.

Univelop bietet eine **Volltextsuche** — es wird immer am Anfang eines Worts gesucht. Die Suche nach "Mey" findet "Meyer", aber die Suche nach "yer" nicht. Die Suche umfasst alle Werte innerhalb eines Datensatzes.

Die Sortierung der Suchergebnisse zeigt zuerst exakte Treffer und anschließend ähnliche Werte. Die Reihenfolge ist nicht konfigurierbar. Für eine sortierte Ansicht empfiehlt sich die Verwendung von Filtern.

## Filter und Sortierung

Filter und Sortierung können überall dort eingestellt werden, wo eine Liste von Datensätzen angezeigt wird — in Listen, Filterkacheln sowie den Bausteinen Datensatzliste, Tabelle und Matrix.

### Globale vs. temporäre Filter

- **Globale Filter** werden im Designmodus festgelegt und gelten dauerhaft
- **Temporäre Filter** werden im Bearbeitungsmodus gesetzt und gelten nur für die aktuelle Sitzung. Sie können als eigene Kachel gespeichert werden.

### Sortierung

Die Sortierung kann auf- und absteigend nach einem bestimmten Baustein erfolgen. Dabei ist zu beachten, dass Zahlen in Textfeldern nicht numerisch, sondern alphabetisch sortiert werden (1, 10, 2, ... statt 1, 2, 10).

Soll nach mehr als einem Feld sortiert werden, kann eine Textformel zur Kombination der Werte verwendet werden.

### Filter

Ein Filter besteht aus drei Feldern: dem Baustein (links), dem Operator (Mitte) und dem Filterwert (rechts).

| Operator | Beschreibung |
|---|---|
| `=` | Gleich |
| `<`, `>` | Kleiner / größer als |
| `<=`, `>=` | Kleiner-gleich / größer-gleich |
| `in` | Einer von mehreren Werten (ODER-Verknüpfung) |

Mehrere Filter werden als **UND** verknüpft. Für eine ODER-Verknüpfung innerhalb eines Bausteins wird der `in`-Operator verwendet.

**Beispiel:** Alle Baumaschinen ausgeben, die sich in Wartung befinden oder defekt sind → `Status` `in` `[Wartung, Defekt]`

### Datumsfilter

Datumswerte können nicht nur auf einen genauen Tag, sondern auch auf **Woche** oder **Monat** gefiltert werden:

| Filter | Format | Beispiel |
|---|---|---|
| Datum - Woche | `yyyy-Wkw` | `2023-W43` |
| Datum - Monat | `yyyy-mm` | `2023-10` |

Für dynamische Filter stehen die Formeln `currentWeek` und `currentMonth` zur Verfügung.

## Lückenhafte Ergebnisse

Bei mehr als **200 Treffern** werden die Ergebnisse abgeschnitten. In diesem Fall empfehlen wir, spezifischere Gleichheitsfilter (`=`, `in`) hinzuzufügen, um die Ergebnismenge zu reduzieren.

Mit dem Standardfilter **Letzte 2 Monate** werden nur Einträge angezeigt, die im aktuellen oder letzten Monat angelegt oder bearbeitet wurden.
