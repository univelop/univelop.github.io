---
layout: title
title: Zeitspanne
parent: Formular-Bausteine
grand_parent: Bausteine
nav_order: 9
redirect_from:
    - /docs/record-spec-settings/grand-childs-form/interval.html
---

Mit dem Baustein _Zeitspanne_ kann ein Zeitraum als Von- und Bis-Uhrzeit erfasst werden. Die Dauer wird automatisch in Stunden und Minuten berechnet, optional inklusive Pausenzeit.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Pausen erfassen** — Aktiviert ein zusätzliches Feld zur Erfassung der Pausenzeit. Die Pause wird von der Gesamtdauer abgezogen.

## Hinweise

- Die Gesamtdauer wird automatisch als Dezimalwert in Stunden berechnet und steht in Formeln zur Verfügung.
- Die Pausenzeit wird intern in Sekunden gespeichert. Um sie im Format HH:mm auszugeben, kann folgende Formel verwendet werden: `formatDate(addMinutes(today(), round(zeitspanne_break_time * 60)), "HH:mm")`
- Für eine timer-basierte Zeiterfassung mit Start/Stopp-Funktion den Baustein [Timer](/docs/bricks/input/timer) verwenden.

## Verwandte Bausteine

- [Timer](/docs/bricks/input/timer) — Für timer-basierte Zeiterfassung mit Start/Stopp
- [Datum](/docs/bricks/input/date-picker) — Für ein einzelnes Datum mit optionaler Uhrzeit
- [Datumsspanne](/docs/bricks/input/date-range) — Für mehrtägige Zeiträume
