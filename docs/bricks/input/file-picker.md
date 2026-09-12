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

1. **Auf eine Datei beschränken** - Maximal eine Datei kann im Baustein hochgeladen werden. 
2. **Bestehende Datei überschreiben** - Sollte bereits eine Datei im Baustein hochgeladen sein und eine weitere Datei wird hochgeladen, wird die alte Datei durch die neue Datei ersetzt. Nur vefügbar wenn _Auf eine Datei beschränken_ aktiviert ist.  
3. **Maximale Anzahl an Dateien** — Maximale Anzahl an Dateien pro Eintrag. Standard: 100. Nur verfügbar wenn _Auf eine Datei beschränken_ nicht aktiviert ist. 
4. **Anzahl der Vorschauedatein** — Anzahl der in der Vorschau angezeigten Dateien. Standard: 15. Nur verfügbar wenn _Auf eine Datei beschränken_ nicht aktiviert ist. 
5. **Dateigröße begrenzen** - Beschränkt die maximale Dateigröße.
6. **Maximale Dateiengröße in KiB** - Beschränkung der maximalen Dateigröße - nur verfügbar wenn _Dateigröße begrenzen_ aktiv ist. 
7. **Änderungsdatum einblenden** - Das Datum der letzten Änderung an der Datei wird unter der Datei eingeblendet.
8. **Per PowerShell mit Dateisystem synchronisieren** - Aktiviert die Synchronisation zwischen einem lokalen Windows-Ordner und dem Baustein über ein herunterladbares PowerShell-Skript. Dateien werden automatisch hoch- oder heruntergeladen, sobald das Skript ausgeführt wird.

 - _Sync mit Ordner (relative Pfandangabe_ -  Der lokale Windows-Ordnerpfad, der synchronisiert werden soll (z. B. C:/Dokumente/Aufträge/). Unterstützt ${Feldname}-Platzhalter, die zur Laufzeit durch den jeweiligen Feldwert des Eintrags ersetzt werden 
 - _Löschen wenn Datei fehlt_ - Dateien, die im Baustein vorhanden sind, aber nicht mehr im lokalen Ordner existieren, werden beim nächsten Skriptlauf in Univelop gelöscht.
 - _Dateiformate_ - Kommagetrennte Liste der Dateiendungen, die synchronisiert werden sollen (z. B. pdf, docx). Leer oder * bedeutet: alle Formate werden synchronisiert.
 - _Skript runterladen_ - Generiert und lädt ein PowerShell-Skript (.ps1) herunter, das auf einem Windows-Rechner ausgeführt oder per Windows Task Scheduler automatisiert werden kann
9. **Dateiformate einschrönken** — Schränkt die erlaubten Dateiendungen beim manuellen Upload ein, sodass nur bestimmte Formate hochgeladen werden können.
10. **Dateiformate** - Die erlaubten Dateiformaten. Nur verfügbar wenn _Dateiformate einschränken_ aktiviert ist. 

## Hinweise

- Für bessere Übersichtlichkeit empfiehlt es sich, mehrere Datei-Upload-Bausteine zu erstellen und thematisch zu kategorisieren.

## Funktionsweise 
Wenn wir einen Ordner per Shell Skript Synchronisieren möchten...

## Verwandte Bausteine

- [Bild Upload](/docs/bricks/input/image-picker) — Speziell für Bilder mit Zeichenfunktion und Wasserzeichen
- [Datei](/docs/bricks/basic/file) — Für feste, unveränderliche Dateien
