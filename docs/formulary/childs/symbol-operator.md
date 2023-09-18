---
layout: default
title: Rechensymbole und Operatoren
parent: Arbeiten mit Formeln
nav_order: 3
---

# <span style="color:#0b5394">**Arbeiten mit Formeln**</span>
## <span style="color:#0b5394">Rechensymbole / Operatoren / Funktionen</span>


| Operatoren                            | Beschreibung
|:------:                               |:------:
| `==`                                  |Gleich
| `&&`                                  |Und
| `||`                                  |Oder
| `<`                                   |Kleiner als
| `>`                                   |Größer als
| `!=`                                  |Ungleich
| `<=`                                  |Kleiner gleich
| `>=`                                  |Größer gleich
| 	                                    |
| **Rechensymbole**                     | **Beschreibung**
|:------:                               |:------:
| `+`                                   |Plus, Addition
| `-`                                   |Minus, Subtraktion
| `*`                                   |Mal, Multiplikation
| `/`                                   |Geteilt, Division
| `%`                                   |Modulo (gibt einen Restwert einer Teilung aus)

Operatoren können verschiedene Arten von Werten vergleichen, liefern als Ergebnis jedoch einen Wahrheitswert(Ja oder Nein).

Rechensymbole ergeben nur numerische Werte, mit Ausnahme des `+` und des `*`. Das `+` kann auch Texte verbinden. 
**Beispiel:** `'ein' + 'Text'` wird zu *'einText'* verbunden.
## <span style="color:#0b5394">Mathematische Funktionen</span>

| Funktion                              | Beschreibung      | Beispiel
|:------:                               |:------:           |:------:     
| `ceil(number)`                        |Aufrunden          | `ceil(3.1)` liefert 4
| `floor(number)`                       |Abrunden           | `floor(3.9)` liefert 3
| `round(number)`                       |Runden             | `round(3.499)` liefert 3, `round(3.511)` liefert 4 
| `abs(number)`                         |Betragsfunktion    | `abs(-4)` liefert 4


## <span style="color:#0b5394">Textkonstanten</span>

| Konstanten                            | Beschreibung
|:------:                               |:------:
| `currentUserName`                     | Name des aktuellen Benutzers
| `currentUserId`                       | ID des aktuellen Benutzers
| `currentUserEmail`                    | e-Mail des aktuellen Benutzers 
| `currentUserTeamName`                 | Name des aktiven Teams des aktuellen Benutzers
| `currentUserTeamId`                   | ID des aktiven Teams des aktuellen Benutzers
| `currentUserRoleName`                 | Name der aktiven Rolle des aktuellen Benutzers
| `currentUserRoleId`                   | ID der aktiven Rolle des aktuellen Benutzers

## <span style="color:#0b5394">Weitere Funktionen der Formelbausteine</span>

Über die
[Formelbausteine](/docs/formulary/formulary.html#formelbausteine)
können noch weitere Funktionen genutzt werden.  
*Value = Technischer Name*  

| Funktionen                                | Beschreibung
| ------                                    | ------
| `toText(value)`                           | Wandelt einen nicht textuellen Wert in eine textuelle Darstellung des Wertes um
| `toNumber(value)`                         | Wandelt einen nicht numerischen Wert in eine numerische Darstellung des Wertes um 
|                                           |
| `contains(text,sub)`                      | Gibt Ja/Nein abhängig davon zurück, ob der Text *sub* im Text *text* vorhanden ist.
| `textLength(value)`                       | Gibt die Textlänge eines Feldes inklusive Leerzeichen aus
| `firstLetters(value,count)`               | Zählt die **ersten** Zeichen des Bausteinwertes anhand der vorgebenen Länge (count = Zahl)
| `lastLetters(value,count)`                | Zählt die **letzten** Zeichen des Bausteinwertes anhand der vorgegeben Länge (count = Zahl)
|                                           | **Beispiel:** firstLetters(seriennummer,4) gibt die ersten 4 Zahlen und Buchstaben der Seriennummer aus
|                                           |
| `firstWords(value,count)`                 | Zählt die **ersten** Wörter des Bausteinwertes anhand der vorgegebenen Anzahl (count = Zahl)
| `lastWords(value,count)`                  | Zählt die **letzten** Wörter des Bausteinwertes anhand der vorgegebenen Anzahl (count = Zahl)
|                                           | *Der Stopp der Zählung erfolgt nach einem Leerzeichen und nur nach einem Leerzeichen*
| `replace(text,find,sub)`                  | Ersetzt jedes vorkommen des Textes *find* im Text *text* und ersetzt ihn mit *sub*
|                                           |
| `count(list)`                             | Zählt die Elemente einer Liste/eines dynamischen Wertes, z. B. "count([1,2,4])" liefert 3
|                                           |
| `formatDate(date, "format")`              | Formatiert ein Datumsdatensatz (Bezug auf [Baustein *Datum*](/docs/record-spec-settings/grand-childs-form/date.html)) in die gewählte Formatierung (s. Formatierungsmöglichkeiten Datum)
| `formatNumber(number,dezimalCount,thousandSeparator)` | Formatiert die Nummber zu gewünschtem Format. Bspw. liefert "formatNumber(1000,2,true)" das Ergebnis *1.000,00*
|                                           |
| `randomString(length)`                    | Erzeugt eine zufällige Zeichenkette mit gegebener Länge (Kleinbuchstaben und Zahlen, z. B. "f49gf623bk")
| `toUpperCase(text)`                       | Konvertiert den gegebenen Text auf Großbuchstaben
| `toLowerCase(text)`                       | Konvertiert den gegebenen Text auf Kleinbuchstaben
|                                           |
| `parseJson(jsontext)`                     | Konvertiert einen Json-String zu einem Json-Objekt
| `basicAuth(username, password)`           | Verschlüsselt Nutzername und Passwort 

### <span style="color:#3d85c6">Formatierungsmöglichkeiten Datum</span>

|Symbol   |Beschreibung           |Ausgabe in         |Beispiel|
|------   |-------                |------------       |-------|
|G        |Bezeichnung            |(Text)             |AD|
|yyyy     |Jahr                   |(Zahl)             |2022|
|M        |Monat im Jahr (kurz)   |(Zahl)             |1|
|MM       |Monat im Jahr (lang)   |(Zahl)             |01|
|MMM      |Monatsname (kurz)      |(Text)             |Jan|
|MMMM     |Monatsname (lang)      |(Text)             |Januar|
|L        |alleinstehender Monat  |(Text & Zahl)      |Januar & 01|
|d        |Tag im Monat           |(Zahl)             |5|
|dd       |Tag im Monat (lang)    |(Zahl)             |05|
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
