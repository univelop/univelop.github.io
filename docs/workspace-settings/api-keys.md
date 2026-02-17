---
layout: title
title: API-Schlüssel
parent: Arbeitsbereich Einstellungen
nav_order: 9
---

Unter **API-Schlüssel** werden die Schlüssel für den Zugriff auf die [Univelop REST-API](/docs/interfaces/rest-api) verwaltet.

## Funktionsweise

Jeder API-Schlüssel ermöglicht es externen Systemen, über die REST-API auf Daten des Arbeitsbereichs zuzugreifen. Der Schlüssel wird bei jeder Anfrage im Header mitgesendet und dient der Authentifizierung.

## Einstellungen

1. **Schlüssel erstellen** — erzeugt einen neuen API-Schlüssel für den Arbeitsbereich
2. **Schlüssel neu generieren** — ersetzt einen bestehenden Schlüssel durch einen neuen. Der alte Schlüssel wird sofort ungültig.

{: .warning }
Nach dem Neuerstellen eines Schlüssels müssen alle externen Systeme, die den alten Schlüssel verwenden, aktualisiert werden.

## Hinweise

- Jeder API-Aufruf verbraucht Credits entsprechend der genutzten API-Version (V1 oder V2).
- API-Schlüssel sollten vertraulich behandelt und nicht in öffentlichem Code gespeichert werden.
