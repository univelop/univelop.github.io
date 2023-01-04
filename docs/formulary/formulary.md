---
layout: default
title: Arbeiten mit Formeln
nav_order: 11
has_children: true
has_toc: false
---

# <span style="color:#0b5394">**Arbeiten mit Formeln**</span>
## <span style="color:#0b5394">Allgemeines zu Formelbausteinen</span>

Mit einem *Formelbaustein* wird ein dynamischer Wert erzeugt, dynamisch auf verknüpfte Datensätze zugegriffen oder unter Bedingungen
bestimmte Werte ausgeben. Die Formel wird **nur** im Designmodus eingegeben und der Baustein ist in der Datensatzerfassung
**nur lesbar**. Dadurch können Werte anderer Bausteine zu neuen Werten verändert und kombiniert werden.

Dies geschieht wie folgt:
1. <span style="color:#0b5394">**Auf andere Bausteine wird über den technischen Namen zugegriffen**</span>  
    Wie bereits beschrieben müssen technische Namen innerhalb einer Liste
    einzigartig sein. Durch diese Einzigartigkeit weiß der Formel Baustein
    auf welchen Datensatz er zugreifen soll.

2. <span style="color:#0b5394">**Den Inhalt eines anderen Bausteins wiedergeben**</span>  
    Durch das Schreiben des technischen Namens eines anderen Baustein kann
    bereits der Inhalt wiedergegeben werden. Ein Gleichheitszeichen vor der Formel ist
    nicht erforderlich.

3. <span style="color:#0b5394">**Kombinieren von Datensätzen**</span>  
    Verschiedene Datensätze werden kombiniert über +, -, *, /   
    Also: technischername1+technischername2
    Ebenfalls möglich: Zahlen- und Textwerte miteinander verknüpfen.
    Beim Beispiel PLZ und Ort könnte das Ergebnis 21085Hamburg lauten.
    Somit erstellt man z. B. Sortiercodes.

4. <span style="color:#0b5394">**Dynamischer Zugriff auf verknüpfte Daten**</span>  
    Will man Daten aus einer Verknüpften Liste auf Daten zugreifen, so ist das über einen extra Baustein und die [Übernahme von verknüpften Datensätzen](/docs/link-lists.html#verknüpfung-über-den-baustein-datensatz) möglich.
    Man benötigt im Datensatz, in dem der Formelbaustein vorhanden ist, einen Baustein, welcher über den Baustein *Datensatz* seinen Wert von dem verknüpften Eintrag übertragen bekommt. Dieser ist dann über seinen technischen Namen zugreifbar, enthält aber einen Wert eines verknüpften Eintrags. 

## <span style="color:#0b5394">Formelbausteine</span>

Es gibt in Univelop folgende 4 Formelbausteine:

|:-----:            |:-------:
|[Textformel](/docs/record-spec-settings/grand-child-expanded/textformular.html) |[Zahlenformel](/docs/record-spec-settings/grand-child-expanded/numberformular.html)
|[Ja-Nein-Formel](/docs/record-spec-settings/grand-child-expanded/boolformular.html) |[Datumsformel](/docs/record-spec-settings/grand-child-expanded/dateformular.html)

**Der alte Baustein [*Formel*](/docs/record-spec-settings/grand-child-expanded/formular.html) ist veraltet und von der Nutzung wird abgeraten.**

## <span style="color:#0b5394">Datumsformeln</span>

Der [Baustein *Datum*](/docs/record-spec-settings/grand-childs-form/date.html) bietet ebenfalls die Möglichkeit über Formeleingaben entsprechende Filterungen o. ä. auszugeben.

## <span style="color:#0b5394">Formelsammlung</span>

|:-----:            |:-------:
|[Datumsformeln](/docs/formulary/childs/formula%20date.html)      |[Bedingungen und Rechnen mit Formeln in Formelbausteinen](/docs/formulary/childs/condition-calculate-with.html)
|[Rechensymbole / Operatoren](/docs/formulary/childs/symbol-operator.html)         |[Kombinationen und Beispiele](/docs/formulary/childs/combinations-examples.html)