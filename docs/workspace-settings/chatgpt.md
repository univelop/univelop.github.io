---
title: ChatGPT
nav_order: 9
layout: title
parent: Arbeitsbereich Einstellungen
redirect_from:
    - /docs/chat-gpt-integration.html
---

Über eine Integration vom Typ **OpenAI** können KI-Funktionen in Univelop genutzt werden — zum Beispiel über die Bausteine [KI Spracherkennung](/docs/bricks/advanced/gpt) und [KI Bilderkennung](/docs/bricks/advanced/gpt-image-scanner), die Workflow-Schritte [Frag ChatGPT](/docs/workflows/advanced/ask-ai) und [AI Agent](/docs/workflows/advanced/ai-agent) oder die Komponente [AI Agent](/docs/tiles/ai-agent-tile). Die Anbindung wird nicht über einen eigenen Einstellungspunkt eingerichtet, sondern unter [Integrationen](/docs/workspace-settings/integrations).

{: .warning }
Die meisten KI-Funktionen befinden sich in der Beta-Phase und werden nur auf Anfrage freigeschaltet. Bei Interesse gerne bei uns unter support@univelop.de melden!

## Varianten

1. **Eigene OpenAI-Integration** — mit einem API-Schlüssel aus dem eigenen OpenAI-Account. Die Anfragen gehen direkt an OpenAI und werden dort über das eigene Guthaben abgerechnet.
2. **Univelop OpenAI** — eine von Univelop verwaltete Integration, die über **+ Managed Integration** angelegt wird. Es wird kein eigener OpenAI-Account benötigt; die Zugangsdaten werden von Univelop verwaltet und können nicht bearbeitet werden. Pro Arbeitsbereich kann sie einmal angelegt werden.

## Eigene Integration einrichten

1. **OpenAI-Account erstellen** — falls noch kein Konto vorhanden ist, auf der OpenAI-Website registrieren. Es ist kein ChatGPT-Abo nötig — nur der API-Zugang wird benötigt.

2. **API-Schlüssel erstellen** — nach der Anmeldung unter [API Keys](https://platform.openai.com/settings/organization/api-keys) einen Schlüssel erstellen. Pro Arbeitsbereich wird nur ein Schlüssel benötigt. Bei mehreren Arbeitsbereichen kann es sinnvoll sein, die Schlüssel in getrennten OpenAI-Projekten anzulegen, um die Kosten transparent zu halten.

3. **Integration anlegen** — in den Arbeitsbereich-Einstellungen unter **Integrationen** über **+ Integration** eine Integration vom Typ **OpenAI** anlegen und die Felder ausfüllen:
   1. **API-Schlüssel** — der OpenAI-API-Schlüssel
   2. **Organisation-ID** — _optional, unter „Erweitert“._ Die ID der OpenAI-Organisation
   3. **Model** — _optional, unter „Erweitert“._ GPT-5.2, GPT-5 oder GPT-5 Mini (Standard: GPT-5 Mini)

4. **Verbindung testen** — über **Bestätigen und Verbindung testen** wird eine kurze Testanfrage an OpenAI gesendet. Erst danach steht die Integration in den KI-Bausteinen und -Workflow-Schritten zur Auswahl.

## AI Builder Agent

Für den **AI Builder Agent** und die KI-Hilfe im Formel-Editor wird die Integration zentral festgelegt: unter **Integrationen** → **Einstellungen** → **Integration für den AI Builder Agent**. Ist dort keine Integration hinterlegt, kann direkt die Univelop-OpenAI-Anbindung verwendet werden. Der AI Builder Agent ist nur in Test-, Demo- und Solution-Arbeitsbereichen verfügbar, nicht in Produktiv-Arbeitsbereichen.

## Kosten

Jede KI-Anfrage verbraucht **Univelop-Credits**, abhängig vom gewählten Modell und von der Anzahl der verarbeiteten Tokens:

| Modell | Credits pro 1.000 Tokens mit Univelop OpenAI (Eingabe / Ausgabe) | mit eigenem Schlüssel (Eingabe / Ausgabe) |
|---|---|---|
| GPT-5.2 | 10 / 70 | 3 / 21 |
| GPT-5 | 6 / 50 | 2 / 15 |
| GPT-5 Mini | 1,25 / 10 | 0,4 / 3 |

{: .hint }
Bei einer eigenen Integration fallen zusätzlich die Kosten bei OpenAI an, die über das Guthaben (Credits) des eigenen OpenAI-Accounts abgerechnet werden. Die Workflow-Schritte _Frag ChatGPT_ und _AI Agent_ verbrauchen außerdem wie jeder Workflow-Schritt einen Workflow-Credit.

## Fehlermeldungen

Schlägt eine Anfrage an OpenAI fehl, zeigt Univelop die Meldung **„Ein Fehler bei der Kommunikation mit ChatGPT ist aufgetreten!“** zusammen mit dem Statuscode und der Originalmeldung von OpenAI an. Häufige Ursachen:

| Statuscode | Ursache |
|---|---|
| **401** | Der API-Schlüssel ist ungültig oder wurde bei OpenAI gelöscht |
| **429** | Ratenlimit erreicht oder kein Guthaben mehr auf dem OpenAI-Account |
| **5xx** | Die OpenAI-Dienste sind vorübergehend nicht erreichbar |

Weitere Meldungen:

- **„Keine OpenAI-Integration konfiguriert. …“** — im Baustein oder Schritt ist keine Integration ausgewählt
- **„Die konfigurierte Integration wurde noch nicht validiert. …“** — die Verbindung der Integration wurde noch nicht getestet
