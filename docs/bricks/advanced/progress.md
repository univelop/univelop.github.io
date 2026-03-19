---
layout: title
title: Fortschritt
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 37
---

Mit dem Baustein _Fortschritt_ wird ein Fortschrittsbalken oder ein Tachometer-Diagramm angezeigt, das einen aktuellen Wert im Verhältnis zu einem Minimum und einem Maximum visualisiert. Alle drei Werte werden über Formeln berechnet und aktualisieren sich automatisch, wenn sich verknüpfte Bausteine ändern. Typische Einsatzbereiche sind der Anteil erledigter Aufgaben, ein gemessener Füllstand oder der Projektfortschritt in Prozent.

## Funktionsweise

Der Baustein berechnet die drei Formeln (_Aktueller Wert_, _Minimum_, _Maximum_) und stellt das Ergebnis grafisch dar. Der Fortschrittszeiger wird auf den Bereich zwischen Minimum und Maximum begrenzt – Werte außerhalb dieses Bereichs werden an der jeweiligen Grenze dargestellt.

In der Listenansicht erscheint der Baustein als kompakter Balken (linear) oder als kleines Tachometer (radial) ohne Beschriftungen, um Platz zu sparen.

## Einstellungen

Allgemeine Einstellungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

### Werte

1. **Aktueller Wert** — Eine Formel, die den anzuzeigenden Fortschrittswert berechnet.
2. **Minimum** — Eine Formel, die den Startwert der Skala definiert (z. B. `0`).
3. **Maximum** — Eine Formel, die den Endwert der Skala definiert (z. B. `100`).

### Optionen

4. **Stil** — Legt die Darstellungsform fest: _Linear_ zeigt einen horizontalen Fortschrittsbalken mit Skala unterhalb, _Radial_ ein halbkreisförmiges Tachometer-Diagramm.
5. **Balkenfarbe** — Die Farbe des Fortschrittsbalkens bzw. -bogens. Zur Auswahl stehen die Farben des Arbeitsbereichs.
6. **Anzahl Schritte** — Die Anzahl der Intervalle auf der Skala (0–10). Bei 10 Schritten werden 11 Beschriftungen angezeigt (Start, alle Zwischenwerte und Ende). Bei 0 Schritten erscheinen nur Start- und Endwert.

### Format

7. **Nachkommastellen** — Anzahl der angezeigten Dezimalstellen. Wird kein Wert angegeben, werden die Nachkommastellen automatisch bestimmt.
8. **Tausendertrennzeichen** — Zeigt bei großen Zahlen ein Tausendertrennzeichen an.
9. **Einheit anzeigen** — Aktiviert die Anzeige einer Einheit neben den Werten.
10. **Einheit** — Die Einheit, die hinter den Werten angezeigt wird (z. B. `kg`, `%`, `°C`). Nur sichtbar, wenn _Einheit anzeigen_ aktiv ist.

## Hinweise

- Minimum und Maximum müssen voneinander verschieden sein, und das Minimum muss kleiner als das Maximum sein. Ist dies nicht der Fall, zeigt der Baustein eine Fehlermeldung an.
- Sind alle drei Formeln leer oder ergeben `0`, zeigt der Baustein einen Hinweis an, dass noch keine Werte konfiguriert sind.
- Der Baustein speichert keinen eigenen Wert, sondern berechnet den Fortschritt bei jeder Anzeige neu aus den angegebenen Formeln.

## Verwandte Bausteine

- [Zahlenformel](/docs/bricks/advanced/number-expression) — Für die Berechnung numerischer Werte, die als Fortschrittswert verwendet werden können
- [Checkliste](/docs/bricks/advanced/checklist) — Für aufgabenbasierte Fortschrittsverfolgung
- [Status](/docs/bricks/advanced/status) — Für phasenbasierte Prozessdarstellung
