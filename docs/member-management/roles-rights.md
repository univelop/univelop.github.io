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
3. **Workflow-Rechte** — legt fest, ob die Rolle Workflows sehen und bearbeiten darf (`Kein Zugriff`, `Lesezugriff`, `Schreibzugriff`)

Über die drei Punkte oben rechts kann eine Rolle **dupliziert** oder **gelöscht** werden.

{: .hint }
Wird eine neue Rolle angelegt, erhalten Besitzer und Administratoren diese automatisch, da sie grundsätzlich über alle Funktionalitäten verfügen.

## Rechte pro Komponente

Das Rechtesystem greift auf ganze Komponenten zu. Im Modus **Rolle bearbeiten** werden alle Komponenten aufgelistet. Für jede Komponente können folgende Zugriffsrechte konfiguriert werden:

### Zugriff (Lesen)

| Wert | Beschreibung |
|---|---|
| **Alle** | Alle Datensätze der Komponente sind sichtbar (Standard) |
| **Eingeschränkt** | Datensätze werden anhand eines Filters eingeschränkt. Es stehen normale Filter sowie Bedingungen auf Basis der [Mitglieder-Komponente](/docs/tiles/member-tile) zur Verfügung. |
| **Meine** | Nur Datensätze, die dem Benutzer über einen Benutzer-Baustein zugeordnet sind |
| **Keine** | Die Komponente ist für die Rolle nicht sichtbar. Auch Datensatzverknüpfungen auf diese Komponente sind nicht auswählbar. |

Die gleichen Filteroptionen können für **Bearbeiten** und **Löschen** separat konfiguriert werden.

### Erweiterter Zugriff

Zusätzlich zu den Filtern können folgende Aktionen pro Rolle und Komponente gesteuert werden:

1. **Anlegen erlauben** — neue Datensätze erstellen
2. **Bearbeiten erlauben** — bestehende Datensätze ändern
3. **Löschen erlauben** — Datensätze entfernen
4. **Einträge entsperren erlauben** — gesperrte Datensätze freigeben
5. **Import erlauben** — Excel-Dateien mit Datensätzen importieren
6. **Export erlauben** — Datensätze nach Excel exportieren

{: .warning }
Wir empfehlen, den Import nur für geschultes Personal freizugeben.

## Mehrere Rollen zuordnen

Benutzern können mehrere Rollen zugeordnet werden — nicht nur zur Vertretung, sondern auch, wenn jemand regulär mehrere Rollen in unterschiedlichen Kontexten innehat. Die Zuordnung erfolgt in der Mitgliederverwaltung über die Detailansicht eines Benutzers.

Voraussetzung ist eine Lizenz, die mehrere Rollen unterstützt (siehe [Lizenzen](/docs/member-management/licenses)).

## Rolle wechseln

Sind einem Benutzer mehrere Rollen zugeordnet, kann die aktive Rolle auf zwei Wegen gewechselt werden:

1. In der Mitglieder-Detailansicht: Unter **mögliche Rollen** über **Rolle hinzufügen** eine neue Rolle zuordnen, unter **aktive Rolle** über **Rolle wechseln** die aktive Rolle ändern.
2. In der Seitenleiste im Arbeitsbereich: Auf das Profilbild klicken und dort zwischen den zugeordneten Rollen wechseln.
