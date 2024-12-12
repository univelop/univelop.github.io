---
layout: default
title: Import und Export
parent: Schnittstellen
---

# <span style="color:#0b5394">**Import und Export**</span>

## <span style="color:#0b5394">Arbeitsbereiche</span>

Es besteht die Möglichkeit ganze Arbeitsbereiche zu exportieren und wieder zu importieren. Im Designmodus vom Homescreen des Arbeitsbereiches
befindet sich in den Einstellungen der Button "Export". Nachdem der Button betätigt wurde, erscheint ein Popup-Fenster in dem man wählen kann, ob nur die Struktur des Arbeitsbereiches (nur Kacheln) oder ob sowohl die Struktur als auch die dazugehörigen Daten exportiert werden sollen.

![button export2](\assets\import-export\button export2.png "button export2")

Nach Betätigen des Buttons wird der Arbeitsbereich als ZIP-Datei heruntergeladen.

![button export](\assets\import-export\button export.png "button export")

Nachdem man in den Homescreen wieder zurückkehrt, kann über den Haus-Button den Arbeitsbereich
wechseln oder einen neuen anzulegen. Nachdem "+ Neuer Arbeitsbereich" ausgewählt wurde, kann zwischen den zwei
Hauptoptionen oder einer der Vorlagen gewählt werden. Über die Option "Arbeitsbereich importieren" wird ein Auswahl-Dialog geöffnet, wo
die zuvor heruntergeladene ZIP-Datei ausgewählt und anschließend eingelesen wird.

![import workspace](\assets\import-export\import workspace.png "import workspace")

## <span style="color:#0b5394">Kacheln</span>

Neben dem Export/Import von ganzen Arbeitsbereichen können alternativ lediglich einzelne Kacheln
exportiert und importiert werden. Dies ist besonders da sinnvoll, wo mit mehreren Arbeitsbereichen
innerhalb einer Organisation gearbeitet wird oder Standard-Kacheln vorhanden sind, welche auf andere
Umgebungen übertragen werden sollen. Hier sind vor allem Kacheln zu nennen, die keine oder nur geringe Datensatz-Verknüpfungen
haben, welche u. U. wieder hergestellt werden müssten. Solche Kacheln beinhalten meistens Stammdaten,
wie zum Beispiel Kunden, Mitarbeiter o. ä.

Im Kachel-Designmodus befindet sich, wie beim Export von Arbeitsbereichen, in den Kacheleinstellungen ein Button "Export".
Beim Exportieren von Kacheln wird eine JSON-Datei heruntergeladen, in welcher sich der Quellcode für
die Kachel befindet.

![export tile](\assets\import-export\export tile.png "export tile")

Im Designmodus des Ziel-Arbeitsbereichs, in dem die Kachel importiert werden soll, kann über den Button
"Kachel importieren" die zuvor heruntergeladene JSON-Datei über einen Auswahl-Dialog eingelesen werden.

![import tile](\assets\import-export\import tile.png "import tile")

**Bitte beachten:**

-   Verknüpfungen werden u. U. nicht übernommen, wenn gleiche Kachelbezeichnungen und Inhalte **nicht**
    im neuen Arbeitsbereich vorhanden sind.
-   Daten / Inhalte werden **nicht übernommen** und ebenso **nicht überschrieben**.
-   Word-Vorlagen werden **nicht** übernommen.
-   es kann immer nur in eine Richtung importiert / exportiert werden. Ist ein Arbeitsbereich vorhanden, der
    **zentral alle** Kacheln der Organisation beinhaltet, kann **nicht** aus einem anderen Arbeitsbereich heraus
    in diese Umgebung importiert werden.

## <span style="color:#0b5394">Mitglieder und Nutzerrollen mit Excel</span>

Die Datensätze zu allen Mitgliedern sowie den angelegten Nutzerrollen können über Excel-Dateien (.xlsx) im- und exportiert werden.

### <span style="color:#0b5394">Im- und Export von Mitgliedern</span>

Um die Mitglieder eines Arbeitsbereiches zu verwalten, können Admins die Mitglieder im- als auch exportieren.
Beim Export gibt es die Spalten für personenbezogenen Daten (ID, E-Mail, Vor-, Nachname) sowie die aktiven und die möglichen Rollen und Teams eines Mitgliedes.
Den Import von Mitgliedern kann man z. B. nutzen, um damit gleich mehrere neue Mitglieder in seinen Arbeitsbereich hinzuzufügen.
Dabei muss neben Vor-, Nachname und E-Mail in der Spalte _Passwort_ ein Passwort für das jeweilige Mitglied angegeben werden.
Optional können mögliche Teams und Rollen angegeben und eine aktive Rolle sowie ein aktives Team angegeben werden.
Die Spalte _Passwort_ wird nur beim Import genutzt und bleibt beim Export leer.

### <span style="color:#0b5394">Im- und Export von Rollen</span>

Durch den Im- und Export von Nutzerrollen können die Rechte jeder Rolle für jede einzelne Kachel konfiguriert werden. Ausgenommen davon sind die standardmäßigen Rollen _Admin_ und _Besitzer_. Jede Zeile gibt an, ob ein Nutzer mit dieser Rolle die Datensätze einer Kachel lesen, anlegen, bearbeiten, löschen und importieren kann. Für das Lesen, Bearbeiten sowie das Löschen können zusätzlich Filter angegeben werden, welche die Aktionen, statt sie zu verbieten, einschränkt.

### <span style="color:#0b5394">Wichtige Hinweise zum Im- und Export</span>

Die Hinweise zu Im- und Export von Datensätzen gelten auch für Mitglieder und Nutzerrollen.

## <span style="color:#0b5394">Datensätze und Inhalte</span>

<span style="color:#3d85c6">_Empfohlen für fortgeschrittene Nutzer_</span>

### <span style="color:#0b5394">Datensatzimport / -export mit Excel</span>

Ebenso können auch Datensätze importiert und exportiert werden. Dies ist besonders dann sinnvoll,
wenn viele Datensätze und Stammdaten erfasst werden sollen. Der Im- und Export erfolgt immer im
Bearbeitungsmodus über die drei Punkte der Listenansicht.

![import export record](\assets\import-export\import export record.png "import export record")

Die Ein- und Ausgabedatei ist im Excel-Format. Zusätzliche Hinweise in den folgenden zwei Szenarien:.

-   <span style="color:#0b5394">**1. Szenario // Erstimport von Daten**</span>  
     In die Univelop App soll eine große Anzahl an Datensätzen überführt werden.
    Es ist bereits eine Liste vorhanden, welche die Datenstruktur widerspiegelt.
    In Univelop sollte ein Dummy-Datensatz angelegt werden. Anschließend wird die Liste in Excel
    exportiert. Dies ist nun die Importvorlage.
    Sind alle Datensätze in der Vorlage erfasst, kann diese über die Importfunktion importiert werden.
    Das Dokument wird geprüft und ein Pop-Up erscheint, welches mitteilt wie viele Datensätze zum Import
    gefunden wurden.

-   <span style="color:#0b5394">**2. Szenario // Aktualisierung von Daten**</span>  
     Es sind bereits viele Daten in einer Liste und es sollen nur bestimmte Dinge geändert werden,
    es wäre aber zu aufwendig dies bei allen Datensätzen einzeln zu machen.
    Hier werden ebenfalls alle Datensätze in Excel exportiert. Wir empfehlen nun sämtliche Zeilen und
    Spalten zu löschen, welche nicht betroffen sind.

    **ACHTUNG! Die ID (letzte Spalte) muss immer stehen bleiben!**

    Anschließend können in der exportierten Excel Liste alle betreffenden Datensätze entsprechend geändert
    werden. Nach der Änderung in der Excel Liste kann diese wieder über die Importfunktion importiert werden.
    Ein Pop-Up erscheint, welches mitteilt wie viele Datensätze zum Import bzw. zur Aktualisierung gefunden
    wurden.

### <span style="color:#0b5394">Komplexe Bausteine beim Im- und Export</span>

Beim Im- und Export von Datensätzen unterscheidet die App zwischen zwei Arten von Bausteinen. Es gibt die simplen Bausteine, wie z. B. der Baustein _Nummer_, welcher nur aus einer Spalte besteht und somit einfach ein- und ausgelesen werden kann. Die zweite Art bilden die komplexen Bausteine, welche sich nicht durch nur eine Spalte sinnvoll im- und exportieren lassen. Diese bieten in den Einstellungen für jedes wichtige Feld an, einen eindeutigen technischen Namen zu setzten, damit die Werte des Bausteins eindeutig beim Export aufgeteilt werden.

![setting interval](\assets\import-export\setting interval.png "setting interval")

Als Beispiel dazu ist der Baustein _Zeitspanne_ mit einer Anfangs- und Endzeit sowie der Gesamtzeit und einer Pausenzeit.

### <span style="color:#0b5394">**Wichtige Hinweise zum Excel Im- und Export**</span>

-   Die ID eines Datensatzes (letzte Spalte) ist einzigartig. Über diese erkennt das System, welcher
    Datensatz gemeint ist. Werden Daten ohne ID importiert, werden automatisch neue Datensätze angelegt.
-   Wir empfehlen vor jedem Import einen Export. So sind alle Spalten richtig benannt und die Zuordnung
    bei dem Importvorgang ist größtenteils sichergestellt.
-   Es empfiehlt sich die Excel Liste immer regelmäßig zwischenzuspeichern, sodass diese im Zweifel
    wiederhergestellt werden kann.

Leider sind wir beim Im- und Export von dem Excel-Package abhängig und das System vertauscht in dieser
Kombination mit Excel hin und wieder Spalten. Daher empfehlen wir immer alle unnötigen Zeilen und Spalten
zu löschen. Bei Problemen stehen stehen wir gerne mit Rat und Tat zur Seite.

### <span style="color:#0b5394">Dateiimport / -export via PowerShell</span>

Mit den Bausteinen _Datei Upload_ und _PDF erstellen_kann ebenfalls eine Synchronisation mit PowerShell erfolgen.

Wird die Option in den Bausteineinstellungen aktiviert, kann man sich in einfachen Schritten ein PowerShell-Skript erstellen und herunterladen. Dieses erstellte Skript kann dann entweder manuell ausgeführt werden oder in der Windows Aufgabenplanung verwendet werden, um einen Automatismus für das Hochladen neuer Dokumente einzurichten.

**Bei der Nutzung von PowerShell empfehlen wir Version 6 oder höher. Zu beachten sind ebenfalls die gesetzten Richtlinieneinstellungen im ausführenden Benutzer bzw. auf dem Server.**

<span style="color:#0b5394">**Baustein _Datei Upload_**</span>  
Um über den Baustein _Datei Upload_ ein Skript für den Automatismus zu erstellen, geht man wie folgt vor:

![settings file upload powershell](\assets\import-export\brick settings file upload powershell.png "settings file upload powershell")

1. <span style="color:#0b5394">**"Per PowerShell mit Dateisystem synchronisieren" aktivieren**</span>
2. <span style="color:#0b5394">**Angabe des Pfades unter "Sync mit Ordner"**</span>
3. <span style="color:#0b5394">**ggf. "Löschen Dateien vor Synchronisation" aktivieren**</span>
    - aktiviert **nur** die Löschung in Univelop, nicht im Quellordner!
4. <span style="color:#0b5394">**Dateitypen berücksichtigen**</span>
    - hier werden die zu berücksichtigen Dateiendungen eingetragen (z. B. PDF, JPG, PNG, etc.)  
      Sollen alle Dateien berücksichtigt werden, kann dieses Feld leer bleiben (Standard: alle Dateiendungen)
5. <span style="color:#0b5394">**Skript herunterladen**</span>

Dieses Skript kann nun via PowerShell manuell ausgelöst werden, oder in die Windows Aufgabenplanung eingebettet werden, sodass es an bestimmten Tagen zu bestimmten Uhrzeiten ausgeführt wird.

<span style="color:#0b5394">**Baustein _PDF erstellen_**</span>  
Wird mit dem Baustein _PDF erstellen_ eine PDF generiert, kann die erzeugte PDF ebenfalls via PowerShell an einem bestimmten Zielordner abgelegt werden.

![settings create pdf powershell](\assets\import-export\brick settings create pdf powershell.png "settings create pdf powershell")

1. <span style="color:#0b5394">**"Per PowerShell mit Dateisystem synchronisieren" aktivieren**</span>
2. <span style="color:#0b5394">**Angabe des Pfades unter "Sync mit Ordner"**</span>
3. <span style="color:#0b5394">**Skript herunterladen**</span>

Auch dieses Skript kann nun via PowerShell manuell ausgelöst werden, oder in die Windows Aufgabenplanung eingebettet werden, sodass es an bestimmten Tagen zu bestimmten Uhrzeiten ausgeführt wird.  
Beispielsweise füllen Mitarbeiter einen Stundennachweis aus und erzeugen daraus eine PDF. Alle erzeugten Stundennachweise werden in einem Ordner "Stundennachweise Gesamt" gesammelt. Durch die aktivierte Option "Mit PowerShell synchronisieren" können die Mitarbeiter wie gewohnt Arbeitszeiten über Univelop erfassen, erzeugen die PDF und für die Synchronisation via PowerShell ist vorbereitet. Wird das erzeugte Skript manuell oder über die Windows Aufgabenplanung ausgeführt, werden die erzeugten PDFs dem Ordner "Stundennachweise Gesamt" hinzugefügt.

<span style="color:#0b5394">**Beispiel für die Nutzung des Windows Aufgabenplaners:**</span>

![example windows task scheduler](\assets\import-export\example windows task scheduler.png "example windows task scheduler")
