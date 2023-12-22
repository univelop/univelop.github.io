---
layout: default
title: Tabelle
parent: Erweiterte Bausteine
grand_parent: Die Bausteine und deren Einstellungen
nav_order: 10
---

# <span style="color:#0b5394"><span class="material-icons">table_chart</span> **Baustein *Tabelle***</span>

Auch der *Tabellenbaustein* ist eine Darstellungsform einer Datensatz-Liste.
Mit dem Baustein *Tabelle* können innerhalb eines Listeneintrags Einträge zu einer verbundenen Liste hinzugefügt, bearbeitet und gelöscht werden. 
So kann beispielsweise innerhalb eines Projektes der Einsatz der eigenen Fahrzeuge und Baumaschinen geplant und dargestellt werden.
In der Tabelle gibt es folgende Funktionalitäten:

![table1](\assets\record-spec-settings\1table1.png "table1")

1. <span style="color:#0b5394">**Öffnen des gesamten Listeneintrages / Datensatzes**</span>
2. <span style="color:#0b5394">**Optionen zum Eintrag**</span>  
    Bei Klick auf das Icon öffnen sich die Optionen, den Eintrag zu duplizieren oder zu löschen.
3. <span style="color:#0b5394">**Neue Zeile**</span> 
    Erzeugt eine neue Zeile, bzw. einen neuen Datensatz in der verknüpften Liste. 
    Der Baustein, über den die Tabelle verbunden ist (Verknüpfung über und Filter), wird vorbelegt. 
    Hier z. B. *Hausbau* beim Feld *Zugehöriges Projekt*.  
4. <span style="color:#0b5394">***Datensatz* Vorbelegen (hier *"Baumaschinen vorbelegen"*)**</span>  
    Für diese Funktion muss ein [Baustein *Datensatz*](/docs/record-spec-settings/grand-child-expanded/record.html) in der ersten Spalte liegen, welcher mit einer Liste [verbunden](/docs/link-lists.html) ist. Beim Vorbelegen wird für jeden Datensatz, der in dieser verbundenen Liste liegt, ein Tabelleneintrag erzeugt. So kann mit einem Klick ein Tabelleneintrag für z. B. jeden Mitarbeiter oder für jede Baumaschine im Fuhrpark erzeugt werden. Die zu erzeugenden Datensätze können gefiltert werden. 


BLA BLA


---

## <span style="color:#0b5394"><span class="material-icons">table_chart</span> **Einstellungen**</span>

Folgende Einstellungen bietet die Tabelle:

![table2](\assets\record-spec-settings\2table.png "table2")


1. <span style="color:#0b5394">**Verknüpfung mit**</span>  
    Hier wird die Liste ausgewählt, die durch die Tabelle stellvertretend dargestellt wird.
2. <span style="color:#0b5394">**Verknüpfung über**</span>  
    *Optionale Einstellung*, hier wird der Baustein *Datensatz* gewählt, der den Filter auf den eigenen Datensatz zurückgibt.
    Dieses referenziert die Tabelle, in welcher der Datensatz angezeigt werden soll. Es wird immer über sich selbst verknüpft.
3. <span style="color:#0b5394">**Filter und Sortierung**</span>  
    Filtern und Sortieren der Einträge der Tabelle. Filter werden beim Erzeugen von Tabellenzeilen ebenfalls vorbelegt.
4. <span style="color:#0b5394">**Bausteine für Tabelle**</span>  
    Für jede Tabelle können beliebige Bausteine der verbundenen Liste (= Spalten) ausgewählt und für die Darstellung innerhalb der Tabelle beliebig umsortiert werden.
    Es können nur Bausteine ausgewählt werden, die in der anderen Liste verbaut worden sind. 
5. <span style="color:#0b5394">**Autmoatisches Erzeugen von Zeilen erlauben**</span>  
    Ist diese Option aktiv, wird die obige Funktion *Datensatz Vorbelegen* (3.) freigeschaltet.
    Hierzu ist ein Datensatz Baustein, der auf eine Stammdatenliste schaut notwendig.
6. <span style="color:#0b5394">**Filter und Sortierung beim Erzeugen**</span>
    Die Datensätze, die erzeugt werden, können vorgefiltert werden.
    Filtere ich zum Beispiel auf meine Fahrzeuge, könnte ich ein Feld zur Abfrage haben, welches verfügbar = Ja abfragt.