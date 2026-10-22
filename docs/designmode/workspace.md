---
layout: title
title: Arbeitsbereich
parent: Designmodi
nav_order: 1
---

Im Arbeitsbereich-Designmodus werden Komponenten angelegt, angeordnet und konfiguriert. Hier wird die gesamte Startseite des Arbeitsbereichs gestaltet.

## Designmodus öffnen

Den Designmodus des Arbeitsbereichs erreicht man über zwei Wege:

1. In der Seitenleiste den Button **Komponenten bearbeiten**  (Icon mit drei Quadraten und einem Plus) auswählen.
2. Eine Komponente ca. 2 Sekunden lang mit der linken Maustaste gedrückt halten.

In der Mitte des Bildschirms werden alle allgemeinen Komponenten und darunter die eigenen Komponenten angezeigt. Die Reihenfolge der Komponenten lässt sich per Drag-and-Drop ändern.

## Komponenteneinstellungen

Wird eine Komponente ausgewählt, erscheint rechts ein Einstellungs-Panel, das je nach Komponententyp variiert. Bei der Einfachen Liste z. B.:

- **Designmodus**-Button — öffnet den [Komponenten-Designmodus](/docs/designmode/component). Man landet dabei immer zuerst im Tab Vorschau und kann von dort in die anderen Tabs wechseln.
- **Darstellung** — Name, Indikator (Icon/Anzahl/Summe inkl. Summen-Baustein und Suffix), Icon, Farbe.
- **AI Agent** — KI-Beschreibung.
- **Filter** — Link zur Filterkonfiguration (liegt inhaltlich im Tab [Erweitert](/docs/designmode/component/advanced) des Komponenten-Designmodus).
- **Sichtbarkeit** — Komponente verstecken, Für Benutzerrollen anzeigen, zusätzlich **Für mich ausblenden**.
- **Erweitert** — Technischer Name, Bei einzelnem Datensatz direkt zum Datensatz springen.
- **Freigabe** — nur bei geteilten Listen, Anzeige von wem freigegeben.

{: .hint }
**Zugeordnete Solution** findet sich ausschließlich im Tab [Erweitert](/docs/designmode/component/advanced) des Komponenten-Designmodus, nicht in diesem Panel.


## Export und Import

In der Leiste befinden sich die Buttons **Import** (links) und **Export** (rechts). Über **Export** kann eine einzelne Komponente als JSON-Datei exportiert werden. Ein Export erfolgt immer **ohne Vorlagen und ohne Datensätze**. Die exportierte Komponente kann über **Import** in einen anderen Arbeitsbereich eingefügt werden — auch wieder zurück in den ursprünglichen Arbeitsbereich.

## Weitere Aktionen

- **Counter aktualisieren** — aktualisiert den Indikator (Anzahl oder Summe) auf der Komponente. Im Produktivsystem geschieht dies automatisch, muss jedoch initial angestoßen werden.
- **Ordner** — Zuordnung zu einem [Ordner](/docs/tiles/folder-tile). Nicht bei jedem Komponententyp verfügbar (z. B. nicht bei der Einfachen Liste).
- **Duplizieren** — erstellt eine Kopie der Komponente. Nicht bei jedem Komponententyp verfügbar (z. B. nicht bei der Einfachen Liste).
- **Löschen** — löscht die ausgewählte Komponente endgültig.

## Verwandte Seiten

- [Komponenten-Designmodus](/docs/designmode/component) — eine einzelne Komponente im Detail konfigurieren
- [Workflow-Designmodus](/docs/designmode/workflow) — Workflows für eine Komponente erstellen und bearbeiten
