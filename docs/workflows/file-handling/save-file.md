---
layout: workflow-step
title: Speichere Datei
parent: Dateihandling
grand_parent: Workflows
icon: note_add
nav_order: 1
redirect_from:
    - /docs/workflows/advanced/save-file.html
---

Mit dem Schritt _Speichere Datei_ wird eine Datei zu einem [Datei-Upload](/docs/bricks/input/file-picker)- oder [Bild-Upload](/docs/bricks/input/image-picker)-Baustein in einem Datensatz hinzugefügt. Die gespeicherte Datei ist in folgenden Schritten über den technischen Namen zugreifbar.

## Einstellungen

1. **Verknüpfung mit** — Die Liste, in der der Datensatz liegt.
2. **Verknüpfung mit Baustein** — Der Datei-Upload- oder Bild-Upload-Baustein, in dem die Datei gespeichert wird.
3. **Datensatz-ID** — Die ID des Datensatzes. Kann als Formel angegeben werden.
4. **Dateiname** — Der Name der Datei inkl. Dateiendung. Kann dynamisch gestaltet werden.
5. **Dateiformat** — Das Format des Dateiinhalts:
   - **Text** — Textbasierte Datei (z. B. .json, .csv, .txt). Der Inhalt wird als Freitext angegeben.
   - **Binär** — Binärdaten aus einer Variable oder Formel. Für die Umwandlung zwischen Base64 und Binär stehen die Formeln `base64ToBinary` und `binaryToBase64` zur Verfügung.
   - **Univelop-Datei** — Eine bereits in Univelop gespeicherte Datei, z. B. aus einem [PDF erstellen](/docs/bricks/advanced/print-out)- oder Datei-Upload-Baustein.
6. **Dateiinhalt** — Der Inhalt der Datei, abhängig vom gewählten Format.

## Beispiel: Datei aus dem Internet speichern

1. Per [Sende Web-Request](/docs/workflows/advanced/web-request) die Datei laden (Response-Format auf _Binär_ setzen)
2. Den Body des Web-Requests als binäre Variable im _Speichere Datei_-Schritt verwenden

## Hinweise

- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.

## Verwandte Schritte

- [Lösche Datei](/docs/workflows/file-handling/delete-file) — Zum Entfernen einer Datei
- [Datei in Cloud-Speicher hochladen](/docs/workflows/advanced/save-file-in-cloud-storage) — Zum Upload in externe Cloud-Speicher
