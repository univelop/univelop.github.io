---
title: Datenstruktur
nav_order: 3
layout: title
---

In Univelop werden Daten in Datensätzen gespeichert, die in einer zugehörigen Liste (Kachel) organisiert sind. Dieser Aufbau lässt sich mit einer Tabelle in Excel oder SQL vergleichen: Eine Liste entspricht einer Tabelle, ein Datensatz einer Zeile.

Datensätze bestehen aus Bausteinen, die den Spalten einer Tabelle entsprechen. Es gibt Bausteine für Text, Datum, Bilder, Dateien und viele weitere Datentypen. Bausteine können per Drag-and-Drop hinzugefügt, umgeordnet und entfernt werden — ohne Einschränkungen in Reihenfolge oder Anzahl.

## Verknüpfung von Listen

Verknüpfungen zwischen Listen bilden Beziehungen zwischen realen Objekten ab — z. B. die Zuordnung eines Projekts zu einem Projektleiter oder einer Rechnung zu einem Kunden.

### 1-zu-1 Verknüpfung

Eine 1-zu-1 Verknüpfung verbindet einen Datensatz mit genau einem Datensatz einer anderen Liste. Sie wird über den Baustein [Datensatz](/docs/bricks/advanced/record-picker) realisiert.

**Beispiel:** In der Liste "Zeiterfassungen" wird ein Datensatz-Baustein hinzugefügt und mit der Liste "Mitarbeiter" verknüpft. So kann jede Zeiterfassung einem Mitarbeiter zugeordnet werden.

### 1-zu-n Verknüpfung

Eine 1-zu-n Verknüpfung verbindet einen Datensatz mit beliebig vielen Datensätzen einer anderen Liste. Sie wird über den Baustein [Datensätze](/docs/bricks/advanced/multi-record-picker) oder die [Datensatzliste](/docs/bricks/advanced/record-list) realisiert.

**Beispiel:** In der Liste "Projekte" wird ein Datensätze-Baustein hinzugefügt und mit der Liste "Projektleiter" verknüpft. So kann ein Projekt keinem, einem oder mehreren Projektleitern zugeordnet werden.

### Kombination

Verknüpfungen können beliebig kombiniert werden. Ein Projekt kann gleichzeitig mehreren Projektleitern zugeordnet sein, einem Kunden gehören und über eine Datensatzliste alle zugehörigen Rechnungen und Zeiterfassungen anzeigen.

Zur Darstellung komplexer Verknüpfungen stehen Bausteine wie [Datensatzliste](/docs/bricks/advanced/record-list), [Kalender](/docs/bricks/advanced/calendar), [Tabelle](/docs/bricks/advanced/table) und [Terminplaner](/docs/bricks/advanced/scheduler) zur Verfügung.
