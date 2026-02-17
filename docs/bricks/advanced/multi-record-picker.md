---
layout: title
title: Datensätze
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 2
---

Mit dem Baustein _Datensätze_ wird eine mehrfache Verknüpfung zu beliebig vielen Datensätzen einer anderen Liste hergestellt. Er erweitert den Baustein _Datensatz_ um die Möglichkeit, mehrere Einträge auszuwählen.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Verknüpfung mit** — Die Liste, aus der Datensätze ausgewählt werden können.
2. **Filter und Sortierung** — Schränkt die zur Auswahl stehenden Datensätze ein. Die Sortierung gilt nur für die Auswahlliste, nicht für die Anzeige der gewählten Datensätze. Sobald eine Sucheingabe erfolgt, wird die Sortierung ignoriert.
3. **Mit aktuellem Benutzer vorbelegen** — Beim Erstellen eines neuen Eintrags wird der aktuelle Benutzer eingetragen, sofern er den Filtern entspricht.
4. **Benachrichtigungen für eingetragene Benutzer** — Sendet Benachrichtigungen an die im Baustein eingetragenen Benutzer.

## Funktionsweise

In der Nutzung können Datensätze an- und abgewählt werden. Der Feldinhalt ist immer eine Liste von Elementen — standardmäßig steht `[]` (leere Liste) im Baustein. Die Aufzählung der ausgewählten Datensätze wird immer alphabetisch sortiert dargestellt.

## Hinweise

- Die Einstellungen sind gegenüber dem Baustein _Datensatz_ eingeschränkt — es gibt z. B. keine _Werte übernehmen_-Funktion.
- Der Wert kann in Formeln als Liste verwendet werden, z. B. mit Listenfunktionen.
- Verknüpfungsmöglichkeiten sind unter [Verknüpfen von Listen](/docs/link-lists) beschrieben.

## Verwandte Bausteine

- [Datensatz](/docs/bricks/advanced/record-picker) — Für die Verknüpfung mit einem einzelnen Datensatz
- [Datensatz Liste](/docs/bricks/advanced/record-list) — Für die Anzeige verknüpfter Einträge als eingebettete Liste
- [Listen-Formel](/docs/bricks/advanced/list-expression) — Für berechnete Listen
