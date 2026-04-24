---
layout: title
title: Datum
parent: Formular-Bausteine
grand_parent: Bausteine
nav_order: 7
redirect_from:
    - /docs/record-spec-settings/grand-childs-form/date.html
---

Mit dem Baustein _Datum_ kann ein einzelnes Datum erfasst werden, optional inklusive Uhrzeit. Er eignet sich für Termine, Fristen, Erstellungsdaten und alle weiteren datumsabhängigen Felder.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Inklusive Uhrzeit** — Erweitert den Baustein um eine Zeiteingabe zusätzlich zum Datum.
2. **Wochentag anzeigen** — Zeigt den Wochentag neben dem Datum an.
3. **Aktuelles Datum standardmäßig setzen** — Setzt beim Erstellen eines neuen Eintrags automatisch das aktuelle Datum (und ggf. die aktuelle Uhrzeit).
4. **Frühestmögliches Datum** — Formel, die das früheste auswählbare Datum bestimmt. Unterstützt Datumsformeln für dynamische Grenzen.
5. **Spätestmögliches Datum** — Formel, die das späteste auswählbare Datum bestimmt. Unterstützt Datumsformeln für dynamische Grenzen.
6. **Textfarbe rot** — Zeigt das Datum in roter Schrift an.
7. **Textfarbe Bedingung** — Formel, die bestimmt, unter welchen Bedingungen das Datum rot dargestellt wird. Nur verfügbar wenn _Textfarbe rot_ aktiviert ist.

## Hinweise

- Mit einem Klick auf das Kalender-Icon wird der aktuelle Tag automatisch in den Baustein _Datum_ übernommen. 
- Neben dem Datumswert stehen automatisch auch die Kalenderwoche und der Monat als abgeleitete Werte zur Verfügung, z. B. in Formeln.
- Für eine kalendarische Darstellung mehrerer Datumseinträge eignet sich der Baustein [Kalender](/docs/bricks/advanced/calendar).

## Funktionsweise

Wollen wir eine dynamische Datenauswahl einstellen - z. B. nur Daten die 30 Tage im Voraus des aktuellen Tages liegen - können wir dies über _Frühestmögliches Datum_ im Design Modus einstellen. Dazu öffnen wir den Formeleditor des Datenbausteins und geben unsere benötigte Formeln ein. 
![alt text](/assets/bricks/input/date-picker-editor.png)
Im Auswahl Dialog des sind anschließend nur die erlaubten Daten auswählbar. Alle nicht auswählbaren Daten sind ausgegraut. 
![alt text](/assets/bricks/input/date-picker-dialog.png)

## Verwandte Bausteine

- [Datumsspanne](/docs/bricks/input/date-range) — Für einen Zeitraum mit Start- und Enddatum
- [Zeitspanne](/docs/bricks/input/time-span) — Für Von-Bis-Uhrzeiten mit Stundenberechnung
- [Kalender](/docs/bricks/advanced/calendar) — Für kalendarische Darstellung von Datumswerten
