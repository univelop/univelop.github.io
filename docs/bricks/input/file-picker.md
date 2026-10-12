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
3. **Tipp-Verhalten** — Legt fest, was beim Antippen bzw. Klicken einer Datei passiert:
    - _Vorschau öffnen_ (Standard) — Öffnet die Datei in einer Vorschau.
    - _In Standard-App öffnen_ — Öffnet die Datei in der auf dem Gerät festgelegten Standard-App für diesen Dateityp.
    - _Teilen / Mit … öffnen_ — Öffnet den Teilen-Dialog des Geräts bzw. lädt die Datei herunter.
4. **Maximale Anzahl an Dateien** — Maximale Anzahl an Dateien pro Eintrag. Standard: 100. Nur verfügbar wenn _Auf eine Datei beschränken_ nicht aktiviert ist. 
5. **Anzahl der Vorschauedatein** — Anzahl der in der Vorschau angezeigten Dateien. Standard: 15. Nur verfügbar wenn _Auf eine Datei beschränken_ nicht aktiviert ist. 
6. **Dateigröße begrenzen** - Beschränkt die maximale Dateigröße.
7. **Maximale Dateiengröße in KiB** - Beschränkung der maximalen Dateigröße - nur verfügbar wenn _Dateigröße begrenzen_ aktiv ist. 
8. **Änderungsdatum einblenden** - Das Datum der letzten Änderung an der Datei wird unter der Datei eingeblendet.
9. **Per PowerShell mit Dateisystem synchronisieren** - Aktiviert die Synchronisation zwischen einem lokalen Windows-Ordner und dem Baustein über ein herunterladbares PowerShell-Skript. Dateien werden automatisch hoch- oder heruntergeladen, sobald das Skript ausgeführt wird.

 - _Sync mit Ordner (relative Pfandangabe_ -  Der lokale Windows-Ordnerpfad, der synchronisiert werden soll (z. B. C:/Dokumente/Aufträge/). Unterstützt ${Feldname}-Platzhalter, die zur Laufzeit durch den jeweiligen Feldwert des Eintrags ersetzt werden 
 - _Löschen wenn Datei fehlt_ - Dateien, die im Baustein vorhanden sind, aber nicht mehr im lokalen Ordner existieren, werden beim nächsten Skriptlauf in Univelop gelöscht.
 - _Dateiformate_ - Kommagetrennte Liste der Dateiendungen, die synchronisiert werden sollen (z. B. pdf, docx). Leer oder * bedeutet: alle Formate werden synchronisiert.
 - _Skript runterladen_ - Generiert und lädt ein PowerShell-Skript (.ps1) herunter, das auf einem Windows-Rechner ausgeführt oder per Windows Task Scheduler automatisiert werden kann
10. **Dateiformate einschrönken** — Schränkt die erlaubten Dateiendungen beim manuellen Upload ein, sodass nur bestimmte Formate hochgeladen werden können.
11. **Dateiformate** - Die erlaubten Dateiformaten. Nur verfügbar wenn _Dateiformate einschränken_ aktiviert ist. 

## Hinweise

- Für bessere Übersichtlichkeit empfiehlt es sich, mehrere Datei-Upload-Bausteine zu erstellen und thematisch zu kategorisieren.

## Funktionsweise

Nach der Aktivierung von _Per PowerShell mit Dateisystem synchronisieren_ werden Sync-Ordner, Verhalten bei fehlenden Dateien und optional erlaubte Dateiformate festgelegt. Über _Skript runterladen_ wird eine PowerShell-Datei (.ps1) erzeugt, die einen API-Schlüssel mit weitreichenden Rechten enthält und daher vertraulich behandelt werden sollte.

Wird das Skript ausgeführt, werden neue oder geänderte Dateien aus dem lokalen Ordner zu den passenden Einträgen in Univelop hochgeladen. Ist _Löschen wenn Datei fehlt_ aktiviert, werden zusätzlich Dateien in Univelop entfernt, die lokal nicht mehr vorhanden sind. Die Synchronisation läuft dabei ausschließlich vom lokalen Ordner nach Univelop — es werden keine Dateien aus Univelop heruntergeladen.

Um das Skript regelmäßig auszuführen, muss selbst ein Zeitplan eingerichtet werden, z. B. über die Windows-Aufgabenplanung; Univelop richtet dies nicht automatisch ein.

## Verwandte Bausteine

- [Bild Upload](/docs/bricks/input/image-picker) — Speziell für Bilder mit Zeichenfunktion und Wasserzeichen
- [Datei](/docs/bricks/basic/file) — Für feste, unveränderliche Dateien
