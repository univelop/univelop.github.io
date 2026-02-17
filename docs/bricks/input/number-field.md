---
layout: title
title: Nummer
parent: Formular-Bausteine
grand_parent: Bausteine
nav_order: 2
redirect_from:
    - /docs/record-spec-settings/grand-childs-form/number.html
---

Der Baustein _Nummer_ ermöglicht die Eingabe von Zahlenwerten. Er eignet sich für Beträge, Mengen, Auftragsnummern und alle weiteren numerischen Eingaben. Falscheingaben (z. B. Buchstaben) werden automatisch verhindert.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Nachkommastellen** — Anzahl der angezeigten Dezimalstellen. Bei 0 werden nur Ganzzahlen akzeptiert. Ohne Angabe werden standardmäßig 2 Nachkommastellen angezeigt.
2. **Tausender-Trennzeichen** — Aktiviert die Anzeige von Tausender-Trennzeichen für bessere Lesbarkeit (z. B. 1.000.000).
3. **Kleinstmögliche Zahl** — Untere Grenze des erlaubten Wertebereichs. Unterstützt Formeln für dynamische Grenzen sowie feste Zahlenwerte.
4. **Größtmögliche Zahl** — Obere Grenze des erlaubten Wertebereichs. Unterstützt Formeln für dynamische Grenzen sowie feste Zahlenwerte.
5. **Startwert** — Ein vorausgefüllter Zahlenwert beim Erstellen eines neuen Eintrags. Nur verfügbar wenn keine Wertegrenzen gesetzt sind.

## Hinweise

- Eingaben außerhalb des erlaubten Wertebereichs werden nach Verlassen des Dialogfensters zurückgesetzt.
- Nummern-Bausteine dienen als Grundlage für Berechnungen im Baustein [Zahlen-Formel](/docs/bricks/advanced/number-expression).

## Verwandte Bausteine

- [Zahlen-Formel](/docs/bricks/advanced/number-expression) — Für berechnete Zahlenwerte aus Formeln
- [Abmessungen](/docs/bricks/input/measure) — Für mehrere zusammenhängende Maßfelder mit Gesamtberechnung
- [Textfeld](/docs/bricks/input/text-field) — Für allgemeine Texteingaben
