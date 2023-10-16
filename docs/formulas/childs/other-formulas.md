---
layout: default
title: Weitere Formeln
nav_order: 4
parent: Formelsammlung
---

# <span style="color:#0b5394">**Weitere Formeln**</span>

## <span style="color:#0b5394">**Strukturformel**</span>

Strukturformeln dienen dem zusammenstellen von komplexeren Fomeln, welche dynamisch Werte berechnen.

| Formel mit Beispielwert | Beispielausgabe | Beschreibung | Einzugebene Werte (Werte in den Klammern) |
|------|------|------|------|
| `if(1 == 1, 2)`| *2* | Wenn die Bedingung wahr ist, dann liefere `then` Wert| 1. Wert: Ja/Nein, 2. Wert: beliebig|
| `ifElse(1 == 2, 1, 2)` | *2* | Wenn die Bedingung wahr ist, dann liefere `then` Wert, ansonsten `else` Wert | 1. Wert: Ja/Nein, 2. Wert: beliebig, 3. Wert: beliebig|

## <span style="color:#0b5394">**Operatoren**</span>

Operatoren dienen dem Kombinieren von mehreren, verschiedenartigen Werten zu einem Ja/Nein-Wert. Dabei können Operatoren auch verschachtelt werden.

Für einen Operator müssen immer zwei gleichartige Werte angegeben werden. Dabei können die Werte auch Formeln sein, die einen Wert zurückgeben.

| Formel mit Beispielwert | Beispielausgabe | Beschreibung | Einzugebene Werte (Werte in den Klammern) |
|------|------|------|------|
| `1 == 1` | *true* |Gleich  | 1. & 2. Wert: Ja/Nein, Zahl, Text|
| `true && false`, `true && true`| *false*, *true* | Und | 1. & 2. Wert: Ja/Nein|
| `true || false` | *true* | Oder | 1. & 2. Wert: Ja/Nein|
| `1 < 3` | *true* |Kleiner als | 1. & 2. Wert: Ja/Nein, Zahl, Text|
| `1 > 3` | *false* |Größer als | 1. & 2. Wert: Ja/Nein, Zahl, Text|
| `1 != 2`| *true* |Ungleich | 1. & 2. Wert: Ja/Nein, Zahl, Text|
| `1 <= 1`| *true* |Kleiner gleich | 1. & 2. Wert: Ja/Nein, Zahl, Text|
| `1 >= -1`| *true* |Größer gleich | 1. & 2. Wert: Ja/Nein, Zahl, Text|


## <span style="color:#0b5394">**Rechensymbole**</span>

| Formel mit Beispielwert | Beispielausgabe | Beschreibung | Einzugebene Werte (Werte in den Klammern) |
|------|------|------|------|
| `1 + 1`, `"Hal" + "lo"` | *2*, "Hallo"   |Plus, Addition, Textverbindung | 1. & 2. Wert: Zahl, Text|
| `1 - 2` | *-1* |Minus, Subtraktion| 1. & 2. Wert: Zahl|
| `2 * 2`, `"Hallo" * 2` | *4*, "HalloHallo"  |Mal, Multiplikation, Text-Wiederholung | 1. Wert: Text oder Zahl, 2. Wert: Zahl|
| `4 / 2` | *2*  |Geteilt, Division| 1. & 2. Wert: Zahl|
| `5 % 2` | *1*  |Modulo (Restwert einer Teilung)| 1. & 2. Wert: Zahl|


