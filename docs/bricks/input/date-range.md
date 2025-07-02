---
layout: title
title: Datumsspanne
parent: Formular-Bausteine
grand_parent: Bausteine
nav_order: 8
nav_exclude: true
---

Mit dem Baustein _Datum_ kann ein Einzeldatum für den Datensatz eingetragen werden. Bei Bedarf auch inklusive Uhrzeit und Anzeige des Wochentags.

![date](\old_assets\record-spec-settings\1date.png 'date')

Das heutige Datum ist immer voreingestellt.
Die Uhrzeit können Sie im Bearbeitungsmodus entweder händisch eintragen, oder über das Symbol anklicken.

Der Baustein eignet sich für sämtliche datumsabhängige Datensätze, z.B. Termine oder Erstellungsdatum.
Zwecks einer besseren Darstellung einzelner Einträge bietet sich ggf. der Einsatz des Baustein _Kalender_ an.

Über die Einstellung _frühestmögliches Datum_ kann eingestellt werden, welches Datum als erstes ausgewählt werden kann.
Ist hier bspw. der 15.06.2021 angegeben, kann im Baustein kein Datum vor dem 15.06.2021 gewählt werden.
Die Einstellung _spätestmögliches Datum_ gibt das letztmögliche Datum an.
Ist hier bspw. der 16.06.2021 angegeben, kann im Baustein kein Datum nach dem 16.06.2021 gewählt werden.
Sind beide Einstellungen wie genannt gesetzt, können nur der 15.06.2021 und der 16.06.2021 gewählt werden.
Beide Einstellungen sind als Datumsformel anzugeben. Somit kann z.B. für die Beantragung von Urlaub die Datumsangabe auf Tage beschränkt werden, die mindestens 30 Tage im Voraus, aber noch im selben Jahr liegen.
