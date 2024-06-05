---
layout: default
title: Weitere Formeln
nav_order: 4
parent: Formelsammlung
---

# <span style="color:#0b5394">**Weitere Formeln**</span>

## <span style="color:#0b5394">**Strukturformel**</span>

Strukturformeln dienen dem zusammenstellen von komplexeren Formeln, welche dynamisch Werte berechnen.

| Formel mit Beispielwert | Beispielausgabe | Beschreibung | Eingabewerte (Werte in den Klammern) |
|------|------|------|------|
| `if(1 == 1, 2)`| *2* | Wenn die Bedingung wahr ist, dann liefere `then` Wert| 1. Wert: Ja/Nein, 2. Wert: beliebig|
| `ifElse(1 == 2, 1, 2)` | *2* | Wenn die Bedingung wahr ist, dann liefere `then` Wert, ansonsten `else` Wert | 1. Wert: Ja/Nein, 2. Wert: beliebig, 3. Wert: beliebig|

## <span style="color:#0b5394">**Operatoren**</span>

Operatoren dienen dem Kombinieren von mehreren, verschiedenartigen Werten zu einem Ja/Nein-Wert. Dabei können Operatoren auch verschachtelt werden.

Für einen Operator müssen immer zwei gleichartige Werte angegeben werden. Dabei können die Werte auch Formeln sein, die einen Wert zurückgeben.

| Formel | Beschreibung | Beispiel | Eingabewerte (`left` und `right`) | Gelieferter Ergebnistyp | 
|------|------|------|------|------|
| `left == right` | Prüfung auf Gleichheit | `1 == 1` liefert *true* | 1. & 2. Wert: Ja/Nein, Zahl, Text | Ja/Nein |
| `left != right` | Prüfung auf Ungleichheit | `1 != 2` liefert *true* | 1. & 2. Wert: Ja/Nein, Zahl, Text | Ja/Nein |
| `left && right` | Und-Operator, Prüfung auf Gültigkeit zweier Bedingungen | `true && false` liefert *false*, `true && true` liefert *true* | 1. & 2. Wert: Ja/Nein | Ja/Nein |
| `left || right` | Oder-Operator, Prüfung auf Gültigkeit mindestens einer von zwei Bedingungen | `true || false` liefert *true* | 1. & 2. Wert: Ja/Nein | Ja/Nein |
| `left < right` | Prüfung auf Kleiner als | `1 < 3` liefert *true* | 1. & 2. Wert: Zahl, Text | Ja/Nein |
| `left > right` | Prüfung auf Größer als | `1 > 3` liefert *false* | 1. & 2. Wert: Zahl, Text | Ja/Nein |
| `left <= right` | Prüfung auf Kleiner gleich | `1 <= 1` liefert *true* | 1. & 2. Wert: Zahl, Text | Ja/Nein |
| `left >= right` | Prüfung auf Größer gleich | `1 >= -1` liefert *true* | 1. & 2. Wert: Zahl, Text | Ja/Nein |

## <span style="color:#0b5394">**Rechensymbole**</span>

| Formel | Beschreibung | Beispiel | Eingabewerte (`left` und `right`) | Gelieferter Ergebnistyp | 
|------|------|------|------|------|
| `left + right` | Plus, Addition, Textverbindung | `1 + 1` liefert 2, `"Hal" + "lo"` liefert "Hallo" | 1. & 2. Wert: Zahl oder Text | Zahl oder Text |
| `left - right` | Minus, Subtraktion | `1 - 2` liefert -1 | 1. & 2. Wert: Zahl | Zahl |
| `left * right` | Mal, Multiplikation, Text-Wiederholung | `2 * 2` liefert 4, `"Hallo" * 2` liefert "HalloHallo" | 1. Wert: Text oder Zahl, 2. Wert: Zahl | Zahl oder Text |
| `left / right` | Geteilt, Division | `4 / 2` liefert 2 | 1. & 2. Wert: Zahl | Zahl |
| `left % right` | Modulo (Restwert einer Teilung) | `5 % 2` liefert 1 | 1. & 2. Wert: Zahl | Zahl |
