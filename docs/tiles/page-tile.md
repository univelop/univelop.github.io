---
layout: title
title: Seite
nav_order: 10
parent: Kacheln
---

Die _Seite_-Kachel stellt einen einzelnen Eintrag dar, der beim Öffnen zurückgesetzt wird. Alle Eingaben gehen beim Verlassen der Seite verloren. Die Kachel eignet sich für statische Inhalte, temporäre Eingabemasken oder selbst gestaltete Menüs.

## Funktionsweise

- Beim Öffnen wird ein leerer Eintrag angezeigt.
- Der Eintrag kann wie ein normaler Listeneintrag mit beliebigen [Bausteinen](/docs/bricks/bricks) konfiguriert werden.
- Alle Eingaben werden beim Schließen der Seite verworfen — es findet keine dauerhafte Speicherung statt.

## Anwendungsfälle

- **Statische Inhalte** — Wöchentliche Einsatzpläne, Auswertungen oder Informationsseiten.
- **Maskierte Formulare** — Eingabemasken, die über [Datensatzlisten](/docs/bricks/advanced/record-list) und [Navigationsbausteinen](/docs/bricks/basic/navigation) für externe Nutzer gestaltet werden.
- **Temporäre Berechnungen** — Einmalige Kalkulationen oder Auswertungen, die nicht gespeichert werden müssen.

## Einstellungen

Zusätzlich zu den [allgemeinen Kacheleinstellungen](/docs/tiles/general-settings):

1. **Filter** — Optionale Filter, die beim Laden der Seite angewendet werden.

## Verwandte Kacheln

- [Formular](/docs/tiles/form-tile) — Für Eingabemasken, deren Daten dauerhaft gespeichert werden
- [Einfache Liste](/docs/tiles/basic-tile) — Für die Verwaltung mehrerer dauerhafter Einträge
