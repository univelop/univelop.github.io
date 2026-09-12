---
layout: title
title: Integrationen
parent: Arbeitsbereich Einstellungen
nav_order: 10
---

Unter **Integrationen** werden Verbindungen zu externen Diensten eingerichtet. Jede Integration stellt Zugangsdaten und Konfiguration für einen bestimmten Anbieter bereit, die dann von Bausteinen und Workflows genutzt werden können.

## Unterstützte Integrationstypen

| Typ | Beschreibung | Verwendung |
|---|---|---|
| **Microsoft (App-Only)** | Azure AD App-Registrierung mit Client-ID, Tenant-ID und Client-Secret | E-Mail-Versand/-Empfang, externe Benutzerrollen |
| **Microsoft (Delegated)** | Anmeldung über ein persönliches Microsoft-Konto | E-Mail-Versand/-Empfang |
| **Amazon AWS** | Amazon Web Services mit Access-Key, Secret-Key und Region | E-Mail-Versand über SES |
| **SendGrid** | Twilio SendGrid mit API-Schlüssel | E-Mail-Versand |
| **SMTP/IMAP** | Eigener Mailserver mit SMTP- und IMAP-Konfiguration | E-Mail-Versand und -Empfang |
| **SMTP** | Eigener Mailserver nur mit SMTP-Konfiguration | E-Mail-Versand |
| **OpenAI** | OpenAI API mit API-Schlüssel und optionaler Organisations-ID | KI-Bausteine, KI-Agent |
| **Zoho** | Zoho-Dienste mit OAuth-Anmeldung | E-Mail, CRM |

## Integration erstellen

1. In den Arbeitsbereich-Einstellungen **Integrationen** öffnen
2. **Neue Integration** klicken
3. Den gewünschten Integrationstyp auswählen
4. Die erforderlichen Zugangsdaten eingeben
5. Speichern

Die erstellte Integration kann anschließend in den Einstellungen von Bausteinen und Workflow-Schritten ausgewählt werden — z. B. beim Schritt [E-Mail senden](/docs/workflows/advanced/send-email) oder beim [KI-Agent](/docs/workflows/advanced/ai-agent).

## Hinweise

- Zugangsdaten wie API-Schlüssel, Passwörter und Client-Secrets werden verschlüsselt gespeichert.
- Jede Integration hat eine eigene Datenschutzrichtlinie des jeweiligen Anbieters, die beim Erstellen angezeigt wird.
- Pro Anbieter können mehrere Integrationen angelegt werden (z. B. verschiedene Microsoft-Konten für unterschiedliche Abteilungen).
