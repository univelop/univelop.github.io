---
layout: title
title: Ja-Nein-Formel
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 18
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/boolformular.html
---

Mit dem Baustein _Ja-Nein-Formel_ wird das Ergebnis einer Formel als Kästchen mit oder ohne Haken dargestellt.
Die Formel sollte als Ergebnis einen Wahrheitswert bilden. Dies ist ohne weiteres möglich, wenn man einen Baustein _Schalter_ referenziert.
Kombiniert man Werte, so müssen diese schlussendlich mit Operatoren zu einem Wahrheitswert kombiniert werden.

So kann anhand einer Formel bspw. für Arbeitszeiten angezeigt werden, ob diese abrechnungfähig sind.

Für die Ja/Nein Formel ist keine ifElse Bedingung notwendig. Es reicht die Bedingung zur Erfüllung zu referenzieren.
Wird die Bedingung nicht erreicht ist der Ausgabe Wert Nein. Auf den Schalter und Ja/Nein-Baustein kann
auf Erfüllung mittels == true oder == false gefiltert werden. In den Filtern mit Ja oder Nein als Option.

Mittels der Ja/Nein Formel können komplexe Abhängigkeiten abgefragt werden. Hierzu kann mit _oder_ (||) und _und_ (&&)
als Operatoren im Ausdrucksfeld gearbeitet werden. Möchte ich zum Beispiel einen alten Datensatz identifizieren,
reicht es bereits im Ausdruck _datum < today() -10 && status == 'Abgerechnet'_ stehen zu haben.

Eine gesammelte Ansicht aller Formeln und Beispiele ist unter _Formelsammlung_ zu finden.

## <span style="color:#0b5394">Allgemeines zu Formelbausteinen</span>

Eine allgemeine Einführung für Formelbausteine und ihre Funktionen sind unter Formelbausteine zu finden.
