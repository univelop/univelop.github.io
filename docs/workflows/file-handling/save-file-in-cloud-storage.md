---
layout: workflow-step
title: Datei in Cloud-Speicher hochladen
parent: Erweitert
grand_parent: Workflows
icon: cloud_upload
nav_order: 4
redirect_from:
    - /docs/workflows/advanced/save-file-in-cloud-storage.html
---

Mit dem Schritt _Datei in Cloud-Speicher hochladen_ kann eine Datei in einen Cloud-Speicher-Ordner (z. B. Microsoft OneDrive oder SharePoint) hochgeladen werden. Die maximale Dateigröße beträgt 250 MB.

### <span style="color:#0b5394">**Einstellungen**</span>

1. <span style="color:#0b5394">**Integration**</span>
   Wähle hier eine Cloud-Speicher-Integration aus, die du in den Einstellungen des Arbeitsbereiches unter "Integrationen" erstellen und konfigurieren kannst.
2. <span style="color:#0b5394">**Datei**</span>
   Angabe einer Variable oder Formel, welche eine einzelne Univelop-Datei zurückgibt. Diese kann beispielsweise aus einem _Datei-Upload_-, _Bild-Upload_- oder _Speichere Datei_-Baustein stammen.

Da ein Datei-Upload-Baustein eine Liste von Dateien enthält, muss eine einzelne Datei daraus ausgewählt werden. Dafür kann entweder der Schritt [Iteriere über Werte](/docs/workflows/structure/iterate-list.html) verwendet werden oder die Formel `get()`, z. B. `get(datei_upload, 0)` für die erste Datei.
{: .hint } 3. <span style="color:#0b5394">**Dateiname überschreiben oder ändern**</span>
Optional kann der Dateiname vor dem Upload geändert werden. Wenn diese Option nicht aktiviert ist, wird der ursprüngliche Dateiname verwendet. Formeln können genutzt werden, um den Namen dynamisch zu setzen. 4. <span style="color:#0b5394">**Pfad**</span>
Der Pfad zum Zielordner im Cloud-Speicher. Der Pfad muss auf einen Ordner zeigen (nicht auf eine Datei). Das Pfadformat hängt von der Integration ab – bei Microsoft OneDrive oder SharePoint wird z. B. die Ordner-URL erwartet. Formeln können genutzt werden, um den Pfad dynamisch zu setzen.

**Pfad in OneDrive oder SharePoint finden:** Navigiere in OneDrive oder SharePoint zum gewünschten Ordner. Klicke oben rechts auf **Details** (oder per Rechtsklick auf den Ordner). In der Seitenleiste nach unten scrollen – dort findest du den **Pfad**, den du kopieren kannst.
{: .hint } 5. <span style="color:#0b5394">**Wenn Datei existiert**</span>
Legt fest, was passiert, wenn im Zielordner bereits eine Datei mit demselben Namen existiert:

- **Fehler, wenn Datei existiert** – Der Workflow bricht mit einem Fehler ab.
- **Vorhandene Datei überschreiben** – Die bestehende Datei wird ersetzt.
- **Neue Datei anlegen** – Es wird eine neue Datei mit angepasstem Namen angelegt (z. B. "Datei (1).txt").
