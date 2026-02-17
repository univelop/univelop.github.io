---
layout: title
title: Kanban Board
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 12
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/kanban-board.html
---

{: .hint }
Das Kanban Board ist ein [Power Feature](/docs/power-features)

Mit dem Baustein _Kanban Board_ können Einträge einer verknüpften Liste übersichtlich in Spalten nach ihrem Status dargestellt und verwaltet werden. Jede Spalte repräsentiert einen Status (z. B. „Offen", „In Bearbeitung", „Erledigt"). Der Baustein eignet sich besonders für die Organisation von Aufgaben, Projekten oder Prozessen, bei denen Einträge verschiedene Bearbeitungsphasen durchlaufen.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Verknüpfung mit** — Die Liste, deren Einträge im Kanban Board angezeigt werden sollen.
2. **Verknüpfung über** — Ein _Datensatz_-Baustein in der verknüpften Liste, der die Zuordnung zum aktuellen Datensatz herstellt.
3. **Status** — Der _Status_-Baustein in der verknüpften Liste, dessen Ausprägungen die Spalten des Boards definieren.
4. **Filter und Sortierung** — Schränkt die angezeigten Einträge ein oder sortiert sie innerhalb der Spalten.
5. **Schnellfilter** — Ermöglicht es, Bausteine als Schnellfilter oberhalb des Boards anzuzeigen, um die Einträge interaktiv zu filtern.
6. **Eintragsvorschau** — Legt fest, welche Informationen auf den Karten im Board angezeigt werden. Die Darstellung kann individuell angepasst werden.
7. **Erfassungs-Button ausblenden** — Versteckt den Button zum Anlegen neuer Einträge.

## Funktionsweise

Einträge werden als Karten in der Spalte ihres aktuellen Status dargestellt. Per Drag & Drop können Karten zwischen Spalten verschoben werden, wodurch sich der Status des Eintrags ändert. Mit einem Klick auf eine Karte kann der Eintrag direkt bearbeitet werden, sofern die entsprechenden Rechte vorhanden sind.

## Hinweise

- Der Baustein benötigt einen _Status_-Baustein in der verknüpften Liste, um die Spalten zu definieren.
- Das Kanban Board ist eine Darstellungsform, die auf der gleichen Verknüpfungslogik wie die _Datensatz Liste_ basiert.
- Wenn ein Benutzer keine Rechte hat, den Status-Baustein zu bearbeiten, kann er dies auch nicht über das Kanban-Board tun. Dadurch kann eingestellt werden, wer Datensätze verschieben darf.

## Verwandte Bausteine

- [Status](/docs/bricks/advanced/status) — Definiert die Spalten des Kanban Boards
- [Datensatz Liste](/docs/bricks/advanced/record-list) — Für die Listenanzeige verknüpfter Einträge
- [Tabelle](/docs/bricks/advanced/table) — Für die tabellarische Darstellung verknüpfter Einträge
