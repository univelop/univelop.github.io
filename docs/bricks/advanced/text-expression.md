---
layout: title
title: Textformel
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 16
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/textformular.html
---

Mit dem Baustein _Textformel_ wird das Ergebnis einer Formel als Text dargestellt. Die Formel kann Textbausteine direkt referenzieren oder statische Texte in Hochkommata angeben (z. B. `'Beispieltext'`).

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Formel** — Der Ausdruck, der ausgewertet wird. Kann andere Bausteine über ihren technischen Namen referenzieren.

## Funktionsweise

- Werden nur Text-Bausteine oder statische Texte in Hochkommata verwendet, funktioniert die Formel ohne weitere Funktionen.
- Sobald ein nicht-textueller Wert (z. B. Datum, Zahl) verwendet wird, muss die Funktion `toText(wert)` zur Umwandlung genutzt werden.
- Texte können mit `+` verkettet werden, z. B. `'Kunde: ' + kundenname`.

## Hinweise

- Der Wert ist schreibgeschützt und wird automatisch berechnet.
- Eine Übersicht aller verfügbaren Formeln ist unter _Formeln_ zu finden.

## Verwandte Bausteine

- [Zahlen-Formel](/docs/bricks/advanced/number-expression) — Für berechnete Zahlenwerte
- [Datums-Formel](/docs/bricks/advanced/date-expression) — Für berechnete Datumswerte
- [Ja-Nein-Formel](/docs/bricks/advanced/bool-expression) — Für berechnete Wahrheitswerte
- [Listen-Formel](/docs/bricks/advanced/list-expression) — Für berechnete Listen
