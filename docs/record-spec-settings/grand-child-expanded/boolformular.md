---
layout: default
title: Ja-Nein-Formel
parent: Erweiterte Bausteine
grand_parent: Die Bausteine und deren Einstellungen
nav_order: 17
---

# <span style="color:#0b5394"><span class="material-icons">calculate</span> **Baustein *Ja-Nein-Formel***</span>

Mit dem Baustein *Ja-Nein-Formel* wird das Ergebnis einer Formel als Kästchen mit oder ohne Haken dargestellt. 
Die Formel sollte als Ergebnis einen Wahrheitswert bilden. Dies ist ohne weiteres möglich, wenn man einen Baustein [*Schalter*](/docs/record-spec-settings/grand-childs-form/switch.html) referenziert.
Kombiniert man Werte, so müssen diese schlussendlich mit [Operatoren](/docs/formulary/childs/symbol-operator.html#rechensymbole--operatoren) zu einem Wahrheitswert kombiniert werden. 

So kann anhand einer Formel bspw. für Arbeitszeiten angezeigt werden, ob diese abrechnungsfähig sind.

Für die Ja/Nein Formel ist keine ifElse Bedingung notwendig. Es reicht die Bedingung zur Erfüllung zu referenzieren.
Wird die Bedingung nicht erreicht ist der Ausgabe Wert Nein. Auf den Schalter und Ja/Nein-Baustein kann
auf Erfüllung mittels == true oder == false gefiltert werden. In den Filtern mit Ja oder Nein als Option.

Mittels der Ja/Nein Formel können komplexe Abhängigkeiten abgefragt werden. Hierzu kann mit *oder* (||) und *und* (&&)
als Operatoren im Ausdrucksfeld gearbeitet werden. Möchte ich zum Beispiel einen alten Datensatz identifizieren,
reicht es bereits im Ausdruck *datum < today() -10 && status == 'Abgerechnet'* stehen zu haben.

Eine gesammelte Ansicht aller Formeln und Beispiele ist unter [*Formelsammlung*](/docs/formulas/formulas.html) zu finden.

## <span style="color:#0b5394">Allgemeines zu Formelbausteinen</span>

Eine allgemeine Einführung für Formelbausteine und ihre Funktionen sind unter [Formelbausteine](/docs/formulary/formulary.html) zu finden.