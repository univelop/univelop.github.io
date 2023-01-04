---
layout: default
title: Kombinationen und Beispiele
parent: Arbeiten mit Formeln
nav_order: 4
---

# <span style="color:#0b5394">**Arbeiten mit Formeln**</span>
## <span style="color:#0b5394">Kombinationen und Beispiele</span>
### <span style="color:#3d85c6">Sortieren mit dem Formelbaustein</span>

Ein Formelbaustein, vorzugsweise der 
[Baustein *Textformel*](/docs/record-spec-settings/grand-child-expanded/textformular.html),
kann ebenfalls als Blocksortierung (2.-, 3.-, ... Sortierung) genutzt werden. 

**Beispiel:**
Die Arbeitszeiten der Mitarbeiter können im Standard über den Mitarbeiternamen **oder** das Datum sortiert
werden. Zur Prüfung dieser Zeiten, zum Beispiel im PDF Ausdruck, macht es unter Umständen Sinn die Mitarbeiter
mit einer Zweitsortierung, also nach Namen **und** Datum aufsteigend zu sortieren.  
Hier wird der Baustein "Formel" im Eintrag der Arbeitszeit hinzugefügt und mit der Formel
`mitarbeiterNachname+formatDate(datum,"yyyyMMdd")` versehen.  
Das Formelergebnis ist nun eine Kombination aus dem Mitarbeiternamen und dem Datum der erfassten Arbeitszeit.
Das Ergebnis könnte wie folgt aussehen: **Schäfer20220131**.  

![formula sortcode](\assets\formulary\formula sortcode.png "formula sortcode")

Wenn Sie nun nach diesem Feld aufsteigend sortieren, sehen Sie die Arbeitszeiten blockweise sortiert, also in
der Erstsortierung nach dem Mitarbeiternamen und in der Zweitsortierung nach dem Datum.  

![formula sortcode](\assets\formulary\formula sortcode2.png "formula sortcode")

### <span style="color:#3d85c6">Erstellen von Kettenformeln 1</span>

Mit [Formelbausteinen](/docs/formulary/formulary.html#formelbausteine)
kann auch in einer Kettenreihenfolge eingesetzt werden. Es können also mehrere Formeln
aneinandergereiht werden. Wichtig hierbei ist, dass zusammengehörige Rechenblöcke in Klammern stehen.  

**Beispiel:**
Es soll ein Sonderlohn errechnet werden, der aus einem Zuschlag zum Stundenlohn und einer festen Pauschale besteht.
Die Formel kann also wie folgt aussehen:  
`(mitarbeiterStundenlohn*1,25)+(mitarbeiterBereitschaftspauschale)`.  

**Formelbeschreibung:** 
Die eingegebene Formel nimmt den Stundenlohn des ausgewählten Mitarbeiters und multipliziert den Wert mit 25%.
Weiter wird die Bereitschaftspauschale genommen, und mit dem vorigen Wert addiert, sodass sich daraus der gwünschte Sonderlohn ergibt.

**Zugriff auf verknüpfte Daten:**
Für Zugriff auf Daten eines verknüpften Datensatzes braucht es einen Baustein, welcher durch den [Baustein *Datensatz*](/docs/record-spec-settings/grand-child-expanded/record.html) den gewünschten Wert übertragen bekommt. Dieser zusätzliche Baustein bekommt einen technischen Namen, über den wie gewohnt zugegriffen wird. In diesem Beispiel wird aus der Kachel "*Mitarbeiter*" der Stundenlohn als auch die Bereitschaftspauschale bei der [Datensatzverknüpfung](/docs/link-lists.html) in zwei Bausteine übertragen, welche beide den technischen Namen "mitarbeiterStundenlohn" und "mitarbeiterBereitschaftspauschale" haben.

### <span style="color:#3d85c6">Erstellen von Kettenformeln 2</span>

Eine weitere Kettenreihenfolge in den [Formelbausteinen](/docs/formulary/formulary.html#formelbausteine)
kann mit den Wenn-Dann-Sonst-Formeln erfolgen.  

**Beispiel:**
Nehmen wir an es soll ein kleines Lagersystem mit Univelop erstellt werden. Hierfür wird neben den Artikeln auch
die Zu- und Abgänge benötigt. Diese müssen kombiniert werden, um den Lagerbestand zu errechnen. Zwecks Umsetzung
kann also zum Einen eine Kachel "Artikel" und eine Kachel "Artikelbewegung" erstellt werden.

In den Artikelbewegungen können mit zwei
    [Nummern- und Schalter-Bausteinen](/docs/record-spec-settings/childs/form.html)
die Zu- und Abgänge dokumentiert werden.
Da in dem
    [Baustein *Datensatz Liste*](/docs/record-spec-settings/grand-child-expanded/record-list.html)
im Artikel allerdings nur die Summe über **einen** Baustein gezogen werden kann, müssen die Bewegungen zusammengefasst
werden. Der dafür benötigte
[Baustein *Zahlenformel*](/docs/record-spec-settings/grand-child-expanded/numberformular.html)
wird "durchgeführte Bewegungen" genannt.

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
[Baustein *Datensatz Liste*](/docs/record-spec-settings/grand-child-expanded/record-list.html)
verwendet und die Summe über die Bewegungen errechnet. Hierbei werden alle Bewegungen (negativ und positiv) aufsummiert.  

![ifElse combination](\assets\formulary\ifElse combination.png "ifElse combination")