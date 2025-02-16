---
layout: workflow-step
title: Speichere Datei
parent: Erweitert
grand_parent: Workflows
icon: note_add
---

Mit dem Baustein _Speichere Datei_ kann eine Datei zu einem Datei oder Bild-Upload-Baustein hinzugefügt werden.

### <span style="color:#0b5394">**Dateiformate**</span>

Die folgenden Dateiformate stehen zur Auswahl:

1. <span style="color:#0b5394">**Text**</span>  
   Eine Textbasierte Datei, zum Beispiel .json, .csv oder natürlich .txt. Der Dateiinhalt kann als Freitext definiert werden. 
1. <span style="color:#0b5394">**Binär**</span>  
   Angabe einer Variable oder Formel, welche einen binären Wert zurückgibt. Für die Umwandlung zwischen base64 und binär existieren die Formeln `base64ToBinary` sowie `binaryToBase64`. Wenn eine Datei aus dem Internet gespeichert werden soll, muss diese zuerst mithilfe eines `Sende Web-Request` Schrittes geladen werden. 

   ![Beispiels Workflow](/assets/workflows/advanced/save-file/web-file-workflow.png){: width="250" }

   ![Webhook Einstellungen](/assets/workflows/advanced/save-file/web-settings.png){: width="400" }

   In den Einstellungen des Web-Request Schrittes muss das Response-Format hierfür auf Binär gestellt werden.

   ![Speichere Datei Vorlage](/assets/workflows/advanced/save-file/file-template.png){: width="400" }

    Der Body der Web-Request kann anschließend als binäre Variable verwendet und als Dateiinhalt angegeben werden.
1. <span style="color:#0b5394">**Univelop-Datei**</span>  
   Angabe einer Variable oder Formel, welche eine einzelne bereits in Univelop gespeicherte Datei beinhaltet. Diese kann Beispielsweise aus einem `PDF erstellen` oder `Datei-Upload` Baustein kommen.

