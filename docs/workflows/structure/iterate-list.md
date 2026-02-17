---
layout: workflow-step
title: Iteriere über Werte
parent: Struktur
grand_parent: Workflows
icon: format_list_numbered
nav_order: 5
redirect_from:
    - /docs/workflows/grand-childs-bricks/iterate-values.html
---

Mit dem Schritt _Iteriere über Werte_ wird eine Liste von Werten durchlaufen. Für jeden Wert in der Liste werden die inneren Schritte einmal ausgeführt. Der aktuelle Wert ist über den technischen Namen des Schritts verfügbar.

## Einstellungen

1. **Wert** — Eine explizite Liste (z. B. `[0,1,2,3]`, `[a,b,c]`) oder eine Formel, die eine Liste liefert.
2. **Abbruchbedingung** — _Optional._ Eine Ja/Nein-Formel. Ergibt sie `true`, wird die Iteration vorzeitig beendet.
3. **Bei Fehler fortfahren** — Wenn aktiviert, wird die Iteration nach einem Fehler in einem Durchlauf mit dem nächsten Wert fortgesetzt, statt den Workflow abzubrechen.

## Funktionsweise

Der Schritt enthält einen inneren Bereich, in den weitere Schritte platziert werden können. Für jedes Element der Liste werden diese inneren Schritte ausgeführt. Der aktuelle Wert der Iteration ist unter dem technischen Namen des Schritts zugreifbar.

**Beispiel:** Bei einer Iteration über `[10, 20, 30]` mit dem technischen Namen `wert` liefert `wert` im ersten Durchlauf `10`, im zweiten `20` und im dritten `30`.

## Hinweise

- Verschachtelungen sind möglich — ein _Iteriere über Werte_-Schritt kann einen weiteren enthalten.
- Für die Iteration über Datensätze einer Liste gibt es den spezialisierten Schritt [Iteriere über Einträge](/docs/workflows/record-loading/iterate-records).
- Verfügbar in: Client-Automatisierung, Server-Automatisierung.
- Dieser Schritt verbraucht keine [Credits](/docs/credits).
