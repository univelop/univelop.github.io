---
title: Mitgliederverwaltung
nav_order: 7
layout: title
redirect_from:
    - /docs/global-settings-and-functions.html
---

# <span style="color:#0b5394">**Mitgliederverwaltung**</span>

Ein Mitglied ist eine Person, die auf den Arbeitsbereich Zugriff hat.
Mitglied wird jemand, der einen Einladungslink zum Arbeitsbereich erhalten hat.

Die Mitgliederverwaltung ist in den Einstellungen des
Arbeitsbereichs
(Button _Zahnrad_) zu finden.
![member administration](\assets\global-settings-and-functions\member administration.png "member administration")

Im Bereich "Mitglieder" erhält man einen kompletten Überblick über alle vorhandenen Benutzer des aktuellen Arbeitsbereichs.
![member list](\assets\global-settings-and-functions\member list.png "member list")
Zusätzlich erhält man die Information, welche Rolle und welches Team das jeweilige Mitglied derzeit inne hat. Zusätzlich wird für jedes vorhandene Mitglied der letzte Anmeldezeitpunkt bei Univelop angezeigt.
Bei Klick auf ein Mitglied öffnet sich für Admins die Detailansicht. Auf diesem hat man Überblick über die möglichen als auch aktiven Rollen und Teams, die Nutzerdaten sowie den letzten Login-Zeitpunkt und das Gerät. Die aktiven als auch zugeteilten Rollen und Teams lassen sich hierüber ändern.
![members](\assets\global-settings-and-functions\members.png 'members')

Neue Mitglieder/Benutzer können über den Button auf drei Wege dem Arbeitsbereich hinzugefügt werden:

1. <span style="color:#0b5394">**Einladungslink versenden**</span>  
   Es wird der Einladungslink des Arbeitsbereichs in die Zwischenablage kopiert und es kann
   eine E-Mail versendet werden.

2. <span style="color:#0b5394">**Neuer Benutzer manuell anlegen**</span>  
   Der Benutzer kann manuell angelegt werden. Meldet sich der Benutzer anschließend mit E-Mail
   und Passwort an, ist der Arbeitsbereich bereits bei dem Benutzer hinterlegt.

    ![new member](\assets\global-settings-and-functions\new member.png "new member")

3. <span style="color:#0b5394">**Neuer Benutzer durch Import anlegen**</span>  
   Durch den Import einer Excel Liste der Mitglieder können auch neue Nutzer hinzugefügt werden.

Neue Mitglieder werden immer der definierten Standardrolle zugeordnet. Andere Benutzerrollen
oder -teams müssen über die Mitgliederverwaltung entsprechend angepasst werden.

## <span style="color:#0b5394">Rollen</span>

In den Arbeitsbereich-Einstellungen ist ebenfalls der Menüpunkt "Nutzerrollen und Teams" zu
finden. Hier werden die Benutzerrollen- und teams definiert. In den Benutzerrollen werden
global die Rechte definiert, für jede einzelne Kachel
(s. Rechte / Berechtigungen). Im Designmodus des Arbeitsbereichs
können in den globalen Einstellungen die Rollen bearbeitet werden. Im Standard
ist die Rolle "Teammitglied" immer angelegt.

Durch das Klicken auf eine Rollen sehen Sie den Namen, die Einstellung Standardrolle (Ja/Nein),
unterhalb davon die Rechte der Rolle und Sie haben die Möglichkeit die Rolle über die drei Punkte
oben rechts zu löschen oder zu duplizieren (wenn es ähnliche Rollen gibt).

Wird eine neue Rolle in dem Arbeitsbereich angelegt, erhalten Benutzer mit der Rolle "Administrator" bzw.
"Besitzer" automatisch die neuen Rollen zugeteilt, da diese grundsätzlich über alle Funktionalitäten
des Arbeitsbereichs verfügen sollen.

![role admin owner](\assets\global-settings-and-functions\role admin owner other roles.png "role admin owner")

## <span style="color:#0b5394">Teams</span>

Wie bei den Rollen können über den gleichen Weg verschiedene Benutzerteams hinzufügt werden und benannt
werden je nach
Arbeitsbereich,
Verantwortung, Position, etc. Diese Teams können in den Datensätzen zunächst nur namentlich erfasst werden.

Mitglieder werden diesen Teams hinzugefügt. Sie haben jetzt die Möglichkeit Mitglieder des Arbeitsbereichs
einem Team zuzuordnen.

Zudem besteht die Möglichkeit über den
Baustein _Team_
einem Datensatz ein Benutzerteam zuzuweisen.

Wird eine neue Rolle in dem Arbeitsbereich angelegt, erhalten Benutzer mit der Rolle "Administrator" bzw.
"Besitzer" automatisch die neuen Rollen zugeteilt, da diese grundsätzlich über alle Funktionalitäten
des Arbeitsbereichs verfügen sollen.

![role admin owner](\assets\global-settings-and-functions\role admin owner other roles.png "role admin owner")

## <span style="color:#0b5394">Benutzern mehrere Rollen und/oder Teams zuordnen</span>

Benutzern einer Arbeitsumgebung können mehrere Rollen und/oder Teams zugeordnet werden. Das hat den Vorteil
das Benutzer vertretungsweise eine andere Ansicht in Univelop einnehmen kann, ohne dass sämtliche
Rechteeinstellungen innerhalb der Kachel/Bausteinen dafür geändert werden müssen.
Für die Mehrfachzuordnung müssen die entsprechenden Rollen und/oder Teams im Vorweg in der Arbeitsumgebung
angelegt werden. In der Mitgliederverwaltung sind die einzelnen Benutzer des Arbeitsbereichs aufgelistet.
Auf Klick auf einen Benutzer öffnet sich die Detailansicht, wo die Zuordnung der einzelnen Rollen und/oder
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

-   <span style="color:#0b5394">**Eingeschränkt**</span>  
    Inhalt der Kachel
    wird anhand des vorgegebenen Filters angezeigt.
    Es gibt die normalen _Filter_, sowie die _Bedingungen_.
    Die letzteren Beziehen sich auf die Mitgliederkachel.
    Darunter kann eingestellt werden, welche konkreten Werte im Eintrag des Mitgliedes vorliegen.
-   <span style="color:#0b5394">**Von meinem Team**</span>  
    Sind Datensätze über den Baustein _Team_
    das jeweilige Team zugeordnet, wird der Inhalt entsprechend danach gefiltert und angezeigt.
-   <span style="color:#0b5394">**Meine**</span>  
    Sind Datensätze über den Baustein _Benutzer_ dem jeweiligen
    Benutzer zugeordnet, wird der Inhalt entsprechend danach gefiltert und angezeigt.
-   <span style="color:#0b5394">**Keine**</span>  
    Die Kachel ist für die jeweilige Benutzerrolle nicht sichtbar.  
    Beim Zugriff auf "Keine" ist die Kachel
    für die Rolle nicht sichtbar und Datensätze und Datensatzverknüpfungen
    können nicht ausgewählt werden. Wenn partielle Zugriffe auf Einträge eines Datensatzes unsichtbar
    geschaltet werden sollen, kann dies je Baustein erfolgen, indem der Baustein versteckt wird und unter
    _Für Benutzerrollen anzeigen_ die entsprechenden Rollen Zugriff erteilen.

    ![hide tile roles](\assets\global-settings-and-functions\hide tile roles.png "hide tile roles")

    Die gleichen Filter können für das Bearbeiten und Löschen gewählt werden.

Im "erweiterten Zugriff" können folgende Einstellungen vorgenommen werden:

-   <span style="color:#0b5394">**Anlegen erlauben**</span>
-   <span style="color:#0b5394">**Bearbeiten erlauben**</span>
-   <span style="color:#0b5394">**Löschen erlauben**</span>
-   <span style="color:#0b5394">**Einträge entsperren erlauben**</span>
-   <span style="color:#0b5394">**Import erlauben**</span>  
     bezieht sich auf das Recht Excel-Dateien mit Datensätzen zu importieren
    (Sofern es sich nicht um besonders intensiv geschultes Personal handelt, empfehlen wir den Import **nicht** zuzulassen.)
