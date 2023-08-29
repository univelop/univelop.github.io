---
layout: default
title: Release Version 1.16.0
nav_order: 83
parent: Latest Updates
---

# <span style="color:#0b5394">**Release Version 1.16.0**</span>

Folgende Neuerungen und Verbesserungen wurden mit der Version 1.16.0 ausgerollt:

## <span style="color:#0b5394">**Kachel *Scanner***</span>

Passend zum zuletzt eingeführten Baustein [*QR-/Barcode*](/docs/record-spec-settings/grand-child-expanded/qr-barcode.html), gibt es nun die neue Kachelart [*Scanner*](/docs/software-structure.html#-kachel-scanner).
Mit ihr können auf Mobilgeräten mit Kamera als auch mit Hand-Scanner Einträge über einen QR- oder Barcode geöffnet werden, um bspw. eine lange Suche nach Artikeln im Lager zu verhindern.
Diese Kachel wird mit einer Liste verbunden, damit gezielt dessen Einträge über den QR-Code gefunden werden.

![release scanner tile](\assets\latest-updates\release scanner tile.png "release scanner tile")

## <span style="color:#0b5394">**Verbesserter Excel-Import**</span>  

Mit der neuen Version funktioniert der Excel-Import von Einträgen deutlich schneller. Bei Import großer Datenmengen läuft der Excel-Import bis zu mehreren Minuten kürzer.

## <span style="color:#0b5394">**Baustein *Workflow* verbessert**</span>  

Bei Nutzung des Bausteins [Workflow](/docs/record-spec-settings/grand-child-expanded/workflow.html) wird nun bei Fehlern eine Meldung unter dem Button, sowie ein Ladespinner für die Dauer der Ausführung angezeigt.

![release workflow button](\assets\latest-updates\release workflow button.png "release workflow button")

## <span style="color:#0b5394">**Verbesserung der IN-Filter**</span>  

Statt bspw. bei Rollen für einen Filter jede einzelne abzutippen, gibt es nun eine Mehrfachauswahl über Checkboxen. Diese ist neu für die Rollen, Teams und den Drop-Down-Baustein.

![release in filter dialog](\assets\latest-updates\release in filter dialog.png "release in filter dialog")

### <span style="color:#0b5394">**Weitere Verbesserungen**</span>

- QR-Codes kleiner in PDF-Ausdrücken
- Standard-Wert für Baustein [Schalter](/docs/record-spec-settings/grand-childs-form/switch.html)
- Baustein [Änderungsprotokoll](/docs/record-spec-settings/grand-child-expanded/change-log.html) verbessert
- Beschleunigung Rollen-Import
- Diverse Fehler behoben