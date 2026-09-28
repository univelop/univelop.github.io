---
layout: title
title: Drop-Down
parent: Formular-Bausteine
grand_parent: Bausteine
nav_order: 4
redirect_from:
    - /docs/record-spec-settings/grand-childs-form/drop-down.html
---

Mit dem Baustein _Drop-Down_ kann eine einzelne Option aus einer vordefinierten Liste von Auswahlmöglichkeiten gewählt werden. Es dürfen bis zu 50 Optionen angelegt werden, jede mit einer Bezeichnung von bis zu 100 Zeichen. Die Auswahl erfolgt über ein Pop-Up-Fenster.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Optionen hinzufügen** — Die verfügbaren Auswahlmöglichkeiten. Über das Plus-Symbol können neue Optionen hinzugefügt, über das Mülleimer-Symbol entfernt und über das =-Symbol in ihrer Reihenfolge geändert werden. Durch einen Klick auf eine Option kann diese im Dialog umbenannt werden.
2. **Standardoption** — Eine vorausgewählte Option beim Erstellen eines neuen Eintrags. Kann vom Nutzer geändert werden.


## Hinweise

- Das Löschen oder Umbenennen von Optionen ist nur möglich, wenn **keine** bestehenden Einträge diese Option verwenden.
- Drop-Down-Werte können als Bedingung für das bedingte Anzeigen anderer Bausteine verwendet werden.

## Funktionsweise 
Über das Plus-Symbol in den _Optionen_ können im Designmodus beliebig viele Optionen erstellt werden. Ein Klick auf eine bestehende Option öffnet einen Dialog mit weiteren Einstellungen:

- **Icon** und **Farbe** — Werden nicht nur im Baustein selbst angezeigt, sondern z. B. auch in Listen- und Kanban-Ansichten.
- **Pflichtfelder** — Bausteine aus demselben Eintrag, die bereits einen Wert enthalten müssen, damit diese Option ausgewählt werden kann.
- **Datensatz sperren** — Sperrt den gesamten Eintrag (inklusive verknüpfter Kind-Datensätze) vor weiterer Bearbeitung, sobald diese Option ausgewählt ist.
- **Option deaktivieren** — Entfernt die Option aus der Auswahl für neue Zuweisungen. Bereits bestehende Einträge mit dieser Option zeigen sie weiterhin an (grau dargestellt).
- **Technischer Name** — Wird beim Anlegen automatisch aus der Bezeichnung generiert und als Wert in Formeln, Filtern und Workflow-Bedingungen verwendet. Eine Änderung ist nur möglich, solange die Option noch in keinem Datensatz verwendet wird, da sie sonst bestehende Formeln, Vorlagen oder Workflows beeinträchtigen kann.

![alt text](/assets/bricks/input/dropdown-overview.png)
Anschließend können User zwischen den Optionen eine Option in einem Dialog auswählen. Es kann immer nur eine einzelne Option ausgewählt werden.
![alt text](/assets/bricks/input/dropdown-dialog.png)
## Verwandte Bausteine

- [Mehrfach-Auswahl](/docs/bricks/input/multi-selection) — Wenn mehrere Optionen gleichzeitig gewählt werden sollen
- [Segmente](/docs/bricks/input/segments) — Für visuelle Auswahl aus wenigen Optionen (2–5)
- [Schalter](/docs/bricks/input/switch) — Für einfache Ja/Nein-Auswahl
