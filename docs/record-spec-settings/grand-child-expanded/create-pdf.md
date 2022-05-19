---
layout: default
title: PDF erstellen
parent: Erweiterte Bausteine
grand_parent: Die Bausteine und deren Einstellungen
nav_order: 11
---

# <span style="color:#0b5394"><span class="material-icons">print</span> **Baustein *PDF erstellen***</span>

Mit dem Baustein *PDF erstellen* kann, ausgehend von einer Word Vorlage, eine PDF Datei erstellt
und, wenn gewünscht, per E-Mail versendet. Die Word-Datei kann individuell gestaltet werden und sich
auf die Liste beziehen in welcher die PDF-Datei erstellt wird. Alle darstellbaren Inhalte sind andruckbar,
neben Buchstaben und Zahlen auch Bilddateien und die Unterschrift. Zusätzlich können verknüpfte Datensatz-Listen
ausgegeben werden.

**Vorbereitung in der Wordvorlage:**  
![create pdf](\assets\record-spec-settings\1create pdf.png "create pdf")  
1. Ausgabe von Einzelwerten  
    Die Ausgabe von Einzelwerten erfolgt indem in der Wordvorlage der technische Name eines Bausteins innerhalb der
    zwei geschwungenen Klammern gesetzt wird. Beispiel: Rechnungsnummer ${belegnummer}.

2. Ausgabe von Schaltern  
    Die Ausgabe des
    [Bausteins *Schalter*](/docs/record-spec-settings/grand-childs-form/switch.html)
    kann im Designmodus in den Einstellungen des Bausteins unter "Darstellung als Ausdruck" als "Checkbox",
    "Ja / Nein" oder "Nennen des Inhalts" festgelegt werden.

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

![create pdf settings](\assets\record-spec-settings\1create pdf settings.png "create pdf settings")

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
