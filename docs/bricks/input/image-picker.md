---
layout: title
title: Bild Upload
parent: Formular-Bausteine
grand_parent: Bausteine
nav_order: 11
redirect_from:
    - /docs/record-spec-settings/grand-childs-form/upload-image.html
---

Mit dem Baustein _Bild Upload_ können Bilder pro Eintrag hochgeladen oder mit der Kamera aufgenommen werden. Auf hochgeladenen Bildern kann direkt gezeichnet und annotiert werden.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Maximale Anzahl** — Maximale Anzahl an Bildern pro Eintrag. Standard: 100.
2. **Einzelnes Bild überschreiben** — Ersetzt das vorhandene Bild beim Hochladen eines neuen, wenn die maximale Anzahl auf 1 gesetzt ist.
3. **Neueste zuerst** — Zeigt die zuletzt hochgeladenen Bilder oben an.
4. **Zoom verbieten** — Deaktiviert die Zoom-Funktion beim Öffnen von Bildern.
5. **Qualität** — Bildqualität beim Upload:
   - _Niedrig_ — Komprimiert (Standard)
   - _Mittel_ — Mittlere Komprimierung
   - _Hoch_ — Geringe Komprimierung
   - _Original_ — Keine Komprimierung
6. **Bilder in Vorschau** — Anzahl der in der Vorschau angezeigten Bilder. Standard: 15.
7. **Beim Duplizieren nicht kopieren** — Verhindert, dass Bilder beim Duplizieren eines Eintrags mit kopiert werden.
8. **Wasserzeichen: Standort** — Fügt die GPS-Koordinaten als Wasserzeichen auf dem Bild ein.
9. **Koordinatenformat** — Format der Standort-Koordinaten: _Dezimalgrad_ oder _Grad, Minute, Sekunde_.
10. **Wasserzeichen: Zeitstempel** — Fügt Datum und Uhrzeit als Wasserzeichen auf dem Bild ein.
11. **Wasserzeichen-Position** — Position des Wasserzeichens auf dem Bild (unten links, unten rechts, oben links, oben rechts).

### Ausdruck-Einstellungen

12. **Größe im Ausdruck** — Darstellungsgröße der Bilder im PDF-Ausdruck: _Klein_, _Mittel_ (Standard), _Groß_.
13. **Anordnung im Ausdruck** — Anordnung der Bilder im Ausdruck: _Nebeneinander_ (Standard) oder _Untereinander_.

## Hinweise

- In der App auf iOS und Android kann direkt auf Bildern gezeichnet werden. Beim Öffnen eines Bildes gibt es ein Zeichen-Icon mit Funktionen für Pinsel, Text, Formen, Radierer sowie Farb- und Strichstärkenanpassung.
- Der Baustein ist sowohl online- als auch offlinefähig.

## Verwandte Bausteine

- [Datei Upload](/docs/bricks/input/file-picker) — Für allgemeine Dateien aller Art
- [Bild](/docs/bricks/basic/image) — Für ein festes, unveränderliches Bild
