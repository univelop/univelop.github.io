---
layout: workflow-step
title: Sende E-Mail
parent: Erweitert
grand_parent: Workflows
icon: notification_add
nav_order: 3
redirect_from:
    - /docs/workflows/grand-childs-bricks/send-mail.html
---

Mit dem Schritt _Sende E-Mail_ wird eine individuelle E-Mail an einen oder mehrere Empfänger versendet. Der Versand erfolgt über eine in den Arbeitsbereich-Einstellungen konfigurierte E-Mail-Integration.

## Einstellungen

1. **Integration** — Die E-Mail-Integration für den Versand (z. B. Microsoft, SMTP, SendGrid, AWS SES).
2. **Von (E-Mail)** — Die Absender-E-Mail-Adresse.
3. **Von (Name)** — Der angezeigte Absendername.
4. **An (E-Mail)** — Die Empfänger-E-Mail-Adresse(n). Kann als Formel angegeben werden.
5. **An (Name)** — Der/die Empfängernamen.
6. **CC** — _Optional._ CC-Empfänger (E-Mail und Name).
7. **BCC** — _Optional._ BCC-Empfänger (E-Mail und Name).
8. **Betreff** — Der E-Mail-Betreff. Kann dynamisch mit `${}` gestaltet werden.
9. **Inhalt** — Der E-Mail-Text. Kann dynamisch mit `${}` gestaltet werden.
10. **Format** — Das Inhaltsformat: _Text_ oder _HTML_.
11. **Anhänge** — _Optional._ Dateien, die der E-Mail angehängt werden.
12. **Anhänge aus Baustein** — _Optional._ Dateien aus einem Datei-Upload-Baustein als Anhänge.
13. **In Gesendete speichern** — Wenn aktiviert, wird die E-Mail im Gesendet-Ordner des Absenders abgelegt.

## Ausgabevariablen

- `technischer_name.status` — Der Statuscode des Versands
- `technischer_name.body` — Die Antwort des E-Mail-Servers

## Hinweise

- Eine E-Mail-Integration muss in den Arbeitsbereich-Einstellungen eingerichtet sein.
- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.

## Verwandte Schritte

- [Rufe E-Mails ab](/docs/workflows/advanced/get-emails) — Für den Empfang von E-Mails
- [Sende Push-Nachricht](/docs/workflows/advanced/send-notification) — Für In-App-Benachrichtigungen
