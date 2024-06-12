---
layout: default
title: Die Programmstruktur
nav_order: 3
---

# <span style="color:#0b5394">**Die Programmstruktur**</span>

Im Folgenden erläutern wir die Programmstruktur im Einzelnen.
Für Nachbauten können gerne die [Tutorials](/docs/tutorials/Tutorials.html)
verwendet werden.

## <span style="color:#0b5394">Arbeitsbereiche</span>

Als Arbeitsbereich kann der Workspace oder Mandant verstanden werden, in dem man sich aktuell befindet.
Er ist somit die oberste Programmebene. Über den Arbeitsbereich können globale Einstellungen vorgenommen
werden, z.B. Mitglieder hinzufügen, Kacheln importieren oder erstellen.

## <span style="color:#0b5394">Kacheln</span>

Ein Arbeitsbereich enthält eine oder mehrere Kacheln. Die Kachel steht mit ihrem Titel und der Darstellung
(Icon, Summe Inhalte oder Summe über Baustein) für den Inhalt darin. 

Eine Kachel ist dabei vergleichbar mit einer App auf dem Smartphone, kann also für verschiedenste Zwecke dienen. Der "Inhalt" einer Kachel ist dabei in der Regel eine Liste von Datensätzen. Es können aber auch Formulare oder die Einbettung einer Website sein.

Hauptsächlich steht eine Kachel also repräsentativ für eine Liste von Datensätzen. Dabei kann eine Kachel aus nur einem Datensatz oder vielen Datensätzen bestehen.
Es gibt getrennt voneinander allgemeine
Kacheln, die von allen Nutzern des Arbeitsbereichs gesehen werden, sowie eigene Kacheln, welche immer aus
den allgemeinen Kacheln gefilterte Inhalte darstellen. Zusätzlich besteht die Möglichkeit globale Kacheln,
bei Bedarf, ausblenden zu lassen.

### <span style="color:#3d85c6">Kachel "einfache Liste"</span>

Die wichtigste Kachelart ist die *einfache Liste*. 
Sie stellt eine Liste von Datensätzen dar, die in der Regel durch Listeneinträge dargestellt werden.
Klickt man auf die Kachel, so öffnet sich eine [Listenansicht]() für die Datensätze.
Hier kann man auf bestimmte Datensätze filtern, sortieren und suchen.
Datensätze können hier auch erstellt, gelöscht und bearbeitet werden.

### <span style="color:#3d85c6">Gefilterte Kacheln</span>

Filterkacheln bilden einen wesentlichen Teil in der Arbeit mit Univelop. Aus gefilterten Kacheln können
Aufgaben oder sonstige Arbeitserleichterung abgeleitet werden.

Gefilterte Kacheln können auf zwei Wege erstellt werden:  
- <span style="color:#3d85c6">**Speichern der gefilterten Liste**</span>  
Wurde in der Liste temporär ein Filter gesetzt, kann die Filterung als "gefilterte Kachel" über das Symbol
"Speichern" gespeichert werden.
- <span style="color:#3d85c6">**Gefilterte Kachel über den Homescreen erstellen**</span>  
Im Designmodus des Arbeitsbereichs können neben allgemeinen Kacheln auch "gefilterte Kacheln" erstellt werden.
Hier wird die gefilterte Kachel per Drag and Drop in den Arbeitsbereich. Anschließend wählt man den Namen der
Filterkachel sowie die Basiskachel, die die Grundlage der Datenlieferung für die Filterung liefert.
Anschließend wird in den Kacheleinstellungen unter *Filter und Sortierung* die gewünschte Filterung eingestellt.

<span style="color:#3d85c6">**Darum sollten Filterkacheln genutzt werden**</span>

Filterkacheln eignen sich hervorragend dazu eine Standard-Dateneingabe zu erleichtern. Als Beispiel könnte
eine Kachel *Zeiterfassung* dienen. Um die erfassten Arbeitszeiten auf sich selbst zu filtern, bietet sich
solch eine Filterkachel an. Darüber hinaus, können über diese Kachel auch neue Datensätze erfasst werden. Der
Vorteil hierbei ist, dass die Filter entsprechend in der Neuerfassung von Datensätzen bereits vorerfasst sind
(z. B. Mitarbeitername, Tätigkeitsart).  
Zeiterfassungen unterliegen aber auch einer ständigen Prüfung, sodass neue Arbeitszeiten dafür besser gefiltert
werden können (z. B. Filter: bereits freigegeben = Nein).

### <span style="color:#3d85c6"> Kachel "Mitglieder"</span>

Die Mitgliederkachel ist im Kern eine normale Liste, die aber speziell dem Verwalten der 
Mitglieder des Arbeitsbereiches dient. 
Diese Kachel enthält einen Eintrag für jedes Mitglied des Arbeitsbereiches, und umfasst den Namen, E-Mail-Adresse und Status des Nutzers.

Standardmäßig können die E-Mail, der Name, die ID und nicht verändert werden, solange der Status des Nutzers auf "Aktiv" steht.
Sobald der Nutzer nicht aktiv ist, d.h. nicht mehr im Arbeitsbereich ist, können alle Bausteine, abgesehen vom Status, verändert werden und es kann der Eintrag auch gelöscht werden.

Um Mitglieder zu verwalten, die aber nicht im Arbeitsbereich sind, können in der Liste wie üblich Einträge dafür erstellt und bearbeitet werden. Diese Mitglieder besitzen dabei immer den Status 'Nicht aktiv'. 

Sobald ein neues Mitglied dem Arbeitsbereich betritt, für den ein Eintrag in dieser Kachel mit der selben E-Mail vorhanden ist, wird der Status auf 'Aktiv' gesetzt. Verlässt ein Mitglied den Arbeitsbereich, wird der Status in seinem Eintrag auf 'Nicht aktiv' gesetzt.

Im Designmodus können die Einträge um weitere Bausteine erweitert werden, um bspw. einfache Daten wir Telefonnummern oder
Adresse hinzuzufügen oder aber den Nutzern einen Standort, ein 
aktuelles Projekt oder seine aktuellen Arbeitszeiten zuzuweisen. 
Alle Bausteine aus dieser Kachel können bei den [Rechten](/docs/global-settings-and-functions.html#rechte--berechtigungen) zur Konfiguration verwendet werden.

### <span style="color:#3d85c6"> Kachel "Website"</span>

Die Kachel *Website* ermöglicht die Einbindung einer Website direkt in Univelop ohne die Nutzung eines separaten
Webbrowsers o. ä. Diese Methode bietet sich zum Beispiel für das Abrufen von Daten von Websites, Nutzung von webbasierten Tools, usw.

![tile website](\assets\software-structure\tile website.png "tile website")

1. <span style="color:#0b5394">**Name der Kachel**</span>  
2. <span style="color:#0b5394">**URL**</span>  
    Hier wird aufzurufende Website eingesetzt

Zusätzlich besteht die Möglichkeit die Kachel *Website* mit einem Icon zu versehen. Wie gewohnt lässt sich auch die Farbe der Kachel anpassen.

### <span style="color:#3d85c6"> Kachel "Formular"</span>

Die Kachel *Formular* dient dem vereinfachten Ausfüllen eines Listeneintrages. Die Kachel legt beim Öffnen einen neuen Listeneintrag an, und öffnet diesen direkt zum Ausfüllen, ohne die Einträge einer Kachel zu laden. Beim Anlegen einer Formular-Kachel wird sie mit einer einfachen Kachel verbunden, bei der dann die Einträge hinzugefügt werden. 
Diese Art von Kachel kann z. B. für eine vereinfachte Zeiterfassung genutzt werden.

![tile form](\assets\software-structure\tile form.png "tile form")

Es gibt folgende Einstellungen für eine individuelle Formular-Funktion:

1. <span style="color:#0b5394">**Verbindung zu einer Liste**</span>  
    Hier wird der Name der verbundenen Liste angezeigt
2. <span style="color:#0b5394">**Bezeichnung des Absende-Buttons**</span>  
    Dieser Text wird als Tooltip für den Absende-Button angezeigt
3. <span style="color:#0b5394">**Icon für den Absende-Button**</span> 
4. <span style="color:#0b5394">**Bestätigungsnachricht**</span>  
    Bei erfolgreichem Absenden des Formulars erscheint der angegebene Text als Nachricht auf dem Bildschirm
5. <span style="color:#0b5394">**Mehrmaliges Absenden pro Benutzer verbieten**</span>
6. <span style="color:#0b5394">**Workflow starten/bearbeiten**</span>
    Ein Workflow kann hier gewählt werden, welcher bei erfolgreichem Absenden des Formulars gestartet wird.

Die typischen Einstellungsmöglichkeiten anderer Kacheltypen, wie z.B. die Kachelfarbe, gibt es bei der Kachel *Formular* auch.


### <span style="color:#3d85c6"> Kachel "Scanner"</span>

Die Kachel dient dem Scannen von QR-Codes mit Mobilgeräten und auch Barcodes mit Scannergeräten. Dadurch kann nur mit einem Scan ein passender Eintrag oder eine Menge von Einträgen gefunden werden.
Beim Anlegen wird sie mit einer Kachel verbunden, dessen Einträge dann durch das Scannen gefunden werden können.

Es gibt folgende Einstellungen für den Scanner:

1. <span style="color:#0b5394">**Externer Scanner**</span>  
    Hier wird angegeben, ob es sich um ein übliches Mobilgerät (Smartphone, Tablet) oder um ein Scannergerät handelt.
2. <span style="color:#0b5394">**Baustein**</span>  
    Auf dem hier ausgewählten Baustein wird gesucht. Um einen funktionierenden Scanner zu garantieren, soll hier derselbe Baustein gewählt werden, welcher auch beim 
    zu scannendem Baustein [*QR-/Barcode*](/docs/record-spec-settings/grand-child-expanded/qr-barcode.html) gewählt wurde. 
    Wird bei der internen Suche des Scanners nur ein passender Eintrag gefunden, so wird dieser direkt geöffnet.
    Bei mehreren Ergebnissen, wenn z.B. der QR-Code nur aus einem Datum besteht, wird eine Liste dieser angegeben.

Die üblichen Einstellmöglichkeiten für das Aussehen der Kachel gibt es beim Scanner auch.

### <span style="color:#3d85c6"> Kachel "Ordner"</span>

Die Kachel dient dem Gruppieren von mehreren Kacheln und dem aufräumen vom Homescreen.
Es können beliebige Kacheln in den Ordner untergebracht werden.

Die Ordnerkachel funktioniert analog zum App-Ordner auf dem Homescreen des Smartphones.
Hier werden nur die Kacheln in den Ordner nicht per Drag-and-Drop verschoben, 
sondern in den Einstellungen der Ordnerkachel aus der Kachelliste ausgewählt.

## <span style="color:#0b5394">Listen</span>

Die Kachel vom Typ "Einfache Liste" ist die symbolische Darstellung einer Liste im Homescreen. Sie kann mit dem App-Icon einer App auf dem Homescreen eines Smartphones verglichen werden. Wird eine Kachel aufgerufen,
wird zunächst die gesamte Liste mit Inhalten (reduzierter Inhalt in der Listenansicht) angezeigt. Wird anschließend ein Listeneintrag ausgewählt, wird der entsprechende Datensatz angezeigt. 

## <span style="color:#0b5394">Einträge</span>

Eine Liste besteht im Detail aus diversen Listeneinträgen. Diese sind also der Inhalt dieser Liste. 
Je nach Benennung der einzelnen
[Bausteine](/docs/record-spec-settings/record-spec-settings.html)
innerhalb dieser Liste und deren Inhalte können diese Listeneinträge individuell jeden denkbaren Datensatz
digitalisieren.

## <span style="color:#0b5394">Bausteine</span>

Ein Listeneintrag besteht aus verschiedenen
[Bausteinen](/docs/record-spec-settings/record-spec-settings.html)
, die in Abschnitten in sinnvoller Weise aneinander gereiht werden. Durch das Betiteln der Bausteine wird die
gewünschte Darstellung des Inhalts erreicht.
[Mehr im Abschnitt "Bausteine"](/docs/record-spec-settings/record-spec-settings.html)

## <span style="color:#0b5394">Zusammenfassung der Programmstruktur</span>

![homescreen](\assets\software-structure\homescreen.png "homescreen")
![list-record](\assets\software-structure\list-record.png "list-record")

|Nummer     |Bezeichnung    |    Beschreibung
|1          |Home-Button    | Wechsel des Arbeitsbereichs
|2          |Kacheln        | Die Kacheln stehen symbolisch für die dahinterliegenden Listen
|3          |Einstellungen  | weitere Einstellungen
|4          |Liste          | Sammlung aller Datensätze in individueller Kurzform dargestellt
|5          |Eintrag        | Die Einträge beinhalten alle Details und Verknüpfungen der Liste
