---
layout: title
title: Zeitspanne
parent: Formular-Bausteine
grand_parent: Bausteine
nav_order: 9
redirect_from:
    - /docs/record-spec-settings/grand-childs-form/interval.html
---

Durch den Baustein _Zeitspanne_ besteht die Möglichkeit eine Zeitspanne, auch inklusive Pausen, einzugeben.
Anders als Datum + Uhrzeit rechnet dieser Baustein (Von - Bis) auch die Stunden und Minuten der erfassten Zeitspanne aus.

![interval](\old_assets\record-spec-settings\1interval.png 'interval')

In Kombination mit dem
Baustein _Zahlenformel_
kann ein Dezimalwert von z. B. Arbeitsstunden errechnet werden.

{: .tip }
Verwende die Formel `formatDate(addMinutes(today(),round(time_span_break_time * 60)),"HH:mm")` um die Pause im Format HH:mm auszugeben.
