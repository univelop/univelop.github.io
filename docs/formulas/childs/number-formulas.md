---
layout: default
title: Zahlenformeln
nav_order: 3
parent: Formelsammlung
---

# <span style="color:#0b5394">**Zahlenformeln**</span>


| Formel | Beschreibung | Beispiel | Einzugebene Werte (Werte in den Klammern) | Gelieferter Ergebnistyp | 
|------|------|------|------|----|
| `ceil(number)` | Aufrunden | `ceil(3.1)` liefert *4* | 1. Wert: Zahl | Zahl |
| `floor(number)` | Abrunden | `floor(3.9)` liefert *3* | 1. Wert: Zahl | Zahl |	
| `round(number)` | Runden | `round(3.499)` liefert *3*, `round(3.511)` liefert 4 | 1. Wert: Zahl | Zahl |
| `abs(number)` | Betragsfunktion | `abs(-4)` liefert *4* | 1. Wert: Zahl | Zahl |
| `count(list)` | Zählt die Elemente einer Liste/eines dynamischen Wertes | `count([1,2,4])` liefert *3* | 1. Wert: Liste/dynamischer Wert | Zahl |
| `toNumber(text)` | Wandelt einen Text in eine numerische Darstellung des Wertes um | `toNumber("123")` liefert *123* | 1. Wert: Text, welcher eine Zahl darstellt | Zahl |

## <span style="color:#0b5394">**Zahlbezogene Formeln**</span>

| Formel | Beschreibung | Beispiel | Einzugebene Werte (Werte in den Klammern) | Gelieferter Ergebnistyp | 
|------|------|------|------|----|
| `textLength(text)` | Gibt die Textlänge inklusive aller Sonderzeichen und Leerzeichen aus | `textLength("Hallo Welt")` liefert *10* | 1. Wert: Text | Zahl |
| `formatNumber(number, decimalCount, thousandSeparator)` | Formatiert die Nummber zu gewünschtem Format | `formatNumber(1000,2,true)` liefert *1.000,00* | 1. Wert: Zahl, 2. Wert: Zahl, 3. Wert: Ja/Nein | Text |
| `calendarWeek(date)` | Kalenderwoche des gegebenen Datums | `calendarWeek(today())` liefert *24* | 1. Wert: Datum | Zahl |