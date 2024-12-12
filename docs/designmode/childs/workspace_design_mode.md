---
layout: default
title: Arbeitsbereich
parent: Designmodi
nav_order: 1
---

## <span style="color:#0b5394">**Arbeitsbereich**</span>

Im Arbeitsbereich oben rechts sind zwei Buttons zu finden.Über den _Haus-Button_ wird der Arbeitsbereich
gewechselt. In den Designmodus des Arbeitsbereichs wechselt man, indem auf den _Drei-Punkte-Button_
klickt und anschließend den Designmodus auswählt, oder indem man mit der linken Maustaste eine Kachel
ca. 2 Sekunden lang gedrückt hält.

![select design mode](\assets\design-mode-setting\select design mode.png "select design mode")

Es öffnet sich nun der globale Designmodus des Arbeitsbereichs. In der Mitte des Bildschirms sind
zuerst alle
[allgemeinen Kacheln](/docs/software-structure.html#kacheln)
und darunter die eigenen Kacheln zu sehen. Wenn Kacheln "versteckt" wurden, werden diese farblich
leicht ausgegraut und ein Symbol mit durchgestrichenen Auge wird gesetzt. Die Kacheln können einfach
via Drag and Drop verschoben werden, um die gewünschte Reihenfolge zu erhalten.

In der linken Bildschirmhälfte sind drei Möglichkeiten zum Hinzufügen neuer Kacheln zu finden. Auf
der rechten Seite befinden sich die globalen Einstellungen des Arbeitsbereichs:

![home](\assets\design-mode-setting\home.png 'home')

1. <span style="color:#0b5394">**Kachel _Einfache Liste_**</span>  
   Erstellen einer eigenen neuen Kachel mit beliebigen Inhalt.

2. <span style="color:#0b5394">**Kachel _Gefilterte Liste_**</span>  
   Eine Filterkachel bezieht sich auf eine bereits existierende Kachel / Liste. Diese Filterkachel
   stellt im Standard beim Hinzufügen alle Inhalte dar. Markiert man die Kachel und wählt über die
   Kacheleinstellungen _Filter und Sortierung_ aus, kann sich auf bestimmte Inhalte bezogen und reduziert
   dargestellt werden. Zum Beispiel offene Aufträge (Status offen), ToDos dieser Monat (s.
   [Formelsammlung // Darstellung von dynamischen Zeitspannen mit Formelberechnungen](/docs/formulary/childs/formula%20date.html#darstellungen-von-dynamischen-zeitspannen-mit-formelberechnungen)
   ).
3. <span style="color:#0b5394">**Kachel _Formular_**</span>  
   Diese Kachel ermöglicht es, Einträge einmalig auszufüllen und abzusenden, ohne existierende Einträge angezeigt zu bekommen.
   Siehe hierzu [mehr](/docs/software-structure.html#-kachel-formular).

4. <span style="color:#0b5394">**Kachel _Website_**</span>  
   Die Kachel ermöglicht es Websites einzubetten. Wird zum Beispiel in der alltäglichen Arbeit eine Website genutzt (z. B.
   von Börsendaten, Eingabe von externen Formularen, etc.) kann diese direkt über Univelop aufgerufen werden.
   Dazu erhält die Kachel einen entsprechenden Namen und die dazugehörigen URL. Per Mausklick auf die Kachel ruft Univelop
   die URL ab. Die Website kann dann wie in einem Internetbrowser für den entsprechend notwendigen Zweck genutzt werden.

5. <span style="color:#0b5394">**Kachel importieren**</span>  
   Wird diese Funktion genutzt, gehört man bereits zu den fortgeschrittenen Univelop-Nutzern. Kacheln
   können aus anderen Arbeitsbereichen importieren werden, wenn diese vorher lokal exportiert und
   im JSON-Format gespeichert wurden. Dies eignet sich vor allem dafür, wenn Standard-Kacheln in einer
   Universal-Umgebung vorhanden sind, welche auf andere Arbeitsbereiche ausgerollt werden sollen.
   Darüber hinaus können so gleiche Einstellungen übernommen werden.

6. <span style="color:#0b5394">**Admin-Ansicht "Kacheln anderer Benutzer"**</span>  
   Besitzt ein Benutzer die Rolle "Administrator", hat er das Recht, alle erstellten Kacheln der anderen Benutzer einzusehen
   und zu bearbeiten. Mit einem Klick auf eine Benutzerkachel stehen dem Administrator auch hier alle gewohnten Einstellungs-
   möglichkeiten zur Verfügung. Sind zum Beispiel Standard-Kacheln auf eine Gruppe Benutzer verteilt und an diesen Kacheln
   muss eine Änderung vorgenommen werden, kann der Administrator dies über diese Funktion einfach umsetzen.

---

## <span style="color:#0b5394">Kachel</span>

Markiert man im Designmodus des Arbeitsbereichs eine beliebige Kachel, können auf der rechten Seite
die Kacheleinstellungen bearbeitet werden.

![tile](\assets\design-mode-setting\tile.png 'tile')

1. <span style="color:#0b5394">**Designmodus der Einträge**</span>
2. <span style="color:#0b5394">**Designmodus der Liste**</span>
3. <span style="color:#0b5394">**Kachelname ändern**</span>
4. <span style="color:#0b5394">**Kachelinfo ändern**</span>
    - Anzeige Anzahl der Datensätze
    - Anzeige Summe über einen vorhandenen Baustein
    - Anzeige eines Icon
    - Festlegen eines Suffix
5. <span style="color:#0b5394">**Icon**</span>
    - Festlegen des Icons der Kachel (ggf. mit Anzeige in der Kachel)
6. <span style="color:#0b5394">**Filter und Sortierung festlegen**</span>
    - (s.
      [Formelsammlung // Darstellung von dynamischen Zeitspannen mit Formelberechnungen](/docs/formulary/childs/formula%20date.html#darstellungen-von-dynamischen-zeitspannen-mit-formelberechnungen)
      ).
7. <span style="color:#0b5394">**Kachelfarbe ändern**</span>

    ![tile2](\assets\design-mode-setting\tile2.png 'tile2')

8. <span style="color:#0b5394">**Kachel verstecken** (z. B. bei einer Hilfskachel)</span>
    - Für bestimmte
      [Benutzerrollen](/docs/global-settings-and-functions.html#rollen)
      freigeben
    - Kachel für mich verstecken (ermöglicht das verstecken globaler Kacheln)
    - Für bestimmte
      [Benutzerteams](/docs/global-settings-and-functions.html#teams)
      freigeben
9. <span style="color:#0b5394">**erweiterte Einstellungen**</span>

    - **technischer Name ändern**  
       Technische Namen sind immer erforderlich um sich auf etwas zu beziehen, hier auf die Kachel,
      und i. d. R. für den Im- und Export von Datensätzen notwendig. Sie sind im Standard immer
      klein geschrieben und Leerzeichen werden als Unterstrich ausgeschrieben.
    - **Benachrichtigungsfunktion für alle Benutzer aktivieren**

        - Angabe der Anzahl der Änderungen von Datensätzen an der Kachel
        - Angabe der Änderung innerhalb der Einträge

    - **Bei einzelnem Datensatz direkt zum Datensatz springen**  
       Bedeutet, es wird keine Liste angezeigt, sondern nur der einzelne Datensatz. Ideal wenn Dritte
      Zugang zu dem Arbeitsbereich erhalten, die nur die eigenen Datensätze sehen sollen. Funktionell
      können in diesem einen Datensatz / dieser einen Liste die Daten aus anderen Listen zusammengefasst
      werden. Hier eignet sich zum Beispiel eine Portalfunktion, bei welcher ein externe Nutzer einem
      Datensatz zugeordnet wird und nur seine eigenen Daten sieht.

Der Button **_Counter aktualisieren_** sorgt dafür, dass wenn der Inhalt der Kachel als Anzahl Datensätze oder
Summe über Baustein gewählt wurde, diese Zähler sich aktualisieren bzw. die Summe neu berechnet wird. Dies
passiert im Produktivsystem live, muss jedoch initial gesetzt werden.

Über den Button **_Export_** können einzelne Kachel im JSON-Format exportiert werden. Ein Export erfolgt immer
**_ohne Vorlagen und ohne Datensätze_**. Eine exportierte Kachel kann über den Button **_Import_** in einen
anderen Arbeitsbereich eingefügt werden.

**HINWEIS:**  
Hierbei handelt es sich um eine Einbahnstraße. Die exportierte Kachel erhält die ID des
exportierten Arbeitsbereich und kann nicht zurück ex- und importiert werden! Wir empfehlen einen Demo
Arbeitsbereich, in welchem sämtliche Änderungen vorgenommen werden, die anschließend in den Hauptarbeitsbereich
exportiert werden können.

Über den Button **_Löschen_** wird die Kachel gelöscht.
