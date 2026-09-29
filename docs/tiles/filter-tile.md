---
layout: title
title: Gefilterte Liste
nav_order: 4
parent: Kacheln
---

Die _Gefilterte Liste_-Komponente zeigt eine vorgefilterte Ansicht einer bestehenden [Einfachen Liste](/docs/tiles/basic-tile). Sie eignet sich ideal, um Teilmengen von Daten gezielt darzustellen — z. B. alle offenen Aufgaben, die eigenen Arbeitszeiten oder ungeprüfte Anträge.

## Erstellen

Eine gefilterte Komponente kann auf zwei Wegen erstellt werden:

1. **Aus der Listenansicht** — In einer geöffneten Liste einen Filter setzen und über das Speichern-Symbol als gefilterte Komponente sichern.
2. **Im Designmodus** — Im [Designmodus des Arbeitsbereichs](/docs/designmode/workspace) eine gefilterte Komponente per Drag & Drop auf den Homescreen ziehen und die Basisliste sowie die gewünschten Filter konfigurieren.

## Einstellungen

Zusätzlich zu den [allgemeinen Kacheleinstellungen](/docs/tiles/general-settings):

1. **Basiert auf der Liste** — Die Basisliste, deren Daten gefiltert angezeigt werden.
2. **Filter und Sortierung** — Die Filterkriterien, die festlegen, welche Datensätze in der Komponente erscheinen. Die Sortierung bestimmt die Reihenfolge.
3. **Komponente-Info** — Wie bei der Einfachen Liste: Icon, Anzahl oder Summe, beeinflusst durch die gesetzten Filter.
4. **Bei einzelnem Datensatz direkt zum Datensatz springen** — Überspringt die Listenansicht bei nur einem Treffer.

## Vorausfüllung bei neuen Einträgen

Wird über eine gefilterte Komponente ein neuer Datensatz erstellt, werden die Filterwerte automatisch in den neuen Eintrag übernommen. Das spart Eingabezeit und reduziert Fehler.

## Verwandte Komponenten

- [Einfache Liste](/docs/tiles/basic-tile) — Die Basiskomponente, auf der gefilterte Listen aufbauen
