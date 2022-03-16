---
layout: default
title: Formelsammlung
nav_order: 11
---

# <span style="color:#0b5394">**Formelsammlung**</span>

## <span style="color:#0b5394">Datumsformeln</span>

Datumsformeln sind nur in Verbindung mit dem
    [Baustein *Datum*](https://univelop.github.io/docs/record-spec-settings.html#datum "Die Bausteine und deren Einstellungen // Baustein *Datum*")
möglich. Diese Formeln können in den Filtern für
    [Datensatzverknüpfungen](https://univelop.github.io/docs/link-lists.html "Verknüpfen von Listen")
oder im
    [Listenfilter](https://univelop.github.io/docs/design-mode-settings.html#liste "Die Designmodiund deren Einstellungen // Liste")
verwendet werden, wenn dort der Formelbutton zu sehen ist.  

<span style="color:#3d85c6">**Beispiel:**</span>

![example formula button](..\assets\formulary\example formula button.png "example formula button")

1. Datumsfeld in Filter und Sortierung auswählen
2. Formelbutton auswählen
3. Formel eintragen

Dadurch werden die Datensätze entsprechend des sog. dynamischen Datumsfilter gefiltert.  
**HINWEIS:** Keine eigenen Werte in die Klammer setzen (s. Liste mit Standard-Datumsformeln)

### <span style="color:#3d85c6">Liste mit Standard-Datumsformeln</span>

| Datumsformel              | Beschreibung                      | Ausgabewert (Beispiel Berechnungszeitpunkt: *15.06.2021*)|
|------------               |------------                       |:-------------:
| Today()                   | aktuelles Datum                   | *15.06.2021*
| startOfWeek()             | Beginn der aktuellen Woche        | *14.06.2021*
| endOfWeek()               | Ende der aktuellen Woche          | *20.06.2021*
| startOfMonth()            | Beginn des aktuellen Monats       | *01.06.2021*
| endOfMonth()              | Ende des aktuellen Monats         | *30.06.2021*
| startOfQuarter()          | Beginn des aktuellen Quartals     | *01.04.2021*
| endOfQuarter()            | Ende des aktuellen Quartals       | *30.06.2021*
| startOfYear()             | Beginn des aktuelles Jahres       | *01.01.2021*
| endOfYear()               | Ende des aktuellen Jahres         | *31.12.2021*
  
In den Klammern der einzelnen Formeln können **keine** eigenen Werte hinsichtlich einer eigenen Zeitpunktsberechnung
erfolgen (zum Beispiel: endOfMonth(24.09.2021) = 30.09.2021). Die Eingabe einer Datumsformel erfolgt immer vom
tagesaktuellen Datum automatisch durch die App. Das hat den Vorteil, dass dieser sog. dynamische Filter automatisch
"mitwandert" und die Filterung entsprechend der gewählten Formel immer aktuell hält.

### <span style="color:#3d85c6">Formelberechnung mit Datumsformel</span>
*(nur möglich über einen Datumsbezug aus einer Datumsformel (s. o.))*  

Mit den o. g. Datumsformeln kann ebenfalls gerechnet werden.  

**Beispiel (Berechnungszeitpunkt *15.06.2021*):**  
today() + 5 = **20.06.2021**  
startOfMonth() + 10 = **11.06.2021**

Sollen der Datumsformel nun ganze Monate addiert oder subtrahiert werden, können die Formelberechnungen ***addMonths()***
und ***subtractMonths()*** verwendet werden. Der Berechnungsformel und der gewählten Datumsformel wird anhand der frei
gewählten Zahl die entsprechenden Monate hinzugefügt.  
HINWEIS: Die Berechnung über diese Formeln über einen Monatswechsel führt zu einer falschen Berechnung aufgrund der
unterschiedlichen Monatsendungen (s. Beschreibung unter den folgenden Beispielen) 

Beispiel:

| Berechnung                | Beispiel (Berechnungszeitpunkt: *15.06.2021*)     | Ergebnis
|------                     |------                                             |:------:
| addMonths()               | addMonths(startOfWeek()**,1**)                    | *14.**07**.2021*
| subtractMonths()          | subtractMonths(startOfQuarter()**,1**)            | *01.**03**.2021*

Die zu addierende oder subtrahierende Zahl kann frei gewählt und durch ein Komma in der entsprechenden Formel eingesetzt
werden.

| Berechnung                | Beispiel (Berechnungszeitpunkt: *15.06.2021*)     | Ergebnis
|------                     |------                                             |:------:
| addMonths()               | addMonths(startOfWeek()**,3**)                    | *14.**09**.2021*
| subtractMonths()          | subtractMonths(startOfQuarter()**,5**)            | *01.**10**.**2020***

Eine Berechnung des Endes des letzten Monats kann **nicht** über *subtractMonths(endOfMonth(),1)* dargestellt werden.
Die Datumsformel *endOfMonth()* greift dabei nämlich auf das Ende des aktuellen Monats zu. Aufgrund der unterschiedlichen
Endtage der einzelnen Monate würde immer mindestens ein Tag ignoriert werden. 

**Beispiel (Berechnungszeitpunkt: *15.03.2022*):**  
<span style="color:#3d85c6">erwartetes Ergebnis:</span>  
subtractMonths(endOfMonth(),1) = subtractMonths(31.03.2022, 1) = <span style="color:darkgreen">**28.02.2022**</span>  
<span style="color:#3d85c6">tatsächliches Ergebnis:</span>  
subtractMonths(endOfMonth(),1) = subtractMonths(31.03.2022, 1) = <span style="color:darkred">**03.03.2022**</span>
  
Dieses Ergebnis kommt zustande, da der Februar 2022 nur 28 Tage hat und nicht 31 Tage wie der März.  

Um dieses Problem zu umgehen wird einfach der Wert vom Monatsanfang errechnet und davon ein Tag abgezogen.  

**Beispiel (Berechnungszeitpunkt: *15.03.2022*):**  
startOfMonth() - 1 = <span style="color:darkgreen">**28.02.2022**</span>

### <span style="color:#3d85c6">Darstellungen von dynamischen Zeitspannen mit Formelberechnungen:</span>

Durch die Möglichkeit der Formelberechnung mit einer Datumsformel lassen sich verschiedene Darstellungsmöglichkeiten
errechnen, die in den Filteroptionen leicht verwendet werden können.

| Formelkombination                                        | Beschreibung       | Ausgabewerte (Beispiel Berechnungszeitpunkt: *15.06.2021*)
|------                                                    |------              |:------:
| startOfWeek() und endOfWeek()                            | aktuelle Woche     | 14.06.2021 und 20.06.2021
| startOfWeek() -7 und endOfWeek() -7                      | letzte Woche       | 07.06.2021 und 13.06.2021
| startOfMonth() und endOfMonth()                          | aktueller Monat    | 01.06.2021 und 30.06.2021
| subtractMonths(startOfMonth(),1) und startOfMonth()-1    | Letzter Monat      | 01.05.2021 und 31.05.2021

**Beispiel *"alle Datensätze aus dem Vormonat* (Berechnungszeitpunkt: *15.03.2022*):"**  
![example previous month](..\assets\formulary\example previous month.png "example previous month")  

1. Datumsfeld für Filter wählen
2. zutreffenden Operator auswählen
3. über den jeweiligen Formelbutton die Datumsformel inkl. Formelberechnung eingeben  

Im Ergebnis wird der gesetzte Filter beim Aufrufen des Bausteins automatisch anhand der Berechnung vorbelegt:
![example previous month2](..\assets\formulary\example previous month2.png "example previous month2") 

## <span style="color:#0b5394">Bedingungen und rechnen mit Formeln im Formel-Baustein</span>

### <span style="color:#3d85c6">Formel-Baustein und technischer Name</span>

Über den Baustein *Formel* kann ganz einfach mit Bedingungen gerechnet werden oder sich Inhalte anzeigen lassen. 
Hierzu nimmt man immer Bezug auf den technischen Namen eines Bausteins in der Liste oder den technischen
Namen eines Bausteins in einer verknüpften Liste. Der technische Name steht im Designmodus des Bausteins direkt
unter dem Abschnitt
    [**ERWEITERT**](https://univelop.github.io/docs/design-mode-settings.html#eintrag "Die Designmodi und deren Einstellungen // Eintrag").  
Der technische Name wird in vielen Fällen automatisch durch die Bezeichnung des Bausteins vorgegeben, außer dieser
wird im Nachgang abgeändert.

![technical name](..\assets\formulary\technical name.png "technical name") 

Diese Funktion lässt sich nun in vielerlei Hinsicht mit dem Baustein *Formel* kombinieren.  

**Beispiel:**
Ein
    [Baustein *Datensatz*](https://univelop.github.io/docs/record-spec-settings.html#datensatz "Die Bausteine und deren Einstellungen // Datensatz")
mit Namen "Mitarbeiter" wird als *Technischer Name* ebenfalls **mitarbeiter** heißen.
In der Kachel *Mitarbeiterstammdaten* ist der Stundenlohn erfasst. Soll nun zum Beispiel der Stundenlohn
des ausgewählten Mitarbeiters abgefragt werden, wird in dem Baustein *Formel* in den Einstellungen des
Bausteins der Verweis "mitarbeiter.stundenlohn" eingegeben.

![formulabrick technical name](..\assets\formulary\example formula brick technical name.png "formulabrick technical name") 

1. Auswahl Baustein *Formel*
2. Eingabe des Verweis *mitarbeiter.stundenlohn*
3. Die Formel sucht nun über die verknüpfte Kachel "Mitarbeiter" im Baustein *Datensatz* den ausgewählten Mitarbeiter

    ![formulabrick technical name](..\assets\formulary\example formula brick technical name2.png "formulabrick technical name")

4. Baustein "Formel" sucht im ausgewählten Mitarbeiter nach einem Baustein mit dem technischen Namen *Stundenlohn*
5. Formel gibt den gefundenen Wert zurück  

**Ergebnis:**  
![formulabrick technical name](..\assets\formulary\example formula brick technical name3.png "formulabrick technical name")

Wenn in der Liste unter anderem noch eine Arbeitszeit enthalten ist, kann die Formel erweitert werden
z. B. zur Berechnung eines Arbeitslohns der erfassten Tätigkeit. Dazu wird die Formel mit dem technischen
Namen des Bausteins erweitert, der die Arbeitszeit enthält, also *mitarbeiter.stundenlohn* * ***arbeitszeit***.

![formulabrick technical name](..\assets\formulary\example formula brick technical name4.png "formulabrick technical name")  

**Ergebnis:**  
![formulabrick technical name](..\assets\formulary\example formula brick technical name5.png "formulabrick technical name")

Es bietet sich an den technischen Namen für PDF-Vordrucke oder lange Formeln abzukürzen. Für das Beispiel
des Stundenlohns könnte die Abkürzung **stdlo** gewählt werden. Je nach Anbindungswunsch an ein Fremdsystem
besteht die Notwendigkeit, dass der technische Name angepasst werden muss, wenn Univelop mit einem Fremdsystem
automatisch kommunizieren soll
    ([Schnittstellen](https://univelop.github.io/docs/interface.html "Schnittstellen"))
, da das andere System komplett unterschiedliche Feldnamen und Bezeichnungen vorgibt.

### <span style="color:#3d85c6">Individuelle Berechnung mit Formelbaustein</span>

In dem Baustein *Formel* kann ebenfalls eine individuelle Berechnung erfolgen. Dabei müssen nicht zwingend zwei
technische Namen / Felder (wie im o. g. Beispiel) angegeben, sondern es können ebenso technischer Name,
Rechenzeichen und gewünschte Zahl gewählt werden.  

**Beispiel:**  
Auf einen Stundenlohn soll ein Samstagszuschlag erhoben werden. Der Zuschlag beträgt 50%. Die einzugebende Formel
würde dann lauten **stundenlohn*1,5**.  

Im Vergleich zu einem Nummernfeld hat dies den Vorteil, dass der prozentuale Zuschlag dynamisch bleibt und nur das
Feld Stundenlohn angepasst werden muss.

### <span style="color:#3d85c6">Berechnung unter Bedingungen</span>

Die altbekannte Wenn-Dann-Sonst-Formel aus Excel kann auch in dem Baustein *Formel* integriert werden.
Auch hier kann sich neben der aktuellen Liste auch auf eine verknüpfte Liste bezogen werden.

| Formel                                | Beispiel                                              | Beschreibung
|------                                 |------                                                 |------
| if(condition, thenValue)              | `if(arbeitstag == Samstag, stundenlohn*1,5)`          | wenn der Arbeitstag ein Samstag ist, erhöhe den Stundenlohn um 50%
| ifElse(condition,thenValue,elseValue) | `ifElse(reisezeit >= 12, verpflegungspauschale, 0)`   | wenn die Reisezeit 12 Stunden oder länger dauert, trage den Wert aus dem Feld *Verpflegungspauschale* ein (hier sollte dann ein Wert hinterlegt sein), sonst verwende den Wert 0.

## <span style="color:#0b5394">Rechensymbole / Operatoren</span>

| Rechensymbole / Operatoren            | Beschreibung
|:------:                               |:------:
| `==`                                  |Gleich
| `&&`                                  |Und
| `||`                                  |Oder
| `<`                                   |Kleiner als
| `>`                                   |Größer als
| `!=`                                  |Ungleich
| `<=`                                  |Kleiner gleich
| `>=`                                  |Größer gleich
| `+`                                   |Plus, Addition
| `-`                                   |Minus, Subtraktion
| `*`                                   |Mal, Multiplikation
| `/`                                   |Geteilt, Division
| `%`                                   |Modulo (gibt einen Restwert einer Teilung aus)

## <span style="color:#0b5394">Weitere Funktionen des Formelbausteins</span>

Über den Baustein *Formel* können noch weitere Funktionen genutzt werden.  
*Value = Technischer Name*  

| Funktionen                                | Beschreibung
| ------                                    | ------
| `textLength(value)`                       | Gibt die Textlänge eines Feldes inklusive Leerzeichen aus
| `firstLetters(value, count)`              | Zählt die ersten Zeichen eines Datensatzes anhand der vorgebenen Länge (count = Zahl)
| `lastLetters(value,count)`                | Zählt die letzten Zeichen eines Datensatzes anhand der vorgegeben Länge (count = Zahl)
|                                           | **Beispiel:** firstLetters(seriennummer,4) gibt die ersten 4 Zahlen und Buchstaben der Seriennummer aus
|                                           |
| `firstWords(value,count)`                 | Zählt die ersten Wörter anhand der vorgegebenen Anzahl (count = Zahl)
| `lastWords(value,count)`                  | Zählt die letzten Wörter anhand der vorgegebenen Anzahl (count = Zahl)
|                                           | *Der Stopp der Zählung erfolgt nach einem Leerzeichen und nur nach einem Leerzeichen*
|                                           |
| `formatDate(date, "format")`              | Formatiert ein Datumsdatensatz (Bezug auf [Baustein *Datum*](https://univelop.github.io/docs/record-spec-settings.html#datum "Die Bausteine und deren Einstellungen // Datum")) in die gewählte Formatierung (s. Formatierungsmöglichkeiten Datum)

### <span style="color:#3d85c6">Formatierungsmöglichkeiten Datum</span>

|Symbol   |Beschreibung           |Ausgabe in         |Beispiel|
|------   |-------                |------------       |-------|
|G        |Bezeichnung            |(Text)             |AD|
|yyyy     |Jahr                   |(Zahl)             |2022|
|M        |Monat im Jahr          |(Zahl)             |1|
|MMM      |Monatsname (kurz)      |(Text)             |Jan|
|MMMM     |Monatsname (lang)      |(Text)             |Januar|
|L        |alleinstehender Monat  |(Text & Zahl)      |Januar & 01|
|D        |Tag im Monat           |(Zahl)             |10|
|c        |alleinstehender Tag    |(Zahl)             |10|
|h        |Stunde am/pm (1~12)    |(Zahl)             |12|
|H        |Stunde in Tag (0~23)   |(Zahl)             |0|
|m        |Minuten einer Stunde   |(Zahl)             |30|
|s        |Sekunden einer Minute  |(Zahl)             |55|
|S        |fractional second      |(Zahl)             |978|
|E        |Wochentag (kurz)       |(Text)             |Do.|
|EEEE     |Wochentag (lang)       |(Text)             |Donnerstag|
|D        |Tag im Jahr            |(Number)           |189|
|a        |am/pm marker           |(Text)             |PM|
|k        |hour in day (1~24)     |(Number)           |24|
|K        |hour in am/pm (0~11)   |(Number)           |0|
|Q        |Quartal                |(Zahl)             |3|
|QQQ      |Quartal (kurz)         |(Text & Zahl)      |Q3|
|QQQQ     |Quartal (lang)         |(Text & Zahl)      |3. Quartal|
|'        |escape for text        |(Delimiter)        |'Date='|
|''       |single quote           |(Literal)          |'o''clock'|

## <span style="color:#0b5394">Kombinationen und Beispiele</span>

### <span style="color:#3d85c6">Sortieren mit dem Formelbaustein</span>

Der Baustein *Formel* kann ebenfalls als Blocksortierung (2.-, 3.-, ... Sortierung) genutzt werden. 

**Beispiel:**
Die Arbeitszeiten der Mitarbeiter können im Standard über den Mitarbeiternamen **oder** das Datum sortiert
werden. Zur Prüfung dieser Zeiten, zum Beispiel im PDF Ausdruck, macht es unter Umständen Sinn die Mitarbeiter
mit einer Zweitsortierung, also nach Namen **und** Datum aufsteigend zu sortieren.  
Hier wird der Baustein "Formel" im Eintrag der Arbeitszeit hinzugefügt und mit der Formel
`mitarbeiter.nachname+formatDate(datum,"yyyyMMdd")` versehen.  
Das Formelergebnis ist nun eine Kombination aus dem Mitarbeiternamen und dem Datum der erfassten Arbeitszeit.
Das Ergebnis könnte wie folgt aussehen: **Schäfer20220131**.  

![formula sortcode](..\assets\formulary\formula sortcode.png "formula sortcode")

Wenn Sie nun nach diesem Feld aufsteigend sortieren, sehen Sie die Arbeitszeiten blockweise sortiert, also in
der Erstsortierung nach dem Mitarbeiternamen und in der Zweitsortierung nach dem Datum.  

![formula sortcode](..\assets\formulary\formula sortcode2.png "formula sortcode")

### <span style="color:#3d85c6">Erstellen von Kettenformeln 1</span>

Der Baustein *Formel* kann auch in einer Kettenreihenfolge eingesetzt werden. Es können also mehrere Formeln
aneinandergereiht werden. Wichtig hierbei ist, dass zusammengehörige Rechenblöcke in Klammern stehen.  

**Beispiel:**
Es soll ein Sonderlohn errechnet werden, der aus einem Zuschlag zum Stundenlohn und einer festen Pauschale besteht.
Die Formel kann also wie folgt aussehen:  
`(mitarbeiter.stundenlohn*1,25)+(mitarbeiter.bereitschaftspauschale)`.  

**Formelbeschreibung:** Die eingegebene Formel sucht bei dem im
    [Baustein *Datensatz*](https://univelop.github.io/docs/record-spec-settings.html#datensatz "Die Bausteine und deren Einstellungen // Datensatz")
ausgewählten Mitarbeiter nach dem dort erfassten Stundenlohn und multipliziert den gefundenen Wert mit 25%.
Weiter sucht die Formel im ausgewählten Mitarbeiter die erfasste Bereitschaftspauschale. Nach Abschluss der
Suche werden beide Werte miteinander addiert, sodass sich daraus der gewünschte Sonderlohn ergibt.

Grundsätzlich ließen sich über die
    [Datensatzverknüpfung](https://univelop.github.io/docs/link-lists.html "Verknüpfen von Listen")
die Werte einfach übernehmen. In solchen Fällen spart man sich das "mitarbeiter." in den entsprechenden Formeln.
Der Vorteil bei der Kettenformel ist hingegen, dass die aktuelle Liste zur Berechnung angenehm kurz gehalten wird.

### <span style="color:#3d85c6">Erstellen von Kettenformeln 2</span>

Eine weitere Kettenreihenfolge in dem Baustein *Formel* kann mit den Wenn-Dann-Sonst-Formeln erfolgen.  

**Beispiel:**
Nehmen wir an es soll ein kleines Lagersystem mit Univelop erstellt werden. Hierfür wird neben den Artikeln auch
die Zu- und Abgänge benötigt. Diese müssen kombiniert werden, um den Lagerbestand zu errechnen. Zwecks Umsetzung
kann also zum Einen eine Kachel "Artikel" und eine Kachel "Artikelbewegung" erstellt werden.

In den Artikelbewegungen können mit zwei
    [Nummern- und Checkbox-Bausteinen](https://univelop.github.io/docs/record-spec-settings.html "Die Bausteine und deren Einstellungen")
die Zu- und Abgänge dokumentiert werden.
Da in dem
    [Baustein *Datensatz Liste*](https://univelop.github.io/docs/record-spec-settings.html#datensatz-liste "Die Bausteine und deren Einstellungen // Datensatz Liste")
im Artikel allerdings nur die Summe über **einen** Baustein gezogen werden kann, müssen die Bewegungen zusammengefasst
werden. Der dafür benötigte Baustein *Formel* wird "durchgeführte Bewegungen" genannt.

In diesem Baustein wird eine Formel eingetragen, die lauten könnte: 
`ifElse(eingelagert == 'Ja', menge_eingang, 0) - ifElse(ausgelagert == 'Ja', menge_ausgang, 0)`
Die Kettenformel führt nun dazu, dass beide Wenn-Dann-Sonst-Formeln geprüft und in allen Fällen einen Wert-X ausgibt.
Wird etwas eingelagert, soll die entsprechende Menge berücksichtigt werden, ansonsten soll der Wert *0* eingtragen
werden. Von der ersten Wenn-Dann-Sonst-Formel soll die ausgelagerte Menge ggf. abgezogen werden, die Wenn-Dann-Sonst-Formel
wird nach dem gleichen Schema wie der erste Wenn-Dann-Sonst-Formel ermittelt wird.  
Wird also etwas eingelagert, wird ein positiver Wert und bei einer Auslagerung ein negativer Wert. Es können auch beide
Bewegungen gleichzeitig erfasst werden. Die sich daraus ergebende Summe erfolgt nach demselben Prinzip und wird positiv oder
negativ ausgegeben.

Sollen nun eine Berechnung der Lagerbestände der einzelnen Artikel erfolgen, wird in der Kachel Artikel der
    [Baustein *Datensatz Liste*](https://univelop.github.io/docs/record-spec-settings.html#datensatz-liste "Die Bausteine und deren Einstellungen // Datensatz Liste")
verwendet und die Summe über die Bewegungen errechnet. Hierbei werden alle Bewegungen (negativ und positiv) aufsummiert.  

![ifElse combination](..\assets\formulary\ifElse combination.png "ifElse combination")