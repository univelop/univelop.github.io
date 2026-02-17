---
layout: title
title: Timer
parent: Formular-Bausteine
grand_parent: Bausteine
nav_order: 10
redirect_from:
    - /docs/record-spec-settings/grand-childs-form/timer.html
---

Mit dem Baustein _Timer_ kann eine Zeitspanne über eine Start/Stopp-Funktion erfasst werden. Anders als beim Baustein _Zeitspanne_ wird die Dauer nicht manuell eingegeben, sondern in Echtzeit aufgezeichnet. Der Timer durchläuft die Zustände: Nicht gestartet, Läuft, Pausiert und Abgeschlossen.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Pausen erfassen** — Aktiviert die Möglichkeit, den Timer zu pausieren. Während der Pause wird die Hauptzeit gestoppt, die Pausendauer aber intern weiter aufgezeichnet.
2. **Timer-Dialog verstecken** — Blendet den Timer-Dialog standardmäßig aus.
3. **Dialog anzeigen wenn** — Filterbedingungen, unter denen der Timer-Dialog trotz Verstecken angezeigt wird. Nur verfügbar wenn _Timer-Dialog verstecken_ aktiviert ist.

## Hinweise

- Nach dem Stopp werden Start- und Endzeit sowie die Gesamtdauer und ggf. die Pausendauer gespeichert.
- Die Gesamtdauer steht als Dezimalwert in Stunden in Formeln zur Verfügung.
- Die Pausenzeit wird intern in Sekunden gespeichert. Um sie im Format HH:mm auszugeben: `formatDate(addMinutes(today(), round(timer_break_time * 60)), "HH:mm")`
- Der aktuelle Timer-Status (Nicht gestartet, Läuft, Pausiert, Abgeschlossen) steht als abgeleiteter Wert zur Verfügung.
- Bei Pflichtfeldern gilt der Timer erst als ausgefüllt, wenn er den Status _Abgeschlossen_ hat.

## Verwandte Bausteine

- [Zeitspanne](/docs/bricks/input/time-span) — Für manuelle Eingabe von Von-Bis-Zeiten
- [Datum](/docs/bricks/input/date-picker) — Für einzelne Datums-/Uhrzeitwerte
