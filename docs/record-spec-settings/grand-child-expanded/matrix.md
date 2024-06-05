---
layout: default
title: Matrix
parent: Erweiterte Bausteine
grand_parent: Die Bausteine und deren Einstellungen
nav_order: 11
---

# <span style="color:#0b5394"><span class="material-icons">pivot_table_chart</span> **Baustein *Matrix***</span>

Mit dem Matrix Baustein werden Buchungen bearbeitet. Diese Buchungen beziehen sich auf zwei Listen. Diese zwei Listen bilden in der Matrix die Zeilen und Spalten. Die Buchungen sind Einträge die mit der Zeile und Spalte verknüpft sind.

## <span style="color:#0b5394">Einstellungen</span>

Im folgenden wird der Baustein anhand des Beispiels von einer Produktverwaltung erklärt.

- <span style="color:#0b5394">**Spalten**</span>

  Hier wird die erste Liste gewählt, auf die sich bezogen wird. Bezogen auf das Beispiel wären das die Produkte.
  Optional kann eine Verbindung zum Eintrag der Matrix erstellt werden.

  ![matrixColumn](\assets\record-spec-settings\matrixSpalten.png "matrixColumn")
- <span style="color:#0b5394">**Zeilen**</span>

  Hier wird die zweite Liste gewählt, auf die sich bezogen wird. Bezogen auf das Beispiel wären das die Kunden, welche die Produkte in Anspruch nehmen.
  Optional kann eine Verbindung zum Eintrag der Matrix erstellt werden.

  ![matrixRow](\assets\record-spec-settings\matrixZeilen.png "matrixRow")
- <span style="color:#0b5394">**Zellen**</span>

  Hier wird die Liste gewählt, die die Buchungen enthält. Bezogen auf das Beispiel wären das die Buchungen, die die Kunden mit den Produkten verbinden.
  Optional kann eine Verbindung zum Eintrag der Matrix erstellt werden.

  ![matrixCell](\assets\record-spec-settings\matrixZellen.png "matrixCell")
- <span style="color:#0b5394">**Verknüpfung zwischen Zellen und Zeilen/Spalten**</span>

  Hier werden die Bausteine in der Buchungsliste gewählt, welche die verknüpfung der Buchungen mit den Zeilen und Spalten herstellen. 
  Bezogen auf das Beispiel wären das die Datensatz-Bausteine, die sich auf die Kunden und die Produkte beziehen.

  ![matrixLinks](\assets\record-spec-settings\matrixLinks.png "matrixLinks")
- <span style="color:#0b5394">**Darstellung der Zellen**</span>

  Hier können Bausteine gewählt werden, welche in den Zellen angezeigt werden sollen.
  Es sind nur Schalter-Bausteine in den Zellen editierbar, alle restlichen Bausteine werden nur dargestellt, wenn diese einen Wert besitzen,
  jedoch kann in diese über die Matrix kein Wert eingetragen werden.
  Für das Beispiel kann hier ein Baustein Schalter gewählt werden, der angibt ob das Produkt für gegebenen Kunden lizenziert ist.

  ![matrixDisplay](\assets\record-spec-settings\matrixDisplay.png "matrixDisplay")
- <span style="color:#0b5394">**Detailansicht und Mehrfachauswahl**</span>

  Ein- und Abschalten von Mehrfachauswahl- und Detailansicht-Buttons.

  ![matrixDetail](\assets\record-spec-settings\matrixDetail.png "matrixDetail")
- <span style="color:#0b5394">**Spaltensumme und Kapazität**</span>

  Die Spaltensumme dient dem Überblick, wie viele Zellen schon für gegebene Spalte gefüllt sind. Hier kann die Anzahl der Einträge pro Spalte 
  oder die Summe über einen Baustein gewählt werden. Diese Summe wird über alle Einträge der Spalte errechnet.
  Die Kapazität ist ein Baustein aus der Spaltenliste, der angibt wie viele Zellen maximal für die Spalte gefüllt werden können.
  Bezogen auf das Beispiel wäre für letzteres ein Zahlenbaustein geeignet, welcher angibt wie viele Lizenzen für das Produkt verfügbar sind.

  ![matrixSum](\assets\record-spec-settings\matrixSum.png "matrixSum")
- <span style="color:#0b5394">**Erweiterte Einstellungen**</span>

  Hier kann die Darstellung konfiguriert werden.
  Dazu kann eingestellt werden, ob EInträge, welche zunächst gefüllt sind, und danach geleert werden, wieder automatisch gelöscht werden sollen.

  ![matrixExtended](\assets\record-spec-settings\matrixExtended.png "matrixExtended")

## <span style="color:#0b5394">Nutzung des Bausteins</span>

Fertig konfiguriert, sollte der Baustein ungefähr so aussehen:
![matrixView](\assets\record-spec-settings\matrix view.png "matrixView")

Die Zellen sind inital nicht gefüllt, entsprechen sind alle Kapazitäten auf 0.
Sobald der Baustein Schalter in einer Zelle aktiviert wird, wird ein Eintrag für den gegebenen Kunden und das gegebene Produkt erstellt und die Kapazität um 1 erhöht.
![matrixPreview](\assets\record-spec-settings\matrixPreview.png "matrixPreview")

Tut man dies so oft, bis die Kapazität überschritten ist, wird diese rot dargestellt.
![matrixCapacity](\assets\record-spec-settings\matrixOverflow.png "matrixCapacity")

Nimmt man nun eine Zelle, und wählt diese ab, so wird der Eintrag, wenn diese Einstellung gesetzt wurde, wieder gelöscht und die Kapazität wieder um 1 verringert.

Öffnet man eine gefüllte Zelle zur Detailansicht, so wird der Eintrag der die Zelle darstellt, geöffnet.
Hier ist zu sehen, dass für den Kunden und das Produkt entsprechend der Zeilen und Spalten ausgefüllt ist, 
und auch der Schalter auf ja steht.
![matrixDetailView](\assets\record-spec-settings\matrixPopup.png "matrixDetailView")
