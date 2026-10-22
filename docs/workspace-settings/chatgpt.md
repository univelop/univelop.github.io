---
title: ChatGPT
nav_order: 2
layout: title
parent: Arbeitsbereich Einstellungen
redirect_from:
    - /docs/chat-gpt-integration.html
---

Über die ChatGPT-Anbindung können KI-Funktionen in Univelop genutzt werden — zum Beispiel über den [ChatGPT-Baustein](/docs/bricks/advanced/gpt), den [KI-Bildscanner](/docs/bricks/advanced/gpt-image-scanner) oder den Workflow-Schritt [KI-Agent](/docs/workflows/advanced/ai-agent). Für die Nutzung wird ein eigener OpenAI-Account mit gültigem API-Schlüssel benötigt.

## Aktivierung

1. **OpenAI-Account erstellen** — falls noch kein Konto vorhanden ist, auf der OpenAI-Website registrieren. Es ist kein ChatGPT-Abo nötig — nur der API-Zugang wird benötigt.

2. **API-Schlüssel erstellen** — nach der Anmeldung unter [API Keys](https://platform.openai.com/settings/organization/api-keys) einen Schlüssel erstellen. Pro Arbeitsbereich wird nur ein Schlüssel benötigt. Bei den Berechtigungen wird ein eingeschränkter Zugriff auf Modelle und "Model capabilities" empfohlen.

3. **Projekt erstellen (optional)** — bei mehreren Arbeitsbereichen kann es sinnvoll sein, für jeden ein eigenes Projekt unter OpenAI zu erstellen, um Kosten transparent zu halten.

4. **In Univelop eintragen** — den API-Schlüssel und optional die Organisation-/Projekt-ID in den Arbeitsbereich-Einstellungen unter **ChatGPT** eintragen.

{: .hint }
Die Nutzung der KI-Funktionen verbraucht Credits. Die Kosten bei OpenAI werden direkt über den eigenen OpenAI-Account abgerechnet.

## Mögliche Fehlermeldungen

| Fehler | Ursache |
|---|---|
| **Kein Guthaben** | Auf dem OpenAI-Account ist kein Guthaben vorhanden |
| **Ungültiger API-Schlüssel** | Der Schlüssel wurde gelöscht, ist falsch oder fehlt in den Einstellungen |
| **Ratenlimit erreicht** | Zu viele Anfragen pro Minute — variiert je nach Modell |
| **HTTP-Status 5xx** | Die OpenAI-Dienste sind vorübergehend nicht erreichbar |
