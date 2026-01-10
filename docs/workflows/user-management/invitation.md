---
layout: workflow-step
title: Erstelle Einladungslink
parent: Benutzerverwaltung
grand_parent: Workflows
icon: add_link
nav_order: 4
redirect_from:
    - /docs/workflows/grand-childs-bricks/create-invitation-link.html
    - /docs/workflows/advanced/invitation.html
---

Mit diesem Baustein wird ein Einladungslink entsprechend der Einstellungen erstellt.
Ein Nutzer, welcher über diesen Link beitritt, bekommt die angegebene Rolle sowie die gewählte Lizenz.
Dieser Link ist im folgenden Workflow über den technischen Namen direkt als Text verwendbar.

### <span style="color:#0b5394">**Einstellungen**</span>

1. <span style="color:#0b5394">**Rollenname/-ID**</span>
1. <span style="color:#0b5394">**E-Mail (optional)**</span>
1. <span style="color:#0b5394">**Lizenzname**</span>

Aus Abwärtskompatibilitätsgründen sind derzeit folgende Lizenz-Schlüssel zu verwenden:

-   Power-User: **adminUser**
-   Essential-User: **proUser**
-   Light-User (Module): **lightUserPlus3**
-   Light-User (Part-Time): **lightUserPartTime**
-   External-User: **externalUser**
-   Test-User: **testUser**
