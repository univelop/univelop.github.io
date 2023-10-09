---
layout: default
title: Release Version 1.18.0
nav_order: 81
parent: Latest Updates
---

# <span style="color:#0b5394">**Release Version 1.18.0**</span>

Folgende Neuerungen und Verbesserungen wurden mit der Version 1.18.0 ausgerollt:

## <span style="color:#0b5394">**Baustein *Matrix***</span>

Für das schnelle Erstellen und Ausfüllen von vielen, verzweigten Buchungen, 
bspw. für die Zuteilung von Mitarbeitenden auf Einsatzorte oder Fahrzeuge, gibt es nun den neuen Baustein [Matrix](/docs/record-spec-settings/grand-child-expanded/matrix.html). 
Mit diesem füllt man simple Buchungen aus. Die verbundenen Datensätze werden dabei automatisch gesetzt.

![release matrix brick](\assets\latest-updates\release matrix brick.png "release matrix brick")

## <span style="color:#0b5394">**Erweitertes Rechtesystem und *Mitgliederkachel***</span>  

Die [Mitgliederkachel](/docs/software-structure.html#-kachel-mitglieder) bietet eine neue Möglichkeit, Mitglieder zu verwalten.
Durch die Vielfalt aller Univelop Bausteine, können nun mitgliedsspezifische Funktionen und Berechtigungen umgesetzt werden. So können bspw. mitarbeitende bestimmten Abteilungen zugewiesen werden und somit auch nur Funktionen und Inhalte, welche für diese Abteilung bestimmt sind lesen und bearbeiten.

Dieses Feature stellt eine umfassende Erweiterung an der Art und Weise, wie Univelop eingesetzt werden kann dar. Das klassische Rechte und Rollensystem steht jedoch bis auf weiteres ohne Einschränkungen zur Verfügung, es sind also zunächst keine Anpassungen erforderlich.

Wenn Interesse besteht, einen Arbeitsbereich mit den neuen Möglichkeiten zu erweitern, unterstützen wir gerne bei der Einrichtung.

![release member tile](\assets\latest-updates\release member tile.png "release member tile")

## <span style="color:#0b5394">**Kachel *Ordner***</span>  

Für mehr übersichtlichkeit auf dem Homescreen haben wir die [Kachel *Ordner*](/docs/software-structure.html#-kachel-ordner) implementiert.
Alle Kacheln in Univelop können nun in Ordnern organisiert und aus diesen heraus geöffnet werden. 


![release folder tile](\assets\latest-updates\release folder tile.png "release folder tile")

## <span style="color:#0b5394">**Verbesserte Einladungslinks**</span> 

Oft muss man nach dem Einladen von Nutzern deren Rollen und Lizenzen manuell anpassen. 
Mit der neuen Version kann der erstellte Einladungslink mit einer Rolle, Lizenz und einem Team ausgestattet werden.

![release link rework](\assets\latest-updates\release link rework.png "release link rework")

## <span style="color:#0b5394">**Workflow Baustein *Erstelle Einladungslink***</span>  

Braucht man individuell angepasste Einladungslinks in Workflows, kann man diese durch den neuen Workflow Baustein [Erstelle Einladungslink](/docs/workflows/grand-childs-bricks/create-invitation-link.html) erstellen. 
Diese lassen sich auch hier mit Rolle, Team und Lizenz ausstatten.

![release invite link step](\assets\latest-updates\release invite link step.png "release invite link step")

## <span style="color:#0b5394">**Erlaubte Dateiformate für Baustein *Datei Upload**</span> 

Will man nur einen bestimmten Dateityp beim Datei Upload Baustein erlauben, z.B. nur PDFs, kann man dies in den Einstellungen tun.
Dort wird eine kommaseparierte Liste von Dateiformaten angegeben, die erlaubt werden sollen.

## <span style="color:#0b5394">**Workflows 1.0**</span>  

Die Listenansicht von Workflows wurde mit einer Suchfunktion erweitert und die Arbeitsfläche im Workflow Editor ist nun zoombar. 
Zudem wurden umfangreiche Verbesserungen an der Benutzerfreundlichkeit der Workflows umgesetzt. 
Mit diesem Update sind Workflows nun aus dem Beta-Status in Version 1.0 angelangt und damit für alle Arbeitsbereiche standardmäßig verfügbar.

![release workflow version 1](\assets\latest-updates\release workflow version 1.png "release workflow version 1")

### <span style="color:#0b5394">**Weitere Verbesserungen**</span>

- Mailversand über AWS, Azure, SendGrid möglich
- Abbruch-Bedingung für Workflow-Bausteine mit Iteration
- Direktes Öffnen eines Datensatzes solange nur einer Verfügbar nun auch in Filterkacheln möglich
- Dialog für technische Namen verbessert
- Verbesserter Import und Export von Workflows
- Mailversand-Konfiguration in die Arbeitsbereich-Einstellungen verschoben
- Verbesserung der Kachel Website
- Diverse Fehler behoben
