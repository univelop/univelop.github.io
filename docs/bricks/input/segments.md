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

1. **Optionen hinzufügen** — Die verfügbaren Segmente. Es müssen mindestens 2 und dürfen maximal 5 Segmente angelegt werden. Jeder Segmentname darf höchstens 20 Zeichen umfassen. Leere oder doppelte Optionen sind nicht zulässig. Über das Mülleimer-Symbol können Segmente entfernt und über das =-Symbol kann die Reihenfolge geändert werden. Per Mausklick auf die jeweilige Option können deren Einstellungen aufgerufen werden.
2. **Auswahlmodus** — Legt fest, ob einzelne oder mehrere Segmente gleichzeitig ausgewählt werden können:
   - _Einzelauswahl_ — Es kann nur ein Segment aktiv sein (Standard)
   - _Mehrfachauswahl_ — Es können mehrere Segmente gleichzeitig aktiv sein

## Funktionsweise

Der Segmentbaustein hat Optionen — diese haben ebenfalls technische Namen. Mit einem Klick auf eine Option lässt sich diese im Dialog bearbeiten:
![segment](/assets/bricks/input/segment-option-menu.png 'segment')

- **Icon** und **Farbe** — Werden nicht nur im Baustein selbst angezeigt, sondern z. B. auch in Listen- und Kanban-Ansichten.
- **Pflichtfelder** — Bausteine aus demselben Eintrag, die bereits einen Wert enthalten müssen, damit diese Option ausgewählt werden kann.
- **Datensatz sperren** — Sperrt den gesamten Eintrag (inklusive verknüpfter Kind-Datensätze) vor weiterer Bearbeitung, sobald diese Option ausgewählt ist.
- **Option deaktivieren** — Entfernt die Option aus der Auswahl für neue Zuweisungen. Bereits bestehende Einträge mit dieser Option zeigen sie weiterhin an (grau dargestellt).
- **Technischer Name** — Wird beim Anlegen automatisch aus der Bezeichnung generiert und als Wert in Formeln, Filtern und Workflow-Bedingungen verwendet. Eine Änderung ist nur möglich, solange die Option noch in keinem Datensatz verwendet wird, da sie sonst bestehende Formeln, Vorlagen oder Workflows beeinträchtigen kann.

Bei einer Abfrage, welche/s Segment/e aktiviert ist/sind, muss der Wert des 'technischen Namen: Bezeichnung' oder des 'technischen Namen: ID' benutzt werden. Diese Abfrage der Variable gibt eine Liste zurück, da mehrere Segmente aktiv sein können. Deshalb wird ein contains(beispiel_id, "option1") — bzw. statt "option1" der technische Name der jeweiligen Option — benötigt, um zu prüfen, welche Segmente aktiv sind.
![segment](/assets/bricks/input/segemente-get-selected.png 'segment')
## Verwandte Bausteine

- [Drop-Down](/docs/bricks/input/drop-down) — Für Einzelauswahl aus beliebig vielen Optionen
- [Mehrfach-Auswahl](/docs/bricks/input/multi-selection) — Für Mehrfachauswahl aus beliebig vielen Optionen
- [Schalter](/docs/bricks/input/switch) — Für einfache Ja/Nein-Auswahl
