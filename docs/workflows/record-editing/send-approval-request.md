---
layout: workflow-step
title: Fordere Genehmigung an
parent: Einträge bearbeiten
grand_parent: Workflows
icon: approval
nav_order: 4
redirect_from:
    - /docs/workflows/grand-childs-bricks/request-approval.html
    - /docs/workflows/edit-records/send-approval-request.html
---

Über den Baustein _Genehmigung anfordern_ wird die Genehmigung auf einen verbundenen Baustein _Genehmigung_ angefordert. Bei erfolgreicher Anforderung läuft der Workflow ohne Stopp weiter.
Sofern schon der Eintrag genehmigt wurde geschieht in diesem Schritt nichts.

![request approval docs](/old_assets/workflows/request approval docs.png "request approval docs")

1. <span style="color:#0b5394">**Verknüpfen mit**</span>  
   Kachel zu der der Eintrag gehört, welcher geändert werden soll.
2. <span style="color:#0b5394">**Verknüpfen mit Baustein**</span>  
   Der Baustein _Genehmigung_, auf dessen Aktion gewartet wird.
   Achtung: der technische Name dieses Bausteins muss gesetzt sein!
3. <span style="color:#0b5394">**Eintrag ID**</span>  
   Die ID zum eindeutigen Identifizieren des Eintrags, welcher genehmigt wird.
