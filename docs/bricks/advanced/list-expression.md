---
layout: title
title: Listen-Formel
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 20
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/listformular.html
---

Mit dem Baustein _Listen-Formel_ wird das Ergebnis einer Formel als eine Liste von Chips dargestellt. Diese Chips können mit einem beliebigen Inhalt beschrieben werden. Die Formel sollte als Ergebnis eine Liste bilden.

Die Listenfunktionen ermöglichen es mit Listen zu interagieren (siehe Listenformel Übersicht). Zum Beispiel könnte man einen Schnittmenge zweier Listen mittels der Formel _intersection([1,2,3,4,5], [2,4])_ bestimmen.

Alternativ kann man auch auf andere Bausteine referenzieren wie z.B. auf den Datensätze-Baustein.

Wird ein Wert in der Formel verwendet, der nicht einer Liste entspricht, ist es notwendig, diesen Wert mit der Funktion _parseList(wert)_ in eine Listenform zu konvertieren, um mögliche Format- oder Berechnungsfehler zu vermeiden.

Eine gesammelte Ansicht aller Formeln und Beispiele ist unter _Formelsammlung_ zu finden.

## <span style="color:#0b5394">Allgemeines zu Formelbausteinen</span>

Eine allgemeine Einführung für Formelbausteine und ihre Funktionen sind unter Formelbausteine zu finden.
