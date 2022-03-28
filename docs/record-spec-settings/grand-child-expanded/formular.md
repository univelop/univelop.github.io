---
layout: default
title: Formel
parent: Erweiterte Bausteine
grand_parent: Die Bausteine und deren Einstellungen
nav_order: 8
---

# <span style="color:#0b5394"><span class="material-icons">calculate</span> **Baustein *Formel***</span>

Mit dem Baustein *Formel* wird gerechnet, dynamisch auf verknüpfte Datensätze zugegriffen oder unter Bedingungen
bestimmte Werte ausgeben. Die Formel wird **nur** im Designmodus eingegeben und der Baustein ist in der Datensatzerfassung
**nur lesbar**.

Dies geschieht wie folgt:
1. Auf andere Bausteine wird über den technischen Namen zugegriffen.
    Wie bereits beschrieben müssen technische Namen innerhalb einer Liste
    einzigartig sein. Durch diese Einzigartigkeit weiß der Formel Baustein
    auf welchen Datensatz er zugreifen soll.

2. Den Inhalt eines anderen Bausteins widergeben
    Durch das Schreiben des technischen Namens eines anderen Baustein kann
    bereits der Inhalt wiedergegeben werden. Ein = vor der Formel ist nicht erforderlich.

3. Kombinieren von Datensätzen
    Verschiedene Datensätze werden kombiniert über +, -, *, /
    Also: technischername1+technischername2
    Ebenfalls möglich: Zahlen- und Textwerte miteinander verknüpfen.
    Beim Beispiel PLZ und Ort könnte das Ergebnis 21085Hamburg lauten.
    Somit erstellt man z. B. Sortiercodes.

4. Dynamischer Zugriff auf verknüpfte Daten
    Durch ein Punkt hinter dem technischen Namen weiß der Formel Baustein, dass in dem
    verknüpften Datensatz ein weiterer technischer Name vorhanden ist.
    Also: technischernamebausteindieseliste.technischernamebausteinverknüpfteliste

Weitere Formeln und Möglichkeiten sind in den Docs unter [Formelsammlung](/docs/formulary.html) zu finden.