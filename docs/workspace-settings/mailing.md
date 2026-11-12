---
title: E-Mail-Versand
nav_order: 10
layout: title
parent: Arbeitsbereich Einstellungen
redirect_from:
    - /docs/azure-mailing.html
---

Damit aus Univelop heraus E-Mails versendet und empfangen werden können (z. B. über den Workflow-Schritt [Sende E-Mail](/docs/workflows/emails/send-email)), muss eine E-Mail-Integration eingerichtet werden. Die Konfiguration erfolgt in den Arbeitsbereich-Einstellungen unter [Integrationen](/docs/workspace-settings/integrations).

## Unterstützte Anbieter

| Anbieter | Versand | Abrufen | Antworten | Beschreibung |
|---|---|---|---|---|
| **Microsoft - Anwendungszugriff** | ja | ja | ja | Azure AD App-Registrierung mit Anwendungs-ID, Verzeichnis-ID und geheimem Clientschlüssel |
| **Microsoft - Delegierter Zugriff** | ja | ja | ja | Anmeldung über ein Microsoft-Konto |
| **E-Mail (SMTP/IMAP)** | ja | ja | nein | Eigener Mailserver mit SMTP- und IMAP-Konfiguration |
| **E-Mail (SMTP)** | ja | nein | nein | Nur Versand über einen eigenen SMTP-Server |
| **E-Mail (Amazon AWS)** | ja | nein | nein | Amazon SES mit Zugriffsschlüssel-ID, geheimem Zugriffsschlüssel und Region |
| **E-Mail (SendGrid)** | ja | nein | nein | Twilio SendGrid mit API-Schlüssel |

## Einrichtung Microsoft - Anwendungszugriff

Für die Anbindung über Microsoft Azure muss eine App-Registrierung in Azure AD angelegt werden. Folgende Werte werden benötigt:

1. **Anwendungs-ID (Client)** — die Application (client) ID der registrierten App
2. **Geheimer Clientschlüssel** — ein Secret, das unter "Certificates & secrets" erstellt wird
3. **Verzeichnis-ID (Mandant)** — die Directory (tenant) ID

### Berechtigungen

In der App-Registrierung müssen unter **API permissions** folgende Microsoft Graph Berechtigungen als **Application permissions** hinzugefügt werden:

- `User.Read.All` — zum Auflösen von Benutzern
- `Mail.Send` — zum Versenden von E-Mails
- `Mail.ReadWrite` — zum Empfangen von E-Mails (nur nötig, wenn E-Mails auch abgerufen werden sollen)

Abschließend muss über **Grant admin consent** die Administratorzustimmung erteilt werden.

## Einrichtung E-Mail (SMTP/IMAP)

1. **Name** — Anzeigename des Absenders
2. **E-Mail** — Absender-Adresse und Postfach, aus dem abgerufen wird
3. **Benutzername** — _optional._ Nur nötig, wenn der Mailserver einen von der E-Mail-Adresse abweichenden Anmeldenamen erwartet
4. **Passwort** — Passwort des E-Mail-Kontos. Bei Anbietern mit Zwei-Faktor-Authentifizierung in der Regel ein anwendungsspezifisches Kennwort.
5. **Postausgangsserver (SMTP)** und **SMTP-Port**
6. **Posteingangsserver (IMAP)** und **IMAP-Port** — nur bei _E-Mail (SMTP/IMAP)_
7. **SSL/TLS** und **STARTTLS** — Verschlüsselung der Verbindung

Über **Autodiscover** können die Serverdaten anhand der E-Mail-Adresse vorausgefüllt werden. Anschließend wird die Integration über **Bestätigen und Verbindung testen** geprüft; bei _E-Mail (SMTP/IMAP)_ wird dabei auch die IMAP-Verbindung getestet.
