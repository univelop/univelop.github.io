---
layout: title
title: Plan-Annotationen
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 39
---

Mit dem Baustein _Plan-Annotationen_ wird ein Plan als PDF hinterlegt und mit Markierungen versehen. Hinter jeder Markierung steht ein vollständiger Datensatz. So lassen sich Mängel einer Baustellenbegehung im Grundriss verorten, Prüfpunkte einer Wartung im Anlagenschema oder Geräte in einem Lageplan.

Anders als beim Baustein [Zeichnung](drawing.md) wird der Plan selbst nicht verändert. Die Markierungen liegen als eigenständige Datensätze in einer verknüpften Liste und lassen sich dort filtern, auswerten und in Workflows verwenden.

Im Datensatz erscheint der Baustein als Zeile, die die Planansicht öffnet. Dort wählt man links den Plan aus, langes Drücken auf eine freie Stelle legt eine neue Markierung an und öffnet deren Datensatz, langes Drücken auf eine bestehende Markierung verschiebt sie. Ein einfacher Klick öffnet den zugehörigen Datensatz neben dem Plan. Über das Menü oben rechts werden Pläne hochgeladen, heruntergeladen und gelöscht.

Konkret: Neben der Liste mit dem Baustein (z. B. _Begehungen_) wird eine zweite Liste für die Markierungen benötigt (z. B. _Mängel_). Diese muss einen Datensatz Baustein zurück auf die erste Liste enthalten, ein Textfeld für den Dateinamen sowie zwei Nummern-Bausteine für die Position. Die Bausteine für Dateiname und Position werden automatisch befüllt und sollten für den Endnutzer versteckt werden.

{: .hint }
_Plan-Annotationen_ ist ein [Power Feature](../../power-features.md). Nutzer ohne Power User-Lizenz können den Plan und seine Markierungen nur ansehen.

{: .warning }
Der Baustein zeigt immer nur die **erste Seite** eines PDFs an. Mehrseitige Pläne werden nicht unterstützt.

## <span style="color:#0b5394">Einstellungen</span>

1. <span style="color:#0b5394">**Verknüpfung mit**</span>  
   Die Liste, in der pro Markierung ein Datensatz angelegt wird. Wird sie nachträglich geändert, werden alle folgenden Auswahlen zurückgesetzt.
2. <span style="color:#0b5394">**Verknüpfung über**</span>  
   Baustein _Datensatz_ in der Liste der Markierungen, der auf den Datensatz mit dem Plan zurück zeigt. Aktiviere darin die Einstellung _Diesen Datensatz löschen/duplizieren, wenn verknüpfter Datensatz gelöscht oder dupliziert wird_.
3. <span style="color:#0b5394">**Filter**</span>  
   Schränkt ein, welche Markierungen auf dem Plan angezeigt werden, z. B. nur offene Mängel.
4. <span style="color:#0b5394">**Datei-Baustein**</span>  
   Baustein _Textfeld_ mit dem Dateinamen des Plans, zu dem die Markierung gehört.
5. <span style="color:#0b5394">**X-Positionsbaustein**</span>  
   Baustein _Nummer_ mit der waagerechten Position der Markierung.
6. <span style="color:#0b5394">**Y-Positionsbaustein**</span>  
   Baustein _Nummer_ mit der senkrechten Position der Markierung.
7. <span style="color:#0b5394">**Farben-Baustein / Icon-Baustein**</span>  
   _Optionale Einstellung_, bestimmt Farbe und Symbol der Markierung. Ein Baustein _Status_ oder _Drop-Down_ liefert Farbe und Symbol der ausgewählten Option, ein Baustein _Farbauswahl_ nur die Farbe.
8. <span style="color:#0b5394">**Auf eine Datei beschränken**</span>  
   Erlaubt genau einen Plan pro Datensatz. Ist die Option aus, kann die _Maximale Anzahl an Dateien_ festgelegt werden (Standard: 100).
9. <span style="color:#0b5394">**Bestehende Datei überschreiben**</span>  
   Nur bei einer einzelnen Datei verfügbar. Ein neuer Upload ersetzt dann den vorhandenen Plan.

Zusätzlich stehen die [allgemeinen Baustein-Einstellungen](../common-settings.md) zur Verfügung. Ist der Baustein als Pflichtfeld gesetzt, muss mindestens ein Plan hochgeladen sein.
