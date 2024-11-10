---
layout: default
title: Kalenderfreigaben
nav_order: 101
---

<!-- cspell:ignore Kalenderanwendung Kalenderanwendungen Kalenderfreigabe -->
# <span style="color:#0b5394">**Kalenderfreigaben**</span>

Kalenderfreigaben ermöglichen es, Datensätze aus Listen direkt in persönlichen Kalendern anzuzeigen. Je nach Kalenderanwendung werden die Datensätze dabei grundsätzlich ein- bis zweimal täglich aktualisiert und so über Änderungen aktuell gehalten. Die Funktion von Kalenderfreigaben ist auch als Kalender-Abonnement bekannt. Da Kalenderfreigaben es ermöglichen Datensätze aus dem Arbeitsbereich ohne weitere Authentifizierung abzurufen, können diese nur von Admins und Besitzern eingerichtet werden.

### <span style="color:#0b5394">**Kompatibilität und Einrichtung**</span>

Kalenderfreigaben werden von allen größeren Kalenderanwendungen unterstützt. In einigen Kalenderanwendungen kann das Aktualisierungsintervall manuell angepasst werden. So kann im **Apple Kalender** zum Beispiel eingestellt werden, ob sich die Kalenderfreigabe 5-minütlich bis einmal wöchentlich aktualisieren soll. 

In **Outlook** hingegen kann die Aktualisierung der Kalenderfreigabe neben den automatischen Aktualisierungen auch manuell angestoßen werden. **Google Kalender** unterstützt weder noch. Bei diesem muss sich auf die automatischen Aktualisierungen verlassen werden.

Als Richtwert kann davon ausgegangen werden, dass Kalenderfreigaben ein- bis zweimal am Tag aktualisiert werden. Eine Garantie darauf geben die Kalenderanwendungen allerdings nicht.

Nachfolgend offizielle Anleitungen zur Einrichtung von Kalenderfreigaben bei den drei namentlich genannten Kalenderanwendungen.

- [Apple Kalender Anleitung](https://support.apple.com/en-gb/guide/calendar/icl1022/mac)
- [Google Kalender Anleitung](https://support.google.com/calendar/answer/37100?hl=en&co=GENIE.Platform%3DDesktop)
- [Outlook Anleitung](https://support.microsoft.com/en-us/office/import-or-subscribe-to-a-calendar-in-outlook-com-or-outlook-on-the-web-cff1429c-5af6-41ec-a5b4-74f2c278e98c)

### <span style="color:#0b5394">**Event Eigenschaften**</span>

Die folgenden Event Eigenschaften werden aktuell unterstützt und können für Kalenderfreigaben konfiguriert werden. 

1. **Event Startzeit (Pflichtfeld, Datum)**: Startzeitpunkt des Events
1. **Event Endzeit (Pflichtfeld, Datum)**: Endzeitpunkt des Events
1. **Event Titel (Pflichtfeld, Text)**: Titel des Events
1. **Ganztages-Event (Ja/Nein/Formel)**: Kann entweder auf **Ja**, **Nein** oder **Formel** gestellt werden. Im Falle einer Formel, muss diese True oder False zurückgeben
1. **Event Beschreibung (Optional, Text)**: Beschreibung des Events
1. **Event Standort (Optional, Text)**: Ort des Events

Die Eigenschaften können gleichermaßen ausgefüllt werden wie Formel-Bausteine direkt im Datensatz. Als Eingabe werden dementsprechend Technische Namen von Bausteinen oder optional Formeln erwartet.

{: .warning }
Events, bei denen die Formel der Startzeit, Endzeit oder des Titels keinen Wert zurückgibt, werden nicht im Kalender angezeigt. Gleichermaßen darf die Endzeit nicht vor der Startzeit liegen.

### <span style="color:#0b5394">**Kosten und Limitierungen**</span>

Für das Abrufen von Kalenderfreigaben wird der gleiche **Credit**-Satz berechnet, wie auch für das Abrufen von Daten über die Univelop **REST-API V2**. Da Kalenderfreigaben für jeden Nutzer, der sie eingebunden hat, in den eingestellten Intervallen oder den von der Kalenderanwendung festgelegten Zeitabständen abgerufen werden, sollte die Anzahl der zurückgegebenen Datensätze möglichst gering gehalten werden.

Hierfür kann beispielsweise der folgende Filter verwendet werden, welcher die ausgegebenen Datensätze auf die letzte, die aktuelle sowie die folgende Woche limitiert:

`Startzeit - Woche` `in` `[subtractWeeks(currentWeek,1),currentWeek,addWeeks(currentWeek,1)]`

Aus technischer Perspektive kann eine Kalenderfreigabe maximal **3000 Datensätze** zurückgeben. Von diesem Limit sollte aus genannten Gründen allerdings kein Gebrauch gemacht werden. Auf wie viele Bausteine in den Event Eigenschaften zugegriffen werden kann, ist nicht begrenzt.