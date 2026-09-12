---
layout: title
title: REST-API
parent: Schnittstellen
redirect_from:
    - /docs/interface.html
nav_order: 1
---

Über die REST-API können externe Systeme programmatisch auf den Arbeitsbereich zugreifen. Damit lassen sich Datensätze abrufen, erstellen, bearbeiten und löschen. Darüber hinaus können Nutzer angelegt, Push-Benachrichtigungen versendet und Workflows gestartet werden.

## API-Versionen

Univelop bietet zwei Versionen der REST-API an:

| Version | Status | Dokumentation |
|---|---|---|
| **V2** | Aktiv, wird weiter ausgebaut | [Univelop REST-API V2](https://app.univelop.de/api/v2/docs) |
| **V1** | Verfügbar, wird nicht mehr erweitert | [Univelop REST-API V1](https://app.univelop.de/api/v1/docs) |

Die API-Dokumentation enthält alle Spezifikationen und ermöglicht das direkte Testen von Anfragen.

## Authentifizierung

Zur Nutzung der REST-API wird ein API-Schlüssel benötigt, der in den [Arbeitsbereich-Einstellungen](/docs/workspace-settings/api-keys) erstellt wird. Der Schlüssel muss bei jeder Anfrage im HTTP-Header mitgesendet werden.

Der Schlüssel kann jederzeit neu generiert werden, falls er aus Sicherheitsgründen geändert werden soll.

## Anwendungsbeispiele

- **Business Intelligence** — Daten aus Univelop in Analysetools wie Power BI abrufen
- **ERP-Integration** — Datensätze zwischen Univelop und einem ERP-System synchronisieren
- **Automatisierung** — Workflows über externe Systeme starten
- **Benutzerverwaltung** — Nutzer automatisiert anlegen oder aktualisieren

## Credits

Jeder API-Aufruf verbraucht Credits. Die Credit-Sätze unterscheiden sich je nach API-Version und werden in der [Abrechnung](/docs/workspace-settings/billing) angezeigt.
