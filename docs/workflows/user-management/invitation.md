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

Mit dem Schritt _Erstelle Einladungslink_ wird ein Einladungslink generiert, über den ein Benutzer dem Arbeitsbereich beitreten kann. Dem Benutzer wird dabei automatisch die angegebene Rolle und Lizenz zugewiesen. Der Link ist in folgenden Schritten über den technischen Namen als Text verfügbar.

## Einstellungen

1. **Rollenname/-ID** — Die Rolle, die dem beitretenden Benutzer zugewiesen wird. Kann als Name oder ID angegeben werden.
2. **E-Mail** — _Optional._ Eine E-Mail-Adresse, auf die der Einladungslink beschränkt wird.
3. **Lizenzname** — Der Lizenztyp für den beitretenden Benutzer.

## Lizenz-Schlüssel

| Lizenztyp | Schlüssel |
|-----------|-----------|
| Power-User | `adminUser` |
| Essential-User | `proUser` |
| Light-User (Module) | `lightUserPlus3` |
| Light-User (Part-Time) | `lightUserPartTime` |
| External-User | `externalUser` |
| Test-User | `testUser` |

## Hinweise

- Der generierte Link kann z. B. per [Sende E-Mail](/docs/workflows/advanced/send-email) an den Benutzer versendet werden.
- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.
