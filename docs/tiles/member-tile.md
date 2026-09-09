---
layout: title
title: Mitglieder
nav_order: 4
parent: Kacheln
---

Die _Mitglieder_-Kachel ist eine spezielle Liste zur Verwaltung der Mitglieder eines Arbeitsbereichs. Jedes Mitglied hat automatisch einen Eintrag mit Name, E-Mail-Adresse und Status.

## Funktionsweise

- Für jedes Mitglied des Arbeitsbereichs wird automatisch ein Eintrag angelegt.
- Die Felder **Name**, **E-Mail** und **ID** sind bei aktiven Mitgliedern nicht änderbar.
- Verlässt ein Mitglied den Arbeitsbereich, wird sein Status auf _Nicht aktiv_ gesetzt. Danach können alle Felder (außer dem Status) bearbeitet und der Eintrag gelöscht werden.
- Wird ein Eintrag für ein nicht-aktives Mitglied manuell angelegt und dieses Mitglied tritt später dem Arbeitsbereich bei, wird sein Status automatisch auf _Aktiv_ gesetzt — sofern die E-Mail-Adresse übereinstimmt.

## Erweiterung

Im [Designmodus](/docs/designmode/record) kann die Mitglieder-Kachel um beliebige Bausteine erweitert werden, z. B.:

- Telefonnummer oder Adresse
- Zugewiesenes Projekt oder Abteilung
- Aktuelle Arbeitszeiten

Alle Bausteine der Mitglieder-Kachel können in den [Rollen und Rechten](/docs/member-management/roles-rights) zur Konfiguration von Berechtigungen verwendet werden.

## Einstellungen

Zusätzlich zu den [allgemeinen Kacheleinstellungen](/docs/tiles/general-settings):

1. **Kachel-Info** — Anzahl der Mitglieder oder Summe eines Bausteins.
2. **Filter und Sortierung** — Filter und Sortierreihenfolge für die Mitgliederliste.

## Verwandte Seiten

- [Mitgliederverwaltung](/docs/member-management/member-management) — Überblick über die Verwaltung von Mitgliedern
- [Rollen und Rechte](/docs/member-management/roles-rights) — Konfiguration von Benutzerrollen und Zugriffsrechten
