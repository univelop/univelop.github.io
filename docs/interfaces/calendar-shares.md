---
layout: title
title: Kalenderfreigaben
parent: Schnittstellen
redirect_from:
    - /docs/calendar-shares.html
nav_order: 2
---

Kalenderfreigaben ermöglichen es, Datensätze aus Listen als Termine in persönlichen Kalendern anzuzeigen. Die Funktion ist auch als Kalender-Abonnement bekannt. Da Kalenderfreigaben Daten ohne zusätzliche Authentifizierung bereitstellen, können sie nur von Besitzern und Administratoren eingerichtet werden.

## Kompatibilität

Kalenderfreigaben werden von allen gängigen Kalenderanwendungen unterstützt:

| Anwendung | Aktualisierung | Manuelle Aktualisierung |
|---|---|---|
| **Apple Kalender** | Intervall einstellbar (5 min – wöchentlich) | ja |
| **Outlook** | Automatisch + manuell | ja |
| **Google Kalender** | Automatisch | nein |

Als Richtwert kann davon ausgegangen werden, dass Kalenderfreigaben **ein- bis zweimal täglich** aktualisiert werden.

Offizielle Einrichtungsanleitungen:
- [Apple Kalender](https://support.apple.com/en-gb/guide/calendar/icl1022/mac)
- [Google Kalender](https://support.google.com/calendar/answer/37100?hl=en&co=GENIE.Platform%3DDesktop)
- [Outlook](https://support.microsoft.com/en-us/office/import-or-subscribe-to-a-calendar-in-outlook-com-or-outlook-on-the-web-cff1429c-5af6-41ec-a5b4-74f2c278e98c)

## Event-Eigenschaften

Für jede Kalenderfreigabe können folgende Eigenschaften konfiguriert werden. Als Eingabe werden technische Namen von Bausteinen oder Formeln erwartet.

1. **Event Startzeit** (Pflicht, Datum) — Startzeitpunkt des Events
2. **Event Endzeit** (Pflicht, Datum) — Endzeitpunkt des Events
3. **Event Titel** (Pflicht, Text) — Titel des Events
4. **Ganztages-Event** (Ja/Nein/Formel) — bei Formel muss `true` oder `false` zurückgegeben werden
5. **Event Beschreibung** (optional, Text) — Beschreibung des Events
6. **Event Standort** (optional, Text) — Ort des Events

{: .warning }
Events, bei denen Startzeit, Endzeit oder Titel keinen Wert zurückgeben, werden nicht im Kalender angezeigt. Die Endzeit darf nicht vor der Startzeit liegen.

## Credits und Limitierungen

Für das Abrufen von Kalenderfreigaben wird der gleiche Credit-Satz berechnet wie für die REST-API V2. Da jeder Nutzer, der die Freigabe eingebunden hat, regelmäßige Abrufe auslöst, sollte die Anzahl der zurückgegebenen Datensätze möglichst gering gehalten werden.

Ein empfohlener Filter, der nur die aktuelle, vorherige und nächste Woche zurückgibt:

`Startzeit - Woche` `in` `[subtractWeeks(currentWeek,1),currentWeek,addWeeks(currentWeek,1)]`

Technisches Limit: maximal **3000 Datensätze** pro Kalenderfreigabe.
