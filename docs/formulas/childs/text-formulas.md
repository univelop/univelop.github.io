---
layout: default
title: Textformeln
nav_order: 2
parent: Formelsammlung
---

# <span style="color:#0b5394">**Textformeln**</span>

## <span style="color:#0b5394">**Textkonstanten**</span>

Folgende Textkonstanten dienen dem Zugriff auf die Attribute des aktuellen Benutzers.
Alle Textkonstanten liefern einen Text bei der Auswertung.

| Konstanten            | Beschreibung                                   | Beispielausgabe                                                                    |
| --------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------- |
| `currentUserName`     | Name des aktuellen Benutzers                   | "Max Mustermann"                                                                   |
| `currentUserId`       | ID des aktuellen Benutzers                     | Eine 28-stellige Zeichenkette bestehend aus Klein- und Großbuchstaben sowie Zahlen |
| `currentUserEmail`    | E-Mail des aktuellen Benutzers                 | "max.mustermann@beispiel.mail                                                      |
| `currentUserTeamName` | Name des aktiven Teams des aktuellen Benutzers | "Beispielteam"                                                                     |
| `currentUserTeamId`   | ID des aktiven Teams des aktuellen Benutzers   | Eine -stellige Zeichenkette bestehend aus Klein- und Großbuchstaben sowie Zahlen   |
| `currentUserRoleName` | Name der aktiven Rolle des aktuellen Benutzers | "Beispielrolle"                                                                    |
| `currentUserRoleId`   | ID der aktiven Rolle des aktuellen Benutzers   | Eine -stellige Zeichenkette bestehend aus Klein- und Großbuchstaben sowie Zahlen   |

## <span style="color:#0b5394">**Textformeln**</span>

| Formel                                                                                   | Beschreibung                                                                                                                                                                      | Beispiel                                                  | Eingabewerte (Werte in den Klammern)                   | Gelieferter Ergebnistyp |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------ | ----------------------- |
| `randomString(length)`                                                                   | Erzeugt eine zufällige Zeichenkette mit gegebener Länge (bestehend aus Kleinbuchstaben und Zahlen)                                                                                | `randomString(10)` liefert "f49gf623bk"                   | 1. Wert: Zahl                                          | Text                    |
| `toText(element)`                                                                        | Wandelt einen nicht textuellen Wert (Zahlen, dynamische Werte, Datum, Objekte) in eine textuelle Darstellung des Wertes um                                                        | `toText(12)` liefert "12"                                 | 1. Wert: nicht-textueller Wert                         | Text                    |
| [`substring(text,start, [end])`](/docs/formulas/childs/text-formulas.html#textformeln-1) | Liefert den Ausschnitt aus _text_, welcher an Zeichen _start - 1_ beginnt und an _end_ endet. Wird _end_ nicht angegeben, so wird der Text ab _start_ bis zum Ende zurückgegeben. | `substring("Hallo Welt", 2, 5)` liefert "llo"             | 1. Wert: Text, 2. Wert: Zahl, 3. Wert: Zahl (optional) | Text                    |
| `firstLetters(text, count)`                                                              | Liefert die ersten _count_ Zeichen vom Anfang des Textes                                                                                                                          | `firstLetters("Hallo Welt",5)` liefert "Hallo"            | 1. Wert: Text, 2. Wert: Zahl                           | Text                    |
| `lastLetters(text, count)`                                                               | Liefert die letzten _count_ Zeichen vom Ende des Textes                                                                                                                           | `lastLetters("Hallo Welt",5)` liefert "Welt"              | 1. Wert: Text, 2. Wert: Zahl                           | Text                    |
| `firstWords(text, count)`                                                                | Liefert die ersten _count_ Wörter vom Anfang des Textes. Als Wörter zählen solche, die durch nur _ein_ Leerzeichen getrennt sind.                                                 | `firstWords("Hallo du große Welt",2)` liefert "Hallo du"  | 1. Wert: Text, 2. Wert: Zahl                           | Text                    |
| `lastWords(text, count)`                                                                 | Liefert die letzten _count_ Wörter vom Ende des Textes. Als Wörter zählen solche, die durch nur _ein_ Leerzeichen getrennt sind.                                                  | `lastWords("Hallo du große Welt",2)` liefert "große Welt" | 1. Wert: Text, 2. Wert: Zahl                           | Text                    |
| `replace(text,find,sub)`                                                                 | Ersetzt jedes vorkommen des Textes _find_ im Text _text_ mit _sub_                                                                                                                | `replace("Hallo du","du","ihr")` liefert "Hallo ihr"      | 1. Wert: Text, 2. Wert: Text, 3. Wert: Text            | Text                    |
| `basicAuth(username, password)`                                                          | Kodiert Nutzername und Passwort                                                                                                                                                   | `basicAuth("name", "1234")` liefert "Basic bmFtZToxMjM0"  | 1. Wert: Text, 2. Wert: Text                           | Text                    |
| `toUpperCase(text)`                                                                      | Konvertiert den gegebenen Text auf Großbuchstaben                                                                                                                                 | `toUpperCase("Hallo Welt!")` liefert "HALLO WELT!"        | 1. Wert: Text                                          | Text                    |
| `toLowerCase(text)`                                                                      | Konvertiert den gegebenen Text auf Kleinbuchstaben                                                                                                                                | `toLowerCase("Hallo Welt!")` liefert "hallo welt!"        | 1. Wert: Text                                          | Text                    |
| `formatNumber(number, decimalCount, thousandSeparator)`                                  | Formatiert die Nummer zu gewünschtem Format und gibt diese als Text aus                                                                                                           | `formatNumber(1000,3,true)` liefert "1.000,000"           | 1. Wert: Zahl, 2. Wert: Zahl, 3. Wert: Ja/Nein         | Text                    |

## <span style="color:#0b5394">**Textbezogene Formeln**</span>

| Formel                | Beschreibung                                                                        | Beispiel                                   | Eingabewerte (Werte in den Klammern) | Gelieferter Ergebnistyp |
| --------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------ | ----------------------- |
| `contains(text, sub)` | Gibt Ja/Nein abhängig davon zurück, ob der Text _sub_ im Text _text_ vorhanden ist. | `contains("Hallo du","du")` liefert _true_ | 1. Wert: Text, 2. Wert: Text         | Ja/Nein                 |
| `textLength(text)`    | Gibt die Textlänge inklusive aller Sonderzeichen und Leerzeichen aus                | `textLength("Hallo Welt!")` liefert _11_   | 1. Wert: Text                        | Zahl                    |
| `parseJson(jsonText)` | Konvertiert einen Json-String zu einem Json-Objekt                                  | `parseJson("{id:123}")` liefert _{id:123}_ | 1. Wert: Text (im JSON-Format)       | Objekt                  |
| `toText(value)`       | Wandelt einen nicht textuellen Wert in eine textuelle Darstellung des Wertes um     | `toText(12)` liefert "12"                  | 1. Wert: nicht-textueller Wert       | Text                    |
