---
layout: title
title: Navigation
parent: Basis-Bausteine
grand_parent: Bausteine
nav_order: 8
redirect_from:
    - /docs/record-spec-settings/grand-childs-base/navigate.html
---

Der Baustein _Navigation_ zeigt einen Button an, der bei Klick eine konfigurierbare Navigation innerhalb der App auslöst. Er vereinfacht Prozesse zwischen mehreren Listen und verbessert die Nutzbarkeit, insbesondere für Portal-Nutzer.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Stil** — Legt das visuelle Erscheinungsbild der Navigation fest. Mögliche Werte:
   - _Als Link anzeigen_ — Einfache Anzeige des Texts 'Navigation' in Primärfarbe.
   - _Primärer Button_ — Button in Primärfarbe des Arbeitsbereichs.
   - _Sekundärer Button_ — Button in Sekundärfarbe des Arbeitsbereichs.
2. **Aktion** — Die Aktion, die bei einem Klick auf den Button ausgelöst wird:
   - _Navigiere zu Liste_ — Öffnet eine ausgewählte Liste. Über Filter können die angezeigten Einträge eingeschränkt werden.
   - _Navigiere zum ersten Eintrag_ — Öffnet den ersten Eintrag einer bestimmten Liste. Um zu einem bestimmten Eintrag zu navigieren, müssen die Filter den Eintrag eindeutig identifizieren (z. B. über dessen ID). Wird kein Eintrag gefunden, erhält der Nutzer eine entsprechende Meldung.
   - _Erstelle einen neuen Datensatz_ — Erstellt einen neuen Eintrag in einer ausgewählten Liste. Über Filter im Dialog 'Vorbelegung' können dem neuen Eintrag Standardwerte mitgegeben werden.
   - _Navigiere zum Homescreen_ — Navigiert zurück zum Homescreen des Arbeitsbereichs.
   - _Navigiere zur Seitenkomponente_ — Öffnet eine bestimmte Seite innerhalb des Arbeitsbereichs. Über Filter im Dialog 'Vorbelegung' können der Seite Standardwerte mitgegeben werden.
3. **Verknüpfung mit** — Die Liste, zu der navigiert wird oder in der ein Eintrag erstellt/gesucht wird. Nur verfügbar bei den Aktionen _Navigiere zu Liste_, _Navigiere zum ersten Eintrag_ und _Erstelle einen neuen Datensatz_.
4. **Filter und Sortierung** — Filterbedingungen, um die Ergebnisse der Navigation einzuschränken, sowie der Baustein aus der Zielliste, nach dem die Ergebnisse sortiert werden, und die Sortierrichtung (aufsteigend/absteigend).
5. **Aktuelle Seite ersetzen** — Ersetzt die aktuelle Seite durch das Navigationsziel. Wird die Seite anschließend über den Zurück-Button verlassen, führt dieser zum Homescreen statt zur ursprünglichen Seite zurück.
6. **Im Dialog öffnen** — Öffnet das Navigationsziel als Dialog-Overlay statt als vollständige Navigation. Nur verfügbar bei _Navigiere zum ersten Eintrag_, _Navigiere zur Seitenkomponente_ und _Erstelle einen neuen Datensatz_.
7. **Vorbelegung** — Über Filter können einem neuen Eintrag bzw. einer neuen Seite Standardwerte mitgegeben werden. Nur verfügbar bei _Navigiere zur Seitenkomponente_ und _Erstelle einen neuen Datensatz_.
8. **Erstelle Datensatz, wenn keiner gefunden wurde** — Erstellt automatisch einen neuen Eintrag, wenn die Filter kein Ergebnis liefern. Nur verfügbar bei _Navigiere zum ersten Eintrag_.

## Hinweise

- Dieser Baustein ist in geteilten Datensätzen (Shared Record Specs) nicht verfügbar.

## Funktionsweise

Um zu einem spezifischen Eintrag zu kommen, kann unter _Verknüpfung mit_ die Liste ausgewählt werden, in der sich der Eintrag befindet.
![alt text](/assets/workflows/advanced/bricks/basic/navigation-example-connect-list-v2.png)
Anschließend kann unter _Filter und Sortierung_ ein Filter mit einem Baustein erstellt werden, der den Eintrag eindeutig identifiziert (idealerweise eine eindeutige ID).
![alt text](/assets/workflows/advanced/bricks/basic/navigation-example-filter-v2.png)

## Verwandte Bausteine

- [Web Link](/docs/bricks/basic/web-button) — Für Navigation zu externen URLs
