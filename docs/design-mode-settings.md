---
layout: default
title: Die Designmodi und deren Einstellungen
nav_order: 4
---

# Die Designmodi und deren Einstellungen

Zur Verwendung des Designmodus benötigen Sie einen Bildschirm, der groß genug ist, um eine geteilte Ansicht zuzulassen.
In der Regel eignet sich hierfür bereits ein handelsübliches Tablet, wir empfehlen Ihnen jedoch ein Desktopgerät, wie zum
Beispiel einen PC oder Laptop mit mindestens 13" Bildschirm.

## Arbeitsbereich

Sie finden im Arbeitsbereich oben rechts zwei runde Buttons. Mit dem Haus Button können Sie den Arbeitsbereich wechseln.
In den Designmodus des Arbeitsbereichs gelangen Sie entweder, indem Sie auf die drei Punkte oben rechts klicken und Designmodus
auswählen, oder indem Sie die linke Maustaste über einer Kachel ca. 2 Sekunden lang gedrückt halten.

Es öffnet sich nun der globale Designmodus des Arbeitsbereichs. In der Mitte des Bildschirms sehen Sie zuerst alle allgemeinen
Kacheln und darunter Ihre eigenen Kacheln. Wenn Kacheln "versteckt" wurden, sehen Sie das daran, dass diese farblich leicht
ausgegraut wurden und ein Symbol mit durchgestrichenen Auge haben. Die Kacheln können Sie einfach via Drag and Drop verschieben, 
um die gewünschte Reihenfolge zu erhalten.

In der linken Bildschirmhälfte finden Sie drei Möglichkeiten zum Hinzufügen von neuen Kacheln:

1. `+ Einfache Liste`
    Hier erstellen Sie eine eigene neue Kachel mit beliebigen Inhalten Ihrer Wahl.

2. `Gefiltere Liste`
    Sie fügen eine Filterkachel hinzu, die sich auf eine bereits existierende Kachel / Liste bezieht.
    Diese Filterkachel stellt im Standard beim Hinzufügen alle Inhalte dar.
    Wenn Sie auf die Kachel klicken und über die Auswahl Filter und Sortierung gehen, können Sie sich auf die
    Inhalte beziehen und diese entsprechend dem was Sie Filtern wollen reudziert darstellen.
    Zum Beispiel offene Aufträge (Status offen), ToDos dieser Monat (Datum start und endOfMonth).

3. `Kachel Importieren`
    Wenn Sie diese Funktion nutzen, sind Sie bereits ein fortgeschrittener Univelop-Nutzer.
    Sie können Kacheln aus anderen Arbeitsbereichen importieren, wenn Sie diese vorher lokal exportiert und
    im json Format gespeichert haben. Dies eignet sich vor allem dafür, wenn Sie Standard-Kacheln in einer 
    Universal-Umgebung haben, welche Sie auf andere Arbeitsbereiche ausrollen möchten. 
    Ebenso können Sie so gleiche Einstellungen übernehmen.

![home](..\assets\design-mode-setting\home.png "home")

Im rechten Fenster sehen Sie weitere globale Einstellungen (4). Sie können hier den Namen des Arbeitsbereichs ändern.

Weiterhin haben Sie die Möglichkeit drei Bilder hinzuzufügen. Als erstes das Banner für den Homescreen, dies wird dann 
über den Kacheln erscheinen. Je nach Bildschirmgröße wird das Bild anders dargestellt. 
Sie können Ihr Firmenlogo hinzufügen, dies würde dann oben links auf dem Startbildschirm erscheinen. 

Weiterhin haben Sie die Möglichkeit ein Hintergrundbild für die Anmeldung einzubetten, dies ist eine Funktion 
zur Erstellung eines Portalmodus. Hierzu mehr im Reiter Portalmodus.

Sie können ebenso das Farbschema Ihres Arbeitsbereichs anpassen. Wenn Sie diese Einstellung öffnen, haben Sie zunächst die
Möglichkeit eine Primär- und Sekundärfarbe zu vergeben. Dies können Sie über die Farbskala machen, oder einen RTX Wert eingeben.
Neben den beiden Farben können Sie auch weitere sechs Kachelfarben vergeben.

Unterhalb des Farbschemas finden Sie Einstellungen zu den Benutzerrollen und Teams, hierzu in dem Kapitel zu zusätzlichen
Einstellungen mehr. Die Arbeitsbereich ID ist eindeutig. Sie beschreibt außerdem die Herkunft von Kachelim- und exporten.
Die ID darf nicht verändert werden.

Über den Button Service Account Key können Sie einen eindeutigen Key anfordern. Wenn Sie dies gemacht haben, können Sie
selbst neue Mitglieder in Ihrem Arbeitsbereich hinzufügen.

Zuletzt finden Sie unten zwei Buttons. Mit dem Button Export können Sie einen ganzen Arbeitsbereich als ZIP Datei exportieren, um ihn in einen neuen einzufügen. Der Löschen Button sorgt dafür, dass Ihr Arbeitsbereich gelöscht wird.

## Kachel

![tile](..\assets\design-mode-setting\tile.png "tile")

Wenn Sie sich im Designmodus des Arbeitsbereichs befinden und auf eine Kachel klicken, können Sie die Kacheleinstellungen
bearbeiten. Die linke Hälfte und Mitte des Fensters verändern sich hierbei nicht.

Zunächst haben Sie hier die Möglichkeit in die Designmodi der Liste (1) und der Einträge (2) zu gelangen.
Darunter haben Sie nun die Möglichkeit den Namen der Kachel zu ändern (3). 
Darauf folgt die Darstellung der Kachel (4). Sie können die Kachelinfo als Anzahl der Datensätze, Summe über einen Baustein oder
ein Icon (5) realisieren. Wenn Sie auf Summe über einen Baustein klicken, wählen Sie daraufhin aus über welchen Baustein die Summe errechnet werden soll. Üblich sind z.B. Arbeitszeiten oder Nummernfelder.
Sie können ebenso ein Suffix, wie zum Beispiel Std. hinzufügen. Wenn Sie die Variante Icon wählen, können Sie aus einer Liste 
ein Icon auswählen. Es gibt weiterhin die Möglichkeit über englische Begriffe zu suchen. 
Als nächstes können Sie die Kachelfarbe (6) festlegen.

Die Filterung und Sortierung (7), also Auswahl und Sortierung der Liste, stellen Sie ebenfalls hier ein. 
Je nachdem welche Inhalte diese Kachel hat, können Sie die Filterung nach den Bausteinen wählen. Zum Beispiel nach Datum,
Projektnummer, Kundennummer, Name (alphabetisch) auf- oder absteigend. 

Unterhalb der Filterung und Sortierung haben Sie die Option die Kachel für alle Nutzer zu verstecken (8). 
Dies macht dann Sinn, wenn es sich um eine Hilfskachel handelt. 
Zum Beispiel eine Kachel namens Ansprechpartner, welche dann als Datensatzverknüpfung in der
Kachel Kunden angezeigt werden.

![tile2](..\assets\design-mode-setting\tile2.png "tile2")

Sie können die grundsätzlich versteckte Kachel jedoch für bestimmte Rollen und Teams anzeigen lassen. 
Dies sorgt dafür, dass Sie Ihren Arbeitsbereich für bestimmte Nutzer aufräumen und jeder den Inhalt sieht,
mit dem gearbeitet werden soll.

In den erweiterten Einstellungen können Sie zunächst noch einen technischen Namen vergeben.
Technische Namen sind immer erforderlich um sich auf etwas zu beziehen. In diesem Fall auf die Kachel. Technische Namen sind
im Standard immer klein geschrieben und Leerzeichen werden als Unterstrich ausgeschrieben. Diesen technischen Namen
können Sie natürlich beliebig ändern.
Hinweis: Die technischen Namen sind i.d.R. für den Im- und Export von Datensätzen notwendig.

Es gibt zudem eine Benachrichtigungsfunktion. Dies bedeutet, dass Sie immer darüber informiert werden, wenn es Änderungen in
den Datensätzen gab. Dies geschieht bei den Kacheln mit einem kleinen roten Kreis, welcher oben rechts am Kachelrand erscheint
und eine Zahl beinhaltet, welche die Anzahl der Neuigkeiten ausgibt. In der Liste sehen Sie bei den Einträgen ebenfalls rote
Punkte, die verschwinden, wenn Sie den Eintrag öffnen - also lesen.

Bei einzelnem Datensatz direkt zum Datensatz springen bedeutet, dass Ihnen keine Liste angezeigt wird, sondern nur der 
einzelne Datensatz. Dies können Sie nutzen, wenn Sie dritten einen Zugang geben, die nur Ihre eigenen Datensätze sehen sollen.
Zudem könnten Sie funktionell in diesem einen Datensatz / dieser einen Liste die Daten aus anderen Listen zusammenfließen
lassen. Hier eignet sich zum Beispiel eine Portalfunktion, bei welcher ein externer Nutzer einem Datensatz zugeordnet
wird und nur seine eigenen Daten sieht.

Wenn Sie die Schnellerfassung aktivieren, wird Ihnen das kleine PLus in der Liste nicht mehr als runder Button angezeigt, 
sondern als Balken und die Sicht auf die eingegebenen Datensätze kann reduziert werden 
(Baustein -> in Schnellerfassung verstecken). Sie haben außerdem die Möglichkeit die Schnellerfassung 
ausschließlich bei einer Verknüpfung über einen bestimmten Baustein zu wählen.
Die Schnellerfassung nutzen Sie im Baustein Datensatz-Liste. Hierzu in den Bausteinen mehr.

Am Ende finden Sie drei Buttons. Counter aktualisieren sorgt dafür, dass wenn der Inhalt der Kachel
als Anzahl Datensätze oder Summe über Baustein gewählt wurde diese Zähler sich aktualisieren / die Summe neu
berechnen. Dies passiert im Produktivsystem live, beim Einstellen müssen Sie dies jedoch initial setzen.

Der Button Export sorgt dafür, dass Sie eine einzelne Kachel im json Format exportieren. Bitte beachten Sie, dass dies 
***ohne Vorlagen und ohne Datensätze*** passiert. Die exportierte Kachel können Sie nun über den Import Button
in einen anderen Arbeitsbereich einfügen. Bitte beachten Sie, dass dies eine Einbahnstraße ist. Die exportierte Kachel
bekommt die ID des exportierten Arbeitsbereich mitgegeben und kann nicht zurück Ex- und Importiert werden.
Wir empfehlen einen Demo Arbeitsbereich, in welchem Sie sämtliche Änderungen vornehmen und von dort aus exportieren.

Zu guter Letzt können Sie Ihre Kacheln inklusive Inhalt löschen.

## Liste

![list](..\assets\design-mode-setting\list.png "list")

Wenn Sie auf eine Kachel klicken öffnet sich links die Liste und nach einem Klick auf einen Eintrag rechts der Listeneintrag. 
Am linken oberen Bildschirmrand sehen Sie einen Pfeil (1), über welchen Sie zurück in den Arbeitsbereich kommen. 
Mittig (Rechte Hälfte der Liste) sehen Sie drei Symbole. Mit der Lupe (2) können Sie nach allem suchen, 
was in den Listeneinträgen niedergeschrieben wurde.
Über die drei Striche (3), die so aussehen wie ein W-Lan-Symbol, können Sie sich die Inhalte nach bestimmten Kriterien filtern und
die Sortierung temporär ändern. Dies ist nur temporär, da Sie die Fixeinstellung in dem Designmodus der Kachel vornehmen.
Mit dem Speicherkartensymbol können Sie diese Filterung und Sortierung als eigene Kachel im Arbeitsbereich speichern.

Mit den drei Punkten (4) gelangen Sie in den Designmodus. Sie können auch hier die Benachrichtigungen für sich selbst aktivieren,
alle als gelesen markieren, die Datensätze nach Excel exportieren und, sofern Sie die Berechtigungen (s. Rollen und Rechte) haben,
auch von Excel importieren. Weiterhin könnten Sie die Berechtigung haben alle Datensätze zu löschen. 
***ACHTUNG! Dies löscht alle Daten.***

Im Designmodus der Liste ist Ihr Fenster wieder dreigeteilt. Links sehen Sie die Felder / Bausteine der Listeneinträge.
Diese können Sie via Drag and Drop in eins der 5 Felder in der Mitte ziehen. Diese 5 Felder entsprechen am Ende dem Inhalt,
der als Kurzfassung der Datensätze in der Liste dargestellt wird. In diese Felder können Sie mehrere Datensätze legen.
In der rechten Bildschirmhälfte wird Ihnen angezeigt welche Felder in der Listendarstellung enthalten sind. 
Sie können hier Felder aus der Kurzansicht löschen (1) und die Positionen verschieben über die drei Striche (2) via
Drag and Drop.

Bitte beachten Sie: Wenn Sie einen Baustein in der Listenansicht verwenden, können Sie ihn nicht löschen.

![list2](..\assets\design-mode-setting\list2.png "list2")

## Eintrag

Wenn Sie sich in der Liste befinden und links die Liste sehen und rechts den Eintrag (nach Mausklick auf einen Eintrag), sehen Sie
oben rechts 4 Symbole. Die Glocke, mit welcher Sie die Benachrichtigungen für den Eintrag aktivieren, das Rechteck mit dem
Schattenstrich, welches für das Duplizieren des Eintrags steht und eine Mülltonne, mit welcher Sie den Eintrag löschen.

In den Designmodus gelangen Sie mit dem Stift-Symbol. Es öffnet sich wieder ein dreigeteiltes Fenster. Links finden Sie alle
verfügbaren Bausteine, welche Sie via Drag and Drop an die richtige Stelle ziehen können. In der Mitte finden Sie die verwendeten
Bausteine, im Designmodus sehen Sie die versteckten und sichtbaren Bausteine Ihrer Liste. Am Anfang der Liste steht immer der
`Titel des Datensatzes / des Listeneintrags`. Diesen können Sie durch einen eigenen Titel (immer gleich) frei wählen, oder Sie
nutzen den eigenen Titel als Präfix. Im Anschluss haben Sie die Möglichkeit drei Bausteine für einen aussagekräftigen 
Titel zusammen zu stellen.

Wenn Sie auf einen Baustein klicken, können Sie diesen bearbeiten.
Jeder Baustein hat eine `Bezeichnung`, mit welcher Sie deklarieren welcher Inhalt dargestellt werden soll.
I.d.R. können Sie fast allen Bausteinen ein `Icon` zuweisen, genau so wie bei den Kacheleinstellungen.

Zudem haben Sie bei allen Bausteinen die erweiterten Einstellungen:

1. `Technischer Name`
    Diese sind erforderlich, wenn Sie sich auf den Baustein beziehen wollen. 
    Der technische Name muss **innerhalb einer** Liste einzigartig sein.

2. `Nur Lesen` Mit der Nur Lesen Funktion verbieten Sie Schreiberechte. Sie können die Schreibrechte unter Bedingungen zulassen.
    Zum Beispiel "Benutzerrolle = Admin" oder auch "Status = Offen". Bedeutet, dass der Baustein nur bearbeitet werden darf
    wenn jemand die Admin Rolle inne hat oder der Status noch auf offen steht. Hierzu wäre der Status Baustein erforderlich.

3. `Baustein verstecken` Jeder Baustein kann versteckt werden. Ebenso können Bausteine unter Bedingung, wie die "Nur Lesen" Funktion,
    wieder angezeigt werden. So kann die Sichtbarkeit für Bausteine zum Beispiel an Drop-Down oder Checkbox-Bausteinen verknüpft werden,
    um überflüssigen Inhalt für ein bestimmtes Szenario zu verbergen. Gibt es zum Beispiel das Drop-Down Feld mit Privat und
    Gewerbe, kann für Privatkundenauswahl ein Textfeld "Firma" versteckt werden.

4. `In Schnellerfassung verstecken` Wie bei den Kacheleinstellungen schon angedeutet, können Bausteine in der Schnellerfassung
    versteckt werden, um eine lange Listenansicht an Informationen zu verbergen, die für den Einzelfall der Erfassung
    nicht relevant sind. Als Beispiel möchten Sie eine Artikelbewegung erfassen, es interessiert Sie für die
    Erfassung jedoch vordergründig nur die Artikelbezeichnung und der Lagerplatz. Nicht aber der Lieferant, Einzelpreis oder
    die Lagerbewegungen.

5. `Duplizieren und Löschen` Auch hier können Sie einzelne Bausteine löschen oder duplizieren. Bitte beachten Sie hierbei, dass
    Bausteine nur gelöscht werden können, wenn sie nicht als Listeneintrag fungieren. Das Duplizieren ist möglich
    und sinnvoll, wenn Sie ähnliche Inhalte darstellen wollen. Bitte beachten Sie aber unbedingt, dass der technische Name
    ebenso zzgl. einer fortlaufenden Zahl mit übernommen wird und ggf. geändert werden muss.