---
layout: default
title: Suchen und Filtern
nav_order: 7
---

# <span style="color:#0b5394">**Suchen und Filtern**</span>

## <span style="color:#0b5394">Suchen</span>

Mit dem Lupen Symbol kann innerhalb einer Liste, einer Filterkachel oder verknüpften Datensatz Liste 
(Link zur Liste) nach Inhalten gesucht werden. Die Suche öffnet sich ebenfalls, wenn man den
Datensatz Baustein bedienen möchte.

Univelop bietet eine Volltextsuche an, keine Fragmentsuche. Dies bedeutet, dass immer mit dem ganzen
Wert, den es zu finden gilt, gesucht werden muss. Suche ich nach Herr Meyer, werde ich mit "Mey" bereits
fündig, jedoch nicht mit "yer", da die Suche am Anfang des Wortes beginnt.
Die Suche umfasst alle Werte / Bausteine innerhalb eines Datensatzes.

Die Sortierung erfolgt so, dass zuerst die genauen Suchergebnisse ausgegeben werden und im Anschluss
ähnliche Werte. Weiterhin ist die Sortierung der Suche nicht einstellbar, die Werte erscheinen in der
Reihenfolge, in der die Datenbank die Werte findet. Möchte ich diese Werte sortiert angezeigt haben,
empfiehlt es sich die Filterung und Sortierung zu verwenden.

## <span style="color:#0b5394">Filter und Sortierung</span>

Eine Sortierung kann überall dort eingestellt werden, wo ich eine Liste von Datensätzen zur Verfügung habe.
Bedeutet in Basis Listen, Filterkacheln, sowie den Bausteinen Datensatz-Liste, Tabelle, Matrix etc.
Die globale Einstellung wird im Designmodus des jeweiligen Objektes (Kachel, Baustein) vorgenommen.

Wenn ich die Filterung und Sortierung im Objekt einstelle, wird sie beim Öffnen des Objektes jeweils voreingestellt.
Verändere ich die Filter / Sortierung im Bearbeitungsmodus in einer Liste von Datensätzen, ist die Änderung nur 
temporär und wird mit Verlassen der Liste wieder zurückgesetzt auf die Einstellungen, die im Designmodus hinterlegt
worden sind.

Die Sortierung der Datensätze kann auf- und absteigend nach einem bestimmten Baustein geändert werden. 
Gleiches gilt für verknüpfte Datensätze. Zu beachten ist, dass Zahlen in Textfeldern nicht nummerisch sortiert werden, sondern
der Größe nach. 

Im konkreten Beispiel bedeutet dies:

|Sortierung Nummernfeld         |Sortierung Textfeld        |
------                           ------
|1                              |1                          |
|2                              |10                         |
|3                              |2                          |
|...                            |...                        |
|10                             |9                          |


Bei der PDF-Ausgabe einer verknüpften Datensatz-Liste über die repeat Funktion, werden die Daten in der im Baustein 
eingestellten sortierten Reihenfolge ausgegeben. Wenn die Sortierung nach mehr als einem Feld, 
zum Beispiel Name Blockweise & Datum aufsteigend erfolgen soll, muss eine Textformel zur Kombination dieser Werte
verwendet werden.

Die Filterung von Daten ist über beliebig viele Filter auf einzelnen Bausteinen und ihrer Werte möglich.
Zu beachten ist, dass wenn ich mehr als einen Filter anwende, diese als UND miteinander verbunden sind.
Wenn ich also zwei Filter mit Mitarbeiter/in = Herr Meyer und Mitarbeiter/in = Frau Müller eingebe, werden keine Ergebnisse ausgegeben.
Wenn ich stattdessen beide im "in" (Oder) Filter verwende, kann ich sie kombinieren und mir beide Ergebnisse anzeigen lassen.

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

## <span style="color:#0b5394">Lückenhafte Ergebnisse</span>

Bei Verwendung von Filtern auf großen Datenmengen kann folgender Hinweis erscheinen:

'Es wurden mehr als 200 Einträge gefunden. Die Ergebnisse sind lückenhaft. Bitte verfeinere die Suche.'

Die Verwendung der angegebenen Filter hat mehr als 200 Ergebnisse zurückgegeben. Es werden nur 200 Einträge angezeigt. Die Ergebnisse können daher Lücken enthalten. Um die Ergebnisse zu verfeinern und genauer auf Ihre Bedürfnisse abzustimmen, empfehlen wir, weitere Filter hinzuzufügen und so die Ergebnismenge zu reduzieren. Durch die Hinzufügung von spezifischen Gleichheitsfiltern (=, in) können Sie Ihre Suche eingrenzen und gezieltere Ergebnisse erzielen. Bitte verwenden Sie keine Ungleichheitsfilter (<, <= , >, >=) für die weitere Eingrenzung.

Zeigen Sie zum Beispiel über den "Letzte 2 Monate" Filter nur Einträge an, die im aktuellen oder letzten Monat angelegt oder bearbeitet wurden.

![Filter letzte zwei Monate](\assets\search-and-filters\last-two-month-filter.png)

Wir empfehlen Ihnen, verschiedene Kombinationen von Filtern auszuprobieren, um die bestmöglichen Ergebnisse zu erzielen. Wenn Sie weitere Unterstützung benötigen, zögern Sie nicht, sich an unseren Kundendienst zu wenden, der Ihnen gerne weiterhilft.

## <span style="color:#0b5394">Suche konnte nicht ausgeführt werden</span>

Bei der Verwendung von spezifischen Filterkombinationen, kann die Suche nicht richtig ausgeführt werden. Es erscheit folgende Meldung:

![Suche konnte nicht ausgeführt werden](\assets\search-and-filters\ugly-search.png)

Es ist wichtig zu beachten, dass bei der Kombination von Gleichheits- und Ungleichheitsfiltern die Gleichheitsfilter zuerst auf dem Server angewendet werden. Wenn die Anzahl der übereinstimmenden Datensätze jedoch immer noch zu groß ist, können die Ungleichheitsfilter möglicherweise nicht mehr angewendet werden. In diesem Fall werden ggf. keine Ergebnisse zurückgegeben.

Um die Anzahl der übereinstimmenden Datensätze zu reduzieren, können Sie spezifischere Gleichheitsfilter hinzufügen. Sobald die Anzahl der Ergebnisse, die vom Server zurückgegeben wird, 200 oder kleiner ist, kann die Suche korrekt ausgeführt werden.

Wenn Sie weitere Hilfe benötigen, zögern Sie nicht, sich an unseren Kundendienst zu wenden. Wir helfen Ihnen gerne weiter, um sicherzustellen, dass Ihre Suche erfolgreich ist und die gewünschten Ergebnisse liefert.
