---
layout: default
title: Rechensymbole und Operatoren
parent: Formelsammlung
nav_order: 3
---

# <span style="color:#0b5394">**Formelsammlung**</span>
## <span style="color:#0b5394">Rechensymbole / Operatoren</span>

| Rechensymbole / Operatoren            | Beschreibung
|:------:                               |:------:
| `==`                                  |Gleich
| `&&`                                  |Und
| `||`                                  |Oder
| `<`                                   |Kleiner als
| `>`                                   |Größer als
| `!=`                                  |Ungleich
| `<=`                                  |Kleiner gleich
| `>=`                                  |Größer gleich
| `+`                                   |Plus, Addition
| `-`                                   |Minus, Subtraktion
| `*`                                   |Mal, Multiplikation
| `/`                                   |Geteilt, Division
| `%`                                   |Modulo (gibt einen Restwert einer Teilung aus)

## <span style="color:#0b5394">Weitere Funktionen des Formelbausteins</span>

Über den
[Baustein *Formel*](/docs/record-spec-settings/grand-child-expanded/formular.html)
können noch weitere Funktionen genutzt werden.  
*Value = Technischer Name*  

| Funktionen                                | Beschreibung
| ------                                    | ------
| `textLength(value)`                       | Gibt die Textlänge eines Feldes inklusive Leerzeichen aus
| `firstLetters(value,count)`               | Zählt die **ersten** Zeichen des Bausteinwertes anhand der vorgebenen Länge (count = Zahl)
| `lastLetters(value,count)`                | Zählt die **letzten** Zeichen des Bausteinwertes anhand der vorgegeben Länge (count = Zahl)
|                                           | **Beispiel:** firstLetters(seriennummer,4) gibt die ersten 4 Zahlen und Buchstaben der Seriennummer aus
|                                           |
| `firstWords(value,count)`                 | Zählt die **ersten** Wörter des Bausteinwertes anhand der vorgegebenen Anzahl (count = Zahl)
| `lastWords(value,count)`                  | Zählt die **letzten** Wörter des Bausteinwertes anhand der vorgegebenen Anzahl (count = Zahl)
|                                           | *Der Stopp der Zählung erfolgt nach einem Leerzeichen und nur nach einem Leerzeichen*
|                                           |
| `formatDate(date, "format")`              | Formatiert ein Datumsdatensatz (Bezug auf [Baustein *Datum*](/docs/record-spec-settings/grand-childs-form/date.html)) in die gewählte Formatierung (s. Formatierungsmöglichkeiten Datum)

### <span style="color:#3d85c6">Formatierungsmöglichkeiten Datum</span>

|Symbol   |Beschreibung           |Ausgabe in         |Beispiel|
|------   |-------                |------------       |-------|
|G        |Bezeichnung            |(Text)             |AD|
|yyyy     |Jahr                   |(Zahl)             |2022|
|M        |Monat im Jahr          |(Zahl)             |1|
|MMM      |Monatsname (kurz)      |(Text)             |Jan|
|MMMM     |Monatsname (lang)      |(Text)             |Januar|
|L        |alleinstehender Monat  |(Text & Zahl)      |Januar & 01|
|D        |Tag im Monat           |(Zahl)             |10|
|c        |alleinstehender Tag    |(Zahl)             |10|
|h        |Stunde am/pm (1~12)    |(Zahl)             |12|
|H        |Stunde in Tag (0~23)   |(Zahl)             |0|
|m        |Minuten einer Stunde   |(Zahl)             |30|
|s        |Sekunden einer Minute  |(Zahl)             |55|
|S        |fractional second      |(Zahl)             |978|
|E        |Wochentag (kurz)       |(Text)             |Do.|
|EEEE     |Wochentag (lang)       |(Text)             |Donnerstag|
|D        |Tag im Jahr            |(Number)           |189|
|a        |am/pm marker           |(Text)             |PM|
|k        |hour in day (1~24)     |(Number)           |24|
|K        |hour in am/pm (0~11)   |(Number)           |0|
|Q        |Quartal                |(Zahl)             |3|
|QQQ      |Quartal (kurz)         |(Text & Zahl)      |Q3|
|QQQQ     |Quartal (lang)         |(Text & Zahl)      |3. Quartal|
|'        |escape for text        |(Delimiter)        |'Date='|
|''       |single quote           |(Literal)          |'o''clock'|