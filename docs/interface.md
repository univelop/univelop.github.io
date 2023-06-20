---
layout: default
title: Schnittstellen
nav_order: 10
---

# <span style="color:#0b5394">Schnittstellen</span>

## <span style="color:#0b5394">REST API</span>
Neben dem In- und Export von Exceldateien bietet Univelop ebenfalls eine API-Schnittstelle um mit Fremdsystemen Daten austauschen zu können. Abgerufen werden können alle Datensätze aus einer Kachel. Ebenso das Zurückschreiben von Daten in jeden einzelnen Baustein ist über die API-Schnittstelle möglich. Neben dem direkten Lesen und Schreiben von Einträgen in Kacheln können [Workflows](/docs/workflows/workflow.html) gestartet werden.

Wir arbeiten zur Zeit an einer neuen Version der REST-API. Diese befindet sich noch in beta und wird in den nächsten Monaten ausgebaut. In der Dokumentation finden sich alle Spezifikationen und die API lässt sich testen: 

[Univelop REST-API V2](https://app.univelop.de/api/v2/docs)

Die alte Version unser API steht natürlich weiterhin zur Verfügung:

[Univelop REST-API V1](https://app.univelop.de/api/v1/docs)

## <span style="color:#0b5394">Integration von Schnittstellen</span>
Durch die API-Schnittstelle können zum Beispiel auch Analysetools wie PowerBI angebunden werden. Das Abrufen der Daten erfolgt über die Einrichtung einer Datenquelle mit der Angabe, welche Kachel genau ausgewertet werden soll.
