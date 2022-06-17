---
layout: default
title: Zusätzliche globale Einstellungen und Funktionen
nav_order: 6
---

# <span style="color:#0b5394">**Zusätzliche globale Einstellungen und Funktionen**</span>

## <span style="color:#0b5394">Mitglieder</span>

Ein Mitglied ist eine Person, die auf den Arbeitsbereich Zugriff hat.
Mitglied wird jemand, der einen Einladungslink zum Arbeitsbereich erhalten hat.

Die Mitgliederverwaltung ist in den Einstellungen des
[Arbeitsbereichs](/docs/software-structure.html#arbeitsbereiche)
(Button *Zahnrad*) zu finden.
![member administration](\assets\global-settings-and-functions\member administration.png "member administration")

Im Bereich "Mitglieder" erhält man einen kompletten Überblick über alle vorhandenen Benutzer des aktuellen Arbeitsbereichs. Zusätzlich erhält man die Information, welche Rolle und welches Team das jeweilige Mitglied derzeit inne hat. Über die hinteren drei Punkte kann der Nutzer einer Rolle und/oder Team zugeordnet werden. Ebenfalls ist das Entfernen eines Benutzer hierüber möglich. Zusätzlich wird für jedes vorhandene Mitglied der letzte Anmeldezeitpunkt bei Univelop
angezeigt. 
![members](\assets\global-settings-and-functions\members.png "members")

Neue Mitglieder/Benutzer können über den Button auf zwei Wege dem Arbeitsbereich hinzugefügt werden:

1. <span style="color:#0b5394">**Einladungslink versenden**</span>  
    Es wird der Einladungslink des Arbeitsbereichs in die Zwischenablage kopiert und es kann
    eine E-Mail versendet werden.

2. <span style="color:#0b5394">**Neuer Benutzer manuell anlegen**</span>  
    Der Benutzer kann manuell angelegt werden. Meldet sich der Benutzer anschließend mit E-Mail
    und Passwort an, ist der Arbeitsbereich bereits bei dem Benutzer hinterlegt.

![new member](\assets\global-settings-and-functions\new member.png "new member")

Neue Mitglieder werden immer der definierten Standardrolle zugeordnet. Andere Benutzerrollen
oder -teams müssen über die Mitgliederverwaltung entsprechend angepasst werden.

## <span style="color:#0b5394">Rollen</span>

In den Arbeitsbereich-Einstellungen ist ebenfalls der Menüpunkt "Nutzerrollen und Teams" zu
finden. Hier werden die Benutzerrollen- und teams definiert. In den Benutzerrollen werden
global die Rechte definiert, für jede einzelne
[Kachel](/docs/software-structure.html#kacheln)
(s. Rechte / Berechtigungen). Im Designmodus des
[Arbeitsbereichs](/docs/software-structure.html#arbeitsbereiche)
können  in den globalen Einstellungen die Rollen bearbeitet werden. Im Standard
ist die Rolle "Teammitglied" immer angelegt.

Durch das Klicken auf eine Rollen sehen Sie den Namen, die Einstellung Standardrolle (Ja/Nein),
unterhalb davon die Rechte der Rolle und Sie haben die Möglichkeit die Rolle über die drei Punkte
oben rechts zu löschen oder zu duplizieren (wenn es ähnliche Rollen gibt).

Wird eine neue Rolle in dem Arbeitsbereich angelegt, erhalten Benutzer mit der Rolle "Adminstrator" bzw.
"Besitzer" automatisch die neuen Rollen zugeteilt, da diese grundsätzlich über alle Funktionalitäten
des Arbeitsbereichs verfügen sollen.

![role admin owner](\assets\global-settings-and-functions\role admin owner other roles.png "role admin owner")

## <span style="color:#0b5394">Teams</span>

Wie bei den Rollen können über den gleichen Weg verschiedene Benutzerteams hinzufügt werden und benannt
werden je nach
[Arbeitsbereichs](/docs/software-structure.html#arbeitsbereiche),
Verantwortung, Position, etc. Diese Teams können in den Datensätzen zunächst nur namentlich erfasst werden.

Mitglieder werden diesen Teams hinzugefügt. Sie haben jetzt die Möglichkeit Mitglieder des Arbeitsbereichs
einem Team zuzuordnen.

Zudem besteht die Möglichkeit über den
[Baustein *Team*](/docs/record-spec-settings/grand-childs-form/team.html)
einem Datensatz ein Benutzerteam zuzuweisen.

Wird eine neue Rolle in dem Arbeitsbereich angelegt, erhalten Benutzer mit der Rolle "Adminstrator" bzw.
"Besitzer" automatisch die neuen Rollen zugeteilt, da diese grundsätzlich über alle Funktionalitäten
des Arbeitsbereichs verfügen sollen.

![role admin owner](\assets\global-settings-and-functions\role admin owner other roles.png "role admin owner")

## <span style="color:#0b5394">Benutzern mehrere Rollen und/oder Teams zuordnen</span>
Benutzern einer Arbeitsumgebung können mehrere Rollen und/oder Teams zugeordnet werden. Das hat den Vorteil
das Benutzer vertretungsweise eine andere Ansicht in Univelop einnehmen kann, ohne dass sämtliche
Rechteeinstellungen innerhalb der Kachel/Bausteinen dafür geändert werden müssen.
Für die Mehrfachzuordnung müssen die entsprechenden Rollen und/oder Teams im Vorwege in der Arbeitsumgebung
angelegt werden. In der Mitgliederverwaltung sind die einzelnen Benutzer des Arbeitsbereichs aufgelistet.
Hinter jedem Benutzer befindet sich der Einstellungsmodus, wo die Zuordnung der einzelnen Rollen und/oder
Teams vorgenommen werden kann (Administratoren und Besitzer dürfen Rollen/Teams zuordnen). Anschließend
erhalten die jeweiligen Benutzer in dem Arbeitsbereich die Berechtigung entsprechend der Zuteilung die
Rolle und/oder das Team zu wechseln.

![link user roles teams](\assets\global-settings-and-functions\link user to roles_teams.png "link user roles teams")

## <span style="color:#0b5394">Rolle und/oder Team wechseln</span>

Sind einem Benutzer mehrere Rollen und/oder Teams zugeordnet, hat dieser die Möglichkeit, sein Standardteam zu wechseln.
Sind mehrere Rollen/Teams vorhanden, hat der Benutzer die Möglichkeit über die drei Punkte die Wechselfunktion aufzurufen.
Nach Auswahl der Wechselmethode erscheint ein Pop-Up Fenster mit dem ihm zugeteilten Rollen/Teams. Diese Funktion ermöglicht
es Benutzern zu erlauben die Ansicht in Univelop vertretungsweise zu wechseln und mit den dafür benötigten Kacheln und
Datensätzen zu arbeiten, ohne das man die Rechteeinstellungen der Kacheln für Vertretungen, etc. extra ändern muss.

![change role team](\assets\global-settings-and-functions\change role_team.png "change role team")  
![change role team](\assets\global-settings-and-functions\change role_team1.png "change role team")

## <span style="color:#0b5394">Rechte / Berechtigungen</span>

Nachdem Benutzerrollen und -teams angelegt wurden und diese bereits Mitglieder zugeordnet sind, kann
der Zugriff auf Datensätze beschränkt und bestimmte Funktionen ausgestellt werden. Dazu wird das Rechtesystem
über die einzelnen Benutzerrollen aufgerufen. Über den Switch "Darf Arbeitsbereich anlegen" kann gesteuert
werden, ob die Rolle den Arbeitsbereich wechseln darf.

Das globale Rechtesystem in den Rollen greift immer auf ganze Kacheln zu, die im Modus "Rolle bearbeiten"
aufgelistet werden. Mit einem Mausklick auf eine aufgelistete Kachel wird die Rechteeinstellung der Kachel
aufgerufen. Im Standard ist immer "Zugriff erlauben" auf "Alle" Datensätze hinterlegt.

Folgende weitere Einstellungen können vorgenommen werden:
- <span style="color:#0b5394">**Gefiltert**</span>  
    Inhalt der
    [Kachel](/docs/software-structure.html#kacheln)
    wird anhand des vorgebenen Filters angezeigt
- <span style="color:#0b5394">**Von meinem Team**</span>  
    Sind Datensätze über den
    [Baustein *Team*](/docs/record-spec-settings/grand-childs-form/team.html)
    das jeweilige Team zugeordnet, wird der Inhalt entsprechend danach gefiltert und angezeigt.
- <span style="color:#0b5394">**Meine**</span>  
    Sind Datensätze über den
    [Baustein *Benutzer*](/docs/record-spec-settings/grand-childs-form/user.html)
    dem jeweiligen Benutzer zugeordnet, wird der Inhalt entsprechend danach gefiltert und angezeigt.
- <span style="color:#0b5394">**Keine**</span>  
    Die Kachel ist für die jeweilige Benutzerrolle nicht sichtbar.  
    Beim Zugriff auf "Keine" ist die [Kachel](/docs/software-structure.html#kacheln)
    für die Rolle nicht sichbar und Datensätze und
    [Datensatzverknüpfungen](/docs/link-lists.html)
    können nicht ausgewählt werden. Wenn partielle Zugriffe auf Einträge eines Datensatzes unsichtbar
    geschaltet werden sollen, kann dies je Baustein erfolgen, indem der Baustein versteckt wird und unter
    [*Für Benutzerrollen anzeigen*](/docs/design-mode-settings.html#kachel)
    die entsprechenden Rollen Zugriff erteilen.

    ![hide tile roles](\assets\global-settings-and-functions\hide tile roles.png "hide tile roles")

    Die gleichen Filter können für das Bearbeiten und Löschen gewählt werden.

Im "erweiterten Zugriff" können folgende Einstellungen vorgenommen werden:
- <span style="color:#0b5394">**Anlegen erlauben**</span>
- <span style="color:#0b5394">**Bearbeiten erlauben**</span>
- <span style="color:#0b5394">**Löschen erlauben**</span>
- <span style="color:#0b5394">**Einträge entsperren erlauben**</span>
- <span style="color:#0b5394">**Import erlauben**</span>  
    bezieht sich auf das Recht [Excel-Dateien mit Datensätzen zu importieren](/docs/import-export.html#datens%C3%A4tze-und-inhalte)
    (Sofern es sich nicht um besonders intensiv geschultes Personal handelt, empfehlen wir den Import **nicht** zuzulassen.)


## <span style="color:#0b5394">(Push-)Benachrichtigungen</span>

Es können Benachrichtigungen für Änderungen an Datensätzen angezeigt werden. Die Benachrichtigung ist
eine rot eingekreiste Zahl auf der Kachel, welche die Anzahl der neuen Datensätze oder Änderungen
beinhaltet. Beim Klick in die Kachel ist der jeweilige Datensatz mit einem roten Punkt markiert.

In den Kacheleinstellungen können die Benachrichtigungen je Kachel für alle Nutzer aktivieren werden.
Zudem besteht die Möglichkeit die Benachrichtigungen in der Kachel über das Glockensymbol zu aktivieren
oder deaktivieren. Möchte man über Änderungen in der Liste benachrichtigt werden, kann dies über die
drei Punkte innerhalb der Kachel aktiviert oder deaktiviert werden. Darüber hinaus bietet Univelop ebenfalls
die Funktion, Mitgliedern eines Arbeitsbereiches, die die Univelop-App aktiv nutzen, diese per Push-
Benachrichtigung über Änderungen in bestimmten Kacheln zu informieren.

## <span style="color:#0b5394">Filter und Sortierung</span>

Die Sortierung der Kachelinhalte kann global je Kachel auf- und absteigend nach einem bestimmten
Baustein geändert werden. Gleiches gilt für verknüpfte Datensätze. Bei der Ausgabe von verknüpften
Datensätzen über die repeat Funktion werden die Daten in der sortierten Reihenfolge ausgegeben.

Für die Filterung von Daten können die Operatoren <, >, <=, >=, = oder IN (*Oder*) in die
entsprechenden Filter gesetzt werden. Es erlaubt also einen Mehrfachzugriff. Die Werte erhalten Sie
mit Wahl des angesprochenen Baustein, IN und in Spalte drei setzen Sie die anzusprechenden Werte,
welche Sie mit Komma Leerzeichen trennen.  
**Beispiel:**
![or filter teams](\assets\global-settings-and-functions\or filter teams.png "or filter teams")

## <span style="color:#0b5394">Suchen</span>

Mit dem Lupen Symbol kann innerhalb der Datensatzliste oder verknüpften Datensatz Liste
nach Inhalten gesucht werden. Die Suche umfasst dabei alle Werte innerhalb eines
Datensatzes.

Die Sortierung erfolgt so, dass zuerst die genauen Suchergebnisse ausgegeben werden und im Anschluss
ähnliche Werte.