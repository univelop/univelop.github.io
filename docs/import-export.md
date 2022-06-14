---
layout: default
title: Import und Export
nav_order: 7
---

# <span style="color:#0b5394">**Import und Export**</span>

## <span style="color:#0b5394">Arbeitsbereiche</span>

Es besteht die Möglichkeit ganze
[Arbeitsbereiche](/docs/software-structure.html#arbeitsbereiche "Die Programmstruktur // Arbeitsbereiche")
zu exportieren und wieder zu importieren. Im Designmodus des Homescreens des Arbeitsbereiches
befindet sich in den Einstellungen der Button "Export". Nachdem der Button betätigt wurde, erscheint ein Popup-Fenster in dem man wählen kann, ob nur die Struktur des Arbeitsbereiches (nur Kacheln) oder ob sowohl die Struktur als auch die dazugehörigen Daten exportiert werden sollen.

![button export2](\assets\import-export\button export2.png "button export2")

Nach Betätigen des Buttons wird der Arbeitsbereich als ZIP-Datei heruntergeladen.

![button export](\assets\import-export\button export.png "button export")

Nachdem man in den Homescreen wieder zurückkehrt, kann über den Haus-Button den Arbeitsbereich
wechseln oder einen
["+ Neuer Arbeitsbereich"](/docs/start-app.html#erstellen-eines-arbeitsbereichs "Der Start in die App // Erstellen eines Arbeitsbereichs")
einen neuen anzulegen. Nachdem "+ Neuer Arbeitsbereich" ausgewählt wurde, kann zwischen den zwei
Hauptoptionen oder einer der [Vorlagen](/docs/start-app.html#erstellen-eines-arbeitsbereichs)
gewählt werden. Über die Option "Arbeitsbereich importieren" wird ein Auswahldialog geöffnet, wo
die zuvor heruntergeladene ZIP-Datei ausgewählt und anschließend eingelesen wird.

![import workspace](\assets\import-export\import workspace.png "import workspace")

## <span style="color:#0b5394">Kacheln</span>

Neben dem Export/Import von ganzen Arbeitsbereichen können alternativ lediglich einzelne
[Kacheln](/docs/software-structure.html#kacheln)
exportiert und importiert werden. Dies ist besonders da sinnvoll, wo mit mehreren Arbeitsbereichen
innerhalb einer Organisation gearbeitet wird oder Standard-Kacheln vorhanden sind, welche auf andere
Umgebungen übertragen werden sollen. Hier sind vor allem Kacheln zu nennen, die keine oder nur geringe
[Datensatz-Verknüpfungen](/docs/link-lists.html "Verknüpfen von Listen")
haben, welche u. U. wieder hergestellt werden müssten. Solche Kacheln beinhalten meistens Stammdaten,
wie zum Beispiel Kunden, Mitarbeiter o. ä.

Im
[Kachel-Designmodus](/docs/design-mode-settings.html#kachel "Die Designmodi un deren Einstellungen // Kachel")
befindet sich, wie beim Export von Arbeitsbereichen, in den Kacheleinstellungen ein Button "Export".
Beim Exportieren von Kacheln wird eine JSON-Datei heruntergeladen, in welcher sich der Quellcode für
die Kachel befindet.

![export tile](\assets\import-export\export tile.png "export tile")

Im Designmodus des Ziel-Arbeitsbereichs, in dem die Kachel importiert werden soll, kann über den Button
"Kachel importieren" die zuvor heruntergeladene JSON-Datei über einen Auswahldialog eingelesen werden.

![import tile](\assets\import-export\import tile.png "import tile")

**Bitte beachten:**  
- Verknüpfungen werden u. U. nicht übernommen, wenn gleiche Kachelbezeichnungen und Inhalte **nicht**
im neuen Arbeitsbereich vorhanden sind.
- Daten / Inhalte werden **nicht übernommen** und ebenso **nicht überschrieben**.
- Word-Vorlagen werden **nicht** übernommen.
- es kann immer nur in eine Richtung importiert / exportiert werden. Ist ein Arbeitsbereich vorhanden, der
**zentral alle** Kacheln der Organisation beinhaltet, kann **nicht** aus einem anderen Arbeitsbereich heraus
in diese Umgebung importiert werden.

## <span style="color:#0b5394">Datensätze und Inhalte</span>
<span style="color:#3d85c6">*Empfohlen für fortgeschrittene Nutzer*</span>  

Ebenso können auch Datensätze importiert und exportiert werden. Dies ist besonders dann sinnvoll,
wenn viele Datensätze und Stammdaten erfasst werden sollen. Der Im- und Export erfolgt immer im 
Bearbeitungsmodus über die drei Punkte der Listenansicht.

![import export record](\assets\import-export\import export record.png "import export record")

Die Ein- und Ausgabedatei ist im Excel-Format. Zusätzliche Hinweise in den folgenden zwei Szenarien:.

- <span style="color:#0b5394">**1. Szenario // Erstimport von Daten**</span>  
    In die Univelop App soll eine große Anzahl an Datensätzen überführt werden.
    Es ist bereits eine Liste vorhanden, welche die Datenstruktur wiederspiegelt.
    In Univelop sollte ein Dummy-Datensatz angelegt werden. Anschließend wird die Liste in Excel
    exportiert. Dies ist nun die Importvorlage.
    Sind alle Datensätze in der Vorlage erfasst, kann diese über die Importfunktion importiert werden. 
    Das Dokument wird geprüft und ein Pop-Up erscheint, welches mitteilt wie viele Datensätze zum Import
    gefunden wurden.

- <span style="color:#0b5394">**2. Szenario // Aktualisierung von Daten**</span>  
    Es sind bereits viele Daten in einer Liste und es sollen nur bestimmte Dinge geändert werden,
    es wäre aber zu aufwendig dies bei allen Datensätzen einzeln zu machen.
    Hier werden ebenfalls alle Datensätze in Excel exportiert. Wir empfehlen nun sämtliche Zeilen und
    Spalten zu löschen, welche nicht betroffen sind.

    **ACHTUNG! Die ID (letzte Spalte) muss immer stehen bleiben!**

    Anschließend können in der exportierten Excelliste alle betreffenden Datensätze entsprechend geändert
    werden. Nach der Änderung in der Excelliste kann diese wieder über die Importfunktion importiert werden.
    Ein Pop-Up erscheint, welches mitteilt wie viele Datensätze zum Import bzw. zur Aktualisierung gefunden
    wurden.

### <span style="color:#0b5394">**Wichtige Hinweise zum Excel Im- und Export**</span>

- Die ID eines Datensatzes (letzte Spalte) ist einzigartig. Über diese erkennt das System, welcher
Datensatz gemeint ist. Werden Daten ohne ID importiert, werden automatisch neue Datensätze angelegt.
- Wir empfehlen vor jedem Import einen Export. So sind alle Spalten richtig benannt und die Zuordnung
bei dem Importvorgang ist größtenteils sichergestellt.
- Es empfiehlt sich die Excelliste immer regelmäßig zwischenzuspeichern, sodass diese im Zweifel
wiederhergestellt werden kann.

Leider sind wir beim Im- und Export von dem Excel-Package abhängig und das System vertauscht in dieser
Kombination mit Excel hin und wieder Spalten. Daher empfehlen wir immer alle unnötigen Zeilen und Spalten
zu löschen. Bei Problemen stehen stehen wir gerne mit Rat und Tat zur Seite.