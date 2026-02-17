---
layout: workflow-step
title: Lösche Datei
parent: Dateihandling
grand_parent: Workflows
icon: description
nav_order: 2
redirect_from:
    - /docs/workflows/advanced/delete-file.html
---

Mit dem Schritt _Lösche Datei_ wird eine Datei aus einem [Datei-Upload](/docs/bricks/input/file-picker)- oder [Bild-Upload](/docs/bricks/input/image-picker)-Baustein gelöscht.

## Einstellungen

1. **Verknüpfung mit** — Die Liste, in der der Datensatz liegt.
2. **Verknüpfung mit Baustein** — Der Datei-Upload- oder Bild-Upload-Baustein.
3. **Datensatz-ID** — Die ID des Datensatzes. Kann als Formel angegeben werden.
4. **Dateiname** — Der Name der zu löschenden Datei. Groß- und Kleinschreibung wird beachtet (case-sensitiv).

## Beispiel: Mehrere Dateien löschen

Mit einem [Iteriere über Werte](/docs/workflows/structure/iterate-list)-Schritt und dem Ausdruck `fileNames(produkt_eintrag.dateiupload)` kann über alle Dateinamen eines Upload-Bausteins iteriert und jede Datei einzeln gelöscht werden.

## Hinweise

- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.
