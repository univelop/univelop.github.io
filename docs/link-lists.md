---
title: Verknüpfen von Listen
nav_order: 17
layout: title
---

Verknüpfungen zwischen Listen ermöglichen es, Beziehungen zwischen Datensätzen abzubilden — z. B. die Zuordnung eines Mitarbeiters zu einem Projekt oder einer Position zu einem Lieferschein. Weitere Informationen zu den Grundlagen finden sich unter [Datenstruktur](/docs/data-structure).

## Arten der Verknüpfung

| Baustein | Beziehung | Beschreibung |
|---|---|---|
| [Datensatz](/docs/bricks/advanced/record-picker) | 1:1 | Verknüpfung zu genau einem Datensatz einer anderen Liste |
| [Datensätze](/docs/bricks/advanced/multi-record-picker) | 1:n | Verknüpfung zu mehreren Datensätzen einer anderen Liste |
| [Datensatzliste](/docs/bricks/advanced/record-list) | 1:n | Eingebettete Liste von verknüpften Datensätzen mit Vorschau und Schnellerfassung |

Die Bausteine [Kalender](/docs/bricks/advanced/calendar), [Tabelle](/docs/bricks/advanced/table), [Terminplaner](/docs/bricks/advanced/scheduler) und [Matrix](/docs/bricks/advanced/matrix) bieten ebenfalls die Möglichkeit, verknüpfte Datensätze darzustellen.

## Verknüpfung über den Baustein Datensatz

Nachdem der Baustein einer Liste hinzugefügt wurde, muss in den Einstellungen unter **Verknüpfung mit** die Ziel-Liste festgelegt werden.

### Werte übernehmen

Es besteht die Möglichkeit, Werte aus dem verknüpften Datensatz in andere Bausteine zu übernehmen. Die Quell- und Zielbausteine müssen den gleichen Typ aufweisen. Die übernommenen Werte können auch **synchron** gehalten werden.

### Löschen und Duplizieren

Wird die Funktion **Datensatz löschen/duplizieren, wenn verknüpfter Datensatz gelöscht/dupliziert wird** aktiviert, folgt der verknüpfte Datensatz den Aktionen des Hauptdatensatzes.

## Verknüpfung über die Datensatzliste

Die Datensatzliste zeigt mehrere Datensätze einer anderen Liste an. Über die Einstellung **Verknüpfung über** wird der Datensatz-Baustein festgelegt, über den die Zuordnung erfolgt.

### Darstellungsarten

1. **Link zur Liste** — zeigt nur den Namen der Verknüpfung und die Anzahl der verknüpften Datensätze. Optional kann eine Summe über einen Baustein angezeigt werden.
2. **Eingebettete Liste** — zeigt eine Vorschau der verknüpften Datensätze direkt im Eintrag. Die Anzahl der angezeigten Datensätze ist konfigurierbar (Standard: 3).

### Schnellerfassung

Bei der eingebetteten Liste kann die **Schnellerfassung** aktiviert werden. Damit können neue verknüpfte Datensätze direkt aus dem übergeordneten Eintrag heraus erstellt werden. Bausteine, die für die Schnellerfassung nicht relevant sind, können über die Einstellung **In der Schnellerfassung verstecken** ausgeblendet werden.
