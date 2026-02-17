---
layout: title
title: Abmessungen
parent: Formular-Bausteine
grand_parent: Bausteine
nav_order: 16
redirect_from:
    - /docs/record-spec-settings/grand-childs-form/measure.html
---

Der Baustein _Abmessungen_ ermöglicht die Erfassung von bis zu 4 Maßwerten mit individuellen Bezeichnungen und Einheiten. Optional kann ein Gesamtwert über eine Formel aus den einzelnen Feldern berechnet werden, z. B. das Volumen aus Länge, Breite und Höhe.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Anzahl der Felder** — Anzahl der Maßfelder (1–4).
2. **Bezeichnung Feld 1–4** — Individuelle Bezeichnung für jedes Feld (z. B. „Länge", „Breite", „Höhe").
3. **Einheit Feld 1–4** — Einheit für jedes Feld als Text (z. B. „m", „cm", „kg").
4. **Gesamtbetrag anzeigen** — Aktiviert ein zusätzliches Feld für einen berechneten Gesamtwert.
5. **Einheit Gesamtbetrag** — Einheit des Gesamtwertes als Text (z. B. „m³").
6. **Formel Gesamtbetrag** — Formel zur Berechnung des Gesamtwertes aus den einzelnen Feldern. Die Felder werden über ihre technischen Namen referenziert, wie bei den Formelbausteinen üblich.

## Hinweise

- Die einzelnen Felder und der Gesamtwert stehen als separate Werte in Formeln und Workflows zur Verfügung.

## Verwandte Bausteine

- [Nummer](/docs/bricks/input/number-field) — Für einzelne Zahlenwerte
- [Zahlen-Formel](/docs/bricks/advanced/number-expression) — Für berechnete Zahlenwerte ohne eigene Eingabefelder
