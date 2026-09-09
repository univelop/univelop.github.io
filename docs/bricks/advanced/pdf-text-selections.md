---
layout: title
title: PDF-Text-Markierungen
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 40
---

Mit dem Baustein _PDF-Text-Markierungen_ wird ein PDF hinterlegt, in dem der Nutzer Textstellen markieren kann. Hinter jeder Markierung steht ein vollständiger Datensatz. So werden Klauseln eines Vertrags zu Aufgaben, Anforderungen eines Lastenhefts zu Prüfpunkten oder Passagen eines Prüfberichts zu Mängeln.

Das PDF selbst wird nicht verändert. Die Markierungen liegen als eigenständige Datensätze in einer verknüpften Liste und werden beim erneuten Öffnen an ihrer Originalstelle wieder eingefärbt. Anders als bei den [Plan-Annotationen](drawing-annotations.md), kann ein mehrseitiges PDF hochgeladen werden.

Im Datensatz erscheint der Baustein als Zeile, die die PDF-Ansicht öffnet. Text markieren und lange darauf drücken legt einen neuen Datensatz an, in den der markierte Text bereits übernommen ist. Ein Klick auf eine eingefärbte Markierung öffnet den zugehörigen Datensatz. Neben dem PDF liegt eine Werkzeugleiste mit Volltextsuche, einer Navigation durch alle gespeicherten Markierungen und dem Inhaltsverzeichnis des Dokuments.

Konkret: Neben der Liste mit dem Baustein (z. B. _Verträge_) wird eine zweite Liste für die Markierungen benötigt (z. B. _Vertragsklauseln_). Diese muss einen Datensatz Baustein zurück auf die erste Liste enthalten, zwei Textfelder für Dateiname und markierten Text sowie drei Nummern-Bausteine für Seite und Textbereich. Alle bis auf den markierten Text werden automatisch befüllt und sollten für den Endnutzer versteckt werden.

{: .hint }
_PDF-Text-Markierungen_ ist ein [Power Feature](../../power-features.md). Nutzer ohne Power User-Lizenz können das PDF und seine Markierungen nur ansehen.

{: .warning }
Der Text muss im PDF als echter Text vorliegen. In gescannten Dokumenten ohne Texterkennung lässt sich nichts markieren. Eine Markierung muss innerhalb einer Seite bleiben und darf höchstens 1.000 Zeichen umfassen.

## <span style="color:#0b5394">Einstellungen</span>

1. <span style="color:#0b5394">**Verknüpfung mit**</span>  
   Die Liste, in der pro Textmarkierung ein Datensatz angelegt wird. Wird sie nachträglich geändert, werden alle folgenden Auswahlen zurückgesetzt.
2. <span style="color:#0b5394">**Verknüpfung über**</span>  
   Baustein _Datensatz_ in der Liste der Markierungen, der auf den Datensatz mit dem PDF zurück zeigt. Aktiviere darin die Einstellung _Diesen Datensatz löschen/duplizieren, wenn verknüpfter Datensatz gelöscht oder dupliziert wird_.
3. <span style="color:#0b5394">**Filter**</span>  
   Schränkt ein, welche Markierungen im PDF angezeigt werden, z. B. nur noch offene Klauseln.
4. <span style="color:#0b5394">**Baustein für PDF-Dateiname**</span>  
   Baustein _Textfeld_ mit dem Dateinamen des PDFs, zu dem die Markierung gehört.
5. <span style="color:#0b5394">**Baustein für ausgewählten Text**</span>  
   Baustein _Textfeld_, in den der markierte Text übernommen wird. Er eignet sich als Titel der Liste.
6. <span style="color:#0b5394">**Baustein für Seitenzahl**</span>  
   Baustein _Nummer_ mit der Seite, auf der die Markierung liegt.
7. <span style="color:#0b5394">**Baustein für Text-Startindex**</span>  
   Baustein _Nummer_ mit dem Anfang der Markierung innerhalb des Seitentextes.
8. <span style="color:#0b5394">**Baustein für Text-Endindex**</span>  
   Baustein _Nummer_ mit dem Ende der Markierung. Start- und Endindex sollten weder manuell noch per Workflow verändert werden.
9. <span style="color:#0b5394">**Baustein für Markierungsfarbe**</span>  
   _Optionale Einstellung_, bestimmt die Farbe der Textstelle. Ein Baustein _Status_ oder _Drop-Down_ liefert die Farbe der ausgewählten Option, ein Baustein _Farbauswahl_ die Farbe direkt.
10. <span style="color:#0b5394">**Auf eine Datei beschränken**</span>  
    Erlaubt genau ein PDF pro Datensatz. Ist die Option aus, kann die _Maximale Anzahl an Dateien_ festgelegt werden (Standard: 100).
11. <span style="color:#0b5394">**Bestehende Datei überschreiben**</span>  
    Nur bei einer einzelnen Datei verfügbar. Ein neuer Upload ersetzt dann das vorhandene PDF.

Zusätzlich stehen die [allgemeinen Baustein-Einstellungen](../common-settings.md) zur Verfügung. Ist der Baustein als Pflichtfeld gesetzt, muss mindestens ein PDF hochgeladen sein.
