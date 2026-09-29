---
layout: workflow-step
title: Erstelle einen neuen Benutzer
parent: Benutzerverwaltung
grand_parent: Workflows
icon: format_list_numbered
nav_order: 1
redirect_from:
    - /docs/workflows/grand-childs-bricks/create-user.html
    - /docs/workflows/advanced/create-user.html
---

Mit dem Schritt _Erstelle einen neuen Benutzer_ wird ein neuer Benutzer-Account erstellt und dem aktuellen Arbeitsbereich hinzugefügt. In Kombination mit [Iteriere über Einträge](/docs/workflows/record-loading/iterate-records) können so automatisiert mehrere Benutzer aus Stammdaten angelegt werden.

## Einstellungen

1. **Authentifizierung über Microsoft, Google oder OAuth** — Wenn aktiviert, wird der Account für die Anmeldung über einen externen Identity Provider konfiguriert, statt mit Passwort.
2. **Lizenz** — Der Lizenztyp für den Benutzer (z. B. Power-User, Essential-User, Light-User).
3. **E-Mail** — Die E-Mail-Adresse des neuen Benutzers. Kann als Formel angegeben werden.
4. **Vorname** — Der Vorname des Benutzers.
5. **Nachname** — Der Nachname des Benutzers.
6. **Passwort** — Das Passwort für den Account. Nur verfügbar wenn _Authentifizierung über Microsoft, Google oder OAuth_ nicht aktiviert ist.
7. **Aktive Rolle** — Die Rolle, die dem Benutzer initial im Arbeitsbereich zugewiesen wird.
8. **Mögliche Rollen** — Die Rollen, zwischen denen der Benutzer im Arbeitsbereich wechseln kann.

## Hinweise

- Verfügbar in: Geräteseitige Automatisierung, Cloud-Automatisierung, Geschäftsprozess.

## Verwandte Schritte

- [Bestehenden Benutzer hinzufügen](/docs/workflows/user-management/add-user) — Zum Hinzufügen eines bereits existierenden Benutzers
- [Erstelle Einladungslink](/docs/workflows/user-management/invitation) — Zum Erstellen eines Einladungslinks
