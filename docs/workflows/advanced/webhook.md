---
layout: workflow-step
title: Webhook
parent: Erweitert
grand_parent: Workflows
icon: webhook
nav_order: 2
redirect_from:
    - /docs/workflows/grand-childs-bricks/webhook.html
---

Mit dem Schritt _Webhook_ kann ein Workflow extern über die REST-API gestartet werden. Der Schritt muss als **erster Schritt** im Workflow platziert werden. Beim Aufruf über die API wird der mitgesendete Payload als Variable verfügbar gemacht.

## Einstellungen

1. **Beispiel-Payload** — _Optional._ Ein Beispiel-JSON, das die erwartete Struktur des Payloads beschreibt. Wird für die Validierung und Autovervollständigung im Designmodus verwendet.

## Funktionsweise

Der Workflow wird über den API-Endpunkt für Workflows mit Trigger aufgerufen. Der Payload der Anfrage ist in folgenden Schritten über den technischen Namen des Webhook-Schritts zugreifbar (z. B. `webhook.payload`).

## Hinweise

- Nur in **Server-Automatisierungen** und **Geschäftsprozessen** verfügbar.
- Der Workflow benötigt einen technischen Namen, um über die API angesprochen zu werden.

## Verwandte Schritte

- [Sende Web-Request](/docs/workflows/advanced/web-request) — Für das Senden von HTTP-Anfragen
- [Gib Wert zurück](/docs/workflows/advanced/return-value) — Für die Rückgabe von Werten an den API-Aufrufer
