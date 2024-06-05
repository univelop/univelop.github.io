---
layout: default
title: Zahlenformeln
nav_order: 3
parent: Formelsammlung
---

# <span style="color:#0b5394">**Zahlenformeln**</span>


| Formel | Beschreibung | Beispiel | Eingabewerte Werte (Werte in den Klammern) | Gelieferter Ergebnistyp | 
|------|------|------|------|----|
| `power(number1, number2)` | Berechnet `number1` hoch `number2`. | `power(2, 5)` liefert *32* | 1. Wert: Zahl, 2. Wert: Zahl | Zahl |
| `ceil(number)` | Aufrunden | `ceil(3.1)` liefert *4* | 1. Wert: Zahl | Zahl |
| `floor(number)` | Abrunden | `floor(3.9)` liefert *3* | 1. Wert: Zahl | Zahl |	
| `round(number)` | Runden | `round(3.499)` liefert *3*, `round(3.511)` liefert 4 | 1. Wert: Zahl | Zahl |
| `abs(number)` | Betragsfunktion | `abs(-4)` liefert *4* | 1. Wert: Zahl | Zahl |
|`decimalRound(number,decimalPlaces)` | Runden auf bestimmte Anzahl von Nachkommastellen | `decimalRound(3.1789,2)` liefert *3.19*, `decimalRound(3.2911,3)` liefert *3.291* | 1. Wert: Zahl, 2. Wert: Zahl | Zahl | 
| `count(list)` | Zählt die Elemente einer Liste/eines dynamischen Wertes | `count([1,2,4])` liefert *3* | 1. Wert: Liste/dynamischer Wert | Zahl |
| `toNumber(text)` | Wandelt einen Text in eine numerische Darstellung des Wertes um | `toNumber("123")` liefert *123* | 1. Wert: Text, welcher eine Zahl darstellt | Zahl |
| `range(start, end, [step])` | Generiere eine Liste an Zahlen, von `start` bis `end` mit einer Schrittgröße von `step`. Standardmäßig ist `step=1` | `range(0, 2)` liefert *[0, 1, 2]*, `range(2, 0)` liefert *[2, 1, 0]*, `range(0, 1, 0.3)` liefert *[0, 0.3, 0.6, 0.9]* | 1. Wert: Zahl, 2. Wert: Zahl, 3. Wert: optional, Zahl  | Liste von Zahlen |
| `addToList(list, value, [index])` | Fügt den Wert `value` der Liste `list` an der Stelle `index` hinzu. Falls `index` nicht gegeben ist wird das Element am Ende der Liste angehangen. | `addToList([0, 1], 2)` liefert *[0, 1, 2]*, `addToList([0, 1], 2, 1)` liefert *[0, 2, 1]* | 1. Wert: Liste, 2. Wert: dynamisch, 3. Wert: optional, Zahl | Liste |
| `joinLists(list1, list2)` | Erstellt eine neue Liste mit den Elementen von `list1` und `list2` | `joinLists([0, 1], [2, 3])` liefert *[0, 1, 2, 3]* | 1. Wert: Liste, 2. Wert: Liste | Liste |

## <span style="color:#0b5394">**Zahlbezogene Formeln**</span>

| Formel | Beschreibung | Beispiel | Eingabewerte (Werte in den Klammern) | Gelieferter Ergebnistyp | 
|------|------|------|------|----|
| `textLength(text)` | Gibt die Textlänge inklusive aller Sonderzeichen und Leerzeichen aus | `textLength("Hallo Welt")` liefert *10* | 1. Wert: Text | Zahl |
| `formatNumber(number, decimalCount, thousandSeparator)` | Formatiert die Nummer ins gewünschte Format | `formatNumber(1000,2,true)` liefert *1.000,00* | 1. Wert: Zahl, 2. Wert: Zahl, 3. Wert: Ja/Nein | Text |
| `calendarWeek(date)` | Kalenderwoche des gegebenen Datums | `calendarWeek(today())` liefert *24* | 1. Wert: Datum | Zahl |