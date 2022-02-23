---
layout: default
title: Tutorials
nav_order: 10
---

# Tutorials

Im Folgenden möchten wir Ihnen einfache, schnelle und individuelle Tutorials zur Anwendung
der Univelop-App näher bringen. Wir gehen dabei auf einfache Listen ein, sowie auf erweiterte
Funktionen und Möglichkeiten.

## Erstellen einer To-Do-Liste

Zum Erstellen einer To-Do-Liste benötigen Sie im Prinzip nur eine Liste, welche Sie erstellen müssen.
Sie erstellen also eine neue Liste und wenn Sie auf das kleine + klicken zum erstellen eines neuen 
Datensatzes, sehen Sie die beiden Standard-Bausteine Textfeld Bezeichnung und Beschreibung.
Die Bezeichnung ist dabei immer im Titel enthalten und im Designmodus der Listenansicht
dort in der 5-teiligen Titeldarstellung des Datensatzes (Listeneintrag).

Sie könnten nun den Baustein namens Bezeichnung in Aufgabe umbenennen. Dies ist nun die Aufgabe in Ihrer
To-Do-Liste. Fügen Sie ein Drop-Down hinzu und vergeben Sie hier beispielsweise die "Kategorien" "Arbeit" und
"Privat", um die ToDo´s entsprechend zu kategorisieren. Dieses Drop-Dop Feld könnten Sie auch Priorität
nennen und Hoch, Mittel, Gering als Optionen vergeben.

Stand jetzt haben Sie also eine Aufgabe / ToDo, eine 3-zeilige Beschreibung der Aufgabe und
zudem noch eine Kategorie oder Priorität. Fügen Sie ein Datum hinzu und nennen es Deadline oder
Zu erledigen bis. Zu einer guten Checkliste gehört natürlich auch das Erfolgserlebnis einen
Punkt abhaken zu können. Fügen Sie also noch einen Switch Baustein hinzu, welchen Sie Erledigt nennen
und in der App als Checkbox darstellen.

Ändern Sie nun den Titel aussagekräftig, indem Sie oben rechts den blauen Stift anwählen.
Sie können hier einen eigenen Titel vergeben und zusätzlich noch drei Bausteine zur Titelvergabe
des Eintrags wählen.

Im nächsten und letzten Schritt öffnen Sie den Designmodus der Listenansicht und fügen die
Bausteine in den 5 Feldern so zusammen wie Sie möchten. Es empfiehlt sich auch für die Bausteine
passende Icons zu vergeben, sodass Sie diese in der Listendarstellung schnell erkennen.

Sie könnten auch einen weiteren Abschnitt mit weiteren Bausteinen Ihrer To-Do-Liste hinzufügen.
Zum Beispiel nennen Sie diesen Abschnitt "Weitere Informationen" und hinterlegen dort noch ein
Textfeld für weitere Informationen. Oder ein Komentar Baustein. Vielleicht möchten Sie hier
auch notwendige Kontaktdaten hinterlegen, zum Beispiel Telefon und Mail von Ansprechpartnern
für dieses To-Do.

Ihre To-Do´s könnten Sie sich über Filterkacheln noch gesondert darstellen. Hierzu im Punkt Filterkacheln
mehr.

## Erstellen einer Mitarbeiterliste

Eine Mitarbeiterliste ist eine einfache Ansammlung von Stammdaten. Zunächst sollten Sie festlegen welche Daten
Sie hinzufügen möchten. Im Normalfall werden sämtliche Adress- und Kontaktdaten hinterlegt.

Zum Erstellen einer Mitarbeiterliste benötigen Sie im Prinzip nur eine Liste, welche Sie erstellen müssen.
Sie erstellen also eine neue Liste und wenn Sie auf das kleine + klicken zum erstellen eines neuen 
Datensatzes, sehen Sie die beiden Standard-Bausteine Textfeld Bezeichnung und Beschreibung.
Die Bezeichnung ist dabei immer im Titel enthalten und im Designmodus der Listenansicht
dort in der 5-teiligen Titeldarstellung des Datensatzes (Listeneintrag).

Sie könnten nun den Baustein namens Bezeichnung Name oder Vorname umbennen. Fügen Sie weitere Textfelder
hinzu, um die Adressdaten Straße und Wohnort zu füllen. Für die Hausnummer und PLZ könnten Sie ein
Nummern Baustein verwenden. Fügen Sie nun noch den Telefon und E-Mail Baustein hinzu, um Firmenkontaktdaten
zu hinterlegen.

Sie können hier auch noch eine Personalnumer vergeben. Entweder über ein Nummernbaustein oder
über den Baustein Laufende Nummer. Weiterhin könnten Sie den Unternehmenseintritt noch dokumentieren
mit einem Datum Baustein.

Im Anschluss fügen Sie den Titel so zusammen, wie er pro Mitarbeiter / -in zusammengesetzt werden soll.
In der Regel wird dies über Vor- und Nachname dargestellt. Nun könnten Sie auch noch im Designmodus der
Listenansicht diese ändern und anpassen wie die Mitarbeiterdaten dargestellt werden sollen.

Weitere Funktionen finden Sie in den nachfolgenden Abschnitten.

## Verknüpfen von Listen

Beim Beispiel der Mitarbeiterliste bleibend könnten Sie noch eine einfache Zeiterfassung erstellen.
Hier fügen Sie einen Datensatz Baustein ein, welchen Sie Mitarbeiter nennen. Je nach Größe des Unternehmens
könnten Sie auch noch ein Team Baustein wählen. Fügen Sie ebenfalls ein Datum Baustein hinzu, sowie einen
Zeitspannen-Baustein oder ein Nummern-Baustein, welchen Sie Arbeitszeit nennen. Sie könnten nun auch noch
eine Beschreibung der Tätigkeit hinzufügen, wenn Sie möchten.

Sie haben nun also eine Mitarbeiterliste mit Ihren Mitarbeitern und eine Zeiterfassungliste,
in welcher die Mitarbeiter Ihre Arbeitszeiten erfassen können. Nun möchten Sie die Zeiten pro Mitarbeiter
in Ihrer Mitarbeiterliste sehen.

Fügen Sie hierzu den Baustein `Datensatz Liste` Ihren Mitarbeitern hinzu. Diesen könnten Sie Arbeitszeiten nennen.
Wählen Sie Verknüpfung mit "Zeiterfassung" und Verknüpfung über "Mitarbeiter". Das bedeutet Sie verknüpfen den Baustein
mit der Zeiterfassungsliste über den aktuellen Datensatz (Mitarbeiter). Also die Zeiten pro Mitarbeiter.
Die Darstellung als Link zur Liste könnten Sie so stehen lassen, da sicher einige Datensätze hier einfließen werden.
Wählen Sie nun Summe statt Anzahl anzeigen aus und wählen Summe über Arbeitszeit (Zeitspannen-Baustein). Das Summen
Suffix könnten Sie Std. nennen. Sie sehen nun alle Arbeitszeiten pro Mitarbeiter in Ihrer Mitarbeiterliste.

Sie könnten jetzt noch die Mitarbeiterzeiten fest oder dynamisch filtern. Ein fester Filter wäre z.B.
Datum >= Anfang des Monats und <= Ende des Monats (Mit festen Datumsangaben). Sie haben bei Datumsbausteinen
die Möglichkeit eine Formel zu hinterlegen, um immer die dynamischen Daten pro Monat zu sehen. Hierzu klicken
Sie auf das Formelsymbol hinter dem Textfeld (Im Filter) und setzen den Filter auf
">=" "startOfMonth()" und "<=" "endOfMonth()".

## Verstecken / Pop-Up von Bausteinen

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