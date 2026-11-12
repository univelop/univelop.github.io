---
title: Portal-Modus
nav_order: 3
layout: title
parent: Arbeitsbereich Einstellungen
redirect_from:
    - /docs/portal-mode.html
---

Der Portal-Modus ermöglicht es, einen Arbeitsbereich über eine eigene Domain zugänglich zu machen. So entsteht für externe Benutzer der Eindruck einer eigenständigen Anwendung — inklusive individuellem Anmeldefenster und eigenem Branding.

## Anwendungsfälle

- **Kundenportal** — Kunden erhalten Zugang zu ihren eigenen Daten
- **Mitarbeiterportal** — Mitarbeitende nutzen Univelop über eine firmeneigene URL

## Einrichtung

Die eigene Domain wird vom Univelop-Support eingerichtet. Jede eingerichtete Domain zählt als genutzte **Portal-License** im [Kosten-Center](/docs/workspace-settings/billing).

Externe Benutzer melden sich mit ihren Zugangsdaten über die Portal-URL an. Sie sehen nur die Komponenten und Datensätze, die ihrer Rolle entsprechen — ohne Zugang zu anderen Arbeitsbereichen.

## Einstellungen

In den Arbeitsbereich-Einstellungen unter **Domain** werden die eingerichteten Domains angezeigt und konfiguriert.

### Globale Einstellungen

1. **Registrierung neuer Benutzer auch ohne Einladungslink erlauben**
2. **Hinweistext** — wird im Portal-Modus unter den Login-Buttons angezeigt

### Einstellungen pro Domain

Über **Globale Einstellungen des Arbeitsbereichs für diese Domain überschreiben** können für eine einzelne Domain abweichende Einstellungen festgelegt werden:

1. **Hinweistext**
2. **Authentifizierungsmethoden** — Apple, Google, Microsoft, E-Mail oder OpenID. Bei OpenID wird zusätzlich die **Gewählte OAuth-Methode** festgelegt.
3. **Standardrolle** — die Rolle, die neu registrierte Benutzer erhalten
4. **Registrierung** — ob sich neue Benutzer ohne Einladungslink registrieren dürfen
5. **Banner für Homescreen**
6. **Firmenlogo auf Homescreen ausblenden**
7. **Hintergrundbild für Anmeldungsseite**
8. **Darstellung** — Hell, Dunkel oder Automatisch

{: .hint }
Über das [Design](/docs/workspace-settings/design) können Banner, Logo und Farben des Arbeitsbereichs angepasst werden, sodass das Portal dem eigenen Corporate Design entspricht.
