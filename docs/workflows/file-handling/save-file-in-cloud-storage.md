---
layout: workflow-step
title: Datei in Cloud-Speicher hochladen
parent: Dateihandling
grand_parent: Workflows
icon: cloud_upload
nav_order: 4
redirect_from:
    - /docs/workflows/advanced/save-file-in-cloud-storage.html
---

Mit dem Schritt _Datei in Cloud-Speicher hochladen_ wird eine Datei in einen externen Cloud-Speicher (z. B. Microsoft OneDrive oder SharePoint) hochgeladen. Die maximale Dateigröße beträgt 250 MB.

## Einstellungen

1. **Integration** — Eine Cloud-Speicher-Integration aus den Arbeitsbereich-Einstellungen.
2. **Datei** — Eine Variable oder Formel, die eine einzelne Univelop-Datei liefert (z. B. aus einem [Datei-Upload](/docs/bricks/input/file-picker)-, [Bild-Upload](/docs/bricks/input/image-picker)- oder [Speichere Datei](/docs/workflows/file-handling/save-file)-Schritt).
3. **Dateiname überschreiben oder ändern** — _Optional._ Ersetzt den ursprünglichen Dateinamen durch einen neuen. Kann dynamisch gestaltet werden.
4. **Pfad** — Der Pfad zum Zielordner im Cloud-Speicher. Muss auf einen Ordner zeigen (nicht auf eine Datei). Kann dynamisch gestaltet werden.
5. **Wenn Datei existiert** — Verhalten bei gleichnamiger Datei im Zielordner. Alle drei Optionen werden unverändert an Microsoft Graph übergeben (Univelop setzt lediglich den entsprechenden `conflictBehavior`-Parameter, die eigentliche Konfliktbehandlung erfolgt serverseitig):
   - **Workflow abbrechen** — Bricht den gesamten Workflow ab (nicht nur den einzelnen Schritt). Sichtbar als Fehlereintrag im Flow-Log sowie ggf. als Fehler-Mail, falls in den Arbeitsbereich-Einstellungen Workflow-Fehlermails konfiguriert sind. Es gibt keinen Error-Handling-Pfad, der das abfängt.
   - **Vorhandene Datei überschreiben** — Bestehende Datei wird ersetzt.
   - **Neue Datei anlegen** — Die hochzuladende Datei wird zusätzlich zur bestehenden unter einem angepassten Namen abgelegt (z. B. "Datei (1).txt"); die vorhandene Datei bleibt unverändert bestehen.

{: .warning }
Bei einem Namenskonflikt wird die Datei zwar unter einem neuen Namen angelegt, der Workflow erfährt diesen neuen Namen jedoch nicht — Flow-Log und nachfolgende Schritte zeigen weiterhin den ursprünglich konfigurierten Dateinamen an, auch wenn die Datei tatsächlich anders abgelegt wurde.

{: .hint }
Da ein Datei-Upload-Baustein eine Liste von Dateien enthält, muss eine einzelne Datei ausgewählt werden. Dafür den Schritt [Iteriere über Werte](/docs/workflows/structure/iterate-list) verwenden oder die Formel `get(datei_upload, 0)` für die erste Datei.

{: .hint }
**Pfad in OneDrive/SharePoint finden:** Zum gewünschten Ordner navigieren, oben rechts auf **Details** klicken, in der Seitenleiste nach unten scrollen und den **Pfad** kopieren. Das Pfadformat hängt von der Integration ab.

### Dynamische Ordnerstrukturen

Ordnerstrukturen können dynamisch erzeugt werden, indem sie direkt in der Formel für **Dateiname überschreiben oder ändern** (inkl. Unterordnern) angegeben werden.

Beispiel: `projects/${project_name}/report.pdf` speichert die Datei im Unterordner `projects/<project_name>/` (relativ zum angegebenen **Pfad**).

## Hinweise

- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.

## Verwandte Schritte

- [Speichere Datei](/docs/workflows/file-handling/save-file) — Zum Speichern von Dateien in Univelop-Datensätzen
