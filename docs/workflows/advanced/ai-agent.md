---
layout: workflow-step
title: AI Agent
parent: Erweitert
grand_parent: Workflows
icon: psychology
nav_order: 10
---

Mit dem Schritt _AI Agent_ wird ein Prompt an einen zuvor erstellten AI Agent gesendet. Der Agent verarbeitet die Anfrage mithilfe der ihm zur Verfügung stehenden Tools und kann mehrere Gesprächsrunden durchlaufen. Die Antwort ist in folgenden Schritten über den technischen Namen zugreifbar.

## Einstellungen

1. **AI Agent** — Der AI Agent, der die Anfrage verarbeiten soll. AI Agents werden über die entsprechende Kachel erstellt.
2. **Prompt** — Der Text, der an den AI Agent gesendet wird. Kann dynamisch mit `${}` gestaltet werden.
3. **Antwortformat** — Das erwartete Format der Antwort: **Freitext** oder **JSON**.
4. **Antwort-Schema** — _Nur bei JSON._ Ein [JSON-Schema](https://json-schema.org/overview/what-is-jsonschema), das die Struktur der Antwort definiert.

## Hinweise

- Die KI-Features müssen im Arbeitsbereich aktiviert sein. Kontakt: [support@univelop.de](mailto:support@univelop.de).
- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.

## Verwandte Schritte

- [Frag KI](/docs/workflows/advanced/ask-ai) — Für einzelne KI-Anfragen ohne Agent-Kontext
