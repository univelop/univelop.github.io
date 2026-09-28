---
layout: title
title: Bild Upload
parent: Formular-Bausteine
grand_parent: Bausteine
nav_order: 11
redirect_from:
    - /docs/record-spec-settings/grand-childs-form/upload-image.html
---

Mit dem Baustein _Bild Upload_ können Bilder pro Eintrag hochgeladen oder mit der Kamera aufgenommen werden. Auf hochgeladenen Bildern kann direkt gezeichnet und beschriftet werden.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Auf eine Datei beschränken** — Begrenzt die Anzahl an Bildern pro Datensatz auf ein Bild.
2. **Bestehende Datei überschreiben** — Ersetzt das vorhandene Bild beim Hochladen eines neuen, wenn die maximale Anzahl auf 1 gesetzt ist. Nur verfügbar wenn _Auf eine Datei beschränken_ aktiv ist. 
3. **Maximale Anzahl an Bildern** — Maximale Anzahl an Bildern pro Eintrag. Standard: 100. Nur verfügbar wenn _Auf eine Datei beschränken_ nicht aktiv ist. 
4. **Anzahl der Vorschau-Bilder** — Anzahl der in der Vorschau angezeigten Bilder. Standard: 15. Nur verfügbar wenn _Auf eine Datei beschränken_ nicht aktiv ist. 
5. **Neueste zuerst** — Zeigt die zuletzt hochgeladenen Bilder oben an.
6. **Zoom verbieten** — Deaktiviert die Zoom-Funktion beim Öffnen von Bildern.
7. **Qualität** — Bildqualität beim Upload:
   - _Niedrig_ — Komprimiert (Standard)
   - _Mittel_ — Mittlere Komprimierung
   - _Hoch_ — Geringe Komprimierung
   - _Original_ — Keine Komprimierung
8. **Inhalt nicht duplizieren** — Verhindert, dass Bilder beim Duplizieren eines Eintrags mit kopiert werden.
9. **Größe im Ausdruck** — Darstellungsgröße der Bilder im PDF-Ausdruck:
    - _Sehr klein_, _Klein_, _Mittel_ (Standard), _Groß_ — feste Größen
    - _Skalieren_ — Das Bild wird proportional verkleinert oder vergrößert, sodass es vollständig in die unter _Breite_ und _Höhe_ angegebenen Maße passt, ohne das Seitenverhältnis zu verändern.
    - _Verzerren_ — Das Bild wird exakt auf die angegebenen Maße _Breite_ und _Höhe_ gestreckt oder gestaucht, das Seitenverhältnis wird dabei nicht beibehalten. Ist nur eine der beiden Maßangaben gesetzt, verhält sich diese Option wie _Skalieren_.
10. **Breite** und **Höhe** — Maße in cm (0–50) für die Optionen _Skalieren_ und _Verzerren_. Nur verfügbar wenn _Größe im Ausdruck_ auf _Skalieren_ oder _Verzerren_ gesetzt ist.
11. **Anordnung im Ausdruck** — Anordnung der Bilder im Ausdruck: _Nebeneinander_ (Standard) oder _Untereinander_.
12. **Favoriten aktivieren** — Blendet pro Bild einen Stern zum Markieren als Favorit ein. Favorisierte Bilder werden in der Anzeige nach vorne sortiert.
13. **Wasserzeichen: Zeitstempel** — Fügt Datum und Uhrzeit als Wasserzeichen auf dem Bild ein.
14. **Wasserzeichen: GPS Position** — Fügt die GPS-Koordinaten als Wasserzeichen auf dem Bild ein.
15. **Koordinatenformat** — Format der Standort-Koordinaten: _Dezimalgrad_ oder _Grad, Minute, Sekunde_. Nur verfügbar wenn _Wasserzeichen: GPS Position_ aktiv ist.
16. **Wasserzeichen-Position** — Position des Wasserzeichens auf dem Bild (unten links, unten rechts, oben links, oben rechts). Nur verfügbar wenn _Wasserzeichen: Zeitstempel_ oder _Wasserzeichen: GPS Position_ aktiv ist.

## Hinweise

- In der App auf iOS und Android kann direkt auf Bildern gezeichnet werden. Beim Öffnen eines Bildes gibt es ein Zeichen-Icon mit Funktionen für Pinsel, Text, Formen, Radierer sowie Farb- und Strichstärkenanpassung.
- Der Baustein ist sowohl online- als auch offlinefähig.

## Verwandte Bausteine

- [Datei Upload](/docs/bricks/input/file-picker) — Für allgemeine Dateien aller Art
- [Bild](/docs/bricks/basic/image) — Für ein festes, unveränderliches Bild
