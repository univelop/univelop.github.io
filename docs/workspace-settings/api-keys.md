---
layout: title
title: API-Schlüssel
parent: Arbeitsbereich Einstellungen
nav_order: 2
---

Unter **API-Schlüssel** werden die Schlüssel für den Zugriff auf die [Univelop REST-API](/docs/interfaces/rest-api) verwaltet.

## Funktionsweise

Jeder API-Schlüssel ermöglicht es externen Systemen, über die REST-API auf Daten des Arbeitsbereichs zuzugreifen. Der Schlüssel wird bei jeder Anfrage im Header `x-api-key` mitgesendet und dient der Authentifizierung.

Welche Daten über einen Schlüssel gelesen und bearbeitet werden dürfen, richtet sich nach der Rolle des Schlüssels — genauso wie bei einem Benutzer mit dieser Rolle: Listen, Datensätze und Felder, für die die Rolle keine Rechte hat, sind auch über die API nicht zugänglich.

## Neuer API-Schlüssel

Über **API-Schlüssel hinzufügen** wird ein Schlüssel angelegt:

1. **Name** — Bezeichnung des Schlüssels, z. B. nach dem angebundenen System
2. **Beschreibung** — optionale Beschreibung des Verwendungszwecks
3. **Rolle des API-Schlüssels** — die [Rolle](/docs/member-management/roles-rights), mit deren Rechten Anfragen ausgeführt werden. Standard ist **Admin** mit Zugriff auf alle Ressourcen.
4. **Präfix** — _optional._ Eine Kennzeichnung, die in den Schlüssel übernommen wird (z. B. `chatbot`). Erlaubt sind Kleinbuchstaben ohne Umlaute, Ziffern und Bindestriche.
5. **API-Schlüssel Vorschau** — zeigt, wie der Schlüssel aufgebaut sein wird, z. B. `uni-chatbot-Ab3x...`

Mit **Speichern und Kopieren** wird der Schlüssel erstellt und in die Zwischenablage kopiert (in der App über den Teilen-Dialog).

{: .hint }
Das Präfix kann nach dem Erstellen nicht mehr geändert werden.

## Übersicht der Schlüssel

In der Liste wird für jeden Schlüssel der **Name** und die **Rolle** angezeigt. Pro Schlüssel stehen folgende Aktionen zur Verfügung:

1. **Kopieren** — kopiert den vollständigen Schlüssel. Der Schlüssel kann also jederzeit erneut abgerufen werden.
2. **Bearbeiten** — Name, Beschreibung und Rolle können geändert werden, Präfix und Schlüssel nicht
3. **Löschen** — entfernt den Schlüssel endgültig

{: .warning }
Nach dem Löschen eines Schlüssels funktionieren alle Anbindungen, die ihn verwenden, nicht mehr.

## Hinweise

- Eine Rolle, die von einem API-Schlüssel verwendet wird, kann nicht gelöscht werden.
- Jeder API-Aufruf verbraucht Credits entsprechend der genutzten API-Version (V1 oder V2).
- API-Schlüssel sollten vertraulich behandelt und nicht in öffentlichem Code gespeichert werden.
