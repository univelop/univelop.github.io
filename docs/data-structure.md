---
title: Datenstruktur
nav_order: 3
layout: title
---

In Univelop werden jegliche Daten in unseren sogenannten Datensätzen gespeichert. Diese Datensätze werden in einer zugehörigen Liste bzw. Kachel aufbewahrt.
Dieser Aufbau lässt sich mit einer Excel- oder SQL-Tabelle gut vergleichen:
Eine Liste in Univelop entspricht einer Tabelle in Excel oder SQL. Ein Datensatz in Univelop entspricht einer Zeile in einer Tabelle.

Die Datensätze bestehen wiederum aus Bausteinen. Diese Bausteine lassen sich mit den Spalten in einer Excel- oder SQL-Tabelle vergleichen.
Es gibt in Univelop verschiedenste Bausteine, welche unterschiedliche Datentypen speichern können. Es gibt Bausteine für Text oder Datum,
aber auch Bausteine zum Hochladen von Bildern oder Dateien und noch viele mehr.

Die Bausteine können per Drag-and-Drop beliebig hinzugefügt, umgeordnet und entfernt werden, was sich hingegen bei SQL oder Excel-Tabellen nicht so leicht gestaltet.
Hierbei gibt es auch keine Einschränkungen in der Reihenfolge und Anzahl der Bausteine .

## Verknüpfung von Listen/Relationen

{: .hint }
Dieser Abschnitt richtet sich an technisch versierte Nutzer die bereits mit Datenbanken oder Excel vertraut sind oder selber Module in Univelop erstellen wollen.

Verknüpfungen von Listen sind für verschiedenste Zwecke notwendig: Die Zuweisung von einem Projekt zu einem Projektleiter, eine Zeiterfassung zu einem Mitarbeiter und einer Rechnung zu einem Debitor.
Diese Verknüpfungen machen es möglich, Relationen von echten Objekten abzubilden.

In SQL werden Relationen zwischen Tabellen über sogenannte Fremdschlüssel abgebildet. Dieses Konzept wird in Univelop über die Datensatz und Datensätze Bausteine realisiert. Diese sind für die Verknüpfung von Listen zuständig.

### 1-zu-1 Verknüpfung

Die 1-zu-1 Verknüpfung (Eine Zeiterfassung gehört zu einem Mitarbeiter) wird über den [Datensatz](/docs/bricks/advanced/record-picker) Baustein realisiert.
Beim Datensatz-Baustein wird festgelegt, zu welcher Liste eine Relation bestehen soll.

Betrachtet man hierzu das Beispiel einer Zeiterfassung, welche einem Mitarbeiter zugeordnet wird, so kann man dies wie folgt umsetzen:

In der Liste "Zeiterfassungen" wird ein Datensatz-Baustein hinzugefügt. Dieser neue Baustein wird mit der Liste "Mitarbeiter" verknüpft.
So kann nun eine Zeiterfassung einem Mitarbeiter zugewiesen werden.

### 1-zu-n Verknüpfung

In Univelop wird die 1-zu-n Zuordnung (Ein Projekt besteht aus mehreren Projektbeteiligten) ebenfalls unterstützt. Diese wird über den Baustein ["Datensätze" Baustein](/docs/bricks/advanced/multi-record-picker) realisiert.
Die Funktionsweise ist dabei identisch zum "Datensatz" Baustein.

Betrachtet man hierzu das Beispiel eines Projekts, welches einen oder mehrere Projektleiter zugewiesen bekommt, funktioniert dies in Univelop so:
In der Liste "Projekte" wird ein Datensätze-Baustein hinzugefügt. Dieser neue Baustein wird mit der Liste "Projektleiter" (oder "Mitarbeiter", abhängig davon wo die Projektleiter hinterlegt werden) verknüpft. So kann nun ein beliebiges Projekt keinem, einem einzelnen oder mehreren Projektleitern zugewiesen werden.

### Weitere Aspekte

Relationen können in Univelop beliebig kombiniert werden. So ist beispielsweise ein Aufbau möglich,
in dem ein Projekt zu beliebig vielen Projektleitern gehört, gleichzeitig einem Kunden zugeordnet ist. Gleichzeitig können Rechnungen, Zeiterfassungen und
Projekten zugeordnet werden. Es lassen sich also beliebig komplexe Datenstrukturen in Univelop abbilden.

Darstellen lassen sich solche komplexe Relationen in Univelop auch über verschiedene Bausteine: Über den Baustein [Datensatzliste](/docs/bricks/advanced/record-list) kann z.B. in einem Projekt angezeigt werden, was für Rechnungen zu diesem Projekt existieren. Der Baustein [Kalender](/docs/bricks/advanced/calendar) zeigt z.B. eine monatliche oder wöchentliche Übersicht der summierten Arbeitszeiten zu einem Projekt an. Und der [Terminplaner](/docs/bricks/advanced/scheduler) stellt alle Termine der Teammitglieder zu einem Projekt dar.
