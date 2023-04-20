---
layout: default
title: Versende Push-Nachricht
parent: Workflow Bausteine
grand_parent: Workflows
nav_order: 10
---

# <span style="color:#0b5394"><span class="material-icons">notification_add</span> **Versende Push-Nachricht**</span>

Über den Baustein *Versende Push-Nachricht* wird eine individuell konfigurierte Push-Nachricht an ausgewählte Nutzer(-gruppen) versendet.

![send notification docs](\assets\workflows\send notification docs.png "send notification docs")
1. <span style="color:#0b5394">**Titel**</span>  
    Titel der Push-Notification. Einschluss von Werten aus dem Workflow mit '${variablenname}' möglich.
2. <span style="color:#0b5394">**Nachricht**</span>  
    Inhalt der Push-Notification. Einschluss von Werten aus dem Workflow mit '${variablenname}' möglich.
3. <span style="color:#0b5394">**Verknüpfung mit**</span>
    Auswahl der Kachel, falls die Push-Nachricht für einen Datensatz angezeigt werden soll.  
4. <span style="color:#0b5394">**Verknüpfte Eintrags-ID**</span> 
    Auswahl des Datensatz per ID, falls die Push-Nachricht für einen Datensatz angezeigt werden soll.
5. <span style="color:#0b5394">**Versenden an**</span>
    Art der Empfänger der Push-Nachricht.
6. <span style="color:#0b5394">**Rollen-IDs oder -namen/Team-IDs oder -namen bzw. Benutzer-IDs/Mails**</span>
    Die IDs und oder Namen der Rollen und Teams bei Versand an Benutzergruppen.
    IDs und e-Mails von Nutzern bei Versand an einzelne Nutzer.
7. <span style="color:#0b5394">**Versendezeitpunkt***</span>
    Siehe [Versandzeitpunkte von Push-Nachrichten in Arbeitsbereichen](/docs/global-settings-and-functions.html#versendezeitpunkt)