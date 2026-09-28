---
layout: title
title: Mehrfach-Auswahl
parent: Formular-Bausteine
grand_parent: Bausteine
nav_order: 5
redirect_from:
    - /docs/record-spec-settings/grand-childs-form/multi-selection.html
---

Mit dem Baustein _Mehrfach-Auswahl_ können mehrere Optionen gleichzeitig aus einer vordefinierten Liste ausgewählt werden. Er funktioniert wie der Baustein _Drop-Down_, erlaubt aber die Auswahl von mehr als einer Option.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Optionen hinzufügen** — Die verfügbaren Auswahlmöglichkeiten. Es dürfen bis zu 50 Optionen angelegt werden, jede mit einer Bezeichnung von bis zu 100 Zeichen. Über das Plus-Symbol können neue Optionen hinzugefügt, über das Mülleimer-Symbol entfernt und über das =-Symbol in ihrer Reihenfolge geändert werden. Durch einen Klick auf eine Option kann diese im Dialog umbenannt werden.

## Hinweise

- Beim Import werden mehrere Werte durch Semikolon getrennt übergeben.

## Funktionsweise

Ein Klick auf eine bestehende Option öffnet einen Dialog mit weiteren Einstellungen:

- **Icon** und **Farbe** — Werden nicht nur im Baustein selbst angezeigt, sondern z. B. auch in Listen- und Kanban-Ansichten.
- **Pflichtfelder** — Bausteine aus demselben Eintrag, die bereits einen Wert enthalten müssen, damit diese Option ausgewählt werden kann.
- **Datensatz sperren** — Sperrt den gesamten Eintrag (inklusive verknüpfter Kind-Datensätze) vor weiterer Bearbeitung, sobald diese Option ausgewählt ist.
- **Option deaktivieren** — Entfernt die Option aus der Auswahl für neue Zuweisungen. Bereits bestehende Einträge mit dieser Option zeigen sie weiterhin an (grau dargestellt).
- **Technischer Name** — Wird beim Anlegen automatisch aus der Bezeichnung generiert und als Wert in Formeln, Filtern und Workflow-Bedingungen verwendet. Eine Änderung ist nur möglich, solange die Option noch in keinem Datensatz verwendet wird, da sie sonst bestehende Formeln, Vorlagen oder Workflows beeinträchtigen kann.

## Verwandte Bausteine

- [Drop-Down](/docs/bricks/input/drop-down) — Wenn nur eine einzelne Option gewählt werden soll
- [Segmente](/docs/bricks/input/segments) — Für visuelle Auswahl aus wenigen Optionen mit optionaler Mehrfachauswahl
