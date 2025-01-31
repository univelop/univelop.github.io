---
layout: workflow-step
title: Lösche Datei
parent: Erweitert
grand_parent: Workflows
icon: description
---

Mit dem Schritt _Lösche Datei_ kann eine Datei aus einem Datei Upload oder Bild Upload Baustein gelöscht werden.
Der angegebene Dateiname muss case-sensitiv vorhanden sein. Das heißt Groß- und Kleinschreibung wird beachtet.

Um mehrere Dateien zu löschen, kann ein _Iteriere über Werte_ Schritt mit dem Ausdruck `fileNames(eintrag.dateiupload)` genutzt werden. Innerhalb dieser Iteration kann anschließend der _Lösche Datei_ Schritt verwendet werden.