---
layout: default
title: Release Version 1.6.0
nav_order: 93
parent: Latest Updates
---

# <span style="color:#0b5394">**Release Version 1.6.0**</span>

Folgende Neuerungen und Verbesserungen wurden mit der Version 1.6.0 ausgerollt:

## <span style="color:#0b5394">**Zeichnen in Bildern**</span>

Für das Zeichnen in Bildern gibt es nun die neue Funktion [“Zeichnen”](/docs/record-spec-settings/grand-childs-form/upload-image.html#zeichnen-in-bildern) im Baustein [_Bild Upload_](/docs/record-spec-settings/grand-childs-form/upload-image.html). Damit spart man sich das Wechseln zwischen verschiedenen Apps zum Bearbeiten von Bildern. Will man bspw. auf einem hochgeladenen Plan bestimmte Notizen schreiben oder fotografiert man einen Schaden an einem KFZ, um diesen zu dokumentieren und auf dem Bild einzukreisen, kann man jetzt beim Öffnen dieses Bildes auf das neue Icon neben dem Teilen-Icon klicken. Dabei öffnet sich eine neue Seite. Dort gibt es die Möglichkeit, auf dem Bild zu zeichnen und Text oder verschiedene Formen einzufügen. Die Zeichen- bzw. Schriftgröße sowie die Farbe lässt sich einstellen und jeder Schritt kann rückgängig gemacht werden. Die Änderungen werden direkt in der App gespeichert, wodurch das erneute Hochladen und das Suchen nach dem bearbeiteten Foto in der Galerie wegfällt.

Diese Funktion ist zunächst nur in der Univelop-App auf Android und iOS verfügbar.

![release picture drawing](\assets\latest-updates\release picture drawing.png "release picture drawing")

## <span style="color:#0b5394">**Aufteilung der Formelbausteine**</span>

Um die Funktionalität des Formelbausteins mit unterschiedlichen Ergebnistypen zu erweitern und die Fehlermöglichkeiten auf ein Minimum zu setzten, wird der bisherige Formelbaustein nun durch vier neue Varianten ersetzt. 
Es gibt den Baustein [_Zahlenformel_](/docs/record-spec-settings/grand-child-expanded/numberformular.html), welcher eine Zahl als Ergebnis eines Ausdrucks ausrechnet. 
Hierüber können bspw. die gesamte Nutzungszeit einer Maschine oder die Gesamtkosten eines Projektes laufend angezeigt werden.  
Der Baustein [_Datumsformel_](/docs/record-spec-settings/grand-child-expanded/dateformular.html) errechnet ein Datum, wie z. B. eine voraussichtliche Frist, mittels Formel mit Datumsbaustein oder Datumsformeln.  
Die dynamische Texterzeugung aus anderen Bausteinen ermöglicht der Baustein [_Textformel_](/docs/record-spec-settings/grand-child-expanded/textformular.html). Damit kann bspw. ein standardisierter Text mit dem richtigen Adressaten ausgefüllt oder Sortiercodes erstellt werden.
Für eine einfache Anzeige, ob etwas zutrifft oder nicht, gibt es den Baustein [_Ja-Nein-Formel_](/docs/record-spec-settings/grand-child-expanded/boolformular.html). Hierüber kann direkt angezeigt werden, ob bspw. ein Material für einen Auftrag in genügender Menge vorhanden ist.

![release formula bricks](\assets\latest-updates\release formula bricks.png "release formula bricks")

## <span style="color:#0b5394">**Zeitlich gesteuerte Pushnachrichten**</span>

Die zeitlich gesteuerte Benachrichtigung der Mitglieder eines Arbeitsbereiches ist nun in der neuen Version möglich. Im Designmodus des Homescreens kann man zum Anpassen der Push-Nachrichten einen oder mehrere Versandzeitpunkte einstellen. So werden z. B. alle Änderungen nach 7 Uhr morgens, die Push-Nachrichten auslösen, erst am Folgetag um 7 Uhr morgens versendet. Diese Änderungen sind weiterhin direkt in der App einsehbar. Über Änderungen, welche ein Nutzer schon vor dem Versandzeitpunkt angesehen hat, wird er nicht mehr benachrichtigt.

### <span style="color:#0b5394">**Weitere Verbesserungen**</span>

-   Baustein “Abschnitt” auf 4 Bausteine in der Vorschau erweitert
-   Technischer Name von Stati im Baustein “Status” wird angezeigt
-   Verbesserung der Funktionalität von Datensätzen mit großen Dateien
-   Verschachtelte Aufrufe von repeat() im Baustein PDF Erstellen möglich
-   Verbesserung der Bausteins “Tabelle”
-   Verbesserung der Datensatzfreigabe
-   Weitere Funktionalitätsverbesserungen
