---
layout: workflow-step
title: Sende E-Mail
parent: E-Mails
grand_parent: Workflows
icon: notification_add
nav_order: 1
redirect_from:
    - /docs/workflows/advanced/send-email.html
    - /docs/workflows/grand-childs-bricks/send-mail.html
---

Mit dem Schritt _Sende E-Mail_ wird eine individuelle E-Mail an einen oder mehrere Empfänger versendet. Der Versand erfolgt über eine in den Arbeitsbereich-Einstellungen konfigurierte E-Mail-Integration.

## Einstellungen

1. **Integration** — Die E-Mail-Integration für den Versand (z. B. Microsoft, SMTP, SendGrid, AWS SES).
2. **Absender-E-Mail** — Die Absender-E-Mail-Adresse.
3. **Absender-Name** — Der angezeigte Absendername.
4. **Empfänger-E-Mail(s)** — Die Empfänger-E-Mail-Adresse(n). Kann als Formel angegeben werden.
5. **Empfänger-Name(n)** — _Optional._ Der/die Empfängernamen.
6. **CC/BCC** — _Optional._ Schaltet die folgenden CC- und BCC-Felder ein.
   - **CC-Name(s)** / **CC-E-Mail(s)** — _Optional._ Name(n) und E-Mail-Adresse(n) der CC-Empfänger.
   - **BCC-Name(n)** / **BCC-E-Mail(s)** — _Optional._ Name(n) und E-Mail-Adresse(n) der BCC-Empfänger.
7. **E-Mail Vorlage** — Öffnet einen Dialog mit den folgenden Einstellungen:
   - **Betreff** — Der E-Mail-Betreff. Kann als Formel angegeben werden, um den Betreff dynamisch zu gestalten.
   - **Format** — Das Inhaltsformat: _Text_ oder _HTML_.
   - **Inhalt** — Der E-Mail-Text. Kann als Formel angegeben werden, um den Inhalt dynamisch zu gestalten.
8. **Anhänge (Baustein)** — _Optional._ Dateien aus einem Datei-Upload-Baustein als Anhänge.
9. **Anhänge** — _Optional._ Dateien, die der E-Mail angehängt werden.
10. **E-Mail im "Gesendet"-Ordner speichern** — Wenn aktiviert, wird die E-Mail im Gesendet-Ordner des Absenders abgelegt.

## Ausgabevariablen

- `technischer_name.status` — Der Statuscode des Versands
- `technischer_name.body` — Die Antwort des E-Mail-Servers

## Hinweise

- Eine E-Mail-Integration muss in den Arbeitsbereich-Einstellungen eingerichtet sein.
- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.

## Verwandte Schritte

- [Rufe E-Mails ab](/docs/workflows/emails/get-emails) — Für den Empfang von E-Mails
- [Sende Push-Nachricht](/docs/workflows/advanced/send-notification) — Für In-App-Benachrichtigungen
