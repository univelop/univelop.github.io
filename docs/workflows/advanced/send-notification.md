---
layout: workflow-step
title: Sende Push-Nachricht
parent: Erweitert
grand_parent: Workflows
icon: notification_add
nav_order: 7
redirect_from:
    - /docs/workflows/grand-childs-bricks/send-notification.html
---

Mit dem Schritt _Sende Push-Nachricht_ wird eine Push-Benachrichtigung an ausgewählte Benutzer oder Benutzergruppen versendet.

## Einstellungen

1. **Titel** — Der Titel der Push-Nachricht. Kann dynamisch mit `${}` gestaltet werden.
2. **Nachricht** — Der Inhalt der Push-Nachricht. Kann dynamisch mit `${}` gestaltet werden.
3. **Verknüpfung mit** — _Optional._ Die Kachel, falls die Benachrichtigung auf einen bestimmten Datensatz verweisen soll.
4. **Verknüpfte Eintrags-ID** — _Optional._ Die ID des Datensatzes, auf den verwiesen wird.
5. **Versenden an** — Die Empfängerart: _Benutzergruppen_ (Rollen) oder _Einzelne Benutzer_.
6. **Rollen-IDs/-namen oder Benutzer-IDs/-E-Mails** — Die IDs oder Namen der Rollen (bei Benutzergruppen) bzw. IDs und E-Mails (bei einzelnen Benutzern). Kommagetrennt.
7. **Versendezeitpunkt** — _Optional._ Zeitgesteuerte Zustellung gemäß der Benachrichtigungseinstellungen des Arbeitsbereichs.

## Hinweise

- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.
