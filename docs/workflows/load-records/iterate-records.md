---
layout: workflow-step
title: Iteriere über Einträge
parent: Einträge laden
grand_parent: Workflows
icon: list
redirect_from:
    - /workflows/grand-childs-bricks/iterate-records.html
---

Mit dem Baustein _Iteriere über Einträge_ können Workflow Bausteine für jeden Eintrag einer Kachel ausgeführt werden.

![iterate records docs](\assets\workflows\iterate records docs.png "iterate records docs")

1. <span style="color:#0b5394">**Technischer Name**</span>  
   Über diesen Namen werden die Bausteine und Daten der Einträge in folgenden Workflow-Bausteinen referenziert, bspw. bestellungen.id für die ID des aktuellen Eintrages.
2. <span style="color:#0b5394">**Verknüpfung mit**</span>  
   Die verknüpfte Kachel bzw. Liste, dessen Einträge durchlaufen werden
3. <span style="color:#0b5394">**Filter und Sortierung**</span>  
   Mit Filtern kann die Auswahl der Einträge genauer eingeschränkt werden. Für jeden gefundenen Eintrag aus der angegebenen Liste, welcher die Filter erfüllt, wird der restliche Workflow einmal ausgeführt.
   Die Sortierreihenfolge beeinflusst die Ausführungsreihenfolge.
4. <span style="color:#0b5394">**Schritte parallel ausführen/Auf alle Durchläufe abwarten**</span>  
   Über die Einstellung _Schritte parallel ausführen_ werden alle gefundenen Einträge nicht hintereinander,
   sondern "nebeneinander", also gleichzeitig, durchgeführt. Dies bietet sich an, wenn z. B. eine Aktion pro Eintrag durchgeführt wird, welche nicht auf den vorherigen Durchlauf aufbaut. Dadurch wird auch der restliche Workflow nach dem Abschließen der ersten Iteration fortgeführt.  
   Mit _Auf alle Durchläufe warten_ wird sichergestellt, dass alle Schritte für jeden Eintrag abgeschlossen wurden, bevor der Workflow nach der Iteration fortgefahren wird.
