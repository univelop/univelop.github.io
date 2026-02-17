---
layout: title
title: Datei Upload
parent: Formular-Bausteine
grand_parent: Bausteine
nav_order: 12
redirect_from:
    - /docs/record-spec-settings/grand-childs-form/upload-file.html
---

Der Baustein _Datei Upload_ ermöglicht das Hochladen von Dateien aller Art pro Eintrag, einschließlich Mehrfachupload. Dateien können über das Plus-Zeichen aus dem Dateisystem ausgewählt oder per Drag & Drop in den Baustein gezogen werden.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Maximale Anzahl** — Maximale Anzahl an Dateien pro Eintrag. Standard: 100.
2. **Einzelne Datei überschreiben** — Ersetzt die vorhandene Datei beim Hochladen einer neuen, wenn die maximale Anzahl auf 1 gesetzt ist.
3. **Änderungsdatum anzeigen** — Zeigt das Datum der letzten Änderung an jeder Datei an.
4. **Nur sichere Dateitypen** — Schränkt die erlaubten Dateitypen ein. Bei Aktivierung wird die Einstellung _Erlaubte Dateierweiterungen_ verfügbar.
5. **Erlaubte Dateierweiterungen** — Kommagetrennte Liste erlaubter Dateiendungen (z. B. „pdf, docx, png"). Nur verfügbar wenn _Nur sichere Dateitypen_ aktiviert ist.
6. **Dateien in Vorschau** — Anzahl der in der Vorschau angezeigten Dateien. Standard: 15.

## Hinweise

- Für bessere Übersichtlichkeit empfiehlt es sich, mehrere Datei-Upload-Bausteine zu erstellen und thematisch zu kategorisieren.

## Verwandte Bausteine

- [Bild Upload](/docs/bricks/input/image-picker) — Speziell für Bilder mit Zeichenfunktion und Wasserzeichen
- [Datei](/docs/bricks/basic/file) — Für feste, unveränderliche Dateien
