---
layout: title
title: Zahlenformel
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 17
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/numberformular.html
---

Mit dem Baustein _Zahlenformel_ wird das Ergebnis einer Formel als formatierte Zahl dargestellt. Die Formatierung (Nachkommastellen, Tausender-Trennzeichen) funktioniert analog zum Baustein _Nummer_.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Formel** — Der Ausdruck, der ausgewertet wird. Kann numerische Bausteine direkt referenzieren.
2. **Nachkommastellen** — Anzahl der angezeigten Dezimalstellen für das Ergebnis.
3. **Tausender-Trennzeichen** — Aktiviert die Anzeige von Tausender-Trennzeichen.
4. **Einheit anzeigen** — Zeigt eine Einheit hinter dem Ergebnis an.
5. **Einheit** — Der Einheitstext (z. B. „€", „kg", „h"). Nur verfügbar wenn _Einheit anzeigen_ aktiviert ist.

## Funktionsweise

- Werden nur numerische Bausteine (z. B. _Nummer_ oder _Laufende Nummer_) referenziert, funktioniert die Formel ohne weitere Funktionen.
- Sobald ein nicht-numerischer Wert verwendet wird, muss die Funktion `toNumber(wert)` zur Umwandlung genutzt werden.
- Standardmäßige Rechenoperationen (`+`, `-`, `*`, `/`) werden unterstützt.

## Hinweise

- Der Wert ist schreibgeschützt und wird automatisch berechnet.
- Eine Übersicht aller verfügbaren Formeln ist unter _Formeln_ zu finden.

## Verwandte Bausteine

- [Textformel](/docs/bricks/advanced/text-expression) — Für berechnete Textwerte
- [Datums-Formel](/docs/bricks/advanced/date-expression) — Für berechnete Datumswerte
- [Nummer](/docs/bricks/input/number-field) — Für manuelle Zahleneingabe
