---
layout: default
title: Unterschrift
parent: Erweiterte Bausteine
grand_parent: Die Bausteine und deren Einstellungen
nav_order: 21
---

# <span style="color:#0b5394"><span class="material-icons">gesture</span> **Baustein _Unterschrift_**</span>

Mit dem Baustein _Unterschrift_ kann je Datensatz / je Baustein eine Unterschrift erfasst werden.
Zu jeder Unterschrift kann auch eine Klausel erfasst werden (z. B. Hinweis auf AGBs, etc.).

Im Bearbeitungsmodus ist ein Klick auf das weiße Feld "Hier unterschreiben" notwendig.

![signature](\assets\record-spec-settings\1signature.png 'signature')

Es öffnet sich ein neues Fenster, in dem die festgelegte Klausel noch einmal erscheint. Unterschrieben
werden kann auf einem mobilen Endgerät auf dem Display oder per Mauszeiger. Des Weiteren kann
der Namen der Person zu notieren. Wird die Unterschrift gespeichert, wird neben dem Klarnamen auch
das Unterschriftsdatum ausgegeben.

![signature](\assets\record-spec-settings\1signature2.png 'signature')

**Beispielergebnis:**  
![signature](\assets\record-spec-settings\1signature3.png 'signature')

Das Löschen der Unterschrift erfolgt auf gleichem Weg wie das Unterschreiben.
Ein Klick auf das Unterschrifts-Feld und anschließend über den Button "Löschen" die Erfassung
löschen. Die Erfassung der Unterschrift ist sowohl online- als auch offlinefähig.

Um beim [PDF-Ausdruck](/docs/record-spec-settings/grand-child-expanded/create-pdf.html) eines Eintrages mit Unterschrift neben dieser auch noch
den eingetragenen Namen und das Datum der Unterschrift einzufügen, kann hinter dem
technischen Namen des Baustein _Unterschrift_ "\_text" hinzugefügt werden.
Heißt ein Baustein _Unterschrift_ bspw. "signatur", so wird dieser in einer
docx-Vorlage für den Baustein [_PDF erstellen_](/docs/record-spec-settings/grand-child-expanded/create-pdf.html) über "signatur_text" referenziert, damit auch der Name und das Datum der Unterschrift mit eingefügt werden.
