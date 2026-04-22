---
layout: title
title: Navigation
parent: Basis-Bausteine
grand_parent: Bausteine
nav_order: 8
redirect_from:
    - /docs/record-spec-settings/grand-childs-base/navigate.html
---

Der Baustein _Navigation_ zeigt einen Button an, der bei Klick eine konfigurierbare Navigation innerhalb der App auslöst. Er vereinfacht Prozesse zwischen mehreren Listen.
## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Stil** - Legt das visuelle Erscheinungsbild der Navigation fest. Mögliche Werte:
   - _Als Link anzeigen_ — Einfache Anzeige des Texts 'Navigation' in Primärfarbe.
   - _Primörer Button_ — Button in Primärfarbe des Arbeitsbereichs.
   - _Sekundärer Button_ — Button in Sekundärfarbe des Arbeitsbereihs. 
2. **Aktion** — Die Aktion, die bei einem Klick auf den Button ausgelöst wird:
   - _Navigiere zu Liste_ — Öffnet eine ausgewählte Liste. Über Filter können die angezeigten Einträge eingeschränkt werden.
   - _Navigiere zum ersten Eintrsg_ — Öffnet den ersten Eintrag einer bestimmten Liste. Um zu einem bestimmten Eintrag zu navigieren, müssen die Filter den Eintrag eindeutig identifizieren (z.B. über dessen ID). Wird kein Eintrag gefunden, erhält der Nutzer eine entsprechende Meldung.
   - _Erstelle einen neuen Datensatz_ — Erstellt einen neuen Eintrag in einer ausgewählten Liste. Über Filter im Dialog 'Vorbelegung' können dem neuen Eintrag Standardwerte mitgegeben werden.
   - _Navigiere zum Homescreen_ — Navigiert zurück zum Homescreen des Arbeitsbereichs.
   - _Navigiere zur Seitenkomponente_ — Öffnet eine bestimmte Seite innerhalb des Arbeitsbereichs. Über Filter im Dialog 'Vorbelegung' können der Seite Standardwerte mitgegeben werden.
3. **Verknüpfung mit** — Die Liste, zu der navigiert wird oder in der ein Eintrag erstellt/gesucht wird. Nur verfügbar bei den Aktionen _Navigiere zu Liste_, _Navigiere zum ersten Eintrag_ und _Erstelle einen neuen Datensatz_.
4. **Filter und Sortierung** — Es können Filterbedingungen erstellt werden, um die Ergebnisse der Navigation einzuschränken. Es kann ein Baustein aus der Zielliste gewählt werden nach dem die Ergebnisse sortiert werden, sowie die Sortierrichtung (aufsteigend/absteigend) fesgelegt werden.
5. **Aktuelle Seite ersetzen** Die aktuelle Seite wird durch die Navigation aufgerufenen ersetzt. Sollte unser über den Zurück Button die Seite verlassen werden sie an den geleitet Homescreen statt an die aktuelle Seite zurückgeleitet zu werden. 
6. **Im Dialog öffnen** — Öffnet das Navigationsziel als Dialog-Overlay statt als vollständige Navigation. Nur verfügbar bei _Navigiere zum ersten Eintrag_. _Navigiere zur Seitenkomponenten_ und _Erstelle einen neuen Datensatz_.
7. **Vorbelegung** Über Filter können einem neuen Eintrag bzw. einer neuen Seite Standardwerte mitgegeben werden. Nur verfügbar bei _Navigiere zur Seitenkomponenten_ und _Erstelle einen neuen Datensatz_.
8. **Erstelle Datensatz, wenn keiner gefunden wurde** — Erstellt automatisch einen neuen Eintrag, wenn die Filter kein Ergebnis liefern. Nur verfügbar bei _Navigiere zum ersten Eintrag_.

## Hinweise

- Dieser Baustein ist in geteilten Datensätzen (Shared Record Specs) nicht verfügbar.

## Funktionsweise

Um zu einem spezifischem Eintrag zu kommen können wir unter _Verknüpfung mit_ die Liste auswählen, in dem sich der Eintrag befindet. 
![alt text](image.png)
![alt text](/assets/workflows/advanced/bricks/basic/navigation-example-connect-list-v2.png)
Anschließend können wir unter _Filter_ einen Filter mit einem Baustein der den Eintrag eindeutig identifiziert (idealerweise eine eindeutige ID) erstellen.
![alt text](/assets/workflows/advanced/bricks/basic/navigation-example-filter-v2.png)
## Verwandte Bausteine

- [Web Link](/docs/bricks/basic/web-button) — Für Navigation zu externen URLs
