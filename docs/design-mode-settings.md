---
layout: default
title: Die Designmodi und deren Einstellungen
nav_order: 4
---

# <span style="color:#0b5394">**Die Designmodi und deren Einstellungen**</span>

Zur Verwendung des Designmodus wird ein Bildschirm benötigt, der groß genug ist, um eine geteilte
Ansicht zuzulassen. In der Regel eignet sich hierfür bereits ein handelsübliches Tablet, wir empfehlen
jedoch ein Desktopgerät, wie zum Beispiel einen PC oder Laptop mit mindestens 13" Bildschirm.

## <span style="color:#0b5394">Arbeitsbereich</span>

Im Arbeitsbereich oben rechts sind zwei Buttons zu finden.Über den *Haus-Button* wird der Arbeitsbereich
gewechselt. In den Designmodus des Arbeitsbereichs wechselt man, indem auf den *Drei-Punkte-Button*
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

![home](\assets\design-mode-setting\home.png "home")

1. <span style="color:#0b5394">**Kachel *Einfache Liste***</span>  
    Erstellen einer eigenen neuen Kachel mit beliebigen Inhalt.

2. <span style="color:#0b5394">**Kachel *Gefilterte Liste***</span>  
    Eine Filterkachel bezieht sich auf eine bereits existierende Kachel / Liste. Diese Filterkachel
    stellt im Standard beim Hinzufügen alle Inhalte dar. Markiert man die Kachel und wählt über die
    Auswahl *Filter und Sortierung* aus, kann sich auf bestimmte Inhalte bezogen und reduziert
    dargestellt werden. Zum Beispiel offene Aufträge (Status offen), ToDos dieser Monat (s.
    [Formelsammlung // Darstellung von dynamischen Zeitspannen mit Formelberechnungen](/docs/formulary/childs/formula%20date.html#darstellungen-von-dynamischen-zeitspannen-mit-formelberechnungen)
    ).

3. <span style="color:#0b5394">**Kachel *Website***</span>  
    Die Kachel ermöglicht es Websites einzubetten. Wird zum Beispiel in der alltäglichen Arbeit eine Website genutzt (z. B.
    von Börsendaten, Eingabe von externen Formularen, etc.) kann diese direkt über Univelop aufgerufen werden.
    Dazu erhält die Kachel einen entsprechenden Namen und die dazugehörigen URL. Per Mausklick auf die Kachel ruft Univelop
    die URL ab. Die Website kann dann wie in einem Internetbrowser für den entsprechend notwendigen Zweck genutzt werden.

4. <span style="color:#0b5394">**Kachel importieren**</span>  
    Wird diese Funktion genutzt, gehört man bereits zu den fortgeschrittenen Univelop-Nutzern. Kacheln
    können aus anderen Arbeitsbereichen importieren werden, wenn diese vorher lokal exportiert und
    im JSON-Format gespeichert wurden. Dies eignet sich vor allem dafür, wenn Standard-Kacheln in einer 
    Universal-Umgebung vorhanden sind, welche auf andere Arbeitsbereiche ausgerollt werden sollen. 
    Darüber hinaus können so gleiche Einstellungen übernommen werden.

5. <span style="color:#0b5394">**Globale Einstellungen des Arbeitsbereichs**</span>
    - Name des Arbeitsbereiches festlegen
    - Bilder des Arbeitsbereichs anpassen
        - Banner für den Homescreen, welches über den Kacheln erscheint
        - Firmenlogo, erscheint oben links im Homescreen über dem Banner
        - Hintergrund im Anmeldefenster (s. Einrichtung Portalmodus)
    - Farbschema des Arbeitsbereiches anpassen:
        - Auswahl Primär- und Sekundärfarbe
        - Auswahl bis zu sechs weiteren Kachelfarben
        - Festlegung über die Farbskala oder einen RTX-Wert
    - Arbeitsbereich ID (**darf nicht verändert werden!**)
    - Portal Domains (s.
    [Einrichtung Portalmodus](/docs/portal-mode.html))
    - Service Account Key
        - Hinzufügen neuer
        [Mitglieder](/docs/global-settings-and-functions.html#mitglieder) in den Arbeitsbereich

Über den
[Button *Export*](/docs/import-export.html#arbeitsbereiche)
kann ein ganzer Arbeitsbereich als ZIP Datei exportiert werden, um ihn in
einen neuen Arbeitsbereich einzufügen. Der Button *Löschen* führt zu einer **Löschung** des **kompletten** Arbeitsbereichs.

---

## <span style="color:#0b5394">Kachel</span>

Markiert man im Designmodus des Arbeitsbereichs eine beliebige Kachel, können auf der rechten Seite
die Kacheleinstellungen bearbeitet werden.

![tile](\assets\design-mode-setting\tile.png "tile")

1. <span style="color:#0b5394">**Designmodus der Liste**</span>
2. <span style="color:#0b5394">**Designmodus der Einträge**</span>
3. <span style="color:#0b5394">**Kachelname ändern**</span>
4. <span style="color:#0b5394">**Kachelinfo ändern**</span>
    - Anzeige Anzahl der Datensätze
    - Anzeige Summe über einen vorhandenen Baustein
    - Anzeige eines Icon
    - Festlegen eines Suffix
5. <span style="color:#0b5394">**Icon**</span>
    - Festlegen des Icons der Kachel (ggf. mit Anzeige in der Kachel)
6. <span style="color:#0b5394">**Kachelfarbe ändern**</span>
7. <span style="color:#0b5394">**Filter und Sortierung festlegen**</span>
    - (s.
    [Formelsammlung // Darstellung von dynamischen Zeitspannen mit Formelberechnungen](/docs/formulary/childs/formula%20date.html#darstellungen-von-dynamischen-zeitspannen-mit-formelberechnungen)
    ).

    ![tile2](\assets\design-mode-setting\tile2.png "tile2")
     
8. <span style="color:#0b5394">**Kachel verstecken** (z. B. bei einer Hilfskachel)</span>
    - Für bestimmte
    [Benutzerrollen](/docs/global-settings-and-functions.html#rollen)
    freigeben
    - für bestimmte
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

    - **Aktivierung der Schnellerfassung**  
        Der Button ***Plus*** in der Liste fällt weg und wird ersetzt durch einen Balken inkl. der Möglichkeit
        die Anzahl der eingegebenen Datensätze in der Ansicht zu reduzieren (Baustein -> in Schnellerfassung
        verstecken). Ebenfalls möglich ist die Schnellerfassung ausschließlich bei einer Verknüpfung über
        einen bestimmten Baustein zu wählen (Einrichtung der Schnellerfassung:
        [Baustein *Datensatz Liste*](/docs/record-spec-settings/grand-child-expanded/record-list.html)
        ).

Der Button ***Counter aktualisieren*** sorgt dafür, dass wenn der Inhalt der Kachel als Anzahl Datensätze oder
Summe über Baustein gewählt wurde, diese Zähler sich aktualisieren bzw. die Summe neu berechnet wird. Dies
passiert im Produktivsystem live, muss jedoch initial gesetzt werden.

Über den Button ***Export*** können einzelne Kachel im JSON-Format exportiert werden. Ein Export erfolgt immer
***ohne Vorlagen und ohne Datensätze***. Eine exportierte Kachel kann über den Button ***Import*** in einen
anderen Arbeitsbereich eingefügt werden.

**HINWEIS:**  
Hierbei handelt es sich um eine Einbahnstraße. Die exportierte Kachel erhält die ID des
exportierten Arbeitsbereich und kann nicht zurück ex- und importiert werden! Wir empfehlen einen Demo
Arbeitsbereich, in welchem sämtliche Änderungen vorgenommen werden, die anschließend in den Hauptarbeitsbereich
exportiert werden können.

Über den Button ***Löschen*** wird die Kachel gelöscht.

---

## <span style="color:#0b5394">Liste</span>

Nach dem Öffnen einer Kachel wird auf der linken Seite eine
[Liste](/docs/software-structure.html#listen])
der vorhandenen
[Einträge](/docs/software-structure.html#eintr%C3%A4ge)
angezeigt. Nach einem Klick auf einen Eintrag erscheint auf der rechten Seite dann der Listeneintrag.

![list](\assets\design-mode-setting\list.png "list")

1. <span style="color:#0b5394">**Pfeil zurück in den Arbeitsbereich**</span>
2. <span style="color:#0b5394">**Suchfunktion über alle Listeneinträge**</span>
3. <span style="color:#0b5394">**Filter und Sortierung einrichten** (temporär)</span>
    - Vorgenommene Einstellungen werden nur temporär, also für die aktuelle aktive Nutzung, gespeichert.
    Globale Einstellungen zu *Filter und Sortierung* werden direkt in den Kacheleinstellungen vorgenommen.  
    Die temporäre Einstellung von *Filter und Sortierung* kann über den Button *Speicherkarte* als
    [**eigene** Kachel](/docs/design-mode-settings.html#kachel)
    im Arbeitsbereich gespeichert werden.  
4. <span style="color:#0b5394">**Weitere Einstellungen**</span>
    - Designmodus der Liste aufrufen
    - Benachrichtigungen für sich selbst aktivieren
    - Alle als gelesen markieren
    - [Nach Excel exportieren](/docs/import-export.html#datens%C3%A4tze-und-inhalte)
    - [von Excel importieren](/docs/import-export.html#datens%C3%A4tze-und-inhalte)
    - Alle löschen  
    **HINWEIS:**  
    diese Funktion löscht **ALLE** Daten!

Im Designmodus der Liste werden auf der linken Seite die verfügbaren
[Bausteine](/docs/record-spec-settings/record-spec-settings.html)
der Listeneinträge angezeigt. Via *Drag and Drop* können die Bausteine in eins der 5 Felder in der Mitte
gezogen werden. Diese 5 Felder entsprechen am Ende dem Inhalt, der als Kurzfassung der Datensätze in der
Liste dargestellt wird. In diese Felder können Sie mehrere Datensätze legen. In der rechten Bildschirmhälfte
wird angezeigt welche Felder in der Listendarstellung enthalten sind. 
1. Feld aus der Kurzansicht löschen
2. Positionen verschieben über die zwei Striche via Drag and Drop

**HINWEIS:**  
Wenn ein Baustein in der Listenansicht verwendet wird, kann dieser **nicht** gelöscht werden.

![list2](\assets\design-mode-setting\list2.png "list2")

---

## <span style="color:#0b5394">Eintrag</span>

Wurde in einer Kachel in der Liste ein Eintrag ausgewählt, erscheint rechts der Listeneintrag. Oben rechts
befinden sich vier Symbole:  

![four symbols](\assets\design-mode-setting\four symbols.png "four symbols")

1. <span style="color:#0b5394">**Benachrichtigungen für den ausgewählten Eintrag aktivieren**</span>
2. <span style="color:#0b5394">**Designmodus für Einträge öffnen**</span>
3. <span style="color:#0b5394">**Duplizieren des ausgewählten Eintrags**</span>
4. <span style="color:#0b5394">**Löschen des ausgewählten Eintrags**</span>

**Designmodus für Einträge**

![record](\assets\design-mode-setting\record.png "record")

1. <span style="color:#0b5394">**Bausteine via Drag and Drop platzieren**</span>
2. <span style="color:#0b5394">**Bearbeiten des Titels** (am Anfang steht immer der Titel des Datensatzes / des Listeneintrags, frei wählbar)</span>
3. <span style="color:#0b5394">**Anzeige welcher Baustein gerade bearbeitet wird**</span>
4. <span style="color:#0b5394">**Pflichtfeld**</span>
    - Prüfung nach Verlassen des Datensatzes ob der Baustein mit einem Wert gefüllt ist

5. <span style="color:#0b5394">**Erweiterte Einstellungen**</span>

    - **Technischer Name**
    (s. o.)

    - **Nur Lesen**  
    Mit dieser Funktion werden Schreibrechte blockiert, können jedoch unter Bedingungen zugelassen werden.
    Zum Beispiel "
    [Benutzerrolle](/docs/global-settings-and-functions.html#rollen)
    = Admin" oder auch "Status = Offen". Bedeutet, dass der Baustein nur bearbeitet werden darf
    wenn jemand die Admin Rolle inne hat oder der Status noch auf "offen" steht. Hierzu wäre der
    [Baustein *Status*](/docs/record-spec-settings/grand-child-expanded/status.html)
    erforderlich.

    - **Baustein verstecken**  
    Bausteine können versteckt werden, können jedoch unter Bedingungen zugelassen werden.

    - **In Schnellerfassung verstecken**  
    Wie bereits bei den
    [Kacheleinstellungen](/docs/design-mode-settings.html#kachel)
    beschrieben, können Bausteine in der Schnellerfassung versteckt werden, um die Listenansicht für den
    Einzelfall der Erfassung zu reduzieren.

    - **Duplizieren und Löschen**  
    Beim Duplizeren eines Datensatzes ist auf den technischen Namen zu achten. Beim Duplizieren wird der
    ursprüngliche technische Name mit dem Zusatz "2" versehen und sollte nach dem Duplizieren abgeändert werden.

**Bitte beachten:**  
der Designmodus für Listen und Einträge muss immer gespeichert werden, damit die
Änderungen wirksam werden. Wird der Button "Abbrechen" gedrückt, gehen alle Änderungen verloren.