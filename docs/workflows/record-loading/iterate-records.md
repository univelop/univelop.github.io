---
layout: workflow-step
title: Iteriere über Datensätze
parent: Einträge laden
grand_parent: Workflows
icon: list
nav_order: 5
redirect_from:
    - /docs/workflows/grand-childs-bricks/iterate-records.html
    - /docs/workflows/load-records/iterate-records.html
---

Mit dem Schritt _Iteriere über Datensätze_ werden die inneren Schritte für jeden Datensatz einer Liste ausgeführt. Die Bausteinwerte des aktuellen Datensatzes sind über den technischen Namen des Schritts zugreifbar.

## Einstellungen

1. **Verknüpfung mit** — Die Liste, deren Datensätze durchlaufen werden.
2. **Filter und Sortierung** — Schränkt die Datensätze ein. Die Sortierung bestimmt die Ausführungsreihenfolge.
3. **Bei Fehler fortsetzen** — Wenn aktiviert, wird die Iteration nach einem Fehler im aktuellen Durchlauf mit dem nächsten Datensatz fortgesetzt.
4. **Abbruchbedingung** — _Optional._ Eine Ja/Nein-Formel. Ergibt sie `true`, wird die Iteration vorzeitig beendet.

## Funktionsweise

Der Schritt enthält einen inneren Bereich für weitere Schritte. Für jeden gefundenen Datensatz werden diese ausgeführt. Die Werte des aktuellen Datensatzes sind über den technischen Namen zugreifbar, z. B. `bestellungen.id` für die ID.

## Hinweise

- Für die Iteration über einfache Wertelisten (keine Datensätze) gibt es den Schritt [Iteriere über Werte](/docs/workflows/structure/iterate-list).
- Verfügbar in: Geräteseitige Automatisierung, Cloud-Automatisierung.
- Dieser Schritt verbraucht keine [Credits](/docs/credits).
