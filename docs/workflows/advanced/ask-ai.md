---
layout: workflow-step
title: Frag KI
parent: Erweitert
grand_parent: Workflows
icon: psychology
nav_order: 9
---

Mit dem Schritt _Frag KI_ wird ein Prompt an eine KI (OpenAI) gesendet. Die Antwort ist in folgenden Schritten über den technischen Namen zugreifbar.

## Einstellungen

1. **Integration** — Eine **OpenAI-Integration** aus den Arbeitsbereich-Einstellungen.
2. **Prompt** — Der Text, der an die KI gesendet wird. Kann dynamisch mit `${}` gestaltet werden.
3. **Antwortformat** — Das erwartete Format der Antwort: **Freitext** oder **JSON**.
4. **Antwort-Schema** — _Nur bei JSON._ Ein [JSON-Schema](https://json-schema.org/overview/what-is-jsonschema), das die Struktur der Antwort definiert.
5. **Dateien** — _Optional._ Dateien, die dem Prompt beigefügt werden (bei Modellen mit Dateiunterstützung).

## Hinweise

- Die KI-Features müssen im Arbeitsbereich aktiviert sein. Kontakt: [support@univelop.de](mailto:support@univelop.de).
- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.

## Verwandte Schritte

- [AI Agent](/docs/workflows/advanced/ai-agent) — Für die Nutzung eines konfigurierten AI Agents mit Tools
