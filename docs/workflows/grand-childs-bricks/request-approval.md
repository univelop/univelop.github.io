---
layout: default
title: Genehmigung anfordern
parent: Workflow Bausteine
grand_parent: Workflows
nav_order: 12
---

# <span style="color:#0b5394"><span class="material-icons">approval</span> **Genehmigung anfordern**</span>

Über den Baustein *Genehmigung anfordern* wird die Genehmigung auf einen verbundenen [Baustein *Genehmigung*](/docs/record-spec-settings/grand-child-expanded/approval.html) angefordert. Bei erfolgreicher Anforderung läuft der Workflow ohne Stopp weiter. 
Sofern schon der Eintrag genehmigt wurde geschieht in diesem Schritt nichts.

![request approval docs](\assets\workflows\request approval docs.png "request approval docs")
1. <span style="color:#0b5394">**Verknüpfen mit**</span>  
    Kachel zu der der Eintrag gehört, welcher geändert werden soll.
2.  <span style="color:#0b5394">**Verknüpfen mit Baustein**</span>    
    Der [Baustein *Genehmigung*](/docs/record-spec-settings/grand-child-expanded/approval.html), auf dessen Aktion gewartet wird. 
    Achtung: der technische Name dieses Bausteins muss gesetzt sein!
3. <span style="color:#0b5394">**Eintrag ID**</span>  
    Die ID zum eindeutigen Identifizieren des Eintrags, welcher genehmigt wird.