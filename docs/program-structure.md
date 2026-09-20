---
title: Programmstruktur
nav_order: 2
layout: title
redirect_from:
    - /docs/software-structure.html
---

Univelop basiert auf einigen grundlegenden Konzepten, die sich gegenseitig ergänzen. Ein Verständnis dieser Konzepte ist die Grundlage für die Arbeit mit der Plattform.

## Arbeitsbereich

Ein Arbeitsbereich entspricht einer Umgebung oder einem Mandanten, in dem sich alle Kacheln und Datensätze befinden. In der Regel hat ein Unternehmen einen Arbeitsbereich. Für verschiedene Standorte oder Abteilungen können auch separate Arbeitsbereiche erstellt werden, zwischen denen Stammdaten geteilt werden können.

## Kachel

Eine Kachel ist vergleichbar mit einer App auf dem Smartphone. Die wichtigste Kachel ist die [Einfache Liste](/docs/tiles/basic-tile) — sie ermöglicht das Speichern strukturierter Daten, ähnlich einem Tabellenblatt in Excel oder einer Tabelle in einer Datenbank. Weitere Kacheln wie der [Ordner](/docs/tiles/folder-tile), das [Kanban Board](/docs/tiles/kanban-board-tile) oder die [Seite](/docs/tiles/page-tile) ermöglichen die individuelle Gestaltung des Arbeitsbereichs.

## Datensatz

Ein Datensatz ist ein einzelner Eintrag innerhalb einer Liste. Im Kontext einer Urlaubsverwaltung bildet jeder Urlaubsantrag einen separaten Datensatz. Datensätze bestehen aus Bausteinen, die die eigentlichen Informationen speichern.

## Baustein

[Bausteine](/docs/bricks/bricks) speichern die Informationen eines Datensatzes. Es gibt Bausteine für gängige Formate wie Text, Zahlen und Datum, aber auch spezialisierte Bausteine für Adressen, Zeichnungen, Unterschriften oder Dateianhänge.

## Workflow

[Workflows](/docs/workflows/workflows) ermöglichen das Abbilden von Prozessabläufen — von einfachen Wenn-Dann-Regeln über E-Mail-Versand bis hin zu mehrstufigen Genehmigungsketten. Workflows können manuell, über Buttons oder zeitgesteuert ausgelöst werden.
