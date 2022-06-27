---
layout: default
title: Erstellen einer To-Do-Liste
parent: Tutorials
nav_order: 1
---

# <span style="color:#0b5394">**Erstellen einer To-Do-Liste**</span>

<span style="color:#0b5394">**Schritt 1: die erste Kachel**</span>  
Einem (leeren) [Arbeitsbereich](/docs/software-structure.html#arbeitsbereiche) wird eine [Kachel](/docs/software-structure.html#kacheln) hinzugefügt. Diese Kachel erhält den Namen "To-Do-Liste".

![tutorial1](\assets\tutorials\1to-do-list.gif "tutorial1")

<span style="color:#0b5394">**Schritt 2: Hinzufügen neuer Bausteine**</span>  
Die neu erstellte Kachel wird markiert und um neue Bausteine hinzuzufügen wechselt man in den Bearbeitungsmodus "Felder und Bausteine bearbeiten". Hier werden die wichtigsten Felder für die Erfassung von To-Do's hinzugefügt. In neu erstellten Kacheln sind standardmäßig zwei [Bausteine *Textfeld*](/docs/record-spec-settings/grand-childs-form/text.html) vorgegeben (Bezeichnung und Beschreibung). Der Baustein "Bezeichnung" wird markiert und umbenannt in "Aufgabe". Dieses Feld wird genutzt um eine kurze Aufgabenbeschreibung einzutragen (z. B. mit dem Hund gehen, Vertrag kündigen, etc.)

![tutorial2](\assets\tutorials\2to-do-list.gif "tutorial2")

<span style="color:#0b5394">**Schritt 3: Den Zweck einer To-Do-Liste einbauen**</span>  
Damit eine To-Do-Liste ihren Zweck erfüllt, müssen Prioritäten gesetzt werden und Aufgaben sollten auch zu einem bestimmten Zeitpunkt erledigt werden. Also benötigt man den [Baustein *Drop-Down*](/docs/record-spec-settings/grand-childs-form/drop-down.html) und zieht diesen per Drag&Drop unter den Baustein "Bezeichnung". Dieser wird umbenannt in "Priorität". In den Bausteineinstellungen fügen werden drei Optionen hinterlegt:  
- **Hoch**
- **Mittel**
- **Niedrig**

Als nächstes wird der [Baustein *Datum*](/docs/record-spec-settings/grand-childs-form/date.html) hinzugefügt und umbenannt in "Zu erledigen bis". Im letzten Schritt wird der [Baustein *Schalter*](/docs/record-spec-settings/grand-childs-form/switch.html) aufgenommen und ebenfalls umbenannt in "Erledigt", um erstellte Aufgaben entsprechend kennzeichnen und später filtern zu können.

![tutorial4](\assets\tutorials\4to-do-list.gif "tutorial4")

<span style="color:#0b5394">**Schritt 4: Listenübersicht logisch für eine To-Do-Liste anordnen**</span>  
Damit die in der Liste angezeigten Datensätze auch logisch Sinn ergeben, wird die [Liste](/docs/design-mode-settings.html#liste) entsprechend angepasst.
Auch hier werden per Drag&Drop die Bezeichnungen der Einträge je nach Anforderung geordnet. Die Hauptüberschrift erhält den Baustein "Aufgabe". In die Überschrift 2 wird der Baustein "Priorität" gesetzt und in die Überschrift 3 der Baustein "Zu erledigen bis". Der Baustein "Erledigt" wird in die Gruppenzusammenfassung rechts eingesetzt, um eine schnelle Übersicht der erledigten Aufgaben zu erhalten.

![tutorial3](\assets\tutorials\3to-do-list.gif "tutorial3")

<span style="color:#0b5394">**Schritt 5: Deadline in Einträgen auswerten**</span>  
Per Drag&Drop wird eine [Filterkachel](/docs/software-structure.html#-gefilterte-kacheln) mit Bezug auf die Kachel "To-Do-Liste" in den Arbeitsbereich gezogen und umbenannt in "überfällige Aufgaben". In den Kacheleinstellungen werden unter "Filter & Sortierung" zwei Filter gesetzt:

- "zu erledigen bis" < today()  
    (s. [Formelsammlung / Datumsformel](/docs/formulary/childs/formula%20date.html#datumsformeln))
- "Erledigt" = Nein

![tutorial5](\assets\tutorials\5to-do-list.gif "tutorial5")

### <span style="color:#3d85c6">**Fertig! Mit der To-Do Liste keine Termine und Aufgaben mehr verpassen.**</span>
Ab sofort geraten mit Univelop keine Termine und Aufgaben in Vergessenheit.
Diese To-Do Liste ließe sich jetzt, je nach Bedarf, noch erweitern:

- Filterkachel: nur Aufgaben mit Priorität "hoch" anzeigen
- Zuordnung von To-Do's über Personen
- Zuordnung zu bestimmten Projekten (Projekt: Hausbau, Telefonie, etc.)
    - Filterkachel: nur Aufgaben anzeigen mit Projekt "Hausbau"
- Monatsprotokoll ausgeben
- Telefon oder E-Mail hinzufügen für Kontaktinformationen zu bestimmten Aufgaben
    - Beispiel: Aufgabe "Telekom anrufen W-Lan"
- und vieles mehr

![tutorial6](\assets\tutorials\6to-do-list.gif "tutorial6")