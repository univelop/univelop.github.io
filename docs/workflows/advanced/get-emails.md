---
layout: workflow-step
title: Rufe E-Mails ab
parent: Erweitert
grand_parent: Workflows
icon: mark_email_unread
nav_order: 4
redirect_from:
    - /docs/workflows/grand-childs-bricks/get-emails.html
---

Mit dem Schritt _Rufe E-Mails ab_ werden E-Mails aus einem Postfach abgerufen. Pro Aufruf werden maximal **50 E-Mails** aus dem Posteingang geladen.

## Einstellungen

1. **Integration** — Die E-Mail-Integration (z. B. Microsoft).
2. **Empfänger-E-Mail** — Die E-Mail-Adresse des abzurufenden Postfachs.
3. **Von Zeitpunkt** — _Optional._ Nur E-Mails nach diesem Datum.
4. **Bis Zeitpunkt** — _Optional._ Nur E-Mails vor diesem Datum.
5. **Nur ungelesene** — Wenn aktiviert, werden nur ungelesene E-Mails abgerufen.
6. **Nach Abrufen auf Gelesen stellen** — Wenn aktiviert, werden abgerufene E-Mails als gelesen markiert.
7. **Inkl. Anhänge** — Wenn aktiviert, werden Dateianhänge mitgeladen.
8. **Inkl. eingebettete Bilder** — Wenn aktiviert, werden eingebettete Bilder mitgeladen.

{: .warning }
Die Option _Inkl. Anhänge_ kann sehr [Credit](/docs/credits)-intensiv sein. Nur aktivieren, wenn Anhänge benötigt werden.

## Ausgabevariablen

Über `technischer_name.data` ist die Liste der abgerufenen E-Mails zugreifbar. Per [Iteriere über Werte](/docs/workflows/structure/iterate-list) können die einzelnen E-Mails durchlaufen werden. Jede E-Mail enthält:

| Variable | Beschreibung |
|----------|-------------|
| `id` | Eindeutige ID der E-Mail |
| `subject` | Betreff |
| `body` | Inhalt (HTML wird automatisch zu Text konvertiert) |
| `received_at` | Empfangszeitpunkt als Text (z. B. `2023-05-23 18:45:13.562`) |
| `fromEmail` | E-Mail-Adresse des Absenders |
| `fromName` | Name des Absenders |
| `is_read` | Ob die E-Mail vor dem Abrufen bereits gelesen war |
| `has_attachments` | Ob die E-Mail Anhänge hat |
| `attachments` | Liste der Anhänge (nur bei aktivierter Option). Dateinamen per `toMap(attachment).name` |

## Hinweise

- Bei mehr als 50 passenden E-Mails wird eine Warnung in den Logs ausgegeben. Für die Verarbeitung größerer Mengen: _Nur ungelesene_ und _Nach Abrufen auf Gelesen stellen_ aktivieren und in einer Iteration wiederholt aufrufen.
- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.

## Verwandte Schritte

- [Sende E-Mail](/docs/workflows/advanced/send-email) — Für den Versand von E-Mails
