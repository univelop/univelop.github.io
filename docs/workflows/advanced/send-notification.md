---
layout: workflow-step
title: Sende Push-Nachricht
parent: Erweitert
grand_parent: Workflows
icon: notification_add
nav_order: 3
redirect_from:
    - /docs/workflows/grand-childs-bricks/send-notification.html
---

Mit dem Schritt _Sende Push-Nachricht_ wird eine Push-Benachrichtigung an ausgewählte Benutzer oder Benutzergruppen versendet.

## Einstellungen

1. **Titel** — Der Titel der Push-Nachricht. Kann als Formel angegeben werden, um den Titel dynamisch zu gestalten.
2. **Nachricht** — Der Inhalt der Push-Nachricht. Kann als Formel angegeben werden, um die Nachricht dynamisch zu gestalten.
3. **Verknüpfung mit** — _Optional._ Die Komponente auf die verwiesen wird, falls die Benachrichtigung auf einen bestimmten Datensatz verweisen soll.
4. **Verknüpfte Datensatz-ID** — _Optional._ Die ID des Datensatzes, auf den verwiesen wird.
5. **Versenden an** — Die Empfängerart: _Benutzergruppen_ (Rollen) oder _Einzelne Benutzer_. Je nach Auswahl erscheint eines der beiden folgenden Felder:
   - **Rollen-IDs / Namen (kommagetrennt)** — Bei Auswahl von _Benutzergruppen_: die IDs oder Namen der Zielrollen.
   - **Benutzer-IDs / Mails (kommagetrennt)** — Bei Auswahl von _Einzelne Benutzer_: die IDs oder E-Mail-Adressen der Zielbenutzer.
6. **Versendezeitpunkt Push-Nachricht** — _Optional._ Option zwischen _Sofort versenden_ oder _Gesammelt versenden_. Steuert, wann die Benachrichtigung im In-App-Benachrichtigungscenter angezeigt und mitgezählt wird: Bei _Gesammelt versenden_ erst zum nächsten in den Arbeitsbereich-Benachrichtigungseinstellungen konfigurierten Zeitpunkt.

## Hinweise

- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.
