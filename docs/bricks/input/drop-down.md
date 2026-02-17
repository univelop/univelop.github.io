---
layout: title
title: Drop-Down
parent: Formular-Bausteine
grand_parent: Bausteine
nav_order: 4
redirect_from:
    - /docs/record-spec-settings/grand-childs-form/drop-down.html
---

Mit dem Baustein _Drop-Down_ kann eine einzelne Option aus einer vordefinierten Liste von Auswahlmöglichkeiten gewählt werden. Die Anzahl der Optionen ist unbeschränkt. Die Auswahl erfolgt über ein Pop-Up-Fenster.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Optionen** — Die verfügbaren Auswahlmöglichkeiten. Über das Mülleimer-Symbol können Optionen entfernt und über das =-Symbol kann die Reihenfolge geändert werden.
2. **Standard Option** — Eine vorausgewählte Option beim Erstellen eines neuen Eintrags. Kann vom Nutzer geändert werden.
3. **Standard Option erzwingen** — Setzt die Standard-Option auch bei duplizierten Einträgen und gefilterten Einträgen. Ohne diese Einstellung wird die Standard-Option nur bei manuell erstellten Einträgen gesetzt.

## Hinweise

- Das Löschen oder Umbenennen von Optionen ist nur möglich, wenn **keine** bestehenden Einträge diese Option verwenden.
- Drop-Down-Werte können als Bedingung für das bedingte Anzeigen anderer Bausteine verwendet werden.

## Verwandte Bausteine

- [Mehrfach-Auswahl](/docs/bricks/input/multi-selection) — Wenn mehrere Optionen gleichzeitig gewählt werden sollen
- [Segmente](/docs/bricks/input/segments) — Für visuelle Auswahl aus wenigen Optionen (2–5)
- [Schalter](/docs/bricks/input/switch) — Für einfache Ja/Nein-Auswahl
