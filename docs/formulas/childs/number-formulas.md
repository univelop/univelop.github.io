---
layout: default
title: Zahlenformeln
nav_order: 3
parent: Formelsammlung
---

# <span style="color:#0b5394">**Zahlenformeln**</span>


| Formel mit Beispielwert | Beispielausgabe | Beschreibung | Einzugebene Werte (Werte in den Klammern) |
|------|------|------|------|
| `ceil(3.1)` | *4*   |Aufrunden          | 1. Wert: Zahl |
| `floor(3.9)` | *3*  |Abrunden           | 1. Wert: Zahl |
| `round(3.499)`,`round(3.511)` | *3*, *4*|Runden | 1. Wert: Zahl |
| `abs(number)` | *4* |Betragsfunktion    | 1. Wert: Zahl |
| `count([1,2,4])` | *3* | Zählt die Elemente einer Liste/eines dynamischen Wertes | 1. Wert: Liste/dynamischer Wert |
| `toNumber("123")` | *123* | Wandelt einen Text in eine numerische Darstellung des Wertes um | 1. Wert: Text, welcher eine Zahl darstellt |


## <span style="color:#0b5394">**Zahlbezogene Formeln**</span>

| Formel mit Beispielwert | Beispielausgabe | Beschreibung | Einzugebene Werte (Werte in den Klammern) |
|------|------|------|------|
| `textLength("Hallo Welt")` | *10* | Gibt die Textlänge inklusive Leerzeichen aus| 1. Wert: Text |
| `formatNumber(1000,2,true)` | *1.000,00* | Formatiert die Nummber zu gewünschtem Format. Bspw. liefert "formatNumber(1000,2,true)" das Ergebnis *1.000,00*| 1. Wert: Zahl, 2. Wert: Zahl, 3. Wert: Ja/Nein |
| `calendarWeek(today())` | *24* | Kalenderwoche des gegebenen Datums | 1. Wert: Datum |