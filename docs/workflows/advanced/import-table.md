---
layout: workflow-step
title: Importiere Tabelle
parent: Erweitert
grand_parent: Workflows
icon: vertical_align_top
redirect_from:
    - /docs/workflows/grand-childs-bricks/import-excel.html
---

Mit dem Workflowstep _Importiere Excel-Tabelle_ können Daten aus einer über den Datei Upload-Baustein hochgeladenen Excel-Tabelle importiert werden.

## <span style="color:#0b5394">**Einstellungen**</span>

In den Einstellungen des Workflowsteps wird zunächst die Liste gewählt, in welcher sich der Datei-Upload Baustein, über den die Excel-Tabelle hochgeladen werden soll, befindet (1). Anschließend wird der entsprechende Datei-Upload Baustein ausgewählt (2). Abschließend gibst du die Variable ein, über die der passende Datensatz, in welchen geschrieben werden soll, ausgewählt wird (3). Dieser ist in den meisten Fällen schon vorbelegt und entspricht dem im Workflowstep „Wähle Eintrag“ gewählten Datensatz.

Mit der Option „Anzahl Kopfzeilen“ (4) wählst du aus, ab welcher Zeile in der hochgeladenen Excel-Tabelle, die zu berücksichtigenden Daten beginnen. Wenn in der ersten Zeile also die die Bezeichnungen der Spalten stehen ist der einzugebende Wert „1“.

![import excel docs](\assets\workflows\import excel docs.png "import excel docs")

## <span style="color:#0b5394">**Voraussetzungen für die Verarbeitung der Excel Tabelle**</span>

Damit die zu importierenden Daten fehlerfrei verarbeitet werden können, müssen folgende Bedingungen erfüllt sein:

-   Dateiformat: .xlsx
-   Datei darf nur ein Tabellenblatt enthalten
-   Es darf nur eine Datei über den Datei-Upload Baustein hochgeladen sein

## <span style="color:#0b5394">**Möglichkeiten zur Verarbeitung der zu importierenden Daten**</span>

Um die Daten aus der Excel Tabelle den richtigen Bausteinen in Univelop zuzuordnen, bietet sich zunächst eine Iteration über die Daten der Tabelle an. Hierzu verwendest du den Workflowstep „Iteriere über Werte“. Um über die einzelnen Zeilen der hochzuladenden Excel-Tabelle zu iterieren, wählst du unter der Option „Wert (Dynamischer Wert)“ die entsprechende Datei aus (auszuwählen über den technischen Namen, welchen du im Workflowstep „Importiere Excel-Datei“ gesetzt hast), gefolgt von dem Selektor „data“.

Um auf Grundlage der eingelesenen Daten neue Datensätze zu erstellen, verwendest du den Baustein „Erstelle neuen Eintrag“. Hier setzt du die Verknüpfung zu der Liste, in welche du die Datensätze importieren möchtest. Nun kannst du die in der Liste vorhandenen Bausteine als Variablen auswählen und mit Werten aus der Excel-Tabelle belegen. Die Spalte der hochgeladenen Tabelle, welche den zu setzenden Wert enthält wählst du mit ‚zeile[Spaltennummer]‘ aus. Beachte: die Zählung beginnt bei 0.

Beispiel:
Möchtest du Das Feld Vorname belegen und der entsprechende Wert befindet sich in deiner Excel Tabelle in Spalte A, entspricht der Wert für die Variable ‚zeile [0]‘, siehe Screenshot.

![import excel docs2](\assets\workflows\import excel docs2.png "import excel docs2")
