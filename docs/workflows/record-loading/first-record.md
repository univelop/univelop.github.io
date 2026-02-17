---
layout: workflow-step
title: Finde ersten Eintrag
parent: Einträge laden
grand_parent: Workflows
icon: manage_search
nav_order: 4
redirect_from:
    - /docs/workflows/grand-childs-bricks/get-first-record.html
    - /docs/workflows/load-records/first-record.html
---

Mit dem Schritt _Finde ersten Eintrag_ wird der erste passende Datensatz einer Liste geladen. Ohne Sortierung ist die Reihenfolge nicht definiert — nur mit gesetzter Sortierung ist der Treffer konsistent.

## Einstellungen

1. **Verknüpfung mit** — Die Liste, in der gesucht wird.
2. **Filter und Sortierung** — Schränkt die möglichen Treffer ein und bestimmt die Reihenfolge.
3. **Modus (wenn kein Eintrag gefunden)** — Bestimmt das Verhalten bei keinem Treffer:
   - **Fehler anzeigen und Workflow abbrechen** — Standardverhalten. Der Workflow bricht mit einem Fehler ab.
   - **Erstellen** — Ein neuer Datensatz wird erstellt. Filterwerte werden als Anfangswerte in den neuen Datensatz übernommen.
   - **Ignorieren (null zurückgeben)** — Der Schritt gibt `null` zurück. Folgende Schritte müssen dies per `ifElse(eintrag != null, ...)` oder [Laufe weiter, wenn](/docs/workflows/structure/continue-if) behandeln.

## Beispiel

Mit dem Modus _Ignorieren_ kann geprüft werden, ob ein Datensatz existiert:

```
ifElse(mitglieder_eintrag != null, mitglieder_eintrag.title, 'Kein Eintrag gefunden.')
```

## Hinweise

- Ohne Filter und Sortierung ist der zurückgegebene Datensatz zufällig.
- Auch mit Filter, zu dem mehrere Datensätze passen, ist ohne Sortierung nicht definiert, welcher Datensatz zurückgegeben wird.
- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.

## Verwandte Schritte

- [Wähle Eintrag](/docs/workflows/record-loading/choose-record) — Für die Auswahl eines Datensatzes aus dem Workflow-Kontext
- [Iteriere über Einträge](/docs/workflows/record-loading/iterate-records) — Für die Verarbeitung mehrerer Datensätze
