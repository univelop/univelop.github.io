---
layout: title
title: Arbeitsbereich
parent: Designmodi
nav_order: 1
---

Im Arbeitsbereich-Designmodus werden Kacheln angelegt, angeordnet und konfiguriert. Hier wird die gesamte Startseite des Arbeitsbereichs gestaltet.

## Designmodus öffnen

Den Designmodus des Arbeitsbereichs erreicht man über zwei Wege:

1. Oben rechts auf den **Drei-Punkte-Button** klicken und **Designmodus** auswählen.
2. Eine Kachel ca. 2 Sekunden lang mit der linken Maustaste gedrückt halten.

In der Mitte des Bildschirms werden alle allgemeinen Kacheln und darunter die eigenen Kacheln angezeigt. Versteckte Kacheln erscheinen ausgegraut mit einem durchgestrichenen Augen-Symbol. Die Reihenfolge der Kacheln lässt sich per Drag-and-Drop ändern.

## Kacheleinstellungen

Wird eine Kachel im Designmodus ausgewählt, erscheinen rechts die Kacheleinstellungen. Eine vollständige Beschreibung aller Einstellungen befindet sich unter [Allgemeine Kacheleinstellungen](/docs/tiles/general-settings).

Von hier aus können auch die weiteren Designmodi geöffnet werden:

1. **Designmodus der Einträge** — öffnet den [Eintrags-Designmodus](/docs/designmode/record) für die ausgewählte Kachel
2. **Designmodus der Liste** — öffnet den [Listenansicht-Designmodus](/docs/designmode/list-view) für die ausgewählte Kachel

## Export und Import

Über den Button **Export** kann eine einzelne Kachel als JSON-Datei exportiert werden. Ein Export erfolgt immer **ohne Vorlagen und ohne Datensätze**. Die exportierte Kachel kann über den Button **Import** in einen anderen Arbeitsbereich eingefügt werden.

{: .warning }
Hierbei handelt es sich um eine Einbahnstraße. Die exportierte Kachel erhält die ID des Ziel-Arbeitsbereichs und kann nicht zurück exportiert und importiert werden. Wir empfehlen einen Demo-Arbeitsbereich, in welchem sämtliche Änderungen vorgenommen werden, die anschließend in den Hauptarbeitsbereich exportiert werden können.

## Weitere Aktionen

- **Counter aktualisieren** — aktualisiert den Indikator (Anzahl oder Summe) auf der Kachel. Im Produktivsystem geschieht dies automatisch, muss jedoch initial angestoßen werden.
- **Löschen** — löscht die ausgewählte Kachel endgültig.
