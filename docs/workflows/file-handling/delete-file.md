---
layout: workflow-step
title: Lösche Datei
parent: Dateihandling
grand_parent: Workflows
icon: description
nav_order: 2
redirect_from:
    - /docs/workflows/advanced/delete-file.html
---

Mit dem Schritt _Lösche Datei_ kann eine Datei aus einem Datei Upload oder Bild Upload Baustein gelöscht werden.
Der angegebene Dateiname muss case-sensitiv vorhanden sein. Das heißt Groß- und Kleinschreibung wird beachtet.

Um mehrere Dateien zu löschen, kann ein _Iteriere über Werte_ Schritt mit dem beispielhaften Ausdruck `fileNames(produkt_eintrag.dateiupload)` genutzt werden. Innerhalb dieser Iteration kann anschließend der _Lösche Datei_ Schritt verwendet werden.

![Löschen innerhalb einer iteration](/assets/workflows/advanced/delete-file/iteration.png)
