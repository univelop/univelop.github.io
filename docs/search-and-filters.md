---
layout: default
title: Suchen und Filtern
nav_order: 7
---

# <span style="color:#0b5394">**Suchen und Filtern**</span>

## <span style="color:#0b5394">Suchen</span>

Mit dem Lupen Symbol kann innerhalb der Datensatzliste oder verknüpften Datensatz Liste
nach Inhalten gesucht werden. Die Suche umfasst dabei alle Werte innerhalb eines
Datensatzes.

Die Sortierung erfolgt so, dass zuerst die genauen Suchergebnisse ausgegeben werden und im Anschluss
ähnliche Werte.

## <span style="color:#0b5394">Filter und Sortierung</span>

Die Sortierung der Kachelinhalte kann global je Kachel auf- und absteigend nach einem bestimmten
Baustein geändert werden. Gleiches gilt für verknüpfte Datensätze. Bei der Ausgabe von verknüpften
Datensätzen über die repeat Funktion werden die Daten in der sortierten Reihenfolge ausgegeben.

Die Filterung von Daten ist über beliebig viele Filter auf einzelnen Bausteinen und ihrer Werte möglich.
Ein einzelner Filter besteht aus 3 Feldern: Einem linken Feld, wo der zu filterne Baustein gewählt wird, einem mittleren Feld für den Operator und dem rechten Feld, wo der Filterwert eingetragen wird.
Für die Filterung von Daten können die Operatoren <, >, <=, >=, = oder IN (*Oder*) in die
entsprechenden Filter gesetzt werden.
Die Operatoren <, >, <=, >= filtern den ausgewählten Baustein auf Werte kleiner oder größer als der Filterwert und
exklusive (<, >) oder inklusive (<=, >=) dem Filterwert. 
Der Operator = prüft auf Gleichheit auf genau einen Wert.
Braucht es eine Prüfung auf Gleichheit mit *einem* von mehreren Werten, kann der *IN-Filter* genutzt werden. 
Für den Filterwert können beliebig viele Werte angegeben werden, welche mit Komma und darauffolgendem Leerzeichen getrennt werden müssen.
Durch den *IN-Filter* kann man z. B. Einträge filtern, die bei einem Status-Baustein einen von mehreren Zuständen haben.  

**Beispiel:** 
Alle Baumaschinen ausgeben, die sich gerade in Wartung befinden oder defekt sind.
![or filter](\assets\global-settings-and-functions\or filter.png "or filter")

Gibt es eine große kontinuierliche Spanne von Werten, wie z. B. eine laufende Nummer oder das Datum, bei der es nicht sinnvoll ist alle Werte für den IN-Filter einzutragen, kann mit einer Kombination von einem <= und einem => (bzw. < und >) Filter identisch gefiltert werden.
Damit kann man mit dem >= die untere Werteschranke angeben, und mit dem <= die obere Werteschranke.  

**Beispiel:** 
Alle Arbeitszeiten ausgeben, die zwischen dem 01.08.2022 und 01.09.2022 liegen.
![or filter date](\assets\global-settings-and-functions\or filter date.png "or filter date")
