---
title: Rollen und Rechte
layout: title
parent: Mitgliederverwaltung
nav_order: 1
---

Über Rollen und Rechte wird gesteuert, welche Mitglieder auf welche Daten zugreifen dürfen. Rollen werden global im Arbeitsbereich definiert und anschließend den Mitgliedern zugewiesen.

## Rollen

Rollen werden in den Arbeitsbereich-Einstellungen unter **Rollen** verwaltet. Im Standard ist die Rolle **Teammitglied** immer angelegt. Zusätzlich existieren die fest eingebauten Rollen **Besitzer** und **Administrator**, die alle Rechte besitzen.

### Rolle erstellen und bearbeiten

Bei Klick auf eine Rolle werden folgende Einstellungen angezeigt:

1. **Name** — Anzeigename der Rolle
2. **Standardrolle** — wird neuen Mitgliedern automatisch zugewiesen (ja/nein)
3. **Darf Arbeitsbereich wechseln** — steuert, ob Mitglieder mit dieser Rolle den Arbeitsbereich wechseln können
4. **Workflow-Rechte** — legt fest, ob die Rolle Workflows sehen und bearbeiten darf (`Keine`, `Lesen`, `Schreiben`)

Über die drei Punkte oben rechts kann eine Rolle **dupliziert** oder **gelöscht** werden.

{: .hint }
Wird eine neue Rolle angelegt, erhalten Besitzer und Administratoren diese automatisch, da sie grundsätzlich über alle Funktionalitäten verfügen.

## Rechte pro Kachel

Das Rechtesystem greift auf ganze Kacheln zu. Im Modus **Rolle bearbeiten** werden alle Kacheln aufgelistet. Für jede Kachel können folgende Zugriffsrechte konfiguriert werden:

### Zugriff (Lesen)

| Wert | Beschreibung |
|---|---|
| **Alle** | Alle Datensätze der Kachel sind sichtbar (Standard) |
| **Eingeschränkt** | Datensätze werden anhand eines Filters eingeschränkt. Es stehen normale Filter sowie Bedingungen auf Basis der Mitgliederkachel zur Verfügung. |
| **Meine** | Nur Datensätze, die dem Benutzer über einen Benutzer-Baustein zugeordnet sind |
| **Keine** | Die Kachel ist für die Rolle nicht sichtbar. Auch Datensatzverknüpfungen auf diese Kachel sind nicht auswählbar. |

Die gleichen Filteroptionen können für **Bearbeiten** und **Löschen** separat konfiguriert werden.

### Erweiterter Zugriff

Zusätzlich zu den Filtern können folgende Aktionen pro Rolle und Kachel gesteuert werden:

1. **Anlegen erlauben** — neue Datensätze erstellen
2. **Bearbeiten erlauben** — bestehende Datensätze ändern
3. **Löschen erlauben** — Datensätze entfernen
4. **Einträge entsperren erlauben** — gesperrte Datensätze freigeben
5. **Import erlauben** — Excel-Dateien mit Datensätzen importieren
6. **Export erlauben** — Datensätze nach Excel exportieren

{: .warning }
Wir empfehlen, den Import nur für geschultes Personal freizugeben.

## Mehrere Rollen zuordnen

Benutzern können mehrere Rollen zugeordnet werden. Das ermöglicht vertretungsweises Arbeiten in einer anderen Ansicht, ohne Rechteeinstellungen anpassen zu müssen.

Voraussetzung ist eine Lizenz, die mehrere Rollen unterstützt (Pro oder Admin). Die Zuordnung erfolgt in der Mitgliederverwaltung über die Detailansicht eines Benutzers.

## Rolle wechseln

Sind einem Benutzer mehrere Rollen zugeordnet, kann die aktive Rolle über das **Drei-Punkte-Menü** gewechselt werden. Nach der Auswahl wird die Ansicht entsprechend der neuen Rolle angepasst — mit den dazugehörigen Kacheln und Berechtigungen.
