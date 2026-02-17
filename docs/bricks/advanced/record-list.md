---
layout: title
title: Datensatz Liste
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 3
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/record-list.html
---

Der Baustein _Datensatz Liste_ zeigt Einträge einer verknüpften Liste innerhalb eines Datensatzes an. Anders als bei den Bausteinen _Datensatz_ und _Datensätze_ werden hier keine bestehenden Datensätze ausgewählt, sondern neue Datensätze direkt erfasst. Er eignet sich z. B. für Positionen in einem Auftrag, Arbeitszeiten zu einem Projekt oder Artikelbewegungen zu einem Lieferschein.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Verknüpfung mit** — Die Liste, deren Einträge angezeigt werden sollen.
2. **Verknüpfung über** — Ein _Datensatz_-Baustein in der verknüpften Liste, der auf die eigene Liste zurückzeigt. Damit werden nur Einträge angezeigt, die mit dem aktuellen Datensatz verbunden sind.
3. **Filter und Sortierung** — Zusätzliche oder alternative Filterung der angezeigten Einträge. Über den `=B`-Filter kann dynamisch gefiltert werden.
4. **Darstellung** — Wählt zwischen _Eingebettete Liste_ und _Link zur Liste_.
5. **Anzahl der Datensätze in Vorschau** — Anzahl der sichtbaren Einträge bei eingebetteter Liste (Standard: 3).
6. **Schnellerfassung** — Ermöglicht das Anlegen neuer Datensätze direkt in einer Vorschau, ohne den Datensatz vollständig zu öffnen. Bausteine können für die Schnellerfassung ausgeblendet werden.
7. **Erfassungs-Button ausblenden** — Versteckt den Button zum Anlegen neuer Einträge.
8. **Detailansicht-Button ausblenden** — Versteckt den Button zur Detailansicht einzelner Einträge.
9. **Summe anzeigen** — Zeigt eine Summe unterhalb der Liste an. Verfügbare Optionen: _Anzahl der Punkte_ (ein Punkt pro Eintrag), _Anzahl der Einträge_ (als Zahl) oder _Summe über einen Baustein_ (z. B. Arbeitszeit pro Tag). Nur verfügbar wenn eine _Verknüpfung über_ gewählt wurde.

## Funktionsweise

### Verknüpfung über

Die _Verknüpfung über_ folgt der Regel: „Verknüpfe immer über dich selbst". Das bedeutet, in der verknüpften Liste muss ein _Datensatz_-Baustein existieren, der auf die eigene Liste zeigt. Beispiel: Hat eine Liste _Lieferscheine_ eine Datensatz-Liste in Richtung _Artikelbewegungen_, benötigt man in den _Artikelbewegungen_ einen _Datensatz_-Baustein, der mit _Lieferscheinen_ verknüpft ist.

### Darstellung als Link

Bei der Darstellung als _Link zur Liste_ gelangt man beim Klick auf den Baustein in die verknüpfte Liste und sieht dort die gefilterten Datensätze in der Listenansicht.

### Darstellung als eingebettete Liste

Bei der eingebetteten Liste wird die Listenansicht der verknüpften Liste direkt im Datensatz angezeigt. Über die _Schnellerfassung_ können neue Einträge direkt in einer Vorschau erfasst werden.

### Summen

Summen über einen Baustein können in Formeln weiterverwendet werden — z. B. für Netto-Umsatz, darauf aufbauend Steuer und Brutto.

## Hinweise

- Filter werden beim Erzeugen neuer Tabellenzeilen automatisch als Vorbelegung übernommen.
- Bei der _Verknüpfung über_ wird beim Erstellen eines neuen Eintrags der aktuelle Datensatz automatisch im verknüpften Baustein eingetragen.
- Verknüpfungs- und Filtermöglichkeiten sind unter [Verknüpfen von Listen](/docs/link-lists) beschrieben.

## Verwandte Bausteine

- [Datensatz](/docs/bricks/advanced/record-picker) — Für die Verknüpfung mit einem einzelnen Datensatz
- [Tabelle](/docs/bricks/advanced/table) — Für tabellarische Darstellung verknüpfter Einträge
- [Kalender](/docs/bricks/advanced/calendar) — Für die Kalenderdarstellung verknüpfter Einträge
