---
layout: workflow-step
title: AI Agent
parent: Erweitert
grand_parent: Workflows
icon: psychology
nav_order: 6
---

Mit dem Schritt _AI Agent_ wird ein Prompt an einen zuvor erstellten AI Agent gesendet. Der Agent verarbeitet die Anfrage mithilfe der ihm zur Verfügung stehenden Tools und kann dabei autonom mehrere Tools nacheinander aufrufen, bevor er eine finale Antwort liefert. Eine weitere Eingabe durch einen Nutzer ist innerhalb dieses einmaligen Workflow-Schritts nicht möglich. Die Antwort ist in folgenden Schritten über den technischen Namen zugreifbar.

## Einstellungen

1. **AI Agent** — Der AI Agent, der die Anfrage verarbeiten soll. AI Agents werden über die entsprechende Kachel erstellt.
2. **Prompt** — Der Text, der an den AI Agent gesendet wird. Kann als Formel angegeben werden, um den Prompt dynamisch zu gestalten.
3. **Antwortformat** — Das erwartete Format der Antwort: **Freitext** oder **JSON**.
4. **Antwort-Schema** — _Nur bei JSON._ Ein [JSON-Schema](https://json-schema.org/overview/what-is-jsonschema), das die Struktur der Antwort definiert.

## Hinweise

- Die KI-Features müssen im Arbeitsbereich aktiviert sein. Kontakt: [support@univelop.de](mailto:support@univelop.de).
- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.

## Verwandte Schritte

- [Frag ChatGPT](/docs/workflows/advanced/ask-ai) — Für einzelne KI-Anfragen ohne Agent-Kontext
