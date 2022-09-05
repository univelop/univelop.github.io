---
layout: default
title: Schnittstellen
nav_order: 9
---

# <span style="color:#0b5394">Schnittstellen</span>

## <span style="color:#0b5394">REST API</span>
Neben dem In- und Export von Exceldateien bietet Univelop ebenfalls eine API-Schnittstelle um mit Fremdsystemen Daten austauschen zu können.
Abgerufen werden können alle Datensätze aus einer Kachel. Ebenso das Zurückschreiben von Daten in jeden einzelnen Baustein ist über die API-Schnittstelle möglich. Hilfreich ist hierzu der [Baustein *Webhook*](/docs/record-spec-settings/grand-child-expanded/webhook.html), der einen Request an einen Server abgeben kann.

Dafür gibt es auch [eine Dokumentationsseite](https://app.univelop.de/api/docs/). Dort lassen sich alle Details zur REST-API finden. Bei Interesse an der Integration der REST-API sprecht uns gerne darauf an.

## <span style="color:#0b5394">Integration von Schnittstellen</span>
Durch die API-Schnittstelle können zum Beispiel auch Analysetools wie PowerBI angebunden werden. Das Abrufen der Daten erfolgt über die Einrichtung einer Datenquelle mit der Angabe, welche Kachel genau ausgewertet werden soll.
