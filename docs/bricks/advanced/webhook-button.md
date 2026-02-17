---
layout: title
title: Webhook
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 15
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/webhook.html
---

Der Baustein _Webhook_ sendet bei Klick eine HTTP-Anfrage an eine konfigurierte URL. Er wird verwendet, um externe Systeme, API-Schnittstellen oder externe Workflow-Prozesse anzusteuern.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **URL** — Die Ziel-URL der HTTP-Anfrage. Unterstützt Formeln, um Werte aus dem Eintrag dynamisch einzusetzen.
2. **Methode** — Die HTTP-Methode (GET, POST, PUT, DELETE, etc.).
3. **Request-Header** — HTTP-Header für die Anfrage. Unterstützt Formeln.
4. **Request-Body** — Der Anfragekörper (nicht bei GET und DELETE). Unterstützt Formeln.

## Hinweise

- Bei einem Fehler in der Anfrage wird die Meldung „Verbindung prüfen" angezeigt.
- Der Button kann auch als Link dargestellt werden.
- Optional kann eine Erfolgsmeldung angezeigt und die Seite bei Erfolg geschlossen werden.

## Verwandte Bausteine

- [Workflow](/docs/bricks/advanced/flow-button) — Für interne Workflows statt externer HTTP-Anfragen
- [Web Link](/docs/bricks/basic/web-button) — Für einfache URL-Navigation ohne HTTP-Anfrage
