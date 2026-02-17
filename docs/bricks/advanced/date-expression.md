---
layout: title
title: Datums-Formel
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 19
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/dateformular.html
---

Mit dem Baustein _Datums-Formel_ wird anhand einer Formel ein berechnetes Datum dargestellt. Er eignet sich z. B. für dynamische Fristen, voraussichtliche Lieferdaten oder berechnete Fälligkeiten.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Formel** — Der Ausdruck, der ausgewertet wird. Kann auf _Datum_-Bausteine und Datumsformeln zugreifen.
2. **Inklusive Uhrzeit** — Zeigt zusätzlich zum Datum die Uhrzeit an.
3. **Wochentag anzeigen** — Zeigt die textuelle Bezeichnung des Wochentags an.

## Hinweise

- Die Formel kann nur auf Grundlage von _Datum_-Bausteinen und Datumsformeln arbeiten.
- Neben dem berechneten Datum stehen automatisch auch die Kalenderwoche und der Monat als abgeleitete Werte zur Verfügung.
- Der Wert ist schreibgeschützt und wird automatisch berechnet.

## Verwandte Bausteine

- [Datum](/docs/bricks/input/date-picker) — Für manuelle Datumseingabe
- [Textformel](/docs/bricks/advanced/text-expression) — Für berechnete Textwerte
- [Zahlen-Formel](/docs/bricks/advanced/number-expression) — Für berechnete Zahlenwerte
