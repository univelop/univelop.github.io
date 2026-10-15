---
layout: workflow-step
title: Importiere Tabelle
parent: Erweitert
grand_parent: Workflows
icon: vertical_align_top
nav_order: 4
redirect_from:
    - /docs/workflows/grand-childs-bricks/import-excel.html
---

Mit dem Schritt _Importiere Tabelle_ werden Daten aus einer Excel- oder CSV-Datei eingelesen, die über einen [Datei-Upload](/docs/bricks/input/file-picker)-Baustein hochgeladen wurde. Die eingelesenen Daten sind in folgenden Schritten als Liste zugreifbar.

## Einstellungen

1. **Verknüpfen mit Liste** — Die Liste, die den [Datei-Upload](/docs/bricks/input/file-picker)-Baustein enthält.
2. **Verknüpfung mit Baustein** — Der Datei-Upload-Baustein, über den die Tabelle hochgeladen wurde.
3. **Datensatz-ID** — Die ID des Datensatzes mit der hochgeladenen Datei. Existiert im Workflow bereits vorher ein [Wähle Datensatz](/docs/workflows/record-loading/choose-record)-Schritt, schlägt die generische Variablen-Autovervollständigung des Editors dessen ID als Wert für dieses Feld vor, so wie bei jedem anderen Schritt, der einen Datensatz liefert. Eine manuelle Auswahl ist dann nicht nötig, der Vorschlag kann bei Bedarf aber jederzeit überschrieben werden.
4. **Art des Dokuments** — Das Format der Datei: _Excel_ (.xlsx) oder _CSV_.
5. **Anzahl Kopfzeilen** — Die Anzahl der Zeilen, die als Kopfzeilen übersprungen werden. Bei `1` beginnen die Daten ab Zeile 2.
6. **Feld-Trennzeichen** — _Nur bei CSV._ Das Trennzeichen zwischen Feldern (Standard: Komma).
7. **Text-Trennzeichen** — _Nur bei CSV._ Das Zeichen für Textumrahmung (Standard: Anführungszeichen).

## Voraussetzungen

- **Excel:** Dateiformat .xlsx, nur ein Tabellenblatt, nur eine Datei im Upload-Baustein.
- **CSV:** Korrekte Trennzeichen-Konfiguration.

## Verarbeitung der Daten

Die eingelesenen Daten sind über `technischer_name.data` als Liste von Zeilen verfügbar. Per [Iteriere über Werte](/docs/workflows/structure/iterate-list) können die Zeilen durchlaufen werden. Spalten werden über den Index angesprochen (ab 0):

- `zeile[0]` — Wert aus Spalte A
- `zeile[1]` — Wert aus Spalte B

Per [Erstelle einen neuen Datensatz](/docs/workflows/record-loading/create-record) können die Zeilenwerte in neue Datensätze geschrieben werden.

## Hinweise

- Verfügbar in: Client-Automatisierung, Server-Automatisierung.
- Unterstützt keine Simulation (Dry-Run): Bei einer Simulation wird eine Warnung ausgegeben und der Schritt übersprungen.
