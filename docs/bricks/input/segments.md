---
layout: title
title: Segmente
parent: Formular-Bausteine
grand_parent: Bausteine
nav_order: 6
redirect_from:
    - /docs/record-spec-settings/grand-childs-form/segments.html
---

Mit dem Baustein _Segmente_ werden vordefinierte Auswahlmöglichkeiten als nebeneinander angeordnete Segmente dargestellt. Die Auswahl erfolgt direkt per Klick auf ein Segment, ohne Pop-Up-Fenster.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Optionen hinzufügen** — Die verfügbaren Segmente. Es müssen mindestens 2 und dürfen maximal 5 Segmente angelegt werden. Jeder Segmentname darf höchstens 15 Zeichen umfassen. Leere oder doppelte Optionen sind nicht zulässig. Über das Mülleimer-Symbol können Segmente entfernt und über das =-Symbol kann die Reihenfolge geändert werden. Per Mausklick auf die jeweilige Option können die Einstellungen der jeweiligen Option aufgerufen werden.

2. **Auswahlmodus** — Legt fest, ob einzelne oder mehrere Segmente gleichzeitig ausgewählt werden können:
    - _Einzelauswahl_ — Es kann nur ein Segment aktiv sein (Standard)
    - _Mehrfachauswahl_ — Es können mehrere Segmente gleichzeitig aktiv sein

## Funktionsweise 
Der Segmentbautstein hat Optionen - diese habe ebenfalls technische Namen. 
![segment](/assets/docs/input/segment-option-menu.png 'segment')
Wenn wir wissen wollen, welche/s Segment/e aktiviert ist/sind, müssen wir den Wert des 'technischen Namen: Bezeichnung' oder des 'technischen Namen: ID' benutzen. Diese Abfrage der Variable gibt eine Liste zurück, da mehrere Segmente aktiv sein können. Deshalb brauchen wir hier ein contains(beispiel_id, “option1”) - bzw. statt „option1” der technische Name deiner Option. 
![segment](/assets/docs/input/segemente-get-selected.png 'segment')

## Verwandte Bausteine

- [Drop-Down](/docs/bricks/input/drop-down) — Für Einzelauswahl aus beliebig vielen Optionen
- [Mehrfach-Auswahl](/docs/bricks/input/multi-selection) — Für Mehrfachauswahl aus beliebig vielen Optionen
- [Schalter](/docs/bricks/input/switch) — Für einfache Ja/Nein-Auswahl
