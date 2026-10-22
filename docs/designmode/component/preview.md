---
layout: title
title: Vorschau
parent: Komponenten-Designmodus
grand_parent: Designmodi
nav_order: 3
redirect_from:
    - /docs/designmode/list-view.html
---

Im Tab **Vorschau** wird festgelegt, wie die Datensätze in der Listenübersicht dargestellt werden. Hier werden Bausteine den Vorschaufeldern zugeordnet und die Mehrfachauswahl konfiguriert.

## Listenvorschau gestalten

Auf der linken Seite werden alle Bausteine des Datensatzes angezeigt, die eine Darstellung für die Listenansicht besitzen. In der Mitte befinden sich **6 Felder**, die die Kurzfassung eines Datensatzes in der Liste darstellen:

- **Registerfarbe** — nur ein Baustein mit Farbauswahl (z. B. Status, aber auch eine Datensatz-Auswahl oder ein Segmente-Baustein mit Farbe)
- **Linke Spalte** / **Rechte Spalte** — es können mehr Bausteine hineingezogen werden, angezeigt werden jedoch jeweils nur die ersten drei
- **Erste Zeile**, **Zweite Zeile**, **Dritte Zeile** — Anzeige abhängig vom verfügbaren Platz, bei Bedarf mit "…" gekürzt

Die Bausteine können per Drag-and-Drop von links in eines der Felder gezogen werden. Oben im mittleren Bereich wird eine Live-Vorschau der Darstellung angezeigt. Klickt man auf ein belegtes Feld, erscheinen rechts die Einstellungen und die Möglichkeit, den Baustein zu entfernen.

{: .hint }
Wenn ein Baustein in der Listenansicht verwendet wird, kann dieser nicht gelöscht werden.

## Oberfläche

- **Pfeil zur Detailansicht anzeigen** — blendet einen Pfeil ein, der beim Anklicken eines Listeneintrags zur Detailansicht führt.

## Mehrfachauswahl

- **Aktivieren** — schaltet die Mehrfachauswahl für die Liste frei. Ist sie aktiviert, erscheint **Eintrag auswählen** im Dreipunkt-Menü der Listenansicht.
- **Favoriten für Mehrfachauswahl** — über den "+"-Button im Dialog **Favoriten wählen** lassen sich bis zu 3 Bausteine mit jeweils einer Aktion und einem editierbaren Wert festlegen. Für diese Favoriten wird die Änderungsaktion bei der aktivierten Mehrfachauswahl als Button angezeigt, über welche die Werte des ausgewählten Bausteins in den ausgewählten Einträgen der Mehrfachauswahl auf einmal geändert werden können.

{: .hint }
Die globale **Filter- und Sortierungs-Konfiguration** der Liste befindet sich nicht in diesem Tab, sondern im Tab [Erweitert](/docs/designmode/component/advanced).
