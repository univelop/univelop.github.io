---
layout: title
title: Artikel Scanner
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 25
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/article%20scanner.html
---

Der Baustein _Artikel Scanner_ bietet die Möglichkeit mittels eines entsprechenden Endgeräts mit Scanlaser Artikelbewegungen (zusätzlich mit Scanfunktion weiterer Bausteine z. B. Lagerplatz) zu erfassen.

## <span style="color:#0b5394">Technische Voraussetzungen und benötigte Kacheln</span>

Der Baustein _Artikel Scanner_ ist **nicht** mit einer herkömmlichen Smartphonekamera bedienbar und auf dem eingesetzten Endgerät muss die Univelop-App installiert werden können (Betriebssysteme: Android oder iOS).

Für einen einwandfreien Scanner-Modus muss das eingesetzte Endgerät so konfiguriert sein/werden, dass es nach dem Scanvorgang einen automatischen Tab oder Enter ausführt, um die benötigte Suchfunktion auszulösen. Am Beispiel eines Honeywell-Endgeräts in einer Lager-Arbeitsumgebung wurde in den Einstellungen des Gerätes der Befehl /t ergänzt, um den automatischen Tab nach dem Scanvorgang auszulösen.  
Wo und wie die Einstellungen eines jeweiligen Gerätes zu finden sind, steht i. d. R. in den Dokumentationen der einzelnen Hersteller. Dazu kann im Internet z. B. nach "Scanner - (Modell- und Herstellername) - Suffix Enter" gesucht werden.

**Beispiel:**
[Link: Hinzufügen/Entfernen eines Suffix auf einem Android-Endgerät mit CommonES (Honeywell)](https://honeywellaidc.force.com/supportppr/s/article/How-to-add-remove-a-suffix-on-an-Android-device-running-CommonES-version-3-or-greater)  
Durch den Klick auf den Link verlässt man UnivelopDocs und wechselt zu der Website der Honeywell Support-Community.

Neben den o. g. technischen Voraussetzungen zur Nutzung des Bausteins _Artikel Scanner_ werden ebenfalls zwei zusätzliche Kacheln benötigt, z. B. "Artikelbewegung" und "Warenausgang". Der Baustein verfügt über zwei Modi, die entsprechend der Anforderung ausgewählt werden können.

## <span style="color:#0b5394">Modus "Artikel hinzufügen"</span>

In den Bausteineinstellungen sind die Kacheln für "Verknüpfung mit" und "Verknüpfung über" einzustellen (Beispiel: "Verknüpfung
mit" = Artikelbewegung, "Verknüpfung über" = Warenausgang)
Anschließend wird der entsprechende Modus ausgewählt (in diesem Fall "Artikel hinzufügen").
Im nächsten Schritt kann eine Menge vorbelegt werden, die als Platzhalter dient und von dem ausführenden Mitarbeiter überschrieben werden kann. Zusätzlich wird noch der Mengenbaustein angegeben. Bei Bedarf kann auch ein weiterer Mengenbaustein hinzugefügt werden.

Anschließend wird der hinzugefügte Artikel-Baustein verwendet, der über die ausgewählte Kachel bei "Verknüpfung über" ausgewählt wird.

![article scanner filter1](\assets\record-spec-settings\article scanner filter1.png "article scanner filter1")

1. <span style="color:#0b5394">**Verknüpfung mit**</span>  
   Hier wird die Kachel verknüpft, in die die gescannte Artikelbewegung geschrieben werden soll
2. <span style="color:#0b5394">**Verknüpfung über**</span>  
   Die Kachel, aus denen die Datensätze für die entsprechenden Warenausgänge angezeigt werden sollen
3. <span style="color:#0b5394">**Modus**</span>  
   Auswahl zwischen "Artikel hinzufügen" und "Artikel abarbeiten" (s. u.)
4. <span style="color:#0b5394">**Menge vorbelegen**</span>  
   Vorgabe der Menge, die im Scanvorgang bei jedem Warenausgang vorbelegt werden soll

    ![article scanner filter2](\assets\record-spec-settings\article scanner filter2.png "article scanner filter2")

5. <span style="color:#0b5394">**Mengenbaustein**</span>  
   Ist der Baustein für die Artikelbewegung, in dem die gescannte Ausgabemenge eingesetzt werden soll
6. <span style="color:#0b5394">**zusätzlicher Mengenbaustein**</span>  
   Dieser kann nach belieben ebenfalls eingesetzt werden (sollten in der Artikelbewegung zwei Mengen ausgegeben werden)
7. <span style="color:#0b5394">**Artikel Baustein**</span>  
   Angabe des Bausteins, der auf die Kachel "Artikel" zurückgreift
8. <span style="color:#0b5394">**Automatisch bestätigen**</span>  
   Anstatt manuell jeden einzelnen Scanvorgang abzuschließen, kann dieser nach dem Scanvorgang und dem Einsetzen aller Parameter
   auch automatisch bestätigt werden

Wird nun der Baustein _Artikel Scanner_ in dem Modus "Artikel hinzufügen" genutzt, wird zuerst der Artikel gescannt. Anschließend überträgt der Scanner die Nummer in die Suche und der gefundene Artikel wird eingetragen. Bestätigt man nun den Scanvorgang, wird der Artikel mit der angegebenen Menge in der Kachel "Warenausgang" (Verknüpfung über) entsprechend als Warenausgang erfasst und ist anschließend unter "Artikelbewegung Abgeschlossen" zu finden.

![article scanner add article1](\assets\record-spec-settings\article scanner add article1.png "article scanner add article1")

1. <span style="color:#0b5394">**Scan-Nummer**</span>  
   Hier wird die Nummer des gescannten Barcodes eingesetzt und anschließend durch den automatischen Tabs des Endgerätes die Artikelsuche ausgelöst (s. 6.)
2. <span style="color:#0b5394">**Menge ausgegeben**</span>  
   In diesem Bereich wird zuvor ausgewählte vorbelegte Menge eingesetzt
3. <span style="color:#0b5394">**Menge anpassen**</span>  
   Über Plus / Minus kann die "Menge" vor dem Hinzufügen des Artikels noch einmal angepasst werden
4. <span style="color:#0b5394">**Artikel**</span>  
   Hier wird der gefundene Artikel aus dem Scanvorgang angezeigt. Über das Scan-Icon vor dem Artikel kann der Scanvorgang noch einmal vorgenommen werden
5. <span style="color:#0b5394">**Button Hinzufügen**</span>  
   Speichert den durch den Scanvorgang erstellten Datensatz in Artikelbewegung ab und springt erneut in "Scan-Nummer" (s. 1)
6. <span style="color:#0b5394">**Hinzufügen und Fertig**</span>  
   Der erstellte Datensatz wird dem Warenausgang hinzugefügt und die Scanmaske wird geschlossen.

Diese Funktion ist zu verwenden, wenn angeforderte Warenausgaben **nicht** elektronisch über Univelop erfolgen (z. B. per E-Mail, etc.) In der Kachel "Warenausgang" wird eine entsprechender Warenausgang mit Nummer angelegt und der Modus "Artikel hinzufügen" fügt anschließend lediglich die gescannten Artikel dem Warenausgang zu.

**Beispiel:**  
![article scanner add article](\assets\record-spec-settings\article scanner add article.png "article scanner add article")

## <span style="color:#0b5394">Modus "Artikel abarbeiten"</span>

Die Bausteineinstellungen sind genauso aufgebaut wie in dem Modus "Artikel hinzufügen". In dem Modus "Artikel abarbeiten" besteht die Möglichkeit Mengen aufzusummieren, statt zu überschreiben. Diese Einstellung hat zur Folge, dass z. B. vier Mengeneinheiten ausgegeben werden sollen, verteilt jedoch auf zwei Lagerläufe (erster Lauf: 3 Mengeneinheiten ausgegeben, zweiter Lauf: 1 Mengeneinheiten ausgegeben). In dieser Einstellung wird die Menge nicht überschrieben, sondern in Summe die auszugebende Menge aufgezeigt.

Die Warenausgabe benötigt einen Baustein _Datensatz Liste_ der offene Warenausgänge beinhaltet. Die offenen Warenausgänge sind zum Beispiel offene Bestellungen, die elektronisch über Univelop erfasst wurden. Der Button "Artikel abarbeiten" kann erst genutzt werden, sobald der Baustein "Artikel Scanner" offene Warenausgänge feststellt. Um dies zu ermöglichen, erhält der Baustein "Artikel Scanner" einen Filter.

![article scanner filter](\assets\record-spec-settings\article scanner filter.png "article scanner filter")

In der Einstellung "Menge vorbelegen" kann eine entsprechende Formel hinterlegt werden (z. B. Menge_angefragt - Menge_ausgegeben). Somit werden ausschließlich
offene Mengen der einzelnen Positionen vorbelegt.
Wird im Mengenbaustein nun der Baustein "Menge ausgeben" und als zusätzlicher Baustein "Lagerplatz" ausgewählt, wird die auszugebende Menge direkt errechnet und der Lagerplatz muss ebenfalls mitgescannt werden.

![article scanner work off1](\assets\record-spec-settings\article scanner work off1.png "article scanner work off1")

1. <span style="color:#0b5394">**Verknüpfung mit**</span>  
   Hier wird die Kachel verknüpft, in die die gescannte Artikelbewegung geschrieben werden soll

2. <span style="color:#0b5394">**Verknüpfung über**</span>  
   Dieser kann nach belieben ebenfalls eingesetzt werden (sollten in der Artikelbewegung zwei Mengen ausgegeben werden)

3. <span style="color:#0b5394">**Modus**</span>  
   Auswahl zwischen "Artikel hinzufügen" und "Artikel abarbeiten" (s. u.)

4. <span style="color:#0b5394">**Filter und Sortierung**</span>  
   Um den Baustein "Artikel abarbeiten" zu aktivieren, muss die offenen Warenausgänge gefiltert werden. Dazu wird die Differenz > 0 gesetzt

5. <span style="color:#0b5394">**Menge aufsummieren, statt überschreiben**</span>  
   Dies führt dazu, dass mehrere Scanvorgänge zu einer Artikelbewegung durchgeführt werden können, ohne dass die im 1. Scanvorgang erfasste Menge überschrieben wird.

6. <span style="color:#0b5394">**Menge vorbelegen mit einer Formel**</span>  
   Hier kann nicht nur eine Zahl vorgegeben werden, sondern diese lässt sich anhand einer Formel auch berechnen. In diesem Beispiel wird von der angefragten Menge die bereits ausgegebene Menge abgezogen, sodass dann die noch offene Menge vorbelegt wird.

7. <span style="color:#0b5394">**Mengenbaustein**</span>  
   Ist der Baustein für die Artikelbewegung, in dem die gescannte Ausgabemenge eingesetzt werden soll

    ![article scanner article work off2](\assets\record-spec-settings\article scanner work off2.png "article scanner work off2")

8. <span style="color:#0b5394">**Artikel Baustein**</span>  
   Angabe des Bausteins, der auf die Kachel "Artikel" zurückgreift

9. <span style="color:#0b5394">**Zusätzlicher Scannerbaustein**</span>  
   Hier kann ein zusätzlicher Baustein aus den Artikelbewegungen eingesetzt werden, der ebenfalls eingescannt werden soll. In diesem Beispiel ist es der Lagerplatz. Hier wird angenommen, dass Artikel vorhanden sind, die an mehrere Lagerorten gelagert werden.

10. <span style="color:#0b5394">**Scan zur Artikelbestätigung erzwingen**</span>  
    Diese Einstellung führt dazu, dass in jedem Fall ein Scanvorgang erwartet wird um einen Artikel hinzuzufügen. Eine manuelle Eingabe/Suche ist nicht möglich.

11. <span style="color:#0b5394">**Automatisch bestätigen**</span>  
    Anstatt manuell jeden einzelnen Scanvorgang abzuschließen, kann dieser nach dem Scanvorgang und dem Einsetzen aller Parameter
    auch automatisch bestätigt werden

![article scanner work off4](\assets\record-spec-settings\article scanner work off4.png "article scanner work off4")

1. <span style="color:#0b5394">**Ziel**</span>  
   Aus der Datensatz Liste "Artikelbewegung offen" werden die Artikel entsprechend vorgeschlagen, die als Nächstes zu scanne ist und wo die angegebene Menge "verbucht" wird. Mit einem Klick auf den aktuell angezeigten Artikel kann der Benutzer aus allen vorhandenen Scanvorgängen einen auswählen und mit diesem beginnen.
   ![article scanner work off5](\assets\record-spec-settings\article scanner work off5.png "article scanner work off5")
2. <span style="color:#0b5394">**Scan-Nummer**</span>  
   Hier wird die Nummer des gescannten Barcodes eingesetzt und anschließend durch den automatischen Tabs des Endgerätes die Artikelsuche ausgelöst (s. 5.)
3. <span style="color:#0b5394">**Menge ausgegeben**</span>  
   In diesem Bereich wird zuvor ausgewählte vorbelegte Menge eingesetzt
4. <span style="color:#0b5394">**Menge anpassen**</span>  
   Über Plus / Minus kann die "Menge" vor dem Hinzufügen des Artikels noch einmal angepasst werden
5. <span style="color:#0b5394">**eingescannter Artikel**</span>  
   Hier wird der gefundene Artikel aus dem Scanvorgang angezeigt. Wurde der Artikel gefunden erhält er in der Checkbox eine Bestätigung.
   Über das Scan-Icon vor dem Artikel kann der Scanvorgang noch einmal vorgenommen werden (s. 7.)
6. <span style="color:#0b5394">**Lagerplatz (zusätzlicher Scannerbaustein)**</span>  
   Hier wird der zusätzlich Scannerbaustein angezeigt, der in den Einstellungen hinzugefügt wurde.
7. <span style="color:#0b5394">**Kennzeichnung erwarteter Scan**</span>  
   Das vorangestellte Icon wird entweder in blau oder in schwarz angezeigt. Die Farbe blau gibt an, dass der nächste Scan dieses Feld ansteuern wird. Möchte man allerdings zuerst den zweiten Scannerbaustein abscannen (hier Lagerplatz), kann mit einem Klick auf das Icon der Scanvorgang verschoben werden.
8. <span style="color:#0b5394">**Bestätigen und schließen**</span>  
   Führt dazu, dass der Scanvorgang abgeschlossen und das Scanfenster verlassen wird
9. <span style="color:#0b5394">**Scanfenster schließen**</span>  
   Führt automatisch dazu, dass das Scanfenster geschlossen wird.

Der Baustein _Scanner Artikel_ führt nun dazu, dass die vorbelegte Menge als "offen" ausgegeben wird. Nun muss zum einem der Artikel und zu anderem der Lagerplatz gescannt werden. Durch die Bestätigung des Scanvorgangs wird dieser abgespeichert. Die Reihenfolge des Scanvorgangs ist dabei nicht vorgeschrieben. Über das vorangestellte Icon kann der Baustein ausgewählt werden, der entsprechend gescannt werden soll.

**Beispiel:**
![article scanner work off3](\assets\record-spec-settings\article scanner work off3.png "article scanner work off3")
