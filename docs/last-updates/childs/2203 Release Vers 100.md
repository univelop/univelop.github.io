---
layout: default
title: Release Version 1.0.0
nav_order: 99
parent: Latest Updates
---

# <span style="color:#0b5394">**Release Version 1.0.0**</span>

Folgende Neuerungen und Verbesserungen wurden mit der Version 1.0.0 ausgerollt:

## <span style="color:#0b5394">**Baustein *Freigabe***</span>  
Der [Baustein *Freigabe*](/docs/record-spec-settings/grand-child-expanded/lock.html) ermöglicht es Datensätze als unveränderbar zu sichern und zusätzlich eine Pflichtfeldprüfung (Bausteineinstellungen --> Validierung) vorzunehmen. Damit können wichtige Bausteine nicht mehr einfach übergangen werden. Zusätzlich wird der Benutzer und das Datum der Freigabe dokumentiert.
Der [Baustein *Freigabe*](/docs/record-spec-settings/grand-child-expanded/lock.html) kann zusätzlich mit dem [Baustein *Status*](/docs/record-spec-settings/grand-child-expanded/status.html) kombiniert werden. In den einzelnen Benutzerrollen können die [Rechte für das Entsperren der Einträge](/docs/global-settings-and-functions.html#rechte--berechtigungen) festgelegt werden.

![release lock](\assets\latest-updates\release lock.png "release lock")

## <span style="color:#0b5394">**Dateiimport via PowerShell**</span>  
Der [Baustein *Datei Upload*](/docs/record-spec-settings/grand-childs-form/upload-file.html) kann ebenfalls auf eine eigene Ordnerstruktur zwecks Dateiupload genutzt werden. Zur Synchronisation wird in den Bausteineinstellungen der relative Pfad zu dem betreffenden Ordner gepflegt. Dieser Pfad lässt sich ebenfalls mit einem „Platzhalter“ versehen, sodass nach dynamischen Ordnerbezeichnungen gesucht werden kann (s. Screenshot ${personalnummer}) Nach der Angabe aller wichtigen Parameter kann das Skript über den entsprechenden Button heruntergeladen und anschließend ausgeführt werden. Die hinterlegten Dateien in der Ordnerstruktur werden dem [Baustein *Datei Upload*](/docs/record-spec-settings/grand-childs-form/upload-file.html) automatisch hinzugefügt. Darüber hinaus kann das Skript z. B. in der Aufgabenplanung eingebettet werden, falls dieses zu bestimmten Zeitpunkten ausgeführt werden soll.

## <span style="color:#0b5394">**neuer Baustein *Rechnung***</span>  
Der Baustein „Rechnung“ ist zusammen mit dem Partnerunternehmen Dexpro Solutions entstanden. Dieser ermöglicht, eine Belegkontrolle und -freigabe durchzuführen, auch mobil. Nach der Analyse mit dem modernen ML-Verfahren durch das Partnerunternehmen Dexpro Solutions werden maßgebliche Positionen aus dem Beleg automatisch gekennzeichnet und können anschließend direkt im digitalen Beleg bearbeitet werden (z. B. Eintragung von Kürzungen, Herausstreichen von Positionen, etc.). Für weitere Informationen stehen wir euch jederzeit zur Verfügung.

## <span style="color:#0b5394">**Arbeitsbereichvorlagen**</span>  
Wird ein neuer Arbeitsbereich in Univelop hinzugefügt, stehen ab sofort verschiedene [Vorlagen](/docs/start-app.html#erstellen-eines-arbeitsbereichs) zur Verwendung bereit. Diese Vorlagen sind entsprechend des Themas vorgefertigte Arbeitsbereiche mit dazugehörigen Beispiel-Bausteinen. Diese Vorlagen können sowohl zum Trainieren als auch als Start zum Aufbau eines neuen Arbeitsbereichs genutzt werden.

![release templates](\assets\latest-updates\release templates.png "release templates")

## <span style="color:#0b5394">**neuer Baustein *Webhook***</span>  
Mit dem [Baustein *Webhook*](/docs/record-spec-settings/grand-child-expanded/webhook.html) lassen sich u. a. externe Automatismen und Workflows anstoßen. Auch hierzu stehen wir bei Fragen gerne zur Verfügung.

### <span style="color:#0b5394">**Weitere Verbesserungen**</span>  
- Berechnung von Kacheln und Listensummen verbessert
- [Baustein *Laufende Nummer*](/docs/record-spec-settings/grand-child-expanded/rolling-number.html) überarbeitet
- Anzeige des letzten Anmeldezeitpunkts in der [Mitgliederverwaltung](/docs/global-settings-and-functions.html#mitglieder)
- Anzeige Anzahl vorhandener Datei/Bild Uploads bei zusammengeklappten [Abschnitten](/docs/record-spec-settings/grand-childs-base/section.html) (Einstellungen im Baustein notwendig)
- Performance Optimierung
- Unterstützung von eigenen Domains im [Portalmodus](/docs/portal-mode.html)
- Designmodus verbessert
- Fehler behoben
