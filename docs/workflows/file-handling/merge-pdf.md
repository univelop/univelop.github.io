---
layout: workflow-step
title: PDF zusammenfügen
parent: Dateihandling
grand_parent: Workflows
icon: vertical_align_top
nav_order: 3
---

Mit dem Schritt _PDF zusammenfügen_ werden mehrere PDF-Dateien zu einer einzelnen PDF-Datei zusammengefügt. Das Ergebnis wird in einem [Datei-Upload](/docs/bricks/input/file-picker)-Baustein gespeichert.

## Einstellungen

1. **Verknüpfung mit** — Die Liste, in der der Datensatz liegt.
2. **Verknüpfung mit Baustein** — Der Datei-Upload-Baustein, in dem die zusammengefügte PDF gespeichert wird.
3. **Datensatz-ID** — Die ID des Datensatzes. Kann als Formel angegeben werden.
4. **Dateiname** — Der Name der zusammengefügten PDF-Datei. Kann als Formel angegeben werden.
5. **Dateien** — Eine Liste von PDF-Dateien, die zusammengefügt werden sollen. Jeder Eintrag ist eine Formel, die eine Datei liefert.

## Hinweise

- Maximal 200 Dateien können zusammengefügt werden.
- Alle Dateien müssen im PDF-Format vorliegen.
- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.
