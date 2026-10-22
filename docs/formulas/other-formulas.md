---
title: Operatoren
layout: title
parent: Formeln
nav_order: 7
redirect_from:
    - /docs/formulas/childs/other-formulas.html
---

Operatoren kombinieren zwei Werte zu einem Ergebnis. Sie werden zwischen zwei Werten geschrieben und können beliebig verschachtelt werden. Die Werte können direkte Eingaben, technische Namen oder andere Formeln sein.

## Vergleichsoperatoren

Vergleichsoperatoren liefern immer einen Ja/Nein-Wert.

| Operator | Beschreibung | Beispiel | Eingabetypen |
|----------|-------------|---------|-------------|
| `==` | Gleichheit | `1 == 1` → _true_ | Ja/Nein, Zahl, Text |
| `!=` | Ungleichheit | `1 != 2` → _true_ | Ja/Nein, Zahl, Text |
| `<` | Kleiner als | `1 < 3` → _true_ | Zahl, Text |
| `>` | Größer als | `1 > 3` → _false_ | Zahl, Text |
| `<=` | Kleiner gleich | `1 <= 1` → _true_ | Zahl, Text |
| `>=` | Größer gleich | `1 >= -1` → _true_ | Zahl, Text |

## Logische Operatoren

| Operator | Beschreibung | Beispiel |
|----------|-------------|---------|
| `&&` | Und — beide Bedingungen müssen gelten | `true && false` → _false_ |
| `\|\|` | Oder — mindestens eine Bedingung muss gelten | `true \|\| false` → _true_ |

## Rechenoperatoren

| Operator | Beschreibung | Beispiel | Ergebnistyp |
|----------|-------------|---------|------------|
| `+` | Addition / Textverbindung | `1 + 1` → `2`, `"Hal" + "lo"` → `"Hallo"` | Zahl oder Text |
| `-` | Subtraktion | `1 - 2` → `-1` | Zahl |
| `*` | Multiplikation / Text-Wiederholung | `2 * 2` → `4`, `"Ha" * 3` → `"HaHaHa"` | Zahl oder Text |
| `/` | Division | `4 / 2` → `2` | Zahl |
| `%` | Modulo (Rest der Division) | `5 % 2` → `1` | Zahl |
