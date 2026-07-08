---
layout: title
title: Datumsspanne
parent: Formular-Bausteine
grand_parent: Bausteine
nav_order: 8
redirect_from:
    - /docs/record-spec-settings/grand-childs-form/date-range.html
---

Mit dem Baustein _Datumsspanne_ kann ein Zeitraum als Start- und Enddatum erfasst werden. Eine Datumsspanne kann zwischen 1 und 366 Tagen lang sein. Der Baustein kann nur einmal pro Liste verwendet werden.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Größtmögliche Datumsspanne in Tagen** — Maximaler Zeitraum in Tagen (zwischen 1–366). Standard: 366 Tage. Kann für individuelle Anwendungsfälle auf einen kleineren Zeitraum eingeschränkt werden.
2. **Frühestmögliches Datum** — Formel, die das früheste auswählbare Datum bestimmt. Das errechnete Datum muss vor oder gleich dem spätestmöglichen Datum sein.
3. **Spätestmögliches Datum** — Formel, die das späteste auswählbare Datum bestimmt. Das errechnete Datum muss nach oder gleich dem frühestmöglichen Datum sein.

## Hinweise

- Neben Start- und Enddatum stehen automatisch auch Listen aller enthaltenen Tage, Kalenderwochen und Monate als abgeleitete Werte zur Verfügung.
- Pro Liste kann nur ein Baustein _Datumsspanne_ verwendet werden.

## Funktionsweise 

Wollen wir eine dynamische Datenauswahl einstellen - z. B. nur Datesnspannen die 30 Tage im Voraus des aktuellen Tages liegen - können wir dies über _Frühestmögliches Datum_ im Design Modus einstellen. Dazu öffnen wir den Formeleditor des Datenbausteins und geben unsere benötigte Formeln ein. 
![alt text](/assets/bricks/input/date-picker-editor.png)
Im Auswahl Dialog des sind anschließend nur die erlaubten Daten auswählbar. Alle nicht auswählbaren Daten sind ausgegraut. 
![alt text](/assets/bricks/input/date-range-dialog.png)

## Verwandte Bausteine

- [Datum](/docs/bricks/input/date-picker) — Für ein einzelnes Datum
- [Zeitspanne](/docs/bricks/input/time-span) — Für Von-Bis-Uhrzeiten innerhalb eines Tages
- [Terminplaner](/docs/bricks/advanced/scheduler) — Für kalendarische Planung über Datumsspannen
