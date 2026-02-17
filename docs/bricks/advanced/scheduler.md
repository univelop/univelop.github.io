---
layout: title
title: Terminplaner
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 9
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/scheduler.html
---

Mit dem Baustein _Terminplaner_ kann ein Wochenplan erstellt werden, bei dem Buchungen mit Ressourcen verknüpft dargestellt werden. Er eignet sich z. B. für die Einsatzplanung von Mitarbeitern, Fahrzeugen oder Arbeitsgeräten.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

### Allgemein

1. **Nur 5-Tage-Woche anzeigen** — Kürzt die Anzeige auf Montag bis Freitag. Standardmäßig wird Montag bis Sonntag angezeigt.

### Ressource

2. **Verknüpfung mit** — Die Liste, die die Ressourcen enthält (z. B. Mitarbeiter, Fahrzeuge).
3. **Filter und Sortierung** — Schränkt die angezeigten Ressourcen ein und bestimmt die Reihenfolge im Terminplaner.

### Buchungen

4. **Verknüpfung mit** — Die Liste, die die Buchungen enthält (z. B. Einsätze, Arbeitszeiten).
5. **Verknüpfung über** — _Optional._ Ein _Datensatz_-Baustein in den Buchungen, der die Zuordnung zum aktuellen Datensatz herstellt. So kann z. B. ein Terminplaner pro Projekt genutzt werden, bei dem nur zugehörige Buchungen angezeigt werden.
6. **Datumsbaustein** — Der _Datum_-Baustein in den Buchungen, anhand dessen die Buchung dem entsprechenden Tag zugeordnet wird.
7. **Ressourcenbaustein** — Der _Datensatz_-Baustein in den Buchungen, der die jeweilige Ressource referenziert.
8. **Filter und Sortierung** — Schränkt die angezeigten Buchungen ein.
9. **Vorschau der Buchungen** — Legt fest, welche Bausteine in der Vorschau der Buchungen im Terminplaner angezeigt werden. Diese Darstellung kann von der Standard-Listenansicht abweichen.

## Funktionsweise

In der linken Spalte werden die Ressourcen als Zeilen angezeigt. Die Spalten entsprechen den Wochentagen. Drückt man auf das Plus-Symbol in einer Zelle, wird eine neue Buchung für den entsprechenden Tag und die entsprechende Ressource erstellt. Es öffnet sich die Schnellerfassung, wie sie auch bei der _Datensatz Liste_ verwendet wird.

Für den Terminplaner wird eine Buchungsliste benötigt, die mindestens einen _Datensatz_-Baustein auf die Ressource und einen _Datum_-Baustein enthält.

## Hinweise

- Für eine optimale Darstellung empfiehlt es sich, den Terminplaner in einer übergeordneten Liste zu platzieren, bei der die Einstellung _Bei einzelnem Datensatz direkt zum Datensatz springen_ aktiviert ist. So wird der Kalender über den ganzen Bildschirm angezeigt.
- Eine _Verknüpfung über_ ist nicht zwingend notwendig, kann aber genutzt werden, um Buchungen auf einen bestimmten Kontext (z. B. Projekt, Baustelle) zu filtern.

## Verwandte Bausteine

- [Kalender](/docs/bricks/advanced/calendar) — Für die Kalenderdarstellung ohne Ressourcenzuordnung
- [Datensatz Liste](/docs/bricks/advanced/record-list) — Für die einfache Listenanzeige verknüpfter Einträge
- [Ressourcen-Zuweisung](/docs/bricks/advanced/resource-allocation) — Für Drag-&-Drop-Zuweisungen von Ressourcen
