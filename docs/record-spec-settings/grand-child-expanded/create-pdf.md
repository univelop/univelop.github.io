---
layout: default
title: PDF erstellen
parent: Erweiterte Bausteine
grand_parent: Die Bausteine und deren Einstellungen
nav_order: 14
---

# <span style="color:#0b5394"><span class="material-icons">print</span> **Baustein *PDF erstellen***</span>

Mit dem Baustein *PDF erstellen* kann, ausgehend von einer Word Vorlage, eine PDF Datei erstellt
und, wenn gewünscht, per E-Mail versendet. Die Word-Datei kann individuell gestaltet werden und sich
auf die Liste beziehen in welcher die PDF-Datei erstellt wird. Alle darstellbaren Inhalte sind andruckbar,
neben Buchstaben und Zahlen auch Bilddateien und die Unterschrift. Zusätzlich können verknüpfte Datensatz-Listen
ausgegeben werden.  
Als zusätzliches Feature lassen sich generierte PDFs über ein selbsterstelltes Skript in einem bestimmten Zielordner automatisch ablegen. (s. [Import und Export / Dateiimport / -export via PowerShell](/docs/import-export.html#dateiimport---export-via-powershell))

## <span style="color:#0b5394">Vorbereitung der Wordvorlage</span>  

![create pdf](\assets\record-spec-settings\1create pdf.png "create pdf")  
1. <span style="color:#0b5394">**Ausgabe von Einzelwerten**</span>  
    Die Ausgabe von Einzelwerten erfolgt indem in der Wordvorlage der technische Name eines Bausteins innerhalb der
    zwei geschwungenen Klammern gesetzt wird. Beispiel: Rechnungsnummer ${belegnummer}.

2. <span style="color:#0b5394">**Ausgabe von Schaltern**</span>  
    Die Ausgabe des
    [Bausteins *Schalter*](/docs/record-spec-settings/grand-childs-form/switch.html)
    kann im Designmodus in den Einstellungen des Bausteins unter "Darstellung als Ausdruck" als "Checkbox",
    "Ja / Nein" oder "Nennen des Inhalts" festgelegt werden.

3. <span style="color:#0b5394">**Ausgabe von Datensatz-Liste**</span>  
    Um die Daten eines [Baustein *Datensatz Liste*](/docs/record-spec-settings/grand-child-expanded/record-list.html) auszugeben, muss in der Word-Vorlage eine entsprechende Tabelle gezeichnet werden.
    
    So könnte die Tabelle zur Ausgabe einer ganzen Liste, mittels Serienbrieffunktionalität aussehen:

    |**Arbeitszeit**                         |**Mitarbeiter**|
    |${repeat(mitarbeiterzeiten)}            |           |
    |${mitarbeiterzeiten.Arbeitszeit}        |${mitarbeiterzeiten.name}|
    |${endrepeat}                            |                         |

    Die gezeichnete Tabelle in der Wordvorlage kann um beliebig viele Spalten erweitert werden, solange
    diese in der Datensatz-Liste vorkommen.  
    **Bitte beachten:**  
    Innerhalb einer gezeichneten Tabelle kann mit der "Repeat"-Funktion nicht auf mehrere Datensatz Listen zugegriffen werden.
    Mit der "Repeat"-Funktion kann sich immer nur auf **eine** Datensatz Liste zur Zeit bezogen werden.

## <span style="color:#0b5394">Einstellungen des Bausteins *PDF erstellen*</span>

![create pdf settings](\assets\record-spec-settings\2create pdf settings.png "create pdf settings")

1. <span style="color:#0b5394">**Dateivorlage hinzufügen**</span>  
    Über den Plus-Button öffnet sich ein Auswahldialog, worüber die Word-Vorlage ausgewählt wird. Anschließend wird
    sie in den Baustein hochgeladen.

2. <span style="color:#0b5394">**abweichender bzw. dynamischer Dateinahme**</span>  
    Der Dateiname kann ebenfalls abweichend und dynamisch gewählt werden. Soll der Dateiname zum Teil dynamisch sein
    kann ebenfalls ein Platzhalter mit Bezug zu einem Baustein eingesetzt werden. Soll die PDF-Datei zum Beispiel so
    heißen wie die Belegnummer, können Sie hier ${belegnummer} eingeben.

3. <span style="color:#0b5394">**automatische Dateiübertragung per PowerShell**</span>  
    Zur automatischen Dateiübertragung können Sie auch Dateien Per Powershell mit dem Dateisystem
    synchronisieren.

4. <span style="color:#0b5394">**Direkter Mailversand**</span>  
    Die erstellte PDF kann über diese Funktion direkt per E-Mail versendet werden.

## <span style="color:#0b5394">Einstellungen des direkten Mailversands</span>
Um eine E-Mail Adresse für den direkten Mailversand zu verwenden, benötigt der Baustein *PDF erstellen* einen Empfänger über einen [Baustein *Textfeld*](/docs/record-spec-settings/grand-childs-form/text.html), wo die entsprechende E-Mail Adresse eingetragen wird.
Bleibt die E-Mail Adresse für den direkten Mailversand immer gleich, kann der [Baustein *Textfeld*](/docs/record-spec-settings/grand-childs-form/text.html) versteckt und als Standard-Text wird die E-Mail Adresse hinterlegt.  
Wechselt die E-Mail Adresse je nach Anforderung (z. B. unterschiedliche Vorgesetzte, unterschiedliche Lieferaten pro Artikel, etc.) kann der benötigte [Baustein *Textfeld*](/docs/record-spec-settings/grand-childs-form/text.html), bezogen auf die genannten Beispiele, in den Stammdaten des Mitarbeiters oder des Artikels aufgeführt werden und bei der Auswahl als Wert übernommen werden (s. [Verknüpfung über den Baustein *Datensatz*](/docs/link-lists.html)).

Bei der Auswahl der Option "direkter Mailversand" können weitere Einstellungen vergenommen werden.

![create pdf settings](\assets\record-spec-settings\1create pdf settings.png "create pdf settings")

1. <span style="color:#0b5394">**CC-Empfänger**</span>
2. <span style="color:#0b5394">**Benutzer in CC hinzufügen**</span>  
    der auslösende Benutzer der PDF-Erstellung wird automatisch in CC genommen (z. B. bei Urlaubsanträge, etc.)
3. <span style="color:#0b5394">**BCC**</span>
4. <span style="color:#0b5394">**Betreff vordefinieren**</span>
5. <span style="color:#0b5394">**Inhalt der E-Mail vordefinieren**</span>  
    Über ${} kann ebenfalls der Inhalt dynamisch gestaltet werden