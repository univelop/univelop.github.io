---
layout: title
title: Konfiguration
parent: Komponenten-Designmodus
grand_parent: Designmodi
nav_order: 2
redirect_from:
    - /docs/designmode/record.html
---

Im Tab **Konfiguration** wird die Struktur eines Datensatzes festgelegt. Bausteine werden per Drag-and-Drop aus dem Baustein-Pool links in den Datensatz in der Mitte gezogen und lassen sich dort umordnen. Die angezeigten Einstellungen rechts hängen davon ab, was in der Mitte ausgewählt ist: nichts bzw. der Titel, ein Tab-Chip oder ein einzelner Baustein.

## Datensatz-Ebene

Ist nichts oder der Titel ausgewählt, stehen folgende Einstellungen zur Verfügung:

### Titel

Der Titel kann aus einem frei wählbaren Text (**Eigener Titel**), bis zu drei Bausteinen und einem Trennzeichen zusammengesetzt werden. Er wird am oberen Bildschirmrand angezeigt, wenn ein Eintrag geöffnet ist. Jede Änderung berechnet die Titel-Vorschau sofort neu.

- **Eigener Titel** / **Baustein 1–3** / **Trennzeichen** — die drei Baustein-Felder und das Trennzeichen entfallen bei Komponenten vom Typ _Einstellungen_.
- **Titelfarbe** — Optional ein Baustein mit Farbauswahl (nur Farbwähler-Bausteine), dessen Farbe als Titelfarbe übernommen wird. Entfällt ebenfalls bei Komponenten vom Typ _Einstellungen_.

### Tabs

- **Tabs anzeigen** — Schaltet Tabs für den Datensatz ein, um ihn in mehrere Abschnitte zu unterteilen, zwischen denen der Benutzer wechseln kann. Lässt sich erst deaktivieren, wenn nur noch ein Tab übrig ist. Neue Tabs werden über den "+"-Button in der Tab-Leiste selbst angelegt, nicht über diese Einstellung.

## Tab-Ebene

Ist ein Tab ausgewählt, stehen folgende Einstellungen zur Verfügung:

**Darstellung:**

- **Titel** — Anzeigename des Tabs (mehrsprachig)
- **Icon** — Symbol des Tabs
- **Position** — Reihenfolge des Tabs, über Pfeile verschiebbar

**Sichtbarkeit:**

- **Zugriff einschränken** — bei Aktivierung zusätzlich **Rollenzugriff einschränken**, um den Tab auf bestimmte Benutzerrollen zu beschränken
- **Tab verstecken** — bei Aktivierung zusätzlich **Anzeigen unter Bedingungen**, um den Tab nur bei Erfüllung einer Formel-Bedingung einzublenden
- **Zugeordnete Solution** — Zuordnung des Tabs zu einer [Solution](/docs/solutions)

Über **Löschen** lässt sich der gesamte Tab entfernen; enthaltene Bausteine werden dabei in den verbleibenden Tab verschoben.

## Baustein-Ebene

Ist ein Baustein ausgewählt, erscheinen rechts die Einstellungen. Die für alle Bausteine gemeinsamen Einstellungen (Bezeichnung, Technischer Name, Icon/Tooltip, Pflichtfeld, Nur Lesen, Verstecken, In Schnellerfassung verstecken, Zugriff einschränken, KI-Beschreibung, Tab-Zugehörigkeit, Solution — jeweils inkl. bedingter Varianten) sind unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

Ist der Baustein gesperrt (z. B. systemseitig), werden nur Sperr-Infos, die Technischer-Name-Felder und ggf. "In anderen Tab verschieben" angezeigt.
Bausteinspezifische Einstellungen können im jeweiligen Dokumentationsartikel des Bausteins gefunden werden.