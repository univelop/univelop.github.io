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
3. **Heutiges Datum als Startwert** — Setzt beim Erstellen eines neuen Eintrags automatisch das aktuelle Datum (und ggf. die aktuelle Uhrzeit).
4. **Frühestmögliches Datum** — Formel, die das früheste auswählbare Datum bestimmt. Unterstützt Datumsformeln für dynamische Grenzen (z. B. „mindestens 30 Tage im Voraus").
5. **Spätestmögliches Datum** — Formel, die das späteste auswählbare Datum bestimmt. Unterstützt Datumsformeln für dynamische Grenzen.
6. **Text in rot darstellen** — Zeigt das Datum in roter Schrift an.
7. **Bedingung für roten Text** — Formel, die bestimmt, unter welchen Bedingungen das Datum rot dargestellt wird. Nur verfügbar wenn _Text in rot darstellen_ aktiviert ist.

## Hinweise

- Neben dem Datumswert stehen automatisch auch die Kalenderwoche und der Monat als abgeleitete Werte zur Verfügung, z. B. in Formeln.
- Für eine kalendarische Darstellung mehrerer Datumseinträge eignet sich der Baustein [Kalender](/docs/bricks/advanced/calendar).

## Verwandte Bausteine

- [Datumsspanne](/docs/bricks/input/date-range) — Für einen Zeitraum mit Start- und Enddatum
- [Zeitspanne](/docs/bricks/input/time-span) — Für Von-Bis-Uhrzeiten mit Stundenberechnung
- [Kalender](/docs/bricks/advanced/calendar) — Für kalendarische Darstellung von Datumswerten
