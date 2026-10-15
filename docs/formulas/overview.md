---
title: Überblick
layout: title
parent: Formeln
nav_order: 1
redirect_from:
    - /docs/how-to-use-formulas/how-to-use-formulas.html
---

Formeln in Univelop sind Funktionen, die Werte entgegennehmen, verarbeiten und ein Ergebnis zurückgeben. Sie werden über ihren Namen aufgerufen und können beliebig verschachtelt werden.

## Technischer Name

Jeder Baustein mit einem Wert (Textfeld, Nummernfeld, Datum usw.) besitzt einen **technischen Namen**, über den der Wert in Formeln angesprochen werden kann. Der technische Name wird im [Designmodus](/docs/designmode/record) in den Einstellungen des Bausteins festgelegt.

Bei der Auswertung einer Formel wird der technische Name durch den aktuellen Wert des Bausteins ersetzt. Beispiel: Hat ein Zahlenbaustein den technischen Namen `zahl` und den Wert _21_, wird `zahl + 5` zu `21 + 5` = `26` ausgewertet.

{: .hint }
Technische Namen müssen innerhalb einer Liste eindeutig sein. Das System prüft dies automatisch.

## Datentypen

Formeln arbeiten mit fünf Datentypen:

| Datentyp | Beschreibung | Angabe in Formeln |
|----------|-------------|-------------------|
| **Text** | Zeichenketten aus Buchstaben, Zahlen, Sonderzeichen | `"Hallo"` |
| **Zahl** | Numerische Werte | `42`, `3.14` |
| **Ja/Nein** | Wahrheitswert mit zwei Zuständen | `true`, `false` |
| **Datum** | Datum inkl. Uhrzeit | Nur über Datumsbaustein oder Datumsformel (z. B. `today()`) |
| **Liste** | Sammlung mehrerer Werte desselben Typs | `[1, 2, 3]` |

## Formel-Editor

Der Formel-Editor erleichtert das Erstellen von Formeln. Er wird über das Formel-Symbol neben einem Eingabefeld geöffnet und besteht aus zwei Bereichen:

- **Obere Hälfte** — Das Eingabefeld für die Formel. Hier können Formeln frei eingegeben und mit Leerzeichen und Zeilenumbrüchen strukturiert werden.
- **Untere Hälfte** — Alle verfügbaren Formeln, kategorisiert nach Text, Zahlen, Datum, Listen, Logik und Operatoren. Zusätzlich gibt es einen Tab für alle nutzbaren Variablen. Ein Klick auf eine Formel zeigt eine Info an, ein Doppelklick fügt sie ins Eingabefeld ein.

## Formeln in Texte einbinden

Formeln können innerhalb von Texten über die Syntax `${formel}` eingebunden werden:

```
"Der Wert ist ${zahl1}"
→ "Der Wert ist 21"

"Fällig am ${formatDate(datum, "dd.MM.yyyy")}"
→ "Fällig am 15.06.2021"
```

Ohne `${}` wird der technische Name als normaler Text behandelt und nicht ausgewertet.

## Formeln verschachteln

Formeln können beliebig ineinander verschachtelt werden. Die inneren Formeln werden zuerst ausgewertet:

```
ifElse(zahl1 > 10, formatDate(datum, "MM.yyyy"), formatDate(subtractDays(datum, zahl1), "dd.MM.yyyy"))
```

## Formelbausteine

Für die Auswertung von Formeln direkt im Eintrag stehen vier Formelbausteine zur Verfügung:

| Baustein | Ergebnistyp |
|----------|------------|
| [Textformel](/docs/bricks/advanced/text-expression) | Text |
| [Zahlenformel](/docs/bricks/advanced/number-expression) | Zahl |
| [Datumsformel](/docs/bricks/advanced/date-expression) | Datum |
| [Logik-Formel](/docs/bricks/advanced/bool-expression) | Ja/Nein |

Die Formel wird in den Einstellungen des Bausteins eingetragen und bei jeder relevanten Änderung des Eintrages automatisch neu berechnet.
