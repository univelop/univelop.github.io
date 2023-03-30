---
layout: default
title: Release Version 1.11.0
nav_order: 88
parent: Latest Updates
---

# <span style="color:#0b5394">**Release Version 1.11.0**</span>

Folgende Neuerungen und Verbesserungen wurden mit der Version 1.11.0 ausgerollt:

## <span style="color:#0b5394">**Lizenzmanagement**</span>

Für Admins eines Arbeitsbereiches sind die Lizenzen der Mitglieder nun direkt in der App einseh- und einstellbar.
Die Lizenzen sind mit den Rollen verbunden, wodurch das Verwalten der Lizenzen und dessen Berechtigungen einfach bleibt. 

![release licenses](\assets\latest-updates\release licenses.png "release licenses")

## <span style="color:#0b5394">**Neue Formeln**</span>  

Zum Bestimmen der Länge einer Liste, ist nun die Formel [*count()*](/docs/formulary/childs/symbol-operator.html#weitere-funktionen-der-formelbausteine) implementiert.
Für mehr Möglichkeiten mit Daten kommen drei neue [Datumsformeln](/docs/formulary/childs/formula%20date.html#liste-mit-standard-datumsformeln) dazu.
Die Formel *date()* erstellt aus gegebenen Zahlen für Jahr, Monat und Tag ein entsprechendes Datum.
Die Formel *parseDate()* erstellt aus einem Datum in Textform ein Datum.
Mit *datesBetween()* wird eine Liste von Daten, die zwischen einem gegebenen Anfangs- und Enddatum liegen, geliefert.

## <span style="color:#0b5394">**Baustein *Zeichnung***</span>  

Um individuelle Zeichnungen erstellen zu können, gibt es mit diesem Update den [Baustein *Zeichnung*](/docs/record-spec-settings/grand-child-expanded/drawing.html).
Mit diesem kann auf einem größenverstellbaren Hintergrund auf Mobilgeräten gezeichnet werden.
Diese Zeichnung kann bei Ausdrücken genutzt werden oder auch direkt aus der App heruntergeladen werden.

![release drawing brick](\assets\latest-updates\release drawing brick.png "release drawing brick")

## <span style="color:#0b5394">**Verbesserung Designmodus der Workflows**</span>  

Der Designmodus der Workflows wurde grundlegend verbessert. Nun können Workflow-Bausteine nun nicht nur an das Ende,
sondern auch zwischen existierende Baustein eingefügt werden. 
Außerdem haben die Bausteine, welche über Einträge oder Werte Iterieren, nun ein definiertes Ende und strecken sich nicht mehr über den ganzen Workflow.

![release flow designmode](\assets\latest-updates\release flow designmode.png "release flow designmode")

## <span style="color:#0b5394">**Workflow starten bei Kachel *Formular***</span>  

Bei erfolgreichem Absenden eines Eintrages über die [*Formularkachel*](/docs/software-structure.html#-kachel-formular) kann nun automatisch ein Workflow gestartet werden.
Dieser wird in den Einstellungen der Kachel ausgewählt.

## <span style="color:#0b5394">**Workflow-Baustein *Aktion ausführen***</span>  

Mit der neuen Version können Funktionen spezieller Bausteine, wie dem Baustein *Freigabe*, nun in Workflows genutzt werden.
Der [Workflow-Baustein *Aktion ausführen*](/docs/workflows/grand-childs-bricks/run-action.html) ermöglicht es, einen Baustein aus einem Eintrag zu wählen, dessen Aktion dann im Workflow ausgeführt wird.
So können bspw. erfasste Arbeitszeiten des letzten Monats bequem und automatisch freigegeben oder eine Menge von Anträgen, 
dessen Antragsdatum länger zurück liegt, in den Status *Abgelaufen* versetzt werden.

![release action step](\assets\latest-updates\release action step.png "release action step")

## <span style="color:#0b5394">**Workflow-Baustein *Finde ersten Eintrag***</span>  

Da der Workflow-Baustein *Wähle Eintrag* das manuelle Auswählen eines Eintrages aus einer Liste benötigt,
 haben wir für eine noch einfachere Bedienung den [Workflow-Baustein *Finde ersten Eintrag*](/docs/workflows/grand-childs-bricks/get-first-record.html) implementiert.
 Dieser wählt automatisch den, abhängig von den angegebenen Filtern sowie der Sortierung, ersten gefundenen Eintrag, 
 wodurch keine manuelle Eingabe mehr erforderlich ist.

![release find first step](\assets\latest-updates\release find first step.png "release find first step")

## <span style="color:#0b5394">**Löschen von versehentlich erstellten Einträgen**</span>  

Einträge, welche aus Versehen erstellt werden und keine Werte eingetragen bekommen, werden mit der neuen Version beim Verlassen der Liste gelöscht.
Somit wird das Zumüllen von Kacheln mit leeren und ungenutzten Einträgen sowie die Berechnung von verfälschten Summen verhindert.
Einträge, die erstellt und direkt befüllt werden, verhalten sich weiterhin wie gewohnt.

## <span style="color:#0b5394">**Datumsgrenzen beim Baustein *Datum***</span>  

Der [Baustein *Datum*](/docs/record-spec-settings/grand-childs-form/date.html) besitzt nun zwei weitere Einstellungen, ein *frühestmögliches* und *spätestmögliches Datum*.
Dadurch wird die mögliche Auswahl auf Daten beschränkt, die, soweit angegeben, nach dem frühestmöglichen Datum und vor dem spätestmöglichen Datum liegen.
Die zwei Daten werden in Form einer Datumsformel angegeben, damit feste sowie dynamische Daten möglich sind.

![release date span](\assets\latest-updates\release date span.png "release date span")

### <span style="color:#0b5394">**Weitere Verbesserungen**</span>

- Verbesserung Oberfläche und Verhalten vom [Baustein *Genehmigung*](/docs/record-spec-settings/grand-child-expanded/approval.html)
- Performanceverbesserung von Workflows
- Diverse kleine Verbesserungen der Oberfläche
- Vorbelegung vom [Baustein *Datensatz*](/docs/record-spec-settings/grand-child-expanded/record.html) möglich
- Kleine Fehler behoben