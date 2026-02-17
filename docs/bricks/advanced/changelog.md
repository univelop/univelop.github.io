---
layout: title
title: Änderungsprotokoll
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 29
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/change-log.html
---

Der Baustein _Änderungsprotokoll_ zeichnet alle Änderungen auf, die in einem Eintrag vorgenommen werden. Jede Änderung wird mit Benutzer, Datum, betroffenem Baustein sowie altem und neuem Wert protokolliert.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

Dieser Baustein besitzt keine zusätzlichen bausteinspezifischen Einstellungen.

## Funktionsweise

Das Änderungsprotokoll zeichnet bei jeder Änderung folgende Informationen auf:

- **Benutzer** — Wer die Änderung vorgenommen hat
- **Datum** — Wann die Änderung durchgeführt wurde
- **Baustein** — Welcher Baustein geändert wurde
- **Wertevergleich** — Alter und neuer Wert bei Änderungen, Plus-Zeichen bei neuen Daten, Eimer-Symbol bei entfernten Daten

Per Klick auf „Änderungsprotokoll" wird die vollständige Änderungshistorie angezeigt.

## Hinweise

- Der Baustein kann auch nachträglich eingefügt werden. Bisherige Änderungen werden beim Einfügen rekonstruiert und angezeigt.
- Wird in einer Unterliste die Einstellung „Diesen Datensatz löschen/duplizieren, wenn verknüpfter Datensatz gelöscht oder dupliziert wird" aktiviert, ist das Änderungsprotokoll der Unterliste über den Mutter-Datensatz abrufbar.
- Werden Werte über den Baustein _Datensatz_ mit der Option „synchron halten" übernommen, werden Änderungen am Stammdatensatz ebenfalls protokolliert, inklusive der betroffenen Liste.
