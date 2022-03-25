---
layout: default
title: Tutorials
nav_order: 10
---

# <span style="color:#0b5394">**Tutorials**</span>

Im Folgenden möchten wir einfache, schnelle und individuelle Tutorials zur Anwendung
von Univelop näher bringen. Wir gehen dabei auf einfache Listen, sowie auf erweiterte
Funktionen und Möglichkeiten ein. Ein Beispielergebnis ist am Ende eines jeden Tutorials
zu finden.

## <span style="color:#0b5394">Erstellen einer To-Do-Liste</span>

Zum Erstellen einer To-Do-Liste wird im Prinzip nur eine Liste benötigt. Dazu wird eine neue Kachel
angelegt, die "To-Do-Liste" heißen könnte. Öffnet man die Kachel und klickt anschließend auf das kleine +
zum Erstellen eines neuen Datensatzes, werden die zwei Standard-
[Bausteine *Textfeld*](https://univelop.github.io/docs/record-spec-settings.html#textfeld "Die Bausteine und deren Einstellungen // Baustein Textfeld")
mit den den Namen "Bezeichnung" und "Beschreibung" angezeigt. Die Bezeichnung ist dabei immer im Titel
enthalten und im Designmodus der Listenansicht dort in der 5-teiligen Titeldarstellung des Datensatzes
(Listeneintrag).

Der
[Baustein *Textfeld*](https://univelop.github.io/docs/record-spec-settings.html#textfeld "Die Bausteine und deren Einstellungen // Baustein Textfeld")
mit dem Namen "Bezeichnung" kann umbenannt werden in "Aufgabe". Dies ist nun die
Aufgabe in der To-Do-Liste. Als nächstes kann der
[Baustein *Drop-Down*](https://univelop.github.io/docs/record-spec-settings.html#drop-down "Die Bausteine und deren Einstellungen // Baustein Drop-Down")
hinzugefügt werden. Als mögliche Optionen können beispielsweise "Arbeit" und "Privat" hinzugefügt werden,
um die ToDo´s entsprechend zu kategorisieren. Der Baustein *Drop-Down* kann auch Priorität genannt werden
mit den Optionen "Hoch", "Mittel", "Gering".

Als nächstes kann zwecks Nachverfolgung der ToDo's der
[Baustein *Datum*](https://univelop.github.io/docs/record-spec-settings.html#datum "Die Bausteine und deren Einstellungen // Baustein Datum")
hinzugefügt werden mit dem Namen "Deadline" oder "Zu erledigen bis". Zu einer guten Checkliste gehört
natürlich auch das Erfolgserlebnis einen Punkt abhaken zu können. Dazu kann der
[Baustein *Schalter*](https://univelop.github.io/docs/record-spec-settings.html#schalter "Die Bausteine und deren Einstellungen // Baustein Schalter")
hinzugefügt werden mit dem Namen "Erledigt". Für eine eindeutigere Darstellung in der App, kann die
Darstellung "Checkbox" ausgewählt werden.

Für einen aussagekräftigen Titel wird über den blauen Stift oben rechts die
["Titel Bearbeitung"](https://univelop.github.io/docs/design-mode-settings.html#eintrag "Die Designmodi und deren Einstellungen // Eintrag")
geöffnet. Es kann ein eigener Titel vergeben und/oder zusätzlich noch bis zu drei Bausteine zur
Titelvergabe des Eintrags ausgewählt werden.

Im nächsten und letzten Schritt wird der
[Designmodus der Listenansicht](https://univelop.github.io/docs/design-mode-settings.html#liste "Die Designmodi und deren Einstellungen // Liste")
geöffnet. Hier werden die Bausteine in den 5 Feldern so zusammengefügt die in den Listeneinträgen angezeigt
werden sollen. Es empfiehlt sich auch für die Bausteine passende Icons zu vergeben, sodass diese in der
Listendarstellung schnell erkannt werden können.

Es können noch weitere Abschnitte mit weiteren Bausteinen der To-Do-Liste hinzufügt werden.
Als Beispiel ein
[Abschnitt](https://univelop.github.io/docs/record-spec-settings.html#abschnitt "Die Bausteine und deren Einstellungen // Abschnitt")
mit dem Namen "Weitere Informationen" mit einem
[Baustein *Textfeld*](https://univelop.github.io/docs/record-spec-settings.html#textfeld "Die Bausteine und deren Einstellungen // Baustein Textfeld")
mit dem Namen
"weitere Informationen". Oder die Bausteine
[*Kommentare*](https://univelop.github.io/docs/record-spec-settings.html#kommentare "Die Bausteine und deren Einstellungen // Baustein Kommentare")
für eine interne Diskussion oder
[*E-Mail*](https://univelop.github.io/docs/record-spec-settings.html#e-mail "Die Bausteine und deren Einstellungen // Baustein E-Mail")
oder
[*Telefon*](https://univelop.github.io/docs/record-spec-settings.html#telefon "Die Bausteine und deren Einstellungen // Baustein Telefon")
als Kontaktdaten.

Über
[Filterkacheln](https://univelop.github.io/docs/software-structure.html#kacheln "Die Programmstruktur // Kacheln")
können die Einträge der To-Do-Liste gesondert dargestellt werden.

**Beispielergebnis:**
![example to-do-list](..\assets\tutorials\example to-do-list.png "example to-do-list")

## <span style="color:#0b5394">Erstellen einer Mitarbeiterliste</span>

Eine Mitarbeiterliste ist eine einfache Ansammlung von Stammdaten.

Zum Erstellen einer Mitarbeiterliste wird im Prinzip nur eine Liste benötigt. Dazu wird eine
[neue Kachel](https://univelop.github.io/docs/design-mode-settings.html#arbeitsbereich "Die Designmodi und deren Einstellungen // Arbeitsbereich")
angelegt, die "Mitarbeiter" heißen könnte. Öffnet man die Kachel und klickt anschließend auf das kleine +
klicken zum Erstellen eines neuen Datensatzes, werden die zwei Standard-
[Bausteine *Textfeld*](https://univelop.github.io/docs/record-spec-settings.html#textfeld "Die Bausteine und deren Einstellungen // Baustein Textfeld")
mit den den Namen "Bezeichnung" und "Beschreibung" angezeigt. Die Bezeichnung ist dabei immer im Titel enthalten
und im
[Designmodus der Listenansicht](https://univelop.github.io/docs/design-mode-settings.html#liste "Die Designmodi und deren Einstellungen // Liste")
dort in der 5-teiligen Titeldarstellung des Datensatzes (Listeneintrag).

Der
[Baustein *Textfeld*](https://univelop.github.io/docs/record-spec-settings.html#textfeld "Die Bausteine und deren Einstellungen // Baustein Textfeld")
mit dem Namen "Bezeichnung" kann z. B. in Name oder Vorname umbenannt werden. Weitere
Bausteine können wie folgt hinzugefügt werden:

| Baustein                                  | Verwendung
|:------:                                   |:------:
| [Baustein *Textfeld*](https://univelop.github.io/docs/record-spec-settings.html#textfeld "Die Bausteine und deren Einstellungen // Baustein Textfeld")                       | Straße & Hausnummer
| [Baustein *Textfeld*](https://univelop.github.io/docs/record-spec-settings.html#textfeld "Die Bausteine und deren Einstellungen // Baustein Textfeld")                       | PLZ & Wohnort
| [Baustein *E-Mail*](https://univelop.github.io/docs/record-spec-settings.html#e-mail "Die Bausteine und deren Einstellungen // Baustein E-Mail")                         | geschäftliche E-Mail-Adresse
| [Baustein *Telefon*](https://univelop.github.io/docs/record-spec-settings.html#telefon "Die Bausteine und deren Einstellungen // Baustein Telefon")                       | geschäftliche Telefonnummer
| Baustein [*Nummer*](https://univelop.github.io/docs/record-spec-settings.html#nummer "Die Bausteine und deren Einstellungen // Baustein Nummer") oder [*laufende Nummer*](https://univelop.github.io/docs/record-spec-settings.html#laufende-nummer "Die Bausteine und deren Einstellungen // Baustein Laufende Nummer")  | Personalnummer
| [Baustein *Datum*](https://univelop.github.io/docs/record-spec-settings.html#datum "Die Bausteine und deren Einstellungen // Baustein Datum")                          | Unternehmenseintritt

Im Anschluss kann der Titel für die Datensätze bearbeitet werden, wie er pro Mitarbeiter / -in zusammengesetzt
werden soll. In der Regel wird dies über Vor- und Nachname dargestellt. Im
[Designmodus der Listenansicht](https://univelop.github.io/docs/design-mode-settings.html#liste "Die Designmodi und deren Einstellungen // Liste")
kann diese geändert und angepasst werden wie die Mitarbeiterdaten entsprechend dargestellt werden sollen.

Weitere Funktionen finden Sie in den nachfolgenden Abschnitten.

**Beispielergebnis:**
![example eomployee list](..\assets\tutorials\example employee list.png "example employee list")

## <span style="color:#0b5394">Verknüpfen von Listen anhand des Tutorials "Mitarbeiterliste"</span>

Das
[Verknüpfen von Listen](https://univelop.github.io/docs/link-lists.html "Verknüpfen von Listen")
bedeutet, dass zwei Kacheln untereinander genutzt werden. Als Beispiel kann eine Kachel mit dem Namen
"Zeiterfassung" angelegt werden. Öffnet man die Kachel und klickt anschließend auf das kleine + zum
Erstellen eines neuen Datensatzes. Wieder werden die zwei Standard-
[Bausteine *Textfeld*](https://univelop.github.io/docs/record-spec-settings.html#textfeld "Die Bausteine und deren Einstellungen // Baustein Textfeld")
mit den den Namen "Bezeichnung" und "Beschreibung" angezeigt. Folgende Bausteine können/sollten hinzugefügt werden:

| Baustein                                  | Verwendung
|:------:                                   |:------:
| [Baustein *Datensatz*](https://univelop.github.io/docs/record-spec-settings.html#datensatz "Die Bausteine und deren Einstellungen // Baustein Datensatz")                      | Auswahl des Mitarbeiters (Verknüpfung zu Kachel "Mitarbeiter" hinterlegen
| [Baustein *Datum*](https://univelop.github.io/docs/record-spec-settings.html#datum "Die Bausteine und deren Einstellungen // Baustein Datum")                          | Auswahl Arbeitstag
| [Baustein *Zeitspanne*](https://univelop.github.io/docs/record-spec-settings.html#zeitspanne "Die Bausteine und deren Einstellungen // Baustein Zeitspanne")                     | Angabe Uhrzeit von / Uhrzeit bis (optional mit Pause)
| [Baustein *Textfeld*](https://univelop.github.io/docs/record-spec-settings.html#textfeld "Die Bausteine und deren Einstellungen // Baustein Textfeld")                       | Angabe von Beschreibung, Bemerkungen, o. ä.

In der Kachel "Zeiterfassung* können nun die Mitarbeiter ihre Arbeitszeiten erfassen. Darüber hinaus kann die erfasste
Arbeitszeit in der Kachel "Mitarbeiter" im jeweiligen Mitarbeiter aufgelistet werden.

In der Kachel "Mitarbeiter" wird der
[Baustein *Datensatz Liste*](https://univelop.github.io/docs/record-spec-settings.html#datensatz-liste "Die Bausteine und deren Einstellungen // Baustein Datensatz Liste")
mit den Namen "Arbeitszeiten" hinzugefügt. In den Einstellung des
[Bausteins *Datensatz Liste*](https://univelop.github.io/docs/record-spec-settings.html#datensatz-liste "Die Bausteine und deren Einstellungen // Baustein Datensatz Liste")
wird der Baustein unter "Verknüpfung mit" mit der Kachel "Zeiterfassung" verbunden. Zusätzlich soll die "Verknüpfung
über" den Baustein "Mitarbeiter" zwecks eindeutiger Zuordnung heranziehen. Das bedeutet es wird der Baustein mit der
Zeiterfassung über den aktuell aufgerufenen Datensatz (Mitarbeiter) verknüpft, also die Zeiten pro Mitarbeiter.
In den Einstellung des
[Bausteins *Datensatz Liste*](https://univelop.github.io/docs/record-spec-settings.html#datensatz-liste "Die Bausteine und deren Einstellungen // Baustein Datensatz Liste")
sollte nun "Summe statt Anzahl anzeigen" ausegwählt und zusätzlich "Summe über Arbeitszeit" ausgewählt werden. Das
Summen Suffix könnte Std. benannt werden. Anhand dieser Einstellungen werden nun alle Arbeitszeiten pro Mitarbeiter
in der Mitarbeiterliste angezeigt.

Zusätzlich können die Arbeitszeiten der Mitarbeiter fest oder dynamisch gefiltert werden.Ein fester Filter wäre z.B.
Datum >= Anfang des Monats und <= Ende des Monats (mit festen Datumsangaben). Zur Verwendung von dynamischen Filtermöglichkeiten
können auch Datumsformeln hinterlegt werden (s.
[Formelsammlung // Darstellung von dynamischen Zeitspannen mit Formelberechnungen](https://univelop.github.io/docs/formulary.html#darstellungen-von-dynamischen-zeitspannen-mit-formelberechnungen "Formelsammlung // Darstellung von dynamischen Zeitspannen mit Formelberechnungen")
).

**Beispielergebnis:**  
![example time tracking](..\assets\tutorials\example time tracking.png "example time tracking")

**Beispielergebnis Kachel *Zeiterfassung:***
![example time tracking](..\assets\tutorials\example time tracking2.png "example time tracking")

**Beispielergebnis Kachel *Mitarbeiter* mit Baustein *Datensatz Liste*:**
![example time tracking](..\assets\tutorials\example time tracking3.png "example time tracking")
## <span style="color:#0b5394">Verstecken / Pop-Up von Bausteinen</span>

Beim Beispiel der Mitarbeiterliste bleibend, könnten Sie neben dem Eintrittsdatum noch ein
Austrittsdatum wählen wollen. Dieser Baustein soll aber nicht sichtbar sein, solange der
Mitarbeiter in Ihrem Unternehmen arbeitet.

Fügen Sie der Mitarbeiterliste einen Status Baustein oder Drop-Down hinzu, mit der Auswahl Aktiv / Inaktiv.
Der Status Baustein hat den Vorteil, dass Sie hier Icons je Status in einer individuellen Farbe vergeben können.
Nehmen wir an Sie haben sich für den Status Baustein entschieden und wählen die Optionen Aktiv und Inaktiv in grün und
rot mit einem passenden Icon. Sie könnten diesen Baustein nun auch in der Listenansicht anzeigen lassen und es würde
nur das grüne oder rote Icon angezeigt werden.

Nun wählen Sie den Baustein Datum und benennen diesen Austrittsdatum. Sie könnten auch den vorhandenen Baustein,
der Eintrittsdatum heißt, duplizieren und umbenennen. Wählen Sie beim Austrittsbaustein nun die Option Baustein verstecken.
Nur mit der Betätigung des Switches ist der Baustein für alle Nutzer für immer versteckt. Sie können den Baustein
nun "Unter Bedingung anzeigen". Wählen Sie hier den Filter Status = Inaktiv aus und das Austrittsdatum wird Ihnen nur
angezeigt, wenn Sie den Status auf inaktiv setzen.

Diese Funktion können Sie mit sämtlichen anderen Bausteinen ebenso durchführen. Im Idealfall handelt es sich hierbei
um eindeutige Bausteine, zum Beispiel Checkboxen / Switches, welche nur die Option Ja und Nein zulassen. Sie können
auch ein Drop-Down Feld, oder, wie in diesem Fall, den Status-Baustein zum Verstecken und Pop-Up wählen.

Sie haben natürlich auch die Möglichkeit bestimmte Daten für bestimmte Nutzer auszublenden. Hierzu wählen Sie ebenfalls
Baustein verstecken. Sie können übrigens auch ganze Abschnitte verstecken, hierzu wählen Sie die Funktion beim
Abschnitt-Baustein und alle dazugehörigen Daten sind davon betroffen. Nun könnten Sie die Funktion Unter Bedingung anzeigen
anwählen und dort den Filter setzen auf Benutzerrolle = Personalabteilung. Hierzu müssten Sie im Vorfeld die Rolle
Personalabteilung hinzufügen und den jeweiligen Mitgliedern Ihres Arbeitsbereichs die Rolle zuweisen.

## Arbeitsbereichorganisation mit gefilterten Kacheln

Filterkacheln eignen sich hervorragend, um daraus ToDo´s abzuleiten oder sich eine Arbeitserleichterung zu schaffen
und den Überblick zu behalten. Zum Erstellen einer Filterkachel gibt es zwei Wege.

### Sie befinden sich in der zu filternden Liste

Filtern Sie die Daten über das Filtersymbol neben der Liste in der Listenansicht und klicken auf
das speichern Symbol. Sie können diese Filterkachel nun für sich oder für alle Nutzer speichern.

### Sie befinden sich im Homescreen

Öffnen Sie den Designmodus und wählen links die Option Gefilterte Liste. Diese ziehen Sie per Drag and Drop
an die gewünschte Position. Hier wählen Sie nun aus welche Liste gefiltert werden soll. Im nächsten
Schritt klicken sie mit der linken Maustaste auf diese Filterkachel und wählen rechts Filter und Sortierung aus.
Dort können Sie nun die entsprechenden Filter setzen.

### Darum sollten Sie Filterkacheln nutzen

Filterkacheln eignen sich hervorragend dazu eine Standard-Dateneingabe zu erleichtern. Nehmen wir als Beispiel
die Zeiterfassung, könnten Sie hier den Mitarbeiterfilter auf sich selbst setzen. Haben Sie eine Standard-Arbeitszeit
und vielleicht noch eine Standard Art der Arbeit, könnten Sie dies ebenfalls in den Filtern vorbelegen.
Speichern Sie diese Filterliste. Wenn Sie nun neue Datensätze erfassen, werden die gesetzten Filter bereits
automatisch eingetragen.

Behalten Sie den Überblick dank Filterkacheln. Beim Beispiel der Zeiterfassung sind Sie zuständig zur Prüfung
der Arbeitszeiten. Die Zeiterfassung hat einen Statusbaustein mit der Standard-Option Offen und der
Option geprüft. Filtern Sie nach den offenen Zeiterfassungen und erstellen sich eine Filterkachel.
Nun sehen Sie über die Filterkachel nur noch die zu prüfenden Arbeitszeiten, welche Sie hierüber auch
freigeben können.