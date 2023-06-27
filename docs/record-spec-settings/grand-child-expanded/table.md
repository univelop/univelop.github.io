---
layout: default
title: Tabelle
parent: Erweiterte Bausteine
grand_parent: Die Bausteine und deren Einstellungen
nav_order: 10
---

# <span style="color:#0b5394"><span class="material-icons">table_chart</span> **Baustein *Tabelle***</span>

Mit dem Baustein *Tabelle* können innerhalb eines Listeneintrags Einträge zu einer verbundenen Liste hinzugefügt, bearbeitet und gelöscht werden. So kann beispielsweise innerhalb eines Projekt-Eintrages der Einsatz der eigenen Fahrzeuge und Baumaschinen geplant und dargestellt werden.
In der Tabelle gibt es folgende Funktionalitäten:

![table1](\assets\record-spec-settings\1table.png "table1")

1. <span style="color:#0b5394">**Öffnen des gesamten Listeneintrages**</span>
2. <span style="color:#0b5394">**Optionen zum Eintrag**</span>  
    Bei Klick auf das Icon öffnen sich die Optionen, den Eintrag zu duplizieren oder zu löschen.
3. <span style="color:#0b5394">**neue Zeile**</span> 
    Erzeugt eine neue Zeile. Der Baustein, über den die Tabelle verbunden ist, wird vorbelegt. Hier z. B. *Hausbau* beim Feld *Zugehöriges Projekt*.  
4. <span style="color:#0b5394">***Datensatz* Vorbelegen (hier *"Baumaschinen vorbelegen"*)**</span>  
    Für diese Funktion muss ein [Baustein *Datensatz*](/docs/record-spec-settings/grand-child-expanded/record.html) in der ersten Spalte liegen, welcher mit einer Liste [verbunden](/docs/link-lists.html) ist. Beim Vorbelegen wird für jeden Datensatz, der in dieser verbundenen Liste liegt, ein Tabelleneintrag erzeugt. So kann mit einem Klick ein Tabelleneintrag für z. B. jeden Mitarbeiter oder für jede Baumaschine im Fuhrpark erzeugt werden.  
5. <span style="color:#0b5394">**Pfeile zur Navigation**</span>  
    Bei Endgeräten mit Tastatur auch mit Pfeiltasten möglich.
6. <span style="color:#0b5394">**Wert übertragen**</span>
    Ermöglicht den eingetragenen Wert in die darunter liegende Zelle zu kopieren. Auch über Strg + D möglich.    
7. <span style="color:#0b5394">**Feld zum Ausfüllen der ausgewählten Zelle**</span>
8. <span style="color:#0b5394">**Kopierten Wert einfügen**</span>
    Hat man einen Wert aus der Tabelle mit Strg + C bzw. 9. kopiert, so kann man diesen in eine andere Zelle über dieses Icon bzw. Strg + V einfügen. 
9. <span style="color:#0b5394">**Zellenwert kopieren**</span>
    Kopiert den Zellenwert (auch per Strg + C).

![table2](\assets\record-spec-settings\2table.png "table2")

Folgende Einstellungen bietet die Tabelle:

1. <span style="color:#0b5394">**Verknüpfung mit**</span>  
    Hier wird die Liste ausgewählt, die durch die Tabelle stellvertretend dargestellt wird.
2. <span style="color:#0b5394">**Verknüpfung über**</span>  
    *Optionale Einstellung*, hier wird der Baustein *Datensatz* gewählt, über den die Vorbelegung beim Erstellen und auch das automatische Erzeugen der Zeilen läuft. Dieses referenziert die Tabelle, in welcher der Datensatz angezeigt werden soll.
3. <span style="color:#0b5394">**Filter und Sortierung**</span>  
    Filtern und Sortieren der Einträge der Tabelle
4. <span style="color:#0b5394">**Bausteine für Tabelle**</span>  
    Für jede Tabelle können beliebige Bausteine der verbundenen Liste (= Spalten) ausgewählt und für die Darstellung innerhalb der Tabelle beliebig umsortiert werden. 
5. <span style="color:#0b5394">**Autmoatisches Erzeugen von Zeilen erlauben**</span>  
    Ist diese Option aktiv, wird die obige Funktion *Datensatz Vorbelegen* (3.) freigeschaltet.
6. <span style="color:#0b5394">**Filter und Sortierung beim Erzeugen**</span>  