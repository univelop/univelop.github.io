---
title: Weitere Formeln
layout: title
parent: Formelsammlung
nav_order: 6
redirect_from:
    - /docs/formulas/childs/other-formulas.html
---

## <span style="color:#0b5394">**Operatoren**</span>

Operatoren dienen dem Kombinieren von mehreren, verschiedenartigen Werten zu einem Ja/Nein-Wert. Dabei können Operatoren auch verschachtelt werden.

Für einen Operator müssen immer zwei gleichartige Werte angegeben werden. Dabei können die Werte auch Formeln sein, die einen Wert zurückgeben.

| Formel          | Beschreibung                                            | Beispiel                                                       | Eingabewerte (`left` und `right`)                                           | Gelieferter Ergebnistyp |
| --------------- | ------------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------- | --- | --------------------- | --------------------- | ------- |
| `left == right` | Prüfung auf Gleichheit                                  | `1 == 1` liefert _true_                                        | 1. & 2. Wert: Ja/Nein, Zahl, Text                                           | Ja/Nein                 |
| `left != right` | Prüfung auf Ungleichheit                                | `1 != 2` liefert _true_                                        | 1. & 2. Wert: Ja/Nein, Zahl, Text                                           | Ja/Nein                 |
| `left && right` | Und-Operator, Prüfung auf Gültigkeit zweier Bedingungen | `true && false` liefert _false_, `true && true` liefert _true_ | 1. & 2. Wert: Ja/Nein                                                       | Ja/Nein                 |
| `left           |                                                         | right`                                                         | Oder-Operator, Prüfung auf Gültigkeit mindestens einer von zwei Bedingungen | `true                   |     | false` liefert _true_ | 1. & 2. Wert: Ja/Nein | Ja/Nein |
| `left < right`  | Prüfung auf Kleiner als                                 | `1 < 3` liefert _true_                                         | 1. & 2. Wert: Zahl, Text                                                    | Ja/Nein                 |
| `left > right`  | Prüfung auf Größer als                                  | `1 > 3` liefert _false_                                        | 1. & 2. Wert: Zahl, Text                                                    | Ja/Nein                 |
| `left <= right` | Prüfung auf Kleiner gleich                              | `1 <= 1` liefert _true_                                        | 1. & 2. Wert: Zahl, Text                                                    | Ja/Nein                 |
| `left >= right` | Prüfung auf Größer gleich                               | `1 >= -1` liefert _true_                                       | 1. & 2. Wert: Zahl, Text                                                    | Ja/Nein                 |

## <span style="color:#0b5394">**Rechensymbole**</span>

| Formel         | Beschreibung                           | Beispiel                                              | Eingabewerte (`left` und `right`)      | Gelieferter Ergebnistyp |
| -------------- | -------------------------------------- | ----------------------------------------------------- | -------------------------------------- | ----------------------- |
| `left + right` | Plus, Addition, Textverbindung         | `1 + 1` liefert 2, `"Hal" + "lo"` liefert "Hallo"     | 1. & 2. Wert: Zahl oder Text           | Zahl oder Text          |
| `left - right` | Minus, Subtraktion                     | `1 - 2` liefert -1                                    | 1. & 2. Wert: Zahl                     | Zahl                    |
| `left * right` | Mal, Multiplikation, Text-Wiederholung | `2 * 2` liefert 4, `"Hallo" * 2` liefert "HalloHallo" | 1. Wert: Text oder Zahl, 2. Wert: Zahl | Zahl oder Text          |
| `left / right` | Geteilt, Division                      | `4 / 2` liefert 2                                     | 1. & 2. Wert: Zahl                     | Zahl                    |
| `left % right` | Modulo (Restwert einer Teilung)        | `5 % 2` liefert 1                                     | 1. & 2. Wert: Zahl                     | Zahl                    |
