---
layout: title
title: Matrix
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 11
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/matrix.html
---

Mit dem Baustein _Matrix_ werden Buchungen bearbeitet, die sich auf zwei Listen beziehen. Diese zwei Listen bilden die Zeilen und Spalten der Matrix. Die Buchungen sind Einträge, die jeweils mit einer Zeile und einer Spalte verknüpft sind. Der Baustein eignet sich z. B. für Lizenzmanagement (Kunden × Produkte), Berechtigungsmatrizen oder Schichtpläne.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

### Spalten

1. **Verknüpfung mit** — Die Liste für die Spalten der Matrix (z. B. Produkte).
2. **Verknüpfung über** — _Optional._ Verbindung zum aktuellen Datensatz, um die Spalten zu filtern.
3. **Filter und Sortierung** — Schränkt die angezeigten Spalten ein.

### Zeilen

4. **Verknüpfung mit** — Die Liste für die Zeilen der Matrix (z. B. Kunden).
5. **Verknüpfung über** — _Optional._ Verbindung zum aktuellen Datensatz, um die Zeilen zu filtern.
6. **Filter und Sortierung** — Schränkt die angezeigten Zeilen ein.

### Zellen

7. **Verknüpfung mit** — Die Liste, die die Buchungen (Zellen) enthält.
8. **Verknüpfung über** — _Optional._ Verbindung zum aktuellen Datensatz.
9. **Verknüpfung zur Zeile** — Der _Datensatz_-Baustein in der Buchungsliste, der auf die Zeilen-Liste zeigt.
10. **Verknüpfung zur Spalte** — Der _Datensatz_-Baustein in der Buchungsliste, der auf die Spalten-Liste zeigt.

### Darstellung

11. **Darstellung der Zellen** — Wählt Bausteine aus, die in den Zellen angezeigt werden. Nur _Schalter_-Bausteine sind in den Zellen direkt editierbar — alle anderen Bausteine werden nur dargestellt.
12. **Detailansicht und Mehrfachauswahl** — Aktiviert oder deaktiviert die Buttons für Detailansicht und Mehrfachauswahl.

### Spaltensumme und Kapazität

13. **Spaltensumme** — Zeigt unterhalb jeder Spalte eine Zusammenfassung an: _Anzahl der Einträge_ oder _Summe über einen Baustein_.
14. **Kapazität** — Ein numerischer Baustein aus der Spaltenliste, der angibt, wie viele Zellen maximal pro Spalte gefüllt werden dürfen. Wird die Kapazität überschritten, wird sie rot dargestellt.

### Erweitert

15. **Leere Einträge automatisch löschen** — Löscht Buchungen automatisch, wenn deren Zellen geleert werden (z. B. ein Schalter von Ja auf Nein gesetzt wird).

## Funktionsweise

Die Matrix zeigt eine Gitteransicht, bei der die Zeilen und Spalten aus den konfigurierten Listen stammen. Jede Zelle repräsentiert eine mögliche Buchung zwischen einer Zeile und einer Spalte. Wird z. B. ein Schalter in einer Zelle aktiviert, wird automatisch ein Buchungsdatensatz erstellt, der die entsprechende Zeile und Spalte verknüpft. Die Kapazitätsanzeige zählt die gefüllten Zellen pro Spalte mit und zeigt eine Warnung bei Überschreitung.

Über die Detailansicht kann eine gefüllte Zelle geöffnet werden, um den vollständigen Buchungsdatensatz zu bearbeiten.

## Hinweise

- Die Matrix erzeugt und löscht Buchungsdatensätze automatisch basierend auf den Zellenaktionen.
- _Schalter_-Bausteine eignen sich am besten für Zellen, da sie direkt in der Matrix editiert werden können.
- Filter und Sortierung können für Spalten, Zeilen und Zellen unabhängig konfiguriert werden.

## Verwandte Bausteine

- [Tabelle](/docs/bricks/advanced/table) — Für eindimensionale tabellarische Darstellung
- [Datensatz Liste](/docs/bricks/advanced/record-list) — Für einfache Listenverknüpfungen
- [Ressourcen-Zuweisung](/docs/bricks/advanced/resource-allocation) — Für Drag-&-Drop-Zuweisungen
