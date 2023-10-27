---
layout: default
title: Formel (ehemalig)
parent: Erweiterte Bausteine
grand_parent: Die Bausteine und deren Einstellungen
nav_order: 20
---

# <span style="color:#0b5394"><span class="material-icons">calculate</span> **Baustein *Formel (ehemalig)***</span>

Mit dem Baustein *Formel* wird gerechnet, dynamisch auf verknüpfte Datensätze zugegriffen oder unter Bedingungen
bestimmte Werte ausgeben. Die Formel wird **nur** im Designmodus eingegeben und der Baustein ist in der Datensatzerfassung
**nur lesbar**. Die Darstellung der Zahl lässt sich wie beim [Baustein *Nummer*](/docs/record-spec-settings/grand-child-form/number.html) mit der Anzahl von Nachkommastellen konfigurieren.

**Dieser Baustein ist in der App nicht mehr verfügbar. Er wurde durch vier neue Bausteine ersetzt, die in ihrem Inhalt einen konsistenten Typ fordern. Siehe hierfür [Formelbausteine](/docs/formulary/formulary.html#formelbausteine).**

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
    Durch ein Punkt hinter dem technischen Namen weiß der Formel Baustein, dass in dem
    verknüpften Datensatz ein weiterer technischer Name vorhanden ist.
    Also: technischernamebausteindieseliste.technischernamebausteinverknüpfteliste

Weitere Formeln und Möglichkeiten sind in den Docs unter [Formelsammlung](/docs/formulas/formulas.html) zu finden.