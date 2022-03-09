---
layout: default
title: Die Bausteine und deren Einstellungen
nav_order: 5
---

# Die Bausteine und deren Einstellungen

Wie bereits im Kapitel der Designmodi und deren Einstellungen beschrieben, haben die Bausteine individuelle und 
globale Einstellmöglichkeiten, welche überall gleich sind. Im Folgenden gehen wir näher auf die spezifischen
Einstellungen und Funktionen der Bausteine ein.

Die Bausteine sind in folgende Gruppen klassifiziert: Basis, Formular und Erweitert.

---

## Basis Bausteine

Mit den Basis Bausteinen können Sie Ihre Listeneinträge sortieren, Hinweise erfassen und verlinken.

![basic](..\assets\record-spec-settings\basic.png "basic")

### Abschnitt

Mit dem `Abschnitt` Baustein können Sie Ihre Listeneinträge thematisch trennen.
Als Beispiel erstellen Sie eine Kundenliste. Sie haben bereits Namen und Adressdaten unter dem Titel platziert und
möchten nun noch Kontaktdaten separiert erfassen können. Hierzu wählen Sie den Abschnitt-Baustein und ziehen ihn
an die gewünschte Stelle. Anschließend betiteln Sie diesen mit der Bezeichnung entsprechend mit Kontaktdaten.

![section](..\assets\record-spec-settings\1section.png "section")

Abschnitte können mit dem switch zusammenklappbar und als standardmäßig zusammenklappbar eingestellt werden.
Sie haben ebenso die Möglichkeit Bausteine für die Kopfzeile des Abschnitts hinzuzufügen. Diese
werden dann direkt unter dem Abschnitt-Titel angezeigt.

*Besonderheiten*

Wenn Sie erweiterte Einstellungen für einen Abschnitt vornehmen, gelten diese für alle Bausteine innerhalb 
dieses Abschnitts. Dies betrifft Nur Lesen, Baustein verstecken (Sowie die Ausnahmen) und das Verstecken in der Schnellerfassung.

### Hinweis

Mit dem `Hinweis` Baustein erfassen Sie Hinweistexte. Der Hinweistext wird über die Bezeichnung geschrieben. Sie haben hier die
Möglichkeit auch längere Hinweistexte zu erfassen und diese abschnittsweise durch Entern zu trennen.

![hint](..\assets\record-spec-settings\1hint.png "hint")

Bitte beachten Sie, dass Sie den technischen Namen u.U. kürzen sollten, da andernfalls der gesamte Hinweistext als
technischer Name erscheinen kann. Hinweistexte sind immer nur lesbar, der Nur Lesen switch ist hier ohne weitere Funktion.

Das Verstecken und bedingte Anzeigen von Hinweistexten ist möglich und dort sinnvoll, wo es nur bedingte Hinweistexte gibt.

### Web Link

Durch den `Web Link` Baustein können Sie in Ihre Listeneinträge zentrale URL´s, bzw. Links hinterlegen. 

![link](..\assets\record-spec-settings\1link.png "link")

Diesen können Sie als Button oder Link anzeigen lassen. Dies ist dann sinnvoll, wenn Sie immer auf den gleichen 
Pfad verweisen. Zum Beispiel Ihre allgemeinen Geschäftsbedingungen. 
Der Link benötigt immer ein www. und die .Endung (de, com, org etc.). Das Präfix "http://" wird immer
automatisch durch das System vorbelegt.

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.

---

## Formular Bausteine

Mit den Formular Bausteinen können Sie einfache Formulare erstellen und Inhalte füllen, die als
Informationen bereit gestellt werden. Mit den Formular Bausteinen können Sie zudem eine einfache
Zuordnung von Datensätzen herstellen, sortieren und filtern, sowie Leserechte und Anzeigen unter
Bedingungen festlegen.

![form](..\assets\record-spec-settings\form.png "form")

### Textfeld

Mit dem `Textfeld` Baustein können Sie beliebige alphanummerische Inhalte erfassen. 

![text](..\assets\record-spec-settings\1text.png "text")

Standardmäßig ist hier keine Zeilenzahl für ein mehrzeiliges Textfeld (2) angegeben. 
Wenn Sie hier eine 1 einsetzen, können Sie im Bearbeitungsmodus über die Entertaste 
mehrere Zeilen erfassen. Sie können das Feld auch durch die Wahl von größeren Zeilenwerten bereits im Vorfeld vergrößern,
wie hier im Beispiel.

Indem Sie einen Standard Text eingeben, können Sie einen Standard-Inhalt vorgeben. Nehmen wir an Sie legen neue Kunden
immer mit den gleichen Zahlungsbedigungen an, können Sie diese hier vorbelegen, jedoch ebenso überschreiben.

Das Einstellungsfeld Tooltip (1) eröffnet Ihnen die Möglichkeit ein Hinweistext zu dem Baustein zu erfassen, zum Beispiel
was Sie vom Nutzer für Inhalte erwarten, oder in welchem Format. Den Tooltip sehen Sie dann als Pop-Up
mit einem kleinen i Button in Ihrem Baustein (1).

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.
Der Textfeld Baustein ist hoch individuell und kann in nahezu jeder Liste Verwendung finden, in welcher
beliebige Inhalte erfasst werden sollen.

### Nummer

Während Sie mit dem Textfeld Baustein jeglichen Inhalt erfassen können, ist der `Nummer` Baustein dem Namen entsprechend
nur mit Zahlenwerten füllbar - bedeutet keine Buchstaben und keine Sonderzeichen.

![number](..\assets\record-spec-settings\1number.png "number")

Der Vorteil von Nummern-Bausteinen ist, dass Sie hier nur Zahlenwerte zulassen können und Falscheingaben vorbeugen,
wie z.B. PLZ, Beträge, Auftragsnummern oder Zeiten. Zudem können Sie mit Nummern-Bausteinen über den `Formel` Baustein
rechnen. *Bitte beachten Sie*, dass Falscheingaben nach Verlassen des Dialogfensters gelöscht werden.

Auch beim Nummernfeld können Sie, so wie beim Textfeld, ein Tooltip hinterlegen.
Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.

### Schalter

Mit dem `Schalter` Baustein können Sie eine einfache Ja / Nein, Erfüllt / Nicht erfüllt Abfrage in der App darstellen.
Der Schalter kann als solcher oder als Checkbox in der App dargestellt werden. Zudem können Sie im Ausdruck noch wählen,
ob der Schalter als Ja / Nein, Checkbox, Beschreibung oder leer dargestellt werden soll.

Mit dem Schalter können Sie zudem einfache Anzeigen oder Nur Lesen und unter Bedingung anzeigen darstellen.
Der Schalter eignet sich außerdem, um eine einfache Checkliste zu erstellen.

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.

### Drop-Down

Durch den `Drop-Down` Baustein haben Sie eine erweiterte Einstellung, als mit dem Schalter. Sie können hier
individuelle Antwortmöglichkeiten vergeben und hierdurch eventuelle Abhängigkeiten vergeben. Zudem haben Sie hier die Möglichkeit
eine beliebige Anzahl an individuellen Auswahlmöglichkeiten zu vergeben.

Über die jeweilige Mülltonne der einzelenen Optionen können Sie diese löschen. Durch das = Symbol können Sie die Reihenfolge
ändern. Bitte beachten Sie, dass Sie eine Drop-Down Auswahl nur löschen oder umbenennen können, wenn keine Datensätze mit
der jeweiligen Antwort vorhanden sind.

Sie haben zudem die Möglichkeit eine Standard-Antwort zu hinterlegen. Im Beispiel einer Checkliste könnten Sie die Antworten
OK, nicht OK und nicht bewertet anlegen. Durch die Standard-Antwort nicht bewertet können Sie darüber filtern und
haben zudem noch die Sicherheit, dass eine Eingabe erforderlich ist.

Die Filterung über Drop-Down ermöglicht Ihnen zudem eine Klassifizierung eines Datensatzes. Zum Beispiel geprüft / nicht geprüft
oder Prioritäten hoch, mittel, gering. Somit könnten Sie sich auch Filterkacheln über dieses Feld erstellen.

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.

### Datum

Mit dem `Datum` Baustein können Sie ein Einzeldatum pro Datensatz einstellen. Dieses ist auch inklusive Uhrzeit möglich.
Das heutige Datum ist immer voreingestellt. Die Uhrzeit können Sie im Bearbeitungsmodus entweder händisch eintragen, oder über das
Symbol anklicken.

Der Baustein eignet sich für sämtliche datumsabhängige Datensätze, z.B. Termine oder Erstellungsdatum.
Sie können Ihre Liste zudem nach Datum filtern, Filterlisten über Datumsformeln erstellen oder ganz einfach die Sortierung
Ihrer Liste nach Datum Auf- oder Absteigend einstellen.

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.

### Zeitspanne

Durch den `Zeitspanne` Baustein haben Sie die Möglichkeit eine Zeitspanne, auch inklusive Pausen, einzugeben.
Anders als Datum + Uhrzeit rechnet der Zeitspanne Baustein (Von - Bis) auch die Stunden und Minuten der Zeitspanne aus.

Mit der Kombination von Datum und Zeitspanne (sowie Pausen) ist bereits eine einfache Zeiterfassung über die
Univelop App möglich.

Sie können zudem den Formel Baustein mit der Zeitspanne kombinieren, um sich nur den Dezimalwert der Zeitspanne ausgeben zu
lassen. Somit könnten Sie z.B. mit Arbeitszeiten rechnen.

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.

### Benutzer

Der `Benutzer` Baustein bietet Ihnen die Möglichkeit den Datensatz einem Benutzer oder Team zuzuordnen. Dies eröffnet Ihnen
die Möglichkeit Verantwortlichkeiten zu hinterlegen. Bitte beachten Sie, dass ein Benutzer Mitglied Ihres Arbeitsbereichs
sein muss und einem Team zugeordnet sein sollte.

Sie haben zudem drei spezielle Einstellungsmöglichkeiten:

    - Aktuellen Besitzer standardmäßig einsetzen (Ordnet dem Ersteller den Datensatz zu)
    - Besitzer ändern (Gibt Ihnen die Möglichkeit den Besitzer zu ändern)
    - Besitzerteam ebenfalls ändern (Ändert mit dem Besitzer auch das zugeordnete Team)

Diese Einstellungen geben Ihnen die Möglichkeit nach Besitzer oder Team zu filtern, sowie
Datensätze je Besitzer und Besitzerteam ein- oder auszublenden.

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.

### Team

Den `Team` Baustein könnten Sie als light Variante des Besitzer-Bausteins verstehen.
Durch die globalen Team Einstellungen (Teams benennen und hinzufügen - Rollen und Rechte je Team) können Sie
die Mitglieder Ihres Arbeitsbereichs einem Team zuordnen, z.B. Vertrieb, Verwaltung, Controlling und 
hierüber Lese- und Schreibrechte je Team vergeben. Die Teamnamen können Sie hierbei individuell bestimmen.

Der Baustein hat die Möglichkeit Besitzerteam ändern, dadurch wird der Datensatz einem Team zugeordnet.
Diese Einstellung muss für die vorgenannten Möglichkeiten aktiviert werden.

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.

### Bild Upload

Mit dem `Bild Upload` Baustein können Sie beliebige Bilder hochladen. Dies funktioniert als Einzelbild oder Sie
können mehrere Bilder als uploads zulassen. Sie haben zudem die Möglichkeit Zoom zu verbieten und die Qualität als
original, niedrig, mittel oder hoch einzustellen. Das Bild wird entsprechend der Qualitätseinstellung gerendert.

Bitte beachten Sie, dass die Bilder in der App immer standardmäßig nebeneinander dargestellt werden. Wenn Sie den Switch Mehrere Bilder auswählen, können Sie auch mehrere Bilder gleichzeitig hochladen.

Sie können zudem die Darstellung im Ausdruck bearbeiten. Die Größe kann klein, mittel oder groß gewählt werden.
Die Anordnung kann nebeneinander oder untereinander erfolgen. Das Löschen von hochgeladenen Bildern ist über die Mülltonne 
möglich, es erscheint ein Pop-Up mit der Abfrage, ob das Bild tatsächlich gelöscht werden soll.

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.

### Datei Upload

Der `Datei Upload` Baustein ermöglicht es Ihnen Dateien aller Art hochzuladen. Es sind beliebig viele Mehrfachuploads möglich,
jedoch empfehlen wir aufgrund der Übersichtlichkeit bei einer hohen Anzahl an Dateien diese thematisch in mehreren Bausteinen
hochzuladen, z.B. Datei Upload Bausteine mit den Titeln Pläne, Dokumentation, Tagesberichte. Das löschen von Dateien erfolgt
mit der Mülltonne, es erscheint ein Pop-Up mit der Abfrage, ob die Datei tatsächlich gelöscht werden soll.

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.

### E-Mail

Durch den `E-Mail` Baustein können Sie Mailadressen im System hinterlegen. Im Bearbeitungsmodus können Sie durch Klicken
auf das Mailsymbol eine Mail an die hinterlegte Adresse senden, es öffnet sich Ihr Standard-Mailprogramm.

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.

### Telefon

Mit dem `Telefon` Baustein können Sie eine beliebige Telefonnummer hinterlegen. Analog zu dem E-Mail Baustein öffnet sich
auch hier durch das Klicken auf das Hörer Symbol Ihr Telefondienst und Sie können die Nummer direkt anrufen.

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.

---

## Erweiterte Bausteine

Die erweiterten Bausteine gehen über die "einfachen" Formular Bausteine hinaus. Hiermit können Sie
Listen und Bausteine verknüpfen, sowie Dateien und Stati hinterlegen.

![expanded](..\assets\record-spec-settings\expanded.png "expanded")

### Datei

Den `Datei` Baustein können Sie überall dort verwenden, wo Sie feste Dateien für eine Liste hinterlegen möchten.
Er findet zum Beispiel dort Anwendung, wo Sie allgemeingültige Dokumente, wie zum Beispiel Checklisten,
Arbeitsschutz-Informationen oder Hygienemaßnahmen nicht veränderbar ablegen möchten.

Ähnlich dem `Datei upload` können Sie hier auch jedes Dateiformat hochladen, sowie einen Mehrfachupload vornehmen.
Die Dateien werden bei diesem Baustein jedoch zentral im Designmodus hinterlegt.

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.

### Datensatz

Mit dem `Datensatz` Baustein stellen Sie eine einfache Verknüpfung zu einem einzelnen Datensatz einer anderen Liste in Ihrem
Arbeitsbereich her. So können Sie Ihrem einzelnen Datensatz einen anderen Datensatz zuordnen.

Sie haben zudem die Möglichkeit sich aus ihrer Liste heraus über `Filter und Sortierung` nur bestimmte Datensätze einer
anderen Liste anzeigen zu lassen. Als Beispiel befinden Sie sich in einer Liste namens Bauvorhaben und möchten
den Datensatz mit Kunden verknüpfen. Die Kunden haben Sie über Drop-Down oder Status als aktiv und inaktiv klassifiziert.
So können Sie den Filter einstellen, dass Ihnen nur aktive Kunden angezeigt werden.

Eine weitere Funktion bietet Ihnen `Werte des verknüpften Datensatzes übernehmen`. Über diese Funktion können Sie
bestimmte Einzeldaten des verknüpften Datensatzes übernehmen und bestimmen welche Daten in welches Feld übernommen werden
sollen. Hierbei gilt es zu beachten, dass die jeweiligen Bausteine, die übernommen werden sollen, in beiden
Listen gleich sein müssen. Sie können nur Textfeld zu Textfeld übernehmen, sowie Drop-Down zu Drop-Down (mit gleicher Auswahl).
So haben Sie die Möglichkeit in einer dynamischen Liste mit den Stammdaten einer anderen Liste weiter zu arbeiten.
Durch die Verknüpfung mit einem Schalter könnten Sie nun auch die übernommenen Daten ausblenden und die 
Einblendung zulassen, wenn der Schalter auf ja betätigt wird.

Die dritte Funktion dieses Bausteins ist 
`Diesen Datensatz löschen / duplizieren, wenn verknüpfter Datensatz gelöscht / dupliziert wird?`. Der switch sorgt dafür,
dass der einzelne verknüpfte Datensatz gelöscht oder dupliziert wird, wenn der verknüpfte es wird.

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.

### Datensatz Liste

Der Baustein `Datensatz Liste` sorgt für eine Mehrfachverknüpfung mit einer anderen Liste.
Die Verknüpfung und bedingte Anzeige kennt bei diesem Baustein zwei Wege.
In jedem Fall müssen Sie zunächst, wie bei dem Datensatz Baustein, 
eine einfache Verknüpfung mit einer anderen Liste wählen.

Da Ihnen durch die einfache Verknüpfung alle Datensätze der verknüpften Liste angezeigt werden, müssen Sie
die Anzeige nun bedingt filtern. Hierzu gibt es, je nach Inhalt der beiden Listen, zwei Wege.

    1. Verknüpfung über
    Diese Funktion wählen Sie aus, wenn Sie in der verknüpften Liste einen Datensatz Baustein haben,
    welcher auf Ihre aktuelle Liste verweist. Es handelt sich hierbei um eine einfache Verknüpfung
    über Ihren aktuellen Datensatz.

    2. Filter und Sortierung
    Sie können die Funktion Filter und Sortierung nicht nur zur allgemein reduzierten Anzeige nutzen, sondern
    auch zur Datensatzverknüpfung und daraus resultierenden reduzierten Anzeige. Wenn Sie in dieser Liste und 
    der zu verknüpfenden Liste eine einfache Datensatz-Verknüpfung zu einer dritten Liste haben, 
    können Sie diese nutzen und auswählen "zeige mir nur die Datensätze der beidseitig verknüpften Listen 
    mit der dritten Liste, wenn der Wert der dritten Liste dem Baustein (=B) XY entspricht. 
    Beispiel: Sie haben die Listen Kunden, Bauvorhaben und Ansprechpartner Kunde. 
    In den Listen Bauvorhaben und Ansprechpartner haben Sie den Datensatz Baustein 
    verwendet, um die einzelnen Daten mit der Liste Kunden zu verknüpfen. Sie möchten in den Bauvorhaben nun 
    eine Liste aller Ansprechpartner des Kunden haben, also wählen Sie aus zeige mir alle Ansprechpartner 
    von Kunde ist =B Kunde.

Über die Funktion `Filter und Sortierung` können Sie sich zudem weitere Filter zur Anzeige bestimmter Datensätze
setzen. Durch den = Filter werden nur bestimmte Daten angezeigt. Eine weitere Möglichkeit ist den Zahlenfilter
mit <, >, <= und >= zu setzen. Weiterhin haben Sie die Möglichkeit feste Datumsfilter zu setzen (Auswahl des
Datums) und dynamische Datumsfilter über den Formel Button einzusetzen. Mehr dazu in unserer `Formelsammlung`

Die Liste kann als eingebettete Liste, indem die einzelnen Datensätze angezeigt werden, erfolgen, oder
als Link zur Liste, wobei die Anzahl oder Summe über einen Baustein angezeigt wird.

Durch die `Eingebettete Liste` können Sie sich eine bestimmte Anzahl an Datensätzen als Vorschau anzeigen lassen.
Dies birgt den Vorteil, dass Sie direkt zu den einzelnen Datensätzen springen können und eine Übersicht haben.
Es ist vor allem dann sinnvoll, wenn Sie in der verknüpften Liste die Schnellerfassung aktivieren und über
diese Liste Datensätze erfassen möchten.

Mit dem `Link zur Liste` können Sie sich entweder die Anzahl der verknüpften Datensätze anzeigen lassen oder
die Summe über einen Zahlenbaustein wählen. Dies können Nummern- oder Formelfelder sein, aber auch
Zeitspannen. Im Beispiel der Zeiterfassung könnte man so zum Beispiel alle Arbeitszeiten pro Auftrag
darstellen. Sie haben zudem die Möglichkeit ein Präfix, z.B. Std. einzutragen.

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.

Im Kapitel zum Verknüpfen von Listen finden Sie eine ausführliche Erklärung, sowie Beispiele
zum Verknüpfen von Listen.

### Status

Mit dem `Status` Baustein können Sie sowohl einfache Zustandsstati vergeben, als auch einen kompletten Prozess im
Unternehmen darstellen. Neben den einfachen Stati aktiv / inaktiv, könnten Sie den gesamten Vertriebsprozess
von Anfrage, über Kundentermin bis zu Rechnung gestellt erfassen.

Sie haben pro Status die Möglichkeit ein individuelles Icon und eine Farbe zu vergeben. Die Reihenfolge der Stati
können Sie über das = Symbol verschieben. Ebenso könnten Sie Stati mit der Mülltonne löschen, vorausgesetzt
der Status ist in keinem Datensatz vorhanden. Durch die Icons können Sie die Stati schnell sichtbar in die
Kurzübersicht der Datensätze in der Liste setzen und danach Filtern.

Ein weiteres Feature dieses Bausteins ist die Vergabe von Pflichtfeldern pro Status. Das bedeutet, dass Sie
in jedem Fall das jeweilige Feld ausfüllen müssen, um den jeweiligen Status auswählen zu können.

Eine Statusänderung können Sie durch Klicken auf den Status vornehmen, oder durch einen Status-Button.

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.

### Status Button

Den `Status Button` Baustein können Sie nur mit einem Status Baustein verknüpfen. Über Verknüpfen mit wählen
Sie den gewünschten Status Baustein Ihrer Liste aus, den Sie ansteuern möchten. Mit der Wahl Status wählen Sie
den Status, der angewählt werden soll.

Der Status Button eignet sich dort besonders gut, wo Sie in einem Prozess einen Status vergeben möchten,
aber nicht zum Status Baustein scrollen möchten, bzw. dies hinderlich ist und einfacher über einen Button
angesteuert werden kann.

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.

### Laufende Nummer

Den `Laufende Nummer` Baustein verwenden Sie überall dort wo Sie Ihren Datensätzen einer Liste
eine fortlaufende Nummer geben möchten. Üblicherweise eignen sich hierfür Kunden, Bauvorhaben, Lieferscheine,
Rechnungen, Artikel, Mitarbeiter oder ähnliche Datensätze.

Sie haben die Möglichkeit Ihrem Nummernkreis ein passendes Präfix zu geben, i.d.R. werden hierfür
einzelne Buchstaben, Buchstabenkombinationen oder "Jahreszahl-" verwendet. Bitte beachten Sie, dass 
Leerzeichen zur Trennung von Buchstabe und Zahl vom System ignoriert werden. Zudem können Sie die 
Anzahl der Ziffern selbst bestimmen.

Im Designmodus sehen Sie zudem die letzte gewählte Nummer. Sollten Sie sich einmal verklickt haben,
müssten Sie die letzte Nummer hier wieder anpassen, sodass keine Lücke entsteht.
Im Bearbeitungsmodus können Sie entweder "Nächste Nummer" wählen, oder diese individuell über
"Eingabe" eintragen.

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.

### Formel

Mit dem `Formel` Baustein können Sie rechnen, dynamisch auf verknüpfte Datensätze zugreifen
oder unter Bedingungen bestimmte Werte ausgeben. Die Formel geben Sie nur im
Designmodus ein und der Baustein ist im BEarbeitungsmodus nur lesbar.

Dies geschieht wie folgt:

    1. Auf andere Bausteine greifen Sie über den technischen Namen zu
    Wie bereits beschrieben müssen technische Namen innerhalb einer Liste
    einzigartig sein. Durch diese Einzigartigkeit weiß der Formel Baustein
    auf welchen Datensatz er zugreifen soll.

    2. Den Inhalt eines anderen Bausteins widergeben
    Durch das Schreiben des technischen Namens eines anderen Baustein können Sie
    bereits den Inhalt widergeben. Ein = vor der Formel ist nicht erforderlich.

    3. Kombinieren von Datensätzen
    Verschiedene Datensätze kombinieren Sie nun über über +, -, *, / miteinander.
    Also: technischername1+technischername2
    Sie können auch Zahlen- und Textwerte miteinander verknüpfen.
    Beim Beispiel PLZ und Ort könnte das Ergebnis 21085Hamburg lauten.
    Durch solche Kombinationen könnten Sie eine Sortierung erschaffen.

    4. Dynamischer Zugriff auf verknüpfte Daten
    Wie beschrieben greifen Sie durch nennen des technischen Namens bereits
    auf die Daten des jeweiligen Baustein zu. Durch ein Punkt hinter dem
    technischen Namen weiß der Formel Baustein, dass Sie in den
    verknüpften Datensatz möchten und greift dort über einen weiteren
    technischen Namen auf den gewünschten Datensatz zu.
    Also: technischernamebausteindieseliste.technischernamebausteinverknüpfteliste

Weitere Formeln und Möglichkeiten mit dem Formel Baustein finden Sie in unserer Formelsammlung.

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.

### Unterschrift

Mit dem `Unterschrift` Baustein können Sie je Datensatz / je Baustein eine Unterschrift erfassen.
Sie haben zudem die Möglichkeit eine Klausel für die Unterschrift zu erfassen, sodass die 
unterschreibende Person über dem Unterschriftfeld nochmal darauf hingewiesen wird wofür Sie
die Unterschrift leistet.

Im Bearbeitungsmodus ist ein Klick auf das weiße Feld "Hier unterschreiben" notwendig.
Es öffnet sich ein neues Fenster, hier steht die genannte Klausel nochmal. Die Person kann
auf einem Touch Gerät oder mit dem Mauszeiger unterschreiben. Sie haben hier zudem noch die
Möglichkeit den Namen der Person zu notieren. Durch das klicken auf Speichern speichern Sie
die Unterschrift.

Das Löschen der Unterschrift erfolgt auf gleichem Weg wie das Unterschreiben.
Sie klicken auf das Unterschriftsfeld und löschen die Unterschrift.

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.

### Kommentare

Hier können beliebig viele `Kommentare` erfasst werden. Der Baustein hat im Gegensatz zum
mehrzeiligen Textfeld den Vorteil, dass Kommentarerfasser, sowie Datum und Uhrzeit automatisch
angelegt werden.

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.

### PDF erstellen

Mit dem `PDF erstellen` Baustein können Sie, ausgehend von einer Word Vorlage, eine PDF Datei erstellen
und versenden. Die Word Datei können Sie dabei individuell gestalten und sich auf die Liste beziehen
in welcher Sie die PDF Datei erstellen. Sie können dabei sämtliche darstellbare Inhalte drucken,
so auch neben Buchstaben und Zahlen Bilddateien. Weiterhin können Sie verknüpfte Datensatz-Listen drucken.

    1. Ausgabe von Einzelwerten
    Einzelne Werte geben Sie aus, indem Sie sich mit ${} auf die Inhalte der Einträge beziehen.
    Sie möchten zum Beispiel eine Belegnummer mit ausgeben, also könnte der Inhalt der
    Word-Datei Lauten "Kundenbeleg ${belegnummer}".

    2. Ausgabe von Schaltern
    Die Ausgabe des Schalter Bausteins können Sie im Designmodus des Schalter Baustein festlegen.
    Also Als Checkbox, Ja / Nein oder Nennen des Inhalts oder auch nicht.

    3. Ausgabe von Datensatz-Liste
    Sie können auch eine ganze Datensatz-Liste ausgeben. Hierzu müssen Sie eine Tabelle zeichnen.
    Gehen wir davon aus Sie möchten Mitarbeiterzeiten pro Auftrag drucken und haben die
    Mitarbeiterzeiten als Datensatz Liste in Aufträgen integriert.
    
So könnte die Tabelle zur Ausgabe einer ganzen Liste, mittels Serienbrieffunktionalität aussehen:

|**Arbeitszeit**                             |**Mitarbeiter**|
|${repeat(mitarbeiterzeiten)}            |           |
|${mitarbeiterzeiten.Arbeitszeit}        |${mitarbeiterzeiten.name}|
|${endrepeat}                            |                         |

Diese Liste können Sie über beliebig viele Spalten erweitern, solange diese in der Datensatz-Liste vorkommen,
auf welche Sie zugreifen. Bitte beachten Sie, dass Sie nicht mehrere Listen innerhalb einer Tabelle kombinieren
können, da das Programm immer nur auf eine Liste gleichzeitig zugreifen kann.

Der Dateiname kann ebenfalls abweichend und dynamisch gewählt werden. Auch hier können
Sie sich auf einen bestimmten Datensatz beziehen. Soll die PDF-Datei zum Beispiel so
heißen wie die Belegnummer, können Sie hier ${belegnummer} eingeben.

Zur automatischen Dateiübertragung können Sie auch Dateien Per Powershell mit dem Dateisystem
synchronisieren.

Ein weiteres Feature ist der Mailversand aus dem PDF erstellen Baustein heraus. Hier könnten
Sie auch bereits An, CC und BCC, sowie den Benutzer in CC im Vorfeld belegen. Betreff und
Inhalt können mit Standardtexten vorgefertigt werden und ebenfalls dynamische Daten
über ${} enthalten.

Sämtliche erweiterte Einstellungen, sowie die Iconvergabe sind möglich.