---
layout: title
title: Tabelle
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 10
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/table.html
---

Mit dem Baustein _Tabelle_ können Einträge einer verknüpften Liste in tabellarischer Form innerhalb eines Datensatzes dargestellt, bearbeitet und erstellt werden. Er ist eine Darstellungsform der _Datensatz Liste_ und eignet sich z. B. für Positionen in Angeboten, Materialaufstellungen oder Fahrzeugeinsätze.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Verknüpfung mit** — Die Liste, deren Einträge in der Tabelle dargestellt werden.
2. **Verknüpfung über** — _Optional._ Ein _Datensatz_-Baustein in der verknüpften Liste, der die Zuordnung zum aktuellen Datensatz herstellt.
3. **Filter und Sortierung** — Filtert und sortiert die Tabelleneinträge. Filter werden beim Erzeugen neuer Zeilen als Vorbelegung übernommen.
4. **Bausteine für Tabelle** — Wählt die Bausteine der verknüpften Liste aus, die als Spalten in der Tabelle angezeigt werden. Die Reihenfolge und Spaltenbreite kann individuell angepasst werden.
5. **Automatisches Erzeugen von Zeilen erlauben** — Aktiviert die Funktion _Datensatz vorbelegen_. Dazu muss ein _Datensatz_-Baustein in der ersten Spalte liegen, der mit einer Stammdatenliste verknüpft ist.
6. **Filter und Sortierung beim Erzeugen** — Filtert die Datensätze, die beim automatischen Erzeugen berücksichtigt werden (z. B. nur verfügbare Fahrzeuge).

## Funktionsweise

### Tabellenzeilen

Jede Zeile in der Tabelle entspricht einem Datensatz in der verknüpften Liste. Folgende Aktionen stehen zur Verfügung:

- **Öffnen** — Öffnet den vollständigen Datensatz in der Detailansicht.
- **Optionen** — Bietet über ein Icon Aktionen wie Duplizieren oder Löschen.
- **Neue Zeile** — Erzeugt einen neuen Datensatz in der verknüpften Liste. Der Baustein der _Verknüpfung über_ sowie aktive Filter werden automatisch vorbelegt.

### Datensatz vorbelegen

Liegt ein _Datensatz_-Baustein in der ersten Spalte, der mit einer Stammdatenliste verknüpft ist, kann die Funktion _Datensatz vorbelegen_ aktiviert werden. Damit wird mit einem Klick für jeden Datensatz in der Stammdatenliste eine Tabellenzeile erzeugt — z. B. ein Eintrag für jeden Mitarbeiter oder jede Baumaschine. Die zu erzeugenden Datensätze können über den separaten Filter eingeschränkt werden.

## Hinweise

- Es können nur Bausteine als Spalten ausgewählt werden, die in der verknüpften Liste verbaut sind.
- Die Tabelle basiert auf der gleichen Verknüpfungslogik wie die _Datensatz Liste_.
- Spaltenbreiten werden pro Baustein konfiguriert und bleiben für alle Nutzer gleich.

## Verwandte Bausteine

- [Datensatz Liste](/docs/bricks/advanced/record-list) — Für die Listenanzeige verknüpfter Einträge
- [Matrix](/docs/bricks/advanced/matrix) — Für zweidimensionale Zuordnungen
- [Kalender](/docs/bricks/advanced/calendar) — Für die Kalenderdarstellung verknüpfter Einträge
