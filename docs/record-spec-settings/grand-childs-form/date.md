---
layout: default
title: Datum
parent: Formular-Bausteine
grand_parent: Die Bausteine und deren Einstellungen
nav_order: 5
---

# <span style="color:#0b5394"><span class="material-icons">calendar_today</span> **Baustein *Datum***</span>

Mit dem Baustein *Datum* kann ein Einzeldatum für den Datensatz eingetragen werden. Bei Bedarf auch inklusive Uhrzeit und Anzeige des Wochentags.

![date](\assets\record-spec-settings\1date.png "date")

Das heutige Datum ist immer voreingestellt. 
Die Uhrzeit können Sie im Bearbeitungsmodus entweder händisch eintragen, oder über das Symbol anklicken.

Der Baustein eignet sich für sämtliche datumsabhängige Datensätze, z.B. Termine oder Erstellungsdatum.
Zwecks einer besseren Darstellung einzelner Einträge bietet sich ggf. der Einsatz des [Baustein *Kalender*](/docs/record-spec-settings/grand-child-expanded/calender.html) an.

Über die Einstellung *frühestmögliches Datum* kann eingestellt werden, welches Datum als erstes ausgewählt werden kann.
Ist hier bspw. der 15.06.2021 angegeben, kann im Baustein kein Datum vor dem 15.06.2021 gewählt werden.
Die Einstellung *spätestmögliches Datum* gibt das letztmögliche Datum an.
Ist hier bspw. der 16.06.2021 angegeben, kann im Baustein kein Datum nach dem 16.06.2021 gewählt werden.
Sind beide Einstellungen wie genannt gesetzt, können nur der 15.06.2021 und der 16.06.2021 gewählt werden.
Beide Einstellungen sind als Datumsformel anzugeben. Somit kann z.B. für die Beantragung von Urlaub die Datumseingabe auf Daten beschränkt werden, die mindestens 30 Tage im Voraus liegen, aber noch im selben Jahr liegen.