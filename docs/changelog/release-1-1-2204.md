---
layout: title
title: Release Version 1.1.0
nav_order: 98
parent: Changelog
---

Folgende Neuerungen und Verbesserungen wurden mit der Version 1.1.0 ausgerollt:

## <span style="color:#0b5394">**Baustein _Artikel Scanner_**</span>

Der Baustein _Artikel Scanner_ reiht sich nun in die Bausteinfamilie mit ein. Über diesen Baustein besteht die Möglichkeit im Handumdrehen z. B. in der Lagerhaltung sämtliche Warenein- und ausgänge zügig zu dokumentieren. Dazu wird ein scannerfähiges Endgerät benötigt, wo ebenfalls Univelop installiert werden kann. Werden die Artikel entsprechend gescannt, werden die vorhandenen Felder entsprechend ausgefüllt.

Ein weiterer Baustein, der die alltägliche Arbeit um ein vielfaches vereinfacht. Sprecht uns gerne darauf an.

![release article scanner](\old_assets\latest-updates\release article scanner.png "release article scanner")

## <span style="color:#0b5394">**Offlinefähigkeit für Bilder- und Dateiupload**</span>

Ab sofort wird der Offlinemodus auch auf Bilder- und Dateiuploads ausgeweitet. Sollte das jeweilige Endgerät nicht über eine Netzwerkverbindung verfügen, können Bilder und Dateien trotzdem dem jeweiligen Datensatz hinzugefügt werden. Sobald eine Verbindung zu dem Server wieder aufgebaut ist, findet der Datenaustausch statt. Ebenfalls werden bereits gelöschte Bilder bei diesem Datenaustausch berücksichtigt.

## <span style="color:#0b5394">**Anzeige des Wochentags im Baustein _Datum_**</span>

Der Baustein _Datum_ wurde erweitert und es kann sich nun zusätzlich zu dem Datum auch der Wochentag angezeigt werden lassen. Dazu ist in den Einstellungen des Bausteins ein Switch eingebaut, der dazu führt, dass vor dem Datum das jeweilige Wochentag-Kürzel mit angezeigt wird.

![release date with day of the week](\old_assets\latest-updates\release date with day of the week.png "release date with day of the week")

## <span style="color:#0b5394">**Performanceverbesserungen**</span>

Wie viele von euch feststellten, kam es in der letzten Zeit hin und wieder zu Abnahme der Performancegeschwindigkeit. Die Nutzung der Filter in den einzelnen Listen verursachte diese Probleme. Grund dafür was das Abrufen sämtlicher Datensätze aus dem Backend, welche anschließend erst im Frontend gefiltert wurden. Dieses Problem wurde nun behoben. Weitere Verbesserungen hinsichtlich der Performance werden weiter vorgenommen.

### <span style="color:#0b5394">**Weitere Verbesserungen**</span>

-   Baustein _Datei Upload_ - Vorschauansicht wird beim Hinzufügen/Löschen von einer Datei jetzt aktualisiert
-   Baustein _Datensatz sperren_ wurde erweitert mit zusätzlichen Prüfpunkten (z. B. nachträgliches Löschen von Pflichtangaben, etc.)
-   Im Baustein _Status_ ist das Scrollen per Maus wieder möglich
