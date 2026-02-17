---
layout: workflow-step
title: Datei in Cloud-Speicher hochladen
parent: Erweitert
grand_parent: Workflows
icon: cloud_upload
nav_order: 5
---

Mit dem Schritt _Datei in Cloud-Speicher hochladen_ wird eine Datei in einen externen Cloud-Speicher (z. B. Microsoft OneDrive oder SharePoint) hochgeladen. Die maximale Dateigröße beträgt 250 MB.

## Einstellungen

1. **Integration** — Eine Cloud-Speicher-Integration aus den Arbeitsbereich-Einstellungen.
2. **Datei** — Eine Variable oder Formel, die eine einzelne Univelop-Datei liefert (z. B. aus einem [Datei-Upload](/docs/bricks/input/file-picker)-, [Bild-Upload](/docs/bricks/input/image-picker)- oder [Speichere Datei](/docs/workflows/file-handling/save-file)-Schritt).
3. **Dateiname überschreiben** — _Optional._ Ein abweichender Dateiname. Kann dynamisch gestaltet werden.
4. **Pfad** — Der Pfad zum Zielordner im Cloud-Speicher. Muss auf einen Ordner zeigen (nicht auf eine Datei). Kann dynamisch gestaltet werden.
5. **Wenn Datei existiert** — Verhalten bei gleichnamiger Datei im Zielordner:
   - **Fehler, wenn Datei existiert** — Workflow bricht ab.
   - **Vorhandene Datei überschreiben** — Bestehende Datei wird ersetzt.
   - **Neue Datei anlegen** — Datei mit angepasstem Namen (z. B. "Datei (1).txt").

{: .hint }
Da ein Datei-Upload-Baustein eine Liste von Dateien enthält, muss eine einzelne Datei ausgewählt werden. Dafür den Schritt [Iteriere über Werte](/docs/workflows/structure/iterate-list) verwenden oder die Formel `get(datei_upload, 0)` für die erste Datei.

{: .hint }
**Pfad in OneDrive/SharePoint finden:** Zum gewünschten Ordner navigieren, oben rechts auf **Details** klicken, in der Seitenleiste nach unten scrollen und den **Pfad** kopieren.

## Hinweise

- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.

## Verwandte Schritte

- [Speichere Datei](/docs/workflows/file-handling/save-file) — Zum Speichern von Dateien in Univelop-Datensätzen
