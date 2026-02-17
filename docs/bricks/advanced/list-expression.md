---
layout: title
title: Listen-Formel
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 20
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/listformular.html
---

Mit dem Baustein _Listen-Formel_ wird das Ergebnis einer Formel als Liste von Chips dargestellt. Die Formel muss als Ergebnis eine Liste liefern.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Formel** — Der Ausdruck, der ausgewertet wird. Muss eine Liste als Ergebnis liefern.

## Funktionsweise

- Listenfunktionen ermöglichen die Arbeit mit Listen, z. B. `intersection([1,2,3,4,5], [2,4])` für die Schnittmenge.
- Es kann auf andere Bausteine referenziert werden, z. B. auf den _Datensätze_-Baustein.
- Wird ein Wert verwendet, der nicht einer Liste entspricht, muss die Funktion `parseList(wert)` zur Umwandlung genutzt werden.

## Hinweise

- Der Wert ist schreibgeschützt und wird automatisch berechnet.
- Bei Pflichtfeldern gilt die Liste als ausgefüllt, wenn sie mindestens ein Element enthält.
- Eine Übersicht aller verfügbaren Listenfunktionen ist unter _Formeln_ zu finden.

## Verwandte Bausteine

- [Textformel](/docs/bricks/advanced/text-expression) — Für berechnete Textwerte
- [Ja-Nein-Formel](/docs/bricks/advanced/bool-expression) — Für berechnete Wahrheitswerte
- [Datensätze](/docs/bricks/advanced/multi-record-picker) — Für die Verknüpfung mit mehreren Datensätzen
