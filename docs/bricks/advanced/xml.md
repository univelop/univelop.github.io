---
layout: title
title: XML erstellen
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 26
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/xml.html
---

Mit dem Baustein _XML erstellen_ kann, ausgehend von einer XML-Vorlage, eine XML-Datei erstellt
und, wenn gewünscht, per E-Mail versendet werden. Die XML-Datei kann individuell gestaltet werden und sich
auf die Liste beziehen in welcher die XML-Datei erstellt wird. Alle darstellbaren Inhalte können
ausgegeben werden, neben Buchstaben und Zahlen auch strukturierte Daten und verknüpfte Datensatz-Listen.
Als zusätzliches Feature lassen sich generierte XML-Dateien über ein selbsterstelltes Skript in einem bestimmten Zielordner automatisch ablegen. (s. Import und Export / Dateiimport / -export via PowerShell)

Im Gegensatz zum PDF-Baustein verwendet der XML-Baustein spezielle XML-Tags mit dem `uni:`-Namespace für Schleifen und bedingte Anzeigen, anstatt der `${repeat(...)}` Syntax.

{: .hint }
Dieser Baustein ist ein Power-Feature und erfordert entsprechende Berechtigung.

## <span style="color:#0b5394">Vorbereitung der XML-Vorlage</span>

1. <span style="color:#0b5394">**Ausgabe von Einzelwerten**</span>  
   Die Ausgabe von Einzelwerten erfolgt, indem in der XML-Vorlage der technische Name eines Bausteins innerhalb von
   zwei geschwungenen Klammern mit einem Dollar-Zeichen davor gesetzt wird. Beispiel: `${belegnummer}` für die Ausgabe einer Belegnummer.

2. <span style="color:#0b5394">**Ausgabe von Datensatz-Listen**</span>  
   Um die Daten eines Baustein _Datensatz Liste_ auszugeben, werden spezielle XML-Tags mit dem `uni:` Namespace verwendet. Das `<uni:repeat>` Tag definiert, über welche Liste iteriert werden soll.

    So könnte die XML-Struktur zur Ausgabe einer ganzen Liste aussehen:

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <mitarbeiterListe xmlns:uni="http://univelop.com/xml">
        <uni:repeat ref="mitarbeiterZeiten" name="mitarbeiter">
            <mitarbeiter>
                <arbeitszeit>${mitarbeiter.Arbeitszeit}</arbeitszeit>
                <name>${mitarbeiter.name}</name>
                <index>${mitarbeiter.__index__}</index>
            </mitarbeiter>
        </uni:repeat>
    </mitarbeiterListe>
    ```

    **Attribute des `<uni:repeat>` Tags:**

    - `ref`: Der technische Name des Bausteins (Pflichtfeld)
    - `name`: Der Name, unter dem die Datensätze in der Vorlage verfügbar sind (optional, standardmäßig wird der `ref`-Wert verwendet)
    - Zusätzlich steht die Variable `__index__` für die aktuelle Iterationsnummer zur Verfügung (beginnend bei 1)

    **Unterstützte Bausteine für `<uni:repeat>`:**

    - _Datensatz Liste_
    - _Mehrfach-Datensatz-Auswahl_
    - _Tabelle_
    - _Kalender_

    Die XML-Struktur kann um beliebig viele Elemente erweitert werden, solange diese in der Datensatz-Liste vorkommen.

    Verschachtelte `<uni:repeat>` Tags sind auch möglich. Es muss jedoch eine Liste referenziert werden, welche von der umschließenden Liste erreichbar ist (z. B. durch einen Baustein Datensatz-Liste). Dadurch kann z. B. die tägliche Nutzungszeit einer Baumaschine, welche aus Einsätzen bei mehreren Kunden besteht, strukturiert in einer XML-Datei ausgegeben werden.

    Eine solche verschachtelte XML-Struktur könnte wie folgt aussehen:

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <maschinenliste xmlns:uni="http://univelop.com/xml">
        <uni:repeat ref="maschZeiten" name="maschine">
            <maschine>
                <name>${maschine.maschine}</name>
                <gesamtDauer>${maschine.gesDauer}</gesamtDauer>
                <einsaetze>
                    <uni:repeat ref="maschine.einsaetze" name="einsatz">
                        <einsatz>
                            <dauer>${einsatz.dauer}</dauer>
                            <auftragsnummer>${einsatz.auftrNr}</auftragsnummer>
                        </einsatz>
                    </uni:repeat>
                </einsaetze>
            </maschine>
        </uni:repeat>
    </maschinenliste>
    ```

3. <span style="color:#0b5394">**Ein-/Ausblenden von Inhalten**</span>  
   Sollten gewisse XML-Elemente abhängig von einer Bedingung ausgeblendet werden, kann dies über das `<uni:showIf>` Tag realisiert werden.

    Wenn wir das obige Beispiel (Zeiterfassung) erweitern möchten und z.B. anzeigen möchten, dass es sich bei der aufgeführten Zeit um Reisezeit handelte, können wir so etwas machen:

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <mitarbeiterListe xmlns:uni="http://univelop.com/xml">
        <uni:repeat ref="mitarbeiterZeiten" name="mitarbeiter">
            <mitarbeiter>
                <arbeitszeit>${mitarbeiter.Arbeitszeit}</arbeitszeit>
                <name>${mitarbeiter.name}</name>
                <uni:showIf exp="mitarbeiter.istReisezeit">
                    <reisezeit>true</reisezeit>
                </uni:showIf>
            </mitarbeiter>
        </uni:repeat>
    </mitarbeiterListe>
    ```

    **Attribute des `<uni:showIf>` Tags:**

    - `exp`: Die Bedingung, die ausgewertet werden soll (Pflichtfeld, muss in einem Wahrheitswert resultieren)

    In diesem Beispiel wird das XML-Element `<reisezeit>` nur hinzugefügt, wenn der Schalter `istReisezeit` gesetzt ist. Das `<uni:showIf>` Tag kann auch außerhalb von `<uni:repeat>`-Blöcken verwendet werden.

    {: .hint }
    Die Bedingung im `exp`-Attribut kann auf Schalter, Ja-/Nein-Formel-Bausteine oder andere Ausdrücke angewendet werden.

4. <span style="color:#0b5394">**Sonderzeichen und Escape-Sequenzen**</span>  
   Sonderzeichen in Parametern werden automatisch für XML escapiert, um eine gültige XML-Struktur zu gewährleisten.

## <span style="color:#0b5394">Einstellungen des Bausteins _XML erstellen_</span>

1. <span style="color:#0b5394">**XML-Vorlage hinzufügen**</span>  
   Über den Plus-Button öffnet sich ein Auswahl-Dialog, worüber die XML-Vorlage ausgewählt wird. Anschließend wird sie in den Baustein hochgeladen. Die Vorlage wird automatisch validiert, um sicherzustellen, dass sie gültig ist.

2. <span style="color:#0b5394">**Abweichender bzw. dynamischer Dateiname**</span>  
   Der Dateiname kann ebenfalls abweichend und dynamisch gewählt werden. Soll der Dateiname zum Teil dynamisch sein, kann ebenfalls ein Platzhalter mit Bezug zu einem Baustein eingesetzt werden. Soll die XML-Datei zum Beispiel so heißen wie die Belegnummer, können Sie hier `${belegnummer}` eingeben.

3. <span style="color:#0b5394">**Automatische Dateiübertragung per PowerShell**</span>  
   Zur automatischen Dateiübertragung können Sie auch Dateien per PowerShell mit dem Dateisystem synchronisieren. Ein entsprechendes Skript kann heruntergeladen und angepasst werden.

4. <span style="color:#0b5394">**Direkter Mailversand**</span>  
   Die erstellte XML-Datei kann über diese Funktion direkt per E-Mail versendet werden.

## <span style="color:#0b5394">Einstellungen des direkten Mail-Versands</span>

Um eine E-Mail Adresse für den direkten Mailversand zu verwenden, benötigt der Baustein _XML erstellen_ einen Empfänger über einen Baustein _Textfeld_ oder _E-Mail_, wo die entsprechende E-Mail Adresse eingetragen wird.
Bleibt die E-Mail Adresse für den direkten Mailversand immer gleich, kann der Baustein _Textfeld_ versteckt und als Standard-Text wird die E-Mail Adresse hinterlegt.  
Wechselt die E-Mail Adresse je nach Anforderung (z. B. unterschiedliche Vorgesetzte, unterschiedliche Lieferanten pro Artikel, etc.) kann der benötigte Baustein _Textfeld_, bezogen auf die genannten Beispiele, in den Stammdaten des Mitarbeiters oder des Artikels aufgeführt werden und bei der Auswahl als Wert übernommen werden (s. Verknüpfung über den Baustein _Datensatz_).

Bei der Auswahl der Option "direkter Mailversand" können weitere Einstellungen vorgenommen werden:

1. <span style="color:#0b5394">**Empfänger**</span>  
   Auswahl des Bausteins, der die E-Mail Adresse des Empfängers enthält (Textfeld oder E-Mail Baustein).

2. <span style="color:#0b5394">**CC-Empfänger**</span>  
   Zusätzliche E-Mail Adressen für CC können hier eingegeben werden.

3. <span style="color:#0b5394">**Benutzer in CC hinzufügen**</span>  
   Der auslösende Benutzer der XML-Erstellung wird automatisch in CC genommen.

4. <span style="color:#0b5394">**BCC**</span>  
   E-Mail Adressen für BCC können hier eingegeben werden.

5. <span style="color:#0b5394">**Betreff vordefinieren**</span>  
   Der E-Mail Betreff kann vordefiniert und mit Platzhaltern dynamisch gestaltet werden, z.B. `XML Export - ${belegnummer}`.

6. <span style="color:#0b5394">**Inhalt der E-Mail vordefinieren**</span>  
   Über `${}` kann der Inhalt der E-Mail ebenfalls dynamisch gestaltet werden, z.B.:

    ```
    Sehr geehrte Damen und Herren,

    anbei erhalten Sie die XML-Datei für ${belegnummer}.

    Mit freundlichen Grüßen
    ```

## <span style="color:#0b5394">Verwendung und Anwendungsfälle</span>

Der XML-Baustein eignet sich besonders für:

-   **E-Rechnungen**
-   **Datenexport** für andere Systeme, die XML-Format benötigen
-   **API-Integration** durch strukturierte Datenübertragung
-   **Archivierung** von Daten in einem standardisierten Format
-   **Berichtswesen** mit strukturierten Datenausgaben
-   **Systemintegration** durch einheitliche Datenformate
