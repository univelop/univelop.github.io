---
layout: workflow-step
title: Mitgliederrolle ändern
parent: Benutzerverwaltung
grand_parent: Workflows
icon: switch_account
nav_order: 5
---

Mit dem Baustein _Mitgliederrolle ändern_ werden die Rollen eines Mitglieds im aktuellen Arbeitsbereich angepasst.
Damit können in Workflows z. B. neue Berechtigungen automatisch vergeben werden, sobald sich die Stammdaten eines Mitarbeiters ändern, ohne dass die Rollen manuell in der Mitgliederverwaltung gepflegt werden müssen.

Das Mitglied wird über die E-Mail-Adresse, die ID des Eintrags aus der Mitgliederkachel oder die Nutzer-ID identifiziert.

### <span style="color:#0b5394">**Einstellungen**</span>

1. <span style="color:#0b5394">**Mitglieds-ID oder E-Mail**</span> — E-Mail-Adresse, Mitgliedssatz-ID oder Nutzer-ID des Mitglieds, dessen Rollen geändert werden sollen.
1. <span style="color:#0b5394">**Modus**</span> — bestimmt, wie die ausgewählten Rollen angewendet werden:
    - **Rolle hinzufügen**: Die ausgewählten Rollen werden zu den bereits zugewiesenen Rollen des Mitglieds hinzugefügt. Bestehende Rollen bleiben erhalten.
    - **Rolle ersetzen**: Alle bisherigen Rollen des Mitglieds werden durch die ausgewählten Rollen ersetzt. In diesem Modus muss zwingend eine aktive Rolle gesetzt werden.
1. <span style="color:#0b5394">**Mögliche Rollen / Hinzuzufügende Rollen**</span> — Liste der Rollen, die dem Mitglied zugewiesen werden. Die Bezeichnung wechselt je nach gewähltem Modus.
1. <span style="color:#0b5394">**Aktive Rolle**</span> — optionale Rolle (im Modus _Rolle ersetzen_ erforderlich), die nach Ausführung des Schritts als aktive Rolle des Mitglieds gesetzt wird. Die aktive Rolle muss Teil der ausgewählten Rollen sein.

### <span style="color:#0b5394">**Hinweise**</span>

-   Die Systemrollen **Administrator** und **Eigentümer** können mit diesem Schritt nicht zugewiesen oder entzogen werden. Im Modus _Rolle ersetzen_ behalten Mitglieder mit Administrator- oder Eigentümerrolle diese Rollen automatisch.
-   Der Schritt ist nur in **server-seitigen Automatisierungen** sowie in **Geschäftsprozessen** verfügbar.
