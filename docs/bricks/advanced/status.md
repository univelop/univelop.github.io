---
layout: title
title: Status
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 6
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/status.html
---

Mit dem Baustein _Status_ können Zustandswerte vergeben und komplette Prozesse im Unternehmen abgebildet werden. Jeder Status hat einen Namen, eine Farbe und ein Icon und kann mit Pflichtfeldern und der Datensatzsperre verknüpft werden.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Statusoptionen** — Die verfügbaren Stati werden über das Plus-Symbol hinzugefügt. Per Klick auf einen Status werden dessen Einstellungen geöffnet. Über den Mülleimer-Button können einzelne Stati gelöscht werden (nur möglich, wenn der Status in keinem Datensatz verwendet wird). Die Reihenfolge kann per Drag & Drop angepasst werden.
2. **Standard-Status** — Ein Status, der beim Erstellen neuer Datensätze automatisch gesetzt wird.
3. **Standard-Status erzwingen** — Setzt den Standard-Status auch beim Duplizieren eines Datensatzes. Diese Einstellung entfernt die Sperre aus dem kopierten Datensatz. Auch bei Workflows und beim Erzeugen über Filterkacheln wird der Standard-Status gesetzt.

### Einstellungen pro Status

Für jeden einzelnen Status können folgende Optionen konfiguriert werden:

- **Icon** — Ein individuelles Icon für den Status.
- **Farbe** — Eine individuelle Farbe für den Status.
- **Pflichtfelder** — Definiert, welche als Pflichtfeld markierten Bausteine beim Setzen dieses Status geprüft werden. Die betroffenen Bausteine müssen vorab in ihren eigenen Einstellungen als Pflichtfeld markiert sein.
- **Datensatz sperren** — Sperrt den Datensatz beim Setzen dieses Status. Der Datensatz kann dann weder bearbeitet noch gelöscht werden.
- **Technischer Name** — Ein nicht änderbarer Bezeichner, der in Formeln und Filtern verwendet werden kann.

## Funktionsweise

Eine Statusänderung erfolgt per Klick auf den Status-Baustein, woraufhin die verfügbaren Stati angezeigt werden. Alternativ kann der Status über _Status Button_-Bausteine geändert werden, die jeweils einen bestimmten Status setzen.

## Hinweise

- Der technische Name eines Status kann nicht geändert werden und dient als stabiler Bezeichner für Formeln und Filter.
- Der Baustein kann mit dem _Datensatz sperren_-Baustein kombiniert werden — die Sperrung erfolgt dann automatisch beim Setzen des entsprechenden Status.
- Der Status-Baustein bildet die Grundlage für das _Kanban Board_, das die Statusoptionen als Spalten darstellt.

## Verwandte Bausteine

- [Status Button](/docs/bricks/advanced/status-button) — Für gezielte Statusänderungen per Button
- [Datensatz sperren](/docs/bricks/advanced/release) — Für die manuelle Datensatzsperre
- [Kanban Board](/docs/bricks/advanced/kanban-board) — Für die Kanban-Darstellung basierend auf dem Status
