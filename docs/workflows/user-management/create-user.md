---
layout: workflow-step
title: Erstelle ein neues Mitglied
parent: Benutzerverwaltung
grand_parent: Workflows
icon: format_list_numbered
nav_order: 1
redirect_from:
    - /docs/workflows/grand-childs-bricks/create-user.html
    - /docs/workflows/advanced/create-user.html
---

Mit dem Schritt _Erstelle ein neues Mitglied_ wird ein neuer Benutzer-Account erstellt und dem aktuellen Arbeitsbereich hinzugefügt. In Kombination mit [Iteriere über Einträge](/docs/workflows/record-loading/iterate-records) können so automatisiert mehrere Benutzer aus Stammdaten angelegt werden.

## Einstellungen

1. **E-Mail** — Die E-Mail-Adresse des neuen Benutzers. Kann als Formel angegeben werden.
2. **Vorname** — Der Vorname des Benutzers.
3. **Nachname** — Der Nachname des Benutzers.
4. **Passwort** — Das Passwort für den Account. Entfällt bei OAuth-Authentifizierung.
5. **OAuth** — Wenn aktiviert, wird der Account für die Anmeldung über einen externen Identity Provider konfiguriert.
6. **Lizenz** — Der Lizenztyp für den Benutzer (z. B. Power-User, Essential-User, Light-User).
7. **Rollenname** — Die Rolle, die dem Benutzer im Arbeitsbereich zugewiesen wird.

## Hinweise

- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.

## Verwandte Schritte

- [Füge einen Benutzer hinzu](/docs/workflows/user-management/add-user) — Zum Hinzufügen eines bereits existierenden Benutzers
- [Erstelle Einladungslink](/docs/workflows/user-management/invitation) — Zum Erstellen eines Einladungslinks
