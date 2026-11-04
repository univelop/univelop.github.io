---
layout: title
title: Integrationen
parent: Arbeitsbereich Einstellungen
nav_order: 7
---

Unter **Integrationen** werden Verbindungen zu externen Diensten eingerichtet. Jede Integration enthält die Zugangsdaten für einen bestimmten Anbieter, die anschließend in Workflow-Schritten, Bausteinen und Komponenten genutzt werden können.

## Übersicht

1. **+ Integration** — legt eine neue Integration an, deren Zugangsdaten selbst konfiguriert werden
2. **+ Managed Integration** — legt eine von Univelop bereitgestellte Integration an (aktuell **Univelop OpenAI**, siehe [ChatGPT](/docs/workspace-settings/chatgpt)). Ihre Zugangsdaten werden von Univelop verwaltet und können nicht bearbeitet werden.
3. **Einstellungen** — legt die **Integration für den AI Builder Agent** fest

## Integrationstypen

| Typ | Zugangsdaten | Verwendung |
|---|---|---|
| **Microsoft - Anwendungszugriff** | Anwendungs-ID (Client), Geheimer Clientschlüssel, Verzeichnis-ID (Mandant), siehe [E-Mail-Versand](/docs/workspace-settings/mailing) | E-Mail senden, abrufen und beantworten, Dateien in OneDrive/SharePoint hochladen, Web-Requests, [externe Benutzerrollen](/docs/interfaces/external-user-roles) |
| **Microsoft - Delegierter Zugriff** | E-Mail, Anmeldung mit dem Microsoft-Konto | wie Anwendungszugriff, aber ohne externe Benutzerrollen |
| **E-Mail (SMTP/IMAP)** | Mailserver mit SMTP- und IMAP-Konfiguration | E-Mail senden und abrufen |
| **E-Mail (SMTP)** | Mailserver mit SMTP-Konfiguration | E-Mail senden |
| **E-Mail (Amazon AWS)** | Zugriffsschlüssel-ID, Geheimer Zugriffsschlüssel, Region | E-Mail senden |
| **E-Mail (SendGrid)** | API-Schlüssel | E-Mail senden |
| **OpenAI** | API-Schlüssel, optional Organisation-ID und Modell, siehe [ChatGPT](/docs/workspace-settings/chatgpt) | KI-Bausteine, -Schritte und -Komponenten |
| **SAP Business One** | Basis-URL, Unternehmensdatenbank, Benutzername, Passwort | Web-Requests |
| **Stripe** | API-Schlüssel | Web-Requests |
| **Zoho** | Anmeldung mit dem Zoho-Konto | Web-Requests |

{: .hint }
Die Typen **OpenAI** und **Zoho** sind nur verfügbar, wenn sie für den Arbeitsbereich freigeschaltet wurden.

## Integration erstellen

1. In den Arbeitsbereich-Einstellungen **Integrationen** öffnen und **+ Integration** klicken
2. **Name** vergeben und die **Art der Integration** auswählen
3. Die **Zugangsdaten** eingeben. Bei _E-Mail (SMTP)_ und _E-Mail (SMTP/IMAP)_ kann **Autodiscover** die Serverdaten anhand der E-Mail-Adresse vorausfüllen.
4. **Bestätigen und Verbindung testen** klicken. Die Zugangsdaten werden verschlüsselt gespeichert und die Verbindung geprüft. Bei _Microsoft - Delegierter Zugriff_ und _Zoho_ öffnet sich stattdessen die Anmeldung beim Anbieter.

Nach einem erfolgreichen Test wird **Gültige Zugangsdaten vorhanden** angezeigt. Erst dann steht die Integration in Workflow-Schritten, Bausteinen und Komponenten zur Auswahl.

{: .warning }
Nach dem Test sind die Zugangsdaten gesperrt. Um sie zu ändern, müssen sie über **Zugangsdaten zurücksetzen** gelöscht und neu eingegeben werden. Wird die Integration bereits verwendet, erscheint vorher eine Warnung.

## Verwendung

Die Integration wird anschließend im Feld **Integration** ausgewählt, z. B. bei:

- dem Schritt [Sende E-Mail](/docs/workflows/emails/send-email) — mit allen E-Mail- und Microsoft-Integrationen
- dem Schritt [Rufe E-Mails ab](/docs/workflows/emails/get-emails) — mit _E-Mail (SMTP/IMAP)_ und Microsoft-Integrationen
- dem Schritt [Antworte auf E-Mail](/docs/workflows/emails/reply-to-email) — nur mit Microsoft-Integrationen
- dem Schritt [Datei in Cloud-Speicher hochladen](/docs/workflows/file-handling/save-file-in-cloud-storage) — mit Microsoft-Integrationen
- dem Schritt [Sende Web-Request](/docs/workflows/advanced/web-request) (Gruppe **Authentifizierung**) — mit Microsoft, Zoho, SAP Business One oder Stripe, nur in Server-Workflows
- den KI-Funktionen wie [Frag ChatGPT](/docs/workflows/advanced/ask-ai) und der Komponente [AI Agent](/docs/tiles/ai-agent-tile)

## Hinweise

- Zugangsdaten wie API-Schlüssel, Passwörter und Client-Secrets werden verschlüsselt gespeichert.
- Pro Anbieter können mehrere Integrationen angelegt werden (z. B. verschiedene Postfächer für unterschiedliche Abteilungen).
- Bei _E-Mail (SMTP)_, _E-Mail (SMTP/IMAP)_ und _SAP Business One_ kann unter **Erweitert** die Option **Statische IP verwenden** aktiviert werden, falls der Server nur Verbindungen von freigegebenen IP-Adressen akzeptiert. Bei den E-Mail-Typen wird die freizugebende IP-Adresse dann direkt in der Integration angezeigt.
- Eine Integration kann nur gelöscht werden, wenn sie nirgends mehr verwendet wird.
- Bei der Nutzung einer externen Integration gelten die Datenschutzrichtlinien des jeweiligen Anbieters.
