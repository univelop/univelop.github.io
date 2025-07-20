---
layout: title
title: Timer
parent: Formular-Bausteine
grand_parent: Bausteine
nav_order: 10
redirect_from:
    - /docs/record-spec-settings/grand-childs-form/timer.html
---

Durch den Baustein _Timer_ besteht die Möglichkeit, eine Zeitspanne, genau wie beim [Baustein _Zeitspanne_](), inklusive Pausen zu erfassen.
Dabei wird über den Start-Button die Aufzeichnung angestoßen. Beim Stopp der Aufzeichnung wird die gesamte aufgezeichnete Dauer inkl. Start- und Endzeit
erfasst. Wenn über die Einstellung auch Pausen mit aufgezeichnet werden, so können diese durch das Pausieren des Timers aufgezeichnet werden. Dabei wird
die Erfassung der Hauptzeit gestoppt, intern aber die Dauer der Pause weiter aufgezeichnet.
Nach dem Stopp wird dann neben der aufgezeichneten Zeit auch die
Dauer der Pausen angezeigt.

{: .tip }
Verwende die Formel `formatDate(addMinutes(today(),round(timer_break_time * 60)),"HH:mm")` um die Pause im Format HH:mm auszugeben.
