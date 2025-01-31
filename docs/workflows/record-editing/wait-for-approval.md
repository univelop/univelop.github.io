---
layout: workflow-step
title: Warte auf Genehmigung
parent: Einträge bearbeiten
grand_parent: Workflows
icon: approval
nav_order: 5
redirect_from:
    - /docs/workflows/grand-childs-bricks/await-approval.html
    - /docs/workflows/edit-records/wait-for-approval.html
---

Über den Baustein _Warte auf Genehmigung_ wird auf die Genehmigung, Ablehnung oder auf eins von Beidem gewartet und dadurch der Workflow gestoppt, bis das Ereignis eintritt.

![await approval docs](\assets\workflows\await approval docs.png "await approval docs")

1. <span style="color:#0b5394">**Warten auf**</span>  
   Ereignis, auf das gewartet werden soll. Es kann auf ein die Genehmigung, die Ablehnung, oder beliebiges von beidem gewartet werden.
2. <span style="color:#0b5394">**Verknüpfen mit Liste**</span>  
   Die Liste, die den Eintrag enthält, welcher genehmigt werden soll.
3. <span style="color:#0b5394">**Verknüpfen mit Baustein**</span>  
   Der Baustein _Genehmigung_, auf dessen Aktion gewartet wird.
   Achtung: der technische Name dieses Bausteins muss gesetzt sein!
4. <span style="color:#0b5394">**Eintrag ID**</span>  
   Die ID zum eindeutigen Identifizieren des Eintrags, welcher genehmigt wird.
