---
layout: default
title: Zahlenformel
parent: Erweiterte Bausteine
grand_parent: Die Bausteine und deren Einstellungen
nav_order: 16
---

# <span style="color:#0b5394"><span class="material-icons">calculate</span> **Baustein *Zahlenformel***</span>

Mit dem Baustein *Zahlenformel* wird das Ergebnis einer Formel als Zahl mit optionaler Formatierung dargestellt. Die Formatierung funktioniert analog zum Baustein [*Nummer*](/docs/record-spec-settings/grand-childs-form/number.html). Die Formel funktioniert ohne Funktionen, wenn nur numerische Bausteine (z. B. Nummer oder Laufende Nummer) referenziert und Zahlen angegeben und kombiniert werden. 

Sobald ein nicht-numerischer Wert angegeben ist, wird die Funktion `toNumber(nichtNumerischerWert)` zur geregelten Umwandlung von nicht-numerischen Werten, wie z. B. einem Datum oder einer Zeitspanne, in eine numerische Darstellung benötigt, um mögliche Format- oder Berechnungsfehler zu vermeiden. Für spezielle Umwandlungen von Texten, um z. B. die Textlänge zu bekommen, siehe [*weitere Funktionen*](/docs/formulary/childs/symbol-operator.html#weitere-funktionen-des-formelbausteins).

So kann bspw. der monatliche Bruttolohn oder auch der Bruttolohn eines Arbeitstages errechnet werden.

Eine gesammelte Ansicht aller Formeln und Beispiele ist unter [*Formelsammlung*](/docs/formulas/formulas.html) zu finden.

## <span style="color:#0b5394">Allgemeines zu Formelbausteinen</span>

Eine allgemeine Einführung für Formelbausteine und ihre Funktionen sind unter [Formelbausteine](/docs/formulary/formulary.html) zu finden.