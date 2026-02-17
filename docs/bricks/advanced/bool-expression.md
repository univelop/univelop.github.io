---
layout: title
title: Ja-Nein-Formel
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 18
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/boolformular.html
---

Mit dem Baustein _Ja-Nein-Formel_ wird das Ergebnis einer Formel als Kästchen mit oder ohne Haken (Ja/Nein) dargestellt. Die Formel muss als Ergebnis einen Wahrheitswert liefern.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Formel** — Der Ausdruck, der ausgewertet wird. Muss einen Wahrheitswert (wahr/falsch) ergeben.

## Funktionsweise

- Wird ein einzelner _Schalter_-Baustein referenziert, funktioniert die Formel direkt.
- Werden Werte kombiniert, müssen diese mit Vergleichsoperatoren (`==`, `!=`, `<`, `>`, `<=`, `>=`) zu einem Wahrheitswert kombiniert werden.
- Mehrere Bedingungen können mit `&&` (und) sowie `||` (oder) verknüpft werden.
- Eine `ifElse`-Bedingung ist nicht notwendig — es reicht, die Bedingung direkt zu formulieren. Wird die Bedingung nicht erfüllt, ist der Wert automatisch „Nein".

## Hinweise

- Der Wert ist schreibgeschützt und wird automatisch berechnet.
- Auf den Wert kann in Filtern mit „Ja" oder „Nein" gefiltert werden.
- Komplexe Abhängigkeiten lassen sich abbilden, z. B.: `datum < today() - 10 && status == 'Abgerechnet'`

## Verwandte Bausteine

- [Schalter](/docs/bricks/input/switch) — Für manuelle Ja/Nein-Eingabe
- [Textformel](/docs/bricks/advanced/text-expression) — Für berechnete Textwerte
- [Listen-Formel](/docs/bricks/advanced/list-expression) — Für berechnete Listen
