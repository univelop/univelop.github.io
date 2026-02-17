---
layout: title
title: Kalender
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 8
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/calender.html
---

Der Baustein _Kalender_ stellt Einträge einer verknüpften Liste in einer Kalenderansicht dar. Er eignet sich z. B. für Arbeitszeiten, Wiedervorlageeinträge, Aufgabenplanung oder Terminübersichten. Der Baustein ist im Prinzip eine alternative Darstellung einer _Datensatz Liste_, bei der die Einträge anhand ihres Datums den Kalendertagen zugeordnet werden.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Verknüpfung mit** — Die Liste, deren Einträge im Kalender angezeigt werden sollen.
2. **Verknüpfung über** — Ein _Datensatz_-Baustein in der verknüpften Liste, der die Zuordnung zum aktuellen Datensatz herstellt. Es wird immer über sich selbst verknüpft.
3. **Verknüpfung zu Datum** — Der _Datum_-Baustein in der verknüpften Liste, anhand dessen die Einträge den Kalendertagen zugeordnet werden.
4. **Filter und Sortierung** — Schränkt die angezeigten Einträge ein.
5. **Anzahl der Vorschau** — Die Anzahl der Datensätze, die bei Auswahl eines Tages in der Vorschau angezeigt werden.
6. **Summe anzeigen** — Zeigt in den Kalendertagen eine Zusammenfassung an. Verfügbare Optionen:
   - _Anzahl der Punkte_ — Ein Punkt pro Eintrag.
   - _Anzahl der Einträge_ — Die Anzahl als Zahl.
   - _Summe über einen Baustein_ — Die Summe eines numerischen Bausteins (z. B. Arbeitszeit) pro Tag.
7. **Kalenderformat** — Das Anzeigeformat des Kalenders: _Monat_, _Zwei Wochen_ oder _Eine Woche_.

## Funktionsweise

Der Kalender zeigt die verknüpften Einträge an den entsprechenden Kalendertagen an. Bei Auswahl eines Tages wird unterhalb des Kalenders eine Vorschau der Einträge für diesen Tag angezeigt. Über die Vorschau können Einträge direkt geöffnet und bearbeitet werden.

## Hinweise

- Der Baustein basiert auf der gleichen Verknüpfungslogik wie die _Datensatz Liste_.
- Die Summenanzeige pro Tag ermöglicht z. B. die Darstellung der täglichen Arbeitszeit auf einen Blick.

## Verwandte Bausteine

- [Datensatz Liste](/docs/bricks/advanced/record-list) — Für die Listenanzeige verknüpfter Einträge
- [Terminplaner](/docs/bricks/advanced/scheduler) — Für die Wochenplanung mit Ressourcen
- [Datum](/docs/bricks/input/date-picker) — Der Baustein, über den die Zuordnung zum Kalendertag erfolgt
