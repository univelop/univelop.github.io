---
layout: default
title: Release Version 1.17.0
nav_order: 82
parent: Latest Updates
---

# <span style="color:#0b5394">**Release Version 1.17.0**</span>

Folgende Neuerungen und Verbesserungen wurden mit der Version 1.17.0 ausgerollt:

## <span style="color:#0b5394">**Health Check**</span>

Bei umfangreichen Arbeitsbereichen mit großen, komplexen Prozessen kann der Überblick schnell verloren gehen. Um den Zustand des Arbeitsbereiches schnell zu prüfen, gibt es nun den [Health Check](/docs/design-mode-settings.html#globale-einstellungen-des-arbeitsbereichs). Dieser zeigt nach der Prüfung mögliche Fehler (z.B fehlerhafte Formeln) im gesamten Arbeitsbereich auf.

![release health check](\assets\latest-updates\release health check.png "release health check")

## <span style="color:#0b5394">**Bausteine sperren**</span>  

Um fertig eingestellte Bausteine vor weiteren, ggf. versehentlichen Änderungen, zu schützen gibt es das neue Feature ["Baustein sperren"](/docs/design-mode-settings.html#eintrag). 
Ein gesperrter Baustein kann im Designmodus nicht verändert werden und nur von Admins entsperrt werden.

![release locked bricks](\assets\latest-updates\release locked bricks.png "release locked bricks")

## <span style="color:#0b5394">**Automatische Verbindung von Workflow-Bausteinen**</span>  

Die Verbindung zu Listen und Einträgen wird nun automatisch erzeugt. 
Das manuelle Auswählen der ID entfällt damit.

## <span style="color:#0b5394">**Neur Workflow-Baustein *Importiere Excel-Tabelle***</span>  

Um bei wiederkehrenden Datenimporten nach Univelop in Form vom Excel-Tabellen zukünftig
eine Menge Zeit zu sparen kann der neue [Workflow-Baustein *Importiere Excel-Tabelle*](/docs/workflows/grand-childs-bricks/import-excel.html) genutzt werden.
Dieser liest eine Excel-Tabelle ein, und bietet die Daten im Workflow zur Verarbeitung an.
So kann ein langsamer, manueller Import durch abtippen auf wenige Minuten beschleunigt werden.

![release import excel step](\assets\latest-updates\release import excel step.png "release import excel step")


## <span style="color:#0b5394">**Neue Formeln**</span>  

Es gibt drei neue Formeln für verschiedenste Einsatzmöglichkeiten:
randomString(length) für eine zufällige Zeichenkette mit der Länge "length".
toUpperCase(text) und toLowerCase(text) zum konvertieren eines Textes auf 
Groß- oder Kleinbuchstaben. 

## <span style="color:#0b5394">**Verbesserung der technischen Namen**</span>  

Die Einstellung der technischen Namen werden nun über einen neuen Dialog verändert. 
Dies soll das versehentliche Ändern von technischen Namen verhindern. Weiterhin werden jetzt technische Namen automatisch Vergeben, damit diese nicht vergessen werden.

![release technical names](\assets\latest-updates\release technical names.png "release technical names")

## <span style="color:#0b5394">**Transfer Baustein *Adresse***</span>  

Bei der Nutzung von Tabs kann es dazu kommen, dass dieselben Daten in mehreren Tabs benötigt werden. 
Dafür können beim [Baustein Adresse](/docs/record-spec-settings/grand-childs-form/address.html) nun die Adressen übertragen, also von einem Adressbaustein in einen anderen Adressbaustein über Tabs hinweg kopiert werden.

![release address transfer](\assets\latest-updates\release address transfer.png "release address transfer")

## <span style="color:#0b5394">**Neue Formeln für Entwickler**</span>  

Es gibt zwei neue Formeln für entwicklungsspezifische Einsätze:
toJson(jsonString) um Json-Objekte aus einem Text zu parsen.
basicAuth(username, password) um einen Nutzernamen und ein Passwort zu verschlüsseln.


### <span style="color:#0b5394">**Weitere Verbesserungen**</span>

- Löschen von neu angelegten Einträgen verbessert
- Eingestellter [Standard-Status](/docs/record-spec-settings/grand-child-expanded/status.html) kann nicht übersprungen werden
- Workflow-Liste und -Logs laden nun nicht alle Einträge auf einmal
- Löschen von Rollen nun mit extra Prüfung auf Benutzung
- Diverse Fehler behoben