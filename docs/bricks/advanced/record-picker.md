---
layout: title
title: Datensatz
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 1
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/record.html
---

Mit dem Baustein _Datensatz_ wird eine Verknüpfung zu einem einzelnen Datensatz einer anderen Liste hergestellt. Er eignet sich z. B. für die Zuordnung eines Kunden zu einem Auftrag, eines Artikels zu einer Position oder eines Mitarbeiters zu einem Einsatz.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Verknüpfung mit** — Die Liste, aus der ein Datensatz ausgewählt werden kann.
2. **Filter und Sortierung** — Schränkt die zur Auswahl stehenden Datensätze ein. Über den `=B`-Filter kann dynamisch auf Grundlage eigener Werte gefiltert werden.
3. **Werte übernehmen** — Übernimmt einmalig oder synchron Werte aus dem verknüpften Datensatz. Beispiel: Beim Artikel wird die Einheit automatisch übernommen.
4. **Datensatz initial setzen** — Setzt den Datensatz automatisch, wenn die Filterung nur einen einzigen Treffer ergibt.
5. **Mit aktuellem Benutzer vorbelegen** — Beim Erstellen eines neuen Eintrags wird der aktuelle Benutzer eingetragen, sofern er den Filtern entspricht.
6. **Benachrichtigungen für eingetragenen Benutzer** — Sendet Benachrichtigungen an den im Baustein eingetragenen Benutzer.
7. **Besitzer ändern** — Ändert den Besitzer des Datensatzes auf den im Baustein eingetragenen Benutzer.
8. **Diesen Datensatz löschen/duplizieren, wenn verknüpfter Datensatz gelöscht oder dupliziert wird** — Koppelt die Lebenszyklen beider Datensätze. Dies hat auch Auswirkungen auf die Datensatzsperre und das Änderungsprotokoll: Beides wird über den übergeordneten Datensatz gesteuert.

## Funktionsweise

Beim Klick auf den Baustein öffnet sich die Datensatz-Suche. Hier können die verfügbaren Datensätze durchgescrollt oder per Suchfeld gesucht werden. Die Darstellung in der Suche entspricht der Listenansicht der verknüpften Liste.

## Hinweise

- Der Baustein speichert die ID des verknüpften Datensatzes. In Formeln kann über den technischen Namen auf Felder des verknüpften Datensatzes zugegriffen werden.
- Über die _Werte übernehmen_-Funktion können Felder synchron gehalten werden — Änderungen im verknüpften Datensatz werden automatisch übertragen.
- Verknüpfungsmöglichkeiten sind unter [Verknüpfen von Listen](/docs/link-lists) beschrieben.

## Verwandte Bausteine

- [Datensätze](/docs/bricks/advanced/multi-record-picker) — Für die Verknüpfung mit mehreren Datensätzen
- [Datensatz Liste](/docs/bricks/advanced/record-list) — Für die Anzeige verknüpfter Einträge als Liste
- [Status](/docs/bricks/advanced/status) — Für die Statusverwaltung von Datensätzen
