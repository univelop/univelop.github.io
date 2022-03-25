---
layout: default
title: Die Bausteine und deren Einstellungen
nav_order: 5
---

# <span style="color:#0b5394">**Die Bausteine und deren Einstellungen**</span>

Wie bereits im Kapitel "Die Designmodi und deren Einstellungen" beschrieben, besitzen die Bausteine individuelle und 
globale Einstellmöglichkeiten, welche überall gleich sind. Im Folgenden gehen wir näher auf die spezifischen
Einstellungen und Funktionen der einzelnen Bausteine ein.

Die einzelnen Bausteine teilen sich in folgende Gruppen auf:

|*Basis*
|:------:       |:------:               |:------:
|[Abschnitt](https://univelop.github.io/docs/record-spec-settings.html#abschnitt "Baustein Abschnitt")      |[Hinweis](https://univelop.github.io/docs/record-spec-settings.html#hinweis "Baustein Hinweis")                |[Web Link](http://localhost:4000/docs/record-spec-settings.html#web-link "Baustein Web Link")

|*Formular*
|:------:       |:------:               |:------:
|[Textfeld](https://univelop.github.io/docs/record-spec-settings.html#textfeld "Baustein Textfeld")       |[Nummer](https://univelop.github.io/docs/record-spec-settings.html#nummer "Baustein Nummer")                 |[Schalter](https://univelop.github.io/docs/record-spec-settings.html#schalter "Baustein Schalter")
|[Drop-Down](https://univelop.github.io/docs/record-spec-settings.html#drop-down "Baustein Drop-Down")      |[Datum](https://univelop.github.io/docs/record-spec-settings.html#datum "Baustein Datum")                  |[Zeitspanne](https://univelop.github.io/docs/record-spec-settings.html#zeitspanne "Baustein Zeitspanne")
|[Benutzer](https://univelop.github.io/docs/record-spec-settings.html#benutzer "Baustein Benutzer")       |[Team](https://univelop.github.io/docs/record-spec-settings.html#team "Baustein Team")                   |[Bild Upload](https://univelop.github.io/docs/record-spec-settings.html#bild-upload "Baustein Bild Upload")
|[Datei Upload](https://univelop.github.io/docs/record-spec-settings.html#datei-upload "Baustein Datei Upload")   |[E-Mail](https://univelop.github.io/docs/record-spec-settings.html#e-mail "Baustein E-Mail")                 |[Telefon](https://univelop.github.io/docs/record-spec-settings.html#telefon "Baustein Telefon")

|*Erweitert*
|:------:       |:------:               |:------:
|[Datei](https://univelop.github.io/docs/record-spec-settings.html#datei "Baustein Datei")          |[Datensatz](https://univelop.github.io/docs/record-spec-settings.html#datensatz "Baustein Datensatz")              |[Datensatz Liste](https://univelop.github.io/docs/record-spec-settings.html#datensatz-liste "Baustein Datensatz Liste")
|[Freigabe](https://univelop.github.io/docs/record-spec-settings.html#freigabe "Baustein Freigabe")       |[Status](https://univelop.github.io/docs/record-spec-settings.html#status "Baustein Status")                 |[Status Button](https://univelop.github.io/docs/record-spec-settings.html#status-button "Baustein Status Button")
|[Laufende Nummer](https://univelop.github.io/docs/record-spec-settings.html#laufende-nummer "Baustein Laufende Nummer")  |[Formel](https://univelop.github.io/docs/record-spec-settings.html#formel "Baustein Formel")                 |[Unterschrift](https://univelop.github.io/docs/record-spec-settings.html#unterschrift "Baustein Unterschrift")
|[Kommentar](https://univelop.github.io/docs/record-spec-settings.html#kommentar "Baustein Kommentar")      |[PDF erstellen](https://univelop.github.io/docs/record-spec-settings.html#pdf-erstellen "Baustein PDF Erstellen")          |[Rechnung](https://univelop.github.io/docs/record-spec-settings.html#rechnung "Baustein Rechnung")

---

## <span style="color:#0b5394">Basis Bausteine</span>

Mit den Basis Bausteinen können die Listeneinträge sortiert werden, sowie Hinweise erfasst und verlinkt werden.

![basic](..\assets\record-spec-settings\basic.png "basic")

### <span style="color:#3d85c6">Abschnitt</span>

Mit dem Baustein *Abschnitt* können die Listeneinträge thematisch getrennt werden.

![section](..\assets\record-spec-settings\1section.png "section")

Abschnitte können mit dem switch zusammenklappbar und als standardmäßig zusammenklappbar eingestellt werden.
Ebenso besteht die Möglichkeit Bausteine für die Kopfzeile des Abschnitts hinzuzufügen. Diese
werden dann direkt unter dem Abschnitt-Titel angezeigt.

*Besonderheiten*

Wenn für den Baustein *Abschnitt* in den Einstellungen des Bausteins unter **ERWEITERT** zusätzliche Einstellungen
vorgenommen werden, gelten diese für alle Bausteine innerhalb dieses Abschnitts. Dies betrifft Nur Lesen, Baustein
verstecken (sowie die dazugehörigen Ausnahmen) und das Verstecken in der Schnellerfassung.

### <span style="color:#3d85c6">Hinweis</span>

Mit dem Baustein *Hinweis* werden Hinweistexte erfasst. Der Hinweistext wird über die Bezeichnung geschrieben. Hier
ist es möglich auch längere Hinweistexte zu erfassen und diese abschnittsweise mit der Enter-Taste zu trennen.

![hint](..\assets\record-spec-settings\1hint.png "hint")

**Bitte beachten:**  
Eventuell sollte der technische Namen u. U. gekürzt werden, da andernfalls der gesamte Hinweistext als
technischer Name erscheinen kann. Hinweistexte sind immer nur lesbar, der Nur Lesen switch ist hier ohne weitere Funktion.

Das Verstecken und bedingte Anzeigen von Hinweistexten ist möglich und dort sinnvoll, wo es nur bedingte Hinweistexte gibt.

### <span style="color:#3d85c6">Web Link</span>

Durch den Baustein *Web Link* können in den Listeneinträgen zentrale URLs bzw. Links hinterlegt werden. 

![link](..\assets\record-spec-settings\1link.png "link")

Diese können entweder als Button oder als Link angezeigt werden. Dies ist dann sinnvoll, wenn Sie immer auf den gleichen 
Pfad verweisen, zum Beispiel die eigenen allgemeinen Geschäftsbedingungen. 
Der Link benötigt immer ein www. und die .Endung (.de, .com, .org, etc.). Das Präfix "http(s)://" wird immer
automatisch durch das System vorbelegt.

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.

---

## <span style="color:#0b5394">Formular Bausteine</span>

Mit den Formular Bausteinen können einfache Formulare erstellt und mit Inhalten gefüllt werden, die als
Informationen bereit gestellt werden sollen. Mit den Formular Bausteinen können zudem einfache Zuordnungen
von Datensätzen hergestellt, sortiert und gefiltert werden, sowie Leserechte und Anzeigen unter
Bedingungen festlegen.

![form](..\assets\record-spec-settings\form.png "form")

### <span style="color:#3d85c6">Textfeld</span>

Mit dem Baustein *Textfeld* können beliebige alphanummerische Inhalte erfasst werden. 

![text](..\assets\record-spec-settings\1text.png "text")

1. Anzahl der Zeilen für ein mehrzeiliges Textfeld
    Standardmäßig ist hier keine Zeilenzahl für ein mehrzeiliges Textfeld angegeben.
    Wird der Wert 1 eingegeben, können über die Enter-Taste mehrere Zeilen verwendet werden. Wird ein größerer
    Wert bereits eingetragen, wird die Anzahl der vorgegeben Zeilen bereits in dem Baustein berücksichtigt

2. Standard Text
    Vorgabe eines Standardtext (dieser kann in der Eingabe eines Listeneintrags überschrieben werden)

3. Tooltip
    Tooltips werden genutzt um den Nutzer bei der Eingabe Hinweistexte anzeigen zu lassen um z. B. auf bestimmte
    Eingabebedingungen hinzuweisen oder Hilfestellungen anzubieten. Tooltips erscheinen in einem kleinen Pop-Up Fenster.

### <span style="color:#3d85c6">Nummer</span>

Der Baustein *Nummer* kann ausschließlich mit Zahlenwerten gefüllt werden.

![number](..\assets\record-spec-settings\1number.png "number")

Der Vorteil des Bausteins *Nummer* ist, dass Falscheingaben vorgebeugt werden kann wie z.B. PLZ, Beträge,
Auftragsnummern oder Zeiten. Die Bausteine *Nummer* dienen auch zur Grundlage für Berechnungen im Baustein *Formel*.
**Bitte beachten:**  
Falscheingaben werden nach Verlassen des Dialogfensters gelöscht.

### <span style="color:#3d85c6">Schalter</span>

Mit dem Baustein *Schalter* werden einfache "Ja / Nein"-, "Erfüllt / Nicht erfüllt"-Abfragen in der App dargestellt.

![switch](..\assets\record-spec-settings\1switch.png "switch")

Der Schalter kann als solcher oder als Checkbox in der App dargestellt werden. Darüberhinaus kann im Ausdruck gewählt
werden, ob der Schalter als Ja / Nein, Checkbox, Beschreibung oder leer dargestellt werden soll.

Mit dem Baustein *Schalter* kann ebenfalls gesteuert werden, ob versteckte Bausteine unter der Bedingung des Schalters
angezeigt werden sollen (z. B. wird der Schalter auf "Ja" gestellt, zeige den Baustein "Auftragsnummer" an).

### <span style="color:#3d85c6">Drop-Down</span>

Durch den Baustein *Drop-Down* können individuelle Antwortmöglichkeiten vergeben und hierdurch eventuelle Abhängigkeiten
vergeben werden. Die Anzahl der Antwortmöglichkeiten ist unbeschränkt.

![drop-down](..\assets\record-spec-settings\1drop-down.png "drop-down")

1. Optionen (Vorgabe Auswahlmöglichkeiten)
    Unter Optionen werden die Auswahlmöglichkeiten vorgegeben. Über das Mülleimer-Symbol können die Auswahlmöglichkeiten
    wieder gelöscht werden. Mit dem = Symbol können die Einträge in ihrer Reihenfolge geändert werden.
    
    **Bitte beachten:**  
    Das Löschen oder Umbenennen der Auswahlmöglichkeiten ist nur möglich, wenn **keine** Datensätze mit der entsprechenden
    Option vorhanden ist.

2. Standard Option
    Hier kann eine Standard-Antwortmöglichkeit bei der Datenerfassung vorgegeben werden. Diese lässt sich während der Eingabe
    ändern.

Die Auswahl einer Auswahlmöglichkeit erfolgt immer über ein Pop-Up Fenster.

### <span style="color:#3d85c6">Datum</span>

Mit dem Baustein *Datum* kann ein Einzeldatum für den Datensatz eingetragen werden. Bei Bedarf auch inklusive Uhrzeit.

![date](..\assets\record-spec-settings\1date.png "date")

Das heutige Datum ist immer voreingestellt. 
Die Uhrzeit können Sie im Bearbeitungsmodus entweder händisch eintragen, oder über das Symbol anklicken.

Der Baustein eignet sich für sämtliche datumsabhängige Datensätze, z.B. Termine oder Erstellungsdatum.

### <span style="color:#3d85c6">Zeitspanne</span>

Durch den Baustein *Zeitspanne* besteht die Möglichkeit eine Zeitspanne, auch inklusive Pausen, einzugeben.
Anders als Datum + Uhrzeit rechnet dieser Baustein (Von - Bis) auch die Stunden und Minuten der erfassten Zeitspanne aus.

![interval](..\assets\record-spec-settings\1interval.png "interval")

In Kombination mit dem Baustein *Formel* kann ein Dezimalwert von z. B. Arbeitsstunden errechnet werden.

### <span style="color:#3d85c6">Benutzer</span>

Der Baustein *Benutzer* bietet die Möglichkeit den Datensatz einem bestimmten Benutzer zuzuordnen. Dadurch können
Verantwortlichkeiten verteilt werden. Wichtig hierbei ist, dass der Benutzer dem Arbeitsbereich zugeordnet sein muss.

![user](..\assets\record-spec-settings\2user.png "user")

Folgende Einstellungen sind möglich:

1. aktuellen Besitzer standardmäßig setzen
    (Ersteller des Datensatzes wird automatisch auch Besitzer)
2. Besitzer ändern
3. Besitzerteam ebenfalls ändern
    Wird der Besitzer geändert und dieser ist ebenfalls in der Mitgliederverwaltung ein anderes Team zugeordnet
    wird dieses automatisch mit geändert/berücksichtigt

Mit diesen Einstellungen kann nach Besitzer oder Team gefiltert werden, sowie
Datensätze je Besitzer und Besitzerteam ein- oder auszublenden.

### <span style="color:#3d85c6">Team</span>

Der Baustein *Team* kann als Light-Variante des Bausteins *Benutzer* verstanden werden.

Der Baustein hat die Möglichkeit das Besitzerteam zu ändern, dadurch wird der Datensatz einem Team zugeordnet
und dient hauptsächlich der Filterung von Datensätzen in bestimmten Kacheln.

### <span style="color:#3d85c6">Bild Upload</span>

Mit dem Baustein *Bild Upload* können beliebig viele Bilder hochgeladen werden.  
Folgende Einstellungen sind möglich:

![upload picture](..\assets\record-spec-settings\1upload picture.png "upload picture")

1. Mehrere Bilder hochladen erlauben
    Bezieht sich ausschließlich auf den Upload, nicht auf das Aufnehmen von mehrere Bildern über ein mobiles
    Endgerät
2. Zoom verbieten
3. Qualität
    Einstellung der hochgeladenen Qualität
4. Größe
    Wie groß sollen die Bilder in dem Ausdruck angezeigt werden
5. Anordnung der Bilder
    Auswahlmöglichkeiten: nebeneinander oder untereinander  
    **Bitte beachten:**  
    In der App werden Bilder immer standardmäßig nebeneinander dargestellt.

### <span style="color:#3d85c6">Datei Upload</span>

Der Baustein *Datei Upload* ermöglicht das Hochladen verschiedener Dateien aller Art (ebenso Mehrfachupload).
Hinsichtlich der Übersichtlichkeit empiehlt sich das erstellen mehrere Bausteine *Datei Upload* und diese zu
kategorisieren.

### <span style="color:#3d85c6">E-Mail</span>

Durch den Baustein *E-Mail* können Mailadressen im System hinterlegt werden. Befindet man sich in einem Datensatz
mit einer hinterlegten E-Mail-Adresse kann über das Brief-Symbol das Standard-Mailprogramm geöffnet werden.

![mail](..\assets\record-spec-settings\1mail.png "mail")

### <span style="color:#3d85c6">Telefon</span>

Mit dem Baustein *Telefon* kann eine beliebige Telefonnummer hinterlegt werden. Analog zu dem Baustein *E-Mail*
öffnet sich auch hier durch das Klicken auf das Hörer-Symbol Ihr Telefondienst und die Telefonnummer wird direkt
angerufen.

![telephone](..\assets\record-spec-settings\1telephone.png "telephone")
---

## <span style="color:#0b5394">Erweiterte Bausteine</span>

Die erweiterten Bausteine gehen über die "einfachen" Formular Bausteine hinaus. Hiermit können Listen und
Bausteine verknüpft, sowie Dateien und Stati hinterlegt werden.

![expanded](..\assets\record-spec-settings\expanded.png "expanded")

### <span style="color:#3d85c6">Datei</span>

Den Baustein *Datei* kann überall dort verwendet werden, wo feste Dateien für eine Liste zum Einsatz kommen sollen.
Er findet zum Beispiel dort Anwendung, wo allgemeingültige Dokumente, wie zum Beispiel Checklisten, Arbeitsschutz-
Informationen o. ä. nicht veränderbar abgelegt werden sollen.

Alle Dateiformate und ein Mehrfachupload ist möglich. Das hinterlegen der Dateien erfolgt im Designmodus in den
Einstellungen des Bausteins selbst.

![file](..\assets\record-spec-settings\1file.png "file")

### <span style="color:#3d85c6">Datensatz</span>

Mit dem Baustein *Datensatz* wird eine einfache Verknüpfung zu einem einzelnen Datensatz einer anderen Liste aus dem
Arbeitsbereich hergestellt.

Über die Funktion *Filter und Sortierung* lassen sich je nach Einstellung nur bestimmte Datensätze anzeigen. 

Verknüpfungsmöglichkeiten sind in den Docs unter [Verknüpfen von Listen](https://univelop.github.io/docs/link-lists.html "Verknüpfen von Listen") zu finden.

### <span style="color:#3d85c6">Datensatz Liste</span>

Der Baustein *Datensatz Liste* sorgt für eine Mehrfachverknüpfung mit einer anderen Liste.
Die Verknüpfung und bedingte Anzeige kennt bei diesem Baustein zwei Wege.
In jedem Fall müssen Sie zunächst, wie bei dem Datensatz Baustein, 
eine einfache Verknüpfung mit einer anderen Liste wählen.

Da Ihnen durch die einfache Verknüpfung alle Datensätze der verknüpften Liste angezeigt werden, müssen Sie
die Anzeige nun bedingt filtern. Verknüpfungs- und Filtermöglichkeiten sind in den Docs unter [Verknüpfen von Listen](https://univelop.github.io/docs/link-lists.html "Verknüpfen von Listen") zu finden.

### <span style="color:#3d85c6">Freigabe</span>

Der *Freigabe* Baustein erlaubt es Ihnen Datensätze unveränderbar zu sichern. Der Baustein wird als
Button angezeigt und kann zusätzlich funktionell im Status mit verwendet werden. Zudem ist es Ihnen möglich
mit diesem Baustein eine Pflichtfeldprüfung durchzuführen.

Zum grundsätzlichen Aufbau:

![lock](..\assets\record-spec-settings\1lock.png "lock")

1. Der Freigabe Button, dieser wird bei nicht freigegbenen Datensätzen farblich gekennzeichnet angezeigt.
2. Bei gesperrten Datensätzen erfolgt eine Beschreibung wann und durch wen der Datensatz gesperrt wurde.
3. Wurde der Datensatz gesperrt und der Button wurde eingebaut (anders als beim Sperren über Status), 
kann er über "Entsperren" wieder frei gegeben werden.
4. Eine Verknüpfung mit dem Status Baustein ist möglich, denn dieser kann auch Datensätze sperren.
5. Sämtliche Pflichtfelder (Prüfung bei Freigabe) müssen einzeln angehakt werden.

Zudem erkennen Sie gesperrte Datensätze an dem kleinen Schloss am oberen rechten Bildschirmrand.
Gesperrte Datensätze können nicht gelöscht werden.

![lock2](..\assets\record-spec-settings\2lock.png "lock2") ![lock3](..\assets\record-spec-settings\3lock.png "lock3")

Also zusammengefasst heißt dies nun:

1. Sie können mit dem *Freigabe* Baustein eine Pflichtfeldprüfung einbauen. Hierzu betätigen Sie in den zu prüfenden
Bausteinen den Switch *Pflichtfeld* unter der Validierung Überschrift. Ist nur ein Freigabe Baustein eingebaut und
kein Status, werden diese Bausteine grundsätzlich auf Inhalte geprüft, wenn die Freigabe betätigt wird.
2. Das Bearbeiten und Löschen von gesperrten Datensätzen ist nicht möglich. Die Datensätze, sowie verknüpfte Datensätze
müssen entsperrt werden (Mutter- & Tochterdatensätze über Datensatz-Liste-Baustein)
3. Wer Datensätze sperren und entsperren darf wird in den Rollen und Rechten festgelegt.

![lock4](..\assets\record-spec-settings\4lock.png "lock4")

### <span style="color:#3d85c6">Status</span>

Mit dem Baustein *Status* können Sie sowohl einfache Zustandsstati vergeben, als auch einen kompletten Prozess im
Unternehmen dargestellen.

![status1](..\assets\record-spec-settings\1status.png "status1")

1. Über das Plus erfassen Sie einen neuen Status.

2. Die Status Einstellungen können Sie bearbeiten, indem Sie auf den jeweiligen Status klicken.

3. Über den Mülleimer können Sie einzelne Stati löschen und über das =-Zeichen können Sie die Positionen verändern. Das Löschen von Stati kann nur erfolgen wenn der Status in keinem Datensatz vorhanden ist.

4. Sie haben zudem die Möglichkeit einen Standard-Status zu wählen. Dieser wird auch beim Duplizieren von Datensätzen als Standard gesetzt und nimmt die Sperre aus dem kopierten Datensatz.

![status2](..\assets\record-spec-settings\2status.png "status2")

In den Status Einstellungen haben Sie nun folgende Möglichkeiten:

Pro Status kann ein individuelles Icon und eine Farbe gesetzt werden. 

5. Ein zusätzliches Feature ist die Vergabe von Pflichtfeldern pro Status. Damit die Pflichtfelder angezeigt werden, müssen
die betroffenen Bausteine vorab als Pflichtfeld markiert werden. Danach können Sie pro Status als Pflichtfeld ausgewählt werden.

6. Die *Freigabe* Funktion kann nun auch hier im Status gewählt werden. Beim Setzen des Status wird der Datensatz
gesperrt und kann weder bearbeitet, noch gelöscht werden.

Eine Statusänderung erfolgt entweder per Klick auf den Status oder über verschiedene Status-Buttons.

### <span style="color:#3d85c6">Status Button</span>

Den Baustein *Status Button* kann nur mit dem Baustein *Status* verknüpft werden. Über "Verknüpfung mit" wird der gewünschte
Baustein *Status*, den Sie ansteuern möchten, ausgewählt. Mit der Wahl Status wird der Status ausgewählt, der angewählt werden soll.

### <span style="color:#3d85c6">Laufende Nummer</span>

Den Baustein *Laufende Nummer* wird überall dort wo Datensätzen mit einer fortlaufende Nummer versehen werden sollen
(z. B. Kunden, Bauvorhaben, Lieferscheine, etc.).

![rolling number](..\assets\record-spec-settings\1rolling number.png "rolling number")

1. Präfix  
    i.d.R. werden hierfür einzelne Buchstaben, Buchstabenkombinationen oder "Jahreszahl-" verwendet.
    Leerzeichen zur Trennung von Buchstabe und Zahl werden vom System ignoriert.

2. Anzahl der Ziffer  
    Länge der laufenden Nummer
3. letzte Nummer  
    kann bei einer versehentlichen Lücke korrigiert werden
4. Mit manuellen Nummern  
    Erfassung der laufenden Nummer über den Button "Nächste Nummer" oder per manueller Eingabe ermöglichen

### <span style="color:#3d85c6">Formel</span>

Mit dem Baustein *Formel* wird gerechnet, dynamisch auf verknüpfte Datensätze zugegriffen oder unter Bedingungen
bestimmte Werte ausgeben. Die Formel wird **nur** im Designmodus eingegeben und der Baustein ist in der Datensatzerfassung
**nur lesbar**.

Dies geschieht wie folgt:
1. Auf andere Bausteine wird über den technischen Namen zugegriffen.
    Wie bereits beschrieben müssen technische Namen innerhalb einer Liste
    einzigartig sein. Durch diese Einzigartigkeit weiß der Formel Baustein
    auf welchen Datensatz er zugreifen soll.

2. Den Inhalt eines anderen Bausteins widergeben
    Durch das Schreiben des technischen Namens eines anderen Baustein kann
    bereits der Inhalt wiedergegeben werden. Ein = vor der Formel ist nicht erforderlich.

3. Kombinieren von Datensätzen
    Verschiedene Datensätze werden kombiniert über +, -, *, /
    Also: technischername1+technischername2
    Ebenfalls möglich: Zahlen- und Textwerte miteinander verknüpfen.
    Beim Beispiel PLZ und Ort könnte das Ergebnis 21085Hamburg lauten.
    Somit erstellt man z. B. Sortiercodes.

4. Dynamischer Zugriff auf verknüpfte Daten
    Durch ein Punkt hinter dem technischen Namen weiß der Formel Baustein, dass in dem
    verknüpften Datensatz ein weiterer technischer Name vorhanden ist.
    Also: technischernamebausteindieseliste.technischernamebausteinverknüpfteliste

Weitere Formeln und Möglichkeiten sind in den Docs unter [Formelsammlung](https://univelop.github.io/docs/formulary.html  "Formelsammlung") zu finden.

### <span style="color:#3d85c6">Unterschrift</span>

Mit dem Baustein *Unterschrift* kann je Datensatz / je Baustein eine Unterschrift erfasst werden.
Zu jeder Unterschrift kann auch eine Klausel erfasst werden (z. B. Hinweis auf AGBs, etc.).

Im Bearbeitungsmodus ist ein Klick auf das weiße Feld "Hier unterschreiben" notwendig.

![signature](..\assets\record-spec-settings\1signature.png "signature")

Es öffnet sich ein neues Fenster, in dem die festgelegte Klausel noch einmal erscheint. Unterschrieben
werden kann auf einem mobilen Endgerät auf dem Display oder per Mauszeiger. Des Weiteren kann
der Namen der Person zu notieren. Wird die Unterschrift gespeichert, wird neben dem Klarnamen auch
das Unterschriftsdatum ausgegeben.

![signature](..\assets\record-spec-settings\1signature2.png "signature")

**Beispielergebnis:**  
![signature](..\assets\record-spec-settings\1signature3.png "signature")

Das Löschen der Unterschrift erfolgt auf gleichem Weg wie das Unterschreiben.
Ein Klick auf das Unterschriftsfeld und anschließend über den Button "Löschen" die Erfassung
löschen.

### <span style="color:#3d85c6">Kommentare</span>

Der Baustein *Kommentare* ist aufgebaut wie ein Chat/Forum. Zu bestimmten Datensätze bietet sich dieser
Baustein an, da er, im Gegensatz zu dem mehrzeiligen Textfeld, den Vorteil hat, dass der Kommentarerfasser,
sowie das Datum und die Uhrzeit automatisch mit angelegt werden. Ggf. bietet sich diese Kommentarfunktion für den
Austausch von Problemen vor Ort, o. ä. 

![comments](..\assets\record-spec-settings\1comments.png "comments")

### <span style="color:#3d85c6">PDF erstellen</span>

Mit dem Baustein *PDF erstellen* kann, ausgehend von einer Word Vorlage, eine PDF Datei erstellt
und, wenn gewünscht, per E-Mail versendet. Die Word-Datei kann individuell gestaltet werden und sich
auf die Liste beziehen in welcher die PDF-Datei erstellt wird. Alle darstellbaren Inhalte sind andruckbar,
neben Buchstaben und Zahlen auch Bilddateien und die Unterschrift. Zusätzlich können verknüpfte Datensatz-Listen
ausgegeben werden.

**Vorbereitung in der Wordvorlage:**  
![create pdf](..\assets\record-spec-settings\1create pdf.png "create pdf")  
1. Ausgabe von Einzelwerten  
    Die Ausgabe von Einzelwerten erfolgt indem in der Wordvorlage der technische Name eines Bausteins innerhalb der
    zwei geschwungenen Klammern gesetzt wird. Beispiel: Rechnungsnummer ${belegnummer}.

2. Ausgabe von Schaltern  
    Die Ausgabe des Bausteins *Schalter* kann im Designmodus in den Einstellungen des Bausteins unter festgelegt
    "Darstellung als Ausdruck" als "Checkbox", "Ja / Nein" oder "Nennen des Inhalts" festgelegt werden.

3. Ausgabe von Datensatz-Liste  
    Um die Daten einer Datensatz-Liste auszugeben, muss in der Word-Vorlage eine entsprechende Tabelle gezeichnet werden.
    
    So könnte die Tabelle zur Ausgabe einer ganzen Liste, mittels Serienbrieffunktionalität aussehen:

    |**Arbeitszeit**                         |**Mitarbeiter**|
    |${repeat(mitarbeiterzeiten)}            |           |
    |${mitarbeiterzeiten.Arbeitszeit}        |${mitarbeiterzeiten.name}|
    |${endrepeat}                            |                         |

    Die gezeichnete Tabelle in der Wordvorlage kann um beliebig viele Spalten erweitert werden, solange
    diese in der Datensatz-Liste vorkommen.  
    **Bitte beachten:**  
    innerhalb einer gezeichneten Tabelle kann mit der "Repeat"-Funktion nicht auf mehrere Datensatz Listen zugegriffen werden.
    Mit der "Repeat"-Funktion kann sich immer nur auf **eine** Datensatz Liste zur Zeit bezogen werden.

![create pdf settings](..\assets\record-spec-settings\1create pdf settings.png "create pdf settings")

1. Dateivorlage hinzufügen  
    Über den Plus-Button öffnet sich ein Auswahldialog,

2. abweichender bzw. dynamischer Dateinahme  
    Der Dateiname kann ebenfalls abweichend und dynamisch gewählt werden. Soll der Dateiname zum Teil dynamisch sein
    kann ebenfalls ein Platzhalter mit Bezug zu einem Baustein eingesetzt werden. Soll die PDF-Datei zum Beispiel so
    heißen wie die Belegnummer, können Sie hier ${belegnummer} eingeben.

3. automatische Dateiübertragung per PowerShell  
    Zur automatischen Dateiübertragung können Sie auch Dateien Per Powershell mit dem Dateisystem
    synchronisieren.

4. Direkter Mailversand  
    Ein weiteres Feature ist der Mailversand. Hier könnten bereits An, CC und BCC, sowie den Benutzer in CC im Vorfeld
    belegt werden. Betreff und Inhalt können mit Standardtexten vorgefertigt werden und ebenfalls dynamische Daten
    über ${} enthalten.
