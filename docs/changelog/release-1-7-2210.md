---
layout: title
title: Release Version 1.7.0
nav_order: 92
parent: Changelog
---

Folgende Neuerungen und Verbesserungen wurden mit der Version 1.7.0 ausgerollt:

## <span style="color:#0b5394">**Workflows**</span>

Mit den neuen Workflows lassen sich einfache Arbeitsabläufe auf Basis von Listeneinträgen innerhalb von Univelop modellieren und automatisieren. So können bspw. durch den dazugehörigen, neuen Listen-Baustein _Workflow_ bei einem abgeschlossenen Auftrag eine Rechnung oder ein Protokoll in Form eines neuen, ausgefüllten Eintrages erstellt werden. Diese neuen Arbeitsabläufe bestehen aus (Workflow-)Bausteinen, welche wie bei Univelop üblich per Drag-and-Drop zusammengestellt werden, und ihre eigenen Einstellmöglichkeiten bieten. Somit ist es weiterhin leicht, ohne Programmierkenntnisse eigene Workflows zu entwerfen.

![release workflows](\old_assets\latest-updates\release workflows.png "release workflows")

## <span style="color:#0b5394">**Übernehmen von Daten aus beliebigen Bausteinen in Textbaustein**</span>

Beim Übernehmen von Werten bei verknüpften Datensätzen ist es ab sofort möglich, Werte aus Bausteinen, wie z. B. einem Baustein _Drop-Down_, _Status_ oder auch _Nummer_, in einen Baustein _Text_ zu übernehmen. So benötigt es nicht mehr, identische Bausteine in verbundenen Listen zum Übertragen von Werten zu haben und dadurch kann man sich das Kopieren einer Eintragkonfiguration sparen. Es braucht nur Textbausteine in einer verbundenen Liste zu haben, um Werte kopieren zu können.

## <span style="color:#0b5394">**Sammelbearbeitung von Einträgen**</span>

Da das Bearbeiten von mehreren Einträgen bisher das Öffnen und Ändern jedes einzelnen Eintrages bedarf, auf Dauer nervig werden kann und überflüssig Zeit klaut, haben wir in Univelop die Mehrfachauswahl für Listen implementiert.
Die Mehrfachauswahl lässt im Designmodus der Listenansicht zuschalten, wo sich auch dafür bis zu 3 Aktionen zu den Favoriten hinzufügen lassen. Öffnet man die Mehrfachauswahl, kann man für beliebig viele Einträge jeden einzelnen Baustein bearbeiten oder die Einträge ganz löschen.

## <span style="color:#0b5394">**Baustein _Abmessungen_**</span>

Für Abmessungen von bestimmten Artikeln, Materialien oder Geräten haben wir in Univelop den Baustein _Abmessungen_ implementiert.
Mit diesem neuen Baustein können bis zu 4 Felder angezeigt und mit einer Bezeichnung und einer Einheit versehen werden.
In diese können Zahlenwerte eingetragen werden, welche per Einstellung beliebig viele Nachkommastellen mit anzeigen.
Ein Feld für den Gesamtbetrag kann bei Bedarf eingeblendet werden, welcher in den Einstellungen eine Formel und eine Einheit bekommt, um z. B. das Produkt von vorigen 3 Feldern zu berechnen. So kann bspw. die Abmessung eines Kabels oder eines Tanks inklusive berechneten Volumens kompakt in einem einzigen Baustein angezeigt werden. Dadurch wird ein Eintrag deutlich schmaler, denn eine Kombination aus 1 oder mehr Bausteinen _Nummer_ und einem Baustein _Zahlen-Formel_, um solche Maße zu speichern, ist nicht mehr notwendig.

![release measure brick](\old_assets\latest-updates\release measure brick.png "release measure brick")

## <span style="color:#0b5394">**Duplizieren von Kacheln**</span>

In der neuen Version gibt es für alle Kacheln, die keine einfache Liste sind, die Funktion, diese zu duplizieren.
Hat man bspw. eine Filter-Kachel für noch offene Lieferungen, und braucht eine weitere Filter-Kachel für abgeschlossene Lieferungen, so kann man mit einem Klick die bestehende Kachel duplizieren und dessen Einstellungen abzuändern.
Dadurch können einige Klicks im Vergleich zum klassischen Erstellen einer neuen Kachel gespart, und eventuelle Fehler beim Übertragen der Einstellungen vermieden werden.

## <span style="color:#0b5394">**Bedienungsoptimierung für den Baustein _Tabelle_**</span>

Wer häufig Excel oder ähnliche Tabellenbasierte Programme am PC nutzt, weiß auch die Bedienung per Tastatenkombinationen zu schätzen.
Um die Arbeit mit unserem Baustein _Tabelle_ zu vereinfachen, kann nun bspw. durch Pfeil-Tasten zwischen Zellen navigiert werden.
Außerdem lässt sich auf dem PC mit 'Strg + C/Strg + V' arbeiten, sowie über 'Strg + D' der Wert der darüberliegenden Zelle übertragen; in der App gibt es dafür einen Button mit der selben Funktion. Per Doppelklick auf eine Zelle wird auch direkt die Eingabe ermöglicht.
Desweiteren gibt es kleine Anpassungen für eine verbesserte Darstellung.

## <span style="color:#0b5394">**Verbesserte Schnellerfassung**</span>

Wir haben die Usability der Schnellerfassung überarbeitet. Nun können Einträge auf- und wieder zugeklappt werden. Weiterhin haben wir das Anlegen neuer Einträge vereinfacht.

![release quickadd](\old_assets\latest-updates\release quickadd.png "release quickadd")

### <span style="color:#0b5394">**Weitere Verbesserungen**</span>

-   Vorbelegen des aktuellen Datums beim Baustein _Datum_ möglich
-   Diverse kleine Fehler behoben
-   Performance Verbesserungen im Designmodus
-   Performance Verbesserungen mit verknüpften Einträgen
