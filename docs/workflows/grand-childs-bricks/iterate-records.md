---
layout: default
title: Iteriere über Einträge
parent: Workflow Bausteine
grand_parent: Workflows
nav_order: 3
---

# <span style="color:#0b5394"><span class="material-icons">list</span> **Iteriere über Einträge**</span>

Mit dem Baustein *Iteriere über Einträge* können Workflow Bausteine für jeden Eintrag einer Kachel ausgeführt werden. 

![iterate records docs](\assets\workflows\iterate records docs.png "iterate records docs")
1. <span style="color:#0b5394">**Technischer Name**</span>  
    Über diesen Namen werden die Bausteine und Daten der Einträge in folgenden Workflow-Bausteinen referenziert, bspw. bestellungen.id für die ID des aktuellen Eintrages. 
2. <span style="color:#0b5394">**Verknüpfung mit**</span>  
    Die verknüpfte Kachel bzw. Liste, dessen Einträge durchlaufen werden
3. <span style="color:#0b5394">**Filter und Sortierung**</span>  
    Mit Filtern kann die Auswahl der Einträge genauer eingeschränkt werden. Für jeden gefundenen Eintrag aus der angegebenen Liste, welcher die Filter erfüllt, wird der restliche Workflow einmal ausgeführt.
    Die Sortierreihenfolge beeinflusst die Ausführungsreihenfolge.