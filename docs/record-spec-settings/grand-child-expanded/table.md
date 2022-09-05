---
layout: default
title: Tabelle
parent: Erweiterte Bausteine
grand_parent: Die Bausteine und deren Einstellungen
nav_order: 8
---

# <span style="color:#0b5394"><span class="material-icons">table_chart</span> **Baustein *Tabelle***</span>

Mit dem Baustein *Tabelle* können innerhalb eines Listeneintrags Einträge zu einer verbundenen Liste hinzugefügt, bearbeitet und gelöscht werden. So kann beispielsweise innerhalb eines Projekt-Eintrages der Einsatz der eigenen Fahrzeuge und Baumaschinen geplant und dargestellt werden.
In der Tabelle gibt es folgende Funktionalitäten:

![table1](\assets\record-spec-settings\1table.png "table1")

1. <span style="color:#0b5394">**Feld zum Ausfüllen der ausgewählten Zelle**</span>  
2. <span style="color:#0b5394">**neue Zeile**</span>  
    Erzeugt eine neue Zeile. Der Baustein, über den die Tabelle verbunden ist, wird vorbelegt. Hier z. B. *Hausbau* beim Feld *Zugehöriges Projekt*.
3. <span style="color:#0b5394">***Datensatz* Vorbelegen** (hier *"Projekte vorbelegen"*)</span>   
    Für diese Funktion muss ein [Baustein *Datensatz*](/docs/record-spec-settings/grand-child-expanded/record.html) in der ersten Spalte liegen, welcher mit einer Liste [verbunden](/docs/link-lists.html) ist. Beim Vorbelegen wird für jeden Datensatz, der in dieser verbundenen Liste liegt, ein Tabelleneintrag erzeugt. So kann mit einem Klick ein Tabelleneintrag für z. B. jeden Mitarbeiter oder für jede Baumaschine im Fuhrpark erzeugt werden.
4. <span style="color:#0b5394">**Pfeile zur Navigation**</span>  
5. <span style="color:#0b5394">**Wert übertragen**</span>   
    Nach Ausfüllen einer Zelle öffnet sich dieses Icon, welches ermöglicht den eingetragenen Werte in die darunter liegende Zelle kopiert. 
6. <span style="color:#0b5394">**Öffnen des gesamten Listeneintrages**</span>  
7. <span style="color:#0b5394">**Optionen zum Eintrag**</span>   
    Bei Klick auf das Icon öffnen sich die Optionen, den Eintrag zu duplizieren oder zu löschen.


![table2](\assets\record-spec-settings\2table.png "table2")

Folgende Einstellungen bietet die Tabelle:

1. <span style="color:#0b5394">**Verknüpfung mit**</span>  
    Hier wird die Liste ausgewählt, die durch die Tabelle stellvertretend dargestellt wird.
2. <span style="color:#0b5394">**Verknüpfung über**</span>  
    Hier wird der Baustein *Datensatz* gewählt, über den die Vorbelegung beim Erstellen und auch das automatische Erzeugen der Zeilen läuft. 
3. <span style="color:#0b5394">**Filter und Sortierung**</span>  
    Filtern und Sortieren der Einträge der Tabelle
4. <span style="color:#0b5394">**Bausteine für Tabelle**</span>  
    Für jede Tabelle können beliebige Bausteine der verbundenen Liste (= Spalten) ausgewählt und für die Darstellung innerhalb der Tabelle beliebig umsortiert werden. 
5. <span style="color:#0b5394">**Autmoatisches Erzeugen von Zeilen erlauben**</span>  
    Ist diese Option aktiv, wird die obige Funktion *Datensatz Vorbelegen* (3.) freigeschaltet.
6. <span style="color:#0b5394">**Filter und Sortierung beim Erzeugen**</span>  