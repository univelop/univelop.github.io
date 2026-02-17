---
layout: workflow-step
title: Sende Web-Request
parent: Erweitert
grand_parent: Workflows
icon: http
nav_order: 1
redirect_from:
    - /docs/workflows/grand-childs-bricks/web-request.html
---

Mit dem Schritt _Sende Web-Request_ wird eine HTTP-Anfrage an eine externe URL gesendet. Die Antwort (Status, Header, Body) ist in folgenden Schritten über den technischen Namen zugreifbar.

## Einstellungen

1. **URL** — Die Ziel-URL der Anfrage. Kann dynamisch mit `${}` gestaltet werden.
2. **Methode** — Die HTTP-Methode (GET, POST, PUT, PATCH, DELETE).
3. **Request Body** — Der Inhalt der Anfrage. Kann dynamisch gestaltet werden.
4. **Request Header** — Benutzerdefinierte HTTP-Header. Kann dynamisch gestaltet werden.
5. **Encoding** — Die Zeichenkodierung der Anfrage.
6. **Response-Format** — Das erwartete Antwortformat: _Text_ oder _Binär_. Für den Download von Dateien _Binär_ wählen.
7. **Auf Antwort warten** — Wenn aktiviert, wartet der Workflow auf die Antwort. Deaktiviert für Fire-and-Forget-Anfragen.
8. **Fehlerverhalten** — Bestimmt, was bei einem Fehler passiert: _Workflow abbrechen_ oder _Ignorieren_.
9. **Integration** — _Optional._ Eine vorkonfigurierte Integration für Authentifizierung.
10. **Unsichere Verbindungen erlauben** — Erlaubt Anfragen an Server mit ungültigen SSL-Zertifikaten.

## Ausgabevariablen

Über den technischen Namen sind folgende Werte zugreifbar:

- `technischer_name.status` — Der HTTP-Statuscode (z. B. 200, 404)
- `technischer_name.headers` — Die Antwort-Header
- `technischer_name.body` — Der Antwort-Body (Text oder Binärdaten)

## Hinweise

- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.

## Verwandte Schritte

- [Webhook](/docs/workflows/advanced/webhook) — Für den Empfang externer Anfragen
