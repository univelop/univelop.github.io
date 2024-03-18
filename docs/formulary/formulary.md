---
layout: default
title: Arbeiten mit Formeln
nav_order: 13
has_children: true
has_toc: false
---

# <span style="color:#0b5394">**Arbeiten mit Formeln**</span>

Formeln können in Univelop vielfältig eingesetzt werden und bieten unzählige Möglichkeiten, Ihre Daten zu kombinieren, zu verarbeiten und auszugeben.

Mögliche Anwendungsbeispiel von Formeln sind unter anderem: E-Mails und PDFs mit dynamischem Inhalt, Frist ausgehend von einem Datum berechnen, Summierung von Rechnungspostionen, Datenübertragung, Brutto- und Netto-Berechnung.

Formeln (und die technischen Namen) werden an folgenden Stellen eingesetzt:
- Formelbausteine
- Workflows
- Vorlage des Bausteins [*PDF erstellen*](/docs/record-spec-settings/grand-child-expanded/create-pdf.html)
- Mailversand
- Filter

Für die erfolgreiche Nutzung ist nötig, dass Ihnen die Formeln und dessen Aufbau sowie die technischen Namen bekannt sind, welche im folgenden erläutert werden.

## <span style="color:#0b5394">Technischer Name</span>

Das Konzept der technischen Namen bietet die Möglichkeit, Daten jeglicher Bausteine zu verarbeiten, diese (mit oder ohne Formeln) zu kombinieren und einfache sowie komplexe Berechnungen mit diesen Daten durchzuführen.
Jeder Baustein, hinter dem ein Wert liegt (Textbaustein, Zahlenbaustein etc.) besitzt einen technischen Namen, über den der Wert angesprochen werden kann.

Bausteine, wie der Datumsbaustein besitzen mehrere technische Namen, um auf die einzelnen Werte zuzugreifen.
Im Beispiel des Datumsbaustein gibt es einen extra technischen Namen für die Woche und den Monat des Datums.

Bei der Nutzung eines technischen Namens wird im Hintergrund der aktuelle Wert des zugehörigen Bausteins geholt und eingetragen.
Hat man z.B. einen Zahlenbaustein mit dem Wert *21* und dem technischen Namen `zahl`, so wird bei der Nutzung dieses technischen Namen
das `zahl` in die *21* durch das System "übersetzt".

Der technische Name wird im Designmodus, in den Einstellungen des jeweiligen Bausteins eingetragen.
Das System achtet dabei selbstständig darauf, dass der eingegebene Name innerhalb der Liste eindeutig ist.

<span style="color:#0b5394">**Achtung: Um Fehler zu vermeiden, sollten technische Namen nicht mit dem Suffix "*_text*" aufhören!**</span>

## <span style="color:#0b5394">Formeln</span>

In Univelop sind Formeln eine Art Funktion, welche Werte bekommen und diese umrechnen um einen neuen Ergebniswert zurückzugeben.
Die Formeln werden über ihren eindeutigen Namen angesprochen und können Werte entgegennehmen, welche in Klammern hinter dem Namen stehen.

Dabei verwendet man die [Operatoren](/docs/formulas/childs/other-formulas.html#operatoren) und [Textkonstanten](/docs/formulas/childs/text-formulas.html#textkonstanten) etwas anders, dienen im Kern aber auch dazu, Werte zu bekommen.

Die Werte, welche den Formeln gegeben werden, können dabei direkte Werte, also eine Zahl oder ein Text, technische Namen von Bausteinen oder auch andere Formeln sein.
Somit lassen sich technische Namen und Formeln vielfältig kombinieren.

Alle in Univelop nutzbaren Formeln finden Sie [hier](/docs/formulas/formulas.html).

## <span style="color:#0b5394">Formelbausteine und Datentypen</span>

### <span style="color:#0b5394">Formelbausteine</span>
Es gibt in Univelop vier Formelbausteine:

|------|-------|
|[Textformel](/docs/record-spec-settings/grand-child-expanded/textformular.html)   |[Zahlenformel](/docs/record-spec-settings/grand-child-expanded/numberformular.html)|
|[Ja-Nein-Formel](/docs/record-spec-settings/grand-child-expanded/boolformular.html)  |[Datumformel](/docs/record-spec-settings/grand-child-expanded/dateformular.html)|

### <span style="color:#0b5394">Nutzung der Formelbausteine</span>

Bei Formelbausteinen ist das Ziel, eine gegebene Formel als ausgewerteten Wert im Eintrag zu haben.
Darunter fällt z.B. die Brutto-Berechnung aus einem Nettobetrag oder der Berechnung einer Frist ausgehend von einem Datum.

Die Formel wird in den Einstellungen des Bausteins eingetragen und bei jeder relevanten Änderung des Eintrages neu berechnet.

### <span style="color:#0b5394">Datentypen</span>

Entsprechend der Bausteine gibt es 4(+1) Datentypen, welche die Formeln und technischen Namen als Ergebnis liefern können:
- <span style="color:#0b5394">Text</span>  
    Ein allgemeiner Begriff für Zeichenketten, welche aus Buchstaben, Zahlen und Sonderzeichen bestehen können.
    Texte werden innerhalb von Formeln mit "" angegeben.
- <span style="color:#0b5394">Zahl</span>  
    Nur aus Ziffern bestehende Werte.
    Zahlen werden innerhalb von Formeln direkt, also ohne "" oder Ähnlichem angegeben.
- <span style="color:#0b5394">Ja/Nein</span>  
    Ein Wahrheitswert, welcher nur zwei Zustände annehmen kann: Ja oder Nein.
    Ja/Nein wird innerhalb von Formeln mit true (= Ja) oder false (= Nein) angegeben.
- <span style="color:#0b5394">Datum</span>  
    Ein spezieller Wert, der nicht direkt durch einen Text angegeben werden kann.
    Dieser repräsentiert ein Datum inkl. Uhrzeit.
    Daten müssen für Formeln speziell aus einem Datumsbaustein über dessen technischen Namen oder einer [Datumsformel](/docs/formulas/childs/date-formulas.html) geholt/erstellt werden.
- <span style="color:#0b5394">Dynamischer Wert</span>  
    Werte, welche sich aus einer Liste von beliebig vielen Werten zusammensetzen.
    Diese Werte können nur innerhalb von Formeln genutzt werden und werden durch [] angegeben (z.B. [1,2,3,4]).
    Der Inhalt des dynamischen Wertes kann hierbei wiederum eines der fünf hier genannten Datentypen sein.
    Es sollte dabei beachtet werden, dass alle Elemente des dynamischen Wertes vom selben Datentyp sein sollten.

## <span style="color:#0b5394">Kombination von Formeln und technischen Namen</span>
 
Technische Namen alleine bieten nur die Möglichkeit, den Wert eines Bausteins auszugeben bzw. zu übertragen.
Um Werte zu verändern, werden die sog. **Formeln** genutzt.

Die [Formeln](/docs/formulas/formulas.html) werden mit technischen Namen kombiniert, um neue Werte zu berechnen.

### <span style="color:#0b5394">Beispiel anhand `+`</span>
Der `+` Operator genutzt, um zwei Werte zu addieren.
Will man nun die Werte zweier Bausteine (zahl1, zahl2) addieren, so geschieht dies über die Kombination der technischen Namen der Bausteine mit dem `+` Operator:
`zahl1 + zahl2`
Diese Formel wird durch das System zu `21 + 21` übersetzt und letztlich zu `42` ausgerechnet.

Will man den Wert des ersten Bausteins um bspw. 5 erhöhen, braucht man dafür keinen extra Baustein in welchem man die 5 eingibt, sondern kann die 5 direkt in die Formel schreiben:
`zahl1 + 5`, was zu `21 + 5` übersetzt wird und letztlich zu `26` ausgerechnet wird.

### <span style="color:#0b5394">Beispiel anhand `toText()`</span>

Will man eine Zahl in einen Text konvertieren, kann man dafür die Formel `toText(value)` nutzen.
Diese bekommt innerhalb der Klammern (`value`) einen Wert übergeben, welcher in einen Text umgewandelt werden soll.
Hat man einen Zahlenbaustein mit dem Wert *21* und dem technischen Namen `zahl`, so wird die Formel `toText(zahl)` zu `toText(21)` übersetzt und letztlich zu `21` ausgerechnet.

## <span style="color:#0b5394">Einbindung von Formeln in Texte</span>

Formeln für dynamisch eingebundene Werte in Texten sind dank der vielseitigen Formeln möglich.

Dabei können die Formeln innerhalb von Texten an beliebigen Stellen eingebunden werden.
Direkt runtergeschrieben dürfen sie jedoch nicht sein, da unser System dies nur als Text erkennen würde.
Formeln innerhalb von Texten müssen durch ${*Formel*} eingebunden werden:

`"Der Wert des Bausteins zahl1 ist zahl1"` ist die falsche Einbindung, wo der technische Name nicht erkannt wird.
`"Der Wert des Bausteins zahl1 ist ${zahl1}"` bindet den Wert vom Baustein zahl1 richtig ein, und wird zu "Der Wert des Bausteins zahl1 ist 21" übersetzt.

Desweiteren können beliebig große Formeln eingebunden werden:
`"Der Wert des Bausteins zahl1 ist ${formatDate(zahl1 + 5, 2, false)}"` wird zu "Der Wert des Bausteins zahl1 ist 26,00" übersetzt.

## <span style="color:#0b5394">Verkettung von Formeln</span>

Formeln können beliebig in weiter Formeln eingebunden werden.

`ifElse(zahl1 > 10, formatDate(datum,"MM.YYYY"), formatDate(subtractDays(datum, zahl1),"dd.MM.YYYY"))` ist ein Beispiel für eine verschachtelte Nutzung von Formeln.

## <span style="color:#0b5394">Weiterführende Info zu Formeln</span>

|:-----:            |:-------:
|[Datumsformeln](/docs/formulary/childs/formula%20date.html)      |[Bedingungen und Rechnen mit Formeln in Formelbausteinen](/docs/formulary/childs/condition-calculate-with.html)
|[Formelsammlung](/docs/formulas/formulas.html)         |[Kombinationen und Beispiele](/docs/formulary/childs/combinations-examples.html)