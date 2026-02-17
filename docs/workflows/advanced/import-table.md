---
layout: workflow-step
title: Importiere Tabelle
parent: Erweitert
grand_parent: Workflows
icon: vertical_align_top
nav_order: 8
redirect_from:
    - /docs/workflows/grand-childs-bricks/import-excel.html
---

Mit dem Schritt _Importiere Tabelle_ werden Daten aus einer Excel- oder CSV-Datei eingelesen, die über einen [Datei-Upload](/docs/bricks/input/file-picker)-Baustein hochgeladen wurde. Die eingelesenen Daten sind in folgenden Schritten als Liste zugreifbar.

## Einstellungen

1. **Verknüpfung mit** — Die Liste, die den [Datei-Upload](/docs/bricks/input/file-picker)-Baustein enthält.
2. **Verknüpfung mit Baustein** — Der Datei-Upload-Baustein, über den die Tabelle hochgeladen wurde.
3. **Datensatz-ID** — Die ID des Datensatzes mit der hochgeladenen Datei.
4. **Dateiformat** — Das Format der Datei: _Excel_ (.xlsx) oder _CSV_.
5. **Anzahl Kopfzeilen** — Die Anzahl der Zeilen, die als Kopfzeilen übersprungen werden. Bei `1` beginnen die Daten ab Zeile 2.
6. **CSV-Feldtrennzeichen** — _Nur bei CSV._ Das Trennzeichen zwischen Feldern (Standard: Komma).
7. **CSV-Texttrennzeichen** — _Nur bei CSV._ Das Zeichen für Textumrahmung (Standard: Anführungszeichen).

## Voraussetzungen

- **Excel:** Dateiformat .xlsx, nur ein Tabellenblatt, nur eine Datei im Upload-Baustein.
- **CSV:** Korrekte Trennzeichen-Konfiguration.

## Verarbeitung der Daten

Die eingelesenen Daten sind über `technischer_name.data` als Liste von Zeilen verfügbar. Per [Iteriere über Werte](/docs/workflows/structure/iterate-list) können die Zeilen durchlaufen werden. Spalten werden über den Index angesprochen (ab 0):

- `zeile[0]` — Wert aus Spalte A
- `zeile[1]` — Wert aus Spalte B

Per [Erstelle Eintrag](/docs/workflows/record-loading/create-record) können die Zeilenwerte in neue Datensätze geschrieben werden.

## Hinweise

- Verfügbar in: Client-Automatisierung, Server-Automatisierung.
