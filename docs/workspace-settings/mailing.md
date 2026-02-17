---
title: E-Mail-Versand
nav_order: 1
layout: title
parent: Arbeitsbereich Einstellungen
redirect_from:
    - /docs/azure-mailing.html
---

Damit aus Univelop heraus E-Mails versendet und empfangen werden können (z. B. über den Workflow-Schritt [E-Mail senden](/docs/workflows/advanced/send-email)), muss eine E-Mail-Integration eingerichtet werden. Die Konfiguration erfolgt in den Arbeitsbereich-Einstellungen unter [Integrationen](/docs/workspace-settings/integrations).

## Unterstützte Anbieter

| Anbieter | Versand | Empfang | Beschreibung |
|---|---|---|---|
| **Microsoft (App-Only)** | ja | ja | Azure AD App-Registrierung mit Client-ID, Tenant-ID und Client-Secret |
| **Microsoft (Delegated)** | ja | ja | Anmeldung über ein persönliches Microsoft-Konto |
| **SMTP/IMAP** | ja | ja | Eigener Mailserver mit SMTP- und IMAP-Konfiguration |
| **SMTP** | ja | nein | Nur Versand über einen eigenen SMTP-Server |
| **Amazon SES** | ja | nein | Amazon Simple Email Service mit Access-Key und Secret-Key |
| **SendGrid** | ja | nein | Twilio SendGrid mit API-Schlüssel |

## Einrichtung Microsoft (App-Only)

Für die Anbindung über Microsoft Azure muss eine App-Registrierung in Azure AD angelegt werden. Folgende Werte werden benötigt:

1. **Client-ID** — die Application (client) ID der registrierten App
2. **Tenant-ID** — die Directory (tenant) ID
3. **Client-Secret** — ein Secret, das unter "Certificates & secrets" erstellt wird

### Berechtigungen

In der App-Registrierung müssen unter **API permissions** folgende Microsoft Graph Berechtigungen als **Application permissions** hinzugefügt werden:

- `User.Read.All` — zum Auflösen von Benutzern
- `Mail.Send` — zum Versenden von E-Mails
- `Mail.ReadWrite` — zum Empfangen von E-Mails (nur nötig, wenn E-Mails auch abgerufen werden sollen)

Abschließend muss über **Grant admin consent** die Administratorzustimmung erteilt werden.

## Einrichtung SMTP/IMAP

1. **Name** — Anzeigename des Absenders
2. **E-Mail** — Absender-Adresse
3. **Benutzername** — optional, falls abweichend von der E-Mail
4. **Passwort** — Passwort des E-Mail-Kontos
5. **SMTP-Server** — Hostname und Port des SMTP-Servers
6. **IMAP-Server** — Hostname und Port des IMAP-Servers (nur bei SMTP/IMAP)
7. **SSL / StartTLS** — Verschlüsselungsoptionen
