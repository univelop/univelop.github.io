---
layout: default
title: Textformeln
nav_order: 2
parent: Formelsammlung
---

# <span style="color:#0b5394">**Textformeln**</span>

## <span style="color:#0b5394">**Textkonstanten**</span>

Folgende Textkonstanten dienen dem Zugriff auf die Attribute des aktuellen Benutzers.

| Konstanten                 | Beispielausgabe           | Beschreibung
|:------:                    |:------:           |:------:
| `currentUserName`          | "Max Mustermann"           | Name des aktuellen Benutzers
| `currentUserId`            | Eine 28-stellige Zeichenkette bestehend aus Klein- und Großbuchstaben sowie Zahlen | ID des aktuellen Benutzers
| `currentUserEmail`         | "max.mustermann@beispiel.mail  | E-Mail des aktuellen Benutzers 
| `currentUserTeamName`      | "Beispielteam"           | Name des aktiven Teams des aktuellen Benutzers
| `currentUserTeamId`        | Eine -stellige Zeichenkette bestehend aus Klein- und Großbuchstaben sowie Zahlen | ID des aktiven Teams des aktuellen Benutzers
| `currentUserRoleName`      | "Beispielrolle" | Name der aktiven Rolle des aktuellen Benutzers
| `currentUserRoleId` | Eine -stellige Zeichenkette bestehend aus Klein- und Großbuchstaben sowie Zahlen | ID der aktiven Rolle des aktuellen Benutzers

## <span style="color:#0b5394">**Textformeln**</span>

| Formel mit Beispielwert | Beispielausgabe           | Beschreibung | Einzugebene Werte (Werte in den Klammern) |
|:------:             |:------:                   |:------:| :------:|
| `randomString(10)`  |  "f49gf623bk"  | Erzeugt eine zufällige Zeichenkette mit gegebener Länge (bestehend aus Kleinbuchstaben und Zahlen) | 1. Wert: Zahl |
| `toText(12)` | "12"  | Wandelt einen nicht textuellen Wert (Zahlen, dynamische Werte, Datum, Objekte) in eine textuelle Darstellung des Wertes um | 1. Wert: nicht-textueller Wert |
| `firstLetters("Hallo Welt",5)`  |  "Hallo" | Zählt die **ersten** Zeichen des Textes anhand der vorgebenen Länge | 1. Wert: Text, 2. Wert: Zahl |
| `lastLetters("Hallo Welt", 4)`  | "Welt" | Zählt die **letzten** Zeichen des Textes anhand der vorgegeben Länge | 1. Wert: Text, 2. Wert: Zahl | 
| `firstWords("Hallo du große Welt",2)`  |  "Hallo du" | Zählt die **ersten** Wörter (durch Leerzeichen getrennt) des Textes anhand der vorgegebenen Anzahl | 1. Wert: Text, 2. Wert: Zahl |
| `lastWords("Hallo du große Welt",2)`|  "große Welt" | Zählt die **letzten** Wörter des Textes anhand der vorgegebenen Anzahl | 1. Wert: Text, 2. Wert: Zahl |  
| `replace("Hallo du","du","ihr")`| "Hallo ihr" | Ersetzt jedes vorkommen des Textes *find* im Text *text* und ersetzt ihn mit *sub* | 1. Wert: Text, 2. Wert: Text, 3. Wert: Text |
| `basicAuth("name", "1234")`| "Basic bmFtZToxMjM0" | Verschlüsselt Nutzername und Passwort | 1. Wert: Text, 2. Wert: Text |
| `toUpperCase("Hallo Welt!")`| "HALLO WELT!" | Konvertiert den gegebenen Text auf Großbuchstaben | 1. Wert: Text |
| `toLowerCase("Hallo Welt!")`| "hallo welt!" | Konvertiert den gegebenen Text auf Kleinbuchstaben | 1. Wert: Text |
| `formatNumber(1000,3,true)` | "1.000,000" |Formatiert die Nummber zu gewünschtem Format.| 1. Wert: Zahl, 2. Wert: Zahl, 3. Wert: Ja/Nein |

## <span style="color:#0b5394">**Textbezogene Formeln**</span>

| Formel mit Beispielwert | Beispielausgabe           | Beschreibung | | Einzugebene Werte (Werte in den Klammern) |
|:------:             |:------:                   |:------:|:------:|
| `contains("Hallo du","du")`|*true*| Gibt Ja/Nein abhängig davon zurück, ob der Text *sub* im Text *text* vorhanden ist. | 1. Wert: Text, 2. Wert: Text |
| `textLength("Hallo Welt")` | *10* | Gibt die Textlänge inklusive Leerzeichen aus| 1. Wert: Text |
| `parseJson("{id:123}")` | *{id:123}* | Konvertiert einen Json-String zu einem Json-Objekt| 1. Wert: Text (im JSON-Format) |
| `toText(value)` |                       | Wandelt einen nicht textuellen Wert in eine textuelle Darstellung des Wertes um