---
layout: title
title: PDF erstellen
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 24
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/create-pdf.html
---

Mit dem Baustein _PDF erstellen_ kann, ausgehend von einer Word Vorlage, eine PDF Datei erstellt
und, wenn gewünscht, per E-Mail versendet. Die Word-Datei kann individuell gestaltet werden und sich
auf die Liste beziehen in welcher die PDF-Datei erstellt wird. Alle darstellbaren Inhalte sind andruckbar,
neben Buchstaben und Zahlen auch Bilddateien und die Unterschrift. Zusätzlich können verknüpfte Datensatz-Listen
ausgegeben werden.  
Als zusätzliches Feature lassen sich generierte PDFs über ein selbsterstelltes Skript in einem bestimmten Zielordner automatisch ablegen. (s. Import und Export / Dateiimport / -export via PowerShell)

## <span style="color:#0b5394">Vorbereitung der Word-Vorlage</span>

![create pdf](\assets\record-spec-settings\1create pdf.png "create pdf")

1. <span style="color:#0b5394">**Ausgabe von Einzelwerten**</span>  
   Die Ausgabe von Einzelwerten erfolgt indem in der Word-Vorlage der technische Name eines Bausteins innerhalb der
   zwei geschwungenen Klammern gesetzt wird. Beispiel: Rechnungsnummer ${belegnummer}.

2. <span style="color:#0b5394">**Ausgabe von Schaltern**</span>  
   Die Ausgabe des
   Bausteins _Schalter_
   kann im Designmodus in den Einstellungen des Bausteins unter "Darstellung als Ausdruck" als "Checkbox",
   "Ja / Nein" oder "Nennen des Inhalts" festgelegt werden.

3. <span style="color:#0b5394">**Ausgabe von Datensatz-Liste**</span>  
   Um die Daten eines Baustein _Datensatz Liste_ auszugeben, muss in der Word-Vorlage eine entsprechende Tabelle gezeichnet werden.

    So könnte die Tabelle zur Ausgabe einer ganzen Liste, mittels Serienbrieffunktionalität aussehen:

    |**Arbeitszeit** |**Mitarbeiter**|
    |${repeat(mitarbeiterZeiten)}            |           |
    |${mitarbeiterZeiten.Arbeitszeit} |${mitarbeiterZeiten.name}|
    |${endrepeat} | |

    Die gezeichnete Tabelle in der Word-Vorlage kann um beliebig viele Spalten erweitert werden, solange
    diese in der Datensatz-Liste vorkommen.

    Verschachtelte Aufrufe des `repeat(...)` ineinander sind auch möglich. Es muss jedoch eine Liste referenziert werden, welche von der umschließenden Liste erreichbar ist (z. B. durch einen Baustein Datensatz-Liste). Auch wichtig ist, dass bei dem `endrepeat` der Name der Liste angegeben wird, über die iteriert wird. Dadurch kann z. B. die tägliche Nutzungszeit einer Baumaschine, welche aus Einsätzen bei mehreren Kunden besteht, geordnet und mit einer Vorlage zu einem PDF-Dokument erzeugt werden.
    Eine solche Tabelle könnte wie folgt aussehen:

    |**Maschine** |**Nutzzeit** |**Auftrag**|
    |${repeat(maschZeiten)}             |                           |           |
    |${maschZeiten.maschine} |${maschZeiten.gesDauer}    |           |
    |${repeat(maschZeiten.einsaetze)} | | |
    | |${maschZeiten.einsaetze.dauer}|${maschZeiten.einsaetze.auftrNr}|
    |${endrepeat(maschZeiten.einsaetze)}|                           |           |
    |${endrepeat} | | |

4. <span style="color:#0b5394">**Ein/-Ausblenden von Inhalten**</span>  
   Sollten gewisse Inhalte zB abhängig von einem Schalter ausgeblendet werden, kann dies über die `showIf` bzw. `hideIf` Funktion realisiert werden.

    Wenn wir das obige Beispiel (Zeiterfassung) erweitern möchten, und zB anzeigen möchten, dass es sich bei der aufgeführten Zeit um Reisezeit handelte kann man zB so etwas machen:

    |**Arbeitszeit** |**Mitarbeiter**| |
    |${repeat(mitarbeiterZeiten)}            |           | |
    |${mitarbeiterZeiten.Arbeitszeit} |${mitarbeiterZeiten.name}| ${showIf(mitarbeiterZeit.istReisezeit)}Reisezeit${endShowIf(mitarbeiterZeit.istReisezeit)} |
    |${endrepeat} | |

    In diesem Beispiel wird der Text "Reisezeit" nur angezeigt, wenn der Schalter `istReisezeit` gesetzt ist. `showIf` und `hideIf` können auch auch außerhalb von `repeat`-Blöcken verwendet werden, wichtig ist nur, das ein `endShowIf` bzw. `endHideIf` folgt.

    _Hinweis:_ `showIf` und `hideIf` können nur auf Schalter / Ja-/Nein-Formel-Bausteine angewendet werden. Die direkte Eingabe von Formeln ist nicht möglich.

## <span style="color:#0b5394">Einstellungen des Bausteins _PDF erstellen_</span>

![create pdf settings](\assets\record-spec-settings\2create pdf settings.png "create pdf settings")

1. <span style="color:#0b5394">**Dateivorlage hinzufügen**</span>  
   Über den Plus-Button öffnet sich ein Auswahl-Dialog, worüber die Word-Vorlage ausgewählt wird. Anschließend wird
   sie in den Baustein hochgeladen.

2. <span style="color:#0b5394">**abweichender bzw. dynamischer Dateiname**</span>  
   Der Dateiname kann ebenfalls abweichend und dynamisch gewählt werden. Soll der Dateiname zum Teil dynamisch sein
   kann ebenfalls ein Platzhalter mit Bezug zu einem Baustein eingesetzt werden. Soll die PDF-Datei zum Beispiel so
   heißen wie die Belegnummer, können Sie hier ${belegnummer} eingeben.

3. <span style="color:#0b5394">**automatische Dateiübertragung per PowerShell**</span>  
   Zur automatischen Dateiübertragung können Sie auch Dateien Per Powershell mit dem Dateisystem
   synchronisieren.

4. <span style="color:#0b5394">**Direkter Mailversand**</span>  
   Die erstellte PDF kann über diese Funktion direkt per E-Mail versendet werden.

## <span style="color:#0b5394">Einstellungen des direkten Mail-Versands</span>

Um eine E-Mail Adresse für den direkten Mailversand zu verwenden, benötigt der Baustein _PDF erstellen_ einen Empfänger über einen Baustein _Textfeld_, wo die entsprechende E-Mail Adresse eingetragen wird.
Bleibt die E-Mail Adresse für den direkten Mailversand immer gleich, kann der Baustein _Textfeld_ versteckt und als Standard-Text wird die E-Mail Adresse hinterlegt.  
Wechselt die E-Mail Adresse je nach Anforderung (z. B. unterschiedliche Vorgesetzte, unterschiedliche Lieferanten pro Artikel, etc.) kann der benötigte Baustein _Textfeld_, bezogen auf die genannten Beispiele, in den Stammdaten des Mitarbeiters oder des Artikels aufgeführt werden und bei der Auswahl als Wert übernommen werden (s. Verknüpfung über den Baustein _Datensatz_).

Bei der Auswahl der Option "direkter Mailversand" können weitere Einstellungen vorgenommen werden.

![create pdf settings](\assets\record-spec-settings\1create pdf settings.png "create pdf settings")

1. <span style="color:#0b5394">**CC-Empfänger**</span>
2. <span style="color:#0b5394">**Benutzer in CC hinzufügen**</span>  
   der auslösende Benutzer der PDF-Erstellung wird automatisch in CC genommen (z. B. bei Urlaubsanträge, etc.)
3. <span style="color:#0b5394">**BCC**</span>
4. <span style="color:#0b5394">**Betreff vordefinieren**</span>
5. <span style="color:#0b5394">**Inhalt der E-Mail vordefinieren**</span>  
   Über ${} kann ebenfalls der Inhalt dynamisch gestaltet werden
