---
layout: title
title: REST-API
parent: Schnittstellen
redirect_from:
    - /docs/interface.html
---

Neben dem In- und Export von Excel Dateien bietet Univelop ebenfalls eine API-Schnittstelle um mit deinen Fremdsystemen Daten austauschen zu können.
Über unsere API kannst du alle Datensätze einer Kachel abrufen, einzelne Datensätze erstellen, jeden einzelnen Baustein eines Datensatzes bearbeiten und löschen.
Dazu kannst du Nutzer erstellen, Push-Benachrichtigungen versenden, und Workflows starten.

Wir arbeiten zur Zeit an einer neuen Version der REST-API. Diese befindet sich noch in beta und wird in den nächsten Monaten ausgebaut. In der Dokumentation finden sich alle Spezifikationen und die API lässt sich testen:

[Univelop REST-API V2](https://app.univelop.de/api/v2/docs)

Die alte Version unser API steht dir natürlich weiterhin zur Verfügung:

[Univelop REST-API V1](https://app.univelop.de/api/v1/docs)

### <span style="color:#0b5394">Verifizierung bei der REST API</span>

Zur Nutzung der REST API wird ein Schlüssel benötigt, um unbefugte Nutzung zu verhindern. Dieser Schlüssel ist in deinem Arbeitsbereich in den Einstellungen unter 'Allgemein' als 'Service Account Key' zu finden.
Genutzt wird dieser bei jeder Abfrage und muss im Header mitgegeben werden (Siehe dazu mehr unter [Univelop REST-API V1](https://app.univelop.de/api/v1/docs)).
Diesen kannst du in den Einstellungen jederzeit neu generieren, falls er aus Sicherheitsgründen geändert werden soll.

## <span style="color:#0b5394">Integration von Schnittstellen</span>

Durch die API-Schnittstelle können zum Beispiel auch Analysetools wie PowerBI angebunden werden. Das Abrufen der Daten erfolgt über die Einrichtung einer Datenquelle mit der Angabe, welche Kachel genau ausgewertet werden soll.
