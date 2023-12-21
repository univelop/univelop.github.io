---
layout: default
title: Genehmigung
parent: Erweiterte Bausteine
grand_parent: Die Bausteine und deren Einstellungen
nav_order: 5
---

# <span style="color:#0b5394"><span class="material-icons">beenhere</span> **Baustein *Genehmigung***</span>

Mit dem Baustein *Genehmigung* kann ein Genehmigungsablauf zu einem Datensatz, welcher bspw. eine Bestellanforderung darstellt, gelöst werden. Ein Datensatz kann von einem ausgewählen Nutzer genehmigt oder abgelehnt werden.

![approval](\assets\record-spec-settings\1approval.png "approval")

Im ersten Schritt fordert ein Nutzer die Genehmigung von einem weiteren, berechtigten Nutzer an, welcher in den Einstellungen auch festgelegt werden kann. Nur dieser kann im zweiten Schritt nach dem Prüfen des Datensatzes diesen mit einer Bemerkung ablehnen oder genehmigen. Beim Genehmigen kann optional eine Unterschrift vom Genehmiger gefordert sein und der Datensatz gesperrt werden. Die Ablehnung oder Genehmigung kann jederzeit von einem Nutzer mit entsprechenden Rechten zurückgesetzt werden.

![2approval](\assets\record-spec-settings\2approval.png "2approval")

1. <span style="color:#0b5394">**Fester Genehmiger**</span>  
    Soll kein Genehmiger ausgewählt werden können, kann ein fester Nutzer gesetzt werden.
2. <span style="color:#0b5394">**Genehmiger Filtern**</span>  
    Sollen nicht alle Mitglieder eines Arbeitsbereiches zur Auswahl stehen, gibt es die Möglichkeit, diese anhand von Teams und Rollen zu filtern.
3. <span style="color:#0b5394">**Eintrag automatisch sperren**</span>  
    Bei Genehmigung wird der Eintrag gesperrt und kann nicht mehr verändert werden.
5. <span style="color:#0b5394">**Unterschrift erforderlich**</span>  
    Ob der Genehmiger eine Unterschrift zum genehmigen abgeben muss.
5. <span style="color:#0b5394">**Workflow starten**</span>  
    Auswahl für einen Workflow, welcher bei Genehmigung als auch Ablehnung gestartet wird.
    Der Genehmigungsworkflow kann auch die Workflowsteps "Genehmigung anfordern" und "Warte auf Genehmigung" enthalten,
    um den Genehmigungsprozess komplett abzubilden.
