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

Hier sind sämtliche Mitglieder, Rollen und Teams aufgelistet. Ebenfalls wird hier der Zugriff
auf den
[Arbeitsbereich](/docs/software-structure.html#arbeitsbereiche)
gesteuert. Zusätzlich wird für jedes vorhandene Mitglied der letzte Anmeldezeitpunkt bei Univelop
angezeigt.  
Neue Mitglieder/Benutzer können auf zwei Wege dem Arbeitsbereich hinzugefügt werden:

1. Einladungslink versenden  
    Es wird der Einladungslink des Arbeitsbereichs in die Zwischenablage kopiert und es kann
    eine E-Mail versendet werden.

2. Neuer Benutzer manuell anlegen  
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

## <span style="color:#0b5394">Rechte / Berechtigungen</span>

Nachdem Benutzerrollen und -teams angelegt wurden und diese bereits Mitglieder zugeordnet sind, kann
der Zugriff auf Datensätze beschränkt und bestimmte Funktionen ausgestellt werden.

Das globale Rechtesystem in den Rollen greift immer auf ganze Kacheln zu. Im Standard ist immer der
Zugriff auf "Alle" Datensätze hinterlegt.
Über den Switch "Darf Arbeitsbereich anlegen" kann gesteuert werden, ob die Rolle den Arbeitsbereich
wechseln darf.

Folgende weitere Einstellungen können vorgenommen werden:
- Gefiltert  
    Inhalt der
    [Kachel](/docs/software-structure.html#kacheln)
    wird anhand des vorgebenen Filters angezeigt
- Von meinem Team  
    Sind Datensätze über den
    [Baustein *Team*](/docs/record-spec-settings/grand-childs-form/team.html)
    das jeweilige Team zugeordnet, wird der Inhalt entsprechend danach gefiltert und angezeigt.
- Meine  
    Sind Datensätze über den
    [Baustein *Benutzer*](/docs/record-spec-settings/grand-childs-form/user.html)
    dem jeweiligen Benutzer zugeordnet, wird der Inhalt entsprechend danach gefiltert und angezeigt.
- Keine  
    Die Kachel ist für die jeweilige Benutzerrolle nicht sichtbar.


Beim Zugriff auf "Keine" ist die
[Kachel](/docs/software-structure.html#kacheln)
für die Rolle nicht sichbar und Datensätze und
[Datensatzverknüpfungen](/docs/link-lists.html)
können nicht ausgewählt werden. Wenn partielle Zugriffe auf Einträge eines Datensatzes unsichtbar
geschaltet werden sollen, kann dies je Baustein erfolgen, indem der Baustein versteckt wird und unter
[*Für Benutzerrollen anzeigen*](/docs/design-mode-settings.html#kachel)
die entsprechenden Rollen Zugriff erteilen.

![hide tile roles](\assets\global-settings-and-functions\hide tile roles.png "hide tile roles")

Die gleichen Filter können für das Bearbeiten und Löschen gewählt werden. Das Anlegen von Datensätzen
wird über den Switch "Anlegen erlauben" gesteuert.

Der Switch "Import erlauben" gibt oder nimmt das Recht
[Excel-Dateien mit Datensätzen zu importieren](/docs/import-export.html#datens%C3%A4tze-und-inhalte).
Sofern es sich nicht um besonders intensiv geschultes Personal handelt, empfehlen wir den Import **nicht**
zuzulassen.

## <span style="color:#0b5394">Benachrichtigungen</span>

Es können Benachrichtigungen für Änderungen an Datensätzen angezeigt werden. Die Benachrichtigung ist
eine rot eingekreiste Zahl auf der Kachel, welche die Anzahl der neuen Datensätze oder Änderungen
beinhaltet. Beim Klick in die Kachel ist der jeweilige Datensatz mit einem roten Punkt markiert.

In den Kacheleinstellungen können die Benachrichtigungen je Kachel für alle Nutzer aktivieren werden.
Zudem besteht die Möglichkeit die Benachrichtigungen in der Kachel über das Glockensymbol zu aktivieren
oder deaktivieren. Möchte man über Änderungen in der Liste benachrichtigt werden, kann dies über die
drei Punkte innerhalb der Kachel aktiviert oder deaktiviert werden.

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