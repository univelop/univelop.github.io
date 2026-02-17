---
layout: title
title: Schalter
parent: Formular-Bausteine
grand_parent: Bausteine
nav_order: 3
redirect_from:
    - /docs/record-spec-settings/grand-childs-form/switch.html
---

Mit dem Baustein _Schalter_ werden einfache Ja/Nein-Abfragen in Einträgen dargestellt. Er eignet sich für Bestätigungen, Checklisten-Punkte und alle Felder mit zwei Zuständen.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Darstellung** — Legt fest, ob der Baustein als Schalter (Switch) oder als Checkbox angezeigt wird.
2. **Standardwert** — Der vorausgewählte Wert beim Erstellen eines neuen Eintrags (an/aus).
3. **Darstellung im Ausdruck** — Legt fest, wie der Schalter in PDF-Ausdrucken dargestellt wird:
   - _Ja/Nein_ — Zeigt "Ja" oder "Nein" an
   - _Checkbox_ — Zeigt eine angekreuzte oder leere Checkbox an
   - _Bezeichnung oder nichts_ — Zeigt die Bezeichnung des Bausteins an, wenn aktiviert, sonst nichts
   - _Anderer Text oder nichts_ — Zeigt einen benutzerdefinierten Text an, wenn aktiviert, sonst nichts
4. **Text im Ausdruck** — Der benutzerdefinierte Text für die Ausdruck-Option _Anderer Text oder nichts_. Nur bei dieser Option verfügbar.

## Hinweise

- Der Schalter kann als Bedingung für das bedingte Anzeigen anderer Bausteine verwendet werden (z. B. „Zeige Baustein X an, wenn Schalter aktiviert ist").

## Verwandte Bausteine

- [Drop-Down](/docs/bricks/input/drop-down) — Für Auswahl aus mehr als zwei Möglichkeiten
- [Segmente](/docs/bricks/input/segments) — Für visuelle Auswahl aus wenigen Optionen
