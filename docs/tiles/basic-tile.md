---
layout: title
title: Einfache Liste
nav_order: 2
parent: Kacheln
---

Die _Einfache Liste_ ist der wichtigste Komponententyp in Univelop. Sie stellt eine Liste von Datensätzen dar, in der Einträge erstellt, bearbeitet und verwaltet werden können. Ob Stammdaten, Projekte, Arbeitszeiten oder Aufträge — jegliche Daten werden in der Regel in einfachen Listen gespeichert.

## Listenansicht

Beim Öffnen der Komponente erscheint die Listenansicht. Sie besteht aus einer Auflistung der Datensätze und einer Detailansicht, in der der ausgewählte Eintrag angezeigt und bearbeitet werden kann.

Die Listenansicht bietet folgende Funktionen:

- **Volltextsuche** — Sucht über alle Werte eines Datensatzes. Es wird immer am Anfang eines Worts gesucht — die Suche nach „Mey" findet „Meyer", aber die Suche nach „yer" nicht. Mehr dazu unter [Suchen und Filtern](/docs/search-and-filter#suchen).
- **Filter** — Selbstdefinierbare Filter, um nach Einträgen mit bestimmten Werten zu suchen. Details und Beispiele unter [Suchen und Filtern](/docs/search-and-filter#filter-und-sortierung).
- **Mehrfach-Auswahl** — Auswahl mehrerer Datensätze für Aktionen wie Löschen oder Workflow-Ausführung. Muss zuvor im Designmodus für die Komponente aktiviert werden.
- **Excel Im- und Export** — Über das Drei-Punkte-Menü der Listenansicht (neben „Designmodus" und „Alle löschen") können Datensätze nach Excel oder CSV exportiert oder aus einer Excel-Datei importiert werden.

## Einstellungen

Zusätzlich zu den [allgemeinen Kacheleinstellungen](/docs/tiles/general-settings):

1. **Komponente-Info** — Wahl zwischen dem Icon oder einer numerischen Info (Anzahl der Datensätze oder Summe eines Bausteins). Siehe [Indikator](/docs/tiles/general-settings#komponente-info-indikator).
2. **Filter und Sortierung** — Filter schränken die angezeigten Datensätze ein und beeinflussen auch die Komponente-Info. Die Sortierung legt die Reihenfolge in der Listenansicht fest.
3. **Bei einzelnem Datensatz direkt zum Datensatz springen** — Überspringt die Listenansicht, wenn nur ein Datensatz vorhanden ist, und öffnet diesen direkt.
4. **Liste freigeben** — Teilt die Liste samt Datensätzen mit anderen Arbeitsbereichen, z. B. für Stammdaten, die in mehreren Arbeitsbereichen benötigt werden. Alle Details unter [Geteilte Listen](/docs/tiles/shared-lists).
5. **Volltextsuche** — Aktiviert die Volltextsuche über alle Felder.

{: .hint }
Die Volltextsuche verbraucht [Credits](/docs/credits) pro Suchanfrage.

## Verwandte Komponenten

- [Gefilterte Liste](/docs/tiles/filter-tile) — Für vorgefilterte Ansichten einer bestehenden Liste
- [Formular](/docs/tiles/form-tile) — Für die vereinfachte Erfassung neuer Einträge
